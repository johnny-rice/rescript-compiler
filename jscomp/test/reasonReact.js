// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Curry = require("../../lib/js/curry.js");
let React = require("react");

function createDomElement(s, props, children) {
  let vararg = [
    s,
    props
  ].concat(children);
  return Curry._2(React.createElement.apply, null, vararg);
}

function anyToUnit(param) {
  
}

function anyToTrue(param) {
  return true;
}

function willReceivePropsDefault(param) {
  return param.state;
}

function renderDefault(_self) {
  return "RenderNotImplemented";
}

function initialStateDefault(param) {
  
}

function reducerDefault(_action, _state) {
  return "NoUpdate";
}

function basicComponent(debugName) {
  return {
    debugName: debugName,
    reactClassInternal: debugName,
    handedOffState: {
      contents: undefined
    },
    willReceiveProps: willReceivePropsDefault,
    didMount: anyToUnit,
    didUpdate: anyToUnit,
    willUnmount: anyToUnit,
    willUpdate: anyToUnit,
    shouldUpdate: anyToTrue,
    render: renderDefault,
    initialState: initialStateDefault,
    retainedProps: undefined,
    reducer: reducerDefault,
    jsElementWrapped: undefined
  };
}

let statelessComponent = basicComponent;

let statelessComponentWithRetainedProps = basicComponent;

let reducerComponent = basicComponent;

let reducerComponentWithRetainedProps = basicComponent;

function element(keyOpt, refOpt, component) {
  let key = keyOpt !== undefined ? keyOpt : undefined;
  let ref = refOpt !== undefined ? refOpt : undefined;
  let element$1 = {
    TAG: "Element",
    _0: component
  };
  let jsElementWrapped = component.jsElementWrapped;
  if (jsElementWrapped !== undefined) {
    return Curry._2(jsElementWrapped, key, ref);
  } else {
    return React.createElement(component.reactClassInternal, {
      key: key,
      ref: ref,
      reasonProps: element$1
    });
  }
}

function wrapReasonForJs(component, jsPropsToReason) {
  let uncurriedJsPropsToReason = Curry.__1(jsPropsToReason);
  component.reactClassInternal.prototype.jsPropsToReason = uncurriedJsPropsToReason;
  return component.reactClassInternal;
}

let dummyInteropComponent = basicComponent("interop");

function wrapJsForReason(reactClass, props, children) {
  let jsElementWrapped = (function (param, param$1) {
    let props$1 = Object.assign(Object.assign({}, props), {
      ref: param$1,
      key: param
    });
    let varargs = [
      reactClass,
      props$1
    ].concat(children);
    return Curry._2(React.createElement.apply, null, varargs);
  });
  return {
    debugName: dummyInteropComponent.debugName,
    reactClassInternal: dummyInteropComponent.reactClassInternal,
    handedOffState: dummyInteropComponent.handedOffState,
    willReceiveProps: dummyInteropComponent.willReceiveProps,
    didMount: dummyInteropComponent.didMount,
    didUpdate: dummyInteropComponent.didUpdate,
    willUnmount: dummyInteropComponent.willUnmount,
    willUpdate: dummyInteropComponent.willUpdate,
    shouldUpdate: dummyInteropComponent.shouldUpdate,
    render: dummyInteropComponent.render,
    initialState: dummyInteropComponent.initialState,
    retainedProps: dummyInteropComponent.retainedProps,
    reducer: dummyInteropComponent.reducer,
    jsElementWrapped: jsElementWrapped
  };
}

let Router;

exports.statelessComponent = statelessComponent;
exports.statelessComponentWithRetainedProps = statelessComponentWithRetainedProps;
exports.reducerComponent = reducerComponent;
exports.reducerComponentWithRetainedProps = reducerComponentWithRetainedProps;
exports.element = element;
exports.wrapReasonForJs = wrapReasonForJs;
exports.createDomElement = createDomElement;
exports.wrapJsForReason = wrapJsForReason;
exports.Router = Router;
/* dummyInteropComponent Not a pure module */
