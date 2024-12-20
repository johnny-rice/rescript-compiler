// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Mt from "./mt.mjs";
import * as Belt_List from "rescript/lib/es6/Belt_List.js";
import * as Pervasives from "rescript/lib/es6/Pervasives.js";
import * as Primitive_int from "rescript/lib/es6/Primitive_int.js";
import * as Primitive_option from "rescript/lib/es6/Primitive_option.js";
import * as Primitive_string from "rescript/lib/es6/Primitive_string.js";

function Make(Ord) {
  let height = x => {
    if (typeof x !== "object") {
      return 0;
    } else {
      return x._4;
    }
  };
  let create = (l, x, d, r) => {
    let hl = height(l);
    let hr = height(r);
    return {
      TAG: "Node",
      _0: l,
      _1: x,
      _2: d,
      _3: r,
      _4: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
    };
  };
  let singleton = (x, d) => ({
    TAG: "Node",
    _0: "Empty",
    _1: x,
    _2: d,
    _3: "Empty",
    _4: 1
  });
  let bal = (l, x, d, r) => {
    let hl;
    hl = typeof l !== "object" ? 0 : l._4;
    let hr;
    hr = typeof r !== "object" ? 0 : r._4;
    if (hl > (hr + 2 | 0)) {
      if (typeof l !== "object") {
        return Pervasives.invalid_arg("Map.bal");
      }
      let lr = l._3;
      let ld = l._2;
      let lv = l._1;
      let ll = l._0;
      if (height(ll) >= height(lr)) {
        return create(ll, lv, ld, create(lr, x, d, r));
      } else if (typeof lr !== "object") {
        return Pervasives.invalid_arg("Map.bal");
      } else {
        return create(create(ll, lv, ld, lr._0), lr._1, lr._2, create(lr._3, x, d, r));
      }
    }
    if (hr <= (hl + 2 | 0)) {
      return {
        TAG: "Node",
        _0: l,
        _1: x,
        _2: d,
        _3: r,
        _4: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
      };
    }
    if (typeof r !== "object") {
      return Pervasives.invalid_arg("Map.bal");
    }
    let rr = r._3;
    let rd = r._2;
    let rv = r._1;
    let rl = r._0;
    if (height(rr) >= height(rl)) {
      return create(create(l, x, d, rl), rv, rd, rr);
    } else if (typeof rl !== "object") {
      return Pervasives.invalid_arg("Map.bal");
    } else {
      return create(create(l, x, d, rl._0), rl._1, rl._2, create(rl._3, rv, rd, rr));
    }
  };
  let is_empty = x => typeof x !== "object";
  let add = (x, data, x_) => {
    if (typeof x_ !== "object") {
      return {
        TAG: "Node",
        _0: "Empty",
        _1: x,
        _2: data,
        _3: "Empty",
        _4: 1
      };
    }
    let r = x_._3;
    let d = x_._2;
    let v = x_._1;
    let l = x_._0;
    let c = Ord.compare(x, v);
    if (c === 0) {
      return {
        TAG: "Node",
        _0: l,
        _1: x,
        _2: data,
        _3: r,
        _4: x_._4
      };
    } else if (c < 0) {
      return bal(add(x, data, l), v, d, r);
    } else {
      return bal(l, v, d, add(x, data, r));
    }
  };
  let find = (x, _x_) => {
    while (true) {
      let x_ = _x_;
      if (typeof x_ !== "object") {
        throw {
          RE_EXN_ID: "Not_found",
          Error: new Error()
        };
      }
      let c = Ord.compare(x, x_._1);
      if (c === 0) {
        return x_._2;
      }
      _x_ = c < 0 ? x_._0 : x_._3;
      continue;
    };
  };
  let mem = (x, _x_) => {
    while (true) {
      let x_ = _x_;
      if (typeof x_ !== "object") {
        return false;
      }
      let c = Ord.compare(x, x_._1);
      if (c === 0) {
        return true;
      }
      _x_ = c < 0 ? x_._0 : x_._3;
      continue;
    };
  };
  let min_binding = _x => {
    while (true) {
      let x = _x;
      if (typeof x !== "object") {
        throw {
          RE_EXN_ID: "Not_found",
          Error: new Error()
        };
      }
      let l = x._0;
      if (typeof l !== "object") {
        return [
          x._1,
          x._2
        ];
      }
      _x = l;
      continue;
    };
  };
  let max_binding = _x => {
    while (true) {
      let x = _x;
      if (typeof x !== "object") {
        throw {
          RE_EXN_ID: "Not_found",
          Error: new Error()
        };
      }
      let r = x._3;
      if (typeof r !== "object") {
        return [
          x._1,
          x._2
        ];
      }
      _x = r;
      continue;
    };
  };
  let remove_min_binding = x => {
    if (typeof x !== "object") {
      return Pervasives.invalid_arg("Map.remove_min_elt");
    }
    let l = x._0;
    if (typeof l !== "object") {
      return x._3;
    } else {
      return bal(remove_min_binding(l), x._1, x._2, x._3);
    }
  };
  let remove = (x, x_) => {
    if (typeof x_ !== "object") {
      return "Empty";
    }
    let r = x_._3;
    let d = x_._2;
    let v = x_._1;
    let l = x_._0;
    let c = Ord.compare(x, v);
    if (c === 0) {
      if (typeof l !== "object") {
        return r;
      }
      if (typeof r !== "object") {
        return l;
      }
      let match = min_binding(r);
      return bal(l, match[0], match[1], remove_min_binding(r));
    } else if (c < 0) {
      return bal(remove(x, l), v, d, r);
    } else {
      return bal(l, v, d, remove(x, r));
    }
  };
  let iter = (f, _x) => {
    while (true) {
      let x = _x;
      if (typeof x !== "object") {
        return;
      }
      iter(f, x._0);
      f(x._1, x._2);
      _x = x._3;
      continue;
    };
  };
  let map = (f, x) => {
    if (typeof x !== "object") {
      return "Empty";
    }
    let l$p = map(f, x._0);
    let d$p = f(x._2);
    let r$p = map(f, x._3);
    return {
      TAG: "Node",
      _0: l$p,
      _1: x._1,
      _2: d$p,
      _3: r$p,
      _4: x._4
    };
  };
  let mapi = (f, x) => {
    if (typeof x !== "object") {
      return "Empty";
    }
    let v = x._1;
    let l$p = mapi(f, x._0);
    let d$p = f(v, x._2);
    let r$p = mapi(f, x._3);
    return {
      TAG: "Node",
      _0: l$p,
      _1: v,
      _2: d$p,
      _3: r$p,
      _4: x._4
    };
  };
  let fold = (f, _m, _accu) => {
    while (true) {
      let accu = _accu;
      let m = _m;
      if (typeof m !== "object") {
        return accu;
      }
      _accu = f(m._1, m._2, fold(f, m._0, accu));
      _m = m._3;
      continue;
    };
  };
  let for_all = (p, _x) => {
    while (true) {
      let x = _x;
      if (typeof x !== "object") {
        return true;
      }
      if (!p(x._1, x._2)) {
        return false;
      }
      if (!for_all(p, x._0)) {
        return false;
      }
      _x = x._3;
      continue;
    };
  };
  let exists = (p, _x) => {
    while (true) {
      let x = _x;
      if (typeof x !== "object") {
        return false;
      }
      if (p(x._1, x._2)) {
        return true;
      }
      if (exists(p, x._0)) {
        return true;
      }
      _x = x._3;
      continue;
    };
  };
  let add_min_binding = (k, v, x) => {
    if (typeof x !== "object") {
      return singleton(k, v);
    } else {
      return bal(add_min_binding(k, v, x._0), x._1, x._2, x._3);
    }
  };
  let add_max_binding = (k, v, x) => {
    if (typeof x !== "object") {
      return singleton(k, v);
    } else {
      return bal(x._0, x._1, x._2, add_max_binding(k, v, x._3));
    }
  };
  let join = (l, v, d, r) => {
    if (typeof l !== "object") {
      return add_min_binding(v, d, r);
    }
    let lh = l._4;
    if (typeof r !== "object") {
      return add_max_binding(v, d, l);
    }
    let rh = r._4;
    if (lh > (rh + 2 | 0)) {
      return bal(l._0, l._1, l._2, join(l._3, v, d, r));
    } else if (rh > (lh + 2 | 0)) {
      return bal(join(l, v, d, r._0), r._1, r._2, r._3);
    } else {
      return create(l, v, d, r);
    }
  };
  let concat = (t1, t2) => {
    if (typeof t1 !== "object") {
      return t2;
    }
    if (typeof t2 !== "object") {
      return t1;
    }
    let match = min_binding(t2);
    return join(t1, match[0], match[1], remove_min_binding(t2));
  };
  let concat_or_join = (t1, v, d, t2) => {
    if (d !== undefined) {
      return join(t1, v, Primitive_option.valFromOption(d), t2);
    } else {
      return concat(t1, t2);
    }
  };
  let split = (x, x_) => {
    if (typeof x_ !== "object") {
      return [
        "Empty",
        undefined,
        "Empty"
      ];
    }
    let r = x_._3;
    let d = x_._2;
    let v = x_._1;
    let l = x_._0;
    let c = Ord.compare(x, v);
    if (c === 0) {
      return [
        l,
        Primitive_option.some(d),
        r
      ];
    }
    if (c < 0) {
      let match = split(x, l);
      return [
        match[0],
        match[1],
        join(match[2], v, d, r)
      ];
    }
    let match$1 = split(x, r);
    return [
      join(l, v, d, match$1[0]),
      match$1[1],
      match$1[2]
    ];
  };
  let merge = (f, s1, s2) => {
    if (typeof s1 !== "object") {
      if (typeof s2 !== "object") {
        return "Empty";
      }
      
    } else {
      let v1 = s1._1;
      if (s1._4 >= height(s2)) {
        let match = split(v1, s2);
        return concat_or_join(merge(f, s1._0, match[0]), v1, f(v1, Primitive_option.some(s1._2), match[1]), merge(f, s1._3, match[2]));
      }
      
    }
    if (typeof s2 !== "object") {
      throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "inline_map2_test.res",
          359,
          11
        ],
        Error: new Error()
      };
    }
    let v2 = s2._1;
    let match$1 = split(v2, s1);
    return concat_or_join(merge(f, match$1[0], s2._0), v2, f(v2, match$1[1], Primitive_option.some(s2._2)), merge(f, match$1[2], s2._3));
  };
  let filter = (p, x) => {
    if (typeof x !== "object") {
      return "Empty";
    }
    let d = x._2;
    let v = x._1;
    let l$p = filter(p, x._0);
    let pvd = p(v, d);
    let r$p = filter(p, x._3);
    if (pvd) {
      return join(l$p, v, d, r$p);
    } else {
      return concat(l$p, r$p);
    }
  };
  let partition = (p, x) => {
    if (typeof x !== "object") {
      return [
        "Empty",
        "Empty"
      ];
    }
    let d = x._2;
    let v = x._1;
    let match = partition(p, x._0);
    let lf = match[1];
    let lt = match[0];
    let pvd = p(v, d);
    let match$1 = partition(p, x._3);
    let rf = match$1[1];
    let rt = match$1[0];
    if (pvd) {
      return [
        join(lt, v, d, rt),
        concat(lf, rf)
      ];
    } else {
      return [
        concat(lt, rt),
        join(lf, v, d, rf)
      ];
    }
  };
  let cons_enum = (_m, _e) => {
    while (true) {
      let e = _e;
      let m = _m;
      if (typeof m !== "object") {
        return e;
      }
      _e = {
        TAG: "More",
        _0: m._1,
        _1: m._2,
        _2: m._3,
        _3: e
      };
      _m = m._0;
      continue;
    };
  };
  let compare = (cmp, m1, m2) => {
    let _e1 = cons_enum(m1, "End");
    let _e2 = cons_enum(m2, "End");
    while (true) {
      let e2 = _e2;
      let e1 = _e1;
      if (typeof e1 !== "object") {
        if (typeof e2 !== "object") {
          return 0;
        } else {
          return -1;
        }
      }
      if (typeof e2 !== "object") {
        return 1;
      }
      let c = Ord.compare(e1._0, e2._0);
      if (c !== 0) {
        return c;
      }
      let c$1 = cmp(e1._1, e2._1);
      if (c$1 !== 0) {
        return c$1;
      }
      _e2 = cons_enum(e2._2, e2._3);
      _e1 = cons_enum(e1._2, e1._3);
      continue;
    };
  };
  let equal = (cmp, m1, m2) => {
    let _e1 = cons_enum(m1, "End");
    let _e2 = cons_enum(m2, "End");
    while (true) {
      let e2 = _e2;
      let e1 = _e1;
      if (typeof e1 !== "object") {
        return typeof e2 !== "object";
      }
      if (typeof e2 !== "object") {
        return false;
      }
      if (Ord.compare(e1._0, e2._0) !== 0) {
        return false;
      }
      if (!cmp(e1._1, e2._1)) {
        return false;
      }
      _e2 = cons_enum(e2._2, e2._3);
      _e1 = cons_enum(e1._2, e1._3);
      continue;
    };
  };
  let cardinal = x => {
    if (typeof x !== "object") {
      return 0;
    } else {
      return (cardinal(x._0) + 1 | 0) + cardinal(x._3) | 0;
    }
  };
  let bindings_aux = (_accu, _x) => {
    while (true) {
      let x = _x;
      let accu = _accu;
      if (typeof x !== "object") {
        return accu;
      }
      _x = x._0;
      _accu = {
        hd: [
          x._1,
          x._2
        ],
        tl: bindings_aux(accu, x._3)
      };
      continue;
    };
  };
  let bindings = s => bindings_aux(/* [] */0, s);
  return {
    height: height,
    create: create,
    singleton: singleton,
    bal: bal,
    empty: "Empty",
    is_empty: is_empty,
    add: add,
    find: find,
    mem: mem,
    min_binding: min_binding,
    max_binding: max_binding,
    remove_min_binding: remove_min_binding,
    remove: remove,
    iter: iter,
    map: map,
    mapi: mapi,
    fold: fold,
    for_all: for_all,
    exists: exists,
    add_min_binding: add_min_binding,
    add_max_binding: add_max_binding,
    join: join,
    concat: concat,
    concat_or_join: concat_or_join,
    split: split,
    merge: merge,
    filter: filter,
    partition: partition,
    cons_enum: cons_enum,
    compare: compare,
    equal: equal,
    cardinal: cardinal,
    bindings_aux: bindings_aux,
    bindings: bindings,
    choose: min_binding
  };
}

