"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _table = require("./reactable/table");

var _tr = require("./reactable/tr");

var _td = require("./reactable/td");

var _th = require("./reactable/th");

var _tfoot = require("./reactable/tfoot");

var _thead = require("./reactable/thead");

var _sort = require("./reactable/sort");

var _unsafe = require("./reactable/unsafe");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_react.default.Children.children = function (children) {
  return _react.default.Children.map(children, function (x) {
    return x;
  }) || [];
}; // Array.prototype.find polyfill - see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find


if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function value(predicate) {
      if (this === null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }

      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;

      for (var i = 0; i < length; i++) {
        if (i in list) {
          value = list[i];

          if (predicate.call(thisArg, value, i, list)) {
            return value;
          }
        }
      }

      return undefined;
    }
  });
}

var Reactable = {
  Table: _table.Table,
  Tr: _tr.Tr,
  Td: _td.Td,
  Th: _th.Th,
  Tfoot: _tfoot.Tfoot,
  Thead: _thead.Thead,
  Sort: _sort.Sort,
  unsafe: _unsafe.unsafe
};
var _default = Reactable;
exports.default = _default;

if (typeof window !== 'undefined') {
  window.Reactable = Reactable;
}
