/**
 * 
 */
// 涉及的表名
const dbName = {
	address: "uni-id-address", // 地址表
};

var dao = {};
var util = {};
// 初始化
dao.init = function(obj) {
	util = obj;
}
/**
 * 查 - 根据id获取单条记录
 * @param {String} _id 
 * @param {Object} fieldJson 字段显示规则
 * 调用示例
 * let addressInfo = await vk.daoCenter.addressDao.findById(_id);
 * 或
 let addressInfo = await vk.daoCenter.addressDao.findById({
	db: transaction,
	id: _id
 });
 */
dao.findById = async (_id, fieldJson) => {
	let { vk, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	if (typeof _id === "object") {
		// 支持事务
		res = await vk.baseDao.findById({
			..._id,
			dbName: dbName.address,
		});
	} else {
		// 不支持事务
		res = await vk.baseDao.findById({
			dbName: dbName.address,
			id: _id,
			fieldJson
		});
	}
	// 数据库操作结束-----------------------------------------------------------
	return res;
};
/**
 * 查 - 根据whereJson获取单条记录
 * @param {Object} whereJson 条件
 * @param {Object} fieldJson 字段显示规则
 * 调用示例
let addressInfo = await vk.daoCenter.addressDao.findByWhereJson({
	
});
 */
dao.findByWhereJson = async (whereJson, fieldJson) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.findByWhereJson({
		dbName: dbName.address,
		whereJson,
		fieldJson
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 增 - 添加一条记录
 * @param {Object} dataJson 添加的数据
 * 调用示例
await vk.daoCenter.addressDao.add({
	
});
或
 * 调用示例
await vk.daoCenter.addressDao.add({
	db: transaction,
	dataJson: {
		
	}
});
 */
dao.add = async (obj) => {
	let { vk, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	if (obj.db && obj.dataJson) {
		// 支持事务
		res = await vk.baseDao.add({
			...obj,
			dbName: dbName.address,
		});
	} else {
		// 不支持事务
		res = await vk.baseDao.add({
			dbName: dbName.address,
			dataJson: obj
		});
	}
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 增 - 添加多条记录
 * @param {Object} dataJson 添加的数据
 * 调用示例
await vk.daoCenter.addressDao.adds(dataArr);
 */
dao.adds = async (dataArr) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.adds({
		dbName: dbName.address,
		dataJson: dataArr
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 删 - 删除多条记录
 * @param {Object} whereJson 条件
 * 调用示例
await vk.daoCenter.addressDao.del({
	
});
 */
dao.del = async (whereJson) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.del({
		dbName: dbName.address,
		whereJson
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 删 - 据ID删除单条数据
 * @param {String} _id 
 * 调用示例
await vk.daoCenter.addressDao.deleteById(_id);
或
await vk.daoCenter.addressDao.deleteById(_id, transaction);
 */
dao.deleteById = async (_id, db) => {
	let { vk, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.deleteById({
		db,
		dbName: dbName.address,
		id: _id
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 改 - 批量修改
 * @param {Object} whereJson 条件
 * @param {Object} dataJson 修改的数据
 * 调用示例
await vk.daoCenter.addressDao.update({
	whereJson:{
		
	},
	dataJson:{
		
	}
});
 */
dao.update = async (obj = {}) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.update({
		...obj,
		dbName: dbName.address,
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};


/**
 * 改 - 根据ID修改数据
 * @param {String} _id 
 * @param {Object} dataJson 修改的数据
 * 调用示例
await vk.daoCenter.addressDao.updateById({
	id: _id, 
	dataJson: {
		
	}
});
 */
dao.updateById = async (obj = {}) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.updateById({
		...obj,
		dbName: dbName.address
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 改 - 更新并返回更新后的数据（无论条件匹配到多少条记录，只会修改第一条记录，同时返回修改后的数据）
 * @param {Object} whereJson 条件
 * @param {Object} dataJson 修改的数据
 * 调用示例
await vk.daoCenter.addressDao.updateAndReturn({
	whereJson:{
		
	},
	dataJson:{
		
	}
});
 */
dao.updateAndReturn = async (obj = {}) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.updateAndReturn({
		...obj,
		dbName: dbName.address
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 查 - 获取记录总条数
 * @param {Object} whereJson 条件
 * 调用示例
await vk.daoCenter.addressDao.count(whereJson);
 */
dao.count = async (whereJson) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.count({
		dbName: dbName.address,
		whereJson
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 查 - 求和
 * @param {String} fieldName 需要求和的字段名 
 * @param {Object} whereJson 筛选条件
 * 调用示例
let addressSum = await vk.daoCenter.addressDao.sum({
	fieldName: "",
	whereJson: {
		
	}
});
 */
dao.sum = async (obj) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.sum({
		...obj,
		dbName: dbName.address,
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 查 - 求最大值
 * @param {String} fieldName 需要求最大值的字段名 
 * @param {Object} whereJson 筛选条件
 * 调用示例
let addressMax = await vk.daoCenter.addressDao.max({
	fieldName: "",
	whereJson: {
		
	}
});
 */
dao.max = async (obj) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.max({
		...obj,
		dbName: dbName.address,
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 查 - 求最小值
 * @param {String} fieldName 需要求最小值的字段名 
 * @param {Object} whereJson 筛选条件
 * 调用示例
let addressMin = await vk.daoCenter.addressDao.min({
	fieldName: "",
	whereJson: {
		
	}
});
 */
dao.min = async (obj) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.min({
		...obj,
		dbName: dbName.address,
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 查 - 求最平均值
 * @param {String} fieldName 需要求最平均值的字段名 
 * @param {Object} whereJson 筛选条件
 * 调用示例
let addressAvg = await vk.daoCenter.addressDao.avg({
	fieldName: "",
	whereJson: {
		
	}
});
 */
dao.avg = async (obj) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.avg({
		...obj,
		dbName: dbName.address,
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};


/**
 * 查 - 获取数据列表
 * 调用示例
let addressList = await vk.daoCenter.addressDao.select({
	pageIndex:1,
	pageSize:20,
	getMain:false,
	whereJson:{
		
	},
	fieldJson:{},
	sortArr:[{ "name":"_id", "type":"desc" }],
});
 */
dao.select = async (obj = {}) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.select({
		...obj,
		dbName: dbName.address
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 查 - 获取数据列表
 * 调用示例
let addressList = await vk.daoCenter.addressDao.selects({
	pageIndex:1,
	pageSize:20,
	getMain:false,
	whereJson:{
		
	},
	fieldJson:{},
	sortArr:[{ "name":"_id", "type":"desc" }],
	// 副表列表
	foreignDB:[
		{
			dbName:"副表表名",
			localKey:"主表外键名",
			foreignKey:"副表外键名",
			as:"副表as字段",
			limit:1
		}
	]
});
 */
dao.selects = async (obj = {}) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.selects({
		...obj,
		dbName: dbName.address
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 查 - 获取数据列表
 * 调用示例
res = await vk.daoCenter.addressDao.getTableData({ 
	data
});
 */
dao.getTableData = async (obj = {}) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.getTableData({
		...obj,
		dbName: dbName.address
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};


module.exports = dao;