function height(x) {
  if (typeof x !== "object") {
    return 0;
  } else {
    return x._4;
  }
}

function create(l, x, d, r) {
  let hl = height(l);
  let hr = height(r);
  return {
    TAG: "Node",
    _0: l,
    _1: x,
    _2: d,
    _3: r,
    _4: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
  };
}

function singleton(x, d) {
  return {
    TAG: "Node",
    _0: "Empty",
    _1: x,
    _2: d,
    _3: "Empty",
    _4: 1
  };
}

function bal(l, x, d, r) {
  let hl;
  hl = typeof l !== "object" ? 0 : l._4;
  let hr;
  hr = typeof r !== "object" ? 0 : r._4;
  if (hl > (hr + 2 | 0)) {
    if (typeof l !== "object") {
      return Pervasives.invalid_arg("Map.bal");
    }
    let lr = l._3;
    let ld = l._2;
    let lv = l._1;
    let ll = l._0;
    if (height(ll) >= height(lr)) {
      return create(ll, lv, ld, create(lr, x, d, r));
    } else if (typeof lr !== "object") {
      return Pervasives.invalid_arg("Map.bal");
    } else {
      return create(create(ll, lv, ld, lr._0), lr._1, lr._2, create(lr._3, x, d, r));
    }
  }
  if (hr <= (hl + 2 | 0)) {
    return {
      TAG: "Node",
      _0: l,
      _1: x,
      _2: d,
      _3: r,
      _4: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
    };
  }
  if (typeof r !== "object") {
    return Pervasives.invalid_arg("Map.bal");
  }
  let rr = r._3;
  let rd = r._2;
  let rv = r._1;
  let rl = r._0;
  if (height(rr) >= height(rl)) {
    return create(create(l, x, d, rl), rv, rd, rr);
  } else if (typeof rl !== "object") {
    return Pervasives.invalid_arg("Map.bal");
  } else {
    return create(create(l, x, d, rl._0), rl._1, rl._2, create(rl._3, rv, rd, rr));
  }
}

