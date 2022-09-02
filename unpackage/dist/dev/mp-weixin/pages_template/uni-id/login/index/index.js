"use strict";
var common_vendor = require("../../../../common/vendor.js");
var vk = common_vendor.index.vk;
const _sfc_main = {
  data() {
    return {
      data: {},
      form1: {
        agreement: true,
        username: "admin",
        password: "123456"
      },
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
    login() {
      let that = this;
      const { agreement, username, password } = that.form1;
      if (!agreement) {
        vk.toast("\u8BF7\u9605\u8BFB\u5E76\u540C\u610F\u7528\u6237\u670D\u52A1\u53CA\u9690\u79C1\u534F\u8BAE", "none");
        return;
      }
      if (username.length < 4) {
        vk.toast("\u8D26\u53F7\u81F3\u5C114\u4F4D\u6570", "none");
        return;
      }
      if (!vk.pubfn.checkStr(password, "pwd")) {
        vk.toast("\u5BC6\u7801\u4EE5\u5B57\u6BCD\u5F00\u5934\uFF0C\u957F\u5EA6\u57286~18\u4E4B\u95F4\uFF0C\u53EA\u80FD\u5305\u542B\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u4E0B\u5212\u7EBF", "none");
        return;
      }
      var form1 = that.form1;
      vk.userCenter.login({
        data: form1,
        success: (data) => {
          console.log("data", data);
          vk.toast("\u767B\u9646\u6210\u529F!");
          setTimeout(() => {
            that.login_success(data);
          }, 1e3);
        }
      });
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
    login_weixin() {
      let that = this;
      vk.userCenter.loginByWeixin({
        success: (data) => {
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
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../../../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.logoImage,
    b: $data.form1.username,
    c: common_vendor.o(($event) => $data.form1.username = $event.detail.value),
    d: $data.form1.password,
    e: common_vendor.o(($event) => $data.form1.password = $event.detail.value),
    f: common_vendor.o((...args) => $options.login && $options.login(...args)),
    g: common_vendor.o($options.login_weixin),
    h: common_vendor.p({
      name: "weixin-fill",
      size: "80",
      color: "#19be6b"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-acf68ad8"], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/pages_template/uni-id/login/index/index.vue"]]);
_sfc_main.__runtimeHooks = 3;
wx.createPage(MiniProgramPage);
