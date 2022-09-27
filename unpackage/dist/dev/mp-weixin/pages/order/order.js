"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      orderList: [[], [], [], []],
      dataList: [
        {
          id: 1,
          store: "\u590F\u65E5\u6D41\u661F\u9650\u5B9A\u8D29\u5356",
          deal: "\u4EA4\u6613\u6210\u529F",
          goodsList: [
            {
              goodsUrl: "//img13.360buyimg.com/n7/jfs/t1/103005/7/17719/314825/5e8c19faEb7eed50d/5b81ae4b2f7f3bb7.jpg",
              title: "\u3010\u51AC\u65E5\u9650\u5B9A\u3011\u73B0\u8D27 \u539F\u521Bjk\u5236\u670D\u59732020\u51AC\u88C5\u65B0\u6B3E\u5C0F\u6E05\u65B0\u5BBD\u677E\u8F6F\u7CEF\u6BDB\u8863\u5916\u5957\u5973\u5F00\u886B\u77ED\u6B3E\u767E\u642D\u65E5\u7CFB\u751C\u7F8E\u98CE",
              type: "\u7070\u8272;M",
              deliveryTime: "\u4ED8\u6B3E\u540E30\u5929\u5185\u53D1\u8D27",
              price: "348.58",
              number: 2
            },
            {
              goodsUrl: "//img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg",
              title: "\u3010\u8461\u8404\u85E4\u3011\u73B0\u8D27 \u5C0F\u6E05\u65B0\u5B66\u9662\u98CE\u5236\u670D\u683C\u88D9\u767E\u8936\u88D9\u5973\u77ED\u6B3E\u767E\u642D\u65E5\u7CFB\u751C\u7F8E\u98CE\u539F\u521Bjk\u5236\u670D\u59732020\u65B0\u6B3E",
              type: "45cm;S",
              deliveryTime: "\u4ED8\u6B3E\u540E30\u5929\u5185\u53D1\u8D27",
              price: "135.00",
              number: 1
            }
          ]
        },
        {
          id: 2,
          store: "\u6C5F\u5357\u76AE\u9769\u5382",
          deal: "\u4EA4\u6613\u5931\u8D25",
          goodsList: [
            {
              goodsUrl: "//img14.360buyimg.com/n7/jfs/t1/60319/15/6105/406802/5d43f68aE9f00db8c/0affb7ac46c345e2.jpg",
              title: "\u3010\u51AC\u65E5\u9650\u5B9A\u3011\u73B0\u8D27 \u539F\u521Bjk\u5236\u670D\u59732020\u51AC\u88C5\u65B0\u6B3E\u5C0F\u6E05\u65B0\u5BBD\u677E\u8F6F\u7CEF\u6BDB\u8863\u5916\u5957\u5973\u5F00\u886B\u77ED\u6B3E\u767E\u642D\u65E5\u7CFB\u751C\u7F8E\u98CE",
              type: "\u7C89\u8272;M",
              deliveryTime: "\u4ED8\u6B3E\u540E7\u5929\u5185\u53D1\u8D27",
              price: "128.05",
              number: 1
            }
          ]
        },
        {
          id: 3,
          store: "\u4E09\u661F\u65D7\u8230\u5E97",
          deal: "\u4EA4\u6613\u5931\u8D25",
          goodsList: [
            {
              goodsUrl: "//img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg",
              title: "\u4E09\u661F\uFF08SAMSUNG\uFF09\u4EAC\u54C1\u5BB6\u7535 UA65RUF70AJXXZ 65\u82F1\u5BF84K\u8D85\u9AD8\u6E05 HDR \u4EAC\u4E1C\u5FAE\u8054 \u667A\u80FD\u8BED\u97F3 \u6559\u80B2\u8D44\u6E90\u6DB2\u6676\u7535\u89C6\u673A",
              type: "4K\uFF0C\u5E7F\u8272\u57DF",
              deliveryTime: "\u4FDD\u8D285\u5E74",
              price: "1998",
              number: 3
            },
            {
              goodsUrl: "//img14.360buyimg.com/n7/jfs/t6007/205/4099529191/294869/ae4e6d4f/595dcf19Ndce3227d.jpg!q90.jpg",
              title: "\u7F8E\u7684(Midea)639\u5347 \u5BF9\u5F00\u95E8\u51B0\u7BB1 19\u5206\u949F\u6025\u901F\u51C0\u5473 \u4E00\u7EA7\u80FD\u6548\u51B7\u85CF\u53CC\u5F00\u95E8\u6740\u83CC\u667A\u80FD\u5BB6\u7528\u53CC\u53D8\u9891\u8282\u80FD BCD-639WKPZM(E)",
              type: "\u5BB9\u91CF\u5927\uFF0C\u901F\u51BB",
              deliveryTime: "\u4FDD\u8D285\u5E74",
              price: "2354",
              number: 1
            }
          ]
        },
        {
          id: 4,
          store: "\u4E09\u661F\u65D7\u8230\u5E97",
          deal: "\u4EA4\u6613\u5931\u8D25",
          goodsList: [
            {
              goodsUrl: "//img10.360buyimg.com/n7/jfs/t22300/31/1505958241/171936/9e201a89/5b2b12ffNe6dbb594.jpg!q90.jpg",
              title: "\u6CD5\u56FD\u8FDB\u53E3\u7EA2\u9152 \u62C9\u83F2\uFF08LAFITE\uFF09\u4F20\u5947\u6CE2\u5C14\u591A\u5E72\u7EA2\u8461\u8404\u9152750ml*6\u6574\u7BB1\u88C5",
              type: "4K\uFF0C\u5E7F\u8272\u57DF",
              deliveryTime: "\u73CD\u85CF10\u5E74\u597D\u9152",
              price: "1543",
              number: 3
            },
            {
              goodsUrl: "//img10.360buyimg.com/n7/jfs/t1/107598/17/3766/525060/5e143aacE9a94d43c/03573ae60b8bf0ee.jpg",
              title: "\u84DD\u59B9\uFF08BLUE GIRL\uFF09\u9177\u723D\u5564\u9152 \u6E05\u5564 \u539F\u88C5\u8FDB\u53E3\u5564\u9152 \u7F50\u88C5 500ml*9\u542C \u6574\u7BB1\u88C5",
              type: "\u4E00\u6253",
              deliveryTime: "\u53E3\u611F\u597D",
              price: "120",
              number: 1
            }
          ]
        },
        {
          id: 5,
          store: "\u4E09\u661F\u65D7\u8230\u5E97",
          deal: "\u4EA4\u6613\u6210\u529F",
          goodsList: [
            {
              goodsUrl: "//img12.360buyimg.com/n7/jfs/t1/52408/35/3554/78293/5d12e9cfEfd118ba1/ba5995e62cbd747f.jpg!q90.jpg",
              title: "\u4F01\u4E1A\u5FAE\u4FE1 \u4E2D\u63A7\u4EBA\u8138\u6307\u7EB9\u8BC6\u522B\u8003\u52E4\u673A\u5237\u8138\u673A \u65E0\u7EBF\u7B7E\u5230\u5F02\u5730\u591A\u5E97\u6253\u5361\u673AWX108",
              type: "\u8BC6\u522B\u6548\u7387\u9AD8",
              deliveryTime: "\u4F7F\u7528\u65B9\u4FBF",
              price: "451",
              number: 9
            }
          ]
        }
      ],
      list: [
        {
          name: "\u8FDB\u884C\u4E2D"
        },
        {
          name: "\u5386\u53F2"
        },
        {
          name: "\u9000\u5355"
        }
      ],
      current: 0,
      swiperCurrent: 0,
      tabsHeight: 0,
      dx: 0,
      loadStatus: ["loadmore", "loadmore", "loadmore", "loadmore"]
    };
  },
  onLoad() {
    this.getOrderList(0);
    this.getOrderList(1);
    this.getOrderList(3);
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
    reachBottom() {
      if (this.current != 2) {
        this.loadStatus.splice(this.current, 1, "loading");
        setTimeout(() => {
          this.getOrderList(this.current);
        }, 1200);
      }
    },
    getOrderList(idx) {
      for (let i = 0; i < 5; i++) {
        let index = this.$u.random(0, this.dataList.length - 1);
        let data = JSON.parse(JSON.stringify(this.dataList[index]));
        data.id = this.$u.guid();
        this.orderList[idx].push(data);
      }
      this.loadStatus.splice(this.current, 1, "loadmore");
    },
    totalPrice(item) {
      let price = 0;
      item.map((val) => {
        price += parseFloat(val.price);
      });
      return price.toFixed(2);
    },
    totalNum(item) {
      let num = 0;
      item.map((val) => {
        num += val.number;
      });
      return num;
    },
    change(index) {
      this.swiperCurrent = index;
      this.getOrderList(index);
    },
    transition({ detail: { dx } }) {
      this.$refs.tabs.setDx(dx);
    },
    animationfinish({ detail: { current } }) {
      this.$refs.tabs.setFinishCurrent(current);
      this.swiperCurrent = current;
      this.current = current;
    }
  }
};
if (!Array) {
  const _easycom_u_tabs_swiper2 = common_vendor.resolveComponent("u-tabs-swiper");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_loadmore2 = common_vendor.resolveComponent("u-loadmore");
  (_easycom_u_tabs_swiper2 + _easycom_u_icon2 + _easycom_u_loadmore2)();
}
const _easycom_u_tabs_swiper = () => "../../uni_modules/vk-uview-ui/components/u-tabs-swiper/u-tabs-swiper.js";
const _easycom_u_icon = () => "../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js";
const _easycom_u_loadmore = () => "../../uni_modules/vk-uview-ui/components/u-loadmore/u-loadmore.js";
if (!Math) {
  (_easycom_u_tabs_swiper + _easycom_u_icon + _easycom_u_loadmore)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.sr("tabs", "127632e4-0"),
    b: common_vendor.o($options.change),
    c: common_vendor.p({
      activeColor: "#f29100",
      list: $data.list,
      current: $data.current,
      ["is-scroll"]: false,
      swiperWidth: "750"
    }),
    d: common_vendor.f($data.orderList[0], (res, index, i0) => {
      return {
        a: "127632e4-1-" + i0,
        b: common_vendor.t(res.store),
        c: "127632e4-2-" + i0,
        d: common_vendor.t(res.deal),
        e: common_vendor.f(res.goodsList, (item, index2, i1) => {
          return {
            a: item.goodsUrl,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.type),
            d: common_vendor.t(item.deliveryTime),
            e: common_vendor.t($options.priceInt(item.price)),
            f: common_vendor.t($options.priceDecimal(item.price)),
            g: common_vendor.t(item.number),
            h: index2
          };
        }),
        f: common_vendor.t($options.totalNum(res.goodsList)),
        g: common_vendor.t($options.priceInt($options.totalPrice(res.goodsList))),
        h: common_vendor.t($options.priceDecimal($options.totalPrice(res.goodsList))),
        i: "127632e4-3-" + i0,
        j: res.id
      };
    }),
    e: common_vendor.p({
      name: "home",
      size: 30,
      color: "rgb(94,94,94)"
    }),
    f: common_vendor.p({
      name: "arrow-right",
      color: "rgb(203,203,203)",
      size: 26
    }),
    g: common_vendor.p({
      name: "more-dot-fill",
      color: "rgb(203,203,203)"
    }),
    h: common_vendor.p({
      status: $data.loadStatus[0],
      bgColor: "#f2f2f2"
    }),
    i: common_vendor.o((...args) => $options.reachBottom && $options.reachBottom(...args)),
    j: common_vendor.f($data.orderList[1], (res, index, i0) => {
      return {
        a: "127632e4-5-" + i0,
        b: common_vendor.t(res.store),
        c: "127632e4-6-" + i0,
        d: common_vendor.t(res.deal),
        e: common_vendor.f(res.goodsList, (item, index2, i1) => {
          return {
            a: item.goodsUrl,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.type),
            d: common_vendor.t(item.deliveryTime),
            e: common_vendor.t($options.priceInt(item.price)),
            f: common_vendor.t($options.priceDecimal(item.price)),
            g: common_vendor.t(item.number),
            h: index2
          };
        }),
        f: common_vendor.t($options.totalNum(res.goodsList)),
        g: common_vendor.t($options.priceInt($options.totalPrice(res.goodsList))),
        h: common_vendor.t($options.priceDecimal($options.totalPrice(res.goodsList))),
        i: "127632e4-7-" + i0,
        j: res.id
      };
    }),
    k: common_vendor.p({
      name: "home",
      size: 30,
      color: "rgb(94,94,94)"
    }),
    l: common_vendor.p({
      name: "arrow-right",
      color: "rgb(203,203,203)",
      size: 26
    }),
    m: common_vendor.p({
      name: "more-dot-fill",
      color: "rgb(203,203,203)"
    }),
    n: common_vendor.p({
      status: $data.loadStatus[1],
      bgColor: "#f2f2f2"
    }),
    o: common_vendor.o((...args) => $options.reachBottom && $options.reachBottom(...args)),
    p: common_vendor.f($data.orderList[3], (res, index, i0) => {
      return {
        a: "127632e4-9-" + i0,
        b: common_vendor.t(res.store),
        c: "127632e4-10-" + i0,
        d: common_vendor.t(res.deal),
        e: common_vendor.f(res.goodsList, (item, index2, i1) => {
          return {
            a: item.goodsUrl,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.type),
            d: common_vendor.t(item.deliveryTime),
            e: common_vendor.t($options.priceInt(item.price)),
            f: common_vendor.t($options.priceDecimal(item.price)),
            g: common_vendor.t(item.number),
            h: index2
          };
        }),
        f: common_vendor.t($options.totalNum(res.goodsList)),
        g: common_vendor.t($options.priceInt($options.totalPrice(res.goodsList))),
        h: common_vendor.t($options.priceDecimal($options.totalPrice(res.goodsList))),
        i: "127632e4-11-" + i0,
        j: res.id
      };
    }),
    q: common_vendor.p({
      name: "home",
      size: 30,
      color: "rgb(94,94,94)"
    }),
    r: common_vendor.p({
      name: "arrow-right",
      color: "rgb(203,203,203)",
      size: 26
    }),
    s: common_vendor.p({
      name: "more-dot-fill",
      color: "rgb(203,203,203)"
    }),
    t: common_vendor.p({
      status: $data.loadStatus[3],
      bgColor: "#f2f2f2"
    }),
    v: common_vendor.o((...args) => $options.reachBottom && $options.reachBottom(...args)),
    w: $data.swiperCurrent,
    x: common_vendor.o((...args) => $options.transition && $options.transition(...args)),
    y: common_vendor.o((...args) => $options.animationfinish && $options.animationfinish(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-127632e4"], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/pages/order/order.vue"]]);
wx.createPage(MiniProgramPage);
