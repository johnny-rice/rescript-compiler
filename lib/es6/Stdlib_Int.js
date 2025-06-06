

import * as Stdlib_Array from "./Stdlib_Array.js";

function fromString(x, radix) {
  let maybeInt = radix !== undefined ? parseInt(x, radix) : parseInt(x);
  if (isNaN(maybeInt) || maybeInt > 2147483647 || maybeInt < -2147483648) {
    return;
  } else {
    return maybeInt | 0;
  }
}

function abs(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x | 0;
  }
}

function range(start, end, optionsOpt) {
  let options = optionsOpt !== undefined ? optionsOpt : ({});
  let isInverted = start > end;
  let n = options.step;
  let step;
  if (n !== undefined) {
    if (n !== 0) {
      step = n;
    } else {
      if (start !== end) {
        throw new RangeError("Incorrect range arguments");
      }
      step = n;
    }
  } else {
    step = isInverted ? -1 : 1;
  }
  let length;
  if (isInverted === step >= 0) {
    length = 0;
  } else if (step === 0) {
    length = options.inclusive === true ? 1 : 0;
  } else {
    let range$1 = isInverted ? start - end | 0 : end - start | 0;
    let range$2 = options.inclusive === true ? range$1 + 1 | 0 : range$1;
    length = Math.ceil(range$2 / abs(step)) | 0;
  }
  return Stdlib_Array.fromInitializer(length, i => start + (i * step | 0) | 0);
}

function rangeWithOptions(start, end, options) {
  return range(start, end, options);
}

function clamp(min, max, value) {
  let value$1 = max !== undefined && max < value ? max : value;
  if (min !== undefined && min > value$1) {
    return min;
  } else {
    return value$1;
  }
}

let Ref = {};

let Constants = {
  minValue: -2147483648,
  maxValue: 2147483647
};

export {
  Constants,
  fromString,
  range,
  rangeWithOptions,
  clamp,
  Ref,
}
/* No side effect */
