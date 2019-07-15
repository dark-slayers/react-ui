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

var _TextLine = require('./TextLine.jsx');

var _TextLine2 = _interopRequireDefault(_TextLine);

var _Thead = require('./Thead.jsx');

var _Thead2 = _interopRequireDefault(_Thead);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 文本表格，
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 需要提供属性：
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * headList，lineList，lineFieldList。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 可选属性：color
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var TextTable = function (_React$Component) {
  _inherits(TextTable, _React$Component);

  function TextTable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextTable.__proto__ || Object.getPrototypeOf(TextTable)).call.apply(_ref, [this].concat(args))), _this), _this.getColor = function () {
      return _this.props.color ? _this.props.color : '#FFFFFF';
    }, _this.getHeadList = function () {
      return _ReactUtil2.default.getPropsList(_this.props, 'headList');
    }, _this.getLineList = function () {
      return _ReactUtil2.default.getPropsList(_this.props, 'lineList');
    }, _this.getLineFieldList = function () {
      return _ReactUtil2.default.getPropsList(_this.props, 'lineFieldList');
    }, _this.getStyleChangeTh = function () {
      return _this.props.styleChangeTh ? _this.props.styleChangeTh : {};
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextTable, [{
    key: 'render',
    value: function render() {
      var tableStyle = {
        borderCollapse: 'collapse',
        width: '100%',
        textAlign: 'center',
        fontSize: 14,
        fontFamily: '微软雅黑',
        fontColor: '#3c3c3c'
      };
      var lineFieldList = this.getLineFieldList();
      var children = this.getLineList().map(function (ele, index) {
        var color = index % 2 == 0 ? '#ffffff' : '#fcfcfc';
        return _react2.default.createElement(_TextLine2.default, { ele: ele, fieldList: lineFieldList, key: index, color: color });
      });
      var headList = this.getHeadList();
      var styleChangeTh = this.getStyleChangeTh();
      return _react2.default.createElement(
        'table',
        { style: tableStyle },
        _react2.default.createElement(_Thead2.default, { list: headList, styleChangeTh: styleChangeTh }),
        _react2.default.createElement(
          'tbody',
          null,
          children
        )
      );
    }
  }]);

  return TextTable;
}(_react2.default.Component);

exports.default = TextTable;