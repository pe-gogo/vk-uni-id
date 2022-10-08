"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      form: {
        name: "",
        phone: "",
        info: "",
        addressInfo: "",
        address: []
      },
      style: {
        position: "flexd",
        width: "290px",
        marginTop: "30px"
      },
      rules: {
        name: [
          {
            required: true,
            message: "\u8BF7\u8F93\u5165\u59D3\u540D"
          }
        ],
        phone: [
          {
            required: true,
            len: 11,
            message: "\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF"
          }
        ],
        info: [
          {
            required: true,
            message: "\u8BF7\u9009\u62E9\u8BE6\u7EC6\u5730\u5740"
          }
        ],
        addressInfo: [
          {
            required: true,
            message: "\u8BF7\u8F93\u5165\u8BE6\u7EC6\u5730\u5740"
          }
        ]
      }
    };
  },
  computed: {},
  methods: {
    async add() {
      this.address = vk.getVuex("$user.userInfo.address");
      this.address.push(this.form);
      await addressObject.add({
        title: "\u6DFB\u52A0\u4E2D",
        data: {
          data: this.address
        }
      });
    },
    async getLocation() {
      let res = await wx.chooseLocation();
      this.form.info = res.address + res.name;
    },
    async submit() {
      this.$refs.uForm.validate((valid) => {
        if (valid) {
          console.log("\u9A8C\u8BC1\u901A\u8FC7");
        } else {
          console.log("\u9A8C\u8BC1\u5931\u8D25");
        }
      });
      this.address = vk.getVuex("$user.userInfo.address");
      this.address.push(this.form);
      vk.callFunction({
        url: "client/address.add",
        title: "\u8BF7\u6C42\u4E2D...",
        data: {
          address: this.address
        },
        success: (data) => {
          vk.setVuex("$user.userInfo.address", this.address);
        }
      });
    }
  },
  onReady() {
    this.$refs.uForm.setRules(this.rules);
  }
};
if (!Array) {
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u_form2 = common_vendor.resolveComponent("u-form");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u_input2 + _easycom_u_form_item2 + _easycom_u_form2 + _easycom_u_button2)();
}
const _easycom_u_input = () => "../../uni_modules/vk-uview-ui/components/u-input/u-input.js";
const _easycom_u_form_item = () => "../../uni_modules/vk-uview-ui/components/u-form-item/u-form-item.js";
const _easycom_u_form = () => "../../uni_modules/vk-uview-ui/components/u-form/u-form.js";
const _easycom_u_button = () => "../../uni_modules/vk-uview-ui/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u_input + _easycom_u_form_item + _easycom_u_form + _easycom_u_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.form.name = $event),
    b: common_vendor.p({
      placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D",
      modelValue: $data.form.name
    }),
    c: common_vendor.p({
      label: "\u59D3\u540D",
      prop: "name",
      labelWidth: "150rpx"
    }),
    d: common_vendor.o(($event) => $data.form.phone = $event),
    e: common_vendor.p({
      placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
      modelValue: $data.form.phone
    }),
    f: common_vendor.p({
      label: "\u624B\u673A\u53F7",
      prop: "phone",
      labelWidth: "150rpx"
    }),
    g: common_vendor.o($options.getLocation),
    h: common_vendor.o(($event) => $data.form.info = $event),
    i: common_vendor.p({
      placeholder: "\u8BF7\u9009\u62E9\u5730\u5740",
      modelValue: $data.form.info
    }),
    j: common_vendor.p({
      label: "\u914D\u9001\u5730\u5740",
      prop: "info",
      labelWidth: "150rpx"
    }),
    k: common_vendor.o(($event) => $data.form.addressInfo = $event),
    l: common_vendor.p({
      placeholder: "\u8BF7\u586B\u5199\u914D\u9001\u5730\u5740",
      modelValue: $data.form.addressInfo
    }),
    m: common_vendor.p({
      label: "\u8BE6\u7EC6\u5730\u5740",
      prop: "addressInfo",
      labelWidth: "150rpx"
    }),
    n: common_vendor.sr("uForm", "5adf3af8-0"),
    o: common_vendor.p({
      model: $data.form
    }),
    p: common_vendor.o($options.submit),
    q: common_vendor.p({
      customStyle: $data.style
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5adf3af8"], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/pages/address/addSite.vue"]]);
wx.createPage(MiniProgramPage);
