'use strict';
var vk; // 全局vk实例
// 涉及的表名
const dbName = {
	categories: "opendb-mall-categories", // 商品类别表
	goods:"opendb-mall-goods"
};

var db = uniCloud.database(); // 全局数据库引用
var _ = db.command; // 数据库操作符
var $ = _.aggregate; // 聚合查询操作符
/**
 * 权限注意：访问以下链接查看
 * 文档地址：https://vkdoc.fsq.pub/client/uniCloud/cloudfunctions/cloudObject.html#内置权限
 */
var cloudObject = {
	isCloudObject: true, // 标记为云对象模式
	/**
	 * 请求前处理，主要用于调用方法之前进行预处理，一般用于拦截器、统一的身份验证、参数校验、定义全局对象等。
	 * 文档地址：https://vkdoc.fsq.pub/client/uniCloud/cloudfunctions/cloudObject.html#before-预处理
	 */
	_before: async function() {
		vk = this.vk; // 将vk定义为全局对象
		// let { customUtil, uniID, config, pubFun } = this.getUtil(); // 获取工具包
	},
	/**
	 * 请求后处理，主要用于处理本次调用方法的返回结果或者抛出的错误
	 * 文档地址：https://vkdoc.fsq.pub/client/uniCloud/cloudfunctions/cloudObject.html#after-后处理
	 */
	_after: async function(options) {
		let { err, res } = options;
		if (err) {
			return; // 如果方法抛出错误，直接return;不处理
		}
		return res;
	},
	/**
	 * 获取列表
	 * @url client/categories.getList 前端调用的url参数地址
	 */
	getList: async function(data) {
		let res = { code: 0, msg: '' };
		let { uid } = this.getClientInfo(); // 获取客户端信息
		// 业务逻辑开始-----------------------------------------------------------
	
		// res.cList = await vk.daoCenter.categoriesDao.select({
		// 	pageIndex:1,
		// 	pageSize:20,
		// 	getMain:true,
		// 	fieldJson:{
		// 		_id:false
		// 	},
		// 	sortArr:[{ "name":"_id", "type":"desc" }],
		// });
		
		res.list = await vk.baseDao.selects({
		
		  dbName: dbName.categories,
		  getMain:true,// 是否只返回rows数据，默认false

 		  // 主表where条件
		  whereJson: {
		  },
		  // 主表字段显示规则
		  fieldJson: {
		  },
		  // 副表列表
		  foreignDB: [
		    {
		      dbName: dbName.goods,
		      localKey:"goods_type",
		      foreignKey: "goods_type",
			  as:"goods_list",
		      // 副表where条件
		      whereJson: {
				  
			  },
		      // 副表字段显示规则
		      fieldJson: {
				  
			  },
		      // 副表排序规则
		    }
		  ]
		});
		// 业务逻辑结束-----------------------------------------------------------
		return res;
	},
	/**
	 * 模板函数
	 * @url client/categories.test 前端调用的url参数地址
	 */
	test: async function(data) {
		let res = { code: 0, msg: '' };
		let { uid } = this.getClientInfo(); // 获取客户端信息
		// 业务逻辑开始-----------------------------------------------------------


		// 业务逻辑结束-----------------------------------------------------------
		return res;
	},
};

module.exports = cloudObject;
