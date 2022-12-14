'use strict';

const { log } = require("console");

var vk; // 全局vk实例
// 涉及的表名
const dbName = {
	//test: "vk-test", // 测试表
	address:'uni-id-address'
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
	 * @url client/address.getList 前端调用的url参数地址
	 */
	getList: async function(data) {
		let res = { code: 0, msg: '' };
		let { uid } = this.getClientInfo(); // 获取客户端信息
		// 业务逻辑开始-----------------------------------------------------------
		
	
		// 业务逻辑结束-----------------------------------------------------------
		return res;
	},
	/**
	 * 模板函数
	 * @url client/address.add 前端调用的url参数地址
	 */
	add: async function(data) {
		let res = { code: 0, msg: '' };
		let { uid } = this.getClientInfo(); // 获取客户端信息
		// 业务逻辑开始-----------------------------------------------------------
		await vk.daoCenter.addressDao.update({
				whereJson:{
					_id: data.uid
				},
				dataJson:{
					address:data.address,
				}
			});
		// 业务逻辑结束-----------------------------------------------------------
		return res;
	},
	
	/**
		 * 模板函数
		 * @url client/address.add 前端调用的url参数地址
		 */
		update: async function(data) {
			let res = { code: 0, msg: '' };
			let { uid } = this.getClientInfo(); // 获取客户端信息
			// 业务逻辑开始-----------------------------------------------------------
			await vk.daoCenter.addressDao.update({
				whereJson:{
					_id:uid
				},
				dataJson:{
					address:data.form
				}
			});
	
			// 业务逻辑结束-----------------------------------------------------------
			return res;
		},
		/**
			 * 模板函数
			 * @url client/address.finyById 前端调用的url参数地址
			 */
		findById: async function(data){
				let { uid } = this.getClientInfo(); // 获取客户端信息
				let res = { code : 0, msg : 'ok' };
			  // 业务逻辑开始----------------------------------------------------------- 
				
				res.item = await vk.baseDao.findById({
					dbName: dbName.address,
					id:	data.userInfo._id
				})
				
				// 上面的 fieldJson 可以设置 显示什么字段或设置不显示什么字段 如 money:false 代表不显示money字段
				// 对应的sql:
				// select * from vk-test where _id = "5f3a125b3d11c6000106d338"
			  // 业务逻辑结束-----------------------------------------------------------
			  return res;
		},
		/**
			 * 模板函数
			 * @url client/address.updateById 前端调用的url参数地址
			 */
			updateById: async function(data){
					let { uid } = this.getClientInfo(); // 获取客户端信息
					let res = { code : 0, msg : 'ok' };
				  // 业务逻辑开始----------------------------------------------------------- 
					res.item = await vk.baseDao.updateById({
						 dbName: dbName.address,
						 whereJson:{ // 条件
								id:	uid
						  },
						  dataJson:{ // 需要修改的数据
						    address: data.form
						  },
						getUpdateData:true
					})
					
					// 上面的 fieldJson 可以设置 显示什么字段或设置不显示什么字段 如 money:false 代表不显示money字段
					// 对应的sql:
					// select * from vk-test where _id = "5f3a125b3d11c6000106d338"
				  // 业务逻辑结束-----------------------------------------------------------
				  return res;
			},
};

module.exports = cloudObject;
