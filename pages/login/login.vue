<template>
	<view class="bg">
	<view class="container">
		<view class="intro">
			<image src="/static/images/logo.png"></image>
			<view class="tips">
				一杯好茶，一口软欧包
				<br>
				在奈雪遇见两种美好
			</view>
		</view>
		<view class="bottom">
			<!-- #ifdef H5 -->
				<button type="primary" size="default" class="login-btn" @tap="loginByWeixin">
					登录
				</button>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
				<button type="primary" size="default" class="login-btn" open-type="getUserInfo" lang="zh_CN" @tap="loginByWeixin">
					<image src="/static/images/mine/wechat.png"></image>
					微信一键登录
				</button>
			<!-- #endif -->
			<view class="d-flex flex-column justify-content-evenly align-items-center text-center" style="height: 30vh;">
				<view class="w-100 font-size-base text-color-assist">新用户登录即加入会员，享会员权益</view>
				<view class="w-100 row d-flex just-content-around align-items-center font-size-sm text-color-assist">
					<view class="grid">
						<image src="/static/images/mine/rhyl.png"></image>
						<view>入会有礼</view>
					</view>
					<view class="grid">
						<image src="/static/images/mine/jfdh.png"></image>
						<view>积分兑换</view>
					</view>
					<view class="grid">
						<image src="/static/images/mine/sjtq.png"></image>
						<view>升级特权</view>
					</view>
					<view class="grid">
						<image src="/static/images/mine/srtq.png"></image>
						<view>生日特权</view>
					</view>
					<view class="grid">
						<image src="/static/images/mine/nxbz.png"></image>
						<view>奈雪宝藏</view>
					</view>
				</view>
				<view class="font-size-base text-color-primary">会员权益说明</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	var vk = uni.vk;
	export default {
		data() {
			return {
				hasWeixinAuth: true,
				encryptedKey:"",
				image:"",
				data:{},
				userInfo:[]
			}
		},
		onLaunch() {
			vk = uni.vk;
			this.init();
		},
		methods: {
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
			},
			
			loginByWeixin(type){
				let that = this;
				vk.userCenter.loginByWeixin({
					data:{
						type
					},
					success: (data) => {
						vk.alert(data.msg);
						that.data = data;
						that.userInfo = data.userInfo;
						vk.vuex.set('$user.userInfo.avatar', that.userInfo.avatar);
						vk.vk.navigateTo({
							url:'/pages/index/index',
							
						});

					}
				});
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	.intro {
		width: 100%;
		height: 60vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		
		image {
			width: 165rpx;
			height: 165rpx;
		}
		
		.tips {
			line-height: 72rpx;
			text-align: center;
		}
	}
	
	.bottom {
		height: 40vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 0 40rpx;
		
		.login-btn {
			width: 100%;
			border-radius: 50rem !important;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 10rpx 0;
			
			image {
				width: 36rpx;
				height: 30rpx;
				margin-right: 10rpx;
			}
		}
		
		.row {
			.grid {
				width: 20%;
				image {
					width: 60rpx;
					height: 60rpx;
					margin-bottom: 10rpx;
				}
			}
		}
	}
</style>
