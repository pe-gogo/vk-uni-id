"use strict";
var storeMixin = {
  beforeCreate() {
    let { vk, $store } = this;
    if (typeof $store !== "undefined" && typeof vk.getVuexStore === "undefined") {
      vk.getVuexStore = function() {
        return $store;
      };
      vk.vuex = (name, value) => {
        $store.commit("updateStore", { name, value });
      };
      vk.vuex.set = (name, value) => {
        $store.commit("updateStore", { name, value });
      };
      vk.vuex.get = (name, defaultValue) => {
        let value = vk.pubfn.getData($store.state, name);
        if (typeof value === "undefined")
          return typeof defaultValue !== "undefined" ? defaultValue : "";
        return JSON.parse(JSON.stringify(value));
      };
      vk.vuex.getters = (name) => {
        return $store.getters[name];
      };
      vk.vuex.dispatch = $store.dispatch;
      vk.vuex.commit = $store.commit;
      vk.setVuex = vk.vuex.set;
      vk.getVuex = vk.vuex.get;
      vk.state = vk.vuex.get;
      try {
        if (!vk.checkToken()) {
          vk.callFunctionUtil.deleteUserInfo({
            log: false
          });
        }
      } catch (err) {
      }
    }
  },
  computed: {}
};
exports.storeMixin = storeMixin;
