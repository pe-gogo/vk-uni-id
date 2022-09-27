"use strict";
var common_vendor = require("../../../../common/vendor.js");
let systemInfo = common_vendor.index.getSystemInfoSync();
let menuButtonInfo = {};
menuButtonInfo = common_vendor.index.getMenuButtonBoundingClientRect();
const _sfc_main = {
  name: "u-navbar",
  props: {
    height: {
      type: [String, Number],
      default: ""
    },
    backIconColor: {
      type: String,
      default: "#606266"
    },
    backIconName: {
      type: String,
      default: "nav-back"
    },
    backIconSize: {
      type: [String, Number],
      default: "44"
    },
    backText: {
      type: String,
      default: ""
    },
    backTextStyle: {
      type: Object,
      default() {
        return {
          color: "#606266"
        };
      }
    },
    title: {
      type: String,
      default: ""
    },
    titleWidth: {
      type: [String, Number],
      default: "250"
    },
    titleColor: {
      type: String,
      default: "#606266"
    },
    titleBold: {
      type: Boolean,
      default: false
    },
    titleSize: {
      type: [String, Number],
      default: 32
    },
    isBack: {
      type: [Boolean, String],
      default: true
    },
    background: {
      type: Object,
      default() {
        return {
          background: "#ffffff"
        };
      }
    },
    isFixed: {
      type: Boolean,
      default: true
    },
    immersive: {
      type: Boolean,
      default: false
    },
    borderBottom: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: [String, Number],
      default: ""
    },
    customBack: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      menuButtonInfo,
      statusBarHeight: systemInfo.statusBarHeight
    };
  },
  computed: {
    navbarInnerStyle() {
      let style = {};
      style.height = this.navbarHeight + "px";
      let rightButtonWidth = systemInfo.windowWidth - menuButtonInfo.left;
      style.marginRight = rightButtonWidth + "px";
      return style;
    },
    navbarStyle() {
      let style = {};
      style.zIndex = this.zIndex ? this.zIndex : this.$u.zIndex.navbar;
      Object.assign(style, this.background);
      return style;
    },
    titleStyle() {
      let style = {};
      let rightButtonWidth = systemInfo.windowWidth - menuButtonInfo.left;
      style.left = (systemInfo.windowWidth - common_vendor.index.upx2px(this.titleWidth)) / 2 + "px";
      style.right = rightButtonWidth - (systemInfo.windowWidth - common_vendor.index.upx2px(this.titleWidth)) / 2 + rightButtonWidth + "px";
      style.width = common_vendor.index.upx2px(this.titleWidth) + "px";
      return style;
    },
    navbarHeight() {
      let height = systemInfo.platform == "ios" ? 44 : 48;
      return this.height ? this.height : height;
    }
  },
  created() {
  },
  methods: {
    goBack() {
      if (typeof this.customBack === "function") {
        this.customBack.bind(this.$u.$parent.call(this))();
      } else {
        common_vendor.index.navigateBack();
      }
    }
  }
};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.statusBarHeight + "px",
    b: $props.isBack
  }, $props.isBack ? common_vendor.e({
    c: common_vendor.p({
      name: $props.backIconName,
      color: $props.backIconColor,
      size: $props.backIconSize
    }),
    d: $props.backText
  }, $props.backText ? {
    e: common_vendor.t($props.backText),
    f: common_vendor.s($props.backTextStyle)
  } : {}, {
    g: common_vendor.o((...args) => $options.goBack && $options.goBack(...args))
  }) : {}, {
    h: $props.title
  }, $props.title ? {
    i: common_vendor.t($props.title),
    j: $props.titleColor,
    k: $props.titleSize + "rpx",
    l: $props.titleBold ? "bold" : "normal",
    m: common_vendor.s($options.titleStyle)
  } : {}, {
    n: common_vendor.s($options.navbarInnerStyle),
    o: common_vendor.s($options.navbarStyle),
    p: $props.isFixed ? 1 : "",
    q: $props.borderBottom ? 1 : "",
    r: $props.isFixed && !$props.immersive
  }, $props.isFixed && !$props.immersive ? {
    s: Number($options.navbarHeight) + $data.statusBarHeight + "px"
  } : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-98bbdc6a"], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/uni_modules/vk-uview-ui/components/u-navbar/u-navbar.vue"]]);
wx.createComponent(Component);
