// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Mt = require("./mt.js");

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

let uu = {
  "_'x": 3
};

let uu2 = {
  _then: 1,
  catch: 2,
  "_'x": 3
};

let hh = uu["_'x"];

eq("File \"gpr_459_test.res\", line 23, characters 12-19", hh, 3);

eq("File \"gpr_459_test.res\", line 25, characters 12-19", [
  1,
  2,
  3
], [
  uu2._then,
  uu2.catch,
  uu2["_'x"]
]);

Mt.from_pair_suites("Gpr_459_test", suites.contents);

/* hh Not a pure module */