function is_empty(x) {
  return typeof x !== "object";
}

function add(x, data, x_) {
  if (typeof x_ !== "object") {
    return {
      TAG: "Node",
      _0: "Empty",
      _1: x,
      _2: data,
      _3: "Empty",
      _4: 1
    };
  }
  let r = x_._3;
  let d = x_._2;
  let v = x_._1;
  let l = x_._0;
  let c = Primitive_int.compare(x, v);
  if (c === 0) {
    return {
      TAG: "Node",
      _0: l,
      _1: x,
      _2: data,
      _3: r,
      _4: x_._4
    };
  } else if (c < 0) {
    return bal(add(x, data, l), v, d, r);
  } else {
    return bal(l, v, d, add(x, data, r));
  }
}

function find(x, _x_) {
  while (true) {
    let x_ = _x_;
    if (typeof x_ !== "object") {
      throw {
        RE_EXN_ID: "Not_found",
        Error: new Error()
      };
    }
    let c = Primitive_int.compare(x, x_._1);
    if (c === 0) {
      return x_._2;
    }
    _x_ = c < 0 ? x_._0 : x_._3;
    continue;
  };
}

function mem(x, _x_) {
  while (true) {
    let x_ = _x_;
    if (typeof x_ !== "object") {
      return false;
    }
    let c = Primitive_int.compare(x, x_._1);
    if (c === 0) {
      return true;
    }
    _x_ = c < 0 ? x_._0 : x_._3;
    continue;
  };
}

