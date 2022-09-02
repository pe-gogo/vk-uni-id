"use strict";
var common_vendor = require("../../../../../../common/vendor.js");
var updateManager = {};
updateManager.updateReady = function(obj) {
  updateManagerByMP(obj);
};
function updateManagerByMP(obj = {}) {
  let {
    title = "\u66F4\u65B0\u63D0\u793A",
    content = "\u65B0\u7248\u672C\u5DF2\u7ECF\u51C6\u5907\u597D\uFF0C\u70B9\u51FB\u66F4\u65B0\uFF01",
    autoUpdate = true,
    showCancel = false,
    confirmText = "\u4E00\u952E\u66F4\u65B0"
  } = obj;
  const updateManager2 = common_vendor.index.getUpdateManager();
  updateManager2.onCheckForUpdate(function(res) {
  });
  updateManager2.onUpdateReady(function(res) {
    common_vendor.index.showModal({
      title,
      content,
      showCancel,
      confirmText,
      success(res2) {
        if (res2.confirm) {
          if (typeof obj.success === "function") {
            obj.success({
              applyUpdate: updateManager2.applyUpdate
            });
          }
          if (typeof obj.complete === "function")
            obj.complete();
          if (autoUpdate) {
            updateManager2.applyUpdate();
          }
        }
      }
    });
  });
  updateManager2.onUpdateFailed(function(res) {
    console.error("onUpdateFailed", res);
    if (typeof obj.fail === "function")
      obj.fail(res);
    if (typeof obj.complete === "function")
      obj.complete();
  });
}
exports.updateManager = updateManager;
