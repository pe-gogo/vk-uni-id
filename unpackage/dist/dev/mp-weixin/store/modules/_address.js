"use strict";
var common_vendor = require("../../common/vendor.js");
let lifeData = common_vendor.index.getStorageSync("lifeData") || {};
lifeData.$address || {};
var $address = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {}
};
var __glob_1_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": $address
});
exports.__glob_1_0 = __glob_1_0;
