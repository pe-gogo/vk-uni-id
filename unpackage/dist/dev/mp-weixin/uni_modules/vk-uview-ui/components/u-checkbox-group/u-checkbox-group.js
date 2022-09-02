"use strict";
var uni_modules_vkUviewUi_libs_util_emitter = require("../../libs/util/emitter.js");
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-checkbox-group",
  emits: ["update:modelValue", "input", "change"],
  mixins: [uni_modules_vkUviewUi_libs_util_emitter.Emitter],
  props: {
    value: {
      type: [String, Number, Array, Boolean],
      default: ""
    },
    modelValue: {
      type: [String, Number, Array, Boolean],
      default: ""
    },
    max: {
      type: [Number, String],
      default: 999
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [Boolean, String],
      default: ""
    },
    labelDisabled: {
      type: Boolean,
      default: false
    },
    shape: {
      type: String,
      default: "square"
    },
    activeColor: {
      type: String,
      default: "#2979ff"
    },
    size: {
      type: [String, Number],
      default: 34
    },
    width: {
      type: String,
      default: "auto"
    },
    wrap: {
      type: Boolean,
      default: false
    },
    iconSize: {
      type: [String, Number],
      default: 20
    }
  },
  data() {
    return {
      values: [],
      uFromData: {
        inputAlign: "left"
      }
    };
  },
  created() {
    this.children = [];
  },
  mounted() {
    let parent = this.$u.$parent.call(this, "u-form");
    if (parent) {
      Object.keys(this.uFromData).map((key) => {
        this.uFromData[key] = parent[key];
      });
    }
  },
  methods: {
    emitEvent(obj) {
      let values = this.values || [];
      if (obj.value) {
        let index = values.indexOf(obj.name);
        if (index === -1) {
          values.push(obj.name);
        }
      } else {
        let index = values.indexOf(obj.name);
        if (index > -1) {
          values.splice(index, 1);
        }
      }
      this.$emit("change", values);
      this.$emit("input", values);
      this.$emit("update:modelValue", values);
      setTimeout(() => {
        this.dispatch("u-form-item", "onFieldChange", values);
      }, 60);
    },
    _emitEvent(obj) {
      let values = this.values || [];
      if (obj.value) {
        let index = values.indexOf(obj.name);
        if (index === -1) {
          values.push(obj.name);
        }
      } else {
        let index = values.indexOf(obj.name);
        if (index > -1) {
          values.splice(index, 1);
        }
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n($data.uFromData.inputAlign == "right" ? "flex-end" : "")
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c836ad2a"], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/uni_modules/vk-uview-ui/components/u-checkbox-group/u-checkbox-group.vue"]]);
wx.createComponent(Component);
