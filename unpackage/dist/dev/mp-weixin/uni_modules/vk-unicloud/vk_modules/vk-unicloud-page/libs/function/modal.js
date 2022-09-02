"use strict";
var common_vendor = require("../../../../../../common/vendor.js");
const localeObj = {
  title: {
    "zh-Hans": "\u63D0\u793A",
    "zh-Hant": "\u63D0\u793A",
    "en": "Tips"
  },
  confirmText: {
    "zh-Hans": "\u786E\u5B9A",
    "zh-Hant": "\u78BA\u5B9A",
    "en": "OK"
  },
  cancelText: {
    "zh-Hans": "\u53D6\u6D88",
    "zh-Hant": "\u53D6\u6D88",
    "en": "Cancel"
  },
  placeholderText: {
    "zh-Hans": "\u8BF7\u8F93\u5165",
    "zh-Hant": "\u8ACB\u8F38\u5165",
    "en": "Please enter"
  }
};
var modal = {
  alert: function(a = " ", b, c, d) {
    let vk = common_vendor.index.vk;
    let locale = vk.getLocale();
    let obj = {
      title: localeObj.title[locale],
      confirmText: localeObj.confirmText[locale],
      placeholderText: localeObj.placeholderText[locale],
      content: a,
      showCancel: false
    };
    if (typeof d === "function") {
      obj.title = b;
      obj.confirmText = c;
      obj.success = d;
    } else if (typeof c === "function") {
      obj.title = b;
      obj.success = c;
    } else if (typeof b === "function") {
      obj.success = b;
    } else if (b != void 0) {
      obj.title = b;
      if (c != void 0) {
        obj.confirmText = c;
      }
    }
    if (typeof obj.content === "number") {
      obj.content = obj.content + "";
    } else if (typeof obj.content === "object") {
      obj.content = JSON.stringify(obj.content);
    }
    return common_vendor.index.showModal(obj);
  },
  confirm: function(a, b, c, d, e) {
    let vk = common_vendor.index.vk;
    let locale = vk.getLocale();
    let obj = {
      showCancel: true,
      cancelColor: "#999",
      title: localeObj.title[locale],
      confirmText: localeObj.confirmText[locale],
      cancelText: localeObj.cancelText[locale],
      placeholderText: localeObj.placeholderText[locale]
    };
    if (typeof a === "object") {
      obj = a;
    } else {
      if (typeof a === "string") {
        obj.content = a;
      }
      if (typeof e === "function") {
        obj.title = b;
        obj.confirmText = c;
        obj.cancelText = d;
        obj.success = e;
      } else if (typeof d === "function") {
        obj.title = b;
        obj.confirmText = c;
        obj.success = d;
      } else if (typeof c === "function") {
        obj.title = b;
        obj.success = c;
      } else if (typeof b === "function") {
        obj.success = b;
      } else if (b != void 0) {
        obj.title = b;
        if (c != void 0) {
          obj.confirmText = c;
        }
      }
    }
    return common_vendor.index.showModal(obj);
  },
  prompt: function(a, b, c, d, e, f) {
    let vk = common_vendor.index.vk;
    let locale = vk.getLocale();
    let obj = {
      showCancel: true,
      editable: true,
      cancelColor: "#999",
      title: localeObj.title[locale],
      confirmText: localeObj.confirmText[locale],
      cancelText: localeObj.cancelText[locale],
      placeholderText: localeObj.placeholderText[locale]
    };
    if (typeof a === "object") {
      obj = a;
    } else {
      if (typeof a === "string") {
        obj.placeholderText = a;
      }
      if (typeof e === "function") {
        obj.title = b;
        obj.confirmText = c;
        obj.cancelText = d;
        obj.success = e;
        obj.content = f;
      } else if (typeof d === "function") {
        obj.title = b;
        obj.confirmText = c;
        obj.success = d;
        obj.content = e;
      } else if (typeof c === "function") {
        obj.title = b;
        obj.success = c;
        obj.content = d;
      } else if (typeof b === "function") {
        obj.success = b;
        obj.content = c;
      }
    }
    return common_vendor.index.showModal(obj);
  },
  toast: function(a, b, c, d, e) {
    common_vendor.index.vk;
    if (typeof a === "number") {
      a = a.toString();
    } else if (typeof a === "object") {
      a = JSON.stringify(a);
    }
    let title = a;
    let icon = "none";
    let image = "";
    let mask = false;
    let duration = 1500;
    let fn;
    if (typeof e !== "undefined") {
      if (typeof e == "function")
        fn = e;
      if (typeof e == "number")
        duration = e;
      if (typeof e == "boolean")
        mask = e;
    }
    if (typeof d !== "undefined") {
      if (typeof d == "function")
        fn = d;
      if (typeof d == "number")
        duration = d;
      if (typeof d == "boolean")
        mask = d;
    }
    if (typeof c !== "undefined") {
      if (typeof c == "function")
        fn = c;
      if (typeof c == "number")
        duration = c;
      if (typeof c == "boolean")
        mask = c;
    }
    if (typeof b !== "undefined") {
      if (typeof b == "function")
        fn = b;
      if (typeof b == "number")
        duration = b;
      if (typeof b == "boolean")
        mask = b;
      if (typeof b == "string") {
        if (b == "ok")
          b = "success";
        if (b == "success" || b == "loading" || b == "none") {
          icon = b;
        } else {
          image = b;
        }
      }
    }
    return common_vendor.index.showToast({
      title,
      icon,
      image,
      mask,
      duration,
      success: function(res) {
        if (typeof fn === "function") {
          setTimeout(function() {
            fn(res);
          }, duration);
        }
      }
    });
  },
  showActionSheet: function(object) {
    common_vendor.index.vk;
    object.title;
    let list = object.list;
    let color = object.color || "#000000";
    let success = object.success;
    let fail = object.fail;
    let complete = object.complete;
    return common_vendor.index.showActionSheet({
      itemList: list,
      itemColor: color,
      success: function(res) {
        let index = res.tapIndex;
        let text = list[index];
        let g = { index, text };
        console.log(g);
        if (typeof success == "function")
          success(g);
      },
      fail: function(res) {
        console.log(res);
        if (typeof fail == "function")
          fail(res);
      },
      complete: function(res) {
        if (typeof complete == "function")
          complete(res);
      }
    });
  },
  showLoading: function(obj) {
    if (typeof obj == "string") {
      let title = obj;
      obj = {
        title,
        mask: true
      };
    }
    common_vendor.index.showLoading(obj);
  },
  hideLoading: function() {
    common_vendor.index.hideLoading();
  },
  setLoading: function(loading = true, obj = true) {
    try {
      let vk = common_vendor.index.vk;
      if (typeof obj === "boolean") {
        let pages = getCurrentPages();
        let page = pages[pages.length - 1];
        let that = page.$vm;
        that.loading = loading;
      } else if (typeof obj === "object") {
        let { data, name, that } = obj;
        if (!data)
          data = that;
        vk.pubfn.setData(data, name, loading);
      } else if (typeof obj === "string") {
        let pages = getCurrentPages();
        let page = pages[pages.length - 1];
        let that = page.$vm;
        let name = obj;
        vk.pubfn.setData(that, name, loading);
      }
    } catch (err) {
    }
  }
};
exports.modal = modal;
