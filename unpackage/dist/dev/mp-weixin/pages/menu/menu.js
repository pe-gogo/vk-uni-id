"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var common_vendor = require("../../common/vendor.js");
var vk = common_vendor.index.vk;
const modal = () => "../../components/modal/modal.js";
const popupLayer = () => "../../components/popup-layer/popup-layer.js";
const _sfc_main = {
  components: {
    modal,
    popupLayer
  },
  data() {
    return {
      goods: [],
      ads: [
        { image: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9b263989-3b34-486f-a7ad-68fb4c0c0449/d21fc642-f911-4ba9-98e4-b6c0aedc1a73.webp" },
        { image: "https://pic4.zhimg.com/80/v2-2d53a7b90e55544f9b59dd46768052d1_1440w.webp" }
      ],
      menuScrollIntoView: "",
      currentCateId: "60bc303c5f269b8700014fc46ba448cd",
      cateScrollTop: 0,
      sizeCalcState: false,
      cart: [],
      goodDetailModalVisible: false,
      good: {},
      category: {},
      cartPopupVisible: false
    };
  },
  computed: {
    takeoutChoose() {
      return vk.getVuex("$user.chooseAddress");
    },
    chooseStore() {
      return vk.getVuex("$store.address");
    },
    isLogin() {
      return Boolean(vk.getVuex("$user.userInfo._id"));
    },
    orderType() {
      return vk.getVuex("$order.type");
    },
    goodCartNum() {
      return (id) => this.cart.reduce((acc, cur) => {
        if (cur.id === id) {
          return acc += cur.number;
        }
        return acc;
      }, 0);
    },
    menuCartNum() {
      return (id) => this.cart.reduce((acc, cur) => {
        if (cur.cate_id === id) {
          return acc += cur.number;
        }
        return acc;
      }, 0);
    },
    getCartGoodsNumber() {
      return this.cart.reduce((acc, cur) => acc + cur.number, 0);
    },
    getCartGoodsPrice() {
      return this.cart.reduce((acc, cur) => acc + cur.number * cur.price, 0);
    },
    disabledPay() {
      return this.orderType == "takeout" && this.getCartGoodsPrice < 38 ? true : false;
    },
    spread() {
      if (this.orderType != "takeout")
        return;
      return parseFloat((38 - this.getCartGoodsPrice).toFixed(2));
    }
  },
  onLoad() {
    this.init();
  },
  methods: {
    chooseStore() {
      return vk.getVuex("$store.address");
    },
    tapTakein() {
      if (!this.isLogin) {
        common_vendor.index.navigateTo({
          url: "../login/login"
        });
        return;
      } else {
        vk.setVuex("$order.type", "takein");
      }
    },
    tapTakeOut() {
      if (!this.isLogin) {
        common_vendor.index.navigateTo({
          url: "../login/login"
        });
        return;
      } else {
        vk.setVuex("$order.type", "takeout");
      }
    },
    tapStore() {
      common_vendor.index.navigateTo({
        url: "../stores/stores"
      });
    },
    init() {
      this.orderType = vk.getVuex("$order.type");
      vk.callFunction({
        url: "client/categories.getList",
        data: {},
        success: (data) => {
          this.goods = data.list;
        }
      });
    },
    calcSize() {
      let h = 10;
      let view = common_vendor.index.createSelectorQuery().select("#ads");
      view.fields({
        size: true
      }, (data) => {
        h += Math.floor(data.height);
      }).exec();
      this.goods.forEach((item) => {
        let view2 = common_vendor.index.createSelectorQuery().select(`#cate-${item._id}`);
        view2.fields({
          size: true
        }, (data) => {
          item.top = h;
          h += data.height;
          item.bottom = h;
        }).exec();
      });
      this.sizeCalcState = true;
    },
    handleMenuTap(id) {
      if (!this.sizeCalcState) {
        this.calcSize();
      }
      this.currentCateId = id;
      this.$nextTick(() => this.cateScrollTop = this.goods.find((item) => item._id == id).top);
    },
    handleGoodsScroll({ detail }) {
      if (!this.sizeCalcState) {
        this.calcSize();
      }
      const { scrollTop } = detail;
      let tabs = this.goods.filter((item) => item.top <= scrollTop).reverse();
      if (tabs.length > 0) {
        this.currentCateId = tabs[0]._id;
      }
    },
    handleAddToCart(cate, good, num) {
      const index = this.cart.findIndex((item) => item.id === good._id);
      if (index > -1) {
        this.cart[index].number += num;
      } else {
        this.cart.push({
          id: good._id,
          cate_id: cate._id,
          name: good.name,
          price: good.price,
          number: num,
          image: good.images,
          props_text: good.props_text
        });
      }
    },
    handleReduceFromCart(item, good) {
      const index = this.cart.findIndex((item2) => item2.id === good._id);
      this.cart[index].number -= 1;
      if (this.cart[index].number <= 0) {
        this.cart.splice(index, 1);
      }
    },
    showGoodDetailModal(item, good) {
      this.good = JSON.parse(JSON.stringify(__spreadProps(__spreadValues({}, good), { number: 1 })));
      this.category = JSON.parse(JSON.stringify(item));
      this.goodDetailModalVisible = true;
    },
    closeGoodDetailModal() {
      this.goodDetailModalVisible = false;
      this.good = {};
      this.category = {};
    },
    changePropertyDefault(index, key) {
      this.good.property[index].values.forEach((value) => this.$set(value, "is_default", 0));
      this.good.property[index].values[key].is_default = 1;
      this.good.number = 1;
    },
    getGoodSelectedProps(good, type = "text") {
      if (good.property) {
        let props = [];
        good.property.forEach(({ values }) => {
          values.forEach((value) => {
            if (value.is_default) {
              props.push(type === "text" ? value.value : value.id);
            }
          });
        });
        return type === "text" ? props.join(",") : props;
      }
      return "";
    },
    handlePropertyAdd() {
      this.good.number += 1;
    },
    handlePropertyReduce() {
      if (this.good.number === 1)
        return;
      this.good.number -= 1;
    },
    handleAddToCartInModal() {
      const product = Object.assign({}, this.good, { props_text: this.getGoodSelectedProps(this.good), props: this.getGoodSelectedProps(this.good, "id") });
      this.handleAddToCart(this.category, product, this.good.number);
      this.closeGoodDetailModal();
    },
    openCartPopup() {
      this.cartPopupVisible = !this.cartPopupVisible;
    },
    handleCartClear() {
      common_vendor.index.showModal({
        title: "\u63D0\u793A",
        content: "\u786E\u8BA4\u6E05\u7A7A\u8D2D\u7269\u8F66\u5417?",
        success: ({ confirm }) => {
          if (confirm) {
            this.cartPopupVisible = false;
            this.cart = [];
          }
        }
      });
    },
    handleCartItemReduce(index) {
      if (this.cart[index].number === 1) {
        this.cart.splice(index, 1);
      } else {
        this.cart[index].number -= 1;
      }
      if (!this.cart.length) {
        this.cartPopupVisible = false;
      }
    },
    handleCartItemAdd(index) {
      this.cart[index].number += 1;
    },
    topay() {
      vk.navigateTo({
        url: `/pages/pay/pay`,
        events: {
          update: (data) => {
          }
        },
        success: (res) => {
          res.eventChannel.emit("data", {
            price: this.getCartGoodsPrice,
            cart: this.cart,
            number: this.getCartGoodsNumber
          });
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_modal2 = common_vendor.resolveComponent("modal");
  const _easycom_popup_layer2 = common_vendor.resolveComponent("popup-layer");
  (_easycom_u_icon2 + _easycom_modal2 + _easycom_popup_layer2)();
}
const _easycom_u_icon = () => "../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js";
const _easycom_modal = () => "../../components/modal/modal.js";
const _easycom_popup_layer = () => "../../components/popup-layer/popup-layer.js";
if (!Math) {
  (_easycom_u_icon + _easycom_modal + _easycom_popup_layer)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.orderType == "takein"
  }, $options.orderType == "takein" ? {
    b: common_vendor.o((...args) => $options.tapStore && $options.tapStore(...args)),
    c: common_vendor.t($options.chooseStore.name)
  } : {
    d: common_vendor.t($options.takeoutChoose.site)
  }, {
    e: $options.orderType == "takein" ? 1 : "",
    f: common_vendor.o((...args) => $options.tapTakein && $options.tapTakein(...args)),
    g: $options.orderType == "takeout" ? 1 : "",
    h: common_vendor.o((...args) => $options.tapTakeOut && $options.tapTakeOut(...args)),
    i: common_vendor.f($data.goods, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t($options.menuCartNum(item._id)),
        c: $options.menuCartNum(item._id),
        d: `menu-${item._id}`,
        e: item._id === $data.currentCateId ? 1 : "",
        f: index,
        g: common_vendor.o(($event) => $options.handleMenuTap(item._id), index)
      };
    }),
    j: $data.menuScrollIntoView,
    k: common_vendor.f($data.ads, (item, index, i0) => {
      return {
        a: item.image,
        b: index
      };
    }),
    l: common_vendor.f($data.goods, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: item.icon,
        c: common_vendor.f(item.goods_list, (good, key, i1) => {
          return common_vendor.e({
            a: good.images,
            b: common_vendor.t(good.name),
            c: common_vendor.t(good.content),
            d: common_vendor.t(good.price),
            e: good.property
          }, good.property ? {
            f: common_vendor.o(($event) => $options.showGoodDetailModal(item, good)),
            g: common_vendor.t($options.goodCartNum(good._id)),
            h: $options.goodCartNum(good._id)
          } : {
            i: "ae7bd680-0-" + i0 + "-" + i1,
            j: common_vendor.p({
              name: "minus"
            }),
            k: $options.goodCartNum(good._id),
            l: common_vendor.o(($event) => $options.handleReduceFromCart(item, good)),
            m: common_vendor.t($options.goodCartNum(good._id)),
            n: $options.goodCartNum(good._id),
            o: "ae7bd680-1-" + i0 + "-" + i1,
            p: common_vendor.p({
              name: "plus"
            }),
            q: common_vendor.o(($event) => $options.handleAddToCart(item, good, 1))
          }, {
            r: key
          });
        }),
        d: `cate-${item._id}`,
        e: index
      };
    }),
    m: $data.cateScrollTop,
    n: common_vendor.o((...args) => $options.handleGoodsScroll && $options.handleGoodsScroll(...args)),
    o: $data.cart.length > 0
  }, $data.cart.length > 0 ? {
    p: common_vendor.o((...args) => $options.openCartPopup && $options.openCartPopup(...args)),
    q: common_vendor.t($options.getCartGoodsNumber),
    r: common_vendor.t($options.getCartGoodsPrice),
    s: common_vendor.t($options.disabledPay ? `\u5DEE${$options.spread}\u5143\u8D77\u9001` : "\u53BB\u7ED3\u7B97"),
    t: $options.disabledPay,
    v: common_vendor.o((...args) => $options.topay && $options.topay(...args))
  } : {}, {
    w: $data.good.images
  }, $data.good.images ? {
    x: $data.good.images
  } : {}, {
    y: common_vendor.o((...args) => $options.closeGoodDetailModal && $options.closeGoodDetailModal(...args)),
    z: common_vendor.t($data.good.name),
    A: common_vendor.t($data.good.content),
    B: $data.good.property
  }, $data.good.property ? {
    C: common_vendor.f($data.good.property, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.name),
        b: item.desc
      }, item.desc ? {
        c: common_vendor.t(item.desc)
      } : {}, {
        d: common_vendor.f(item.values, (value, key, i1) => {
          return {
            a: common_vendor.t(value.value),
            b: key,
            c: value.is_default ? 1 : "",
            d: common_vendor.o(($event) => $options.changePropertyDefault(index, key), key)
          };
        }),
        e: index
      });
    })
  } : {}, {
    D: common_vendor.t($data.good.price),
    E: $options.getGoodSelectedProps($data.good)
  }, $options.getGoodSelectedProps($data.good) ? {
    F: common_vendor.t($options.getGoodSelectedProps($data.good))
  } : {}, {
    G: common_vendor.o((...args) => $options.handlePropertyReduce && $options.handlePropertyReduce(...args)),
    H: common_vendor.t($data.good.number),
    I: common_vendor.o((...args) => $options.handlePropertyAdd && $options.handlePropertyAdd(...args)),
    J: common_vendor.o((...args) => $options.handleAddToCartInModal && $options.handleAddToCartInModal(...args)),
    K: common_vendor.p({
      show: $data.goodDetailModalVisible,
      color: "#5A5B5C",
      width: "90%",
      custom: true,
      padding: "0rpx",
      radius: "12rpx"
    }),
    L: common_vendor.o((...args) => $options.handleCartClear && $options.handleCartClear(...args)),
    M: common_vendor.f($data.cart, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.props_text),
        c: common_vendor.t(item.price),
        d: common_vendor.o(($event) => $options.handleCartItemReduce(index)),
        e: common_vendor.t(item.number),
        f: common_vendor.o(($event) => $options.handleCartItemAdd(index)),
        g: index
      };
    }),
    N: $options.orderType == "takeout"
  }, $options.orderType == "takeout" ? {} : {}, {
    O: common_vendor.p({
      direction: "top",
      showPop: $data.cartPopupVisible
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/pages/menu/menu.vue"]]);
wx.createPage(MiniProgramPage);
