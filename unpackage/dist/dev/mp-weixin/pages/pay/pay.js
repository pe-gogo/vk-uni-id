"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      cart: [],
      price: 99999,
      totalFee: "",
      outTradeNo: "",
      ensureAddressModalVisible: false,
      form: {
        remark: ""
      },
      storeName: "",
      customStyle: {
        width: "80px",
        marginTop: "20px"
      }
    };
  },
  onLoad(options) {
    const eventChannel = this.getOpenerEventChannel();
    if (eventChannel.on) {
      eventChannel.on("data", (data) => {
        this.cart = data.cart;
        this.price = data.price;
      });
    }
  },
  computed: {},
  methods: {
    pay() {
      vk.showLoading({
        title: "\u652F\u4ED8\u4E2D"
      });
      vk.callFunction({
        url: "client/order/kh/order.insert",
        data: {
          cart: this.cart,
          money: this.price,
          orderType: 1
        },
        success: (data) => {
          vk.hideLoading();
          vk.alert("\u652F\u4ED8\u6210\u529F");
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_u_divider2 = common_vendor.resolveComponent("u-divider");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u_divider2 + _easycom_u_button2)();
}
const _easycom_u_divider = () => "../../uni_modules/vk-uview-ui/components/u-divider/u-divider.js";
const _easycom_u_button = () => "../../uni_modules/vk-uview-ui/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u_divider + _easycom_u_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t("location"),
    b: common_vendor.t("stree"),
    c: _ctx.orderType == "takeIn" ? 1 : "",
    d: common_vendor.o((...args) => _ctx.tapTakeIn && _ctx.tapTakeIn(...args)),
    e: _ctx.orderType == "takeout" ? 1 : "",
    f: common_vendor.o((...args) => _ctx.tapTakeOut && _ctx.tapTakeOut(...args)),
    g: common_vendor.p({
      ["bg-color"]: "#F8F8F8",
      height: "5",
      ["use-slot"]: "false",
      ["half-width"]: 0
    }),
    h: common_vendor.f($data.cart, (item, index, i0) => {
      return {
        a: item.image,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.price || 0),
        d: common_vendor.t(item.number)
      };
    }),
    i: common_vendor.o((...args) => _ctx.toFood && _ctx.toFood(...args)),
    j: common_vendor.t($data.price),
    k: common_vendor.o(($event) => $options.pay()),
    l: common_vendor.p({
      ["custom-style"]: $data.customStyle
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c10d0c50"], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/pages/pay/pay.vue"]]);
wx.createPage(MiniProgramPage);
