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
    },
    loginByWeixin(type) {
      let that = this;
      vk.userCenter.loginByWeixin({
        data: {
          type
        },
        success: (data) => {
          vk.alert(data.msg);
          that.data = data;
          that.userInfo = data.userInfo;
          vk.vuex.set("$user.userInfo.avatar", that.userInfo.avatar);
          vk.vk.navigateTo({
            url: "/pages/index/index"
          });
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.loginByWeixin && $options.loginByWeixin(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b237504c"], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
