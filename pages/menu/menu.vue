<template>
	<view class="container u-wrap">
		<view class="store-top">
			<view class="intro">
				<view class="greet">StoreName</view>
				<view class="note">
					<u-icon name="star"></u-icon>
					距离你  {{1.9}}  km
				</view>
			</view>
		</view>
		<view class="u-menu-wrap">
			
			<scroll-view scroll-y scroll-with-animation class="u-tab-view menu-scroll-view" :scroll-top="scrollTop"
			 :scroll-into-view="itemId">
				<view v-for="(item,index) in tabbar" :key="index" class="u-tab-item" :class="[current == index ? 'u-tab-item-active' : '']"
				 @tap.stop="swichMenu(index)">
					<text class="u-line-1">{{item.name}}</text>
				</view>
			</scroll-view>
			<scroll-view :scroll-top="scrollRightTop" scroll-y scroll-with-animation class="right-box" @scroll="rightScroll">
				<view class="pages-view">
					<view class="news" style="background-color: white;">
						<view class="news-bg">
							<image src="../../static/banner.jpeg" style="width: 100%;height: 300rpx;"></image>
						</view>
					</view>	
						
					<view class="class-item" :id="'item' + index" v-for="(item , index) in tabbar" :key="index">
						<view class="item-title" style="margin-bottom: 50rpx;">
							<text>{{item.name}}</text>
						</view>
						<view class="item-container">
							<view class="" v-for="(item1, index1) in item.foods" :key="index1">
								<view class="item-list">
									<view class="right" style="width: 50%;">
										<image class="item-menu-image" :src="item1.icon" mode=""></image>
									</view>
									<view class="left">
										<view class="item-menu-name">{{item1.name}}</view>
										<view class="item-menu-price">
											<view class="price">¥     {{item1.price || 0}}</view>
										</view>
									</view>
								</view>
							<!-- 	<image class="item-menu-image" :src="item1.icon" mode=""></image>
								<view class="item-menu-name">{{item1.name}}</view> -->
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>


<style lang="scss" scoped>
	.container{
		background-color: white;
	
		width: 100%;
		height: 100%;
	}
	.store-top{
		background-color: #033D3A;
		width: 100%;
		height: 300rpx;
	}
	.u-wrap {
		background-color: white;
		height: calc(100vh);
		/* #ifdef H5 */
		height: calc(100vh - var(--window-top));
		/* #endif */
		display: flex;
		flex-direction: column;
	}
	
	.u-search-box {
		padding: 18rpx 30rpx;
	}
	
	.u-menu-wrap {
		flex: 1;
		display: flex;
		overflow: hidden;
	}
	.u-tab-view {
		width: 200rpx;
		height: 100%;
	}
	.item-list{
		display: flex;
		padding: 30rpx;
		flex-direction: row;
		margin: 0 0 30rpx 0;
		border-radius: 19rpx;
		border: solid 1rpx;
		height: 300 rpx;
	}
	.news{
			
			margin: 30rpx;
			border-radius: 19rpx;
			border: solid 1rpx;
			height: 300rpx;
			overflow: hidden;
			background-color: #000;
			.news-bg{
				display: flex;
		
			}
	}
	.pages-view{
		background-color: white;
	}

	.u-tab-item {
		height: 110rpx;
		background: #F8F8F8;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
		color: #a8a6aa;
		font-weight: 400;
		line-height: 1;
	}
	.intro{
		// 固定的
		position: absolute;
		display: flex;
		flex-direction: column;
		color: #ffffff;
		// location
		top: calc(50rpx + var(--status-bar-height));
		left: 40rpx;
		.greet{
			color: #D9C3C3;
			font-size: $font-size-lg;
			margin-bottom: 10rpx;
		}
		.note{
			color: #D9C3C3;
			font-size: $font-size-sm;
		}
	}
	.u-tab-item-active {
		position: relative;
		color: #000;
		font-weight: 600;
		background: #fff;
	}
	
	.u-tab-item-active::before {
		content: "";
		position: absolute;
		height: 32rpx;
		left: 0;
		top: 39rpx;
	}
	
	.u-tab-view {
		height: 100%;
	}
	
	.right-box {
		background-color: white;
	}

	
	.class-item {
		margin-bottom: 30rpx;
		background-color: #fff;
		padding: 16rpx;
		border-radius: 8rpx;
	}
	.pre-class-item {
		background-color: #fff;
		padding: 16rpx;
		border-radius: 8rpx;
		.pre-item{
		
		}
	}
	
	.class-item:last-child {
		min-height: 100vh;
	}
	
	.item-title {
		font-size: 26rpx;
		color: $u-main-color;
		font-weight: bold;
	}
	
	.item-menu-name {
		margin-left: 80rpx;
		font-weight: normal;
		font-size: 30rpx;
		color: $u-main-color;
	}
	.item-menu-price{
		
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 24rpx;
		flex-direction: row;
		margin-left: 80rpx;
		margin-top: 40rpx;
	}
	
	.item-container {
		flex-direction: column;
		display: flex;
		margin: 16rpx;
	}
	
	.item-menu-image {
		border: solid 1rpx;
		border-radius: 50%;
		width: 180rpx;
		height: 150rpx;
	}

