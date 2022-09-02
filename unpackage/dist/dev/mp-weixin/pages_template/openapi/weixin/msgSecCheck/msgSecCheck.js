"use strict";
var common_vendor = require("../../../../common/vendor.js");
var vk = common_vendor.index.vk;
const _sfc_main = {
  data() {
    return {
      data: {},
      form1: {
        text: "\u72793456\u4E66yuuo\u839E6543\u674Ezxcz\u849C7782\u6CD5fgnv\u7EA7"
      }
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
    msgSecCheck(obj) {
      let that = this;
      vk.callFunction({
        url: "template/openapi/weixin/pub/msgSecCheck",
        title: "\u68C0\u6D4B\u4E2D...",
        data: {
          content: that.form1.text
        },
        success: (data) => {
          that.data = data;
        },
        fail: (data) => {
          vk.toast(data.msg, "none");
        }
      });
    }
  },
  computed: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.form1.text,
    b: common_vendor.o(($event) => $data.form1.text = $event.detail.value),
    c: common_vendor.o((...args) => $options.msgSecCheck && $options.msgSecCheck(...args)),
    d: common_vendor.t(JSON.stringify($data.data))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/pages_template/openapi/weixin/msgSecCheck/msgSecCheck.vue"]]);
wx.createPage(MiniProgramPage);
