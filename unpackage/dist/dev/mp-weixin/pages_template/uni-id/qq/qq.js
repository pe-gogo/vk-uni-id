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
    loginByQQ(type) {
      vk.userCenter.loginByQQ({
        data: {
          type
        },
        success: (data) => {
          vk.alert("\u767B\u5F55\u6210\u529F");
        }
      });
    },
    bindQQ() {
      vk.userCenter.bindQQ({
        success: (data) => {
          vk.alert("\u7ED1\u5B9A\u6210\u529F");
        }
      });
    },
    unbindQQ() {
      vk.userCenter.unbindQQ({
        success: (data) => {
          vk.alert("\u89E3\u7ED1\u6210\u529F");
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.loginByQQ("register")),
    b: common_vendor.o(($event) => $options.loginByQQ("login")),
    c: common_vendor.o(($event) => $options.loginByQQ()),
    d: common_vendor.o((...args) => $options.bindQQ && $options.bindQQ(...args)),
    e: common_vendor.o((...args) => $options.unbindQQ && $options.unbindQQ(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-79253ad4"], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/pages_template/uni-id/qq/qq.vue"]]);
wx.createPage(MiniProgramPage);
