// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Mt from "./mt.mjs";
import * as Stdlib_String from "rescript/lib/es6/Stdlib_String.js";

function u(v) {
  return v;
}

let s = Stdlib_String;

let N = {
  s: s
};

let v0 = "x".length;

function v(x) {
  return x.length;
}

let suites_0 = [
  "const",
  param => ({
    TAG: "Eq",
    _0: 1,
    _1: v0
  })
];

let suites_1 = {
  hd: [
    "other",
    param => ({
      TAG: "Eq",
      _0: 3,
      _1: v("abc")
    })
  ],
  tl: /* [] */0
};

let suites = {
  hd: suites_0,
  tl: suites_1
};

Mt.from_pair_suites("Module_parameter_test", suites);

export {
  u,
  N,
  v0,
  v,
  suites,
}
/* v0 Not a pure module */
