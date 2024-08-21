// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Mt = require("./mt.js");
let JoinClasses = require("./joinClasses");
let Caml_splice_call = require("../../lib/js/caml_splice_call.js");

let suites = {
  contents: /* [] */0
};

let test_id = {
  contents: 0
};

function eq(loc, param) {
  let y = param[1];
  let x = param[0];
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = {
    hd: [
      loc + (" id " + String(test_id.contents)),
      () => ({
        TAG: "Eq",
        _0: x,
        _1: y
      })
    ],
    tl: suites.contents
  };
}

function joinClasses(prim) {
  return Caml_splice_call.spliceApply(JoinClasses, [prim]);
}

let a = JoinClasses(1, 2, 3);

let pair = [
  a,
  6
];

console.log(pair);

eq("File \"module_splice_test.res\", line 16, characters 5-12", pair);

Mt.from_pair_suites("Module_splice_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.joinClasses = joinClasses;
exports.a = a;
/* a Not a pure module */
