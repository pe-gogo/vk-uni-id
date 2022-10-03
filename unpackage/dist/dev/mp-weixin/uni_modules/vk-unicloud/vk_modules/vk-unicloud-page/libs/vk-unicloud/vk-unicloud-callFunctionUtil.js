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
var vk = {};
var counterNum = 0;
var uniCloudEnvs = {};
class CallFunctionUtil {
  constructor() {
    this.config = {
      isTest: false,
      debug: true,
      functionName: "router",
      testFunctionName: "router-test",
      functionNameToUrl: {
        "router": "https://xxxxxxx.bspapp.com/http/router",
        "router-test": "https://xxxxxxx.bspapp.com/http/router"
      },
      isRequestDefault: false,
      targetTimezone: 8,
      login: {
        url: "/pages_template/uni-id/login/index/index"
      },
      request: {
        dataParam: {}
      },
      logger: {
        colorArr: [
          "#0095ff",
          "#67C23A"
        ]
      },
      uniIdTokenKeyName: "uni_id_token",
      uniIdTokenExpiredKeyName: "uni_id_token_expired",
      uniIdUserInfoKeyName: "uni_id_user_info",
      requestGlobalParamKeyName: "vk_request_global_param",
      onRefreshTokenEventName: "onRefreshToken",
      components: {}
    };
    this.saveToken = (res = {}) => {
      let config = this.config;
      vk.setStorageSync(config.uniIdTokenKeyName, res.token);
      vk.setStorageSync(config.uniIdTokenExpiredKeyName, res.tokenExpired);
      this.emitRefreshToken(res);
      if (this.config.debug)
        console.log("--------\u3010token\u5DF2\u66F4\u65B0\u3011--------");
    };
    this.deleteToken = () => {
      let config = this.config;
      vk.removeStorageSync(config.uniIdTokenKeyName);
      vk.removeStorageSync(config.uniIdTokenExpiredKeyName);
      this.deleteUserInfo();
      this.emitRefreshToken();
      if (this.config.debug)
        console.log("--------\u3010token\u5DF2\u5220\u9664\u3011--------");
    };
    this.updateUserInfo = (res = {}) => {
      let config = this.config;
      let {
        userInfo = {}
      } = res;
      if (typeof vk.setVuex === "function") {
        vk.setVuex("$user.userInfo", userInfo);
      } else {
        vk.setStorageSync(config.uniIdUserInfoKeyName, userInfo);
      }
    };
    this.deleteUserInfo = (res = {}) => {
      let {
        log = true
      } = res;
      let config = this.config;
      if (typeof vk.setVuex === "function") {
        vk.setVuex("$user.userInfo", {});
        vk.setVuex("$user.permission", []);
        vk.removeStorageSync(config.uniIdUserInfoKeyName);
      } else {
        vk.removeStorageSync(config.uniIdUserInfoKeyName);
      }
      if (this.config.debug && log)
        console.log("--------\u3010\u7528\u6237\u4FE1\u606F\u5DF2\u5220\u9664\u3011--------");
    };
    this.checkToken = (res = {}) => {
      let config = this.config;
      let token = common_vendor.index.getStorageSync(config.uniIdTokenKeyName);
      let tokenExpired = common_vendor.index.getStorageSync(config.uniIdTokenExpiredKeyName);
      let valid = false;
      if (token && tokenExpired && tokenExpired > Date.now()) {
        valid = true;
      }
      return valid;
    };
    this.emitRefreshToken = (data = {}) => {
      let config = this.config;
      return vk.$emit(config.onRefreshTokenEventName, data);
    };
    this.onRefreshToken = (callback) => {
      let config = this.config;
      return vk.$on(config.onRefreshTokenEventName, callback);
    };
    this.offRefreshToken = (callback) => {
      let config = this.config;
      return vk.$off(config.onRefreshTokenEventName, callback);
    };
    this.updateRequestGlobalParam = (data = {}, setKey) => {
      let config = this.config;
      if (setKey) {
        config.request.dataParam = data;
      } else {
        let dataParam = common_vendor.index.getStorageSync(config.requestGlobalParamKeyName) || {};
        config.request.dataParam = Object.assign(dataParam, data);
      }
      vk.setStorageSync(config.requestGlobalParamKeyName, config.request.dataParam);
    };
    this.getRequestGlobalParam = (globalParamName = "*") => {
      let config = this.config;
      let data = config.request.dataParam;
      if (!data || JSON.stringify(data) === "{}") {
        data = common_vendor.index.getStorageSync(config.requestGlobalParamKeyName) || {};
        config.request.dataParam = data;
      }
      let param = data[globalParamName] || {};
      return JSON.parse(JSON.stringify(param));
    };
    this.deleteRequestGlobalParam = (globalParamName) => {
      let config = this.config;
      let globalParam = common_vendor.index.getStorageSync(config.requestGlobalParamKeyName) || {};
      if (globalParamName) {
        delete globalParam[globalParamName];
      } else {
        globalParam = {};
      }
      config.request.dataParam = globalParam;
      vk.setStorageSync(config.requestGlobalParamKeyName, globalParam);
    };
    this.interceptor = {
      login: (obj = {}) => {
        let {
          params,
          res
        } = obj;
        let config = this.config;
        let callFunction = this.callFunction;
        if (config.debug)
          console.log("\u8DF3\u767B\u5F55\u9875\u9762");
        let { tokenExpiredAutoDelete = true } = config;
        if (tokenExpiredAutoDelete)
          this.deleteToken();
        setTimeout(() => {
          if (config.login.url) {
            let currentPage = getCurrentPages()[getCurrentPages().length - 1];
            if (currentPage && currentPage.route && "/" + currentPage.route === config.login.url) {
              return false;
            }
            if (vk.navigate.isOnLaunchToLogin) {
              setTimeout(() => {
                vk.navigate.isOnLaunchToLogin = false;
              }, 500);
              return false;
            }
            common_vendor.index.navigateTo({
              url: config.login.url,
              events: {
                loginSuccess: function(data) {
                  let num = 2;
                  let pages = getCurrentPages();
                  if (pages.length >= num) {
                    let that = pages[pages.length - num];
                    if (typeof that.onLoad == "function") {
                      that.onLoad(that.options);
                    } else if (typeof that.init == "function") {
                      that.init(that.options);
                    } else {
                      callFunction(params);
                    }
                  } else {
                    callFunction(params);
                  }
                }
              }
            });
          } else {
            if (params.needAlert) {
              vk.alert(res.result.msg);
            }
          }
        }, 0);
      },
      fail: (obj = {}) => {
        return true;
      }
    };
    this.callFunction = (obj = {}) => {
      let that = this;
      let { config } = that;
      let {
        url,
        data = {},
        globalParamName
      } = obj;
      if (obj.retryCount) {
        return that.callFunctionRetry(obj);
      }
      if (typeof data === "object") {
        obj.data = vk.pubfn.copyObject(data);
      }
      let globalParam = common_vendor.index.getStorageSync(config.requestGlobalParamKeyName) || {};
      for (let i in globalParam) {
        let customDate2 = globalParam[i];
        if (customDate2.regExp) {
          if (typeof customDate2.regExp === "object") {
            for (let i2 = 0; i2 < customDate2.regExp.length; i2++) {
              let regExp = new RegExp(customDate2.regExp[i2]);
              if (regExp.test(url)) {
                obj.data = Object.assign(customDate2.data, obj.data);
                break;
              }
            }
          } else {
            let regExp = new RegExp(customDate2.regExp);
            if (regExp.test(url)) {
              obj.data = Object.assign(customDate2.data, obj.data);
            }
          }
        }
      }
      let customDate = that.getRequestGlobalParam(globalParamName);
      if (customDate && JSON.stringify(customDate) !== "{}") {
        if (customDate.regExp) {
          obj.data = Object.assign(customDate.data, obj.data);
        } else {
          obj.data = Object.assign(customDate, obj.data);
        }
      }
      if (url.indexOf("/kh/") > -1 || url.indexOf("/sys/") > -1 || url.indexOf(".") > -1 && url.indexOf("pub_") == -1 && url.indexOf("/pub/") == -1 && url.indexOf("/pub.") == -1 && url.indexOf("pub.") !== 0 && url.indexOf("pub_") !== 0) {
        if (!vk.checkToken()) {
          return new Promise((resolve, reject) => {
            let res = { code: 30204, msg: "\u672C\u5730token\u6821\u9A8C\u672A\u901A\u8FC7" };
            let params = obj;
            if (typeof that.interceptor.login === "function") {
              that.interceptor.login({
                res,
                params,
                vk
              });
            }
            reject(res);
          });
        }
      }
      if (typeof obj.isRequest === "undefined") {
        obj.isRequest = config.isRequestDefault;
      }
      if (obj.isRequest) {
        return that.runRequest(obj);
      } else {
        return that.runCallFunction(obj);
      }
    };
    this.setConfig = (customConfig = {}) => {
      for (let key in customConfig) {
        if (key === "vk") {
          vk = customConfig[key];
        } else if (key === "interceptor") {
          this.interceptor = Object.assign(this.interceptor, customConfig[key]);
          this.config.interceptor = customConfig[key];
        } else if (key === "myfn") {
          vk.myfn = customConfig[key];
        } else if (key === "loginPagePath") {
          this.config.login.url = customConfig[key];
        } else if (key === "uniCloud") {
          let uniCloudConfig = customConfig[key];
          if (uniCloudConfig && uniCloudConfig.envs) {
            for (let envKey in uniCloudConfig.envs) {
              let envItem = uniCloudConfig.envs[envKey];
              if (envItem && envItem.provider && envItem.spaceId) {
                let initConifg = {
                  provider: envItem.provider,
                  spaceId: envItem.spaceId
                };
                if (envItem.clientSecret)
                  initConifg.clientSecret = envItem.clientSecret;
                if (envItem.endpoint)
                  initConifg.endpoint = envItem.endpoint;
                uniCloudEnvs[envKey] = common_vendor.pn.init(initConifg);
              }
            }
          }
        } else if (typeof customConfig[key] === "object" && typeof this.config[key] === "object") {
          this.config[key] = Object.assign(this.config[key], customConfig[key]);
        } else if (typeof customConfig[key] !== "undefined") {
          this.config[key] = customConfig[key];
        }
      }
    };
    this.getConfig = (key) => {
      let config = this.config;
      if (key) {
        return vk.pubfn.getData(config, key);
      } else {
        return config;
      }
    };
    this.init = (obj = {}) => {
      vk = obj.vk;
    };
    this.uploadFile = (obj = {}) => {
      let that = this;
      let config = that.config;
      let {
        filePath,
        cloudPath,
        title,
        errorToast,
        needAlert,
        success,
        fail,
        complete,
        type,
        provider,
        file = {},
        needSave = false,
        category_id,
        uniCloud: myCloud,
        env = "default"
      } = obj;
      let fileType = this.getFileType(obj);
      obj.fileType = fileType;
      if (type && !provider)
        provider = type;
      if (!provider) {
        let aliyunOSS = vk.pubfn.getData(config, "service.aliyunOSS");
        if (aliyunOSS && aliyunOSS.isDefault) {
          provider = "aliyun";
        } else {
          provider = "unicloud";
        }
      }
      if (provider === "aliyun") {
        return vk.aliyunOSSUtil.uploadFile(obj);
      }
      if (title)
        vk.showLoading(title);
      if (errorToast)
        needAlert = false;
      if (!cloudPath)
        cloudPath = this.createFileName(obj);
      let Logger = {};
      if (config.debug)
        Logger.filePath = filePath;
      if (config.debug)
        Logger.startTime = Date.now();
      let runCloud = myCloud || uniCloudEnvs[env] || common_vendor.pn;
      return new Promise((resolve, reject) => {
        runCloud.uploadFile({
          filePath,
          cloudPath,
          fileType,
          onUploadProgress: function(progressEvent) {
            let percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
            if (typeof obj.onUploadProgress == "function") {
              obj.onUploadProgress({
                progressEvent,
                percentCompleted,
                progress: percentCompleted
              });
            }
          },
          success(res) {
            if (config.debug)
              Logger.result = typeof res == "object" ? JSON.parse(JSON.stringify(res)) : res;
            if (title)
              vk.hideLoading();
            common_vendor.pn.getTempFileURL({
              fileList: [res.fileID],
              success(data) {
                let { fileID, tempFileURL } = data.fileList[0];
                res.fileID = tempFileURL;
                res.url = tempFileURL;
                res.file_id = fileID;
                if (config.debug)
                  Logger.result.url = tempFileURL;
                if (typeof success == "function")
                  success(res);
                resolve(res);
                if (needSave) {
                  vk.userCenter.addUploadRecord({
                    data: {
                      url: res.url,
                      name: file.name,
                      size: file.size,
                      file_id: res.file_id,
                      provider,
                      category_id
                    },
                    filePath,
                    fileType,
                    success: function() {
                      if (typeof obj.addSuccess == "function")
                        obj.addSuccess(res);
                    },
                    fail: function(res2) {
                      if (typeof obj.addFail === "function")
                        obj.addFail(res2);
                    }
                  });
                }
              }
            });
          },
          fail(err2) {
            if (title)
              vk.hideLoading();
            if (config.debug)
              Logger.error = err2;
            if (errorToast)
              vk.toast(JSON.stringify(err2), "none");
            if (needAlert) {
              if (config.debug)
                vk.alert(JSON.stringify(err2));
            }
            if (typeof fail == "function")
              fail(err2);
            reject(err2);
          },
          complete() {
            if (config.debug) {
              Logger.endTime = Date.now();
              Logger.runTime = Logger.endTime - Logger.startTime;
              let colorArr = config.logger.colorArr;
              let colorStr = colorArr[counterNum % colorArr.length];
              counterNum++;
              console.log("%c--------\u3010\u5F00\u59CB\u3011\u3010\u6587\u4EF6\u4E0A\u4F20\u3011--------", "color: " + colorStr + ";font-size: 12px;font-weight: bold;");
              console.log("\u3010\u672C\u5730\u6587\u4EF6\u3011: ", Logger.filePath);
              console.log("\u3010\u8FD4\u56DE\u6570\u636E\u3011: ", Logger.result);
              console.log("\u3010\u9884\u89C8\u5730\u5740\u3011: ", Logger.result.fileID);
              console.log("\u3010\u4E0A\u4F20\u8017\u65F6\u3011: ", Logger.runTime, "\u6BEB\u79D2");
              console.log("\u3010\u4E0A\u4F20\u65F6\u95F4\u3011: ", vk.pubfn.timeFormat(Logger.startTime, "yyyy-MM-dd hh:mm:ss"));
              if (Logger.error)
                console.error("\u3010error\u3011:", Logger.error);
              console.log("%c--------\u3010\u7ED3\u675F\u3011\u3010\u6587\u4EF6\u4E0A\u4F20\u3011--------", "color: " + colorStr + ";font-size: 12px;font-weight: bold;");
            }
            if (typeof complete == "function")
              complete();
          }
        });
      });
    };
  }
  runCallFunction(obj = {}) {
    let that = this;
    let config = that.config;
    let {
      url,
      data,
      title,
      loading,
      isRequest,
      name,
      complete,
      uniCloud: myCloud,
      env = "default"
    } = obj;
    if (title)
      vk.showLoading(title);
    if (loading)
      vk.setLoading(true, loading);
    if (!name)
      name = config.isTest ? config.testFunctionName : config.functionName;
    obj.name = name;
    let Logger = {};
    if (config.debug)
      Logger.params = typeof data == "object" ? JSON.parse(JSON.stringify(data)) : data;
    let promiseAction = new Promise(function(resolve, reject) {
      if (config.debug)
        Logger.startTime = Date.now();
      let runCloud = myCloud || uniCloudEnvs[env] || common_vendor.pn;
      runCloud.callFunction({
        name,
        data: {
          $url: url,
          data
        },
        success(res = {}) {
          that.callFunctionSuccess({
            res: res.result,
            params: obj,
            Logger,
            resolve,
            reject
          });
        },
        fail(res) {
          that.callFunctionFail({
            res,
            params: obj,
            Logger,
            reject,
            sysFail: true
          });
        },
        complete(res) {
          that.callFunctionComplete({
            res,
            params: obj,
            Logger
          });
        }
      });
    });
    promiseAction.catch((error) => {
    });
    return promiseAction;
  }
  runRequest(obj = {}) {
    let that = this;
    let config = that.config;
    let {
      url,
      data,
      title,
      loading,
      name,
      complete
    } = obj;
    if (typeof obj.needAlert === "undefined")
      obj.needAlert = true;
    if (!name)
      name = config.isTest ? config.testFunctionName : config.functionName;
    obj.name = name;
    let requestUrl = config.functionNameToUrl[name];
    let Logger = {};
    if (config.debug)
      Logger.params = typeof data == "object" ? JSON.parse(JSON.stringify(data)) : data;
    let uniIdToken = common_vendor.index.getStorageSync(config.uniIdTokenKeyName);
    common_vendor.index.getStorageSync(config.uniIdTokenExpiredKeyName);
    if (title)
      vk.showLoading(title);
    if (loading)
      vk.setLoading(true, loading);
    let promiseAction = new Promise(function(resolve, reject) {
      if (config.debug)
        Logger.startTime = Date.now();
      common_vendor.index.request({
        method: "POST",
        url: requestUrl,
        data: {
          $url: url,
          data,
          uniIdToken
        },
        success(res = {}) {
          that.callFunctionSuccess({
            res: res.data,
            params: obj,
            Logger,
            resolve,
            reject
          });
        },
        fail(res) {
          that.callFunctionFail({
            res,
            params: obj,
            Logger,
            reject,
            sysFail: true
          });
        },
        complete(res) {
          that.callFunctionComplete({
            res,
            params: obj,
            Logger
          });
        }
      });
    });
    promiseAction.catch((error) => {
    });
    return promiseAction;
  }
  callFunctionSuccess(obj) {
    let that = this;
    let config = that.config;
    let {
      res = {},
      params,
      Logger,
      resolve,
      reject
    } = obj;
    let {
      title,
      loading,
      success
    } = params;
    if (title)
      vk.hideLoading();
    if (loading)
      vk.setLoading(false, loading);
    if (typeof res.code === "undefined" && typeof res.errCode !== "undefined")
      res.code = res.errCode;
    let code = res.code;
    if (config.debug)
      Logger.result = typeof res == "object" ? JSON.parse(JSON.stringify(res)) : res;
    if (code == 0 || res.key == 1 || code == void 0 && res.uid) {
      if (res.vk_uni_token)
        that.saveToken(res.vk_uni_token);
      if (res.userInfo && res.needUpdateUserInfo)
        that.updateUserInfo(res);
      if (typeof success == "function")
        success(res);
      resolve(res);
    } else if ([1301, 1302, 30201, 30202, 30203, 30204].indexOf(code) > -1 && res.msg.indexOf("token") > -1) {
      if (typeof that.interceptor.login === "function") {
        that.interceptor.login({
          res,
          params,
          vk
        });
      }
      reject(res);
    } else {
      that.callFunctionFail({
        res,
        params,
        Logger,
        reject
      });
    }
  }
  callFunctionFail(obj) {
    let that = this;
    let config = that.config;
    let { globalErrorCode = {} } = config;
    let {
      res = {},
      params,
      Logger,
      reject,
      sysFail
    } = obj;
    let {
      title,
      loading,
      errorToast,
      noAlert,
      needAlert,
      fail
    } = params;
    if (params.needRetry) {
      if (sysFail || res.code && [90001].indexOf(res.code) > -1) {
        if (!obj.hookResult || typeof obj.hookResult === "function" && !obj.hookResult(err)) {
          Logger.sysFail = true;
          if (typeof params.retry == "function")
            params.retry(res, params);
          return false;
        }
      }
    }
    if (typeof noAlert !== "undefined")
      needAlert = !noAlert;
    if (typeof needAlert === "undefined") {
      needAlert = typeof fail === "function" ? false : true;
    }
    if (errorToast)
      needAlert = false;
    if (title)
      vk.hideLoading();
    if (loading)
      vk.setLoading(false, loading);
    let errMsg = "";
    let sysErr = false;
    if (typeof res.code !== "undefined") {
      if (res.msg) {
        errMsg = res.msg;
      } else if (res.errMsg) {
        errMsg = res.errMsg;
      } else if (res.message) {
        errMsg = res.message;
      }
    } else {
      sysErr = true;
      errMsg = JSON.stringify(res);
    }
    if (!errMsg)
      errMsg = "";
    if (errMsg.toLowerCase().indexOf("timeout") > -1 || errMsg.toLowerCase().indexOf("etimedout") > -1) {
      sysErr = true;
      errMsg = globalErrorCode["cloudfunction-timeout"] || "\u8BF7\u6C42\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5\uFF01";
    }
    if (res.code >= 90001 && errMsg.indexOf("\u6570\u636E\u5E93") > -1) {
      sysErr = true;
    } else if ([404, 500].indexOf(res.code) > -1 && errMsg.indexOf("\u4E91\u51FD\u6570") > -1) {
      sysErr = true;
    } else if (res.code === "SYS_ERR" && errMsg.indexOf(": request:ok") > -1) {
      errMsg = globalErrorCode["cloudfunction-unusual-timeout"] || "\u8BF7\u6C42\u8D85\u65F6\uFF0C\u4F46\u8BF7\u6C42\u8FD8\u5728\u6267\u884C\uFF0C\u8BF7\u91CD\u65B0\u8FDB\u5165\u9875\u9762\u3002";
    } else if (errMsg.indexOf("reaches burst limit") > -1) {
      errMsg = globalErrorCode["cloudfunction-reaches-burst-limit"] || "\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002";
    }
    let runKey = true;
    if (typeof that.interceptor.fail == "function") {
      runKey = that.interceptor.fail({
        vk,
        res,
        params
      });
      if (runKey === void 0)
        runKey = true;
    }
    if (runKey) {
      Logger.error = res;
      if (errorToast)
        vk.toast(errMsg, "none");
      if (needAlert && vk.pubfn.isNotNull(errMsg)) {
        if (sysErr) {
          let toastMsg = globalErrorCode["cloudfunction-system-error"] || "\u7F51\u7EDC\u5F00\u5C0F\u5DEE\u4E86\uFF01";
          vk.toast(toastMsg, "none");
        } else {
          vk.alert(errMsg);
        }
      }
      if (typeof fail == "function")
        fail(res);
    }
    if (typeof reject == "function")
      reject(res);
  }
  callFunctionComplete(obj) {
    let that = this;
    let config = that.config;
    let {
      res = {},
      params,
      Logger
    } = obj;
    let {
      name,
      url,
      isRequest,
      complete,
      debug: debugLog
    } = params;
    if (params.needRetry && Logger.sysFail) {
      return false;
    }
    if (typeof debugLog === "undefined")
      debugLog = config.debug;
    if (debugLog) {
      Logger.endTime = Date.now();
      if (isRequest) {
        Logger.label = "\u3010url\u5316\u3011";
      } else {
        Logger.label = "";
      }
      Logger.runTime = Logger.endTime - Logger.startTime;
      let colorArr = config.logger.colorArr;
      let colorStr = colorArr[counterNum % colorArr.length];
      counterNum++;
      console.log("%c--------\u3010\u5F00\u59CB\u3011" + Logger.label + "\u3010\u4E91\u51FD\u6570\u8BF7\u6C42\u3011\u3010" + name + "\u3011\u3010" + url + "\u3011--------", "color: " + colorStr + ";font-size: 12px;font-weight: bold;");
      console.log("\u3010\u8BF7\u6C42\u53C2\u6570\u3011: ", Logger.params);
      console.log("\u3010\u8FD4\u56DE\u6570\u636E\u3011: ", Logger.result);
      console.log("\u3010\u603B\u4F53\u8017\u65F6\u3011: ", Logger.runTime, "\u6BEB\u79D2\u3010\u542B\u9875\u9762\u6E32\u67D3\u3011");
      console.log("\u3010\u8BF7\u6C42\u65F6\u95F4\u3011: ", vk.pubfn.timeFormat(Logger.startTime, "yyyy-MM-dd hh:mm:ss"));
      if (Logger.error) {
        console.error("\u3010Error\u3011: ", Logger.error);
        if (Logger.error.err && Logger.error.err.stack) {
          console.error("\u3010Stack\u3011: ", Logger.error.err.stack);
        }
      }
      console.log("%c--------\u3010\u7ED3\u675F\u3011" + Logger.label + "\u3010\u4E91\u51FD\u6570\u8BF7\u6C42\u3011\u3010" + name + "\u3011\u3010" + url + "\u3011--------", "color: " + colorStr + ";font-size: 12px;font-weight: bold;");
    }
    if (typeof complete == "function")
      complete(res);
  }
  createFileName(obj = {}) {
    let {
      index = 0,
      file,
      filePath
    } = obj;
    let suffix = this.getFileSuffix(obj);
    let oldName = index + "." + suffix;
    if (file && file.name) {
      let suffixName = file.name.substring(file.name.lastIndexOf(".") + 1);
      if (suffixName && suffixName.length < 5)
        oldName = file.name;
      oldName = oldName.replace(/[^a-zA-Z.-d]/g, "");
      if (oldName.indexOf(".") == 0)
        oldName = "0" + oldName;
    }
    let date = new Date();
    let dateYYYYMMDD = vk.pubfn.timeFormat(date, "yyyy/MM/dd");
    let dateTime = date.getTime().toString();
    let dateTimeEnd8 = dateTime.substring(dateTime.length - 8, dateTime.length);
    let randomNumber = vk.pubfn.random(8);
    let newFilePath = dateYYYYMMDD + "/";
    let fileNickName = dateTimeEnd8 + "-" + randomNumber + "-" + oldName;
    let fileFullName = newFilePath + fileNickName;
    return fileFullName;
  }
  getFileSuffix(obj = {}) {
    let {
      file,
      filePath
    } = obj;
    let suffix = "png";
    if (filePath) {
      let suffixName = filePath.substring(filePath.lastIndexOf(".") + 1);
      if (suffixName && suffixName.length < 5)
        suffix = suffixName;
    }
    if (file) {
      if (file.path) {
        let suffixName = file.path.substring(file.path.lastIndexOf(".") + 1);
        if (suffixName && suffixName.length < 5)
          suffix = suffixName;
      }
      if (file.name) {
        let suffixName = file.name.substring(file.name.lastIndexOf(".") + 1);
        if (suffixName && suffixName.length < 5)
          suffix = suffixName;
      }
    }
    return suffix;
  }
  getFileType(obj = {}) {
    let fileType = "other";
    let suffix = this.getFileSuffix(obj);
    if (["png", "jpg", "jpeg", "gif", "bmp", "svg", "webp"].indexOf(suffix) > -1) {
      fileType = "image";
    } else if (["avi", "mp3", "mp4", "3gp", "mov", "rmvb", "rm", "flv", "mkv"].indexOf(suffix) > -1) {
      fileType = "video";
    }
    return fileType;
  }
  callFunctionRetry(obj = {}) {
    let { retryCount } = obj;
    delete obj.retryCount;
    return new Promise((resolve, reject) => {
      this.callRetryFn(obj, resolve, reject, retryCount);
    });
  }
  callRetryFn(obj, resolve, reject, retryCount) {
    let that = this;
    let debug = that.config.debug;
    that.callFunction(__spreadProps(__spreadValues({}, obj), {
      needRetry: retryCount ? true : false,
      retry: function(err2) {
        obj.runCount = obj.runCount ? obj.runCount + 1 : 1;
        obj.needRetry = retryCount > obj.runCount ? true : false;
        err2.message ? `\u5F02\u5E38\u4FE1\u606F\uFF1A${err2.message}` : "";
        if (debug)
          console.log(`\u3010\u8BF7\u6C42\u5931\u8D25\u3011\u6B63\u5728\u7B2C\u3010${obj.runCount}\u3011\u6B21\u91CD\u8BD5\uFF1A${obj.url}`);
        if (obj.retryInterval) {
          setTimeout(function() {
            that._callRetryFn(obj, resolve, reject, retryCount);
          }, obj.retryInterval);
        } else {
          that._callRetryFn(obj, resolve, reject, retryCount);
        }
      }
    }));
  }
  _callRetryFn(obj, resolve, reject, retryCount) {
    if (obj.runCount < retryCount) {
      this.callRetryFn(obj, resolve, reject, retryCount);
    } else {
      this.callFunction(obj).catch((err2) => {
        reject();
      });
    }
  }
}
var callFunctionUtil = new CallFunctionUtil();
exports.callFunctionUtil = callFunctionUtil;
