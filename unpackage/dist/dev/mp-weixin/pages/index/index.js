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
  onLoad() {
  },
  onLaunch() {
    vk = common_vendor.index.vk;
    this.init();
  },
  methods: {
    takeIn() {
      if (vk.getVuex("$user.userInfo._id")) {
        vk.setVuex("$order.type", "takein");
        vk.navigateTo("/pages/stores/stores");
      } else {
        vk.navigateTo("/pages/login/login");
      }
    },
    takeout() {
      if (vk.getVuex("$user.userInfo._id")) {
        vk.setVuex("$order.type", "takeout");
        if (!vk.getVuex("$user.chooseAddress")) {
          vk.navigateTo("/pages/address/address");
        }
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
