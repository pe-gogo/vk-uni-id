"use strict";
var common_vendor = require("../../common/vendor.js");
let lifeData = common_vendor.index.getStorageSync("lifeData") || {};
let $user = lifeData.$user || {};
var $user$1 = {
  namespaced: true,
  state: {
    userInfo: $user.userInfo || {},
    permission: $user.permission || []
  },
  getters: {},
  mutations: {},
  actions: {}
};
var __glob_1_2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": $user$1
});
exports.__glob_1_2 = __glob_1_2;
