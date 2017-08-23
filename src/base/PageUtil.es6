/**
*页面工具类，包含了跳转、刷新等常用方法。
*/
class PageUtil {
  static reload() {
    window.location.reload();
  }
  static redirect(url) {
    window.location.href=url;
  }
};

export default PageUtil;
