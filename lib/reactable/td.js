"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Td = void 0;

var _react = _interopRequireDefault(require("react"));

var _is_react_component = require("./lib/is_react_component");

var _stringable = require("./lib/stringable");

var _unsafe = require("./unsafe");

var _filter_props_from = require("./lib/filter_props_from");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Td =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Td, _React$Component);

  function Td() {
    _classCallCheck(this, Td);

    return _possibleConstructorReturn(this, _getPrototypeOf(Td).apply(this, arguments));
  }

  _createClass(Td, [{
    key: "stringifyIfNotReactComponent",
    value: function stringifyIfNotReactComponent(object) {
      if (!(0, _is_react_component.isReactComponent)(object) && (0, _stringable.stringable)(object) && typeof object !== 'undefined') {
        return object.toString();
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      // Attach any properties on the column to this Td object to allow things like custom event handlers
      var mergedProps = (0, _filter_props_from.filterPropsFrom)(this.props);

      if (_typeof(this.props.column) === 'object') {
        for (var key in this.props.column) {
          if (key !== 'key' && key !== 'name') {
            mergedProps[key] = this.props.column[key];
          }
        }
      } // handleClick aliases onClick event


      mergedProps.onClick = this.props.handleClick;
      var stringifiedChildProps;

      if (typeof this.props.data === 'undefined') {
        stringifiedChildProps = this.stringifyIfNotReactComponent(this.props.children);
      }

      if ((0, _unsafe.isUnsafe)(this.props.children)) {
        return _react.default.createElement("td", _extends({}, mergedProps, {
          dangerouslySetInnerHTML: {
            __html: this.props.children.toString()
          }
        }));
      } else {
        return _react.default.createElement("td", mergedProps, stringifiedChildProps || this.props.children);
      }
    }
  }]);

  return Td;
}(_react.default.Component);

exports.Td = Td;
;
