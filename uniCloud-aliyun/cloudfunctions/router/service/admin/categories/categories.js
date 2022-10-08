'use strict';
var vk; // 全局vk实例
// 涉及的表名
const dbName = {
	categories: "opendb-mall-categories", // 商品类别表
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
	 * @url admin/categories/categories.getList 前端调用的url参数地址
	 */
	getList: async function(data) {
		let res = { code: 0, msg: '' };
		let { uid } = this.getClientInfo(); // 获取客户端信息
		// 业务逻辑开始-----------------------------------------------------------
		res = await vk.baseDao.selects({
			dbName: dbName.categories,
			pageIndex: 1,
			pageSize: 500,
		})
	
		// 业务逻辑结束-----------------------------------------------------------
		return res;
	},
	/**
	 * 模板函数
	 * @url admin/categories/categories.add 前端调用的url参数地址
	 */
	add: async function(data) {
		let res = { code: 0, msg: '' };
		let { uid } = this.getClientInfo(); // 获取客户端信息
		// 业务逻辑开始-----------------------------------------------------------
		let {
			categories_id,
			name,
			goods_type
		} = data;
		
		// 参数合法校验开始-----------------------------------------------------------
		// 参数合法校验结束-----------------------------------------------------------
		let dbName = "opendb-mall-categories";
		// 检测menu_id是否存在
		let num = await vk.baseDao.count({
			dbName,
			whereJson:{
				categories_id
			}
		});
		let dataJson = {
			categories_id,
			name,
			goods_type
		};
		
		// 执行数据库API请求
		res.id = await vk.baseDao.add({
			dbName,
			dataJson
		});

		// 业务逻辑结束-----------------------------------------------------------
		return res;
	},
	delete: async function(data) {
		let res = { code: 0, msg: '' };
		let { uid } = this.getClientInfo(); // 获取客户端信息
		let {_id } = data 
		// 业务逻辑开始-----------------------------------------------------------
			res.num = await vk.baseDao.del({
				dbName: dbName.categories,
				whereJson:{
					_id
				}
			});
		//over
		return res;
	},
	update: async function(data) {
		let res = { code: 0, msg: '' };
		let { uid } = this.getClientInfo(); // 获取客户端信息
		// 业务逻辑开始-----------------------------------------------------------
			let {_id } = data
			let {name,goods_type} = data
			let dataJson = {
				name,
				goods_type
			}
			res.num = await vk.baseDao.update({
				dbName :dbName.categories,
				whereJson: {
					_id
				},
				dataJson
			});
		//over
		return res;
	}
};

module.exports = cloudObject;
