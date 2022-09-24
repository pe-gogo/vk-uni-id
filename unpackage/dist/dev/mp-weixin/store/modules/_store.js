"use strict";
var common_vendor = require("../../common/vendor.js");
let lifeData = common_vendor.index.getStorageSync("lifeData") || {};
let $store = lifeData.$store || {};
var $store$1 = {
  namespaced: true,
  state: {
    address: $store.address || {}
  },
  getters: {},
  mutations: {
    SET_ADDRESS() {
    }
  },
  actions: {}
};
var __glob_1_2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": $store$1
});
exports.__glob_1_2 = __glob_1_2;