function min_binding(_x) {
  while (true) {
    let x = _x;
    if (typeof x !== "object") {
      throw {
        RE_EXN_ID: "Not_found",
        Error: new Error()
      };
    }
    let l = x._0;
    if (typeof l !== "object") {
      return [
        x._1,
        x._2
      ];
    }
    _x = l;
    continue;
  };
}

function max_binding(_x) {
  while (true) {
    let x = _x;
    if (typeof x !== "object") {
      throw {
        RE_EXN_ID: "Not_found",
        Error: new Error()
      };
    }
    let r = x._3;
    if (typeof r !== "object") {
      return [
        x._1,
        x._2
      ];
    }
    _x = r;
    continue;
  };
}

function remove_min_binding(x) {
  if (typeof x !== "object") {
    return Pervasives.invalid_arg("Map.remove_min_elt");
  }
  let l = x._0;
  if (typeof l !== "object") {
    return x._3;
  } else {
    return bal(remove_min_binding(l), x._1, x._2, x._3);
  }
}

function remove(x, x_) {
  if (typeof x_ !== "object") {
    return "Empty";
  }
  let r = x_._3;
  let d = x_._2;
  let v = x_._1;
  let l = x_._0;
  let c = Primitive_int.compare(x, v);
  if (c === 0) {
    if (typeof l !== "object") {
      return r;
    }
    if (typeof r !== "object") {
      return l;
    }
    let match = min_binding(r);
    return bal(l, match[0], match[1], remove_min_binding(r));
  } else if (c < 0) {
    return bal(remove(x, l), v, d, r);
  } else {
    return bal(l, v, d, remove(x, r));
  }
}

function iter(f, _x) {
  while (true) {
    let x = _x;
    if (typeof x !== "object") {
      return;
    }
    iter(f, x._0);
    f(x._1, x._2);
    _x = x._3;
    continue;
  };
}

function map(f, x) {
  if (typeof x !== "object") {
    return "Empty";
  }
  let l$p = map(f, x._0);
  let d$p = f(x._2);
  let r$p = map(f, x._3);
  return {
    TAG: "Node",
    _0: l$p,
    _1: x._1,
    _2: d$p,
    _3: r$p,
    _4: x._4
  };
}

function mapi(f, x) {
  if (typeof x !== "object") {
    return "Empty";
  }
  let v = x._1;
  let l$p = mapi(f, x._0);
  let d$p = f(v, x._2);
  let r$p = mapi(f, x._3);
  return {
    TAG: "Node",
    _0: l$p,
    _1: v,
    _2: d$p,
    _3: r$p,
    _4: x._4
  };
}

function fold(f, _m, _accu) {
  while (true) {
    let accu = _accu;
    let m = _m;
    if (typeof m !== "object") {
      return accu;
    }
    _accu = f(m._1, m._2, fold(f, m._0, accu));
    _m = m._3;
    continue;
  };
}

function for_all(p, _x) {
  while (true) {
    let x = _x;
    if (typeof x !== "object") {
      return true;
    }
    if (!p(x._1, x._2)) {
      return false;
    }
    if (!for_all(p, x._0)) {
      return false;
    }
    _x = x._3;
    continue;
  };
}

function exists(p, _x) {
  while (true) {
    let x = _x;
    if (typeof x !== "object") {
      return false;
    }
    if (p(x._1, x._2)) {
      return true;
    }
    if (exists(p, x._0)) {
      return true;
    }
    _x = x._3;
    continue;
  };
}

function add_min_binding(k, v, x) {
  if (typeof x !== "object") {
    return singleton(k, v);
  } else {
    return bal(add_min_binding(k, v, x._0), x._1, x._2, x._3);
  }
}

function add_max_binding(k, v, x) {
  if (typeof x !== "object") {
    return singleton(k, v);
  } else {
    return bal(x._0, x._1, x._2, add_max_binding(k, v, x._3));
  }
}

function join(l, v, d, r) {
  if (typeof l !== "object") {
    return add_min_binding(v, d, r);
  }
  let lh = l._4;
  if (typeof r !== "object") {
    return add_max_binding(v, d, l);
  }
  let rh = r._4;
  if (lh > (rh + 2 | 0)) {
    return bal(l._0, l._1, l._2, join(l._3, v, d, r));
  } else if (rh > (lh + 2 | 0)) {
    return bal(join(l, v, d, r._0), r._1, r._2, r._3);
  } else {
    return create(l, v, d, r);
  }
}

