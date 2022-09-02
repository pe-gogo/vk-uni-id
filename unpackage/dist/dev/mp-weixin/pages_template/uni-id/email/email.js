"use strict";
var common_vendor = require("../../../common/vendor.js");
var vk = common_vendor.index.vk;
const _sfc_main = {
  data() {
    return {
      form1: {
        email: "",
        code: ""
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
    sendEmailCode(type) {
      let that = this;
      if (!/.+@.+/.test(that.form1.email)) {
        common_vendor.index.showModal({
          content: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1",
          showCancel: false
        });
        return;
      }
      var form1 = that.form1;
      vk.userCenter.sendEmailCode({
        data: {
          serviceType: "qq",
          email: form1.email,
          type
        },
        success: (data) => {
          vk.alert("\u90AE\u4EF6\u53D1\u9001\u6210\u529F");
        }
      });
    },
    setVerifyCode(type) {
      let that = this;
      if (!/.+@.+/.test(that.form1.email)) {
        common_vendor.index.showModal({
          content: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1",
          showCancel: false
        });
        return;
      }
      that.getCode();
      var form1 = that.form1;
      vk.userCenter.setVerifyCode({
        data: {
          email: form1.email,
          code: form1.code,
          type
        },
        success: (data) => {
          vk.toast("\u53D1\u9001\u6210\u529F");
        }
      });
    },
    loginByEmail() {
      let that = this;
      var form1 = that.form1;
      vk.userCenter.loginByEmail({
        data: form1,
        success: (data) => {
          vk.alert("\u767B\u5F55\u6210\u529F");
        }
      });
    },
    bindEmail() {
      let that = this;
      var form1 = that.form1;
      vk.userCenter.bindEmail({
        data: form1,
        success: (data) => {
          vk.alert("\u7ED1\u5B9A\u6210\u529F");
        }
      });
    },
    unbindEmail() {
      let that = this;
      var form1 = that.form1;
      vk.userCenter.unbindEmail({
        data: form1,
        success: (data) => {
          vk.alert("\u89E3\u7ED1\u6210\u529F");
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.form1.email,
    b: common_vendor.o(($event) => $data.form1.email = $event.detail.value),
    c: $data.form1.code,
    d: common_vendor.o(($event) => $data.form1.code = $event.detail.value),
    e: common_vendor.t($data.form1.code),
    f: common_vendor.o(($event) => $options.sendEmailCode("login")),
    g: common_vendor.o(($event) => $options.setVerifyCode("login")),
    h: common_vendor.o((...args) => $options.loginByEmail && $options.loginByEmail(...args)),
    i: common_vendor.o(($event) => $options.sendEmailCode("bind")),
    j: common_vendor.o(($event) => $options.setVerifyCode("bind")),
    k: common_vendor.o((...args) => $options.bindEmail && $options.bindEmail(...args)),
    l: common_vendor.o(($event) => $options.sendEmailCode("unbind")),
    m: common_vendor.o(($event) => $options.setVerifyCode("unbind")),
    n: common_vendor.o((...args) => $options.unbindEmail && $options.unbindEmail(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-94c309e4"], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/pages_template/uni-id/email/email.vue"]]);
wx.createPage(MiniProgramPage);
