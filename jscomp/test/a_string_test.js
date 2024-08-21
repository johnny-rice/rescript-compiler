// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Mt = require("./mt.js");
let List = require("../../lib/js/list.js");
let Ext_string_test = require("./ext_string_test.js");

let suites_0 = [
  "split",
  param => ({
    TAG: "Eq",
    _0: Ext_string_test.split(true, "hihi", /* 'i' */105),
    _1: {
      hd: "h",
      tl: {
        hd: "h",
        tl: {
          hd: "",
          tl: /* [] */0
        }
      }
    }
  })
];

let suites_1 = {
  hd: [
    "split_non_empty",
    param => ({
      TAG: "Eq",
      _0: Ext_string_test.split(undefined, "hihi", /* 'i' */105),
      _1: {
        hd: "h",
        tl: {
          hd: "h",
          tl: /* [] */0
        }
      }
    })
  ],
  tl: {
    hd: [
      "split_empty",
      param => ({
        TAG: "Eq",
        _0: Ext_string_test.split(true, "", /* 'i' */105),
        _1: /* [] */0
      })
    ],
    tl: {
      hd: [
        "split_normal",
        param => ({
          TAG: "Eq",
          _0: Ext_string_test.split(true, "h i i", /* ' ' */32),
          _1: {
            hd: "h",
            tl: {
              hd: "i",
              tl: {
                hd: "i",
                tl: /* [] */0
              }
            }
          }
        })
      ],
      tl: {
        hd: [
          "split_by",
          param => ({
            TAG: "Eq",
            _0: List.filter(s => s !== "", Ext_string_test.split_by(undefined, x => {
              if (x === /* ' ' */32) {
                return true;
              } else {
                return x === /* '\t' */9;
              }
            }, "h hgso hgso \t hi")),
            _1: {
              hd: "h",
              tl: {
                hd: "hgso",
                tl: {
                  hd: "hgso",
                  tl: {
                    hd: "hi",
                    tl: /* [] */0
                  }
                }
              }
            }
          })
        ],
        tl: /* [] */0
      }
    }
  }
};

let suites = {
  hd: suites_0,
  tl: suites_1
};

Mt.from_pair_suites("A_string_test", suites);

let split = Ext_string_test.split;

let split_by = Ext_string_test.split_by;

exports.split = split;
exports.split_by = split_by;
exports.suites = suites;
/*  Not a pure module */