function concat(t1, t2) {
  if (typeof t1 !== "object") {
    return t2;
  }
  if (typeof t2 !== "object") {
    return t1;
  }
  let match = min_binding(t2);
  return join(t1, match[0], match[1], remove_min_binding(t2));
}

function concat_or_join(t1, v, d, t2) {
  if (d !== undefined) {
    return join(t1, v, Primitive_option.valFromOption(d), t2);
  } else {
    return concat(t1, t2);
  }
}

function split(x, x_) {
  if (typeof x_ !== "object") {
    return [
      "Empty",
      undefined,
      "Empty"
    ];
  }
  let r = x_._3;
  let d = x_._2;
  let v = x_._1;
  let l = x_._0;
  let c = Primitive_int.compare(x, v);
  if (c === 0) {
    return [
      l,
      Primitive_option.some(d),
      r
    ];
  }
  if (c < 0) {
    let match = split(x, l);
    return [
      match[0],
      match[1],
      join(match[2], v, d, r)
    ];
  }
  let match$1 = split(x, r);
  return [
    join(l, v, d, match$1[0]),
    match$1[1],
    match$1[2]
  ];
}

function merge(f, s1, s2) {
  if (typeof s1 !== "object") {
    if (typeof s2 !== "object") {
      return "Empty";
    }
    
  } else {
    let v1 = s1._1;
    if (s1._4 >= height(s2)) {
      let match = split(v1, s2);
      return concat_or_join(merge(f, s1._0, match[0]), v1, f(v1, Primitive_option.some(s1._2), match[1]), merge(f, s1._3, match[2]));
    }
    
  }
  if (typeof s2 !== "object") {
    throw {
      RE_EXN_ID: "Assert_failure",
      _1: [
        "inline_map2_test.res",
        359,
        11
      ],
      Error: new Error()
    };
  }
  let v2 = s2._1;
  let match$1 = split(v2, s1);
  return concat_or_join(merge(f, match$1[0], s2._0), v2, f(v2, match$1[1], Primitive_option.some(s2._2)), merge(f, match$1[2], s2._3));
}

function filter(p, x) {
  if (typeof x !== "object") {
    return "Empty";
  }
  let d = x._2;
  let v = x._1;
  let l$p = filter(p, x._0);
  let pvd = p(v, d);
  let r$p = filter(p, x._3);
  if (pvd) {
    return join(l$p, v, d, r$p);
  } else {
    return concat(l$p, r$p);
  }
}

function partition(p, x) {
  if (typeof x !== "object") {
    return [
      "Empty",
      "Empty"
    ];
  }
  let d = x._2;
  let v = x._1;
  let match = partition(p, x._0);
  let lf = match[1];
  let lt = match[0];
  let pvd = p(v, d);
  let match$1 = partition(p, x._3);
  let rf = match$1[1];
  let rt = match$1[0];
  if (pvd) {
    return [
      join(lt, v, d, rt),
      concat(lf, rf)
    ];
  } else {
    return [
      concat(lt, rt),
      join(lf, v, d, rf)
    ];
  }
}

function cons_enum(_m, _e) {
  while (true) {
    let e = _e;
    let m = _m;
    if (typeof m !== "object") {
      return e;
    }
    _e = {
      TAG: "More",
      _0: m._1,
      _1: m._2,
      _2: m._3,
      _3: e
    };
    _m = m._0;
    continue;
  };
}

function compare(cmp, m1, m2) {
  let _e1 = cons_enum(m1, "End");
  let _e2 = cons_enum(m2, "End");
  while (true) {
    let e2 = _e2;
    let e1 = _e1;
    if (typeof e1 !== "object") {
      if (typeof e2 !== "object") {
        return 0;
      } else {
        return -1;
      }
    }
    if (typeof e2 !== "object") {
      return 1;
    }
    let c = Primitive_int.compare(e1._0, e2._0);
    if (c !== 0) {
      return c;
    }
    let c$1 = cmp(e1._1, e2._1);
    if (c$1 !== 0) {
      return c$1;
    }
    _e2 = cons_enum(e2._2, e2._3);
    _e1 = cons_enum(e1._2, e1._3);
    continue;
  };
}

function equal(cmp, m1, m2) {
  let _e1 = cons_enum(m1, "End");
  let _e2 = cons_enum(m2, "End");
  while (true) {
    let e2 = _e2;
    let e1 = _e1;
    if (typeof e1 !== "object") {
      return typeof e2 !== "object";
    }
    if (typeof e2 !== "object") {
      return false;
    }
    if (e1._0 !== e2._0) {
      return false;
    }
    if (!cmp(e1._1, e2._1)) {
      return false;
    }
    _e2 = cons_enum(e2._2, e2._3);
    _e1 = cons_enum(e1._2, e1._3);
    continue;
  };
}

function cardinal(x) {
  if (typeof x !== "object") {
    return 0;
  } else {
    return (cardinal(x._0) + 1 | 0) + cardinal(x._3) | 0;
  }
}

function bindings_aux(_accu, _x) {
  while (true) {
    let x = _x;
    let accu = _accu;
    if (typeof x !== "object") {
      return accu;
    }
    _x = x._0;
    _accu = {
      hd: [
        x._1,
        x._2
      ],
      tl: bindings_aux(accu, x._3)
    };
    continue;
  };
}

function bindings(s) {
  return bindings_aux(/* [] */0, s);
}

