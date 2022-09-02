"use strict";
var common_vendor = require("../../common/vendor.js");
var vk = common_vendor.index.vk;
const _sfc_main = {
  data() {
    return {
      form1: {},
      data: {},
      item: {},
      myPosition: {
        longitude: 120.12792,
        latitude: 30.228932
      }
    };
  },
  onLoad(options) {
    vk = common_vendor.index.vk;
    this.init(options);
  },
  methods: {
    init(options) {
      this.getList(true);
    },
    pageTo(url) {
      vk.navigateTo(url);
    },
    add() {
      let that = this;
      vk.callFunction({
        url: "template/db_api/pub/add",
        title: "\u8BF7\u6C42\u4E2D...",
        success(data) {
          vk.alert(JSON.stringify(data));
          that.item = data;
          that.getList();
        }
      });
    },
    adds() {
      let that = this;
      vk.callFunction({
        url: "template/db_api/pub/adds",
        title: "\u8BF7\u6C42\u4E2D...",
        success(data) {
          vk.alert(JSON.stringify(data));
          that.item = data;
          that.getList();
        }
      });
    },
    count() {
      let that = this;
      vk.callFunction({
        url: "template/db_api/pub/count",
        title: "\u8BF7\u6C42\u4E2D...",
        success(data) {
          vk.alert(JSON.stringify(data));
          that.item = data;
        }
      });
    },
    del() {
      let that = this;
      vk.callFunction({
        url: "template/db_api/pub/del",
        title: "\u8BF7\u6C42\u4E2D...",
        success(data) {
          vk.alert(JSON.stringify(data));
          that.item = data;
          that.getList();
        }
      });
    },
    getFirstId() {
      let that = this;
      let id;
      if (that.data && that.data.rows[0] && that.data.rows[0]._id) {
        id = that.data.rows[0]._id;
      }
      return id;
    },
    findById() {
      let that = this;
      let data = {
        _id: that.getFirstId()
      };
      vk.callFunction({
        url: "template/db_api/pub/findById",
        title: "\u8BF7\u6C42\u4E2D...",
        data,
        success(data2) {
          vk.alert(JSON.stringify(data2));
          that.item = data2;
        }
      });
    },
    findByWhereJson() {
      let that = this;
      let data = {
        _id: that.getFirstId()
      };
      vk.callFunction({
        url: "template/db_api/pub/findById",
        title: "\u8BF7\u6C42\u4E2D...",
        data,
        success(data2) {
          vk.alert(JSON.stringify(data2));
          that.item = data2;
        }
      });
    },
    getList(loading) {
      let that = this;
      vk.callFunction({
        url: "template/db_api/pub/select",
        title: loading ? "\u8BF7\u6C42\u4E2D..." : "",
        data: {},
        success(data) {
          that.data = data;
        }
      });
    },
    getList1() {
      let that = this;
      vk.callFunction({
        url: "template/db_api/pub/select",
        title: "\u8BF7\u6C42\u4E2D...",
        data: {},
        success(data) {
          that.data = data;
          vk.alert(JSON.stringify(data));
          that.item = data;
        }
      });
    },
    selects() {
      let that = this;
      vk.callFunction({
        url: "template/db_api/pub/selects",
        title: "\u8BF7\u6C42\u4E2D...",
        data: {},
        success(data) {
          that.data = data;
          vk.alert(JSON.stringify(data));
          that.item = data;
        }
      });
    },
    sample() {
      vk.callFunction({
        url: "template/db_api/pub/sample",
        title: "\u8BF7\u6C42\u4E2D...",
        data: {},
        success(data) {
          if (data.list && data.list[0]) {
            vk.alert(JSON.stringify(data.list[0]));
          }
        }
      });
    },
    update() {
      let that = this;
      let data = {
        _id: that.getFirstId()
      };
      vk.callFunction({
        url: "template/db_api/pub/update",
        title: "\u8BF7\u6C42\u4E2D...",
        data,
        success(data2) {
          vk.alert(JSON.stringify(data2));
          that.item = data2;
          that.getList();
        }
      });
    },
    updateById() {
      let that = this;
      let data = {
        _id: that.getFirstId()
      };
      vk.callFunction({
        url: "template/db_api/pub/updateById",
        title: "\u8BF7\u6C42\u4E2D...",
        data,
        success(data2) {
          vk.alert(JSON.stringify(data2));
          that.item = data2;
          that.getList();
        }
      });
    },
    updateAndReturn() {
      let that = this;
      let data = {
        _id: that.getFirstId()
      };
      vk.callFunction({
        url: "template/db_api/pub/updateAndReturn",
        title: "\u8BF7\u6C42\u4E2D...",
        data,
        success(data2) {
          vk.alert(`\u5F53\u524Dmoney\u7684\u503C\uFF1A${data2.info.money} 
 \u63D0\u793A\uFF1A\u6B64\u4E3A\u539F\u5B50\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u5E94\u7528\u4E8E\u7C7B\u4F3Cid\u81EA\u589E\uFF0C\u6570\u5B57\u81EA\u51CF\u7B49\u4E1A\u52A1\u3002`);
          that.item = data2;
          that.getList();
        }
      });
    },
    groupCount() {
      let that = this;
      let data = {
        _id: that.getFirstId()
      };
      vk.callFunction({
        url: "template/db_api/pub/groupCount",
        title: "\u8BF7\u6C42\u4E2D...",
        data,
        success(data2) {
          vk.alert(JSON.stringify(data2.rows));
          that.item = data2;
          that.getList();
        }
      });
    },
    sum() {
      let that = this;
      vk.callFunction({
        url: "template/db_api/pub/sum",
        title: "\u8BF7\u6C42\u4E2D...",
        success(data) {
          vk.alert(JSON.stringify(data));
          that.item = data;
        }
      });
    },
    avg() {
      let that = this;
      vk.callFunction({
        url: "template/db_api/pub/avg",
        title: "\u8BF7\u6C42\u4E2D...",
        success(data) {
          vk.alert(JSON.stringify(data));
          that.item = data;
        }
      });
    },
    max() {
      let that = this;
      vk.callFunction({
        url: "template/db_api/pub/max",
        title: "\u8BF7\u6C42\u4E2D...",
        success(data) {
          vk.alert(JSON.stringify(data));
          that.item = data;
        }
      });
    },
    min() {
      let that = this;
      vk.callFunction({
        url: "template/db_api/pub/min",
        title: "\u8BF7\u6C42\u4E2D...",
        success(data) {
          vk.alert(JSON.stringify(data));
          that.item = data;
        }
      });
    },
    getGeoList(name) {
      let that = this;
      vk.callFunction({
        url: "template/db_api/pub/geo",
        title: "\u8BF7\u6C42\u4E2D...",
        data: {},
        success(data) {
          that.data = data;
        }
      });
    },
    calcLocation(mbPosition = {}, myPosition = {}) {
      if (myPosition.longitude == void 0 || myPosition.latitude == void 0) {
        return "";
      }
      var res = {};
      var m = 0;
      var km = 0;
      var lng1 = myPosition.longitude;
      var lat1 = myPosition.latitude;
      var lng2 = mbPosition.longitude;
      var lat2 = mbPosition.latitude;
      m = Math.sqrt((lng1 - lng2) * (lng1 - lng2) + (lat1 - lat2) * (lat1 - lat2)) / 180 * Math.PI * 63e5;
      m = m.toFixed(1);
      km = (m / 1e3).toFixed(2);
      if (m >= 1e6) {
        res.str = "\u5F88\u9065\u8FDC";
      } else if (m >= 1e3) {
        res.str = km + " km";
      } else {
        res.str = m + " m";
      }
      res.m = m;
      res.km = km;
      return res;
    },
    calcLocationFn(mbPosition = {}, myPosition = {}) {
      return this.calcLocation(mbPosition, myPosition).km;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.data.rows, (item, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: common_vendor.t(item._id.substring(20)),
        c: common_vendor.t(item.money),
        d: common_vendor.t($options.calcLocationFn(item.position, $data.myPosition)),
        e: item._id
      };
    }),
    b: common_vendor.t($data.data.total),
    c: common_vendor.o(($event) => $options.pageTo("list/list")),
    d: common_vendor.o(($event) => $options.add()),
    e: common_vendor.o(($event) => $options.adds()),
    f: common_vendor.o(($event) => $options.count()),
    g: common_vendor.o(($event) => $options.del()),
    h: common_vendor.o(($event) => $options.findById()),
    i: common_vendor.o(($event) => $options.findByWhereJson()),
    j: common_vendor.o(($event) => $options.getList1()),
    k: common_vendor.o(($event) => $options.selects()),
    l: common_vendor.o(($event) => $options.sample()),
    m: common_vendor.o(($event) => $options.update()),
    n: common_vendor.o(($event) => $options.updateById()),
    o: common_vendor.o(($event) => $options.updateAndReturn()),
    p: common_vendor.o(($event) => $options.groupCount()),
    q: common_vendor.o(($event) => $options.sum()),
    r: common_vendor.o(($event) => $options.avg()),
    s: common_vendor.o(($event) => $options.max()),
    t: common_vendor.o(($event) => $options.min()),
    v: common_vendor.o(($event) => $options.getGeoList()),
    w: common_vendor.t(JSON.stringify($data.item))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/aotu/Documents/HBuilderProjects/vk-uni-id/pages_template/db-test/db-test.vue"]]);
wx.createPage(MiniProgramPage);
