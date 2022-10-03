"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var common_vendor = require("../../../../common/vendor.js");
var uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_vkUnicloud_vkUnicloudUserCenter = require("./libs/vk-unicloud/vk-unicloud-user-center.js");
var uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_vkUnicloud_vkUnicloudCallFunctionUtil = require("./libs/vk-unicloud/vk-unicloud-callFunctionUtil.js");
var uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_index = require("./libs/function/index.js");
var uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_modal = require("./libs/function/modal.js");
var uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_vk_navigate = require("./libs/function/vk.navigate.js");
var uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_vk_localStorage = require("./libs/function/vk.localStorage.js");
var uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_aliyunOSSUtil = require("./libs/function/aliyunOSSUtil.js");
var uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_openapi_index = require("./libs/openapi/index.js");
var uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_vk_request = require("./libs/function/vk.request.js");
var uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_vk_importObject = require("./libs/function/vk.importObject.js");
var uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_mixin_mixin = require("./libs/mixin/mixin.js");
var uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_permission = require("./libs/function/permission.js");
var uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_store_mixin_mixin = require("./libs/store/mixin/mixin.js");
var uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_store_libs_error = require("./libs/store/libs/error.js");
var uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_install_console_log = require("./libs/install/console.log.js");
var uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_updateManager = require("./libs/function/updateManager.js");
var vk = __spreadProps(__spreadValues({
  userCenter: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_vkUnicloud_vkUnicloudUserCenter.userCenter,
  callFunctionUtil: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_vkUnicloud_vkUnicloudCallFunctionUtil.callFunctionUtil,
  callFunction: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_vkUnicloud_vkUnicloudCallFunctionUtil.callFunctionUtil.callFunction,
  checkToken: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_vkUnicloud_vkUnicloudCallFunctionUtil.callFunctionUtil.checkToken,
  uploadFile: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_vkUnicloud_vkUnicloudCallFunctionUtil.callFunctionUtil.uploadFile,
  getConfig: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_vkUnicloud_vkUnicloudCallFunctionUtil.callFunctionUtil.getConfig,
  emitRefreshToken: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_vkUnicloud_vkUnicloudCallFunctionUtil.callFunctionUtil.emitRefreshToken,
  onRefreshToken: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_vkUnicloud_vkUnicloudCallFunctionUtil.callFunctionUtil.onRefreshToken,
  offRefreshToken: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_vkUnicloud_vkUnicloudCallFunctionUtil.callFunctionUtil.offRefreshToken,
  pubfn: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_index.pubfn,
  alert: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_modal.modal.alert,
  toast: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_modal.modal.toast,
  confirm: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_modal.modal.confirm,
  prompt: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_modal.modal.prompt,
  showActionSheet: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_modal.modal.showActionSheet,
  showLoading: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_modal.modal.showLoading,
  hideLoading: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_modal.modal.hideLoading,
  setLoading: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_modal.modal.setLoading,
  navigate: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_vk_navigate.util,
  navigateTo: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_vk_navigate.util.navigateTo,
  redirectTo: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_vk_navigate.util.redirectTo,
  reLaunch: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_vk_navigate.util.reLaunch,
  switchTab: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_vk_navigate.util.switchTab,
  navigateBack: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_vk_navigate.util.navigateBack,
  navigateToHome: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_vk_navigate.util.navigateToHome,
  navigateToLogin: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_vk_navigate.util.navigateToLogin,
  navigateToMiniProgram: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_vk_navigate.util.navigateToMiniProgram,
  $emit: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_vk_navigate.util.$emit,
  $on: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_vk_navigate.util.$on,
  $once: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_vk_navigate.util.$once,
  $off: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_vk_navigate.util.$off,
  localStorage: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_vk_localStorage.localStorage,
  getLocaleList: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_index.pubfn.getLocaleList,
  getLocale: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_index.pubfn.getLocale,
  getLocaleObject: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_index.pubfn.getLocaleObject,
  setLocale: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_index.pubfn.setLocale
}, uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_vk_localStorage.localStorage), {
  aliyunOSSUtil: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_aliyunOSSUtil.aliyunOSSUtil,
  updateManager: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_updateManager.updateManager,
  openapi: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_openapi_index.openapi,
  requestUtil: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_vk_request.requestUtil,
  request: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_vk_request.requestUtil.request,
  importObject: uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_vk_importObject.importObject
});
vk.init = function(obj = {}) {
  let {
    Vue,
    config,
    store
  } = obj;
  if (typeof store !== "undefined") {
    Vue.use(store);
  } else {
    Vue.mixin(uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_store_mixin_mixin.storeMixin);
    if (config.globalError) {
      Vue.use(uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_store_libs_error.initGlobalError);
    }
  }
  vk.callFunctionUtil.setConfig(config);
  Vue.use(uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_install_console_log.consoleLog);
};
vk.getGlobalObject = function() {
  if (typeof globalThis === "object")
    return globalThis;
  if (typeof self === "object")
    return self;
  if (typeof window === "object")
    return window;
  if (typeof global === "object")
    return global;
};
vk.use = function(obj, util) {
  for (let name in obj) {
    if (obj[name] && typeof obj[name].init === "function") {
      obj[name].init(util);
    }
    vk[name] = obj[name];
  }
};
const install = (Vue) => {
  Vue.mixin(uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_mixin_mixin.mixin);
  Vue.config.globalProperties.vk = vk;
  Vue.config.globalProperties.$fn = vk.pubfn;
  if (typeof common_vendor.index == "object")
    common_vendor.index.vk = vk;
  let vkGlobalThis = vk.getGlobalObject();
  if (typeof vkGlobalThis == "object")
    vkGlobalThis.vk = vk;
  let util = { vk };
  vk.use({
    callFunctionUtil: vk.callFunctionUtil,
    openapi: vk.openapi
  }, util);
  uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_permission.initPermission(Vue);
};
var vk$1 = {
  install
};
exports.vk = vk$1;
