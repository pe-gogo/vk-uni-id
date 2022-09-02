"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  onLaunch() {
  },
  data() {
    return {
      src: "https://img-qn.51miz.com/Element/00/64/92/22/3ee80c66_E649222_36ee1039.jpg!/quality/90/unsharp/true/compress/true/format/jpg"
    };
  }
};
if (!Array) {
  const _easycom_u_image2 = common_vendor.resolveComponent("u-image");
  const _easycom_u_avatar2 = common_vendor.resolveComponent("u-avatar");
  const _easycom_IndexStore2 = common_vendor.resolveComponent("IndexStore");
  (_easycom_u_image2 + _easycom_u_avatar2 + _easycom_IndexStore2)();
}
const _easycom_u_image = () => "../../uni_modules/vk-uview-ui/components/u-image/u-image.js";
const _easycom_u_avatar = () => "../../uni_modules/vk-uview-ui/components/u-avatar/u-avatar.js";
const _easycom_IndexStore = () => "../../components/IndexStore/IndexStore.js";
if (!Math) {
  (_easycom_u_image + _easycom_u_avatar + _easycom_IndexStore)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      src: $data.src,
      width: "100%",
      height: "500rpx",
      ["lazy-load"]: true,
      fade: true,
      duration: "450"
    }),
    b: common_vendor.p({
      size: 130,
      src: _ctx.vk.getVuex("$user.userInfo.avatar")
    }),
    c: common_vendor.t(_ctx.vk.getVuex("$user.userInfo.nickname") || _ctx.vk.getVuex("$user.userInfo.username"))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-dcbcfe34"], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/pages/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);