let IntMap = {
  height: height,
  create: create,
  singleton: singleton,
  bal: bal,
  empty: "Empty",
  is_empty: is_empty,
  add: add,
  find: find,
  mem: mem,
  min_binding: min_binding,
  max_binding: max_binding,
  remove_min_binding: remove_min_binding,
  remove: remove,
  iter: iter,
  map: map,
  mapi: mapi,
  fold: fold,
  for_all: for_all,
  exists: exists,
  add_min_binding: add_min_binding,
  add_max_binding: add_max_binding,
  join: join,
  concat: concat,
  concat_or_join: concat_or_join,
  split: split,
  merge: merge,
  filter: filter,
  partition: partition,
  cons_enum: cons_enum,
  compare: compare,
  equal: equal,
  cardinal: cardinal,
  bindings_aux: bindings_aux,
  bindings: bindings,
  choose: min_binding
};

let m = Belt_List.reduceReverse({
  hd: [
    10,
    /* 'a' */97
  ],
  tl: {
    hd: [
      3,
      /* 'b' */98
    ],
    tl: {
      hd: [
        7,
        /* 'c' */99
      ],
      tl: {
        hd: [
          20,
          /* 'd' */100
        ],
        tl: /* [] */0
      }
    }
  }
}, "Empty", (acc, param) => add(param[0], param[1], acc));

function height$1(x) {
  if (typeof x !== "object") {
    return 0;
  } else {
    return x._4;
  }
}

function create$1(l, x, d, r) {
  let hl = height$1(l);
  let hr = height$1(r);
  return {
    TAG: "Node",
    _0: l,
    _1: x,
    _2: d,
    _3: r,
    _4: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
  };
}

function singleton$1(x, d) {
  return {
    TAG: "Node",
    _0: "Empty",
    _1: x,
    _2: d,
    _3: "Empty",
    _4: 1
  };
}

function bal$1(l, x, d, r) {
  let hl;
  hl = typeof l !== "object" ? 0 : l._4;
  let hr;
  hr = typeof r !== "object" ? 0 : r._4;
  if (hl > (hr + 2 | 0)) {
    if (typeof l !== "object") {
      return Pervasives.invalid_arg("Map.bal");
    }
    let lr = l._3;
    let ld = l._2;
    let lv = l._1;
    let ll = l._0;
    if (height$1(ll) >= height$1(lr)) {
      return create$1(ll, lv, ld, create$1(lr, x, d, r));
    } else if (typeof lr !== "object") {
      return Pervasives.invalid_arg("Map.bal");
    } else {
      return create$1(create$1(ll, lv, ld, lr._0), lr._1, lr._2, create$1(lr._3, x, d, r));
    }
  }
  if (hr <= (hl + 2 | 0)) {
    return {
      TAG: "Node",
      _0: l,
      _1: x,
      _2: d,
      _3: r,
      _4: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
    };
  }
  if (typeof r !== "object") {
    return Pervasives.invalid_arg("Map.bal");
  }
  let rr = r._3;
  let rd = r._2;
  let rv = r._1;
  let rl = r._0;
  if (height$1(rr) >= height$1(rl)) {
    return create$1(create$1(l, x, d, rl), rv, rd, rr);
  } else if (typeof rl !== "object") {
    return Pervasives.invalid_arg("Map.bal");
  } else {
    return create$1(create$1(l, x, d, rl._0), rl._1, rl._2, create$1(rl._3, rv, rd, rr));
  }
}

function is_empty$1(x) {
  return typeof x !== "object";
}

function add$1(x, data, x_) {
  if (typeof x_ !== "object") {
    return {
      TAG: "Node",
      _0: "Empty",
      _1: x,
      _2: data,
      _3: "Empty",
      _4: 1
    };
  }
  let r = x_._3;
  let d = x_._2;
  let v = x_._1;
  let l = x_._0;
  let c = Primitive_string.compare(x, v);
  if (c === 0) {
    return {
      TAG: "Node",
      _0: l,
      _1: x,
      _2: data,
      _3: r,
      _4: x_._4
    };
  } else if (c < 0) {
    return bal$1(add$1(x, data, l), v, d, r);
  } else {
    return bal$1(l, v, d, add$1(x, data, r));
  }
}

function find$1(x, _x_) {
  while (true) {
    let x_ = _x_;
    if (typeof x_ !== "object") {
      throw {
        RE_EXN_ID: "Not_found",
        Error: new Error()
      };
    }
    let c = Primitive_string.compare(x, x_._1);
    if (c === 0) {
      return x_._2;
    }
    _x_ = c < 0 ? x_._0 : x_._3;
    continue;
  };
}

function mem$1(x, _x_) {
  while (true) {
    let x_ = _x_;
    if (typeof x_ !== "object") {
      return false;
    }
    let c = Primitive_string.compare(x, x_._1);
    if (c === 0) {
      return true;
    }
    _x_ = c < 0 ? x_._0 : x_._3;
    continue;
  };
}

function min_binding$1(_x) {
  while (true) {
    let x = _x;
    if (typeof x !== "object") {
      throw {
        RE_EXN_ID: "Not_found",
        Error: new Error()
      };
    }
    let l = x._0;
    if (typeof l !== "object") {
      return [
        x._1,
        x._2
      ];
    }
    _x = l;
    continue;
  };
}

function max_binding$1(_x) {
  while (true) {
    let x = _x;
    if (typeof x !== "object") {
      throw {
        RE_EXN_ID: "Not_found",
        Error: new Error()
      };
    }
    let r = x._3;
    if (typeof r !== "object") {
      return [
        x._1,
        x._2
      ];
    }
    _x = r;
    continue;
  };
}

function remove_min_binding$1(x) {
  if (typeof x !== "object") {
    return Pervasives.invalid_arg("Map.remove_min_elt");
  }
  let l = x._0;
  if (typeof l !== "object") {
    return x._3;
  } else {
    return bal$1(remove_min_binding$1(l), x._1, x._2, x._3);
  }
}

