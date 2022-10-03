"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      orderList: [[], [], [], []],
      dataList: [],
      list: [
        {
          name: "\u5F85\u4ED8\u6B3E"
        },
        {
          name: "\u5F85\u53D1\u8D27"
        },
        {
          name: "\u5F85\u6536\u8D27"
        },
        {
          name: "\u5F85\u8BC4\u4EF7",
          count: 12
        }
      ]
    };
  },
  onLoad() {
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
      return (val) => {
        if (val !== parseInt(val))
          return val.split(".")[0];
        else
          return val;
      };
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
  const _easycom_list_cell2 = common_vendor.resolveComponent("list-cell");
  (_easycom_u_tabs_swiper2 + _easycom_list_cell2)();
}
const _easycom_u_tabs_swiper = () => "../../uni_modules/vk-uview-ui/components/u-tabs-swiper/u-tabs-swiper.js";
const _easycom_list_cell = () => "../../components/list-cell/list-cell.js";
if (!Math) {
  (_easycom_u_tabs_swiper + _easycom_list_cell)();
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
        a: common_vendor.f(res.cart, (item, index2, i1) => {
          return {
            a: item.image,
            b: "127632e4-1-" + i0 + "-" + i1,
            c: common_vendor.t(item.name),
            d: common_vendor.t(item.number),
            e: "127632e4-2-" + i0 + "-" + i1,
            f: index2,
            g: common_vendor.o(($event) => _ctx.detail(item._id), index2)
          };
        }),
        b: common_vendor.t(res._id),
        c: common_vendor.t(res._add_time),
        d: common_vendor.t(res.money),
        e: res._id
      };
    }),
    e: common_vendor.p({
      hover: false
    }),
    f: common_vendor.p({
      hover: false,
      last: true
    }),
    g: common_vendor.o((...args) => _ctx.reachBottom && _ctx.reachBottom(...args)),
    h: _ctx.swiperCurrent,
    i: common_vendor.o((...args) => _ctx.transition && _ctx.transition(...args)),
    j: common_vendor.o((...args) => _ctx.animationfinish && _ctx.animationfinish(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-127632e4"], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/pages/order/order.vue"]]);
wx.createPage(MiniProgramPage);
