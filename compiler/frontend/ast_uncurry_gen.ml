(* Copyright (C) 2020- Hongbo Zhang, Authors of ReScript
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * In addition to the permissions granted to you by the LGPL, you may combine
 * or link a "work that uses the Library" with a publicly distributed version
 * of this file to produce a combined library or application, then distribute
 * that combined work under the terms of your choosing, with no requirement
 * to comply with the obligations normally placed on you by section 4 of the
 * LGPL version 3 (or the corresponding section of a later version of the LGPL
 * should you choose to use a later version).
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA. *)

open Ast_helper

(* Handling `fun [@this]` used in `object [@bs] end` *)
let to_method_callback ~async loc (self : Bs_ast_mapper.mapper) label
    (self_pat : Parsetree.pattern) body : Parsetree.expression_desc =
  let self_pat = self.pat self self_pat in
  (match Ast_pat.is_single_variable_pattern_conservative self_pat with
  | None -> Bs_syntaxerr.err self_pat.ppat_loc Bs_this_simple_pattern
  | Some self -> Stack.push self Js_config.self_stack);
  Bs_syntaxerr.optional_err loc label;
  let rec aux acc (body : Parsetree.expression) =
    match Ast_attributes.process_attributes_rev body.pexp_attributes with
    | Nothing, attrs -> (
      match body.pexp_desc with
      | Pexp_fun {arg_label; lhs = arg; rhs = body; async} ->
        Bs_syntaxerr.optional_err loc arg_label;
        aux ((arg_label, self.pat self arg, attrs, async) :: acc) body
      | _ -> (self.expr self body, acc))
    | _, _ -> (self.expr self body, acc)
  in
  let result, rev_extra_args = aux [(label, self_pat, [], false)] body in
  let body =
    Ext_list.fold_left rev_extra_args result (fun e (label, p, attrs, async) ->
        Ast_helper.Exp.fun_ ~loc ~attrs ~arity:None ~async label None p e)
  in
  let arity = List.length rev_extra_args in
  let body =
    match body.pexp_desc with
    | Pexp_fun f ->
      Ast_async.make_function_async ~async
        {body with pexp_desc = Pexp_fun {f with arity = Some arity; async}}
    | _ -> body
  in
  let arity_s = string_of_int arity in
  Stack.pop Js_config.self_stack |> ignore;
  Parsetree.Pexp_apply
    {
      funct =
        Exp.ident ~loc
          {loc; txt = Ldot (Ast_literal.Lid.js_oo, "unsafe_to_method")};
      args =
        [
          ( Nolabel,
            Exp.constraint_ ~loc
              (Exp.record ~loc
                 [
                   {
                     lid = {loc; txt = Ast_literal.Lid.hidden_field arity_s};
                     x = body;
                     opt = false;
                   };
                 ]
                 None)
              (Typ.constr ~loc
                 {
                   loc;
                   txt =
                     Ldot (Ast_literal.Lid.js_meth_callback, "arity" ^ arity_s);
                 }
                 [Typ.any ~loc ()]) );
        ];
      partial = false;
      transformed_jsx = false;
    }
