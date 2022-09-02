"use strict";
var common_vendor = require("../../../common/vendor.js");
var vk = common_vendor.index.vk;
const _sfc_main = {
  data() {
    return {
      options: {}
    };
  },
  onLoad(options) {
    vk = common_vendor.index.vk;
    this.options = options || {};
    this.init(options);
  },
  methods: {
    init(options) {
      if (this.options.code) {
        vk.toast("\u5DF2\u83B7\u53D6\u5230code\uFF0C\u8BF7\u70B9\u51FB\u76F8\u5E94\u64CD\u4F5C\u3002");
        return false;
      }
    },
    getWeixinCode(scope) {
      let appid = "";
      let redirect_uri = window.location.href.split("?")[0];
      let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}&state=STATE#wechat_redirect`;
      window.location.href = url;
    },
    code2SessionWeixin() {
      let that = this;
      if (!that.options.code) {
        vk.toast("\u8BF7\u5148\u83B7\u53D6code");
        return false;
      }
      vk.userCenter.code2SessionWeixin({
        data: {
          code: that.options.code,
          state: that.options.state
        },
        success: (data) => {
          vk.alert(JSON.stringify(data));
        }
      });
    },
    loginByWeixin(type) {
      let that = this;
      if (!that.options.code) {
        vk.toast("\u8BF7\u5148\u83B7\u53D6code");
        return false;
      }
      vk.userCenter.loginByWeixin({
        data: {
          code: that.options.code,
          state: that.options.state,
          type
        },
        success: (data) => {
          vk.alert(data.msg);
          that.data = data;
        }
      });
    },
    bindWeixin() {
      let that = this;
      if (!that.options.code) {
        vk.toast("\u8BF7\u5148\u83B7\u53D6code");
        return false;
      }
      vk.userCenter.bindWeixin({
        data: {
          code: that.options.code
        },
        success: (data) => {
          vk.alert("\u7ED1\u5B9A\u6210\u529F");
          that.data = data;
        }
      });
    },
    unbindWeixin() {
      let that = this;
      vk.userCenter.unbindWeixin({
        success: (data) => {
          vk.alert("\u89E3\u7ED1\u6210\u529F");
          that.data = data;
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.getWeixinCode("snsapi_base")),
    b: common_vendor.o((...args) => $options.code2SessionWeixin && $options.code2SessionWeixin(...args)),
    c: common_vendor.o(($event) => $options.getWeixinCode("snsapi_userinfo")),
    d: common_vendor.o(($event) => $options.loginByWeixin("register")),
    e: common_vendor.o(($event) => $options.loginByWeixin("login")),
    f: common_vendor.o(($event) => $options.loginByWeixin()),
    g: common_vendor.o(($event) => $options.bindWeixin()),
    h: common_vendor.o(($event) => $options.unbindWeixin())
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f4db92c0"], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/pages_template/uni-id/weixin/h5-weixin.vue"]]);
wx.createPage(MiniProgramPage);
