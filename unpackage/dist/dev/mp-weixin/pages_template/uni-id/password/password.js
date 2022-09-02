"use strict";
var common_vendor = require("../../../common/vendor.js");
var vk = common_vendor.index.vk;
const _sfc_main = {
  data() {
    return {
      form1: {
        username: "admin",
        password: "123456"
      }
    };
  },
  onLoad(options) {
    vk = common_vendor.index.vk;
  },
  methods: {
    register() {
      let that = this;
      var form1 = that.form1;
      vk.userCenter.register({
        data: form1,
        success: (data) => {
          vk.alert("\u6CE8\u518C\u6210\u529F!");
        }
      });
    },
    login() {
      let that = this;
      var form1 = that.form1;
      vk.userCenter.login({
        data: form1,
        success: (data) => {
          vk.alert("\u767B\u9646\u6210\u529F!");
        }
      });
    },
    updatePwd() {
      let that = this;
      that.form1;
      vk.userCenter.updatePwd({
        data: {
          oldPassword: "123456",
          newPassword: "123456",
          password_confirmation: "123456"
        },
        success: (data) => {
          vk.alert("\u4FEE\u6539\u6210\u529F");
        }
      });
    },
    resetPwd() {
      let that = this;
      that.form1;
      vk.userCenter.resetPwd({
        success: (data) => {
          vk.alert("\u5BC6\u7801\u5DF2\u91CD\u7F6E\u4E3A123456");
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.form1.username,
    b: common_vendor.o(($event) => $data.form1.username = $event.detail.value),
    c: $data.form1.password,
    d: common_vendor.o(($event) => $data.form1.password = $event.detail.value),
    e: common_vendor.o((...args) => $options.register && $options.register(...args)),
    f: common_vendor.o((...args) => $options.login && $options.login(...args)),
    g: common_vendor.o((...args) => $options.updatePwd && $options.updatePwd(...args)),
    h: common_vendor.o((...args) => $options.resetPwd && $options.resetPwd(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5643c274"], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/pages_template/uni-id/password/password.vue"]]);
wx.createPage(MiniProgramPage);
