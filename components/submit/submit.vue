<template>
	<view class="navigation">
		<view class="left">
			<view class="item">
				<image style="height: 60rpx;width: 60rpx;" src="@/static/package.jpg"></image>
				<view class="money">
					¥<slot></slot>
				</view>
			</view>
			
		</view>
		<view class="right">
			<view class="buy btn u-line-1">结  算</view>
		</view>
	</view>
</template>

<script>
export default {
	props:{
		
	}
};
</script>

<style lang="scss" scoped>
.navigation {
	position: absolute;
	bottom: 0;
	width: 100%;
	margin: 20rpx 0rpx;
	border-radius: 50rpx;
	height: 120rpx;
	box-shadow: $box-shadow;
	display: flex;
	border: solid 2rpx #f2f2f2;
	background-color: #283913;
	padding: 16rpx 0;
	align-items: center;
	.left {
		display: flex;
		font-size: 20rpx;
		.item {
			padding: 10rpx 30rpx;
			display: flex;
			flex-direction: row;
			margin: 0 70rpx;
			.money{
				color: white;
				margin-left: 30rpx;
				font-size: 48rpx;
			}
		}
	}
	.right {
		position: absolute;
		right: 0;
		margin-right: 50rpx;
		display: flex;
		font-size: 28rpx;
		align-items: center;
		.btn {
			line-height: 66rpx;
			padding: 0 30rpx;
			border-radius: 36rpx;
			border: solid 1rpx;
			color: #000;
		}
		.cart {
			background-color: #ed3f14;
			margin-right: 30rpx;
		}
		.buy {
			
			font-family: "'Courier New', Courier, monospace";
			background-color: white;
		}
	}
}
</style>
