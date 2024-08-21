// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Mt = require("./mt.js");
let Runtime_deriving = require("../../lib/js/runtime_deriving.js");

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

function tToJs(param) {
  return {
    x: param.x,
    y: param.y,
    z: param.z
  };
}

function tFromJs(param) {
  return {
    x: param.x,
    y: param.y,
    z: param.z
  };
}

let v0 = {
  x: 3,
  y: false,
  z: false
};

let v1 = {
  x: 3,
  y: false,
  z: ""
};

let _map = {"a":"a","b":"b","c":"c"};

function xToJs(param) {
  return param;
}

function xFromJs(param) {
  return Runtime_deriving.raiseWhenNotFound(_map[param]);
}

function idx(v) {
  eq("File \"ast_abstract_test.res\", line 26, characters 18-25", xFromJs(v), v);
}

idx("a");

idx("b");

idx("c");

Mt.from_pair_suites("Ast_abstract_test", suites.contents);

let x0 = "a";

let x1 = "b";

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.tToJs = tToJs;
exports.tFromJs = tFromJs;
exports.v0 = v0;
exports.v1 = v1;
exports.xToJs = xToJs;
exports.xFromJs = xFromJs;
exports.idx = idx;
exports.x0 = x0;
exports.x1 = x1;
/*  Not a pure module */
