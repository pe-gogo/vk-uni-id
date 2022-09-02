"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      form: {
        name: "",
        intro: "",
        sex: ""
      },
      checkboxList: [
        {
          name: "\u82F9\u679C",
          checked: false,
          disabled: false
        },
        {
          name: "\u96EA\u68A8",
          checked: false,
          disabled: false
        },
        {
          name: "\u67E0\u6AAC",
          checked: false,
          disabled: false
        }
      ],
      radioList: [
        {
          name: "\u9C9C\u751C",
          disabled: false
        },
        {
          name: "\u9EBB\u8FA3",
          disabled: false
        }
      ],
      radio: "",
      switchVal: false
    };
  }
};
if (!Array) {
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u_checkbox2 = common_vendor.resolveComponent("u-checkbox");
  const _easycom_u_checkbox_group2 = common_vendor.resolveComponent("u-checkbox-group");
  const _easycom_u_radio2 = common_vendor.resolveComponent("u-radio");
  const _easycom_u_radio_group2 = common_vendor.resolveComponent("u-radio-group");
  const _easycom_u_switch2 = common_vendor.resolveComponent("u-switch");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_form2 = common_vendor.resolveComponent("u-form");
  (_easycom_u_input2 + _easycom_u_form_item2 + _easycom_u_checkbox2 + _easycom_u_checkbox_group2 + _easycom_u_radio2 + _easycom_u_radio_group2 + _easycom_u_switch2 + _easycom_u_button2 + _easycom_u_form2)();
}
const _easycom_u_input = () => "../../uni_modules/vk-uview-ui/components/u-input/u-input.js";
const _easycom_u_form_item = () => "../../uni_modules/vk-uview-ui/components/u-form-item/u-form-item.js";
const _easycom_u_checkbox = () => "../../uni_modules/vk-uview-ui/components/u-checkbox/u-checkbox.js";
const _easycom_u_checkbox_group = () => "../../uni_modules/vk-uview-ui/components/u-checkbox-group/u-checkbox-group.js";
const _easycom_u_radio = () => "../../uni_modules/vk-uview-ui/components/u-radio/u-radio.js";
const _easycom_u_radio_group = () => "../../uni_modules/vk-uview-ui/components/u-radio-group/u-radio-group.js";
const _easycom_u_switch = () => "../../uni_modules/vk-uview-ui/components/u-switch/u-switch.js";
const _easycom_u_button = () => "../../uni_modules/vk-uview-ui/components/u-button/u-button.js";
const _easycom_u_form = () => "../../uni_modules/vk-uview-ui/components/u-form/u-form.js";
if (!Math) {
  (_easycom_u_input + _easycom_u_form_item + _easycom_u_checkbox + _easycom_u_checkbox_group + _easycom_u_radio + _easycom_u_radio_group + _easycom_u_switch + _easycom_u_button + _easycom_u_form)();
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
    d: common_vendor.o(($event) => $data.form.intro = $event),
    e: common_vendor.p({
      modelValue: $data.form.intro
    }),
    f: common_vendor.p({
      label: "\u7B80\u4ECB"
    }),
    g: common_vendor.o(($event) => $data.form.sex = $event),
    h: common_vendor.p({
      type: "select",
      modelValue: $data.form.sex
    }),
    i: common_vendor.p({
      label: "\u6027\u522B"
    }),
    j: common_vendor.f($data.checkboxList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index,
        c: "1e2e9a60-9-" + i0 + ",1e2e9a60-8",
        d: common_vendor.o(($event) => item.checked = $event, index),
        e: common_vendor.p({
          name: item.name,
          modelValue: item.checked
        })
      };
    }),
    k: common_vendor.p({
      label: "\u6C34\u679C"
    }),
    l: common_vendor.f($data.radioList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index,
        c: "1e2e9a60-12-" + i0 + ",1e2e9a60-11",
        d: common_vendor.p({
          name: item.name,
          disabled: item.disabled
        })
      };
    }),
    m: common_vendor.o(($event) => $data.radio = $event),
    n: common_vendor.p({
      modelValue: $data.radio
    }),
    o: common_vendor.p({
      label: "\u5473\u9053"
    }),
    p: common_vendor.o(($event) => $data.switchVal = $event),
    q: common_vendor.p({
      modelValue: $data.switchVal
    }),
    r: common_vendor.p({
      label: "\u5F00\u5173"
    }),
    s: common_vendor.sr("uForm", "1e2e9a60-0"),
    t: common_vendor.p({
      model: $data.form
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/pages/address/addSite.vue"]]);
wx.createPage(MiniProgramPage);
