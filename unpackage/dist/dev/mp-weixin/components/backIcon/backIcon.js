"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "backIcon",
  data() {
    return {
      url: ""
    };
  },
  methods: {
    toHome() {
      vk.navigateTo("/pages/index/index");
      wx.showTabBar();
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => {
      _ctx.vk.navigateTo("/pages/index/index");
    }),
    b: common_vendor.p({
      name: "arrow-left",
      color: "#000"
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/components/backIcon/backIcon.vue"]]);
wx.createComponent(Component);
