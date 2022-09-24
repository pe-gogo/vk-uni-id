"use strict";
var common_vendor = require("../../common/vendor.js");
var vk = common_vendor.index.vk;
const storeObj = vk.importObject("client/store");
const _sfc_main = {
  data() {
    return {
      siteList: [],
      hasWeixinAuth: true,
      encryptedKey: "",
      image: "",
      data: {},
      userInfo: [],
      show: false,
      markers: []
    };
  },
  onLaunch() {
    vk = common_vendor.index.vk;
    this.init();
  },
  onShow() {
  },
  onReady() {
  },
  async onLoad() {
    this.getList();
  },
  methods: {
    async getList() {
      const res = await storeObj.getList({
        pageIndex: 1,
        pageSize: 20,
        getMain: false
      });
      vk.setStorageSync("markers", res.rows);
      this.markers = vk.getStorageSync("markers");
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
    to() {
      vk.navigateTo("/pages/menu/menu");
    }
  }
};
if (!Array) {
  const _easycom_u_search2 = common_vendor.resolveComponent("u-search");
  _easycom_u_search2();
}
const _easycom_u_search = () => "../../uni_modules/vk-uview-ui/components/u-search/u-search.js";
if (!Math) {
  _easycom_u_search();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.markers[0].latitude,
    b: $data.markers[0].longitude,
    c: $data.markers,
    d: common_vendor.p({
      ["show-action"]: false,
      placeholder: "\u641C\u7D22\u8DEF\u540D/\u5C0F\u533A/\u5199\u5B57\u697C/\u5B66\u6821\u7B49"
    }),
    e: common_vendor.f($data.markers, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.road)
      };
    }),
    f: common_vendor.o((...args) => $options.to && $options.to(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/pages/stores/stores.vue"]]);
wx.createPage(MiniProgramPage);
