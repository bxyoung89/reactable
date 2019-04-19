"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringable = stringable;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function stringable(thing) {
  return thing !== null && typeof thing !== 'undefined' && _typeof(thing.toString === 'function');
}
