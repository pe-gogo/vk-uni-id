"use strict";
var common_vendor = require("../../../common/vendor.js");
var vk = common_vendor.index.vk;
const _sfc_main = {
  data() {
    return {
      form1: {
        mobile: "",
        code: "",
        password: "123456"
      }
    };
  },
  onLoad(options) {
    vk = common_vendor.index.vk;
  },
  methods: {
    getCode() {
      const randomStr = "00000" + Math.floor(Math.random() * 1e6);
      this.form1.code = randomStr.substring(randomStr.length - 6);
    },
    sendSmsCode(type) {
      let that = this;
      if (!/^1\d{10}$/.test(that.form1.mobile)) {
        common_vendor.index.showModal({
          content: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7",
          showCancel: false
        });
        return;
      }
      var form1 = that.form1;
      vk.userCenter.sendSmsCode({
        data: {
          mobile: form1.mobile,
          type
        },
        success: (data) => {
          vk.alert("\u77ED\u4FE1\u53D1\u9001\u6210\u529F");
        }
      });
    },
    setVerifyCode(type) {
      let that = this;
      if (!/^1\d{10}$/.test(that.form1.mobile)) {
        common_vendor.index.showModal({
          content: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7",
          showCancel: false
        });
        return;
      }
      that.getCode();
      var form1 = that.form1;
      vk.userCenter.setVerifyCode({
        data: {
          mobile: form1.mobile,
          code: form1.code,
          type
        },
        success: (data) => {
          vk.toast("\u53D1\u9001\u6210\u529F");
        }
      });
    },
    loginBySms() {
      let that = this;
      var form1 = that.form1;
      vk.userCenter.loginBySms({
        data: form1,
        success: (data) => {
          vk.alert("\u767B\u5F55\u6210\u529F");
        }
      });
    },
    bindMobile() {
      let that = this;
      var form1 = that.form1;
      vk.userCenter.bindMobile({
        data: form1,
        success: (data) => {
          vk.alert("\u7ED1\u5B9A\u6210\u529F");
        }
      });
    },
    unbindMobile() {
      let that = this;
      var form1 = that.form1;
      vk.userCenter.unbindMobile({
        data: form1,
        success: (data) => {
          vk.alert("\u89E3\u7ED1\u6210\u529F");
        }
      });
    },
    resetPasswordByMobile() {
      let that = this;
      var form1 = that.form1;
      vk.userCenter.resetPasswordByMobile({
        data: form1,
        success: (data) => {
          vk.alert("\u5BC6\u7801\u91CD\u7F6E\u6210\u529F,\u65B0\u5BC6\u7801\u4E3A:" + form1.password);
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.form1.mobile,
    b: common_vendor.o(($event) => $data.form1.mobile = $event.detail.value),
    c: $data.form1.code,
    d: common_vendor.o(($event) => $data.form1.code = $event.detail.value),
    e: common_vendor.t($data.form1.code),
    f: common_vendor.o(($event) => $options.sendSmsCode("login")),
    g: common_vendor.o(($event) => $options.setVerifyCode("login")),
    h: common_vendor.o((...args) => $options.loginBySms && $options.loginBySms(...args)),
    i: common_vendor.o(($event) => $options.sendSmsCode("bind")),
    j: common_vendor.o(($event) => $options.setVerifyCode("bind")),
    k: common_vendor.o((...args) => $options.bindMobile && $options.bindMobile(...args)),
    l: common_vendor.o(($event) => $options.sendSmsCode("unbind")),
    m: common_vendor.o(($event) => $options.setVerifyCode("unbind")),
    n: common_vendor.o((...args) => $options.unbindMobile && $options.unbindMobile(...args)),
    o: common_vendor.o(($event) => $options.sendSmsCode("reset-pwd")),
    p: common_vendor.o(($event) => $options.setVerifyCode("reset-pwd")),
    q: common_vendor.o((...args) => $options.resetPasswordByMobile && $options.resetPasswordByMobile(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9fd56fd8"], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/pages_template/uni-id/mobile/mobile.vue"]]);
wx.createPage(MiniProgramPage);
