"use strict";
const install = (Vue) => {
  let vk = Vue.prototype ? Vue.prototype.vk : Vue.config.globalProperties.vk;
  if (vk) {
    vk.log = console.log;
  }
};
var consoleLog = {
  install
};
exports.consoleLog = consoleLog;
