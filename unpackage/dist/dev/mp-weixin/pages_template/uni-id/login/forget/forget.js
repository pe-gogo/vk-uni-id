"use strict";
var common_vendor = require("../../../../common/vendor.js");
var vk = common_vendor.index.vk;
const _sfc_main = {
  data() {
    return {
      data: {},
      form1: {
        mobile: "",
        password: "",
        password2: "",
        code: ""
      },
      scrollTop: 0,
      isRotate: false
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
    resetPassword() {
      let that = this;
      const { mobile, code, password, password2 } = that.form1;
      if (that.isRotate) {
        return false;
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
      vk.userCenter.resetPasswordByMobile({
        data: that.form1,
        success: (data) => {
          that.isRotate = false;
          vk.alert("\u5BC6\u7801\u91CD\u7F6E\u6210\u529F,\u65B0\u5BC6\u7801\u4E3A:" + password, () => {
            vk.redirectTo("../index/index");
          });
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
    a: $data.form1.mobile,
    b: common_vendor.o(($event) => $data.form1.mobile = $event.detail.value),
    c: $data.form1.password,
    d: common_vendor.o(($event) => $data.form1.password = $event.detail.value),
    e: $data.form1.password2,
    f: common_vendor.o(($event) => $data.form1.password2 = $event.detail.value),
    g: $data.form1.code,
    h: common_vendor.o(($event) => $data.form1.code = $event.detail.value),
    i: common_vendor.p({
      seconds: "60",
      mobile: $data.form1.mobile,
      type: "reset",
      ["custom-style"]: "font-size: 28rpx;"
    }),
    j: common_vendor.o((...args) => $options.resetPassword && $options.resetPassword(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-79509ace"], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/pages_template/uni-id/login/forget/forget.vue"]]);
_sfc_main.__runtimeHooks = 3;
wx.createPage(MiniProgramPage);
