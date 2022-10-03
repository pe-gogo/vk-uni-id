<template>
	<view class="container position-relative">
		<view class="main">
			<!-- 导航部分 -->
			<view class="nav">
				<!-- 头部 -->
				<view class="header">
					
					<view class="left overflow-hidden">
						<view class="d-flex align-items-center overflow-hidden">
							<image src="/static/images/order/location.png" style="width: 30rpx; height: 30rpx;" class="mr-10"></image>
								{{"location"||0}}
							<view class="font-size-extra-lg text-color-base font-weight-bold text-truncate">
							</view>
						</view>
						<view class="font-size-sm text-color-assist overflow-hidden text-truncate">
							{{"stree"}}
						</view>
					</view>
					<view class="right">
						<view class="takeout" :class="{ active: orderType == 'takeIn' }" @tap="tapTakeIn"><text>自取</text></view>
						<view class="takeout" :class="{ active: orderType == 'takeout' }" @tap="tapTakeOut"><text>外卖</text></view>
					</view>
				</view>
				<view class="content">
					<view class="to" >
						配送时间
						<text style="position: absolute; right: 50rpx">	立即配送</text>
					</view>
					<u-divider bg-color="#F8F8F8" height="5" use-slot="false" :half-width	="0"  style="margin-top: 40rpx;"></u-divider>
				
					<!-- 购物车 -->
					<view class="list"> 
						<view  v-for="(item, index) in cart">
								<view class="item-list">
									<view class="" style="width: 50%;">
										<image @tap="toFood" class="item-menu-image" :src="item.image" mode=""></image>
										
									</view>
									<view class=""  style="width: 50;">
										<view class="item-menu-name">{{item.name}}</view>
										<view class="item-menu-price">
											¥     {{item.price || 0}}  
											<view style="font-size: 18rpx;">
												x {{item.number}}
											</view>
										</view>
									</view>
								</view>
							</view>
					</view>
					<view style="display: flex; flex-direction: row-reverse;border-bottom: 1rpx solid;padding:20rpx 40rpx;">
						<view style="margin-left:30rpx;font-size: 30rpx; font-weight: 500;">¥		{{price}}</view>
						合计  
					</view>
					<view class="orderNote "
						style="padding: 20rpx 0;display: flex;flex-direction: row;"
					>
						订单备注
					</view>
					<u-button  :custom-style="customStyle" @click="pay()">
						提交订单
					</u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>

export default {
	data() {
		return {
			cart: [],
			price:99999,
			totalFee: '',
			outTradeNo: '',
			ensureAddressModalVisible: false,
			form: {
				remark: ''
			},
			storeName: '',
			customStyle:{
				width: '80px',
				marginTop: '20px' ,// 注意驼峰命名，并且值必须用引号包括，因为这是对象
			}
		};
	},

	onLoad(options) {
		const eventChannel = this.getOpenerEventChannel();
		  // 监听data事件，获取上一页面通过eventChannel.emit传送到当前页面的数据
		  if (eventChannel.on) {
		    eventChannel.on('data', (data) => {
				this.cart = data.cart
				this.price = data.price
		    });
		  }
	},
	computed: {
		
	},
	methods: {
		pay(){
			vk.showLoading({
				title:"支付中"
			})
			
			vk.callFunction({
				url: 'client/order/kh/order.insert',
				data: {
					cart: this.cart,
					money: this.price,
					orderType:1
				},
				success: (data) => {
					vk.hideLoading();
					vk.alert("支付成功");
				}
			});
			
		}
	}
};
</script>

<style lang="scss" scoped>
	

.item-list{
		display: flex;
		padding: 30rpx;
		flex-direction: row;
		margin: 30rpx 0 30rpx 0;
		border-radius: 19rpx;
		border: solid 1rpx;
		height: 300 rpx;
		
		.item-menu-name {
				display: flex;
				justify-content: center;
				align-items: center;
				font-weight: 800rpx;
				font-size: 40rpx;
				color: $u-main-color;
			}
			.item-menu-price{
				position: absolute;
				margin-right: 80rpx;
				right: 0;
				font-size: 30rpx;
				font-weight: 500rpx;
				flex-direction: column;
				margin-top: 40rpx;
				font-weight: normal;
				color: $u-main-color;
				
			}
			
				.item-menu-image {
					border: solid 1rpx;
					border-radius: 50%;
					width: 180rpx;
					height: 150rpx;
				}
}
	
.main {
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	background-color: white;
	
}

.content{
	margin-top: -10rpx;
	display: flex;
	flex-direction: column;
	padding: 50rpx ;
	border-top-right-radius: 15rpx;
	border-top-left-radius: 15rpx;
	height: 100%;
	width: 100%;
	.to{
		font-size: 30rpx;
		font-weight: 600;
	}
	.list{
		margin: 30rpx 0rpx;
		border-top: #000 solid 1rpx;
		border-bottom: #000 solid 1rpx;
	}	
	
}



.nav {
	width: 100%;
	height: 212rpx;
	flex-shrink: 0;
	display: flex;
	flex-direction: column;
	
	.header {
		background-color: #f8f8f8;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx;
		height: 140rpx;

		.left {
			flex: 1;
			display: flex;
			flex-direction: column;

			.store-name {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				font-size: $font-size-lg;
				margin-bottom: 10rpx;

				.iconfont {
					margin-left: 10rpx;
					line-height: 100%;
				}
			}

			.store-location {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				color: $text-color-assist;
				font-size: $font-size-sm;

				.iconfont {
					vertical-align: middle;
					display: table-cell;
					color: $color-primary;
					line-height: 100%;
				}
			}
		}

		.right {
			background-color: $bg-color-grey;
			border-radius: 38rpx;
			display: flex;
			align-items: center;
			font-size: $font-size-sm;
			padding: 0 38rpx;
			color: $text-color-assist;
			flex-direction: row;
			
			.dinein, .takeout {
				position: relative;
				display: flex;
				align-items: center;
				&.active {
					padding: 14rpx 38rpx;
					color: #ffffff;
					background-color: $color-primary;
					border-radius: 38rpx;
				}
			}
			
			.takeout {
				margin-left: 20rpx;
				height: 100%;
				flex: 1;
				padding: 14rpx 0;
			}
			
			.dinein.active {
				margin-left: -38rpx;
			}

			.takeout.active {
				margin-right: -38rpx;
			}
		}
	}

	.coupon {
		flex: 1;
		width: 100%;
		background-color: $bg-color-primary;
		font-size: $font-size-base;
		color: $color-primary;
		padding: 0 20rpx;
		display: flex;
		align-items: center;
		overflow: hidden;
		
		.title {
			flex: 1;
			margin-left: 10rpx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		
		.iconfont {
			line-height: 100%;
		}
	}
}
</style>
