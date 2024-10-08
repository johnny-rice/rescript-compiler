// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Mt = require("./mt.js");
let Gpr_1423_nav = require("./gpr_1423_nav.js");

let suites = {
  contents: /* [] */0
};

let test_id = {
  contents: 0
};

function eq(loc, x, y) {
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = {
    hd: [
      loc + (" id " + test_id.contents.toString()),
      () => ({
        TAG: "Eq",
        _0: x,
        _1: y
      })
    ],
    tl: suites.contents
  };
}

function foo(f) {
  console.log(f("a1", undefined));
}

foo((none, extra) => Gpr_1423_nav.busted(none, "a2", extra));

function foo2(f) {
  return f("a1", undefined);
}

eq("File \"gpr_1423_app_test.res\", line 18, characters 12-19", Gpr_1423_nav.busted("a1", "a2", undefined), "a1a2");

Mt.from_pair_suites("Gpr_1423_app_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.foo = foo;
exports.foo2 = foo2;
/*  Not a pure module */
