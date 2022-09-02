"use strict";
var common_vendor = require("../../common/vendor.js");
var vk = common_vendor.index.vk;
const _sfc_main = {
  data() {
    return {
      src: "https://img-qn.51miz.com/Element/00/64/92/22/3ee80c66_E649222_36ee1039.jpg!/quality/90/unsharp/true/compress/true/format/jpg"
    };
  },
  onPageScroll(e) {
    this.scrollTop = e.scrollTop;
  },
  onLoad(options = {}) {
  },
  onReady() {
  },
  onShow() {
  },
  onHide() {
  },
  onShareAppMessage(options) {
  },
  methods: {
    init(res) {
      vk.alert("\u5185\u5BB9");
    },
    pageTo(path) {
      vk.navigateTo(path);
    }
  },
  watch: {},
  computed: {}
};
if (!Array) {
  const _easycom_u_image2 = common_vendor.resolveComponent("u-image");
  const _easycom_takeInOut2 = common_vendor.resolveComponent("takeInOut");
  (_easycom_u_image2 + _easycom_takeInOut2)();
}
const _easycom_u_image = () => "../../uni_modules/vk-uview-ui/components/u-image/u-image.js";
const _easycom_takeInOut = () => "../../components/takeInOut/takeInOut.js";
if (!Math) {
  (_easycom_u_image + _easycom_takeInOut)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      src: $data.src,
      width: "100%",
      height: "500rpx",
      ["lazy-load"]: true,
      fade: true,
      duration: "450"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-57280228"], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/pages/index/index.vue"]]);
_sfc_main.__runtimeHooks = 3;
wx.createPage(MiniProgramPage);
