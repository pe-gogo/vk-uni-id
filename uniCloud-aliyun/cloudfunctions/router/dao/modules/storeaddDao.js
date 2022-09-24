/**
 * 
 */
// 涉及的表名
const dbName = {
	storeadd: "store_address", // 门店地址
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
 * let storeaddInfo = await vk.daoCenter.storeaddDao.findById(_id);
 * 或
 let storeaddInfo = await vk.daoCenter.storeaddDao.findById({
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
			dbName: dbName.storeadd,
		});
	} else {
		// 不支持事务
		res = await vk.baseDao.findById({
			dbName: dbName.storeadd,
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
let storeaddInfo = await vk.daoCenter.storeaddDao.findByWhereJson({
	
});
 */
dao.findByWhereJson = async (whereJson, fieldJson) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.findByWhereJson({
		dbName: dbName.storeadd,
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
await vk.daoCenter.storeaddDao.add({
	
});
或
 * 调用示例
await vk.daoCenter.storeaddDao.add({
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
			dbName: dbName.storeadd,
		});
	} else {
		// 不支持事务
		res = await vk.baseDao.add({
			dbName: dbName.storeadd,
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
await vk.daoCenter.storeaddDao.adds(dataArr);
 */
dao.adds = async (dataArr) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.adds({
		dbName: dbName.storeadd,
		dataJson: dataArr
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 删 - 删除多条记录
 * @param {Object} whereJson 条件
 * 调用示例
await vk.daoCenter.storeaddDao.del({
	
});
 */
dao.del = async (whereJson) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.del({
		dbName: dbName.storeadd,
		whereJson
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 删 - 据ID删除单条数据
 * @param {String} _id 
 * 调用示例
await vk.daoCenter.storeaddDao.deleteById(_id);
或
await vk.daoCenter.storeaddDao.deleteById(_id, transaction);
 */
dao.deleteById = async (_id, db) => {
	let { vk, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.deleteById({
		db,
		dbName: dbName.storeadd,
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
await vk.daoCenter.storeaddDao.update({
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
		dbName: dbName.storeadd,
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};


/**
 * 改 - 根据ID修改数据
 * @param {String} _id 
 * @param {Object} dataJson 修改的数据
 * 调用示例
await vk.daoCenter.storeaddDao.updateById({
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
		dbName: dbName.storeadd
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 改 - 更新并返回更新后的数据（无论条件匹配到多少条记录，只会修改第一条记录，同时返回修改后的数据）
 * @param {Object} whereJson 条件
 * @param {Object} dataJson 修改的数据
 * 调用示例
await vk.daoCenter.storeaddDao.updateAndReturn({
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
		dbName: dbName.storeadd
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 查 - 获取记录总条数
 * @param {Object} whereJson 条件
 * 调用示例
await vk.daoCenter.storeaddDao.count(whereJson);
 */
dao.count = async (whereJson) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.count({
		dbName: dbName.storeadd,
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
let storeaddSum = await vk.daoCenter.storeaddDao.sum({
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
		dbName: dbName.storeadd,
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 查 - 求最大值
 * @param {String} fieldName 需要求最大值的字段名 
 * @param {Object} whereJson 筛选条件
 * 调用示例
let storeaddMax = await vk.daoCenter.storeaddDao.max({
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
		dbName: dbName.storeadd,
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 查 - 求最小值
 * @param {String} fieldName 需要求最小值的字段名 
 * @param {Object} whereJson 筛选条件
 * 调用示例
let storeaddMin = await vk.daoCenter.storeaddDao.min({
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
		dbName: dbName.storeadd,
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 查 - 求最平均值
 * @param {String} fieldName 需要求最平均值的字段名 
 * @param {Object} whereJson 筛选条件
 * 调用示例
let storeaddAvg = await vk.daoCenter.storeaddDao.avg({
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
		dbName: dbName.storeadd,
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};


/**
 * 查 - 获取数据列表
 * 调用示例
let storeaddList = await vk.daoCenter.storeaddDao.select({
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
		dbName: dbName.storeadd
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 查 - 获取数据列表
 * 调用示例
let storeaddList = await vk.daoCenter.storeaddDao.selects({
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
		dbName: dbName.storeadd
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};

/**
 * 查 - 获取数据列表
 * 调用示例
res = await vk.daoCenter.storeaddDao.getTableData({ 
	data
});
 */
dao.getTableData = async (obj = {}) => {
	let { vk, db, _ } = util;
	let res = {};
	// 数据库操作开始-----------------------------------------------------------
	res = await vk.baseDao.getTableData({
		...obj,
		dbName: dbName.storeadd
	});
	// 数据库操作结束-----------------------------------------------------------
	return res;
};


module.exports = dao;
