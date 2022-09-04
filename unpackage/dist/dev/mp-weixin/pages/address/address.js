"use strict";
var common_vendor = require("../../common/vendor.js");
const addressObject = vk.importObject("client/address");
const _sfc_main = {
  data() {
    return {
      siteList: [],
      hasWeixinAuth: true,
      encryptedKey: "",
      image: "",
      data: {},
      userInfo: []
    };
  },
  onLoad() {
    this.getData();
  },
  methods: {
    async add() {
      await addressObject.add({
        title: "\u8BF7\u6C42\u4E2D",
        data: {
          data: this.data
        }
      });
    },
    async update() {
      await addressObject.update({
        title: "\u8BF7\u6C42\u4E2D",
        data: {
          data: this.data
        }
      });
    },
    getData() {
      this.siteList = [
        {
          id: 1,
          name: "\u6E38X",
          phone: "183****5523",
          tag: [
            {
              tagText: "\u9ED8\u8BA4"
            },
            {
              tagText: "\u5BB6"
            }
          ],
          site: "\u5E7F\u4E1C\u7701\u6DF1\u5733\u5E02\u5B9D\u5B89\u533A \u81EA\u7531\u8DEF66\u53F7"
        },
        {
          id: 2,
          name: "\u674EXX",
          phone: "183****5555",
          tag: [
            {
              tagText: "\u516C\u53F8"
            }
          ],
          site: "\u5E7F\u4E1C\u7701\u6DF1\u5733\u5E02\u5B9D\u5B89\u533A \u7FFB\u8EAB\u8DEFxx\u53F7"
        },
        {
          id: 3,
          name: "\u738BYY",
          phone: "153****5555",
          tag: [],
          site: "\u5E7F\u4E1C\u7701\u6DF1\u5733\u5E02\u5B9D\u5B89\u533A \u5E73\u5B89\u8DEF13\u53F7"
        }
      ];
    },
    toAddSite() {
      vk.navigateTo({
        url: "/pages/address/addSite"
      });
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
    a: common_vendor.f($data.siteList, (res, index, i0) => {
      return {
        a: common_vendor.t(res.name),
        b: common_vendor.t(res.phone),
        c: common_vendor.f(res.tag, (item, index2, i1) => {
          return {
            a: common_vendor.t(item.tagText),
            b: index2,
            c: item.tagText == "\u9ED8\u8BA4" ? 1 : ""
          };
        }),
        d: "db675620-0-" + i0,
        e: res.id
      };
    }),
    b: common_vendor.o($options.update),
    c: common_vendor.p({
      name: "edit-pen",
      size: 40,
      color: "#999999"
    }),
    d: common_vendor.p({
      name: "plus",
      color: "#ffffff",
      size: 30
    }),
    e: common_vendor.o((...args) => $options.add && $options.add(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-db675620"], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/pages/address/address.vue"]]);
wx.createPage(MiniProgramPage);
