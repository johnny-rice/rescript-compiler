(* Copyright (C) 2015 - 2016 Bloomberg Finance L.P.
 * Copyright (C) 2017 - Hongbo Zhang, Authors of ReScript 
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










let jsop_of_comp (cmp : Lam_compat.comparison) : Js_op.binop = 
  match cmp with 
  | Ceq -> EqEqEq (* comparison*)
  | Cneq -> NotEqEq
  | Clt -> Lt 
  | Cgt  -> Gt 
  | Cle -> Le 
  | Cge  -> Ge

let comment_of_tag_info  (x : Lam_tag_info.t) = 
  match x with 
  | Blk_constructor {name = n} -> Some n 
  | Blk_tuple -> Some "tuple"
  | Blk_poly_var _ -> None
  | Blk_record _ -> None
  | Blk_record_inlined {name = ctor} -> Some ctor
  | Blk_record_ext _ -> None
  | Blk_module_export _
  | Blk_module _ ->  
    (* Turn it on next time to save some noise diff*)
    None
  | Blk_extension (* TODO: enhance it later *)
    -> None

  | Blk_some | Blk_some_not_nested | Blk_lazy_general -> assert false
(* let module_alias = Some "alias"   *)
