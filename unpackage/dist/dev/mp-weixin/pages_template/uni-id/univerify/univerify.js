"use strict";
var common_vendor = require("../../../common/vendor.js");
var vk = common_vendor.index.vk;
const _sfc_main = {
  data() {
    return {
      userInfo: {}
    };
  },
  onLoad(options) {
    vk = common_vendor.index.vk;
    this.init(options);
  },
  methods: {
    init(options) {
    },
    loginByUniverify() {
      let that = this;
      vk.userCenter.loginByUniverify({
        univerifyStyle: {
          "fullScreen": true,
          "backgroundColor": "#f5f5f5",
          "authButton": {
            "normalColor": "#19be6b",
            "highlightColor": "#18b566",
            "disabledColor": "#71d5a1",
            "textColor": "#ffffff",
            "title": "\u672C\u673A\u53F7\u7801\u4E00\u952E\u767B\u5F55"
          },
          "privacyTerms": {
            "suffix": "\u4F7F\u7528\u672C\u673A\u53F7\u7801\u767B\u5F55",
            "termsColor": "#555555"
          }
        },
        data: {},
        success: (data) => {
          common_vendor.index.closeAuthView();
          that.userInfo = data.userInfo;
          setTimeout(() => {
            vk.alert(data.msg);
          }, 300);
        },
        fail: (res) => {
          common_vendor.index.closeAuthView();
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.loginByUniverify && $options.loginByUniverify(...args)),
    b: $data.userInfo && $data.userInfo._id
  }, $data.userInfo && $data.userInfo._id ? {
    c: common_vendor.t(JSON.stringify($data.userInfo, null, 2))
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0e05f1e8"], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/pages_template/uni-id/univerify/univerify.vue"]]);
wx.createPage(MiniProgramPage);
