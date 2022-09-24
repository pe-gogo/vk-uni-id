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
      console.log("takeOut");
    }
  }
};
if (!Array) {
  const _easycom_u_avatar2 = common_vendor.resolveComponent("u-avatar");
  const _easycom_u_line_progress2 = common_vendor.resolveComponent("u-line-progress");
  (_easycom_u_avatar2 + _easycom_u_line_progress2)();
}
const _easycom_u_avatar = () => "../../uni_modules/vk-uview-ui/components/u-avatar/u-avatar.js";
const _easycom_u_line_progress = () => "../../uni_modules/vk-uview-ui/components/u-line-progress/u-line-progress.js";
if (!Math) {
  (_easycom_u_avatar + _easycom_u_line_progress)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      size: 80,
      src: _ctx.vk.getVuex("$user.userInfo.avatar")
    }),
    b: common_vendor.p({
      percent: 29
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/components/IndexStore/IndexStore.vue"]]);
wx.createComponent(Component);
