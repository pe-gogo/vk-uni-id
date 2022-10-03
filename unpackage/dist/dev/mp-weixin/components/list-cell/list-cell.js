"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "ListCell",
  props: {
    arrow: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: true
    },
    lineLeft: {
      type: Boolean,
      default: false
    },
    lineRight: {
      type: Boolean,
      default: false
    },
    padding: {
      type: String,
      default: "26rpx 30rpx"
    },
    last: {
      type: Boolean,
      default: false
    },
    radius: {
      type: Boolean,
      default: false
    },
    bgcolor: {
      type: String,
      default: "#fff"
    },
    size: {
      type: Number,
      default: 28
    },
    color: {
      type: String,
      default: "#5A5B5C"
    },
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleClick() {
      this.$emit("click", {
        index: this.index
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.arrow
  }, $props.arrow ? {} : {}, {
    b: $props.arrow ? 1 : "",
    c: $props.last ? 1 : "",
    d: $props.lineLeft ? 1 : "",
    e: $props.lineRight ? 1 : "",
    f: $props.radius ? 1 : "",
    g: $props.hover ? "tui-cell-hover" : "",
    h: $props.bgcolor,
    i: $props.size + "rpx",
    j: $props.color,
    k: $props.padding,
    l: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2c2a1168"], ["__file", "/Users/yaowenya/Documents/HBuilderProjects/vk-uni-id/components/list-cell/list-cell.vue"]]);
wx.createComponent(Component);
