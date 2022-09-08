"use strict";
var common_vendor = require("../../common/vendor.js");
var vk = common_vendor.index.vk;
const addressObject = vk.importObject("client/address");
const _sfc_main = {
  data() {
    return {
      siteList: [],
      hasWeixinAuth: true,
      encryptedKey: "",
      image: "",
      data: {},
      userInfo: [],
      userAddress: [],
      show: false
    };
  },
  onLaunch() {
    vk = common_vendor.index.vk;
    this.init();
  },
  onShow() {
    if (this.userAddress[0]) {
      this.load();
    }
  },
  onReady() {
  },
  async onLoad() {
    this.load();
  },
  methods: {
    async load() {
      let res = await addressObject.findById({
        data: {
          userInfo: vk.getVuex("$user.userInfo")
        }
      });
      if (res.item.address[0]) {
        vk.setVuex("$user.userInfo.address", res.item.address);
        this.userAddress = vk.getVuex("$user.userInfo.address");
        this.show = true;
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
    deleteAdd(index) {
      vk.confirm("\u786E\u5B9A\u8981\u5220\u9664\u5417?", (res) => {
        if (res.confirm) {
          this.userAddress.splice(index, 1);
          addressObject.update({
            data: {
              userInfo: vk.getVuex("$user.userInfo"),
              form: this.userAddress
            }
          });
        }
      });
    },
    toAddSite() {
      vk.navigateTo({
        url: "/pages/address/addSite"
      });
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.show
  }, $data.show ? {
    b: common_vendor.f($data.userAddress, (res, index, i0) => {
      return {
        a: common_vendor.t(res.name),
        b: common_vendor.t(res.phone),
        c: common_vendor.t(res.site),
        d: "db675620-0-" + i0,
        e: common_vendor.o(($event) => $options.deleteAdd(index)),
        f: "db675620-1-" + i0,
        g: res.name
      };
    }),
    c: common_vendor.o(_ctx.update),
    d: common_vendor.p({
      name: "edit-pen",
      size: 40,
      color: "#999999"
    }),
    e: common_vendor.p({
      name: "close",
      size: 40,
      color: "#999999"
    })
  } : {}, {
    f: common_vendor.p({
      name: "plus",
      color: "#ffffff",
      size: 30
    }),
    g: common_vendor.o((...args) => $options.toAddSite && $options.toAddSite(...args))
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-db675620"], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/pages/address/address.vue"]]);
wx.createPage(MiniProgramPage);
