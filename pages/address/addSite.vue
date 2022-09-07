<template>
	<u-form :model="form" ref="uForm" >
		<u-form-item label="姓名"><u-input v-model="form.name" /></u-form-item>
		<u-form-item label="电话"><u-input v-model="form.phone" /></u-form-item>
		<u-form-item label="地址">
			<u-input v-model="form.site"></u-input>
		</u-form-item>
 		<u-form-item style="display: flex;align-items: center;justify-content: center;" >
			<view class="u-flex" style="display: flex;align-items: center;">
				<u-button @click="update" type ="success" size="medium">提交</u-button>
			</view>
		</u-form-item>
	</u-form>
</template>

<script>
	var vk = uni.vk;
	const addressObject = vk.importObject("client/address");
export default {
	onLaunch() {
		vk = uni.vk;
		this.init();
	},

	data() {
		return {
			siteList: [],
			hasWeixinAuth: true,
			encryptedKey:"",
			image:"",
			data:{},
			userInfo:[],
			form: {
				name: '',
				phone: '',
				site:''
			},
			address: []
		};
	},

	methods: {
	async update(){
		this.address =  vk.getVuex('$user.userInfo.address')
		this.address.push(this.form)
		await addressObject.update({
			data:{
				form:this.address,
				userInfo : vk.getVuex('$user.userInfo')
			}
		})
		vk.navigateBack();
	}
	,
	async add(){
		this.address =  vk.getVuex('$user.userInfo.address')
		this.address.push(form)
		
		await addressObject.add({
			title:'请求中',
			data:{
				data: this.address
			}
		})
	},
	},
	init(){
			let that = this;
			// #ifdef MP-WEIXIN
			vk.userCenter.code2SessionWeixin({
				data:{
					needCache:true
				},
				success: (data) => {
					that.encryptedKey = data.encryptedKey;
				},
			});
			// #endif
		},
}
</script>

<style lang="scss" scoped>
	.submit{
		
	}
</style>