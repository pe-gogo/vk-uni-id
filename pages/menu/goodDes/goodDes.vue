<template>
	<view class="content">
		<view class="goodImages">
			<image :src="src"></image>
		</view>
		<view class="note">
			百香过
		</view>
		<view class="descript">
			
		</view>
	</view>
	<submit style="width:100%;position:fixed; bottom:0;"></submit>

</template>

<script>
	export default {
		data() {
			return {
				src:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-9b263989-3b34-486f-a7ad-68fb4c0c0449/81f0d473-206c-4829-9314-b2086b35282a.jpeg'
			};
		}
	}
</script>

<style lang="scss" scoped>
	.submit-v{
		position: absolute;
	}
	.goodImages{
		height: 500rpx;
		width: 100%;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.descript{
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		margin: 200rpx 30rpx;
	}
	.note{
		display: flex;
		flex-direction: row-reverse;
		margin:  -120rpx  80rpx;
		font-size: 40rpx;
	}
</style>
