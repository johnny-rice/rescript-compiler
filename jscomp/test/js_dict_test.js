// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Mt = require("./mt.js");
let Js_dict = require("../../lib/js/js_dict.js");

function obj() {
  return {
    foo: 43,
    bar: 86
  };
}

let suites_0 = [
  "empty",
  param => ({
    TAG: "Eq",
    _0: [],
    _1: Object.keys({})
  })
];

let suites_1 = {
  hd: [
    "get",
    param => ({
      TAG: "Eq",
      _0: 43,
      _1: Js_dict.get({
        foo: 43,
        bar: 86
      }, "foo")
    })
  ],
  tl: {
    hd: [
      "get - property not in object",
      param => ({
        TAG: "Eq",
        _0: undefined,
        _1: Js_dict.get({
          foo: 43,
          bar: 86
        }, "baz")
      })
    ],
    tl: {
      hd: [
        "unsafe_get",
        param => ({
          TAG: "Eq",
          _0: 43,
          _1: ({
              foo: 43,
              bar: 86
            })["foo"]
        })
      ],
      tl: {
        hd: [
          "set",
          param => {
            let o = {
              foo: 43,
              bar: 86
            };
            o["foo"] = 36;
            return {
              TAG: "Eq",
              _0: 36,
              _1: Js_dict.get(o, "foo")
            };
          }
        ],
        tl: {
          hd: [
            "keys",
            param => ({
              TAG: "Eq",
              _0: [
                "foo",
                "bar"
              ],
              _1: Object.keys({
                foo: 43,
                bar: 86
              })
            })
          ],
          tl: {
            hd: [
              "entries",
              param => ({
                TAG: "Eq",
                _0: [
                  [
                    "foo",
                    43
                  ],
                  [
                    "bar",
                    86
                  ]
                ],
                _1: Js_dict.entries({
                  foo: 43,
                  bar: 86
                })
              })
            ],
            tl: {
              hd: [
                "values",
                param => ({
                  TAG: "Eq",
                  _0: [
                    43,
                    86
                  ],
                  _1: Js_dict.values({
                    foo: 43,
                    bar: 86
                  })
                })
              ],
              tl: {
                hd: [
                  "fromList - []",
                  param => ({
                    TAG: "Eq",
                    _0: {},
                    _1: Js_dict.fromList(/* [] */0)
                  })
                ],
                tl: {
                  hd: [
                    "fromList",
                    param => ({
                      TAG: "Eq",
                      _0: [
                        [
                          "x",
                          23
                        ],
                        [
                          "y",
                          46
                        ]
                      ],
                      _1: Js_dict.entries(Js_dict.fromList({
                        hd: [
                          "x",
                          23
                        ],
                        tl: {
                          hd: [
                            "y",
                            46
                          ],
                          tl: /* [] */0
                        }
                      }))
                    })
                  ],
                  tl: {
                    hd: [
                      "fromArray - []",
                      param => ({
                        TAG: "Eq",
                        _0: {},
                        _1: Js_dict.fromArray([])
                      })
                    ],
                    tl: {
                      hd: [
                        "fromArray",
                        param => ({
                          TAG: "Eq",
                          _0: [
                            [
                              "x",
                              23
                            ],
                            [
                              "y",
                              46
                            ]
                          ],
                          _1: Js_dict.entries(Js_dict.fromArray([
                            [
                              "x",
                              23
                            ],
                            [
                              "y",
                              46
                            ]
                          ]))
                        })
                      ],
                      tl: {
                        hd: [
                          "map",
                          param => ({
                            TAG: "Eq",
                            _0: {
                              foo: "43",
                              bar: "86"
                            },
                            _1: Js_dict.map(i => String(i), {
                              foo: 43,
                              bar: 86
                            })
                          })
                        ],
                        tl: /* [] */0
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

let suites = {
  hd: suites_0,
  tl: suites_1
};

Mt.from_pair_suites("Js_dict_test", suites);

exports.obj = obj;
exports.suites = suites;
/*  Not a pure module */
