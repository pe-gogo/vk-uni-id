"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      src: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9b263989-3b34-486f-a7ad-68fb4c0c0449/81f0d473-206c-4829-9314-b2086b35282a.jpeg"
    };
  }
};
if (!Array) {
  const _easycom_submit2 = common_vendor.resolveComponent("submit");
  _easycom_submit2();
}
const _easycom_submit = () => "../../../components/submit/submit.js";
if (!Math) {
  _easycom_submit();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.src
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1362ede4"], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/pages/menu/goodDes/goodDes.vue"]]);
wx.createPage(MiniProgramPage);
