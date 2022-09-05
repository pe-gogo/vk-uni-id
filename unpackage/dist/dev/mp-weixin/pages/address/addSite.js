"use strict";
var common_vendor = require("../../common/vendor.js");
var vk = common_vendor.index.vk;
vk.importObject("client/address");
const _sfc_main = {
  onLaunch() {
    vk = common_vendor.index.vk;
    this.init();
  },
  data() {
    return {
      siteList: [],
      hasWeixinAuth: true,
      encryptedKey: "",
      image: "",
      data: {},
      userInfo: [],
      form: {
        name: "",
        number: "",
        province: "",
        site: ""
      }
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_form2 = common_vendor.resolveComponent("u-form");
  (_easycom_u_input2 + _easycom_u_form_item2 + _easycom_u_button2 + _easycom_u_form2)();
}
const _easycom_u_input = () => "../../uni_modules/vk-uview-ui/components/u-input/u-input.js";
const _easycom_u_form_item = () => "../../uni_modules/vk-uview-ui/components/u-form-item/u-form-item.js";
const _easycom_u_button = () => "../../uni_modules/vk-uview-ui/components/u-button/u-button.js";
const _easycom_u_form = () => "../../uni_modules/vk-uview-ui/components/u-form/u-form.js";
if (!Math) {
  (_easycom_u_input + _easycom_u_form_item + _easycom_u_button + _easycom_u_form)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.form.name = $event),
    b: common_vendor.p({
      modelValue: $data.form.name
    }),
    c: common_vendor.p({
      label: "\u59D3\u540D"
    }),
    d: common_vendor.o(($event) => $data.form.number = $event),
    e: common_vendor.p({
      modelValue: $data.form.number
    }),
    f: common_vendor.p({
      label: "\u7535\u8BDD"
    }),
    g: common_vendor.o(($event) => $data.form.province = $event),
    h: common_vendor.p({
      modelValue: $data.form.province
    }),
    i: common_vendor.p({
      label: "\u7701\u4EFD"
    }),
    j: common_vendor.o(($event) => $data.form.site = $event),
    k: common_vendor.p({
      modelValue: $data.form.site
    }),
    l: common_vendor.p({
      label: "\u5730\u5740"
    }),
    m: common_vendor.p({
      type: "success",
      size: "medium"
    }),
    n: common_vendor.sr("uForm", "5adf3af8-0"),
    o: common_vendor.p({
      model: $data.form
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5adf3af8"], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/pages/address/addSite.vue"]]);
wx.createPage(MiniProgramPage);
