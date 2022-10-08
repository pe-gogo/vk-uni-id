<template>
	<view class="container">
		<view class="banner">
			<image class="bg" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9b263989-3b34-486f-a7ad-68fb4c0c0449/304f7f15-c2f0-4971-bb5f-3cc71fefd79b.png"></image>
			<view class="intro">
				<view class="greet"><!-- 您好,{{ vk.getVuex('$user.userInfo.nickname') || vk.getVuex('$user.userInfo.username') }} --></view>
				<view class="note"><!-- 一杯奶茶，一口软欧包，在奈雪遇见两种美好 --></view>
			</view>
		</view>
		<view class="content">
			<view class="entrance">
				<view class="item" @tap="takeIn">
					
					<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9b263989-3b34-486f-a7ad-68fb4c0c0449/c8a70e08-a241-40ea-adca-f16d9a7bb123.png" class="icon"></image>
					<view class="title">堂食</view>
					<view class="note">提前点餐,到店自取</view>
				</view>
				<view class="item" @tap="takeout">
					<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9b263989-3b34-486f-a7ad-68fb4c0c0449/1e2bdead-25f2-4a75-b3d4-b4fa05c103a8.png" class="icon"></image>
					<view class="title">外卖</view>
					<view class="note">提前点餐,外送到家</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// import * from '../../common/gaode/amap-wx.130.js';
	var vk = uni.vk;
	export default {
		data() {
			return {
				hasWeixinAuth: true,
				encryptedKey:"",
				image:"",
				data:{},
				userInfo:[],
			}
		},
		onLoad() {
			
		}, 
		onLaunch() {
			vk = uni.vk;
			this.init();
		},
		methods: {
			takeIn(){
				if(vk.getVuex('$user.userInfo._id')){
					vk.setVuex('$order.type','takein')
					vk.navigateTo('/pages/stores/stores');
				}else{
					vk.navigateTo('/pages/login/login');
				}
			},
			
			takeout(){
				if(vk.getVuex('$user.userInfo._id')){
					vk.setVuex('$order.type','takeout')
					if(!vk.getVuex("$user.chooseAddress")){
						vk.navigateTo('/pages/address/address');
					}
						vk.navigateTo("/pages/menu/menu")
				}else{
					vk.navigateTo('/pages/login/login');
				}
			},
			init(){
				let that = this;
				// #ifdef MP-WEIXIN
				vk.userCenter.code2SessionWeixin({
					data:{
						needCache:true
					},
					success: (data) => {
						that.encryptedKey = data.encryptedKey;
					},
				});
				// #endif
			}
		},
}		
</script>

<style lang="scss">
	.banner{
		position: relative;
		width: 100%;
		height: 600rpx;
		.bg{
			height: 600rpx;
			width: 100%;
		}
		.intro{
			// 固定的
			position: absolute;
			display: flex;
			flex-direction: column;
			color: #ffffff;
			// location
			top: calc(50rpx + var(--status-bar-height));
			left: 40rpx;
			.greet{
				font-size: $font-size-lg;
				margin-bottom: 10rpx;
			}
		}
	}
	.note{
		font-size: 24rpx;
		margin: 20rpx 0;
		color: darkgray;
	}
	.content{
		padding: 0 40rpx;
	}
	
	.entrance{
		background-color: #FFFFFF;
		position: relative;
		margin-top: -80rpx;
		margin-bottom: 30rpx;
		border-radius: 10rpx;
		box-shadow:
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 30rpx 0;
		.item{
			position: relative;
			display: flex;
			flex: 1;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			
			&:nth-child(1):after {
				content: '';
				position: absolute;
				width: 1rpx;
				background-color: #ddd;
				right: 0;
				height: 100%;
				transform: scaleX(0.5) scaleY(0.8);
			}
			
			.icon{
				width: 84rpx;
				height: 84rpx;
				margin: 20rpx;
			}
			.title{
			font-size: 30rpx;
			font-weight: 600;
			color: $text-color-base;
			}
		}	
}
.info{
	position: relative;
	background-color: #FFFFFF;
	margin-bottom: 30rpx;
	padding: 30rpx;
	display: flex;
	align-items: center;
	border-radius: $border-radius-base;
	box-shadow: $box-shadow;
	.integral-section{
		flex: 1;
		flex-direction: column;
		justify-content: center;
		display: flex;
		.top{
			display: flex;
			align-items: center;
			.title{
				color: $text-color-base;
				font: $font-size-base;
				margin-right: 10rpx;
			}
			.value{
				font-size: 40rpx;
				font-weight: bold;
			}
		}
		.bottom{
			color: $text-color-assist;
			font-size: $font-size-sm;
			align-items: center;
		}
	}
	.qrcode-section{
		color: $color-primary;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: $font-size-sm;
		
		image {
			width: 40rpx;
			height: 40rpx;
			margin-bottom: 10rpx;
		}
	}
}
	.navigators{
		width: 100%;
		margin-bottom: 20rpx;
		border-radius: 10rpx;
		background-color: #FFFFFF;
		box-shadow: $box-shadow;
		padding: 20rpx;
		display: flex;
		align-items: stretch;
		
		.left{
			width: 340rpx;
			margin-right: 20rpx;
			display: flex;
			padding: 0 20rpx;
			flex-direction: column;
			font-size: $font-size-sm;
			color: $text-color-base;
			background-color: #F2F2E6;
			.grid{
				height: 50%;
				display: flex;
			}
		}
		.mark-img{
			width: 30rpx;
			height: 30rpx;
			margin-right: 10rpx;
		}
		.yzclh-img{
			width: 214.86rpx;
			height: 122.96rpx;
			margin-top: 10rpx;
		}
		
		.right {
				width: 290rpx;
				display: flex;
				flex-direction: column;
				
				.tea-activity, .member-gifts {
					width: 100%;
					display: flex;
					padding: 20rpx;
					font-size: $font-size-sm;
					color: $text-color-base;
					align-items: center;
					position: relative;
				}
				
				.tea-activity {
					background-color: #FDF3F2;
					margin-bottom: 20rpx;
				}
				
				.member-gifts {
					background-color: #FCF6D4;
				}
				
				.right-img {
					flex: 1;
					position: relative;
					margin-left: 20rpx;
					margin-right: -20rpx;
					margin-bottom: -20rpx;
					display: flex;
					align-items: flex-end;
					
					image {
						width: 100%;
					}
				}
			
			
			.mark-img {
				width: 30rpx;
				height: 30rpx;
				margin-right: 10rpx;
			}
			
			.yzclh-img {
				height: 122.96rpx;
				width: 214.86rpx;
			}
		}
		
	}
	
</style>
