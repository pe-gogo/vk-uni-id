<template>
	<view class="m-grid">
		<view class="entrance">
			<view class="item" @tap="takein">
				<image src="/static/images/index/takein.png" @tap="takeIn" class="icon"></image>
				<view class="title">自取</view>
			</view>
			<view class="item" @tap="takeout">
				<image src="/static/images/index/takeout.png" @tap="takeOut" class="icon"></image>
				<view class="title">外卖</view>
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
				vk.navigateTo('/pages/address/address');
			}
		}
	}
</script>

<style lang="scss">
	.entrance{
			background-color: #FFFFFF;
			position: relative;
			margin-top: -80rpx;
			margin-bottom: 30rpx;
			border-radius: 10rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 30rpx 0;
			box-shadow: 0 20rpx 20rpx -20rpx rgba($color: #333, $alpha: 0.1);
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
				.title{}
				font-size: 30rpx;
				font-weight: 600;
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
</style>