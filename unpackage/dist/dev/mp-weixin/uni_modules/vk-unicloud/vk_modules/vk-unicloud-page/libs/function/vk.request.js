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
var requestUtil = {};
requestUtil.config = {
  request: {
    dataParam: {}
  },
  requestGlobalParamKeyName: "vk_url_request_global_param",
  debug: true,
  logger: {
    colorArr: [
      "#0095ff",
      "#67C23A"
    ]
  }
};
var counterNum = 0;
requestUtil.request = function(obj = {}) {
  let vk = common_vendor.index.vk;
  if (typeof obj.data === "object") {
    obj.data = vk.pubfn.copyObject(obj.data);
  }
  let config = requestUtil.config;
  let globalParam = common_vendor.index.getStorageSync(config.requestGlobalParamKeyName) || {};
  for (let i in globalParam) {
    let customDate2 = globalParam[i];
    if (customDate2.regExp) {
      if (typeof customDate2.regExp === "object") {
        for (let i2 = 0; i2 < customDate2.regExp.length; i2++) {
          let regExp = new RegExp(customDate2.regExp[i2]);
          if (regExp.test(obj.url)) {
            obj.data = Object.assign(customDate2.data, obj.data);
            break;
          }
        }
      } else {
        let regExp = new RegExp(customDate2.regExp);
        if (regExp.test(obj.url)) {
          obj.data = Object.assign(customDate2.data, obj.data);
        }
      }
    }
  }
  let customDate = requestUtil.getRequestGlobalParam(obj.globalParamName);
  if (customDate && JSON.stringify(customDate) !== "{}") {
    if (customDate.regExp) {
      obj.data = Object.assign(customDate.data, obj.data);
    } else {
      obj.data = Object.assign(customDate, obj.data);
    }
  }
  if (!obj.method)
    obj.method = "POST";
  if (typeof obj.dataType === "undefined")
    obj.dataType = "json";
  if (obj.dataType == "default" || obj.dataType === "")
    delete obj.dataType;
  if (typeof obj.header === "undefined" && typeof obj.headers !== "undefined") {
    obj.header = obj.headers;
  }
  if (typeof obj.timeout === "undefined")
    obj.timeout = 3e4;
  let Logger = {};
  if (config.debug) {
    Logger.params = typeof obj.data == "object" ? vk.pubfn.copyObject(obj.data) : obj.data;
    Logger.startTime = new Date().getTime();
    let url = obj.url;
    let path = obj.url.split("?")[0];
    path = path.substring(path.indexOf("://") + 3);
    Logger.domainName = path.substring(0, path.indexOf("/"));
    Logger.action = path.substring(path.indexOf("/") + 1);
    Logger.url = url;
  }
  if (obj.title)
    vk.showLoading(obj.title);
  if (obj.loading)
    vk.setLoading(true, obj.loading);
  let promiseAction = new Promise(function(resolve, reject) {
    common_vendor.index.request(__spreadProps(__spreadValues({}, obj), {
      success: function(res) {
        requestSuccess({
          res,
          params: obj,
          Logger,
          resolve,
          reject
        });
      },
      fail: function(res) {
        requestFail({
          res,
          params: obj,
          Logger,
          reject
        });
      },
      complete: function(res) {
        requestComplete({
          res,
          params: obj,
          Logger
        });
      }
    }));
  });
  promiseAction.catch((error) => {
  });
  return promiseAction;
};
function requestSuccess(obj = {}) {
  let vk = common_vendor.index.vk;
  let config = requestUtil.config;
  let {
    res = {},
    params,
    Logger,
    resolve,
    reject
  } = obj;
  let {
    title,
    needOriginalRes,
    dataType,
    errorCodeName,
    errorMsgName,
    success,
    loading
  } = params;
  let data = res.data || {};
  if (vk.pubfn.isNotNullAll(errorCodeName, data[errorCodeName])) {
    data.code = data[errorCodeName];
    delete data[errorCodeName];
  }
  if (vk.pubfn.isNotNullAll(errorMsgName, data[errorMsgName])) {
    data.msg = data[errorMsgName];
    if (typeof data[errorMsgName] === "string") {
      delete data[errorMsgName];
    }
  }
  if (config.debug)
    Logger.result = typeof data == "object" ? vk.pubfn.copyObject(data) : data;
  if (res.statusCode >= 400 || data.code) {
    requestFail({
      res: data,
      params,
      Logger,
      reject
    });
  } else {
    if (title)
      vk.hideLoading();
    if (loading)
      vk.setLoading(false, loading);
    if (needOriginalRes)
      data.originalRes = vk.pubfn.copyObject(res);
    if (typeof success === "function")
      success(data);
    if (typeof resolve === "function")
      resolve(data);
  }
}
function requestFail(obj = {}) {
  let vk = common_vendor.index.vk;
  let config = requestUtil.config;
  let {
    res = {},
    params,
    Logger,
    reject
  } = obj;
  let {
    title,
    needAlert,
    fail,
    loading
  } = params;
  if (typeof needAlert === "undefined") {
    needAlert = typeof fail === "function" ? false : true;
  }
  let errMsg = "";
  let sysErr = false;
  if (typeof res.code !== "undefined") {
    errMsg = res.msg;
  } else {
    sysErr = true;
    errMsg = JSON.stringify(res);
  }
  if (errMsg.indexOf("fail timeout") > -1) {
    sysErr = true;
    errMsg = "\u8BF7\u6C42\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5\uFF01";
  }
  if (config.debug)
    Logger.error = res;
  if (title)
    vk.hideLoading();
  if (loading)
    vk.setLoading(false, loading);
  let runKey = true;
  let { interceptor = {} } = vk.callFunctionUtil.getConfig();
  if (interceptor.request && typeof interceptor.request.fail == "function") {
    runKey = interceptor.request.fail({
      vk,
      res,
      params
    });
    if (runKey === void 0)
      runKey = true;
  }
  if (runKey) {
    if (needAlert && vk.pubfn.isNotNull(errMsg)) {
      if (sysErr) {
        vk.toast("\u7F51\u7EDC\u5F00\u5C0F\u5DEE\u4E86\uFF01", "none");
      } else {
        vk.alert(errMsg);
      }
    }
    if (typeof fail === "function")
      fail(res);
    if (typeof reject === "function")
      reject(res);
  }
}
function requestComplete(obj = {}) {
  let vk = common_vendor.index.vk;
  let config = requestUtil.config;
  let {
    res = {},
    params,
    Logger
  } = obj;
  let {
    title,
    needOriginalRes,
    complete
  } = params;
  if (config.debug) {
    Logger.endTime = new Date().getTime();
    Logger.runTime = Logger.endTime - Logger.startTime;
    let colorArr = config.logger.colorArr;
    let colorStr = colorArr[counterNum % colorArr.length];
    counterNum++;
    console.log("%c--------\u3010\u5F00\u59CB\u3011\u3010\u670D\u52A1\u5668\u8BF7\u6C42\u3011\u3010" + Logger.action + "\u3011--------", "color: " + colorStr + ";font-size: 12px;font-weight: bold;");
    console.log("\u3010\u8BF7\u6C42\u5730\u5740\u3011: ", Logger.url);
    console.log("\u3010\u8BF7\u6C42\u53C2\u6570\u3011: ", Logger.params);
    console.log("\u3010\u8FD4\u56DE\u6570\u636E\u3011: ", Logger.result);
    console.log("\u3010\u8BF7\u6C42\u72B6\u6001\u3011: ", res.statusCode, "\u3010http\u72B6\u6001\u7801\u3011");
    console.log("\u3010\u603B\u4F53\u8017\u65F6\u3011: ", Logger.runTime, "\u6BEB\u79D2\u3010\u542B\u9875\u9762\u6E32\u67D3\u3011");
    console.log("\u3010\u8BF7\u6C42\u65F6\u95F4\u3011: ", vk.pubfn.timeFormat(Logger.startTime, "yyyy-MM-dd hh:mm:ss"));
    if (Logger.error) {
      console.error("\u3010Error\u3011: ", Logger.error);
      if (Logger.error.err && Logger.error.err.stack) {
        console.error("\u3010Stack\u3011: ", Logger.error.err.stack);
      }
    }
    console.log("%c--------\u3010\u7ED3\u675F\u3011\u3010\u670D\u52A1\u5668\u8BF7\u6C42\u3011\u3010" + Logger.action + "\u3011--------", "color: " + colorStr + ";font-size: 12px;font-weight: bold;");
  }
  let data = res.data;
  if (needOriginalRes)
    data.originalRes = vk.pubfn.copyObject(res);
  if (typeof complete === "function")
    complete(data);
}
requestUtil.updateRequestGlobalParam = (data = {}, setKey) => {
  let vk = common_vendor.index.vk;
  let config = requestUtil.config;
  if (setKey) {
    config.request.dataParam = data;
  } else {
    config.request.dataParam = Object.assign(config.request.dataParam, data);
  }
  vk.setStorageSync(config.requestGlobalParamKeyName, config.request.dataParam);
};
requestUtil.getRequestGlobalParam = (globalParamName = "*") => {
  common_vendor.index.vk;
  let config = requestUtil.config;
  let data = config.request.dataParam;
  if (!data || JSON.stringify(data) === "{}") {
    data = common_vendor.index.getStorageSync(config.requestGlobalParamKeyName) || {};
    config.request.dataParam = data;
  }
  let param = data[globalParamName] || {};
  return JSON.parse(JSON.stringify(param));
};
requestUtil.deleteRequestGlobalParam = (globalParamName) => {
  let vk = common_vendor.index.vk;
  let config = requestUtil.config;
  let globalParam = common_vendor.index.getStorageSync(config.requestGlobalParamKeyName) || {};
  if (globalParamName) {
    delete globalParam[globalParamName];
  } else {
    globalParam = {};
  }
  config.request.dataParam = globalParam;
  vk.setStorageSync(config.requestGlobalParamKeyName, globalParam);
};
exports.requestUtil = requestUtil;
