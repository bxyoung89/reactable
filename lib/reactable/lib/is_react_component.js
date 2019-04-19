"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isReactComponent = isReactComponent;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// this is a bit hacky - it'd be nice if React exposed an API for this
function isReactComponent(thing) {
  return thing !== null && _typeof(thing) === 'object' && typeof thing.props !== 'undefined';
}
