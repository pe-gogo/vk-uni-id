<template>
	<view class="big" style="font-size: 54rpx;padding: 50rpx 0 0 50rpx;">
		新增地址
	</view>
	<view class="sm"  style="font-size: 24rpx;padding: 8rpx 0 0 50rpx;color: gray;">
		请完善新增地址信息
	</view>
	<view class="add">
		<u-form :model="form" ref="uForm">
			<u-form-item label="姓名" prop="name" labelWidth="150rpx">
				<u-input v-model="form.name" placeholder="请输入姓名"  />
			</u-form-item>
			<u-form-item label="手机号" prop="phone" labelWidth="150rpx">
				<u-input v-model="form.phone" placeholder="请输入手机号" />
			</u-form-item>
			<u-form-item label="配送地址" prop="info" labelWidth="150rpx">
				<u-input v-model="form.info" @click="getLocation" placeholder="请选择地址"/>
			</u-form-item>
			<u-form-item label="详细地址" prop="addressInfo" labelWidth="150rpx">
				<u-input v-model="form.addressInfo" placeholder="请填写配送地址"/>
			</u-form-item>
		</u-form>
		<u-button @click="submit" :customStyle="style">提交</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: {
				name: '',
				phone: '',
				info:'',
				addressInfo:'',
				address: [ ]
				
			},
			style:{
				position: "flexd",
				width:"290px",
				marginTop: "30px"
			},
			rules: {
				name: [
					{ 
						required: true, 
						message: '请输入姓名', 
						// 可以单个或者同时写两个触发验证方式 
					}
				],
				phone: [
					{
						required: true,
						len:11,
						message: '手机号格式错误', 
					}
				],
				info: [
					{
						required: true,
						message: '请选择详细地址',
					}
				],
				addressInfo: [
					{
						required: true,
						message: '请输入详细地址'
					}
				
				]
			}
		};
	},
	computed:{
	
	},
	methods: {
		async add(){
					this.address =  vk.getVuex('$user.userInfo.address')
					this.address.push(this.form)
					
					await addressObject.add({
						title:'添加中',
						data:{
							data: this.address
						}
					})
				
		},
		async getLocation(){
			let res = await wx.chooseLocation()
			this.form.info = res.address +res.name
			
		},
		async submit() {
			this.$refs.uForm.validate(valid => {
				if (valid) {
					console.log('验证通过');
				} else {
					console.log('验证失败');
				}
			});
			
			this.address =  vk.getVuex('$user.userInfo.address')
			this.address.push(this.form)
			
			vk.callFunction({
				url: 'client/address.add',
				title: '请求中...',
				data: {
					address: this.address
				},
				success: (data) => {
					vk.setVuex('$user.userInfo.address',this.address)
				}
			});
		}
	},
	// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	}
};
</script>

<style scoped lang="scss">
	.add{
		padding: 50rpx;
	}
</style>