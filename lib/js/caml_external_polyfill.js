'use strict';


let getGlobalThis = (function(){
  if (typeof globalThis !== 'undefined') return globalThis;
	if (typeof self !== 'undefined') return self;
	if (typeof window !== 'undefined') return window;
	if (typeof global !== 'undefined') return global;
	if (typeof this !== 'undefined') return this;
	throw new Error('Unable to locate global this');
});

let resolve = (function(s){
  var myGlobal = getGlobalThis();
  if (myGlobal[s] === undefined){
    throw new Error(s + " not polyfilled by ReScript yet\n")
  }
  return myGlobal[s]
});

let register = (function(s,fn){
  var myGlobal = getGlobalThis();
  myGlobal[s] = fn 
  return 0
});

exports.getGlobalThis = getGlobalThis;
exports.resolve = resolve;
exports.register = register;
/* No side effect */
