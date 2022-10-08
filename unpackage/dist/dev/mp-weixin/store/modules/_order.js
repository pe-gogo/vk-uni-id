"use strict";
var common_vendor = require("../../common/vendor.js");
let lifeData = common_vendor.index.getStorageSync("lifeData") || {};
let $order = lifeData.$order || {};
var $order$1 = {
  namespaced: true,
  state: {
    goodsInOrder: $order.goodsInOrder || {},
    type: $order.type || ""
  },
  getters: {},
  mutations: {},
  actions: {}
};
var __glob_1_2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": $order$1
});
exports.__glob_1_2 = __glob_1_2;
