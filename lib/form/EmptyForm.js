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

/**空白表单对象，实现了handleChange方法,
*handleTextChange是配合文本输入框使用的方法，可以更改state对象
*/
var EmptyForm = function (_React$Component) {
    _inherits(EmptyForm, _React$Component);

    function EmptyForm() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EmptyForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EmptyForm.__proto__ || Object.getPrototypeOf(EmptyForm)).call.apply(_ref, [this].concat(args))), _this), _this.handleTextChange = function (event) {
            event.preventDefault();
            var newState = {};
            var name = event.target.name;
            newState[name] = event.target.value;
            _this.setState(newState);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return EmptyForm;
}(_react2.default.Component);

exports.default = EmptyForm;