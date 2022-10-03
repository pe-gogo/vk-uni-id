"use strict";
var common_vendor = require("../../../common/vendor.js");
var vk = common_vendor.index.vk;
const _sfc_main = {
  data() {
    return {};
  },
  onLoad(options) {
    vk = common_vendor.index.vk;
  },
  methods: {
    loginByAlipay(type) {
      vk.userCenter.loginByAlipay({
        data: {
          type
        },
        success: (data) => {
          vk.alert("\u767B\u5F55\u6210\u529F");
        }
      });
    },
    code2SessionAlipay() {
      vk.userCenter.code2SessionAlipay({
        success: (data) => {
          vk.alert(JSON.stringify(data));
        }
      });
    },
    bindAlipay() {
      vk.userCenter.bindAlipay({
        success: (data) => {
          vk.alert("\u7ED1\u5B9A\u6210\u529F");
        }
      });
    },
    unbindAlipay() {
      vk.userCenter.unbindAlipay({
        success: (data) => {
          vk.alert("\u89E3\u7ED1\u6210\u529F");
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.loginByAlipay("register")),
    b: common_vendor.o(($event) => $options.loginByAlipay("login")),
    c: common_vendor.o(($event) => $options.loginByAlipay()),
    d: common_vendor.o((...args) => $options.code2SessionAlipay && $options.code2SessionAlipay(...args)),
    e: common_vendor.o((...args) => $options.bindAlipay && $options.bindAlipay(...args)),
    f: common_vendor.o((...args) => $options.unbindAlipay && $options.unbindAlipay(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-47431b14"], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/pages_template/uni-id/alipay/alipay.vue"]]);
wx.createPage(MiniProgramPage);
