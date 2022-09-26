"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_menu_classify_data = require("./classify.data.js");
const _sfc_main = {
  data() {
    return {
      scrollTop: 0,
      oldScrollTop: 0,
      current: 0,
      menuHeight: 0,
      menuItemHeight: 0,
      itemId: "",
      tabbar: pages_menu_classify_data.classifyData,
      menuItemPos: [],
      arr: [],
      scrollRightTop: 0,
      timer: null
    };
  },
  onLoad() {
  },
  onReady() {
    wx.hideTabBar();
    this.getMenuItemTop();
  },
  methods: {
    async swichMenu(index) {
      if (this.arr.length == 0) {
        await this.getMenuItemTop();
      }
      if (index == this.current)
        return;
      this.scrollRightTop = this.oldScrollTop;
      this.$nextTick(function() {
        this.scrollRightTop = this.arr[index];
        this.current = index;
        this.leftMenuStatus(index);
      });
    },
    getElRect(elClass, dataVal) {
      new Promise((resolve, reject) => {
        const query = common_vendor.index.createSelectorQuery().in(this);
        query.select("." + elClass).fields({
          size: true
        }, (res) => {
          if (!res) {
            setTimeout(() => {
              this.getElRect(elClass);
            }, 10);
            return;
          }
          this[dataVal] = res.height;
          resolve();
        }).exec();
      });
    },
    async observer() {
      this.tabbar.map((val, index) => {
        let observer = common_vendor.index.createIntersectionObserver(this);
        observer.relativeTo(".right-box", {
          top: 0
        }).observe("#item" + index, (res) => {
          if (res.intersectionRatio > 0) {
            let id = res.id.substring(4);
            this.leftMenuStatus(id);
          }
        });
      });
    },
    async leftMenuStatus(index) {
      this.current = index;
      if (this.menuHeight == 0 || this.menuItemHeight == 0) {
        await this.getElRect("menu-scroll-view", "menuHeight");
        await this.getElRect("u-tab-item", "menuItemHeight");
      }
      this.scrollTop = index * this.menuItemHeight + this.menuItemHeight / 2 - this.menuHeight / 2;
    },
    getMenuItemTop() {
      new Promise((resolve) => {
        let selectorQuery = common_vendor.index.createSelectorQuery();
        selectorQuery.selectAll(".class-item").boundingClientRect((rects) => {
          if (!rects.length) {
            setTimeout(() => {
              this.getMenuItemTop();
            }, 10);
            return;
          }
          rects.forEach((rect) => {
            this.arr.push(rect.top - rects[0].top);
            resolve();
          });
        }).exec();
      });
    },
    async rightScroll(e) {
      this.oldScrollTop = e.detail.scrollTop;
      if (this.arr.length == 0) {
        await this.getMenuItemTop();
      }
      if (this.timer)
        return;
      if (!this.menuHeight) {
        await this.getElRect("menu-scroll-view", "menuHeight");
      }
      setTimeout(() => {
        this.timer = null;
        let scrollHeight = e.detail.scrollTop + this.menuHeight / 2;
        for (let i = 0; i < this.arr.length; i++) {
          let height1 = this.arr[i];
          let height2 = this.arr[i + 1];
          if (!height2 || scrollHeight >= height1 && scrollHeight < height2) {
            this.leftMenuStatus(i);
            return;
          }
        }
      }, 10);
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: "star"
    }),
    b: common_vendor.t(1.9),
    c: common_vendor.f($data.tabbar, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index,
        c: common_vendor.n($data.current == index ? "u-tab-item-active" : ""),
        d: common_vendor.o(($event) => $options.swichMenu(index), index)
      };
    }),
    d: $data.scrollTop,
    e: $data.itemId,
    f: common_vendor.f($data.tabbar, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.f(item.foods, (item1, index1, i1) => {
          return {
            a: item1.icon,
            b: common_vendor.t(item1.name),
            c: common_vendor.t(item1.price || 0),
            d: index1
          };
        }),
        c: "item" + index,
        d: index
      };
    }),
    g: $data.scrollRightTop,
    h: common_vendor.o((...args) => $options.rightScroll && $options.rightScroll(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-368aef34"], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/pages/menu/menu.vue"]]);
wx.createPage(MiniProgramPage);
