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
var uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_debounce = require("./debounce.js");
var uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_throttle = require("./throttle.js");
var uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_queryParams = require("./queryParams.js");
var uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_setClipboardData = require("./setClipboardData.js");
var uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_timeUtil = require("./timeUtil.js");
var uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_treeUtil = require("./treeUtil.js");
var pubfn = {};
pubfn.treeUtil = uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_treeUtil.util;
pubfn.timeUtil = uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_timeUtil.util;
pubfn.debounce = uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_debounce.debounce;
pubfn.throttle = uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_throttle.throttle;
pubfn.queryParams = uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_queryParams.queryParams;
pubfn.setClipboardData = uni_modules_vkUnicloud_vk_modules_vkUnicloudPage_libs_function_setClipboardData.setClipboardData;
pubfn.sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
pubfn.timeFormat = pubfn.timeUtil.timeFormat;
pubfn.getFullTime = pubfn.timeUtil.getFullTime;
pubfn.getCommonTime = pubfn.timeUtil.getCommonTime;
pubfn.getOffsetTime = pubfn.timeUtil.getOffsetTime;
pubfn.getWeekStartAndEnd = pubfn.timeUtil.getWeekStartAndEnd;
pubfn.getDayOffsetStartAndEnd = pubfn.timeUtil.getDayOffsetStartAndEnd;
pubfn.getMonthOffsetStartAndEnd = pubfn.timeUtil.getMonthOffsetStartAndEnd;
pubfn.getYearOffsetStartAndEnd = pubfn.timeUtil.getYearOffsetStartAndEnd;
pubfn.getMonthStartAndEnd = pubfn.timeUtil.getMonthStartAndEnd;
pubfn.validator = function(type) {
  return function(rule, value, callback) {
    let key = pubfn.test(value, type);
    if (typeof callback === "function") {
      if (key || !value) {
        callback();
      } else {
        return callback(false);
      }
    } else {
      return callback(false);
    }
  };
};
pubfn.test = function(str, type = "") {
  type = type.toLowerCase();
  switch (type) {
    case "mobile":
      return new RegExp(/^1[3|4|5|6|7|8|9][0-9]{9}$/).test(str);
    case "tel":
      return new RegExp(/^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/).test(str);
    case "card":
      return new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/).test(str);
    case "mobilecode":
      return new RegExp(/^[0-9]{6}$/).test(str);
    case "username":
      return new RegExp(/^[a-zA-Z]([-_a-zA-Z0-9]{5,17})$/).test(str);
    case "pwd":
      return new RegExp(/^([a-zA-Z0-9_@]){6,18}$/).test(str);
    case "password":
      return new RegExp(/^([a-zA-Z0-9_@]){6,18}$/).test(str);
    case "paypwd":
      return new RegExp(/^[0-9]{6}$/).test(str);
    case "postal":
      return new RegExp(/[1-9]\d{5}(?!\d)/).test(str);
    case "qq":
      return new RegExp(/^[1-9][0-9]{4,9}$/).test(str);
    case "email":
      return new RegExp(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/).test(str);
    case "money":
      return new RegExp(/^\d*(?:\.\d{0,2})?$/).test(str);
    case "url":
      return new RegExp(/^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/).test(str);
    case "ip":
      return new RegExp(/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/).test(str);
    case "date":
      return new RegExp(/^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/).test(str);
    case "time":
      return new RegExp(/^(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/).test(str);
    case "datetime":
      return new RegExp(/^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])\s+(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/).test(str);
    case "english+number":
      return new RegExp(/^[a-zA-Z0-9]*$/).test(str);
    case "english+number+_":
      return new RegExp(/^[a-zA-Z0-9_]*$/).test(str);
    case "english+number+_-":
      return new RegExp(/^[a-zA-Z0-9_-]*$/).test(str);
    case "number":
      return new RegExp(/^[0-9]*$/).test(str);
    case "english":
      return new RegExp(/^[a-zA-Z]+$/).test(str);
    case "chinese":
      return new RegExp(/^[\u4e00-\u9fa5]+$/gi).test(str);
    case "lower":
      return new RegExp(/^[a-z]+$/).test(str);
    case "upper":
      return new RegExp(/^[A-Z]+$/).test(str);
    case "html":
      return new RegExp(/<("[^"]*"|'[^']*'|[^'">])*>/).test(str);
    default:
      return true;
  }
};
pubfn.checkStr = pubfn.test;
pubfn.objectAssign = function(obj1, obj2) {
  return Object.assign(obj1, obj2);
};
pubfn.copyObject = function(obj) {
  if (typeof obj !== "undefined") {
    return JSON.parse(JSON.stringify(obj));
  } else {
    return obj;
  }
};
pubfn.deepClone = function(obj) {
  if ([null, void 0, NaN, false].includes(obj))
    return obj;
  if (typeof obj !== "object" && typeof obj !== "function") {
    return obj;
  }
  let o = Object.prototype.toString.call(obj) === "[object Array]" ? [] : {};
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === "object" ? pubfn.deepClone(obj[i]) : obj[i];
    }
  }
  return o;
};
pubfn.formAssign = function(defaultData, itemData) {
  let newDefaultData = pubfn.copyObject(defaultData);
  return pubfn.objectAssign(newDefaultData, itemData);
};
pubfn.arr_concat = function(arr1, arr2, flag) {
  if (!flag)
    flag = "id";
  if (!arr1)
    arr1 = [];
  if (!arr2)
    arr2 = [];
  let arr3 = arr1.concat(arr2);
  let arr = [];
  if (flag != -1) {
    let arr_id = [];
    for (let i in arr3) {
      if (arr_id.indexOf(arr3[i][flag]) == -1) {
        arr_id.push(arr3[i][flag]);
        arr.push(arr3[i]);
      }
    }
  } else {
    arr = arr3;
  }
  return arr;
};
pubfn.getData = function(dataObj, name, defaultValue) {
  let newDataObj;
  if (pubfn.isNotNull(dataObj)) {
    newDataObj = JSON.parse(JSON.stringify(dataObj));
    let k = "", d = ".", l = "[", r = "]";
    name = name.replace(/\s+/g, k) + d;
    let tstr = k;
    for (let i = 0; i < name.length; i++) {
      let theChar = name.charAt(i);
      if (theChar != d && theChar != l && theChar != r) {
        tstr += theChar;
      } else if (newDataObj) {
        if (tstr != k)
          newDataObj = newDataObj[tstr];
        tstr = k;
      }
    }
  }
  if (typeof newDataObj === "undefined" && typeof defaultValue !== "undefined")
    newDataObj = defaultValue;
  return newDataObj;
};
pubfn.setData = function(dataObj, name, value) {
  let dataValue;
  if (typeof value === "object") {
    dataValue = pubfn.copyObject(value);
  } else {
    dataValue = value;
  }
  let regExp = new RegExp("([\\w$-]+)|\\[(:\\d)\\]", "g");
  const patten = name.match(regExp);
  for (let i = 0; i < patten.length - 1; i++) {
    let keyName = patten[i];
    if (typeof dataObj[keyName] !== "object")
      dataObj[keyName] = {};
    dataObj = dataObj[keyName];
  }
  dataObj[patten[patten.length - 1]] = dataValue;
};
pubfn.isNull = function(value) {
  let key = false;
  if (typeof value == "undefined" || Object.prototype.toString.call(value) == "[object Null]" || JSON.stringify(value) == "{}" || JSON.stringify(value) == "[]" || value === "" || JSON.stringify(value) === void 0) {
    key = true;
  }
  return key;
};
pubfn.isNotNull = function(value) {
  return !pubfn.isNull(value);
};
pubfn.isNullOne = function(...strS) {
  let key = false;
  for (let i = 0; i < strS.length; i++) {
    let str = strS[i];
    if (pubfn.isNull(str)) {
      key = true;
      break;
    }
  }
  return key;
};
pubfn.isNullOneByObject = function(obj) {
  let key;
  for (let name in obj) {
    let val = obj[name];
    if (pubfn.isNull(val)) {
      key = name;
      break;
    }
  }
  return key;
};
pubfn.isNullAll = function(...strS) {
  let key = true;
  for (let i = 0; i < strS.length; i++) {
    let str = strS[i];
    if (pubfn.isNotNull(str)) {
      key = false;
      break;
    }
  }
  return key;
};
pubfn.isNotNullAll = function(...strS) {
  return !pubfn.isNullOne(...strS);
};
pubfn.getListItem = function(list, key, value) {
  let item;
  for (let i = 0; i < list.length; i++) {
    if (list[i][key] === value) {
      item = list[i];
      break;
    }
  }
  return item;
};
pubfn.getListIndex = function(list, key, value) {
  let index = -1;
  for (let i = 0; i < list.length; i++) {
    if (list[i][key] === value) {
      index = i;
      break;
    }
  }
  return index;
};
pubfn.getListItemIndex = function(list, key, value) {
  let obj = {};
  let item;
  let index = -1;
  for (let i = 0; i < list.length; i++) {
    if (list[i][key] === value) {
      index = i;
      item = list[i];
      break;
    }
  }
  obj = {
    item,
    index
  };
  return obj;
};
pubfn.arrayToJson = function(list, key) {
  let json = {};
  for (let i in list) {
    let item = list[i];
    json[item[key]] = item;
  }
  return json;
};
pubfn.listToJson = pubfn.arrayToJson;
pubfn.arrayObjectGetArray = function(list, key) {
  return list.map((obj) => {
    return obj[key];
  });
};
pubfn.random = function(length, range, arr) {
  let s;
  if (pubfn.isNull(arr)) {
    s = pubfn.randomFn(length, range);
  } else {
    let i = 0;
    let maxForCount = 1e5;
    do {
      i++;
      s = pubfn.randomFn(length, range);
    } while (arr.indexOf(s) > -1 && i < maxForCount);
    if (i === maxForCount) {
      s = void 0;
    }
  }
  return s;
};
pubfn.randomFn = function(length, range) {
  let s = "";
  let list = "123456789";
  if (pubfn.isNotNull(range)) {
    if (range == "a-z,0-9") {
      range = "abcdefghijklmnopqrstuvwxyz0123456789";
    } else if (range == "A-Z,0-9") {
      range = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    } else if (range == "a-z,A-Z,0-9" || range == "A-Z,a-z,0-9") {
      range = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    }
    list = range;
  }
  for (let i = 0; i < length; i++) {
    let code = list[Math.floor(Math.random() * list.length)];
    s += code;
  }
  return s;
};
pubfn.stringIdToNumberId = function(str, length) {
  let s = "";
  let list = "0123456789";
  for (let i = 0; i < length; i++) {
    if (str.length > i) {
      let index = str[i].charCodeAt() % 10;
      s += list[index];
    } else {
      s = "0" + s;
    }
  }
  return s;
};
pubfn.hidden = function(str = "", first = 0, last = 0) {
  let len = str.length - first - last;
  let xing = "";
  for (let i = 0; i < len; i++) {
    xing += "*";
  }
  return str.substring(0, first) + xing + str.substring(str.length - last);
};
pubfn.checkArrayIntersection = function(arr1 = [], arr2 = []) {
  let checkKey = false;
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) > -1) {
      checkKey = true;
    }
  }
  return checkKey;
};
pubfn.checkDataExpText = function(data2 = {}, expText) {
  expText = expText.replace(new RegExp("\\s", "g"), "");
  let orArr = expText.split("||");
  let checkKey = false;
  for (let index1 = 0; index1 < orArr.length; index1++) {
    let orItem = orArr[index1];
    let andArr = orItem.split("&&");
    let itemKey = true;
    for (let index2 = 0; index2 < andArr.length; index2++) {
      let andItem = andArr[index2];
      if (andItem.indexOf("!=") > -1) {
        let andItemArr = andItem.split("!=");
        let key = andItemArr[0];
        let value = andItemArr[1];
        itemKey = data2[key] != value ? true : false;
      } else if (andItem.indexOf("==") > -1) {
        let andItemArr = andItem.split("==");
        let key = andItemArr[0];
        let value = andItemArr[1];
        itemKey = typeof data2[key] !== "undefined" && data2[key].toString() == value ? true : false;
      } else if (andItem.indexOf(">=") > -1) {
        let andItemArr = andItem.split(">=");
        let key = andItemArr[0];
        let value = andItemArr[1];
        if (isNaN(value)) {
          itemKey = typeof data2[key] !== "undefined" && data2[key].toString() >= value ? true : false;
        } else {
          itemKey = typeof data2[key] !== "undefined" && data2[key] >= Number(value) ? true : false;
        }
      } else if (andItem.indexOf(">") > -1) {
        let andItemArr = andItem.split(">");
        let key = andItemArr[0];
        let value = andItemArr[1];
        if (isNaN(value)) {
          itemKey = typeof data2[key] !== "undefined" && data2[key].toString() > value ? true : false;
        } else {
          itemKey = typeof data2[key] !== "undefined" && data2[key] > Number(value) ? true : false;
        }
      } else if (andItem.indexOf("<=") > -1) {
        let andItemArr = andItem.split("<=");
        let key = andItemArr[0];
        let value = andItemArr[1];
        if (isNaN(value)) {
          itemKey = typeof data2[key] !== "undefined" && data2[key].toString() <= value ? true : false;
        } else {
          itemKey = typeof data2[key] !== "undefined" && data2[key] <= Number(value) ? true : false;
        }
      } else if (andItem.indexOf("<") > -1) {
        let andItemArr = andItem.split("<");
        let key = andItemArr[0];
        let value = andItemArr[1];
        if (isNaN(value)) {
          itemKey = typeof data2[key] !== "undefined" && data2[key].toString() < value ? true : false;
        } else {
          itemKey = typeof data2[key] !== "undefined" && data2[key] < Number(value) ? true : false;
        }
      } else if (andItem.indexOf("{in}") > -1) {
        let andItemArr = andItem.split("{in}");
        let key = andItemArr[0];
        let value = andItemArr[1];
        if (Array.isArray(data2[key])) {
          let index = data2[key].findIndex((item) => {
            return item.toString() === value.toString();
          });
          itemKey = index > -1 ? true : false;
        } else {
          itemKey = false;
        }
      } else if (andItem.indexOf("{nin}") > -1) {
        let andItemArr = andItem.split("{nin}");
        let key = andItemArr[0];
        let value = andItemArr[1];
        if (Array.isArray(data2[key])) {
          let index = data2[key].findIndex((item) => {
            return item.toString() === value.toString();
          });
          itemKey = index < 0 ? true : false;
        } else {
          itemKey = false;
        }
      } else {
        let andItemArr = andItem.split("=");
        let key = andItemArr[0];
        let value = andItemArr[1];
        itemKey = typeof data2[key] !== "undefined" && data2[key].toString() == value ? true : false;
      }
      if (!itemKey) {
        break;
      }
    }
    if (itemKey) {
      checkKey = true;
      break;
    }
  }
  return checkKey;
};
pubfn.isArray = function(value) {
  return Object.prototype.toString.call(value) === "[object Array]" ? true : false;
};
pubfn.isObject = function(value) {
  return Object.prototype.toString.call(value) === "[object Object]" ? true : false;
};
pubfn.calcFreights = function(freightItem, weight) {
  let freightRes = vk.pubfn.calcFreightDetail(freightItem, weight);
  return freightRes.total_amount;
};
pubfn.calcFreightDetail = function(freightItem, weight) {
  let {
    first_weight,
    first_weight_price,
    continuous_weight,
    continuous_weight_price,
    max_weight
  } = freightItem;
  if (!max_weight)
    max_weight = 1e9;
  let originalWeight = weight;
  let first_weight_count = 0;
  let packagesSurplusWeight = max_weight;
  let first_weight_key = false;
  let continuous_weight_count = 0;
  while (weight > 0) {
    if (!first_weight_key) {
      first_weight_key = true;
      first_weight_count++;
      packagesSurplusWeight = max_weight;
      weight -= first_weight;
      packagesSurplusWeight -= first_weight;
    } else {
      continuous_weight_count++;
      weight -= continuous_weight;
      packagesSurplusWeight -= continuous_weight;
    }
    if (packagesSurplusWeight <= 0) {
      first_weight_key = false;
    }
  }
  let total_amount = first_weight_price * first_weight_count + continuous_weight_price * continuous_weight_count;
  let res = {
    weight: originalWeight,
    first_weight,
    first_weight_price,
    first_weight_count,
    continuous_weight,
    continuous_weight_price,
    continuous_weight_count,
    first_weight_amount: first_weight_count * first_weight_price,
    continuous_weight_amount: continuous_weight_price * continuous_weight_count,
    total_amount,
    formula: `${first_weight_price} * ${first_weight_count} + ${continuous_weight_price} * ${continuous_weight_count} = ${total_amount}`
  };
  return res;
};
pubfn.getNewObject = function(obj, keys) {
  let selectedObj = pubfn.copyObject(obj);
  let newObject = {};
  if (keys && keys.length > 0) {
    for (let i in keys) {
      let key = keys[i];
      if (pubfn.isNotNull(selectedObj[key])) {
        newObject[key] = selectedObj[key];
      }
    }
  } else {
    newObject = selectedObj;
  }
  return newObject;
};
pubfn.deleteObjectKeys = function(data2, deleteKeys = []) {
  var newData = {};
  if (data2) {
    for (let key in data2) {
      if (deleteKeys.indexOf(key) == -1) {
        newData[key] = data2[key];
      }
    }
  }
  return newData;
};
pubfn.arrayToTree = pubfn.treeUtil.arrayToTree;
pubfn.treeToArray = pubfn.treeUtil.treeToArray;
pubfn.wildcardTestOne = function(text, expText) {
  if (!expText)
    return false;
  let regExpText = expText.replace(new RegExp("\\*"), "(.*)");
  let startText = expText.indexOf("*") !== 0 ? "^" : "";
  let endText = expText[expText.length - 1] !== "*" ? "$" : "";
  let regExp = new RegExp(startText + regExpText + endText);
  return regExp.test(text);
};
pubfn.wildcardTest = function(text, expText) {
  let matchNum = 0;
  if (typeof expText === "string") {
    if (pubfn.wildcardTestOne(text, expText)) {
      matchNum++;
    }
  } else if (typeof expText === "object") {
    for (let i = 0; i < expText.length; i++) {
      let expTextItem = expText[i];
      if (pubfn.wildcardTestOne(text, expTextItem)) {
        matchNum++;
      }
    }
  }
  return matchNum;
};
pubfn.regExpTestOne = function(text, expText) {
  if (!expText)
    return false;
  let regExp = new RegExp(expText);
  return regExp.test(text);
};
pubfn.regExpTest = function(text, expText) {
  let matchNum = 0;
  if (typeof expText === "string") {
    if (pubfn.regExpTestOne(text, expText)) {
      matchNum++;
    }
  } else if (typeof expText === "object") {
    for (let i = 0; i < expText.length; i++) {
      let expTextItem = expText[i];
      if (pubfn.regExpTestOne(text, expTextItem)) {
        matchNum++;
      }
    }
  }
  return matchNum;
};
pubfn.createOrderNo = function(prefix = "", num = 25) {
  let fullTime = pubfn.getFullTime(new Date(), 1);
  fullTime = fullTime.substring(2);
  let randomNum = num - (prefix + fullTime).length;
  return prefix + fullTime + pubfn.random(randomNum);
};
const isSnakeCase = new RegExp("_(\\w)", "g");
const isCamelCase = new RegExp("[A-Z]", "g");
function parseObjectKeys(obj, type) {
  let parserReg;
  let parser;
  switch (type) {
    case "snake2camel":
      parser = pubfn.snake2camel;
      parserReg = isSnakeCase;
      break;
    case "camel2snake":
      parser = pubfn.camel2snake;
      parserReg = isCamelCase;
      break;
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (parserReg.test(key)) {
        const keyCopy = parser(key);
        obj[keyCopy] = obj[key];
        delete obj[key];
        if (Object.prototype.toString.call(obj[keyCopy]) === "[object Object]") {
          obj[keyCopy] = parseObjectKeys(obj[keyCopy], type);
        } else if (Array.isArray(obj[keyCopy])) {
          obj[keyCopy] = obj[keyCopy].map((item) => {
            return parseObjectKeys(item, type);
          });
        }
      }
    }
  }
  return obj;
}
pubfn.snake2camel = function(value) {
  return value.replace(isSnakeCase, (_, c) => c ? c.toUpperCase() : "");
};
pubfn.camel2snake = function(value) {
  return value.replace(isCamelCase, (str) => "_" + str.toLowerCase());
};
pubfn.snake2camelJson = function(obj) {
  return parseObjectKeys(obj, "snake2camel");
};
pubfn.camel2snakeJson = function(obj) {
  return parseObjectKeys(obj, "camel2snake");
};
pubfn.string2Number = function(obj, option = {}) {
  const type = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  switch (type) {
    case "string":
      if (obj && !isNaN(obj)) {
        let {
          mobile = true,
          idCard = true,
          startFrom0 = true,
          maxLength = 14
        } = option;
        if (obj.length > maxLength) {
          return obj;
        } else if (mobile && pubfn.test(obj, "mobile")) {
          return obj;
        } else if (idCard && pubfn.test(obj, "card")) {
          return obj;
        } else if (startFrom0 && obj.length > 1 && obj.indexOf("0") === 0 && obj.indexOf(".") !== 1) {
          return obj;
        }
        return Number(obj);
      } else {
        return obj;
      }
    case "object":
      const keys = Object.keys(obj);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        obj[key] = pubfn.string2Number(obj[key]);
      }
      return obj;
    case "array":
      for (let i = 0; i < obj.length; i++) {
        obj[i] = pubfn.string2Number(obj[i]);
      }
      return obj;
    default:
      return obj;
  }
};
pubfn.toDecimal = function(val, precision = 0) {
  if (typeof val === "string")
    val = Number(val);
  return parseFloat(val.toFixed(precision));
};
pubfn.getFileType = function(url) {
  let fileType;
  if (pubfn.checkFileSuffix(url, ["png", "jpg", "jpeg", "gif", "bmp", "svg"])) {
    fileType = "image";
  } else if (pubfn.checkFileSuffix(url, ["avi", "mp4", "3gp", "mov", "rmvb", "rm", "flv", "mkv"])) {
    fileType = "video";
  } else if (pubfn.checkFileSuffix(url, ["mp3"])) {
    fileType = "audio";
  } else {
    fileType = "other";
  }
  return fileType;
};
pubfn.getFileSuffix = function(url) {
  let suffix;
  let index = url.lastIndexOf(".");
  if (index > -1) {
    suffix = url.substring(index + 1);
  }
  return suffix;
};
pubfn.checkFileSuffix = function(url, list) {
  let key = false;
  let suffix = pubfn.getFileSuffix(url);
  for (let i = 0; i < list.length; i++) {
    if (list.indexOf(suffix) > -1) {
      key = true;
      break;
    }
  }
  return key;
};
pubfn.dateDiff = function(startTime, suffix = "\u524D") {
  if (!startTime) {
    return "";
  }
  if (typeof startTime === "string" && !isNaN(startTime))
    startTime = Number(startTime);
  if (typeof startTime == "number") {
    if (startTime.toString().length == 10)
      startTime *= 1e3;
    startTime = new Date(startTime);
    startTime = pubfn.getFullTime(startTime);
  }
  if (typeof startTime == "string") {
    startTime = startTime.replace("T", " ");
    startTime = startTime;
    startTime = new Date(startTime.replace(/-/g, "/"));
  }
  var endTime = new Date();
  var nd = 1e3 * 24 * 60 * 60;
  var nh = 1e3 * 60 * 60;
  var nm = 1e3 * 60;
  var ns = 1e3;
  var diff = endTime.getTime() - startTime.getTime();
  var day = Math.floor(diff / nd);
  var hour = Math.floor(diff % nd / nh);
  var min = Math.floor(diff % nd % nh / nm);
  var sec = Math.round(diff % nd % nh % nm / ns);
  var showStr = "1 \u79D2";
  if (day > 0) {
    showStr = day + "\u5929";
  } else if (hour > 0) {
    showStr = hour + "\u5C0F\u65F6";
  } else if (min > 0) {
    showStr = min + "\u5206\u949F";
  } else if (sec > 0) {
    showStr = sec + "\u79D2";
  }
  showStr += suffix;
  return showStr;
};
pubfn.dateDiff2 = function(startTime, str = "1\u79D2") {
  if (!startTime) {
    return "";
  }
  if (typeof startTime === "string" && !isNaN(startTime))
    startTime = Number(startTime);
  if (typeof startTime == "number") {
    if (startTime.toString().length == 10)
      startTime *= 1e3;
    startTime = new Date(startTime);
    startTime = pubfn.getFullTime(startTime);
  }
  if (typeof startTime == "string") {
    startTime = startTime.replace("T", " ");
    startTime = startTime;
    startTime = new Date(startTime.replace(/-/g, "/"));
  }
  var endTime = new Date();
  var nd = 1e3 * 24 * 60 * 60;
  var nh = 1e3 * 60 * 60;
  var nm = 1e3 * 60;
  var ns = 1e3;
  var diff = startTime.getTime() - endTime.getTime();
  var day = Math.floor(diff / nd);
  var hour = Math.floor(diff % nd / nh);
  var min = Math.floor(diff % nd % nh / nm);
  var sec = Math.round(diff % nd % nh % nm / ns);
  var showStr = str;
  if (day > 0) {
    showStr = day + "\u5929";
  } else if (hour > 0) {
    showStr = hour + "\u5C0F\u65F6";
  } else if (min > 0) {
    showStr = min + "\u5206\u949F";
  } else if (sec > 0) {
    showStr = sec + "\u79D2";
  }
  return showStr;
};
pubfn.numStr = function(n) {
  if (typeof n == "string") {
    n = parseFloat(n);
  }
  var str = n;
  if (n < 1e3) {
    str = n;
  } else if (n < 1e4) {
    var n1 = Math.floor(n / 100);
    str = n1 / 10 + "\u5343";
  } else if (n < 1e6) {
    var n1 = Math.floor(n / 1e3);
    str = n1 / 10 + "\u4E07";
  } else if (n < 1e7) {
    var n1 = Math.floor(n / 1e6);
    str = n1 + "\u767E\u4E07";
  } else if (n < 1e8) {
    var n1 = Math.floor(n / 1e7);
    str = n1 + "\u5343\u4E07";
  } else if (n >= 1e8) {
    var n1 = Math.floor(n / 1e7);
    str = n1 / 10 + "\u4EBF";
  }
  return str;
};
pubfn.priceFilter = function(money, defaultValue = "") {
  if (pubfn.isNull(money)) {
    return defaultValue;
  }
  if (isNaN(money)) {
    return money;
  }
  if (typeof money == "string") {
    money = parseFloat(money);
  }
  return (money / 100).toFixed(2);
};
pubfn.priceLeftFilter = function(n) {
  let s = "";
  if (n) {
    s = pubfn.priceFilter(n).split(".")[0];
  }
  return s;
};
pubfn.priceRightFilter = function(n) {
  let s = "";
  if (n) {
    s = pubfn.priceFilter(n).split(".")[1];
  }
  return s;
};
pubfn.percentageFilter = function(value, needShowSymbol = true, defaultValue = "") {
  if (pubfn.isNull(value)) {
    return defaultValue;
  }
  if (isNaN(value)) {
    return value;
  }
  if (typeof value == "string") {
    value = parseFloat(value);
  }
  value = parseFloat((value * 100).toFixed(2));
  if (needShowSymbol) {
    value += "%";
  }
  return value;
};
pubfn.discountFilter = function(value, needShowSymbol = true, defaultValue = "") {
  if (pubfn.isNull(value)) {
    return defaultValue;
  }
  if (isNaN(value)) {
    return value;
  }
  if (typeof value == "string") {
    value = parseFloat(value);
  }
  value = parseFloat((value * 10).toFixed(2));
  if (value > 10) {
    return "\u6298\u6263\u4E0D\u53EF\u4EE5\u5927\u4E8E\u539F\u4EF7";
  }
  if (value == 10) {
    return "\u539F\u4EF7";
  }
  if (value == 0) {
    return "\u514D\u8D39";
  }
  if (value < 0) {
    return "\u6298\u6263\u4E0D\u53EF\u4EE5\u5C0F\u4E8E0";
  }
  if (needShowSymbol) {
    value += " \u6298";
  }
  return value;
};
pubfn.toTimeLong = function(dateString) {
  if (!dateString) {
    return "";
  }
  dateString = dateString.substring(0, 19);
  dateString = dateString.replace(new RegExp(/-/, "g"), "/");
  let time = new Date(dateString).getTime();
  if (isNaN(time)) {
    time = "";
  }
  return time;
};
pubfn.calcSize = function(length = 0, arr, ary, precision = 2, showType = "auto") {
  length = parseFloat(length);
  let size = 0;
  let type = "";
  if (length < ary || arr.length <= 1) {
    type = arr[0];
    size = parseFloat(length.toFixed(precision));
  } else {
    for (let i = 1; i < arr.length; i++) {
      let currentType = arr[i];
      length = length / ary;
      if (showType === "auto") {
        if (length < ary) {
          type = currentType;
          size = parseFloat(length.toFixed(precision));
          break;
        }
      } else {
        if (showType === currentType) {
          type = currentType;
          size = parseFloat(length.toFixed(precision));
          break;
        }
      }
    }
  }
  return {
    size,
    type,
    title: size + " " + type
  };
};
pubfn.getListData2 = function(obj = {}) {
  let vk2 = common_vendor.index.vk;
  let {
    that,
    listName,
    listKey = "rows",
    url,
    dataPreprocess,
    idKeyName = "_id"
  } = obj;
  if (listName)
    listKey = listName;
  let queryForm1 = that.queryForm1 || that.queryForm;
  that.loading = true;
  let hasMore = true;
  if (queryForm1.pagination.pageIndex === 1) {
    that.firstLoading = true;
  }
  vk2.callFunction({
    url,
    data: queryForm1,
    success: function(data2) {
      let list = data2[listKey] || [];
      if (typeof dataPreprocess == "function") {
        list = dataPreprocess(list);
      }
      if (queryForm1.pagination.pageIndex > 1) {
        if (list.length == 0) {
          hasMore = false;
          queryForm1.pagination.pageIndex--;
          list = that.data.list;
        } else {
          if (list.length < queryForm1.pagination.pageSize) {
            hasMore = false;
          }
          list = vk2.pubfn.arr_concat(that.data.list, list, idKeyName);
        }
      } else if (queryForm1.pagination.pageIndex == 1) {
        if (list.length < queryForm1.pagination.pageSize) {
          hasMore = false;
        }
        if (list.length == 0) {
          that.state.isEmpty = true;
        } else {
          that.state.isEmpty = false;
        }
      }
      if (typeof data2.hasMore !== "undefined") {
        hasMore = data2.hasMore;
      }
      data2 = __spreadProps(__spreadValues({}, data2), {
        total: data2.total,
        list,
        hasMore,
        pageIndex: data2.pageIndex,
        pageSize: data2.pageSize
      });
      that.state.loadmore = hasMore ? "loadmore" : "nomore";
      that.data = vk2.pubfn.objectAssign(that.data, data2);
      if (typeof obj.success == "function")
        obj.success(data2);
    },
    fail: function(err) {
      that.state.loadmore = "loadmore";
      if (queryForm1.pagination.pageIndex > 1) {
        queryForm1.pagination.pageIndex--;
      }
      if (typeof obj.fail == "function") {
        obj.fail(data);
      } else if (err && err.msg) {
        vk2.toast(err.msg, "none");
      }
    },
    complete: function(res) {
      that.loading = false;
      if (queryForm1.pagination.pageIndex === 1) {
        that.state.firstLoading = false;
      }
      if (typeof obj.complete == "function")
        obj.complete(res);
    }
  });
};
pubfn.getListData = function(obj = {}) {
  var {
    that,
    listName,
    listKey = "rows",
    url,
    dataPreprocess,
    loading
  } = obj;
  let vk2 = common_vendor.index.vk;
  if (listName)
    listKey = listName;
  var { form1 = {}, data: data2 = {} } = that;
  var { pageKey = true } = data2;
  if (!form1.pageIndex)
    form1.pageIndex = 1;
  if (!form1.pageSize)
    form1.pageSize = 20;
  var addTime = form1.addTime;
  var endTime = form1.endTime;
  if (endTime)
    endTime += " 23:59:59";
  if (!pageKey && form1.pageIndex > 1) {
    form1.pageIndex--;
    return false;
  }
  if (addTime)
    form1.addTimeLong = pubfn.toTimeLong(addTime);
  if (endTime)
    form1.endTimeLong = pubfn.toTimeLong(endTime);
  if (obj.data && JSON.stringify(obj.data) != "{}") {
    pubfn.objectAssign(form1, obj.data);
  }
  let title = obj.title;
  if (typeof obj.title == "undefined" && !loading) {
    title = form1.pageIndex == 1 ? "\u8BF7\u6C42\u4E2D..." : "";
  }
  vk2.callFunction({
    url,
    data: form1,
    title,
    loading,
    success: function(data3) {
      var list = data3[listKey] || [];
      if (typeof dataPreprocess == "function") {
        list = dataPreprocess(list);
      }
      if (form1.pageIndex > 1) {
        if (list.length == 0) {
          pageKey = false;
          form1.pageIndex--;
          list = that.data.list;
        } else {
          if (list.length < form1.pageSize) {
            pageKey = false;
          }
          let oldList = that.data.list;
          list = pubfn.arr_concat(oldList, list, "_id");
        }
      } else if (form1.pageIndex == 1) {
        if (list.length < form1.pageSize) {
          pageKey = false;
        }
      }
      data3 = __spreadProps(__spreadValues({}, data3), {
        total: data3.total,
        list,
        pageKey,
        loadmore: pageKey ? "loadmore" : "nomore"
      });
      that.data = pubfn.objectAssign(that.data, data3);
      if (typeof obj.success == "function")
        obj.success(data3);
    },
    fail: function(err) {
      if (form1.pageIndex > 1) {
        form1.pageIndex--;
      }
      if (typeof obj.fail == "function") {
        obj.fail(data2);
      } else if (err && err.msg) {
        vk2.toast(err.msg, "none");
      }
    },
    complete: function(res) {
      if (typeof obj.complete == "function")
        obj.complete(res);
    }
  });
};
pubfn.getComponentsDynamicData = function(obj = {}) {
  var {
    that,
    keyName = "componentsDynamic",
    title,
    url = "plugs/components_dynamic/client/pub/getComponentsDynamicData",
    ids
  } = obj;
  let vk2 = common_vendor.index.vk;
  let form1 = {
    ids
  };
  if (obj.data && JSON.stringify(obj.data) != "{}") {
    pubfn.objectAssign(form1, obj.data);
  }
  let cacheKey = "pub-componentsDynamic";
  let cacheData = common_vendor.index.getStorageSync(cacheKey) || {};
  let cacheDataKey = JSON.stringify(ids);
  if (cacheData[cacheDataKey]) {
    that[keyName] = cacheData[cacheDataKey];
  }
  vk2.callFunction({
    url,
    data: form1,
    title,
    success: function(data2) {
      if (JSON.stringify(cacheData[cacheDataKey]) !== JSON.stringify(data2.componentsDynamic)) {
        that[keyName] = data2.componentsDynamic;
        cacheData[cacheDataKey] = data2.componentsDynamic;
        common_vendor.index.setStorageSync(cacheKey, cacheData);
      }
      if (typeof obj.success == "function")
        obj.success(data2);
    },
    fail: function(err) {
      console.error(err);
      if (typeof obj.fail == "function")
        obj.fail(data);
    },
    complete: function() {
      if (typeof obj.complete == "function")
        obj.complete(data);
    }
  });
};
pubfn.getPageFullPath = function(url) {
  let fullPath = url;
  if (fullPath.indexOf("/") !== 0) {
    if (fullPath.indexOf("./") === 0) {
      fullPath = fullPath.substring(2);
    }
    let urlSplit = fullPath.split("../");
    let level = urlSplit.length;
    let urlEnd = urlSplit[level - 1];
    let pages = getCurrentPages();
    let currentPage = pages[pages.length - 1];
    let currentPagePath = currentPage.route;
    let urlArr = currentPagePath.split("/");
    let urlSplicing = "";
    for (let i = 0; i < urlArr.length - level; i++) {
      urlSplicing += urlArr[i] + "/";
    }
    fullPath = urlSplicing + urlEnd;
    if (fullPath.indexOf("/") != 0) {
      fullPath = "/" + fullPath;
    }
  }
  return fullPath;
};
pubfn.getPlatform = function() {
  let platform;
  platform = "mp-weixin";
  return platform;
};
pubfn.getCurrentPage = function() {
  let res = {};
  let pages = getCurrentPages();
  let page = pages[pages.length - 1];
  if (page.route.indexOf("/") == 0)
    page.route = page.route.substring(1);
  let pagePath = `/${page.route}`;
  let fullPath = `/${page.route}`;
  if (page.$page && typeof page.$page.options === "object") {
    let optionsStr = pubfn.queryParams(page.$page.options);
    fullPath = pagePath + optionsStr;
  }
  res.fullPath = fullPath;
  res.pagePath = pagePath;
  res.options = page.$page.options;
  res.route = page.route;
  res.$vm = page.$vm;
  return res;
};
pubfn.getCurrentPageRoute = function(removeSlash) {
  let pages = getCurrentPages();
  let page = pages[pages.length - 1];
  if (removeSlash) {
    return page.route;
  } else {
    return "/" + page.route;
  }
};
pubfn.fileToBase64 = function(obj = {}) {
  let { file } = obj;
  return new Promise(function(resolve, reject2) {
    common_vendor.index.getFileSystemManager().readFile({
      filePath: file.path,
      encoding: "base64",
      success: function(res) {
        let base64 = res.data;
        if (base64.indexOf(";base64,") == -1) {
          base64 = "data:image/jpeg;base64," + base64;
        }
        if (obj.success)
          obj.success(base64);
        if (obj.complete)
          obj.complete(base64);
        resolve(base64);
      },
      fail: function(err) {
        if (obj.fail)
          obj.fail(err);
        reject2(err);
      },
      complete: obj.complete
    });
  });
};
pubfn.base64ToFile = function(obj = {}) {
  let {
    base64 = "",
    filePath
  } = obj;
  let extName = base64.split(",")[0].match(/data\:\S+\/(\S+);/);
  if (extName) {
    extName = extName[1];
  } else {
    reject(new Error("base64 error"));
  }
  if (!filePath) {
    filePath = pubfn.random(32, "abcdefghijklmnopqrstuvwxyz0123456789") + "." + extName;
  }
  let index = base64.indexOf("base64,");
  let base64Data = base64;
  if (index > -1) {
    base64Data = base64.substring(base64.indexOf("base64,") + 7);
  }
  let savePath;
  return new Promise(function(resolve, reject2) {
    savePath = wx.env.USER_DATA_PATH + "/" + filePath;
    let fs = common_vendor.index.getFileSystemManager();
    fs.writeFile({
      filePath: savePath,
      data: base64Data,
      encoding: "base64",
      success: function(res) {
        let file = {
          path: savePath,
          lastModifiedDate: new Date(),
          name: filePath
        };
        if (obj.success)
          obj.success(file);
        resolve(file);
      },
      fail: function(res) {
        if (obj.fail)
          obj.fail(res);
        reject2(res);
      },
      complete: obj.complete
    });
  });
};
pubfn.base64toBlob = function(base64) {
  let arr = base64.split(",");
  let mime = arr[0].match(/:(.*?);/)[1];
  let bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};
