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
      userAddress: []
    };
  },
  onLaunch() {
    vk = common_vendor.index.vk;
    this.init();
  },
  onReady() {
  },
  async onLoad() {
    let rev = await this.load();
    await this.setAdd(rev.address);
  },
  methods: {
    setAdd(rev) {
      this.userAddress = rev;
    },
    async load() {
      let res = await addressObject.findById({
        data: {
          userInfo: vk.getVuex("$user.userInfo")
        }
      });
      return res.item;
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
    async add() {
      await addressObject.add({
        title: "\u8BF7\u6C42\u4E2D",
        data: {
          data: this.data
        }
      });
    },
    async update() {
      await addressObject.update({
        title: "\u8BF7\u6C42\u4E2D",
        data: {
          data: this.data
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
    a: $data.userAddress[0]
  }, $data.userAddress[0] ? {
    b: common_vendor.f($data.userAddress, (res, index, i0) => {
      return {
        a: common_vendor.t(res.name),
        b: common_vendor.t(res.phone),
        c: common_vendor.t(res.site),
        d: "db675620-0-" + i0,
        e: res.name
      };
    }),
    c: common_vendor.o($options.update),
    d: common_vendor.p({
      name: "edit-pen",
      size: 40,
      color: "#999999"
    })
  } : {}, {
    e: common_vendor.p({
      name: "plus",
      color: "#ffffff",
      size: 30
    }),
    f: common_vendor.o((...args) => $options.toAddSite && $options.toAddSite(...args))
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-db675620"], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/pages/address/address.vue"]]);
wx.createPage(MiniProgramPage);
