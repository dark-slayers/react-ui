'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**基本的文本输入框，输入框需要提供：label、name、obj三个属性
*label为输入框标签，name对应obj对象state参数相应KEY,
*obj为调用此输入框的组件，obj需要有handleChange方法或者继承handleChange方法
*/
var TextInput = function (_React$Component) {
  _inherits(TextInput, _React$Component);

  function TextInput() {
    _classCallCheck(this, TextInput);

    return _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).apply(this, arguments));
  }

  _createClass(TextInput, [{
    key: 'render',
    value: function render() {
      var obj = this.props.obj;
      var name = this.props.name;
      var label = this.props.label;
      var labelWidth = this.props.labelWidth ? this.props.labelWidth : 100;
      var inputWidth = this.props.inputWidth ? this.props.inputWidth : 100;
      var labelStyle = {
        display: 'inline-flex',
        justifyContent: 'flex-end',
        width: labelWidth
      };
      var inputStyle = {
        display: 'inline-flex',
        width: inputWidth,
        borderColor: '#000',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 1
      };
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'span',
          { style: labelStyle },
          label
        ),
        _react2.default.createElement('input', { style: inputStyle, type: 'text', name: name, value: obj.state[name], onChange: obj.handleTextChange })
      );
    }
  }]);

  return TextInput;
}(_react2.default.Component);

exports.default = TextInput;