"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paginator = void 0;

var _react = _interopRequireDefault(require("react"));

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

function pageHref(num) {
  return "#page-".concat(num + 1);
}

var Paginator =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Paginator, _React$Component);

  function Paginator() {
    _classCallCheck(this, Paginator);

    return _possibleConstructorReturn(this, _getPrototypeOf(Paginator).apply(this, arguments));
  }

  _createClass(Paginator, [{
    key: "handlePrevious",
    value: function handlePrevious(e) {
      e.preventDefault();
      this.props.onPageChange(this.props.currentPage - 1);
    }
  }, {
    key: "handleNext",
    value: function handleNext(e) {
      e.preventDefault();
      this.props.onPageChange(this.props.currentPage + 1);
    }
  }, {
    key: "handlePageButton",
    value: function handlePageButton(page, e) {
      e.preventDefault();
      this.props.onPageChange(page);
    }
  }, {
    key: "renderPrevious",
    value: function renderPrevious() {
      if (this.props.currentPage > 0) {
        return _react.default.createElement("a", {
          className: "reactable-previous-page",
          href: pageHref(this.props.currentPage - 1),
          onClick: this.handlePrevious.bind(this)
        }, this.props.previousPageLabel || 'Previous');
      }
    }
  }, {
    key: "renderNext",
    value: function renderNext() {
      if (this.props.currentPage < this.props.numPages - 1) {
        return _react.default.createElement("a", {
          className: "reactable-next-page",
          href: pageHref(this.props.currentPage + 1),
          onClick: this.handleNext.bind(this)
        }, this.props.nextPageLabel || 'Next');
      }
    }
  }, {
    key: "renderPageButton",
    value: function renderPageButton(className, pageNum) {
      return _react.default.createElement("a", {
        className: className,
        key: pageNum,
        href: pageHref(pageNum),
        onClick: this.handlePageButton.bind(this, pageNum)
      }, pageNum + 1);
    }
  }, {
    key: "render",
    value: function render() {
      if (typeof this.props.colSpan === 'undefined') {
        throw new TypeError('Must pass a colSpan argument to Paginator');
      }

      if (typeof this.props.numPages === 'undefined') {
        throw new TypeError('Must pass a non-zero numPages argument to Paginator');
      }

      if (typeof this.props.currentPage === 'undefined') {
        throw new TypeError('Must pass a currentPage argument to Paginator');
      }

      var pageButtons = [];
      var pageButtonLimit = this.props.pageButtonLimit;
      var currentPage = this.props.currentPage;
      var numPages = this.props.numPages;
      var lowerHalf = Math.round(pageButtonLimit / 2);
      var upperHalf = pageButtonLimit - lowerHalf;

      for (var i = 0; i < this.props.numPages; i++) {
        var showPageButton = false;
        var pageNum = i;
        var className = "reactable-page-button";

        if (currentPage === i) {
          className += " reactable-current-page";
        }

        pageButtons.push(this.renderPageButton(className, pageNum));
      }

      if (currentPage - pageButtonLimit + lowerHalf > 0) {
        if (currentPage > numPages - lowerHalf) {
          pageButtons.splice(0, numPages - pageButtonLimit);
        } else {
          pageButtons.splice(0, currentPage - pageButtonLimit + lowerHalf);
        }
      }

      if (numPages - currentPage > upperHalf) {
        pageButtons.splice(pageButtonLimit, pageButtons.length - pageButtonLimit);
      }

      return _react.default.createElement("tbody", {
        className: "reactable-pagination"
      }, _react.default.createElement("tr", null, _react.default.createElement("td", {
        colSpan: this.props.colSpan
      }, this.renderPrevious(), pageButtons, this.renderNext())));
    }
  }]);

  return Paginator;
}(_react.default.Component);

exports.Paginator = Paginator;
;
