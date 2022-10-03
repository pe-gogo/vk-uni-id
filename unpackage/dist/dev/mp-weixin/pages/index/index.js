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
      vk.setVuex("$user.orderType", "takeout");
      wx.chooseLocation({
        success(res) {
          console.log(res);
          vk.navigateTo("/pages/menu/menu");
        }
      });
    },
    takeout() {
      if (vk.getVuex("$user.userInfo._id")) {
        vk.setVuex("$user.orderType", "takeout");
        vk.navigateTo("/pages/menu/menu");
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
    a: common_vendor.o((...args) => $options.takeIn && $options.takeIn(...args)),
    b: common_vendor.o((...args) => $options.takeout && $options.takeout(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
