<template>
	<view>
		<view class="wrap">
			<view class="u-tabs-box">
				<u-tabs-swiper activeColor="#f29100" ref="tabs" :list="list" :current="current" @change="change" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="order" v-for="(res, index) in dataList" :key="res._id">
								<view class="orders-list d-flex flex-column w-100" style="padding: 20rpx; padding-bottom: 0;">
									<view class="order-item" v-for="(item, index) in res.cart" :key="index" style="margin-bottom: 30rpx;" @tap="detail(item._id)">
										<list-cell :hover="false">
											<view class="w-100 d-flex align-items-center">
												<view class="flex-fill d-flex flex-column">
													<view class="font-size-lg text-color-base" style="margin-bottom: 20rpx;">
														店面名字
													</view>
													<view class="font-size-sm text-color-assist">订单编号：{{res._id}}</view>
												</view>
												<view class="font-size-lg text-color-primary">
													<image :src="item.image"></image>
												</view>
											</view>
										</list-cell>
										<list-cell :hover="false" last>
											<view class="w-100 d-flex flex-column">
												<view class="w-100 text-truncate font-size-lg text-color-base" style="margin-bottom: 20rpx;">
													{{item.name}}
												</view>
												<view class="d-flex justify-content-between align-items-center" style="margin-bottom: 30rpx;">
													<view class="font-size-sm text-color-assist">
														{{res._add_time}}
													</view>
													<view class="d-flex font-size-sm text-color-base align-items-center">
														<view style="margin-right: 10rpx;">共{{item.number}}件商品，实付 {{res.money}}</view>
													</view>
												</view>
											</view>
										</list-cell>
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			orderList: [[], [], [], []],
			dataList: [],
			list: [
				{
					name: '待付款'
				},
				{
					name: '待发货'
				},
				{
					name: '待收货'
				},
				{
					name: '待评价',
					count: 12
				}
			],
		
		};
	},
	onLoad() {
		this.getDataList();
	},
	computed: {
		// 价格小数
		priceDecimal() {
			return val => {
				if (val !== parseInt(val)) return val.slice(-2);
				else return '00';
			};
		},
		// 价格整数
		priceInt() {
			return val => {
				if (val !== parseInt(val)) return val.split('.')[0];
				else return val;
			};
		}
	},
	methods: {
		getDataList(){
			vk.callFunction({
				url: 'client/order/kh/order.getList',
				data: {
					
				},
				success: (data) => {
					this.dataList = data.rows
				}
			});
		},
	}
};
</script>

<style>
/* #ifndef H5 */
page {
	height: 100%;
	background-color: #f2f2f2;
}
/* #endif */
</style>

<style lang="scss" scoped>
.order {
	width: 710rpx;
	background-color: #ffffff;
	margin: 20rpx auto;
	border-radius: 20rpx;
	box-sizing: border-box;
	padding: 20rpx;
	font-size: 28rpx;
	.top {
		display: flex;
		justify-content: space-between;
		.left {
			display: flex;
			align-items: center;
			.store {
				margin: 0 10rpx;
				font-size: 32rpx;
				font-weight: bold;
			}
		}
		.right {
			color: $u-type-warning-dark;
		}
	}
	.item {
		display: flex;
		margin: 20rpx 0 0;
		.left {
			margin-right: 20rpx;
			image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 10rpx;
			}
		}
		.content {
			.title {
				font-size: 28rpx;
				line-height: 50rpx;
			}
			.type {
				margin: 10rpx 0;
				font-size: 24rpx;
				color: $u-tips-color;
			}
			.delivery-time {
				color: #e5d001;
				font-size: 24rpx;
			}
		}
		.right {
			margin-left: 10rpx;
			padding-top: 20rpx;
			text-align: right;
			.decimal {
				font-size: 24rpx;
				margin-top: 4rpx;
			}
			.number {
				color: $u-tips-color;
				font-size: 24rpx;
			}
		}
	}
	.total {
		margin-top: 20rpx;
		text-align: right;
		font-size: 24rpx;
		.total-price {
			font-size: 32rpx;
		}
	}
	.bottom {
		display: flex;
		margin-top: 40rpx;
		padding: 0 10rpx;
		justify-content: space-between;
		align-items: center;
		.btn {
			line-height: 52rpx;
			width: 160rpx;
			border-radius: 26rpx;
			border: 2rpx solid $u-border-color;
			font-size: 26rpx;
			text-align: center;
			color: $u-type-info-dark;
		}
		.evaluate {
			color: $u-type-warning-dark;
			border-color: $u-type-warning-dark;
		}
	}
}
.centre {
	text-align: center;
	margin: 200rpx auto;
	font-size: 32rpx;
	image {
		width: 164rpx;
		height: 164rpx;
		border-radius: 50%;
		margin-bottom: 20rpx;
	}
	.tips {
		font-size: 24rpx;
		color: #999999;
		margin-top: 20rpx;
	}
	.btn {
		margin: 80rpx auto;
		width: 200rpx;
		border-radius: 32rpx;
		line-height: 64rpx;
		color: #ffffff;
		font-size: 26rpx;
		background: linear-gradient(270deg, rgba(249, 116, 90, 1) 0%, rgba(255, 158, 1, 1) 100%);
	}
}
.wrap {
	display: flex;
	flex-direction: column;
	height: calc(100vh - var(--window-top));
	width: 100%;
}
.swiper-box {
	flex: 1;
}
.swiper-item {
	height: 100%;
}
</style>
