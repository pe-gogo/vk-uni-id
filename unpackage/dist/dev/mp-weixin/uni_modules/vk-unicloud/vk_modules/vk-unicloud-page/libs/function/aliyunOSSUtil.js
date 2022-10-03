"use strict";
var common_vendor = require("../../../../../../common/vendor.js");
var aliyunOSSUtil = {};
var counterNum = 0;
aliyunOSSUtil.uploadFile = function(obj) {
  let {
    filePath,
    fileType = "image",
    name = "file",
    header = {
      "x-oss-forbid-overwrite": true
    },
    index = 0,
    file = {},
    needSave = false,
    category_id,
    title
  } = obj;
  let vk = getApp().globalData.vk;
  if (title)
    vk.showLoading(title);
  let fileNameObj = createFileName(obj);
  let aliyunOSS = getConfig();
  let fileName = fileNameObj.fileFullName;
  let formData = vk.pubfn.copyObject(aliyunOSS.uploadData);
  formData["key"] = fileName;
  if (filePath.indexOf(";base64,") > -1) {
    formData["file"] = dataURLtoBlob(filePath);
  } else {
    formData["name"] = filePath;
  }
  let Logger = {};
  Logger.startTime = new Date().getTime();
  Logger.filePath = filePath;
  return new Promise((resolve, reject) => {
    let uploadTask = common_vendor.index.uploadFile({
      url: aliyunOSS.action,
      filePath,
      name,
      header,
      formData,
      success: function(res) {
        if (title)
          vk.hideLoading();
        if (![200, 201].includes(res.statusCode)) {
          if (typeof obj.fail === "function")
            obj.fail(res);
          Logger.error = res;
        } else {
          res.fileID = fileNameObj.url;
          Logger.result = res;
          if (typeof obj.success === "function")
            obj.success(res);
          resolve(res);
          if (needSave) {
            vk.userCenter.addUploadRecord({
              data: {
                url: res.fileID,
                name: file.name,
                size: file.size,
                file_id: res.fileID,
                provider: "aliyun",
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
      },
      fail: function(res) {
        if (title)
          vk.hideLoading();
        Logger.error = res;
        if (res.errMsg && res.errMsg.indexOf("fail url not in domain list") > -1) {
          vk.toast("\u4E0A\u4F20\u57DF\u540D\u672A\u5728\u767D\u540D\u5355\u4E2D");
        }
        if (typeof obj.fail === "function")
          obj.fail(res);
      },
      complete: function() {
        let vk2 = getApp().globalData.vk;
        let config = vk2.callFunctionUtil.config;
        if (config.debug) {
          Logger.endTime = new Date().getTime();
          Logger.runTime = Logger.endTime - Logger.startTime;
          let colorArr = config.logger.colorArr;
          let colorStr = colorArr[counterNum % colorArr.length];
          counterNum++;
          console.log("%c--------\u3010\u5F00\u59CB\u3011\u3010\u963F\u91CC\u4E91oss\u6587\u4EF6\u4E0A\u4F20\u3011--------", "color: " + colorStr + ";font-size: 12px;font-weight: bold;");
          console.log("\u3010\u672C\u5730\u6587\u4EF6\u3011: ", Logger.filePath);
          console.log("\u3010\u8FD4\u56DE\u6570\u636E\u3011: ", Logger.result);
          console.log("\u3010\u9884\u89C8\u5730\u5740\u3011: ", Logger.result.fileID);
          console.log("\u3010\u4E0A\u4F20\u8017\u65F6\u3011: ", Logger.runTime, "\u6BEB\u79D2");
          console.log("\u3010\u4E0A\u4F20\u65F6\u95F4\u3011: ", vk2.pubfn.timeFormat(Logger.startTime, "yyyy-MM-dd hh:mm:ss"));
          if (Logger.error)
            console.error("\u3010error\u3011:", Logger.error);
          console.log("%c--------\u3010\u7ED3\u675F\u3011\u3010\u963F\u91CC\u4E91oss\u6587\u4EF6\u4E0A\u4F20\u3011--------", "color: " + colorStr + ";font-size: 12px;font-weight: bold;");
        }
      }
    });
    uploadTask.onProgressUpdate((res) => {
      if (res.progress > 0) {
        if (typeof obj.onUploadProgress === "function")
          obj.onUploadProgress(res);
      }
    });
  });
};
function getConfig() {
  let vk = getApp().globalData.vk;
  let aliyunOSS = vk.getConfig("service.aliyunOSS");
  let configData = {};
  if (aliyunOSS && aliyunOSS.uploadData && aliyunOSS.uploadData.OSSAccessKeyId) {
    try {
      if (aliyunOSS.groupUserId && typeof vk.getVuex === "function") {
        let userInfo = vk.getVuex("$user.userInfo");
        if (vk.pubfn.isNotNull(userInfo) && userInfo._id) {
          aliyunOSS.dirname += `/${userInfo._id}`;
        }
      }
    } catch (err) {
    }
    configData = {
      uploadData: {
        OSSAccessKeyId: aliyunOSS.uploadData.OSSAccessKeyId,
        policy: aliyunOSS.uploadData.policy,
        signature: aliyunOSS.uploadData.signature,
        success_action_status: 200,
        key: "test.png"
      },
      action: aliyunOSS.action,
      dirname: aliyunOSS.dirname,
      host: aliyunOSS.host
    };
  }
  return configData;
}
function createFileName(obj = {}) {
  let {
    index = 0,
    file,
    filePath
  } = obj;
  let vk = getApp().globalData.vk;
  let aliyunOSS = getConfig();
  let dirname = aliyunOSS.dirname;
  let host = aliyunOSS.host;
  let fileObj = {};
  let suffix = getFileSuffix(obj);
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
  let servicePath = "";
  let newFilePath = dirname + "/" + servicePath + dateYYYYMMDD + "/";
  let fileNickName = dateTimeEnd8 + randomNumber + "-" + oldName;
  let fileFullName = newFilePath + fileNickName;
  let url = host + "/" + fileFullName;
  fileObj.url = url;
  fileObj.fileFullName = fileFullName;
  fileObj.fileNickName = fileNickName;
  return fileObj;
}
function getFileSuffix(obj = {}) {
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
function dataURLtoBlob(dataurl) {
  let arr = dataurl.split(","), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}
exports.aliyunOSSUtil = aliyunOSSUtil;
