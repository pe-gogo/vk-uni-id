<template>
	<view>
		<u-icon name="arrow-left" class="back" color="#000" @click="vk.navigateTo('/pages/index/index');"></u-icon>
	</view>
</template>

<script>
	export default {
		name:"backIcon",
		data() {
			return {
				url:''
			};
		},
		methods: 
		{
			toHome(){
				vk.navigateTo('/pages/index/index');
				wx.showTabBar()
			},
		}
	}
</script>

<style lang="scss">
	.back{
		position: absolute;
		display: flex;
		flex-direction: column;
		color: #ffffff;
		// location
		top: calc(0rpx + var(--status-bar-height));
		left: 40rpx;
	}
</style>