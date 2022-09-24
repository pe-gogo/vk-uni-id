"use strict";
var common_vendor = require("../../common/vendor.js");
var vk = common_vendor.index.vk;
const _sfc_main = {
  data() {
    return {
      data: {},
      scrollTop: 0,
      logoImage: "/static/logo.png"
    };
  },
  onPageScroll(e) {
    this.scrollTop = e.scrollTop;
  },
  onLoad(options) {
    vk = common_vendor.index.vk;
    this.init(options);
  },
  onReady() {
  },
  onShow() {
    common_vendor.index.hideHomeButton();
  },
  onHide() {
  },
  onPullDownRefresh() {
    setTimeout(() => {
      common_vendor.index.stopPullDownRefresh();
    }, 1e3);
  },
  onShareAppMessage(options) {
  },
  methods: {
    init(options = {}) {
      console.log("init: ", options);
    },
    pageTo(path) {
      vk.navigateTo(path);
    },
    login_success(data) {
      let that = this;
      if (vk.navigate.originalPage) {
        vk.navigate.originalTo();
        return false;
      }
      var pages = getCurrentPages();
      console.log(pages.length, pages[pages.length - 1].route);
      if (pages.length > 1 && pages[pages.length - 2] && pages[pages.length - 2].route && pages[pages.length - 2].route.indexOf("login/index") == -1) {
        const eventChannel = that.getOpenerEventChannel();
        eventChannel.emit("loginSuccess", {});
        vk.navigateBack();
      } else {
        vk.navigateToHome();
      }
    },
    login_weixin(e) {
      let that = this;
      vk.userCenter.loginByWeixin({
        success: (data) => {
          common_vendor.index.getUserProfile({
            provider: "weixin"
          });
          vk.toast("\u767B\u9646\u6210\u529F!");
          setTimeout(() => {
            that.login_success(data);
          }, 1e3);
        }
      });
    }
  },
  computed: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.logoImage,
    b: common_vendor.o((...args) => $options.login_weixin && $options.login_weixin(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b237504c"], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/pages/login/login.vue"]]);
_sfc_main.__runtimeHooks = 3;
wx.createPage(MiniProgramPage);
