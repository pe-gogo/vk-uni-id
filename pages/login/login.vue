<template>
	<view class="app login">
		<!-- 页面内容开始 -->
		<view class="content">
			<!-- 头部logo -->
			<view class="header"><image class="logo" :src="logoImage"></image></view>
			<!-- 主体表单 -->
			
			<!-- 其他登录 -->
			<view class="login-icon-view">
				<!-- #ifdef MP-WEIXIN -->
				<view class="login-btn">
					<button class ="btn success circle" hover-class="hover" @click="login_weixin" :plain="false" type="success" shape="circle" :hair-line="false">微信一键登录</button>					
				</view>
			
				<!-- #endif -->
				<!-- #ifdef APP-PLUS -->
				<view class="login-icon-item">
					<u-icon name="weixin-fill" @click="login_weixin" size="80" color="#19be6b"></u-icon>
				</view>
				<!-- #endif -->
			</view>

		</view>

		<!-- 页面内容结束 -->
	</view>
</template>

<script>
	var vk = uni.vk;
	export default {
		data() {
			// 页面数据变量
			return {
				// init请求返回的数据
				data:{

				},
				// 表单请求数据
				scrollTop:0,
				logoImage: "/static/logo.png",

			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		// 监听 - 页面每次【加载时】执行(如：前进)
		onLoad(options) {
			vk = uni.vk;
			this.init(options);
		},
		// 监听 - 页面【首次渲染完成时】执行。注意如果渲染速度快，会在页面进入动画完成前触发
		onReady(){

		},
		// 监听 - 页面每次【显示时】执行(如：前进和返回) (页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面)
		onShow() {
			// #ifdef MP-WEIXIN
			uni.hideHomeButton();
			// #endif
		},
		// 监听 - 页面每次【隐藏时】执行(如：返回)
		onHide() {


		},
		// 监听 - 页面下拉刷新
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		// 监听 - 点击右上角转发时
		onShareAppMessage(options) {

		},
		// 函数
		methods: {
			// 页面数据初始化函数
			init(options = {}){
				console.log("init: ",options);
			},
			pageTo(path){
				vk.navigateTo(path);
			},
			// 账号密码登录
		
			login_success(data){
				let that = this;
				// 检查是否有指定跳转的页面
				if(vk.navigate.originalPage){
					vk.navigate.originalTo();
					return false;
				}
				// 跳转到首页,或页面返回
				var pages = getCurrentPages();
				console.log(pages.length,pages[pages.length-1].route);
				if(pages.length > 1
					&& pages[pages.length-2]
					&& pages[pages.length-2].route
					&& pages[pages.length-2].route.indexOf('login/index') == -1
				){
					const eventChannel = that.getOpenerEventChannel();
					eventChannel.emit('loginSuccess', {});
					vk.navigateBack();
				}else{
					// 进入首页
					vk.navigateToHome();
				}
			}
			,
			// 第三方登录 - 微信
			login_weixin(e){
				let that = this;
				vk.userCenter.loginByWeixin({
					success: (data) => {
						uni.getUserProfile({
							provider:"weixin",
							
						})
						vk.toast("登陆成功!");
						setTimeout(() => {
							// 跳转到首页,或页面返回
							that.login_success(data);
						},1000);
					}
				});
			}
		},
		// 计算属性
		computed:{

		}
	}
</script>
<style lang="scss" scoped>
	@import url("../../common/css/main.css");
</style>
