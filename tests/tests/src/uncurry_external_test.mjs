// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Mt from "./mt.mjs";

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

function sum(a,b){
  return a + b
}
;

let h = sum(1.0, 2.0);

eq("File \"uncurry_external_test.res\", line 22, characters 12-19", h, 3);

Mt.from_pair_suites("Uncurry_external_test", suites.contents);

export {
  suites,
  test_id,
  eq,
  h,
}
/*  Not a pure module */