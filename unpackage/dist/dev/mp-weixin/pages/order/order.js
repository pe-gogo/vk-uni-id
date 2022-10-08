"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      orderList: [[], [], [], []],
      dataList: [],
      list: [
        {
          name: "\u5168\u90E8"
        },
        {
          name: "\u5916\u9001"
        },
        {
          name: "\u81EA\u53D6"
        }
      ]
    };
  },
  onLoad() {
    this.getDataList();
  },
  onShow() {
    this.getDataList();
  },
  computed: {
    priceDecimal() {
      return (val) => {
        if (val !== parseInt(val))
          return val.slice(-2);
        else
          return "00";
      };
    },
    priceInt() {
    }
  },
  methods: {
    getDataList() {
      vk.callFunction({
        url: "client/order/kh/order.getList",
        data: {},
        success: (data) => {
          this.dataList = data.rows;
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_u_tabs_swiper2 = common_vendor.resolveComponent("u-tabs-swiper");
  _easycom_u_tabs_swiper2();
}
const _easycom_u_tabs_swiper = () => "../../uni_modules/vk-uview-ui/components/u-tabs-swiper/u-tabs-swiper.js";
if (!Math) {
  _easycom_u_tabs_swiper();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.sr("tabs", "127632e4-0"),
    b: common_vendor.o(_ctx.change),
    c: common_vendor.p({
      activeColor: "#f29100",
      list: $data.list,
      current: _ctx.current,
      ["is-scroll"]: false,
      swiperWidth: "750"
    }),
    d: common_vendor.f($data.dataList, (res, index, i0) => {
      return {
        a: common_vendor.t(res.store.name),
        b: common_vendor.t(res.payType),
        c: common_vendor.f(res.cart, (item, index2, i1) => {
          return {
            a: item.image,
            b: index2,
            c: common_vendor.o(($event) => _ctx.detail(item._id), index2)
          };
        }),
        d: common_vendor.t(res.allNumber),
        e: common_vendor.t(res.money),
        f: res._id
      };
    }),
    e: common_vendor.o((...args) => _ctx.reachBottom && _ctx.reachBottom(...args)),
    f: _ctx.swiperCurrent,
    g: common_vendor.o((...args) => _ctx.transition && _ctx.transition(...args)),
    h: common_vendor.o((...args) => _ctx.animationfinish && _ctx.animationfinish(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-127632e4"], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/pages/order/order.vue"]]);
wx.createPage(MiniProgramPage);
