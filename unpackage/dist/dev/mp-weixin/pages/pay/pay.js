"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      orderNote: "",
      cart: [],
      price: 0,
      totalFee: "",
      outTradeNo: "",
      ensureAddressModalVisible: false,
      form: {
        remark: ""
      },
      number: 0,
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
        this.number = data.number;
      });
    }
  },
  computed: {
    orderType() {
      return vk.getVuex("$order.type");
    },
    takeoutChoose() {
      return vk.getVuex("$user.chooseAddress");
    },
    chooseStore() {
      return vk.getVuex("$store.address");
    }
  },
  methods: {
    pay() {
      vk.showLoading({
        title: "\u652F\u4ED8\u4E2D"
      });
      vk.callFunction({
        url: "client/order/kh/order.insert",
        data: {
          cart: this.cart,
          address: this.takeoutChoose,
          store: this.chooseStore,
          money: this.price,
          note: this.orderNote,
          type: this.orderType,
          payType: "\u5DF2\u652F\u4ED8",
          allNumber: this.number
        },
        success: (data) => {
          vk.hideLoading();
          vk.alert("\u652F\u4ED8\u6210\u529F");
          common_vendor.index.switchTab({
            url: "/pages/order/order"
          });
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_u_divider2 = common_vendor.resolveComponent("u-divider");
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u_divider2 + _easycom_u_input2 + _easycom_u_button2)();
}
const _easycom_u_divider = () => "../../uni_modules/vk-uview-ui/components/u-divider/u-divider.js";
const _easycom_u_input = () => "../../uni_modules/vk-uview-ui/components/u-input/u-input.js";
const _easycom_u_button = () => "../../uni_modules/vk-uview-ui/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u_divider + _easycom_u_input + _easycom_u_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.orderType == "takein"
  }, $options.orderType == "takein" ? {
    b: common_vendor.t($options.chooseStore.name)
  } : {
    c: common_vendor.t($options.takeoutChoose.site)
  }, {
    d: $options.orderType == "takein" ? 1 : "",
    e: common_vendor.o((...args) => _ctx.tapTakeIn && _ctx.tapTakeIn(...args)),
    f: $options.orderType == "takeout" ? 1 : "",
    g: common_vendor.o((...args) => _ctx.tapTakeOut && _ctx.tapTakeOut(...args)),
    h: common_vendor.p({
      ["bg-color"]: "#F8F8F8",
      height: "5",
      ["use-slot"]: "false",
      ["half-width"]: 0
    }),
    i: common_vendor.f($data.cart, (item, index, i0) => {
      return {
        a: item.image,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.price || 0),
        d: common_vendor.t(item.number)
      };
    }),
    j: common_vendor.o((...args) => _ctx.toFood && _ctx.toFood(...args)),
    k: common_vendor.t($data.price),
    l: common_vendor.o(($event) => $data.orderNote = $event),
    m: common_vendor.p({
      placeholder: "\u8BA2\u5355\u5907\u6CE8",
      border: false,
      modelValue: $data.orderNote
    }),
    n: common_vendor.o(($event) => $options.pay()),
    o: common_vendor.p({
      ["custom-style"]: $data.customStyle
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c10d0c50"], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/pages/pay/pay.vue"]]);
wx.createPage(MiniProgramPage);
