"use strict";
var common_function_myPubFunction = require("./common/function/myPubFunction.js");
var config = {
  debug: true,
  functionName: "router",
  login: {
    url: "/pages_template/uni-id/login/index/index"
  },
  index: {
    url: "/pages/index/index"
  },
  error: {
    url: "/pages/error/404/404"
  },
  targetTimezone: 8,
  logger: {
    colorArr: [
      "#0095f8",
      "#67C23A"
    ]
  },
  color: {
    main: "#ff4444",
    secondary: "#555555"
  },
  checkTokenPages: {
    mode: 2,
    list: [
      "/pages_template/*",
      "/pages/login/*",
      "/pages/index/*",
      "/pages/error/*"
    ]
  },
  checkSharePages: {
    mode: 0,
    menus: ["shareAppMessage"],
    list: [
      "/pages/index/*",
      "/pages/goods/*",
      "/pages_template/*"
    ]
  },
  staticUrl: {
    logo: "/static/logo.png"
  },
  myfn: common_function_myPubFunction.myfn,
  service: {
    aliyunOSS: {
      uploadData: {
        OSSAccessKeyId: "",
        policy: "",
        signature: ""
      },
      action: "https://xxx.oss-cn-hangzhou.aliyuncs.com",
      dirname: "test",
      host: "https://xxx.xxx.com",
      groupUserId: true,
      isDefault: false
    }
  },
  globalErrorCode: {
    "cloudfunction-unusual-timeout": "\u8BF7\u6C42\u8D85\u65F6\uFF0C\u4F46\u8BF7\u6C42\u8FD8\u5728\u6267\u884C\uFF0C\u8BF7\u91CD\u65B0\u8FDB\u5165\u9875\u9762\u3002",
    "cloudfunction-timeout": "\u8BF7\u6C42\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5\uFF01",
    "cloudfunction-system-error": "\u7F51\u7EDC\u5F00\u5C0F\u5DEE\u4E86\uFF01"
  },
  interceptor: {}
};
exports.config = config;
