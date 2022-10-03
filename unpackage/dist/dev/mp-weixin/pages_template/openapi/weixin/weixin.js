"use strict";
var common_vendor = require("../../../common/vendor.js");
var vk = common_vendor.index.vk;
const _sfc_main = {
  data() {
    return {
      imageUrl: "",
      openlink: ""
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
    getWeixinMPqrcode() {
      let that = this;
      vk.userCenter.getWeixinMPqrcode({
        data: {
          scene: "a=1&b=2",
          check_path: false,
          env_version: "develop"
        },
        success: (data) => {
          that.imageUrl = data.base64;
        }
      });
    },
    getWeixinMPscheme() {
      let that = this;
      vk.userCenter.getWeixinMPscheme({
        data: {
          query: "a=1&b=2",
          env_version: "develop"
        },
        success: (data) => {
          that.openlink = data.openlink;
        }
      });
    },
    getWeixinMPurl() {
      let that = this;
      vk.userCenter.getWeixinMPurl({
        data: {
          query: "a=1&b=2",
          env_version: "develop"
        },
        success: (data) => {
          that.openlink = data.url_link;
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.getWeixinMPqrcode && $options.getWeixinMPqrcode(...args)),
    b: $data.imageUrl
  }, $data.imageUrl ? {
    c: $data.imageUrl
  } : {}, {
    d: common_vendor.o((...args) => $options.getWeixinMPscheme && $options.getWeixinMPscheme(...args)),
    e: common_vendor.o((...args) => $options.getWeixinMPurl && $options.getWeixinMPurl(...args)),
    f: $data.openlink
  }, $data.openlink ? {
    g: common_vendor.t($data.openlink)
  } : {}, {
    h: common_vendor.o(($event) => _ctx.vk.navigateTo("msgSecCheck/msgSecCheck")),
    i: common_vendor.o(($event) => _ctx.vk.navigateTo("imgSecCheck/imgSecCheck")),
    j: common_vendor.o(($event) => _ctx.vk.navigateTo("sendMessage/sendMessage"))
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4ec517f8"], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/pages_template/openapi/weixin/weixin.vue"]]);
wx.createPage(MiniProgramPage);
