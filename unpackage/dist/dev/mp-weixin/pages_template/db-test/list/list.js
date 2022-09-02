"use strict";
var common_vendor = require("../../../common/vendor.js");
var vk = common_vendor.index.vk;
const _sfc_main = {
  data() {
    return {
      action: "template/db_api/pub/getList",
      data: {
        list: [],
        pageKey: true,
        loadmore: "loading"
      },
      form1: {
        addTime: "",
        endTime: "",
        searchvalue: "",
        pageIndex: 1,
        pageSize: 10
      },
      scrollTop: 0
    };
  },
  onPageScroll(e) {
    this.scrollTop = e.scrollTop;
  },
  onLoad(options = {}) {
    vk = common_vendor.index.vk;
    this.options = options;
    this.init(options);
  },
  onReady() {
  },
  onShow() {
  },
  onHide() {
  },
  onPullDownRefresh() {
    setTimeout(() => {
      common_vendor.index.stopPullDownRefresh();
    }, 1e3);
  },
  onReachBottom(options) {
    this.nextPage();
  },
  onResize() {
  },
  onShareAppMessage(options) {
  },
  methods: {
    init(options) {
      console.log("init: ", options);
      this.getList({
        success: () => {
        }
      });
    },
    pageTo(path) {
      vk.navigateTo(path);
    },
    getList(obj = {}) {
      let that = this;
      vk.pubfn.getListData({
        that,
        url: that.action,
        success: obj.success
      });
    },
    nextPage() {
      let that = this;
      if (that.data.loadmore == "loadmore") {
        that.data.loadmore = "loading";
        that.form1.pageIndex++;
        that.getList();
      }
    },
    onSearch(e) {
      let that = this;
      console.log("\u641C\u7D22", that.form1.searchvalue);
      that.form1.pageIndex = 1;
      that.data.pageKey = true;
      that.getList();
    },
    itemBtn(item) {
      console.log("\u70B9\u51FB", item);
      vk.toast("\u70B9\u51FB" + item._id.substring(20));
    }
  },
  computed: {}
};
if (!Array) {
  const _easycom_u_search2 = common_vendor.resolveComponent("u-search");
  const _easycom_u_empty2 = common_vendor.resolveComponent("u-empty");
  const _easycom_u_loadmore2 = common_vendor.resolveComponent("u-loadmore");
  (_easycom_u_search2 + _easycom_u_empty2 + _easycom_u_loadmore2)();
}
const _easycom_u_search = () => "../../../uni_modules/vk-uview-ui/components/u-search/u-search.js";
const _easycom_u_empty = () => "../../../uni_modules/vk-uview-ui/components/u-empty/u-empty.js";
const _easycom_u_loadmore = () => "../../../uni_modules/vk-uview-ui/components/u-loadmore/u-loadmore.js";
if (!Math) {
  (_easycom_u_search + _easycom_u_empty + _easycom_u_loadmore)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.onSearch),
    b: common_vendor.o($options.onSearch),
    c: common_vendor.o(($event) => $data.form1.searchvalue = $event),
    d: common_vendor.p({
      placeholder: "\u8F93\u5165\u91D1\u989D\u641C\u7D22",
      ["show-action"]: false,
      ["input-align"]: "center",
      shape: "square",
      modelValue: $data.form1.searchvalue
    }),
    e: common_vendor.t($data.data.total),
    f: $data.data.list.length == 0
  }, $data.data.list.length == 0 ? {
    g: common_vendor.p({
      text: "\u6682\u65E0\u5185\u5BB9",
      mode: "list"
    })
  } : {}, {
    h: $data.data.list.length > 0
  }, $data.data.list.length > 0 ? {
    i: common_vendor.f($data.data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: common_vendor.t(item._id.substring(20)),
        c: common_vendor.t(item.money),
        d: common_vendor.o(($event) => $options.itemBtn(item)),
        e: item._id
      };
    }),
    j: common_vendor.o($options.nextPage),
    k: common_vendor.p({
      status: $data.data.loadmore,
      ["bg-color"]: "#f8f8f8",
      ["margin-bottom"]: "30"
    })
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a2539316"], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/pages_template/db-test/list/list.vue"]]);
_sfc_main.__runtimeHooks = 3;
wx.createPage(MiniProgramPage);