pubfn.blobToFile = function(blob, fileName) {
  blob.lastModifiedDate = new Date();
  blob.name = fileName;
  blob.path = URL.createObjectURL(blob);
  return blob;
};
pubfn.requestSubscribeMessage = function(obj) {
  return common_vendor.index.requestSubscribeMessage(obj);
};
pubfn.checkLogin = function(obj = {}) {
  let vk2 = common_vendor.index.vk;
  let loginUrl = vk2.getConfig("login.url");
  try {
    let url;
    try {
      url = obj.url || vk2.pubfn.getCurrentPageRoute();
    } catch (err) {
      url = vk2.getConfig("index.url") || "/pages/index/index";
    }
    vk2.navigate.checkNeedLogin({
      url,
      success: function(res) {
        if (res.needLogin) {
          url = vk2.pubfn.getPageFullPath(url);
          vk2.navigate.originalPage = { url };
          if (obj.isOnLaunch)
            vk2.navigate.isOnLaunchToLogin = true;
          common_vendor.index.reLaunch({
            url: loginUrl,
            success: () => {
              setTimeout(() => {
                common_vendor.index.hideHomeButton();
              }, 400);
            }
          });
        } else {
          vk2.navigate.originalPage = null;
        }
      }
    });
  } catch (err) {
    console.error("catch", err);
    common_vendor.index.reLaunch({
      url: loginUrl
    });
    common_vendor.index.hideHomeButton();
  }
};
pubfn.getLocalFilePath = function(path) {
  if (path.indexOf("_www") === 0 || path.indexOf("_doc") === 0 || path.indexOf("_documents") === 0 || path.indexOf("_downloads") === 0) {
    return path;
  }
  if (path.indexOf("file://") === 0) {
    return path;
  }
  if (path.indexOf("/storage/emulated/0/") === 0) {
    return path;
  }
  if (path.indexOf("/") === 0 && typeof plus !== "undefined") {
    let localFilePath = plus.io.convertAbsoluteFileSystem(path);
    if (localFilePath !== path) {
      return localFilePath;
    } else {
      path = path.substr(1);
    }
  }
  return "_www/" + path;
};
pubfn.getLocaleList = function() {
  let localeList = [
    { value: "zh-Hans", label: "\u7B80\u4F53\u4E2D\u6587" },
    { value: "zh-Hant", label: "\u7E41\u9AD4\u4E2D\u6587" },
    { value: "en", label: "English" }
  ];
  return localeList;
};
pubfn.getLocale = function() {
  let localeValue;
  if (typeof common_vendor.index.getLocale === "function") {
    localeValue = common_vendor.index.getLocale();
  } else {
    localeValue = "zh-Hans";
  }
  let localeObj = {
    "zh_CN": "zh-Hans",
    "zh_HK": "zh-Hant",
    "zh_MO": "zh-Hant",
    "zh_SG": "zh-Hans",
    "zh_TW": "zh-Hant"
  };
  if (localeObj[localeValue])
    localeValue = localeObj[localeValue];
  return localeValue;
};
pubfn.getLocaleObject = function() {
  let value = pubfn.getLocale();
  let list = pubfn.getLocaleList();
  return pubfn.getListItem(list, "value", value);
};
pubfn.setLocale = function(...e) {
  return common_vendor.index.setLocale(...e);
};
pubfn.objectAssignForVue = function(obj1, obj2, that) {
  for (let key in obj2) {
    that.$set(obj1, key, obj2[key]);
  }
};
exports.pubfn = pubfn;
