<template>
	
	<view v-if="show">
		<view class="item" v-for="(res, index) in userAddress" :key="res.name">
			<view class="top">
				<view class="name">{{ res.name }}</view>
				<view class="phone">{{ res.phone }}</view>
			</view>
			<view class="bottom">
				{{res.site}}
				<view>
					<u-icon name="edit-pen" @click="update" :size="40" color="#999999"></u-icon>
					<u-icon name="close" @click="deleteAdd(index)" :size="40" color="#999999"></u-icon>
				</view>
			</view>
		</view>
	</view>
	
	
		<view class="addSite" @tap="toAddSite">
			<view class="add">
				<u-icon name="plus" color="#ffffff" class="icon" :size="30"></u-icon>新建收货地址
			</view>
		</view>
</template>

<script>
	var vk = uni.vk;
	const addressObject = vk.importObject("client/address"); // 这段代码可以写在外层顶部，也可以直接写在对应函数内部。
export default {
	data() {
		return {
			siteList: [],
			hasWeixinAuth: true,
			encryptedKey:"",
			image:"",
			data:{},
			userInfo:[],
			userAddress:[],
			show:false
		};
	},
	onLaunch() {
		vk = uni.vk;
		this.init();
	},
	onShow() {
		if(this.userAddress[0]){
			this.load()
		}
	},
	onReady() {
		
	},
	async onLoad() {
			this.load()
	},
	methods: {
		async	load(){
			var that = this
				let res = await addressObject.findById({
					data:{
						 userInfo : vk.getVuex('$user.userInfo')
					},
				})
				if(res.item.address[0]){
					vk.setVuex('$user.userInfo.address',res.item.address)
					this.userAddress =  vk.getVuex('$user.userInfo.address')
					this.show = true
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
			},
			deleteAdd(index){
				// 简写
				vk.confirm("确定要删除吗?", (res) => {
				  if (res.confirm) {
				    // 点击确定按钮后的回调
				    this.userAddress.splice(index,1)
				    addressObject.update({
				    	data:{
				    		userInfo : vk.getVuex('$user.userInfo'),
				    		form:this.userAddress
				    	}
				    })
				  }
				});

			},

		// async update(){
		// 	await addressObject.update({
		// 		title:'请求中',
		// 		data:{
		// 			data: this.data
		// 		}
		// 	})
		// },
		
		toAddSite(){
			vk.navigateTo({
				url:'/pages/address/addSite',
			})
			}
	}
};
</script>

<style lang="scss" scoped>
.item {
	padding: 40rpx 20rpx;
	.top {
		display: flex;
		font-weight: bold;
		font-size: 34rpx;
		.phone {
			margin-left: 60rpx;
		}
		.tag {
			display: flex;
			font-weight: normal;
			align-items: center;
			text {
				display: block;
				width: 60rpx;
				height: 34rpx;
				line-height: 34rpx;
				color: #ffffff;
				font-size: 20rpx;
				border-radius: 6rpx;
				text-align: center;
				margin-left: 30rpx;
				background-color:rgb(49, 145, 253);
			}
			.red{
				background-color:red
			}
		}
	}
	.bottom {
		display: flex;
		margin-top: 20rpx;
		font-size: 28rpx;
		justify-content: space-between;
		color: #999999;
	}
}
.addSite {
	margin-top: 100rpx;
	display: flex;
	justify-content: space-around;
	width: 600rpx;
	line-height: 100rpx;
	position: relative;
	bottom: 30rpx;
	left: 80rpx;
	background-color: red;
	border-radius: 60rpx;
	font-size: 30rpx;
	.add{
		display: flex;
		align-items: center;
		color: #ffffff;
		.icon{
			margin-right: 10rpx;
		}
	}
}
</style>
