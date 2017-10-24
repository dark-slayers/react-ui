'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
var IdTextInput = function (_TextInput) {
  _inherits(IdTextInput, _TextInput);

  function IdTextInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, IdTextInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IdTextInput.__proto__ || Object.getPrototypeOf(IdTextInput)).call.apply(_ref, [this].concat(args))), _this), _this.isAddModel = function () {
      return _this.props.addModel;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return IdTextInput;
}(TextInput);

exports.default = IdTextInput;