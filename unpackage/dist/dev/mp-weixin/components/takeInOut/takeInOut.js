"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    takein() {
      console.log("takein");
    },
    takeOut() {
      vk.navigateTo("/pages/address/address");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => _ctx.takeIn && _ctx.takeIn(...args)),
    b: common_vendor.o((...args) => $options.takein && $options.takein(...args)),
    c: common_vendor.o((...args) => $options.takeOut && $options.takeOut(...args)),
    d: common_vendor.o((...args) => _ctx.takeout && _ctx.takeout(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/components/takeInOut/takeInOut.vue"]]);
wx.createComponent(Component);
