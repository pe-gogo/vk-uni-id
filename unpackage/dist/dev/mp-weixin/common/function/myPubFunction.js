"use strict";
var common_vendor = require("../vendor.js");
var myfn = {};
myfn.test1 = function(obj = {}) {
  common_vendor.index.vk;
  console.log("\u6267\u884C\u4E86\u81EA\u5B9A\u4E49\u516C\u5171\u51FD\u6570test1");
  return obj;
};
exports.myfn = myfn;
