'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ReactUtil = require('../../../js/ReactUtil.js');

var _ReactUtil2 = _interopRequireDefault(_ReactUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextLine = function (_React$Component) {
  _inherits(TextLine, _React$Component);

  function TextLine() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextLine);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextLine.__proto__ || Object.getPrototypeOf(TextLine)).call.apply(_ref, [this].concat(args))), _this), _this.getColor = function () {
      var color = _this.props.color ? _this.props.color : "#FFFFFF";
      return color;
    }, _this.getFieldList = function () {
      return _ReactUtil2.default.getPropsList(_this.props, 'fieldList');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextLine, [{
    key: 'render',
    value: function render() {
      var color = this.getColor();
      var tdStyle = {
        border: '1px solid black',
        height: 25
      };
      var trStyle = {
        backgroundColor: color
      };
      var ele = this.props.ele;
      var children = this.getFieldList().map(function (name, index) {
        var text = ele[name] ? ele[name] : "";
        return _react2.default.createElement(
          'td',
          { style: tdStyle, key: index },
          text
        );
      });
      return _react2.default.createElement(
        'tr',
        { style: trStyle },
        children
      );
    }
  }]);

  return TextLine;
}(_react2.default.Component);

exports.default = TextLine;