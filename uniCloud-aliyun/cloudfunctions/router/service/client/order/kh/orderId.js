'use strict';
module.exports = {
	/**
	 * 生成订单Id
	 * @url client/order/kh/orderId 前端调用的url参数地址
	 * data 请求参数
	 * @param {String} params1  参数1
	 */
	main: async (event) => {
		let { data = {}, userInfo, util, filterResponse, originalParam } = event;
		let { customUtil, uniID, config, pubFun, vk, db, _ } = util;
		let { uid } = data;
		let res = { code: 0, msg: "" };
		// 业务逻辑开始-----------------------------------------------------------
		for (const elem of event.data.cart) {
		    let pr = (elem.price * elem.number)
			res.price += pr
		}
		// 业务逻辑结束-----------------------------------------------------------
		return res	
	}
}