function remove$1(x, x_) {
  if (typeof x_ !== "object") {
    return "Empty";
  }
  let r = x_._3;
  let d = x_._2;
  let v = x_._1;
  let l = x_._0;
  let c = Primitive_string.compare(x, v);
  if (c === 0) {
    if (typeof l !== "object") {
      return r;
    }
    if (typeof r !== "object") {
      return l;
    }
    let match = min_binding$1(r);
    return bal$1(l, match[0], match[1], remove_min_binding$1(r));
  } else if (c < 0) {
    return bal$1(remove$1(x, l), v, d, r);
  } else {
    return bal$1(l, v, d, remove$1(x, r));
  }
}

function iter$1(f, _x) {
  while (true) {
    let x = _x;
    if (typeof x !== "object") {
      return;
    }
    iter$1(f, x._0);
    f(x._1, x._2);
    _x = x._3;
    continue;
  };
}

function map$1(f, x) {
  if (typeof x !== "object") {
    return "Empty";
  }
  let l$p = map$1(f, x._0);
  let d$p = f(x._2);
  let r$p = map$1(f, x._3);
  return {
    TAG: "Node",
    _0: l$p,
    _1: x._1,
    _2: d$p,
    _3: r$p,
    _4: x._4
  };
}

function mapi$1(f, x) {
  if (typeof x !== "object") {
    return "Empty";
  }
  let v = x._1;
  let l$p = mapi$1(f, x._0);
  let d$p = f(v, x._2);
  let r$p = mapi$1(f, x._3);
  return {
    TAG: "Node",
    _0: l$p,
    _1: v,
    _2: d$p,
    _3: r$p,
    _4: x._4
  };
}

function fold$1(f, _m, _accu) {
  while (true) {
    let accu = _accu;
    let m = _m;
    if (typeof m !== "object") {
      return accu;
    }
    _accu = f(m._1, m._2, fold$1(f, m._0, accu));
    _m = m._3;
    continue;
  };
}

function for_all$1(p, _x) {
  while (true) {
    let x = _x;
    if (typeof x !== "object") {
      return true;
    }
    if (!p(x._1, x._2)) {
      return false;
    }
    if (!for_all$1(p, x._0)) {
      return false;
    }
    _x = x._3;
    continue;
  };
}

function exists$1(p, _x) {
  while (true) {
    let x = _x;
    if (typeof x !== "object") {
      return false;
    }
    if (p(x._1, x._2)) {
      return true;
    }
    if (exists$1(p, x._0)) {
      return true;
    }
    _x = x._3;
    continue;
  };
}

function add_min_binding$1(k, v, x) {
  if (typeof x !== "object") {
    return singleton$1(k, v);
  } else {
    return bal$1(add_min_binding$1(k, v, x._0), x._1, x._2, x._3);
  }
}

function add_max_binding$1(k, v, x) {
  if (typeof x !== "object") {
    return singleton$1(k, v);
  } else {
    return bal$1(x._0, x._1, x._2, add_max_binding$1(k, v, x._3));
  }
}

function join$1(l, v, d, r) {
  if (typeof l !== "object") {
    return add_min_binding$1(v, d, r);
  }
  let lh = l._4;
  if (typeof r !== "object") {
    return add_max_binding$1(v, d, l);
  }
  let rh = r._4;
  if (lh > (rh + 2 | 0)) {
    return bal$1(l._0, l._1, l._2, join$1(l._3, v, d, r));
  } else if (rh > (lh + 2 | 0)) {
    return bal$1(join$1(l, v, d, r._0), r._1, r._2, r._3);
  } else {
    return create$1(l, v, d, r);
  }
}

function concat$1(t1, t2) {
  if (typeof t1 !== "object") {
    return t2;
  }
  if (typeof t2 !== "object") {
    return t1;
  }
  let match = min_binding$1(t2);
  return join$1(t1, match[0], match[1], remove_min_binding$1(t2));
}

function concat_or_join$1(t1, v, d, t2) {
  if (d !== undefined) {
    return join$1(t1, v, Primitive_option.valFromOption(d), t2);
  } else {
    return concat$1(t1, t2);
  }
}

function split$1(x, x_) {
  if (typeof x_ !== "object") {
    return [
      "Empty",
      undefined,
      "Empty"
    ];
  }
  let r = x_._3;
  let d = x_._2;
  let v = x_._1;
  let l = x_._0;
  let c = Primitive_string.compare(x, v);
  if (c === 0) {
    return [
      l,
      Primitive_option.some(d),
      r
    ];
  }
  if (c < 0) {
    let match = split$1(x, l);
    return [
      match[0],
      match[1],
      join$1(match[2], v, d, r)
    ];
  }
  let match$1 = split$1(x, r);
  return [
    join$1(l, v, d, match$1[0]),
    match$1[1],
    match$1[2]
  ];
}

function merge$1(f, s1, s2) {
  if (typeof s1 !== "object") {
    if (typeof s2 !== "object") {
      return "Empty";
    }
    
  } else {
    let v1 = s1._1;
    if (s1._4 >= height$1(s2)) {
      let match = split$1(v1, s2);
      return concat_or_join$1(merge$1(f, s1._0, match[0]), v1, f(v1, Primitive_option.some(s1._2), match[1]), merge$1(f, s1._3, match[2]));
    }
    
  }
  if (typeof s2 !== "object") {
    throw {
      RE_EXN_ID: "Assert_failure",
      _1: [
        "inline_map2_test.res",
        359,
        11
      ],
      Error: new Error()
    };
  }
  let v2 = s2._1;
  let match$1 = split$1(v2, s1);
  return concat_or_join$1(merge$1(f, match$1[0], s2._0), v2, f(v2, match$1[1], Primitive_option.some(s2._2)), merge$1(f, match$1[2], s2._3));
}

