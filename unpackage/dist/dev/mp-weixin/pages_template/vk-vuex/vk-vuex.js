"use strict";
var common_vendor = require("../../common/vendor.js");
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
      var form1 = this.form1;
      vk.userCenter.register({
        data: form1,
        success: (data) => {
          vk.alert("\u6CE8\u518C\u6210\u529F!");
        }
      });
    },
    login() {
      var form1 = this.form1;
      vk.userCenter.login({
        data: form1,
        success: (data) => {
          vk.setVuex("$user.userInfo", data.userInfo);
          vk.alert("\u767B\u9646\u6210\u529F!");
        }
      });
    },
    logout() {
      vk.userCenter.logout({
        success: (data) => {
          vk.setVuex("$user.userInfo", {});
          vk.alert("\u9000\u51FA\u6210\u529F");
        }
      });
    },
    uploadAvatar() {
      common_vendor.index.chooseImage({
        count: 1,
        sizeType: ["compressed"],
        success: (res) => {
          vk.callFunctionUtil.uploadFile({
            title: "\u4E0A\u4F20\u4E2D...",
            filePath: res.tempFilePaths[0],
            fileType: "image",
            success(res2) {
              vk.userCenter.setAvatar({
                data: {
                  avatar: res2.fileID
                },
                success() {
                  vk.setVuex("$user.userInfo.avatar", res2.fileID);
                }
              });
            }
          });
        }
      });
    }
  },
  computed: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.vk.getVuex("$user.userInfo._id")
  }, _ctx.vk.getVuex("$user.userInfo._id") ? {
    b: common_vendor.t(_ctx.vk.getVuex("$user.userInfo.nickname") || _ctx.vk.getVuex("$user.userInfo.username")),
    c: _ctx.vk.getVuex("$user.userInfo.avatar")
  } : {}, {
    d: $data.form1.username,
    e: common_vendor.o(($event) => $data.form1.username = $event.detail.value),
    f: $data.form1.password,
    g: common_vendor.o(($event) => $data.form1.password = $event.detail.value),
    h: common_vendor.o((...args) => $options.register && $options.register(...args)),
    i: common_vendor.o((...args) => $options.login && $options.login(...args)),
    j: common_vendor.o((...args) => $options.uploadAvatar && $options.uploadAvatar(...args)),
    k: common_vendor.o((...args) => $options.logout && $options.logout(...args))
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3bbe5a99"], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/pages_template/vk-vuex/vk-vuex.vue"]]);
wx.createPage(MiniProgramPage);
