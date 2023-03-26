'use strict';

var Mt = require("./mt.js");
var Caml_obj = require("../../lib/js/caml_obj.js");
var Caml_js_exceptions = require("../../lib/js/caml_js_exceptions.js");

var function_equal_test;

try {
  function_equal_test = Caml_obj.equal((function (x) {
          return x + 1 | 0;
        }), (function (x) {
          return x + 2 | 0;
        }));
}
catch (raw_exn){
  var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
  function_equal_test = exn.RE_EXN_ID === "Invalid_argument" && exn._1 === "equal: functional value" ? true : false;
}

var suites = {
  contents: {
    hd: [
      "File \"caml_compare_test.res\", line 12, characters 5-12",
      (function (param) {
          return {
                  TAG: "Eq",
                  _0: true,
                  _1: Caml_obj.lessthan(undefined, 1)
                };
        })
    ],
    tl: {
      hd: [
        "option2",
        (function (param) {
            return {
                    TAG: "Eq",
                    _0: true,
                    _1: Caml_obj.lessthan(1, 2)
                  };
          })
      ],
      tl: {
        hd: [
          "File \"caml_compare_test.res\", line 14, characters 5-12",
          (function (param) {
              return {
                      TAG: "Eq",
                      _0: true,
                      _1: Caml_obj.greaterthan({
                            hd: 1,
                            tl: /* [] */0
                          }, /* [] */0)
                    };
            })
        ],
        tl: {
          hd: [
            "listeq",
            (function (param) {
                return {
                        TAG: "Eq",
                        _0: true,
                        _1: Caml_obj.equal({
                              hd: 1,
                              tl: {
                                hd: 2,
                                tl: {
                                  hd: 3,
                                  tl: /* [] */0
                                }
                              }
                            }, {
                              hd: 1,
                              tl: {
                                hd: 2,
                                tl: {
                                  hd: 3,
                                  tl: /* [] */0
                                }
                              }
                            })
                      };
              })
          ],
          tl: {
            hd: [
              "listneq",
              (function (param) {
                  return {
                          TAG: "Eq",
                          _0: true,
                          _1: Caml_obj.greaterthan({
                                hd: 1,
                                tl: {
                                  hd: 2,
                                  tl: {
                                    hd: 3,
                                    tl: /* [] */0
                                  }
                                }
                              }, {
                                hd: 1,
                                tl: {
                                  hd: 2,
                                  tl: {
                                    hd: 2,
                                    tl: /* [] */0
                                  }
                                }
                              })
                        };
                })
            ],
            tl: {
              hd: [
                "custom_u",
                (function (param) {
                    return {
                            TAG: "Eq",
                            _0: true,
                            _1: Caml_obj.greaterthan([
                                  {
                                    TAG: "A",
                                    _0: 3
                                  },
                                  {
                                    TAG: "B",
                                    _0: 2,
                                    _1: false
                                  },
                                  {
                                    TAG: "C",
                                    _0: 1
                                  }
                                ], [
                                  {
                                    TAG: "A",
                                    _0: 3
                                  },
                                  {
                                    TAG: "B",
                                    _0: 2,
                                    _1: false
                                  },
                                  {
                                    TAG: "C",
                                    _0: 0
                                  }
                                ])
                          };
                  })
              ],
              tl: {
                hd: [
                  "custom_u2",
                  (function (param) {
                      return {
                              TAG: "Eq",
                              _0: true,
                              _1: Caml_obj.equal([
                                    {
                                      TAG: "A",
                                      _0: 3
                                    },
                                    {
                                      TAG: "B",
                                      _0: 2,
                                      _1: false
                                    },
                                    {
                                      TAG: "C",
                                      _0: 1
                                    }
                                  ], [
                                    {
                                      TAG: "A",
                                      _0: 3
                                    },
                                    {
                                      TAG: "B",
                                      _0: 2,
                                      _1: false
                                    },
                                    {
                                      TAG: "C",
                                      _0: 1
                                    }
                                  ])
                            };
                    })
                ],
                tl: {
                  hd: [
                    "function",
                    (function (param) {
                        return {
                                TAG: "Eq",
                                _0: true,
                                _1: function_equal_test
                              };
                      })
                  ],
                  tl: {
                    hd: [
                      "File \"caml_compare_test.res\", line 20, characters 5-12",
                      (function (param) {
                          return {
                                  TAG: "Eq",
                                  _0: true,
                                  _1: Caml_obj.lessthan(undefined, 1)
                                };
                        })
                    ],
                    tl: {
                      hd: [
                        "File \"caml_compare_test.res\", line 21, characters 5-12",
                        (function (param) {
                            return {
                                    TAG: "Eq",
                                    _0: true,
                                    _1: Caml_obj.lessthan(undefined, [
                                          1,
                                          30
                                        ])
                                  };
                          })
                      ],
                      tl: {
                        hd: [
                          "File \"caml_compare_test.res\", line 22, characters 5-12",
                          (function (param) {
                              return {
                                      TAG: "Eq",
                                      _0: true,
                                      _1: Caml_obj.greaterthan([
                                            1,
                                            30
                                          ], undefined)
                                    };
                            })
                        ],
                        tl: {
                          hd: [
                            "File \"caml_compare_test.res\", line 24, characters 6-13",
                            (function (param) {
                                return {
                                        TAG: "Eq",
                                        _0: true,
                                        _1: Caml_obj.lessthan({
                                              hd: 2,
                                              tl: {
                                                hd: 6,
                                                tl: {
                                                  hd: 1,
                                                  tl: {
                                                    hd: 1,
                                                    tl: {
                                                      hd: 2,
                                                      tl: {
                                                        hd: 1,
                                                        tl: {
                                                          hd: 4,
                                                          tl: {
                                                            hd: 2,
                                                            tl: {
                                                              hd: 1,
                                                              tl: /* [] */0
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }, {
                                              hd: 2,
                                              tl: {
                                                hd: 6,
                                                tl: {
                                                  hd: 1,
                                                  tl: {
                                                    hd: 1,
                                                    tl: {
                                                      hd: 2,
                                                      tl: {
                                                        hd: 1,
                                                        tl: {
                                                          hd: 4,
                                                          tl: {
                                                            hd: 2,
                                                            tl: {
                                                              hd: 1,
                                                              tl: {
                                                                hd: 409,
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
                                            })
                                      };
                              })
                          ],
                          tl: {
                            hd: [
                              "File \"caml_compare_test.res\", line 27, characters 5-12",
                              (function (param) {
                                  return {
                                          TAG: "Eq",
                                          _0: true,
                                          _1: Caml_obj.lessthan({
                                                hd: 1,
                                                tl: /* [] */0
                                              }, {
                                                hd: 1,
                                                tl: {
                                                  hd: 409,
                                                  tl: /* [] */0
                                                }
                                              })
                                        };
                                })
                            ],
                            tl: {
                              hd: [
                                "File \"caml_compare_test.res\", line 28, characters 5-12",
                                (function (param) {
                                    return {
                                            TAG: "Eq",
                                            _0: true,
                                            _1: Caml_obj.lessthan(/* [] */0, {
                                                  hd: 409,
                                                  tl: /* [] */0
                                                })
                                          };
                                  })
                              ],
                              tl: {
                                hd: [
                                  "File \"caml_compare_test.res\", line 30, characters 6-13",
                                  (function (param) {
                                      return {
                                              TAG: "Eq",
                                              _0: true,
                                              _1: Caml_obj.greaterthan({
                                                    hd: 2,
                                                    tl: {
                                                      hd: 6,
                                                      tl: {
                                                        hd: 1,
                                                        tl: {
                                                          hd: 1,
                                                          tl: {
                                                            hd: 2,
                                                            tl: {
                                                              hd: 1,
                                                              tl: {
                                                                hd: 4,
                                                                tl: {
                                                                  hd: 2,
                                                                  tl: {
                                                                    hd: 1,
                                                                    tl: {
                                                                      hd: 409,
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
                                                  }, {
                                                    hd: 2,
                                                    tl: {
                                                      hd: 6,
                                                      tl: {
                                                        hd: 1,
                                                        tl: {
                                                          hd: 1,
                                                          tl: {
                                                            hd: 2,
                                                            tl: {
                                                              hd: 1,
                                                              tl: {
                                                                hd: 4,
                                                                tl: {
                                                                  hd: 2,
                                                                  tl: {
                                                                    hd: 1,
                                                                    tl: /* [] */0
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  })
                                            };
                                    })
                                ],
                                tl: {
                                  hd: [
                                    "File \"caml_compare_test.res\", line 33, characters 5-12",
                                    (function (param) {
                                        return {
                                                TAG: "Eq",
                                                _0: false,
                                                _1: false
                                              };
                                      })
                                  ],
                                  tl: {
                                    hd: [
                                      "File \"caml_compare_test.res\", line 34, characters 5-12",
                                      (function (param) {
                                          return {
                                                  TAG: "Eq",
                                                  _0: false,
                                                  _1: false
                                                };
                                        })
                                    ],
                                    tl: {
                                      hd: [
                                        "File \"caml_compare_test.res\", line 36, characters 6-13",
                                        (function (param) {
                                            return {
                                                    TAG: "Eq",
                                                    _0: false,
                                                    _1: Caml_obj.equal({
                                                          hd: 2,
                                                          tl: {
                                                            hd: 6,
                                                            tl: {
                                                              hd: 1,
                                                              tl: {
                                                                hd: 1,
                                                                tl: {
                                                                  hd: 2,
                                                                  tl: {
                                                                    hd: 1,
                                                                    tl: {
                                                                      hd: 4,
                                                                      tl: {
                                                                        hd: 2,
                                                                        tl: {
                                                                          hd: 1,
                                                                          tl: /* [] */0
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }, {
                                                          hd: 2,
                                                          tl: {
                                                            hd: 6,
                                                            tl: {
                                                              hd: 1,
                                                              tl: {
                                                                hd: 1,
                                                                tl: {
                                                                  hd: 2,
                                                                  tl: {
                                                                    hd: 1,
                                                                    tl: {
                                                                      hd: 4,
                                                                      tl: {
                                                                        hd: 2,
                                                                        tl: {
                                                                          hd: 1,
                                                                          tl: {
                                                                            hd: 409,
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
                                                        })
                                                  };
                                          })
                                      ],
                                      tl: {
                                        hd: [
                                          "File \"caml_compare_test.res\", line 40, characters 6-13",
                                          (function (param) {
                                              return {
                                                      TAG: "Eq",
                                                      _0: false,
                                                      _1: Caml_obj.equal({
                                                            hd: 2,
                                                            tl: {
                                                              hd: 6,
                                                              tl: {
                                                                hd: 1,
                                                                tl: {
                                                                  hd: 1,
                                                                  tl: {
                                                                    hd: 2,
                                                                    tl: {
                                                                      hd: 1,
                                                                      tl: {
                                                                        hd: 4,
                                                                        tl: {
                                                                          hd: 2,
                                                                          tl: {
                                                                            hd: 1,
                                                                            tl: {
                                                                              hd: 409,
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
                                                          }, {
                                                            hd: 2,
                                                            tl: {
                                                              hd: 6,
                                                              tl: {
                                                                hd: 1,
                                                                tl: {
                                                                  hd: 1,
                                                                  tl: {
                                                                    hd: 2,
                                                                    tl: {
                                                                      hd: 1,
                                                                      tl: {
                                                                        hd: 4,
                                                                        tl: {
                                                                          hd: 2,
                                                                          tl: {
                                                                            hd: 1,
                                                                            tl: /* [] */0
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          })
                                                    };
                                            })
                                        ],
                                        tl: {
                                          hd: [
                                            "cmp_id",
                                            (function (param) {
                                                return {
                                                        TAG: "Eq",
                                                        _0: Caml_obj.compare({
                                                              x: 1,
                                                              y: 2
                                                            }, {
                                                              x: 1,
                                                              y: 2
                                                            }),
                                                        _1: 0
                                                      };
                                              })
                                          ],
                                          tl: {
                                            hd: [
                                              "cmp_val",
                                              (function (param) {
                                                  return {
                                                          TAG: "Eq",
                                                          _0: Caml_obj.compare({
                                                                x: 1
                                                              }, {
                                                                x: 2
                                                              }),
                                                          _1: -1
                                                        };
                                                })
                                            ],
                                            tl: {
                                              hd: [
                                                "cmp_val2",
                                                (function (param) {
                                                    return {
                                                            TAG: "Eq",
                                                            _0: Caml_obj.compare({
                                                                  x: 2
                                                                }, {
                                                                  x: 1
                                                                }),
                                                            _1: 1
                                                          };
                                                  })
                                              ],
                                              tl: {
                                                hd: [
                                                  "cmp_empty",
                                                  (function (param) {
                                                      return {
                                                              TAG: "Eq",
                                                              _0: Caml_obj.compare({}, {}),
                                                              _1: 0
                                                            };
                                                    })
                                                ],
                                                tl: {
                                                  hd: [
                                                    "cmp_empty2",
                                                    (function (param) {
                                                        return {
                                                                TAG: "Eq",
                                                                _0: Caml_obj.compare({}, {x:1}),
                                                                _1: -1
                                                              };
                                                      })
                                                  ],
                                                  tl: {
                                                    hd: [
                                                      "cmp_swap",
                                                      (function (param) {
                                                          return {
                                                                  TAG: "Eq",
                                                                  _0: Caml_obj.compare({
                                                                        x: 1,
                                                                        y: 2
                                                                      }, {
                                                                        y: 2,
                                                                        x: 1
                                                                      }),
                                                                  _1: 0
                                                                };
                                                        })
                                                    ],
                                                    tl: {
                                                      hd: [
                                                        "cmp_size",
                                                        (function (param) {
                                                            return {
                                                                    TAG: "Eq",
                                                                    _0: Caml_obj.compare({x:1}, {x:1, y:2}),
                                                                    _1: -1
                                                                  };
                                                          })
                                                      ],
                                                      tl: {
                                                        hd: [
                                                          "cmp_size2",
                                                          (function (param) {
                                                              return {
                                                                      TAG: "Eq",
                                                                      _0: Caml_obj.compare({x:1, y:2}, {x:1}),
                                                                      _1: 1
                                                                    };
                                                            })
                                                        ],
                                                        tl: {
                                                          hd: [
                                                            "cmp_order",
                                                            (function (param) {
                                                                return {
                                                                        TAG: "Eq",
                                                                        _0: Caml_obj.compare({
                                                                              x: 0,
                                                                              y: 1
                                                                            }, {
                                                                              x: 1,
                                                                              y: 0
                                                                            }),
                                                                        _1: -1
                                                                      };
                                                              })
                                                          ],
                                                          tl: {
                                                            hd: [
                                                              "cmp_order2",
                                                              (function (param) {
                                                                  return {
                                                                          TAG: "Eq",
                                                                          _0: Caml_obj.compare({
                                                                                x: 1,
                                                                                y: 0
                                                                              }, {
                                                                                x: 0,
                                                                                y: 1
                                                                              }),
                                                                          _1: 1
                                                                        };
                                                                })
                                                            ],
                                                            tl: {
                                                              hd: [
                                                                "cmp_in_list",
                                                                (function (param) {
                                                                    return {
                                                                            TAG: "Eq",
                                                                            _0: Caml_obj.compare({
                                                                                  hd: {
                                                                                    x: 1
                                                                                  },
                                                                                  tl: /* [] */0
                                                                                }, {
                                                                                  hd: {
                                                                                    x: 2
                                                                                  },
                                                                                  tl: /* [] */0
                                                                                }),
                                                                            _1: -1
                                                                          };
                                                                  })
                                                              ],
                                                              tl: {
                                                                hd: [
                                                                  "cmp_in_list2",
                                                                  (function (param) {
                                                                      return {
                                                                              TAG: "Eq",
                                                                              _0: Caml_obj.compare({
                                                                                    hd: {
                                                                                      x: 2
                                                                                    },
                                                                                    tl: /* [] */0
                                                                                  }, {
                                                                                    hd: {
                                                                                      x: 1
                                                                                    },
                                                                                    tl: /* [] */0
                                                                                  }),
                                                                              _1: 1
                                                                            };
                                                                    })
                                                                ],
                                                                tl: {
                                                                  hd: [
                                                                    "cmp_with_list",
                                                                    (function (param) {
                                                                        return {
                                                                                TAG: "Eq",
                                                                                _0: Caml_obj.compare({
                                                                                      x: {
                                                                                        hd: 0,
                                                                                        tl: /* [] */0
                                                                                      }
                                                                                    }, {
                                                                                      x: {
                                                                                        hd: 1,
                                                                                        tl: /* [] */0
                                                                                      }
                                                                                    }),
                                                                                _1: -1
                                                                              };
                                                                      })
                                                                  ],
                                                                  tl: {
                                                                    hd: [
                                                                      "cmp_with_list2",
                                                                      (function (param) {
                                                                          return {
                                                                                  TAG: "Eq",
                                                                                  _0: Caml_obj.compare({
                                                                                        x: {
                                                                                          hd: 1,
                                                                                          tl: /* [] */0
                                                                                        }
                                                                                      }, {
                                                                                        x: {
                                                                                          hd: 0,
                                                                                          tl: /* [] */0
                                                                                        }
                                                                                      }),
                                                                                  _1: 1
                                                                                };
                                                                        })
                                                                    ],
                                                                    tl: {
                                                                      hd: [
                                                                        "eq_id",
                                                                        (function (param) {
                                                                            return {
                                                                                    TAG: "Ok",
                                                                                    _0: Caml_obj.equal({
                                                                                          x: 1,
                                                                                          y: 2
                                                                                        }, {
                                                                                          x: 1,
                                                                                          y: 2
                                                                                        })
                                                                                  };
                                                                          })
                                                                      ],
                                                                      tl: {
                                                                        hd: [
                                                                          "eq_val",
                                                                          (function (param) {
                                                                              return {
                                                                                      TAG: "Eq",
                                                                                      _0: Caml_obj.equal({
                                                                                            x: 1
                                                                                          }, {
                                                                                            x: 2
                                                                                          }),
                                                                                      _1: false
                                                                                    };
                                                                            })
                                                                        ],
                                                                        tl: {
                                                                          hd: [
                                                                            "eq_val2",
                                                                            (function (param) {
                                                                                return {
                                                                                        TAG: "Eq",
                                                                                        _0: Caml_obj.equal({
                                                                                              x: 2
                                                                                            }, {
                                                                                              x: 1
                                                                                            }),
                                                                                        _1: false
                                                                                      };
                                                                              })
                                                                          ],
                                                                          tl: {
                                                                            hd: [
                                                                              "eq_empty",
                                                                              (function (param) {
                                                                                  return {
                                                                                          TAG: "Eq",
                                                                                          _0: Caml_obj.equal({}, {}),
                                                                                          _1: true
                                                                                        };
                                                                                })
                                                                            ],
                                                                            tl: {
                                                                              hd: [
                                                                                "eq_empty2",
                                                                                (function (param) {
                                                                                    return {
                                                                                            TAG: "Eq",
                                                                                            _0: Caml_obj.equal({}, {x:1}),
                                                                                            _1: false
                                                                                          };
                                                                                  })
                                                                              ],
                                                                              tl: {
                                                                                hd: [
                                                                                  "eq_swap",
                                                                                  (function (param) {
                                                                                      return {
                                                                                              TAG: "Ok",
                                                                                              _0: Caml_obj.equal({
                                                                                                    x: 1,
                                                                                                    y: 2
                                                                                                  }, {
                                                                                                    y: 2,
                                                                                                    x: 1
                                                                                                  })
                                                                                            };
                                                                                    })
                                                                                ],
                                                                                tl: {
                                                                                  hd: [
                                                                                    "eq_size",
                                                                                    (function (param) {
                                                                                        return {
                                                                                                TAG: "Eq",
                                                                                                _0: Caml_obj.equal({x:1}, {x:1, y:2}),
                                                                                                _1: false
                                                                                              };
                                                                                      })
                                                                                  ],
                                                                                  tl: {
                                                                                    hd: [
                                                                                      "eq_size2",
                                                                                      (function (param) {
                                                                                          return {
                                                                                                  TAG: "Eq",
                                                                                                  _0: Caml_obj.equal({x:1, y:2}, {x:1}),
                                                                                                  _1: false
                                                                                                };
                                                                                        })
                                                                                    ],
                                                                                    tl: {
                                                                                      hd: [
                                                                                        "eq_in_list",
                                                                                        (function (param) {
                                                                                            return {
                                                                                                    TAG: "Eq",
                                                                                                    _0: Caml_obj.equal({
                                                                                                          hd: {
                                                                                                            x: 1
                                                                                                          },
                                                                                                          tl: /* [] */0
                                                                                                        }, {
                                                                                                          hd: {
                                                                                                            x: 2
                                                                                                          },
                                                                                                          tl: /* [] */0
                                                                                                        }),
                                                                                                    _1: false
                                                                                                  };
                                                                                          })
                                                                                      ],
                                                                                      tl: {
                                                                                        hd: [
                                                                                          "eq_in_list2",
                                                                                          (function (param) {
                                                                                              return {
                                                                                                      TAG: "Eq",
                                                                                                      _0: Caml_obj.equal({
                                                                                                            hd: {
                                                                                                              x: 2
                                                                                                            },
                                                                                                            tl: /* [] */0
                                                                                                          }, {
                                                                                                            hd: {
                                                                                                              x: 2
                                                                                                            },
                                                                                                            tl: /* [] */0
                                                                                                          }),
                                                                                                      _1: true
                                                                                                    };
                                                                                            })
                                                                                        ],
                                                                                        tl: {
                                                                                          hd: [
                                                                                            "eq_with_list",
                                                                                            (function (param) {
                                                                                                return {
                                                                                                        TAG: "Eq",
                                                                                                        _0: Caml_obj.equal({
                                                                                                              x: {
                                                                                                                hd: 0,
                                                                                                                tl: /* [] */0
                                                                                                              }
                                                                                                            }, {
                                                                                                              x: {
                                                                                                                hd: 0,
                                                                                                                tl: /* [] */0
                                                                                                              }
                                                                                                            }),
                                                                                                        _1: true
                                                                                                      };
                                                                                              })
                                                                                          ],
                                                                                          tl: {
                                                                                            hd: [
                                                                                              "eq_with_list2",
                                                                                              (function (param) {
                                                                                                  return {
                                                                                                          TAG: "Eq",
                                                                                                          _0: Caml_obj.equal({
                                                                                                                x: {
                                                                                                                  hd: 0,
                                                                                                                  tl: /* [] */0
                                                                                                                }
                                                                                                              }, {
                                                                                                                x: {
                                                                                                                  hd: 1,
                                                                                                                  tl: /* [] */0
                                                                                                                }
                                                                                                              }),
                                                                                                          _1: false
                                                                                                        };
                                                                                                })
                                                                                            ],
                                                                                            tl: {
                                                                                              hd: [
                                                                                                "eq_no_prototype",
                                                                                                (function (param) {
                                                                                                    return {
                                                                                                            TAG: "Eq",
                                                                                                            _0: Caml_obj.equal({x:1}, ((function(){let o = Object.create(null);o.x = 1;return o;})())),
                                                                                                            _1: true
                                                                                                          };
                                                                                                  })
                                                                                              ],
                                                                                              tl: {
                                                                                                hd: [
                                                                                                  "File \"caml_compare_test.res\", line 76, characters 5-12",
                                                                                                  (function (param) {
                                                                                                      return {
                                                                                                              TAG: "Eq",
                                                                                                              _0: Caml_obj.compare(null, {
                                                                                                                    hd: 3,
                                                                                                                    tl: /* [] */0
                                                                                                                  }),
                                                                                                              _1: -1
                                                                                                            };
                                                                                                    })
                                                                                                ],
                                                                                                tl: {
                                                                                                  hd: [
                                                                                                    "File \"caml_compare_test.res\", line 77, characters 5-12",
                                                                                                    (function (param) {
                                                                                                        return {
                                                                                                                TAG: "Eq",
                                                                                                                _0: Caml_obj.compare({
                                                                                                                      hd: 3,
                                                                                                                      tl: /* [] */0
                                                                                                                    }, null),
                                                                                                                _1: 1
                                                                                                              };
                                                                                                      })
                                                                                                  ],
                                                                                                  tl: {
                                                                                                    hd: [
                                                                                                      "File \"caml_compare_test.res\", line 78, characters 5-12",
                                                                                                      (function (param) {
                                                                                                          return {
                                                                                                                  TAG: "Eq",
                                                                                                                  _0: Caml_obj.compare(null, 0),
                                                                                                                  _1: -1
                                                                                                                };
                                                                                                        })
                                                                                                    ],
                                                                                                    tl: {
                                                                                                      hd: [
                                                                                                        "File \"caml_compare_test.res\", line 79, characters 5-12",
                                                                                                        (function (param) {
                                                                                                            return {
                                                                                                                    TAG: "Eq",
                                                                                                                    _0: Caml_obj.compare(0, null),
                                                                                                                    _1: 1
                                                                                                                  };
                                                                                                          })
                                                                                                      ],
                                                                                                      tl: {
                                                                                                        hd: [
                                                                                                          "File \"caml_compare_test.res\", line 80, characters 5-12",
                                                                                                          (function (param) {
                                                                                                              return {
                                                                                                                      TAG: "Eq",
                                                                                                                      _0: Caml_obj.compare(undefined, 0),
                                                                                                                      _1: -1
                                                                                                                    };
                                                                                                            })
                                                                                                        ],
                                                                                                        tl: {
                                                                                                          hd: [
                                                                                                            "File \"caml_compare_test.res\", line 81, characters 5-12",
                                                                                                            (function (param) {
                                                                                                                return {
                                                                                                                        TAG: "Eq",
                                                                                                                        _0: Caml_obj.compare(0, undefined),
                                                                                                                        _1: 1
                                                                                                                      };
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
                }
              }
            }
          }
        }
      }
    }
  }
};

var test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

eq("File \"caml_compare_test.res\", line 88, characters 3-10", true, Caml_obj.greaterthan(1, undefined));

eq("File \"caml_compare_test.res\", line 89, characters 3-10", true, Caml_obj.lessthan(/* [] */0, {
          hd: 1,
          tl: /* [] */0
        }));

eq("File \"caml_compare_test.res\", line 90, characters 3-10", false, Caml_obj.greaterthan(undefined, 1));

eq("File \"caml_compare_test.res\", line 91, characters 3-10", false, Caml_obj.greaterthan(undefined, [
          1,
          30
        ]));

eq("File \"caml_compare_test.res\", line 92, characters 3-10", false, Caml_obj.lessthan([
          1,
          30
        ], undefined));

Mt.from_pair_suites("Caml_compare_test", suites.contents);

exports.function_equal_test = function_equal_test;
exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
/* function_equal_test Not a pure module */
