"use strict";
var common_vendor = require("../../../../common/vendor.js");
var vk = common_vendor.index.vk;
const _sfc_main = {
  data() {
    return {
      data: {},
      form1: {}
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
    chooseImage() {
      let that = this;
      common_vendor.index.chooseImage({
        count: 1,
        sizeType: ["compressed"],
        success: (res) => {
          let file = res.tempFiles[0];
          vk.pubfn.fileToBase64({ file }).then((base64) => {
            if (file.size / 1024 / 1024 > 1) {
              vk.toast("\u56FE\u7247\u4E0D\u80FD\u5927\u4E8E1M", "none");
              return false;
            }
            vk.callFunction({
              url: "template/openapi/weixin/pub/imgSecCheck",
              title: "\u68C0\u6D4B\u4E2D...",
              data: {
                base64
              },
              success: (data) => {
                that.data = data;
              },
              fail: (data) => {
                vk.toast(data.msg, "none");
              }
            });
          });
        }
      });
    }
  },
  computed: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.chooseImage && $options.chooseImage(...args)),
    b: common_vendor.t(JSON.stringify($data.data))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/pages_template/openapi/weixin/imgSecCheck/imgSecCheck.vue"]]);
wx.createPage(MiniProgramPage);
