<template>
	<view>
		<map 
		style="width: 100%;height: 600rpx;"
		:latitude="markers[0].latitude"
		:longitude="markers[0].longitude"
		scale="16"
		:markers="markers"
		></map>
		<view class="content">
			<view >
				<u-search
				 :show-action = "false"
				 placeholder="搜索路名/小区/写字楼/学校等"
				 ></u-search>
			<view class="store" v-for="(item,index) in markers" @tap="to">
				<view class="store-title">
					<view class="store-name">{{item.name}}</view>
					<view class="store-status"></view>
				</view>
				<view class="store-content">
					<view class="distance"></view>
					<view class="store-text">{{item.road}}</view>
					<view class="store-text"></view>
				</view>
				<view class="store-right">
					<view class="look"> </view>
					<view class="icon">
						<view class="round"></view>
						<view class="round"></view>
					</view>
				</view>
			</view>
			</view>
		</view>
	</view>
</template>

<script>
var vk = uni.vk;
const storeObj = vk.importObject("client/store"); // 这段代码可以写在外层顶部，也可以直接写在对应函数内部。
export default {
	data() {
		return {
			siteList: [],
			hasWeixinAuth: true,
			encryptedKey:"",
			image:"",
			data:{},
			userInfo:[],
			show:false,
			markers: [
				
			],

		};
	},
	onLaunch() {
		vk = uni.vk;
		this.init();
	},
	onShow() {
		
	},
	onReady() {
		
	},
	async onLoad() {
		this.getList()
	},
	methods: {		
		async getList(){
				const res = await storeObj.getList({
					pageIndex:1,
					pageSize:20,
					getMain:false,
				});
				vk.setStorageSync('markers',res.rows);
				this.markers = vk.getStorageSync('markers')
				
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
		
		to(){
			vk.navigateTo('/pages/menu/menu');
		}
	}
};
</script>

<style lang="scss">
	.content{
		position: relative;
		flex: 1;
		margin-top: -80rpx;
		height: 100%;
		width: 100%;
		background-color: white;
		border-top-left-radius: 25rpx;
		border-top-right-radius: 25rpx;
		padding: 50rpx;
		.store{
			margin-top: 50rpx;
		}

	}
</style>
