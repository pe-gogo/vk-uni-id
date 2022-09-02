<template>
	<view class="m-grid">
		<view class="entrance" >
			<view class="item">
				<u-avatar  :size="80" :src="vk.getVuex('$user.userInfo.avatar')"></u-avatar>
				<view  class="line-pro"  style="width: 50%;">
					<u-line-progress style="width: 50%;" :percent="29"></u-line-progress>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			takein(){
				console.log('takein')
			},
			takeOut(){
				console.log('takeOut')
			}
		}
	}
</script>

<style lang="scss">
	.m-grid{
		margin-top: -100rpx;
		.entrance{
					background-color: #FFFFFF;
					position: relative;
					margin: 1rem;
					border-radius: 10rpx;
					display: flex;
					
					padding: 30rpx 0;
					box-shadow: 0 20rpx 20rpx -20rpx rgba($color: #333, $alpha: 0.1);
					.item{
						position: relative;
						display: flex;
						flex: 1;
						flex-direction: row;
						padding-left: 30rpx;
						}
						.line-pro{
								display: flex;
								align-items: center;
								margin-left: 20rpx;
						}
			}
		// .m-grid{
		// 		box-shadow:  0 20rpx 20rpx -20rpx rgba($color: #333, $alpha: 0.1);
		// 		padding: 30rpx;
		// 		border-radius: 10rpx;
		// 		position: relative;
		// 		display: flex;
		// 		flex-direction: row;
		// 		margin-left: 30rpx;
		// 		margin-right: 30rpx;
		// 		background-color: #FFF;
		// 		margin-top: -80rpx;
		// 		padding: 0 30;
			
		// 	.g-item{
				
		// 		.node{
		// 			font-weight: 500
		// 		}
				
		// 		image{
		// 			height: 80rpx;
		// 			width: 80rpx;
		// 		}
		// 	}
			
				
				
		// 	}
	}
	
</style>