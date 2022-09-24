"use strict";
var common_vendor = require("../../../../common/vendor.js");
var vk = common_vendor.index.vk;
const _sfc_main = {
  data() {
    return {
      data: {}
    };
  },
  onLoad(options = {}) {
    vk = common_vendor.index.vk;
    this.options = options;
    this.init(options);
  },
  methods: {
    init(options) {
    },
    subscribeMessage1() {
      common_vendor.index.requestSubscribeMessage({
        tmplIds: [
          "UmINo5I6IcqktIwNt2TVorkU7f4dzd4eyNjfvOiwEC0",
          "uf7MotUXQ3GZWx-XftvsWtT355oNaEdMHuW_zt8WAcQ",
          "ZttnDpfQvZeu2BaqM_-rpnDp6eebXnXDsJ2nJkenT9k"
        ]
      });
    },
    subscribeMessage2() {
      common_vendor.index.requestSubscribeMessage({
        tmplIds: [
          "iC3hOtB2iSy1T0cqy7YtyIamcA3qt2z1wMEOA76IJtA",
          "w4oStuL2rl6Gqpy91mgN7tzk6MDt6eFPs8nofnfMcNM",
          "NcspDBQpH6CGHos3mMADrrQpEv2gHmtfOPa5KTLs92E"
        ]
      });
    },
    sendMessage(obj) {
      let that = this;
      new Promise((resolve, reject) => {
        vk.userCenter.code2SessionWeixin({
          success: (data) => {
            resolve(data.openid);
          }
        });
      }).then((openid) => {
        vk.callFunction({
          url: "template/openapi/weixin/pub/sendMessage",
          title: "\u8BF7\u6C42\u4E2D...",
          data: {
            openid
          },
          success: (data) => {
            that.data = data;
          }
        });
      });
    }
  },
  computed: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.subscribeMessage1 && $options.subscribeMessage1(...args)),
    b: common_vendor.o((...args) => $options.subscribeMessage2 && $options.subscribeMessage2(...args)),
    c: common_vendor.o((...args) => $options.sendMessage && $options.sendMessage(...args)),
    d: common_vendor.t(JSON.stringify($data.data))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9997c606"], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/pages_template/openapi/weixin/sendMessage/sendMessage.vue"]]);
wx.createPage(MiniProgramPage);
