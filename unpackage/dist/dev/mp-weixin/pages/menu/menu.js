"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _ctx.controls,
    b: _ctx.latitude,
    c: _ctx.longitude,
    d: _ctx.markers,
    e: _ctx.polyline,
    f: _ctx.scale,
    g: common_vendor.s(_ctx.mapStyle),
    h: common_vendor.o((...args) => _ctx.controltap && _ctx.controltap(...args)),
    i: common_vendor.o((...args) => _ctx.regionchange && _ctx.regionchange(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/pages/menu/menu.vue"]]);
wx.createPage(MiniProgramPage);
