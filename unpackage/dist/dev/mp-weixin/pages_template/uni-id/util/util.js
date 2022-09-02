"use strict";
var common_vendor = require("../../../common/vendor.js");
var vk = common_vendor.index.vk;
const _sfc_main = {
  data() {
    return {
      form1: {
        inviteCode: ""
      },
      avatar: ""
    };
  },
  onLoad(options) {
    vk = common_vendor.index.vk;
  },
  methods: {
    setAvatar() {
      let that = this;
      let avatar = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594798658581&di=bcd5486940ad88cf88a904f411c53e94&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn15%2F600%2Fw1920h1080%2F20180505%2Fad66-hacuuvt5802647.jpg";
      that.form1;
      vk.userCenter.setAvatar({
        data: {
          avatar
        },
        success: (data) => {
          that.avatar = avatar;
          vk.alert("\u8BBE\u7F6E\u6210\u529F");
        }
      });
    },
    updateUser() {
      let that = this;
      that.form1;
      vk.userCenter.updateUser({
        data: {
          nickname: "\u5251\u5723\u674E\u767D"
        },
        success: (data) => {
          vk.alert("\u66F4\u65B0\u6210\u529F");
        }
      });
    },
    getMyUserInfo() {
      let that = this;
      that.form1;
      vk.userCenter.getCurrentUserInfo({
        success: (data) => {
          vk.alert(JSON.stringify(data.userInfo));
        }
      });
    },
    checkToken() {
      vk.userCenter.checkToken({
        success: (data) => {
          vk.alert("token\u6709\u6548");
        }
      });
    },
    logout() {
      vk.userCenter.logout({
        success: (data) => {
          vk.alert("\u9000\u51FA\u6210\u529F");
        }
      });
    },
    setUserInviteCode() {
      vk.userCenter.setUserInviteCode({
        success: (data) => {
          vk.alert(data.msg);
        }
      });
    },
    acceptInvite() {
      let that = this;
      var form1 = that.form1;
      if (!form1.inviteCode) {
        vk.alert("\u8BF7\u586B\u5199\u9080\u8BF7\u7801");
        return;
      }
      vk.userCenter.acceptInvite({
        data: form1,
        success: (data) => {
          vk.alert("\u63A5\u53D7\u9080\u8BF7\u6210\u529F");
        }
      });
    },
    uploadAvatar() {
      let that = this;
      common_vendor.index.chooseImage({
        count: 1,
        sizeType: ["compressed"],
        success: (res) => {
          vk.callFunctionUtil.uploadFile({
            title: "\u4E0A\u4F20\u4E2D...",
            filePath: res.tempFilePaths[0],
            fileType: "image",
            success: (res2) => {
              vk.userCenter.setAvatar({
                data: {
                  avatar: res2.fileID,
                  deleteOldFile: true
                },
                success: () => {
                  that.avatar = res2.fileID;
                }
              });
            }
          });
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_u_avatar2 = common_vendor.resolveComponent("u-avatar");
  _easycom_u_avatar2();
}
const _easycom_u_avatar = () => "../../../uni_modules/vk-uview-ui/components/u-avatar/u-avatar.js";
if (!Math) {
  _easycom_u_avatar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.avatar
  }, $data.avatar ? {
    b: common_vendor.p({
      src: $data.avatar,
      size: "140"
    })
  } : {}, {
    c: common_vendor.o((...args) => $options.setAvatar && $options.setAvatar(...args)),
    d: common_vendor.o((...args) => $options.uploadAvatar && $options.uploadAvatar(...args)),
    e: common_vendor.o((...args) => $options.updateUser && $options.updateUser(...args)),
    f: common_vendor.o((...args) => $options.getMyUserInfo && $options.getMyUserInfo(...args)),
    g: common_vendor.o((...args) => $options.checkToken && $options.checkToken(...args)),
    h: common_vendor.o((...args) => $options.setUserInviteCode && $options.setUserInviteCode(...args)),
    i: $data.form1.inviteCode,
    j: common_vendor.o(($event) => $data.form1.inviteCode = $event.detail.value),
    k: common_vendor.o((...args) => $options.acceptInvite && $options.acceptInvite(...args)),
    l: common_vendor.o((...args) => $options.logout && $options.logout(...args))
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7b2791d4"], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/pages_template/uni-id/util/util.vue"]]);
wx.createPage(MiniProgramPage);
