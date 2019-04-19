"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filterer = exports.FiltererInput = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FiltererInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FiltererInput, _React$Component);

  function FiltererInput() {
    _classCallCheck(this, FiltererInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(FiltererInput).apply(this, arguments));
  }

  _createClass(FiltererInput, [{
    key: "onChange",
    value: function onChange() {
      this.props.onFilter(_reactDom.default.findDOMNode(this).value);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("input", {
        type: "text",
        className: this.props.className,
        placeholder: this.props.placeholder,
        value: this.props.value,
        onKeyUp: this.onChange.bind(this),
        onChange: this.onChange.bind(this)
      });
    }
  }]);

  return FiltererInput;
}(_react.default.Component);

exports.FiltererInput = FiltererInput;
;

var Filterer =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Filterer, _React$Component2);

  function Filterer() {
    _classCallCheck(this, Filterer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Filterer).apply(this, arguments));
  }

  _createClass(Filterer, [{
    key: "render",
    value: function render() {
      if (typeof this.props.colSpan === 'undefined') {
        throw new TypeError('Must pass a colSpan argument to Filterer');
      }

      return _react.default.createElement("tr", {
        className: "reactable-filterer"
      }, _react.default.createElement("td", {
        colSpan: this.props.colSpan
      }, _react.default.createElement(FiltererInput, {
        onFilter: this.props.onFilter,
        value: this.props.value,
        placeholder: this.props.placeholder,
        className: this.props.className ? 'reactable-filter-input ' + this.props.className : 'reactable-filter-input'
      })));
    }
  }]);

  return Filterer;
}(_react.default.Component);

exports.Filterer = Filterer;
;
