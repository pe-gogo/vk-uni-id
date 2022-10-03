"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "Modal",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    custom: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: "84%"
    },
    padding: {
      type: String,
      default: "40rpx"
    },
    radius: {
      type: String,
      default: "24rpx"
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#999"
    },
    size: {
      type: Number,
      default: 28
    },
    shape: {
      type: String,
      default: "square"
    },
    button: {
      type: Array,
      default: function() {
        return [{
          text: "\u53D6\u6D88",
          type: "red",
          plain: true
        }, {
          text: "\u786E\u5B9A",
          type: "red",
          plain: false
        }];
      }
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    fadein: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick(e) {
      if (!this.show)
        return;
      const dataset = e.currentTarget.dataset;
      this.$emit("click", {
        index: Number(dataset.index)
      });
    },
    handleClickCancel() {
      if (!this.maskClosable)
        return;
      this.$emit("cancel");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.custom
  }, $props.custom ? {} : common_vendor.e({
    b: $props.title
  }, $props.title ? {
    c: common_vendor.t($props.title)
  } : {}, {
    d: common_vendor.n($props.title ? "" : "mtop"),
    e: $props.color,
    f: $props.size + "rpx",
    g: common_vendor.f($props.button, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text || "\u786E\u5B9A"),
        b: common_vendor.n("" + (item.type || "primary") + (item.plain ? "-outline" : "")),
        c: common_vendor.n("btn-" + (item.size || "default")),
        d: "" + (item.plain ? "outline" : item.type || "primary") + "-hover",
        e: index,
        f: index
      };
    }),
    h: common_vendor.n($props.button.length != 2 ? "btn-width" : ""),
    i: common_vendor.n($props.button.length > 2 ? "mbtm" : ""),
    j: common_vendor.n($props.shape == "circle" ? "circle-btn" : ""),
    k: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args)),
    l: common_vendor.n($props.button.length != 2 ? "flex-column" : "")
  }), {
    m: $props.width,
    n: $props.padding,
    o: $props.radius,
    p: common_vendor.n($props.fadein || $props.show ? "modal-normal" : "modal-scale"),
    q: common_vendor.n($props.show ? "modal-show" : ""),
    r: common_vendor.n($props.show ? "mask-show" : ""),
    s: common_vendor.o((...args) => $options.handleClickCancel && $options.handleClickCancel(...args)),
    t: common_vendor.o(() => {
    })
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/components/modal/modal.vue"]]);
wx.createComponent(Component);
