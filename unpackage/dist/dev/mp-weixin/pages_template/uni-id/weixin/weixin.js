"use strict";
var common_vendor = require("../../../common/vendor.js");
var vk = common_vendor.index.vk;
const _sfc_main = {
  data() {
    return {
      hasWeixinAuth: true,
      encryptedKey: "",
      image: "",
      data: {}
    };
  },
  onLoad(options) {
    vk = common_vendor.index.vk;
    this.init();
  },
  methods: {
    init() {
      let that = this;
      vk.userCenter.code2SessionWeixin({
        data: {
          needCache: true
        },
        success: (data) => {
          that.encryptedKey = data.encryptedKey;
        }
      });
    },
    loginByWeixin(type) {
      let that = this;
      vk.userCenter.loginByWeixin({
        data: {
          type
        },
        success: (data) => {
          vk.alert(data.msg);
          that.data = data;
        }
      });
    },
    code2SessionWeixin() {
      vk.userCenter.code2SessionWeixin({
        success: (data) => {
          vk.alert(JSON.stringify(data));
        }
      });
    },
    setUserInfo() {
      try {
        common_vendor.index.getUserProfile({
          desc: "\u7528\u4E8E\u5FEB\u901F\u8BBE\u7F6E\u6635\u79F0\u5934\u50CF",
          success: (res) => {
            let { userInfo } = res;
            vk.userCenter.updateUser({
              data: {
                nickname: userInfo.nickName,
                avatar: userInfo.avatarUrl,
                gender: userInfo.gender
              },
              success: (data) => {
                vk.alert("\u8BBE\u7F6E\u6210\u529F");
              }
            });
          }
        });
      } catch (err) {
        vk.alert("\u60A8\u7684\u5FAE\u4FE1\u7248\u672C\u8FC7\u4F4E\uFF0C\u8BF7\u5148\u66F4\u65B0\u5FAE\u4FE1!");
      }
    },
    bindWeixin() {
      let that = this;
      vk.userCenter.bindWeixin({
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
    },
    getPhoneNumber(e) {
      let that = this;
      let { encryptedData, iv } = e.detail;
      if (!encryptedData || !iv) {
        return false;
      }
      vk.userCenter.getPhoneNumber({
        data: {
          encryptedData,
          iv,
          encryptedKey: that.encryptedKey
        },
        success: (data) => {
          vk.alert("\u624B\u673A\u53F7:" + data.phone);
        }
      });
    },
    loginByWeixinPhoneNumber(e) {
      let that = this;
      let { encryptedData, iv } = e.detail;
      if (!encryptedData || !iv) {
        return false;
      }
      vk.userCenter.loginByWeixinPhoneNumber({
        data: {
          encryptedData,
          iv,
          encryptedKey: that.encryptedKey
        },
        success(data) {
          vk.alert(data.msg);
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => _ctx.vk.navigateTo("../../openapi/weixin/weixin")),
    b: common_vendor.o(($event) => $options.loginByWeixin("register")),
    c: common_vendor.o(($event) => $options.loginByWeixin("login")),
    d: common_vendor.o(($event) => $options.loginByWeixin()),
    e: common_vendor.o((...args) => $options.code2SessionWeixin && $options.code2SessionWeixin(...args)),
    f: common_vendor.o((...args) => $options.setUserInfo && $options.setUserInfo(...args)),
    g: common_vendor.o((...args) => $options.bindWeixin && $options.bindWeixin(...args)),
    h: common_vendor.o((...args) => $options.unbindWeixin && $options.unbindWeixin(...args)),
    i: common_vendor.o((...args) => $options.getPhoneNumber && $options.getPhoneNumber(...args)),
    j: common_vendor.o((...args) => $options.loginByWeixinPhoneNumber && $options.loginByWeixinPhoneNumber(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-441c5fd8"], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/pages_template/uni-id/weixin/weixin.vue"]]);
wx.createPage(MiniProgramPage);
