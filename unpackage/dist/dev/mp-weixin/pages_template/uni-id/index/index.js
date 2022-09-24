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
    pageTo(url) {
      vk.navigateTo(url);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.pageTo("../password/password")),
    b: common_vendor.o(($event) => $options.pageTo("../mobile/mobile")),
    c: common_vendor.o(($event) => $options.pageTo("../email/email")),
    d: common_vendor.o(($event) => $options.pageTo("../weixin/weixin")),
    e: common_vendor.o(($event) => _ctx.vk.navigateTo("../../openapi/weixin/weixin")),
    f: common_vendor.o(($event) => _ctx.vk.navigateTo("../../openapi/baidu/baidu")),
    g: common_vendor.o(($event) => $options.pageTo("../../db-test/db-test")),
    h: common_vendor.o(($event) => $options.pageTo("../util/util")),
    i: common_vendor.o(($event) => $options.pageTo("../univerify/univerify")),
    j: common_vendor.o(($event) => $options.pageTo("../../vk-vuex/vk-vuex")),
    k: common_vendor.o(($event) => $options.pageTo("../login/index/index"))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-103fc20c"], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/pages_template/uni-id/index/index.vue"]]);
wx.createPage(MiniProgramPage);