function filter$1(p, x) {
  if (typeof x !== "object") {
    return "Empty";
  }
  let d = x._2;
  let v = x._1;
  let l$p = filter$1(p, x._0);
  let pvd = p(v, d);
  let r$p = filter$1(p, x._3);
  if (pvd) {
    return join$1(l$p, v, d, r$p);
  } else {
    return concat$1(l$p, r$p);
  }
}

function partition$1(p, x) {
  if (typeof x !== "object") {
    return [
      "Empty",
      "Empty"
    ];
  }
  let d = x._2;
  let v = x._1;
  let match = partition$1(p, x._0);
  let lf = match[1];
  let lt = match[0];
  let pvd = p(v, d);
  let match$1 = partition$1(p, x._3);
  let rf = match$1[1];
  let rt = match$1[0];
  if (pvd) {
    return [
      join$1(lt, v, d, rt),
      concat$1(lf, rf)
    ];
  } else {
    return [
      concat$1(lt, rt),
      join$1(lf, v, d, rf)
    ];
  }
}

function cons_enum$1(_m, _e) {
  while (true) {
    let e = _e;
    let m = _m;
    if (typeof m !== "object") {
      return e;
    }
    _e = {
      TAG: "More",
      _0: m._1,
      _1: m._2,
      _2: m._3,
      _3: e
    };
    _m = m._0;
    continue;
  };
}

function compare$1(cmp, m1, m2) {
  let _e1 = cons_enum$1(m1, "End");
  let _e2 = cons_enum$1(m2, "End");
  while (true) {
    let e2 = _e2;
    let e1 = _e1;
    if (typeof e1 !== "object") {
      if (typeof e2 !== "object") {
        return 0;
      } else {
        return -1;
      }
    }
    if (typeof e2 !== "object") {
      return 1;
    }
    let c = Primitive_string.compare(e1._0, e2._0);
    if (c !== 0) {
      return c;
    }
    let c$1 = cmp(e1._1, e2._1);
    if (c$1 !== 0) {
      return c$1;
    }
    _e2 = cons_enum$1(e2._2, e2._3);
    _e1 = cons_enum$1(e1._2, e1._3);
    continue;
  };
}

function equal$1(cmp, m1, m2) {
  let _e1 = cons_enum$1(m1, "End");
  let _e2 = cons_enum$1(m2, "End");
  while (true) {
    let e2 = _e2;
    let e1 = _e1;
    if (typeof e1 !== "object") {
      return typeof e2 !== "object";
    }
    if (typeof e2 !== "object") {
      return false;
    }
    if (e1._0 !== e2._0) {
      return false;
    }
    if (!cmp(e1._1, e2._1)) {
      return false;
    }
    _e2 = cons_enum$1(e2._2, e2._3);
    _e1 = cons_enum$1(e1._2, e1._3);
    continue;
  };
}

function cardinal$1(x) {
  if (typeof x !== "object") {
    return 0;
  } else {
    return (cardinal$1(x._0) + 1 | 0) + cardinal$1(x._3) | 0;
  }
}

function bindings_aux$1(_accu, _x) {
  while (true) {
    let x = _x;
    let accu = _accu;
    if (typeof x !== "object") {
      return accu;
    }
    _x = x._0;
    _accu = {
      hd: [
        x._1,
        x._2
      ],
      tl: bindings_aux$1(accu, x._3)
    };
    continue;
  };
}

function bindings$1(s) {
  return bindings_aux$1(/* [] */0, s);
}

let SMap = {
  height: height$1,
  create: create$1,
  singleton: singleton$1,
  bal: bal$1,
  empty: "Empty",
  is_empty: is_empty$1,
  add: add$1,
  find: find$1,
  mem: mem$1,
  min_binding: min_binding$1,
  max_binding: max_binding$1,
  remove_min_binding: remove_min_binding$1,
  remove: remove$1,
  iter: iter$1,
  map: map$1,
  mapi: mapi$1,
  fold: fold$1,
  for_all: for_all$1,
  exists: exists$1,
  add_min_binding: add_min_binding$1,
  add_max_binding: add_max_binding$1,
  join: join$1,
  concat: concat$1,
  concat_or_join: concat_or_join$1,
  split: split$1,
  merge: merge$1,
  filter: filter$1,
  partition: partition$1,
  cons_enum: cons_enum$1,
  compare: compare$1,
  equal: equal$1,
  cardinal: cardinal$1,
  bindings_aux: bindings_aux$1,
  bindings: bindings$1,
  choose: min_binding$1
};

let s = Belt_List.reduceReverse({
  hd: [
    "10",
    /* 'a' */97
  ],
  tl: {
    hd: [
      "3",
      /* 'b' */98
    ],
    tl: {
      hd: [
        "7",
        /* 'c' */99
      ],
      tl: {
        hd: [
          "20",
          /* 'd' */100
        ],
        tl: /* [] */0
      }
    }
  }
}, "Empty", (acc, param) => add$1(param[0], param[1], acc));

Mt.from_pair_suites("Inline_map2_test", {
  hd: [
    "assertion1",
    () => ({
      TAG: "Eq",
      _0: find(10, m),
      _1: /* 'a' */97
    })
  ],
  tl: {
    hd: [
      "assertion2",
      () => ({
        TAG: "Eq",
        _0: find$1("10", s),
        _1: /* 'a' */97
      })
    ],
    tl: /* [] */0
  }
});

let empty = "Empty";

export {
  Make,
  IntMap,
  empty,
  m,
  SMap,
  s,
}
/* m Not a pure module */
