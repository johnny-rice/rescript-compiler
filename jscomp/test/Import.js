// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Curry = require("../../lib/js/curry.js");

async function eachIntAsync(list, f) {
  return Curry._2(await import("../../lib/js/belt_List.js").then(function (m) {
    return m.forEach;
  }), list, f);
}

function eachIntLazy(list, f) {
  let obj = import("../../lib/js/belt_List.js").then(function (m) {
    return m.forEach;
  });
  let arg1 = function (each) {
    return Promise.resolve(Curry._2(each, list, f));
  };
  return obj.then(arg1);
}

eachIntLazy({
  hd: 1,
  tl: {
    hd: 2,
    tl: {
      hd: 3,
      tl: /* [] */0
    }
  }
}, (function (n) {
  console.log("lazy", n);
}));

eachIntAsync({
  hd: 1,
  tl: {
    hd: 2,
    tl: {
      hd: 3,
      tl: /* [] */0
    }
  }
}, (function (n) {
  console.log("async", n);
}));

let beltAsModule = await import("../../lib/js/belt_List.js");

let M = await import("../../lib/js/belt_List.js");

let N0 = await import("../../lib/js/belt_List.js");

let O = await import("../../lib/js/belt_List.js");

let N1_each = O.forEach;

let N1 = {
  O: O,
  each: N1_each
};

let N2 = await import("../../lib/js/belt_List.js");

let N_each = N2.forEach;

let N = {
  N0: N0,
  N1: N1,
  N2: N2,
  each: N_each
};

let M0 = await import("../../lib/js/belt_List.js");

let M1 = await import("../../lib/js/belt_List.js");

async function f(param) {
  return (await import("../../lib/js/belt_List.js")).forEach;
}

async function f1(param) {
  return (await import("../../lib/js/belt_List.js")).forEach;
}

async function f2(param) {
  let M3 = await import("../../lib/js/belt_List.js");
  let M4 = await import("../../lib/js/belt_List.js");
  return [
    M3.forEach,
    M4.forEach
  ];
}

async function f3(param) {
  let M3 = await import("../../lib/js/belt_List.js");
  let M4 = await import("../../lib/js/belt_List.js");
  return [
    M3.forEach,
    M4.forEach
  ];
}

async function f4(param) {
  return (await import("../../lib/js/belt_Array.js")).forEach;
}

async function f5(param) {
  let A = await import("../../lib/js/belt_Array.js");
  let O = await import("../../lib/js/belt_Option.js");
  return [
    A.forEach,
    O.forEach
  ];
}

async function f6(param) {
  let MS = await import("../../lib/js/belt_MapString.js");
  let A = await import("../../lib/js/belt_Array.js");
  return [
    0,
    MS.forEach,
    A.forEach
  ];
}

async function f7(param) {
  await import("../../lib/js/belt_MapInt.js");
  return 1;
}

let each = M1.forEach;

let M2;

let each2 = O.forEach;

exports.eachIntAsync = eachIntAsync;
exports.eachIntLazy = eachIntLazy;
exports.beltAsModule = beltAsModule;
exports.M = M;
exports.N = N;
exports.M0 = M0;
exports.M1 = M1;
exports.each = each;
exports.M2 = M2;
exports.each2 = each2;
exports.f = f;
exports.f1 = f1;
exports.f2 = f2;
exports.f3 = f3;
exports.f4 = f4;
exports.f5 = f5;
exports.f6 = f6;
exports.f7 = f7;
/*  Not a pure module */
