<template>
	<view>
		<view class="container">
	<u-image :src="src" width="100%"  height="500rpx" :lazy-load="true"
	:fade="true" duration="450" class = "u-rela"></u-image>
			<view class="content">
				<takeInOut></takeInOut>
			</view>
		</view>
	</view>
</template>

<script>
	var vk = uni.vk;
	export default {
		data() {
			// 页面数据变量
			return {
				src: 'https://img-qn.51miz.com/Element/00/64/92/22/3ee80c66_E649222_36ee1039.jpg!/quality/90/unsharp/true/compress/true/format/jpg'
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		// 监听 - 页面每次【加载时】执行(如：前进)
		onLoad(options = {}) {
			
		},
		// 监听 - 页面【首次渲染完成时】执行。注意如果渲染速度快，会在页面进入动画完成前触发
		onReady(){
			
		},
		// 监听 - 页面每次【显示时】执行(如：前进和返回) (页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面)
		onShow() {
			
		},
		// 监听 - 页面每次【隐藏时】执行(如：返回)
		onHide() {
			
		},
		// 监听 - 点击右上角转发时
		onShareAppMessage(options) {
			
		},
		// 函数
		methods: {
			// 页面数据初始化函数
			init(res){
				vk.alert("内容");
			},
			pageTo(path){
				vk.navigateTo(path);
			}
		},
		// 监听器
		watch:{
			
		},
		// 计算属性
		computed:{
			
		}
	}
</script>
<style lang="scss" scoped>
	.content{
		padding: 0 30rpx;
	}

	
	
	
</style>