// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Mt = require("./mt.js");
let $$Array = require("../../lib/js/array.js");
let String_set = require("./string_set.js");
let Caml_option = require("../../lib/js/caml_option.js");

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

let a = {};

let b = {
  foo: "42"
};

function map(f, x) {
  if (x !== undefined) {
    return Caml_option.some(f(Caml_option.valFromOption(x)));
  }
  
}

function make(foo, param) {
  let tmp = {};
  let tmp$1 = map(prim => String(prim), foo);
  if (tmp$1 !== undefined) {
    tmp.foo = tmp$1;
  }
  return tmp;
}

let a_ = make(undefined, undefined);

let b_ = make(42, undefined);

eq("File \"gpr_1409_test.res\", line 26, characters 3-10", b_.foo, "42");

console.log(Object.keys(a_));

console.log(a, b, a_, b_);

eq("File \"gpr_1409_test.res\", line 31, characters 3-10", Object.keys(a_).length, 0);

let test2 = {
  hi: 2
};

function test3(_open, xx__hi) {
  let tmp = {
    hi: 2
  };
  if (_open !== undefined) {
    tmp._open = _open;
  }
  if (xx__hi !== undefined) {
    tmp.xx__hi = xx__hi;
  }
  return tmp;
}

function test4(_open, xx__hi) {
  console.log("no inlin");
  let tmp = {
    _open: _open,
    hi: 2
  };
  if (xx__hi !== undefined) {
    tmp.xx__hi = xx__hi;
  }
  return tmp;
}

function test5(f, x) {
  console.log("no inline");
  let tmp = {
    hi: 2
  };
  let tmp$1 = f(x);
  if (tmp$1 !== undefined) {
    tmp._open = tmp$1;
  }
  let tmp$2 = f(x);
  if (tmp$2 !== undefined) {
    tmp.xx__hi = tmp$2;
  }
  return tmp;
}

function test6(f, x) {
  console.log("no inline");
  let x$1 = {
    contents: 3
  };
  let tmp = {
    hi: 2
  };
  let tmp$1 = (x$1.contents = x$1.contents + 1 | 0, x$1.contents);
  if (tmp$1 !== undefined) {
    tmp._open = tmp$1;
  }
  let tmp$2 = f(x$1);
  if (tmp$2 !== undefined) {
    tmp.xx__hi = tmp$2;
  }
  return tmp;
}

function keys(xs, ys) {
  return String_set.equal(String_set.of_list(xs), String_set.of_list($$Array.to_list(ys)));
}

eq("File \"gpr_1409_test.res\", line 69, characters 3-10", keys({
  hd: "hi",
  tl: /* [] */0
}, Object.keys(test3(undefined, undefined))), true);

eq("File \"gpr_1409_test.res\", line 71, characters 3-10", keys({
  hd: "hi",
  tl: {
    hd: "_open",
    tl: /* [] */0
  }
}, Object.keys(test3(2, undefined))), true);

eq("File \"gpr_1409_test.res\", line 73, characters 3-10", keys({
  hd: "hi",
  tl: {
    hd: "_open",
    tl: {
      hd: "xx__hi",
      tl: /* [] */0
    }
  }
}, Object.keys(test3(2, 2))), true);

Mt.from_pair_suites("Gpr_1409_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.a = a;
exports.b = b;
exports.map = map;
exports.make = make;
exports.a_ = a_;
exports.b_ = b_;
exports.test2 = test2;
exports.test3 = test3;
exports.test4 = test4;
exports.test5 = test5;
exports.test6 = test6;
exports.keys = keys;
/* a_ Not a pure module */
