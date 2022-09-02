"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
var app_config = require("./app.config.js");
var store_index = require("./store/index.js");
var uni_modules_vkUviewUi_index = require("./uni_modules/vk-uview-ui/index.js");
var uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_index = require("./uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/index.js");
require("./common/function/myPubFunction.js");
require("./store/modules/_app.js");
require("./store/modules/_user.js");
require("./uni_modules/vk-uview-ui/libs/mixin/mixin.js");
require("./uni_modules/vk-uview-ui/libs/request/index.js");
require("./uni_modules/vk-uview-ui/libs/function/deepMerge.js");
require("./uni_modules/vk-uview-ui/libs/function/deepClone.js");
require("./uni_modules/vk-uview-ui/libs/function/test.js");
require("./uni_modules/vk-uview-ui/libs/function/queryParams.js");
require("./uni_modules/vk-uview-ui/libs/function/route.js");
require("./uni_modules/vk-uview-ui/libs/function/timeFormat.js");
require("./uni_modules/vk-uview-ui/libs/function/timeFrom.js");
require("./uni_modules/vk-uview-ui/libs/function/colorGradient.js");
require("./uni_modules/vk-uview-ui/libs/function/guid.js");
require("./uni_modules/vk-uview-ui/libs/function/color.js");
require("./uni_modules/vk-uview-ui/libs/function/type2icon.js");
require("./uni_modules/vk-uview-ui/libs/function/randomArray.js");
require("./uni_modules/vk-uview-ui/libs/function/addUnit.js");
require("./uni_modules/vk-uview-ui/libs/function/random.js");
require("./uni_modules/vk-uview-ui/libs/function/trim.js");
require("./uni_modules/vk-uview-ui/libs/function/toast.js");
require("./uni_modules/vk-uview-ui/libs/function/getParent.js");
require("./uni_modules/vk-uview-ui/libs/function/_parent.js");
require("./uni_modules/vk-uview-ui/libs/function/sys.js");
require("./uni_modules/vk-uview-ui/libs/function/debounce.js");
require("./uni_modules/vk-uview-ui/libs/function/throttle.js");
require("./uni_modules/vk-uview-ui/libs/config/config.js");
require("./uni_modules/vk-uview-ui/libs/config/zIndex.js");
require("./uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/libs/vk-unicloud/vk-unicloud-user-center.js");
require("./uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/libs/vk-unicloud/vk-unicloud-callFunctionUtil.js");
require("./uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/libs/function/debounce.js");
require("./uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/libs/function/index.js");
require("./uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/libs/function/throttle.js");
require("./uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/libs/function/queryParams.js");
require("./uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/libs/function/setClipboardData.js");
require("./uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/libs/function/timeUtil.js");
require("./uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/libs/function/treeUtil.js");
require("./uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/libs/function/deepClone.js");
require("./uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/libs/function/modal.js");
require("./uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/libs/function/vk.navigate.js");
require("./uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/libs/function/vk.localStorage.js");
require("./uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/libs/function/aliyunOSSUtil.js");
require("./uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/libs/openapi/index.js");
require("./uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/libs/openapi/baidu/index.js");
require("./uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/libs/function/vk.request.js");
require("./uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/libs/function/vk.importObject.js");
require("./uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/libs/mixin/mixin.js");
require("./uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/libs/function/permission.js");
require("./uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/libs/store/mixin/mixin.js");
require("./uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/libs/store/libs/error.js");
require("./uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/libs/install/console.log.js");
require("./uni_modules/vk-unicloud/vk_modules/vk-unicloud-page/libs/function/updateManager.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/address/addSite.js";
  "./pages/login/login.js";
  "./pages/mine/mine.js";
  "./pages/address/address.js";
  "./pages_template/db-test/db-test.js";
  "./pages_template/db-test/list/list.js";
  "./pages_template/uni-id/index/index.js";
  "./pages_template/uni-id/password/password.js";
  "./pages_template/uni-id/mobile/mobile.js";
  "./pages_template/uni-id/univerify/univerify.js";
  "./pages_template/uni-id/weixin/weixin.js";
  "./pages_template/uni-id/weixin/h5-weixin.js";
  "./pages_template/uni-id/alipay/alipay.js";
  "./pages_template/uni-id/qq/qq.js";
  "./pages_template/uni-id/util/util.js";
  "./pages_template/uni-id/email/email.js";
  "./pages_template/uni-id/login/index/index.js";
  "./pages_template/uni-id/login/register/register.js";
  "./pages_template/uni-id/login/forget/forget.js";
  "./pages_template/vk-vuex/vk-vuex.js";
  "./pages_template/openapi/weixin/weixin.js";
  "./pages_template/openapi/weixin/msgSecCheck/msgSecCheck.js";
  "./pages_template/openapi/weixin/imgSecCheck/imgSecCheck.js";
  "./pages_template/openapi/weixin/sendMessage/sendMessage.js";
  "./pages_template/openapi/baidu/baidu.js";
  "./pages_template/uni-id/test/test.js";
}
const version = "2.11.5";
const _sfc_main = {
  methods: {},
  onPageNotFound: function(e) {
    common_vendor.index.redirectTo({
      url: app_config.config.error.url
    });
  },
  onLaunch: function() {
    if (app_config.config.debug) {
      console.log(`%c vk-client %c v${version} `, "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff", "background:#007aff ;padding: 1px; border-radius: 0 3px 3px 0;  color: #fff; font-weight: bold;");
      console.log("App Launch");
    }
  },
  onShow: function() {
    if (app_config.config.debug)
      console.log("App Show");
  },
  onHide: function() {
    if (app_config.config.debug)
      console.log("App Hide");
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(store_index.store);
  app.use(uni_modules_vkUviewUi_index.uView);
  app.use(uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_index.vk);
  app.config.globalProperties.vk.init({
    Vue: app,
    config: app_config.config
  });
  return { app };
}
createApp().app.mount("#app");
exports.createApp = createApp;
