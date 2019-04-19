"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Thead = void 0;

var _react = _interopRequireDefault(require("react"));

var _th = require("./th");

var _filterer = require("./filterer");

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

var Thead =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Thead, _React$Component);

  function Thead() {
    _classCallCheck(this, Thead);

    return _possibleConstructorReturn(this, _getPrototypeOf(Thead).apply(this, arguments));
  }

  _createClass(Thead, [{
    key: "handleClickTh",
    value: function handleClickTh(column) {
      this.props.onSort(column.key);
    }
  }, {
    key: "handleKeyDownTh",
    value: function handleKeyDownTh(column, event) {
      if (event.keyCode === 13) {
        this.props.onSort(column.key);
      }
    }
  }, {
    key: "render",
    value: function render() {
      // Declare the list of Ths
      var Ths = [];

      for (var index = 0; index < this.props.columns.length; index++) {
        var column = this.props.columns[index];
        var thClass = "reactable-th-".concat(column.key.replace(/\s+/g, '-').toLowerCase());
        var sortClass = '';
        var thRole = null;

        if (this.props.sortableColumns[column.key]) {
          sortClass += 'reactable-header-sortable ';
          thRole = 'button';
        }

        if (this.props.sort.column === column.key) {
          sortClass += 'reactable-header-sort';

          if (this.props.sort.direction === 1) {
            sortClass += '-asc';
          } else {
            sortClass += '-desc';
          }
        }

        if (sortClass.length > 0) {
          thClass += " ".concat(sortClass);
        }

        if (_typeof(column.props) === 'object' && typeof column.props.className === 'string') {
          thClass += " ".concat(column.props.className);
        }

        Ths.push(_react.default.createElement(_th.Th, _extends({}, column.props, {
          className: thClass,
          key: index,
          onClick: this.handleClickTh.bind(this, column),
          onKeyDown: this.handleKeyDownTh.bind(this, column),
          role: thRole,
          tabIndex: "0"
        }), column.label));
      } // Manually transfer props


      var props = (0, _filter_props_from.filterPropsFrom)(this.props);
      return _react.default.createElement("thead", props, this.props.filtering === true ? _react.default.createElement(_filterer.Filterer, {
        colSpan: this.props.columns.length,
        onFilter: this.props.onFilter,
        placeholder: this.props.filterPlaceholder,
        value: this.props.currentFilter,
        className: this.props.filterClassName
      }) : null, _react.default.createElement("tr", {
        className: "reactable-column-header"
      }, Ths));
    }
  }], [{
    key: "getColumns",
    value: function getColumns(component) {
      // Can't use React.Children.map since that doesn't return a proper array
      var columns = [];

      _react.default.Children.forEach(component.props.children, function (th) {
        var column = {};
        if (!th) return;

        if (typeof th.props !== 'undefined') {
          column.props = (0, _filter_props_from.filterPropsFrom)(th.props); // use the content as the label & key

          if (typeof th.props.children !== 'undefined') {
            column.label = th.props.children;
            column.key = column.label;
          } // the key in the column attribute supersedes the one defined previously


          if (typeof th.props.column === 'string') {
            column.key = th.props.column; // in case we don't have a label yet

            if (typeof column.label === 'undefined') {
              column.label = column.key;
            }
          }
        }

        if (typeof column.key === 'undefined') {
          throw new TypeError('<th> must have either a "column" property or a string ' + 'child');
        } else {
          columns.push(column);
        }
      });

      return columns;
    }
  }]);

  return Thead;
}(_react.default.Component);

exports.Thead = Thead;
;
