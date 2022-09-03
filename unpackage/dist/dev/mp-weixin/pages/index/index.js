"use strict";
var common_vendor = require("../../common/vendor.js");
var vk = common_vendor.index.vk;
const _sfc_main = {
  data() {
    return {
      hasWeixinAuth: true,
      encryptedKey: "",
      image: "",
      data: {},
      userInfo: []
    };
  },
  onLaunch() {
    vk = common_vendor.index.vk;
    this.init();
  },
  methods: {
    takeout() {
      if (vk.getVuex("$user.userInfo._id")) {
        vk.navigateTo("/pages/address/address");
      } else {
        vk.navigateTo("/pages/login/login");
      }
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
          that.userInfo = data.userInfo;
          vk.vuex.set("$user.userInfo.avatar", that.userInfo.avatar);
          vk.vk.navigateTo({
            url: "/pages/index/index"
          });
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t(_ctx.vk.getVuex("$user.userInfo.nickname") || _ctx.vk.getVuex("$user.userInfo.username")),
    b: common_vendor.o((...args) => _ctx.takein && _ctx.takein(...args)),
    c: common_vendor.o((...args) => $options.takeout && $options.takeout(...args)),
    d: common_vendor.t($data.userInfo.balance),
    e: common_vendor.o((...args) => _ctx.invite && _ctx.invite(...args)),
    f: common_vendor.o((...args) => _ctx.packages && _ctx.packages(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