</style>


<script>
	import classifyData from './classify.data.js';
	export default {
		data() {
			return {
				scrollTop: 0, //tab标题的滚动条位置
				oldScrollTop: 0,
				current: 0, // 预设当前项的值
				menuHeight: 0, // 左边菜单的高度
				menuItemHeight: 0, // 左边菜单item的高度
				itemId: '', // 栏目右边scroll-view用于滚动的id
				tabbar: classifyData,
				menuItemPos: [],
				arr: [],
				scrollRightTop: 0, // 右边栏目scroll-view的滚动条高度
				timer: null, // 定时器
				
			}
		},
		onLoad() {
			
		},
		onReady() {
			wx.hideTabBar()
			this.getMenuItemTop()
		},
		methods: {
			// 点击左边的栏目切换
			async swichMenu(index) {
				if(this.arr.length == 0) {
					await this.getMenuItemTop();
				}
				if (index == this.current) return;
				this.scrollRightTop = this.oldScrollTop;
				this.$nextTick(function(){
					this.scrollRightTop = this.arr[index];
					this.current = index;
					this.leftMenuStatus(index);
				})
			},
			// 获取一个目标元素的高度
			getElRect(elClass, dataVal) {
				new Promise((resolve, reject) => {
					const query = uni.createSelectorQuery().in(this);
					query.select('.' + elClass).fields({
						size: true
					}, res => {
						// 如果节点尚未生成，res值为null，循环调用执行
						if (!res) {
							setTimeout(() => {
								this.getElRect(elClass);
							}, 10);
							return;
						}
						this[dataVal] = res.height;
						resolve();
					}).exec();
				})
			},
			// 观测元素相交状态
			async observer() {
				this.tabbar.map((val, index) => {
					let observer = uni.createIntersectionObserver(this);
					// 检测右边scroll-view的id为itemxx的元素与right-box的相交状态
					// 如果跟.right-box底部相交，就动态设置左边栏目的活动状态
					observer.relativeTo('.right-box', {
						top: 0
					}).observe('#item' + index, res => {
						if (res.intersectionRatio > 0) {
							let id = res.id.substring(4);
							this.leftMenuStatus(id);
						}
					})
				})
			},
			// 设置左边菜单的滚动状态
			async leftMenuStatus(index) {
				this.current = index;
				// 如果为0，意味着尚未初始化
				if (this.menuHeight == 0 || this.menuItemHeight == 0) {
					await this.getElRect('menu-scroll-view', 'menuHeight');
					await this.getElRect('u-tab-item', 'menuItemHeight');
				}
				// 将菜单活动item垂直居中
				this.scrollTop = index * this.menuItemHeight + this.menuItemHeight / 2 - this.menuHeight / 2;
			},
			// 获取右边菜单每个item到顶部的距离
			getMenuItemTop() {
				new Promise(resolve => {
					let selectorQuery = uni.createSelectorQuery();
					selectorQuery.selectAll('.class-item').boundingClientRect((rects) => {
						// 如果节点尚未生成，rects值为[](因为用selectAll，所以返回的是数组)，循环调用执行
						if(!rects.length) {
							setTimeout(() => {
								this.getMenuItemTop();
							}, 10);
							return ;
						}
						rects.forEach((rect) => {
							// 这里减去rects[0].top，是因为第一项顶部可能不是贴到导航栏(比如有个搜索框的情况)
							this.arr.push(rect.top - rects[0].top);
							resolve();
						})
					}).exec()
				})
			},
			// 右边菜单滚动
			async rightScroll(e) {
				this.oldScrollTop = e.detail.scrollTop;
				if(this.arr.length == 0) {
					await this.getMenuItemTop();
				}
				if(this.timer) return ;
				if(!this.menuHeight) {
					await this.getElRect('menu-scroll-view', 'menuHeight');
				}
				setTimeout(() => { // 节流
					this.timer = null;
					// scrollHeight为右边菜单垂直中点位置
					let scrollHeight = e.detail.scrollTop + this.menuHeight / 2;
					for (let i = 0; i < this.arr.length; i++) {
						let height1 = this.arr[i];
						let height2 = this.arr[i + 1];
						// 如果不存在height2，意味着数据循环已经到了最后一个，设置左边菜单为最后一项即可
						if (!height2 || scrollHeight >= height1 && scrollHeight < height2) {
							this.leftMenuStatus(i);
							return ;
						}
					}
				}, 10)
			}
		}
	}
</script>