"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var common_vendor = require("../../../../../../common/vendor.js");
var uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_vkUnicloud_vkUnicloudCallFunctionUtil = require("./vk-unicloud-callFunctionUtil.js");
var uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_debounce = require("../function/debounce.js");
var { callFunction, config, saveToken, deleteToken } = uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_vkUnicloud_vkUnicloudCallFunctionUtil.callFunctionUtil;
const localeObj = {
  "zh-Hans": {
    "loading": "\u8BF7\u6C42\u4E2D...",
    "login": "\u767B\u5F55\u4E2D...",
    "register": "\u6CE8\u518C\u4E2D...",
    "create": "\u751F\u6210\u4E2D..."
  },
  "zh-Hant": {
    "loading": "\u8ACB\u6C42\u4E2D...",
    "login": "\u767B\u5165\u4E2D...",
    "register": "\u6CE8\u518C\u4E2D...",
    "create": "\u751F\u6210\u4E2D..."
  },
  "en": {
    "loading": "loading...",
    "login": "login...",
    "register": "register...",
    "create": "create..."
  }
};
function addLoading(obj, title) {
  if (typeof obj.loading === "undefined" && !obj.title && title) {
    let locale;
    if (typeof common_vendor.index.vk !== "undefined") {
      locale = localeObj[common_vendor.index.vk.pubfn.getLocale()];
    } else {
      locale = localeObj["zh-Hans"];
    }
    obj.title = locale[title] || "loading...";
  }
  return obj;
}
var userCenter = {
  register(obj = {}) {
    addLoading(obj, "register");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/pub/register"
    }));
  },
  login(obj = {}) {
    addLoading(obj, "login");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/pub/login"
    }));
  },
  logout(obj = {}) {
    addLoading(obj, "loading");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/pub/logout",
      success(res) {
        deleteToken();
        if (typeof obj.success == "function")
          obj.success(res);
      }
    }));
  },
  updatePwd(obj = {}) {
    addLoading(obj, "loading");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/kh/updatePwd"
    }));
  },
  resetPwd(obj) {
    addLoading(obj, "loading");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/kh/resetPwd"
    }));
  },
  setAvatar(obj = {}) {
    addLoading(obj, "loading");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/kh/setAvatar"
    }));
  },
  updateUser(obj = {}) {
    addLoading(obj, "loading");
    callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/kh/updateUser"
    }));
  },
  getCurrentUserInfo(obj = {}) {
    addLoading(obj, "loading");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/kh/getMyUserInfo"
    }));
  },
  checkToken(obj = {}) {
    addLoading(obj, "loading");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/pub/checkToken"
    }));
  },
  bindMobile(obj = {}) {
    addLoading(obj, "loading");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/kh/bindMobile"
    }));
  },
  unbindMobile(obj = {}) {
    addLoading(obj, "loading");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/kh/unbindMobile"
    }));
  },
  bindNewMobile(obj = {}) {
    addLoading(obj, "loading");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/kh/bindNewMobile"
    }));
  },
  loginBySms(obj = {}) {
    addLoading(obj, "login");
    return callFunction(__spreadValues({
      url: "user/pub/loginBySms"
    }, obj));
  },
  sendSmsCode(obj = {}) {
    addLoading(obj, "loading");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/pub/sendSmsCode"
    }));
  },
  loginByUniverify(obj = {}) {
    addLoading(obj, "login");
    if (typeof obj.needAlert === "undefined")
      obj.needAlert = true;
    common_vendor.index.vk.toast("\u8BF7\u5728APP\u4E2D\u4F7F\u7528\u672C\u673A\u53F7\u7801\u4E00\u952E\u767B\u5F55", "none");
  },
  bindEmail(obj = {}) {
    addLoading(obj, "loading");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/kh/bindEmail"
    }));
  },
  unbindEmail(obj = {}) {
    addLoading(obj, "loading");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/kh/unbindEmail"
    }));
  },
  bindNewEmail(obj = {}) {
    addLoading(obj, "loading");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/kh/bindNewEmail"
    }));
  },
  loginByEmail(obj = {}) {
    addLoading(obj, "login");
    return callFunction(__spreadValues({
      url: "user/pub/loginByEmail"
    }, obj));
  },
  sendEmailCode(obj = {}) {
    addLoading(obj, "loading");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/pub/sendEmailCode"
    }));
  },
  resetPasswordByEmail(obj = {}) {
    addLoading(obj, "loading");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/pub/resetPasswordByEmail"
    }));
  },
  setVerifyCode(obj = {}) {
    addLoading(obj, "loading");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/sys/setVerifyCode"
    }));
  },
  getWeixinCode() {
    return new Promise((resolve, reject) => {
      common_vendor.index.login({
        provider: "weixin",
        success(res) {
          resolve(res.code);
        },
        fail(err) {
          reject(new Error("\u5FAE\u4FE1\u767B\u5F55\u5931\u8D25"));
        }
      });
    });
  },
  loginByWeixin(obj = {}) {
    let that = this;
    uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_debounce.debounce(function() {
      addLoading(obj, "login");
      let { data = {} } = obj;
      that.getWeixinCode().then((code) => {
        callFunction(__spreadProps(__spreadValues({
          url: "user/pub/loginByWeixin"
        }, obj), {
          data: __spreadValues({
            code
          }, data)
        }));
      });
    }, 500);
  },
  code2SessionWeixin(obj = {}) {
    let that = this;
    addLoading(obj, "loading");
    let { data = {} } = obj;
    that.getWeixinCode().then((code) => {
      callFunction(__spreadProps(__spreadValues({}, obj), {
        url: "user/pub/code2SessionWeixin",
        data: __spreadValues({
          code
        }, data)
      }));
    });
  },
  bindWeixin(obj = {}) {
    let that = this;
    addLoading(obj, "loading");
    let { data = {} } = obj;
    that.getWeixinCode().then((code) => {
      callFunction(__spreadProps(__spreadValues({}, obj), {
        url: "user/kh/bindWeixin",
        data: __spreadValues({
          code
        }, data)
      }));
    });
  },
  unbindWeixin(obj = {}) {
    addLoading(obj, "loading");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/kh/unbindWeixin"
    }));
  },
  getPhoneNumber(obj = {}) {
    addLoading(obj, "loading");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/pub/getPhoneNumber"
    }));
  },
  loginByWeixinPhoneNumber(obj = {}) {
    addLoading(obj, "login");
    return callFunction(__spreadValues({
      url: "user/pub/loginByWeixinPhoneNumber"
    }, obj));
  },
  getWeixinMPqrcode(obj = {}) {
    addLoading(obj, "create");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/kh/getWeixinMPqrcode"
    }));
  },
  getWeixinMPscheme(obj = {}) {
    addLoading(obj, "create");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/kh/getWeixinMPscheme"
    }));
  },
  getWeixinMPurl(obj = {}) {
    addLoading(obj, "create");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/kh/getWeixinMPurl"
    }));
  },
  getAlipayCode() {
  },
  loginByAlipay(obj = {}) {
    let that = this;
    uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_debounce.debounce(function() {
      addLoading(obj, "login");
      let { data = {} } = obj;
      that.getAlipayCode().then((code) => {
        callFunction(__spreadProps(__spreadValues({
          url: "user/pub/loginByAlipay"
        }, obj), {
          data: __spreadProps(__spreadValues({}, data), {
            code
          })
        }));
      });
    }, 500);
  },
  code2SessionAlipay(obj = {}) {
    let that = this;
    addLoading(obj, "loading");
    let { data = {} } = obj;
    that.getAlipayCode().then((code) => {
      callFunction(__spreadProps(__spreadValues({}, obj), {
        url: "user/pub/code2SessionAlipay",
        data: __spreadProps(__spreadValues({}, data), {
          code
        })
      }));
    });
  },
  bindAlipay(obj = {}) {
    let that = this;
    addLoading(obj, "loading");
    let { data = {} } = obj;
    that.getAlipayCode().then((code) => {
      callFunction(__spreadProps(__spreadValues({}, obj), {
        url: "user/kh/bindAlipay",
        data: __spreadProps(__spreadValues({}, data), {
          code
        })
      }));
    });
  },
  unbindAlipay(obj = {}) {
    addLoading(obj, "loading");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/kh/unbindAlipay"
    }));
  },
  encryptPwd(obj = {}) {
    addLoading(obj, "loading");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/sys/encryptPwd"
    }));
  },
  setUserInviteCode(obj = {}) {
    addLoading(obj, "loading");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/kh/setUserInviteCode"
    }));
  },
  acceptInvite(obj = {}) {
    addLoading(obj, "loading");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/kh/acceptInvite"
    }));
  },
  getInvitedUser(obj = {}) {
    addLoading(obj, "loading");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/kh/getInvitedUser"
    }));
  },
  resetPasswordByMobile(obj = {}) {
    addLoading(obj, "loading");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/pub/resetPasswordByMobile"
    }));
  },
  getMenu(obj = {}) {
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/kh/getMenu"
    }));
  },
  addUploadRecord(obj = {}) {
    let { fileType, filePath } = obj;
    if (fileType === "image") {
      common_vendor.index.getImageInfo({
        src: filePath,
        success: function(res) {
          return callFunction(__spreadProps(__spreadValues({}, obj), {
            url: "user/kh/addUploadRecord",
            data: __spreadProps(__spreadValues({}, obj.data), {
              orientation: res.orientation,
              width: res.width,
              height: res.height
            })
          }));
        },
        fail: function(err) {
          console.error(err);
        }
      });
    } else if (fileType === "video") {
      common_vendor.index.getVideoInfo({
        src: filePath,
        success: function(res) {
          return callFunction(__spreadProps(__spreadValues({}, obj), {
            url: "user/kh/addUploadRecord",
            data: __spreadProps(__spreadValues({}, obj.data), {
              duration: parseFloat(res.duration.toFixed(3)),
              width: res.width,
              height: res.height
            })
          }));
        },
        fail: function(err) {
          console.error(err);
        }
      });
    } else {
      return callFunction(__spreadProps(__spreadValues({}, obj), {
        url: "user/kh/addUploadRecord"
      }));
    }
  },
  getQQCode() {
  },
  loginByQQ(obj = {}) {
    let that = this;
    uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_debounce.debounce(function() {
      addLoading(obj, "login");
      let { data = {} } = obj;
      that.getQQCode().then(({ code, accessToken } = {}) => {
        callFunction(__spreadProps(__spreadValues({
          url: "user/pub/loginByQQ"
        }, obj), {
          data: __spreadProps(__spreadValues({}, data), {
            code,
            accessToken
          })
        }));
      });
    }, 500);
  },
  bindQQ(obj = {}) {
    let that = this;
    addLoading(obj, "loading");
    let { data = {} } = obj;
    that.getQQCode().then(({ code, accessToken } = {}) => {
      callFunction(__spreadProps(__spreadValues({}, obj), {
        url: "user/kh/bindQQ",
        data: __spreadProps(__spreadValues({}, data), {
          code,
          accessToken
        })
      }));
    });
  },
  unbindQQ(obj = {}) {
    addLoading(obj, "loading");
    return callFunction(__spreadProps(__spreadValues({}, obj), {
      url: "user/kh/unbindQQ"
    }));
  }
};
exports.userCenter = userCenter;
