"use strict";
var common_vendor = require("../../../common/vendor.js");
var vk = common_vendor.index.vk;
const _sfc_main = {
  data() {
    return {
      data: {}
    };
  },
  onLoad(options) {
    vk = common_vendor.index.vk;
    this.options = options;
    this.init(options);
  },
  methods: {
    init(options) {
    },
    business_license() {
      let that = this;
      common_vendor.index.chooseImage({
        count: 1,
        sizeType: ["compressed"],
        success: (res) => {
          let file = res.tempFiles[0];
          vk.openapi.baidu.open.ocr.business_license({
            title: "\u8BC6\u522B\u4E2D...",
            data: {
              file
            },
            success: (data) => {
              that.data = data;
            },
            fail: (err) => {
              that.data = err;
            }
          });
        }
      });
    },
    idcard() {
      let that = this;
      common_vendor.index.chooseImage({
        count: 1,
        sizeType: ["compressed"],
        success: (res) => {
          let file = res.tempFiles[0];
          vk.openapi.baidu.open.ocr.idcard({
            title: "\u8BC6\u522B\u4E2D...",
            data: {
              file
            },
            success: (data) => {
              that.data = data;
            }
          });
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.business_license && $options.business_license(...args)),
    b: common_vendor.o((...args) => $options.idcard && $options.idcard(...args)),
    c: common_vendor.t(JSON.stringify($data.data, null, 2))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1341f5bc"], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/pages_template/openapi/baidu/baidu.vue"]]);
wx.createPage(MiniProgramPage);
