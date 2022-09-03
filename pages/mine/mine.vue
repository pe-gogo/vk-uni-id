<template>
	<view>
		<u-image :src="src" width="100%"  height="500rpx" :lazy-load="true"
		:fade="true" duration="450" class = "u-rela"></u-image>
	</view>
	<view class="container">
		<view class="content">
			<!-- 头像与用户名 -->
		
			<view v-if="vk.getVuex('$user.userInfo._id')" class="mine-banner">
				<u-avatar :size="130" :src="vk.getVuex('$user.userInfo.avatar')"></u-avatar>
				<view style="color: white;font-size: 40rpx;font-weight: 600;">
					{{ vk.getVuex('$user.userInfo.nickname') || vk.getVuex('$user.userInfo.username') }}
				</view>
			</view>
			<view  v-else class="mine-banner">
				<u-avatar :size="130"></u-avatar>
				<view style="color: white;font-size: 40rpx;font-weight: 600;">
						未登录
				</view>
			</view>
		</view>
	</view>
	<IndexStore></IndexStore>
</template>

<script>
	export default {
		onLaunch() {
			
		},
		data() {
			return {
				src: 'https://img-qn.51miz.com/Element/00/64/92/22/3ee80c66_E649222_36ee1039.jpg!/quality/90/unsharp/true/compress/true/format/jpg'
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	
	.container{
		position: absolute;
		top: calc(80rpx + var(--status-bar-height));
		justify-content: center;
		align-items: center;
		.mine-banner{
			justify-content: center;
			align-items: center;
			margin-bottom: 30rpx;
			display: flex;
			flex-direction: column;
		}
		
	}
	.m-grid{
		box-shadow:  0 20rpx 20rpx -20rpx rgba($color: #333, $alpha: 0.1);
		padding: 30rpx;
		border-radius: 10rpx;
		position: relative;
		display: flex;
		flex-direction: row;
		margin-left: 30rpx;
		margin-right: 30rpx;
		background-color: #FFF;
		margin-top: -80rpx;
		padding: 0 30;
	
		image{
			height: 80rpx;
			width: 80rpx;
		}
	}
	
</style>
