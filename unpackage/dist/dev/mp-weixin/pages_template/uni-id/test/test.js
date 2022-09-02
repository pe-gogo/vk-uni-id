"use strict";
var common_vendor = require("../../../common/vendor.js");
common_vendor.index.vk;
const _sfc_main = {
  data() {
    return {
      show: false,
      form: {
        name: "",
        intro: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "\u8BF7\u8F93\u5165\u59D3\u540D",
            trigger: ["change", "blur"]
          }
        ],
        intro: [
          {
            required: true,
            message: "\u8BF7\u8F93\u5165\u7B80\u4ECB",
            trigger: ["change", "blur"]
          },
          {
            min: 5,
            message: "\u7B80\u4ECB\u4E0D\u80FD\u5C11\u4E8E5\u4E2A\u5B57",
            trigger: "change"
          }
        ]
      }
    };
  },
  onPageScroll(e) {
    this.scrollTop = e.scrollTop;
  },
  onLoad(options) {
  },
  onReady() {
    this.$refs.uForm.setRules(this.rules);
  },
  methods: {
    click(e) {
      console.log(e);
    },
    change(index) {
      this.current = index;
    },
    submit() {
      this.$refs.uForm.validate((valid) => {
        if (valid) {
          console.log("\u9A8C\u8BC1\u901A\u8FC7");
        } else {
          console.log("\u9A8C\u8BC1\u5931\u8D25");
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u_form2 = common_vendor.resolveComponent("u-form");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u_input2 + _easycom_u_form_item2 + _easycom_u_form2 + _easycom_u_button2)();
}
const _easycom_u_input = () => "../../../uni_modules/vk-uview-ui/components/u-input/u-input.js";
const _easycom_u_form_item = () => "../../../uni_modules/vk-uview-ui/components/u-form-item/u-form-item.js";
const _easycom_u_form = () => "../../../uni_modules/vk-uview-ui/components/u-form/u-form.js";
const _easycom_u_button = () => "../../../uni_modules/vk-uview-ui/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u_input + _easycom_u_form_item + _easycom_u_form + _easycom_u_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.form.name = $event),
    b: common_vendor.p({
      modelValue: $data.form.name
    }),
    c: common_vendor.p({
      label: "\u59D3\u540D",
      prop: "name"
    }),
    d: common_vendor.o(($event) => $data.form.intro = $event),
    e: common_vendor.p({
      modelValue: $data.form.intro
    }),
    f: common_vendor.p({
      label: "\u7B80\u4ECB",
      prop: "intro"
    }),
    g: common_vendor.sr("uForm", "1c98ebd4-0"),
    h: common_vendor.p({
      model: $data.form
    }),
    i: common_vendor.o($options.submit),
    j: common_vendor.o(($event) => $data.show = true)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1c98ebd4"], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/pages_template/uni-id/test/test.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
