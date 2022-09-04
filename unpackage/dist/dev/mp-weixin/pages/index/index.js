"use strict";
var common_vendor = require("../../common/vendor.js");
var vk = common_vendor.index.vk;
const _sfc_main = {
  data() {
    return {
      hasWeixinAuth: true,
      encryptedKey: "",
      image: "",
      data: {},
      userInfo: []
    };
  },
  onLaunch() {
    vk = common_vendor.index.vk;
    this.init();
  },
  methods: {
    takeIn() {
    },
    takeout() {
      if (vk.getVuex("$user.userInfo._id")) {
        vk.navigateTo("/pages/address/address");
      } else {
        vk.navigateTo("/pages/login/login");
      }
    },
    init() {
      let that = this;
      vk.userCenter.code2SessionWeixin({
        data: {
          needCache: true
        },
        success: (data) => {
          that.encryptedKey = data.encryptedKey;
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t(_ctx.vk.getVuex("$user.userInfo.nickname") || _ctx.vk.getVuex("$user.userInfo.username")),
    b: common_vendor.o((...args) => $options.takeIn && $options.takeIn(...args)),
    c: common_vendor.o((...args) => $options.takeout && $options.takeout(...args)),
    d: common_vendor.t($data.userInfo.balance),
    e: common_vendor.o((...args) => _ctx.invite && _ctx.invite(...args)),
    f: common_vendor.o((...args) => _ctx.packages && _ctx.packages(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
