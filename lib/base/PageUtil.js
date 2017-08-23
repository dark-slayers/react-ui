"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
*页面工具类，包含了跳转、刷新等常用方法。
*/
var PageUtil = function () {
  function PageUtil() {
    _classCallCheck(this, PageUtil);
  }

  _createClass(PageUtil, null, [{
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
  }, {
    key: "redirect",
    value: function redirect(url) {
      window.location.href = url;
    }
  }]);

  return PageUtil;
}();

;

exports.default = PageUtil;