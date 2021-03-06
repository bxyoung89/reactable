"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tr = void 0;

var _react = _interopRequireDefault(require("react"));

var _td = require("./td");

var _to_array = require("./lib/to_array");

var _filter_props_from = require("./lib/filter_props_from");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Tr =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tr, _React$Component);

  function Tr() {
    _classCallCheck(this, Tr);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tr).apply(this, arguments));
  }

  _createClass(Tr, [{
    key: "render",
    value: function render() {
      var children = (0, _to_array.toArray)(_react.default.Children.children(this.props.children));

      if (this.props.data && this.props.columns && typeof this.props.columns.map === 'function') {
        if (typeof children.concat === 'undefined') {
          console.log(children);
        }

        children = children.concat(this.props.columns.map(function (_ref, i) {
          var _ref$props = _ref.props,
              props = _ref$props === void 0 ? {} : _ref$props,
              column = _objectWithoutProperties(_ref, ["props"]);

          if (this.props.data.hasOwnProperty(column.key)) {
            var value = this.props.data[column.key];

            if (typeof value !== 'undefined' && value !== null && value.__reactableMeta === true) {
              props = value.props;
              value = value.value;
            }

            return _react.default.createElement(_td.Td, _extends({
              column: column,
              key: column.key
            }, props), value);
          } else {
            return _react.default.createElement(_td.Td, {
              column: column,
              key: column.key
            });
          }
        }.bind(this)));
      } // Manually transfer props


      var props = (0, _filter_props_from.filterPropsFrom)(this.props);
      return _react.default.createElement('tr', props, children);
    }
  }]);

  return Tr;
}(_react.default.Component);

exports.Tr = Tr;
;
Tr.childNode = _td.Td;
Tr.dataType = 'object';
