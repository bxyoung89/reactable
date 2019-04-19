"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsafe = unsafe;
exports.isUnsafe = isUnsafe;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Unsafe =
/*#__PURE__*/
function () {
  function Unsafe(content) {
    _classCallCheck(this, Unsafe);

    this.content = content;
  }

  _createClass(Unsafe, [{
    key: "toString",
    value: function toString() {
      return this.content;
    }
  }]);

  return Unsafe;
}();

function unsafe(str) {
  return new Unsafe(str);
}

;

function isUnsafe(obj) {
  return obj instanceof Unsafe;
}

;
