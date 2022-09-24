"use strict";
var common_vendor = require("../../../../common/vendor.js");
var vk = common_vendor.index.vk;
const _sfc_main = {
  data() {
    return {
      data: {},
      form1: {
        agreement: true,
        mobile: "",
        password: "",
        password2: "",
        code: "",
        type: "register"
      },
      scrollTop: 0,
      isRotate: false,
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
    checkboxChange(e) {
      let that = this;
      let value = e.detail.value || [];
      if (value.length > 0 && value[0]) {
        that.form1.agreement = true;
      } else {
        that.form1.agreement = false;
      }
    },
    loginBySms() {
      let that = this;
      if (that.isRotate) {
        return false;
      }
      const { agreement, mobile, code, password, password2 } = that.form1;
      if (!agreement) {
        vk.toast("\u8BF7\u9605\u8BFB\u5E76\u540C\u610F\u7528\u6237\u670D\u52A1\u53CA\u9690\u79C1\u534F\u8BAE", "none");
        return;
      }
      if (!vk.pubfn.checkStr(mobile, "mobile")) {
        vk.toast("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801", "none");
        return;
      }
      if (!vk.pubfn.checkStr(password, "pwd")) {
        vk.toast("\u5BC6\u7801\u4EE5\u5B57\u6BCD\u5F00\u5934\uFF0C\u957F\u5EA6\u57286~18\u4E4B\u95F4\uFF0C\u53EA\u80FD\u5305\u542B\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u4E0B\u5212\u7EBF", "none");
        return;
      }
      if (!vk.pubfn.checkStr(password2, "pwd")) {
        vk.toast("\u5BC6\u7801\u4EE5\u5B57\u6BCD\u5F00\u5934\uFF0C\u957F\u5EA6\u57286~18\u4E4B\u95F4\uFF0C\u53EA\u80FD\u5305\u542B\u5B57\u6BCD\u3001\u6570\u5B57\u548C\u4E0B\u5212\u7EBF", "none");
        return;
      }
      if (password != password2) {
        vk.toast("\u4E24\u6B21\u5BC6\u7801\u5FC5\u987B\u76F8\u540C!", "none");
        return;
      }
      if (!vk.pubfn.checkStr(code, "mobileCode")) {
        vk.toast("\u9A8C\u8BC1\u7801\u683C\u5F0F\u4E3A6\u4F4D\u6570\u5B57", "none");
        return;
      }
      that.isRotate = true;
      vk.userCenter.loginBySms({
        data: that.form1,
        success: (data) => {
          that.isRotate = false;
          if (data.type == "login") {
            vk.toast("\u767B\u5F55\u6210\u529F!");
          } else {
            vk.toast("\u6CE8\u518C\u6210\u529F!");
          }
          setTimeout(() => {
            var pages = getCurrentPages();
            if (pages.length > 1) {
              vk.navigateBack();
            } else {
              vk.navigateToHome();
            }
          }, 1e3);
        },
        complete: () => {
          that.isRotate = false;
        }
      });
    }
  },
  computed: {}
};
if (!Array) {
  const _easycom_vk_data_verification_code2 = common_vendor.resolveComponent("vk-data-verification-code");
  _easycom_vk_data_verification_code2();
}
const _easycom_vk_data_verification_code = () => "../../../../uni_modules/vk-unicloud/components/vk-data-verification-code/vk-data-verification-code.js";
if (!Math) {
  _easycom_vk_data_verification_code();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.logoImage,
    b: $data.form1.mobile,
    c: common_vendor.o(($event) => $data.form1.mobile = $event.detail.value),
    d: $data.form1.password,
    e: common_vendor.o(($event) => $data.form1.password = $event.detail.value),
    f: $data.form1.password2,
    g: common_vendor.o(($event) => $data.form1.password2 = $event.detail.value),
    h: $data.form1.code,
    i: common_vendor.o(($event) => $data.form1.code = $event.detail.value),
    j: common_vendor.p({
      seconds: "60",
      mobile: $data.form1.mobile,
      type: "register",
      ["custom-style"]: "font-size: 28rpx;"
    }),
    k: common_vendor.o((...args) => $options.loginBySms && $options.loginBySms(...args)),
    l: $data.form1.agreement,
    m: common_vendor.o((...args) => $options.checkboxChange && $options.checkboxChange(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-42e94b8e"], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/pages_template/uni-id/login/register/register.vue"]]);
_sfc_main.__runtimeHooks = 3;
wx.createPage(MiniProgramPage);
