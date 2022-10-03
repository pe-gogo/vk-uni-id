"use strict";
var common_vendor = require("../../../../common/vendor.js");
const localeObj = {
  "zh-Hans": {
    "startText": "\u83B7\u53D6\u9A8C\u8BC1\u7801",
    "changeText": "X\u79D2\u91CD\u65B0\u83B7\u53D6",
    "endText": "\u91CD\u65B0\u83B7\u53D6",
    "tryAgainInSeconds": "\u79D2\u540E\u518D\u91CD\u8BD5",
    "pleaseEnterTheCorrectMobileNumber": "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801",
    "sending": "\u53D1\u9001\u4E2D...",
    "verificationCodeSent": "\u9A8C\u8BC1\u7801\u5DF2\u53D1\u9001",
    "triggerDayLevelFlowControl": "\u89E6\u53D1\u5929\u7EA7\u6D41\u63A7",
    "pleaseTryAgainTomorrow": "\u77ED\u4FE1\u53D1\u9001\u9891\u7E41\uFF0C\u8BF7\u660E\u65E5\u518D\u8BD5\uFF01",
    "pleaseTryAgainIn1Hour": "\u77ED\u4FE1\u53D1\u9001\u9891\u7E41\uFF0C\u8BF7\u8FC71\u5C0F\u65F6\u540E\u518D\u8BD5\uFF01",
    "triggerMinuteLevelFlowControl": "\u89E6\u53D1\u5206\u949F\u7EA7\u6D41\u63A7",
    "pleaseTryAgainLater": "\u77ED\u4FE1\u53D1\u9001\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01"
  },
  "zh-Hant": {
    "startText": "\u7372\u53D6\u9A57\u8B49\u78BC",
    "changeText": "X\u79D2\u91CD\u65B0\u7372\u53D6",
    "endText": "\u91CD\u65B0\u7372\u53D6",
    "tryAgainInSeconds": "\u79D2\u5F8C\u518D\u91CD\u8A66",
    "pleaseEnterTheCorrectMobileNumber": "\u8ACB\u8F38\u5165\u6B63\u78BA\u7684\u624B\u6A5F\u865F\u78BC",
    "sending": "\u767C\u9001\u4E2D...",
    "verificationCodeSent": "\u9A57\u8B49\u78BC\u5DF2\u767C\u9001",
    "triggerDayLevelFlowControl": "\u89F8\u767C\u5929\u7D1A\u6D41\u63A7",
    "pleaseTryAgainTomorrow": "\u77ED\u4FE1\u767C\u9001\u983B\u7E41\uFF0C\u8ACB\u660E\u65E5\u518D\u8A66\uFF01",
    "pleaseTryAgainIn1Hour": "\u77ED\u4FE1\u767C\u9001\u983B\u7E41\uFF0C\u8ACB\u904E1\u5C0F\u6642\u5F8C\u518D\u8A66\uFF01",
    "triggerMinuteLevelFlowControl": "\u89F8\u767C\u5206\u9418\u7D1A\u6D41\u63A7",
    "pleaseTryAgainLater": "\u77ED\u4FE1\u767C\u9001\u983B\u7E41\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\uFF01"
  },
  "en": {
    "startText": "Get code",
    "changeText": "X second reacquire",
    "endText": "Reacquire",
    "tryAgainInSeconds": "Try again in seconds",
    "pleaseEnterTheCorrectMobileNumber": "Please enter the correct mobile number",
    "sending": "Sending...",
    "verificationCodeSent": "Verification code sent",
    "triggerDayLevelFlowControl": "Trigger day level flow control",
    "pleaseTryAgainTomorrow": "SMS sent frequently, please try again tomorrow!",
    "pleaseTryAgainIn1Hour": "SMS sent frequently, please try again in 1 hour",
    "triggerMinuteLevelFlowControl": "Trigger minute level flow control",
    "pleaseTryAgainLater": "SMS sent frequently, please try again later"
  }
};
const _sfc_main = {
  name: "vk-data-verification-code",
  emits: ["start", "end", "change", "send", "codeChange", "error", "success"],
  props: {
    mode: {
      type: String,
      default: "mobile"
    },
    mobile: {
      type: String
    },
    type: {
      type: String,
      default: "login"
    },
    customStyle: {
      type: [String, Object]
    },
    seconds: {
      type: [String, Number],
      default: 60
    },
    startText: {
      type: String,
      default: ""
    },
    changeText: {
      type: String,
      default: ""
    },
    endText: {
      type: String,
      default: ""
    },
    keepRunning: {
      type: Boolean,
      default: false
    },
    uniqueKey: {
      type: String,
      default: ""
    },
    checkUserExist: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      secNum: this.seconds,
      timer: null,
      canGetCode: true,
      tips: "",
      locale: {}
    };
  },
  created() {
    if (typeof vk !== "undefined") {
      let locale = vk.pubfn.getLocale();
      this.locale = localeObj[locale];
    } else {
      this.locale = localeObj["zh-Hans"];
    }
  },
  mounted() {
    this.checkKeepRunning();
  },
  watch: {
    seconds: {
      immediate: true,
      handler(n) {
        this.secNum = n;
      }
    }
  },
  computed: {
    startTextCom() {
      return this.startText || this.locale.startText || "\u83B7\u53D6\u9A8C\u8BC1\u7801";
    },
    changeTextCom() {
      return this.changeText || this.locale.changeText || "X\u79D2\u91CD\u65B0\u83B7\u53D6";
    },
    endTextCom() {
      return this.endText || this.locale.endText || "\u91CD\u65B0\u83B7\u53D6";
    }
  },
  methods: {
    checkKeepRunning() {
      let lastTimestamp = Number(common_vendor.index.getStorageSync(this.uniqueKey + "_$uCountDownTimestamp"));
      if (!lastTimestamp)
        return this.changeEvent(this.startTextCom);
      let nowTimestamp = Math.floor(+new Date() / 1e3);
      if (this.keepRunning && lastTimestamp && lastTimestamp > nowTimestamp) {
        this.secNum = lastTimestamp - nowTimestamp;
        common_vendor.index.removeStorageSync(this.uniqueKey + "_$uCountDownTimestamp");
        this.start();
      } else {
        this.changeEvent(this.startTextCom);
      }
    },
    start() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.$emit("start");
      this.canGetCode = false;
      this.changeEvent(this.changeTextCom.replace(/x|X/, this.secNum));
      this.setTimeToStorage();
      this.timer = setInterval(() => {
        if (--this.secNum) {
          this.changeEvent(this.changeTextCom.replace(/x|X/, this.secNum));
        } else {
          clearInterval(this.timer);
          this.timer = null;
          this.changeEvent(this.endTextCom);
          this.secNum = this.seconds;
          this.$emit("end");
          this.canGetCode = true;
        }
      }, 1e3);
    },
    reset(text) {
      this.canGetCode = true;
      clearInterval(this.timer);
      this.secNum = this.seconds;
      this.changeEvent(text || this.endTextCom);
    },
    changeEvent(text) {
      this.codeChange(text);
      this.$emit("change", text);
    },
    setTimeToStorage() {
      if (!this.keepRunning || !this.timer)
        return;
      if (this.secNum > 0 && this.secNum <= this.seconds) {
        let nowTimestamp = Math.floor(+new Date() / 1e3);
        common_vendor.index.setStorage({
          key: this.uniqueKey + "_$uCountDownTimestamp",
          data: nowTimestamp + Number(this.secNum)
        });
      }
    },
    codeChange(text) {
      this.tips = text;
      this.$emit("codeChange", text);
    },
    sendSmsCode() {
      let that = this;
      let vk2 = common_vendor.index.vk;
      let {
        mobile,
        type,
        canGetCode,
        checkUserExist,
        secNum,
        mode
      } = that;
      if (!canGetCode) {
        vk2.toast(`${secNum}${that.locale.tryAgainInSeconds}`, "none");
        return;
      }
      if (mode === "custom") {
        that.$emit("send", { type });
        return;
      }
      if (!vk2.pubfn.test(mobile, "mobile")) {
        vk2.toast(that.locale.pleaseEnterTheCorrectMobileNumber, "none");
        return;
      }
      that.tips = that.locale.sending;
      vk2.userCenter.sendSmsCode({
        needAlert: false,
        data: {
          mobile,
          type,
          checkUserExist
        },
        success: function(data) {
          vk2.toast(that.locale.verificationCodeSent);
          that.start();
          that.$emit("success", data);
        },
        fail: function(err) {
          that.tips = that.startTextCom;
          if (err.errMsg && err.errMsg.indexOf("\u89E6\u53D1\u5929\u7EA7\u6D41\u63A7") > -1) {
            vk2.alert(that.locale.pleaseTryAgainTomorrow, () => {
              that.$emit("error", err);
            });
          } else if (err.errMsg && err.errMsg.indexOf("\u89E6\u53D1\u5C0F\u65F6\u7EA7\u6D41\u63A7") > -1) {
            vk2.alert(that.locale.pleaseTryAgainIn1Hour, () => {
              that.$emit("error", err);
            });
          } else if (err.errMsg && err.errMsg.indexOf("\u89E6\u53D1\u5206\u949F\u7EA7\u6D41\u63A7") > -1) {
            vk2.alert(that.locale.pleaseTryAgainLater, () => {
              that.$emit("error", err);
            });
          } else if (err.msg) {
            vk2.alert(err.msg, () => {
              that.$emit("error", err);
            });
          } else {
            vk2.alert(that.locale.pleaseTryAgainLater, () => {
              that.$emit("error", err);
            });
          }
        }
      });
    }
  },
  beforeUnmount() {
    this.setTimeToStorage();
    clearTimeout(this.timer);
    this.timer = null;
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.tips),
    b: common_vendor.r("d", {
      tips: $data.tips,
      secNum: $data.secNum
    }),
    c: common_vendor.o((...args) => $options.sendSmsCode && $options.sendSmsCode(...args)),
    d: common_vendor.s($props.customStyle)
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/uni_modules/vk-unicloud/components/vk-data-verification-code/vk-data-verification-code.vue"]]);
wx.createComponent(Component);
