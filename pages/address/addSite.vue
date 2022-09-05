<template>
	<u-form :model="form" ref="uForm" >
		<u-form-item label="姓名"><u-input v-model="form.name" /></u-form-item>
		<u-form-item label="电话"><u-input v-model="form.number" /></u-form-item>
		<u-form-item label="省份">
			<u-input v-model="form.province"></u-input>
		</u-form-item>
		<u-form-item label="地址">
			<u-input v-model="form.site"></u-input>
		</u-form-item>
 		<u-form-item style="display: flex;align-items: center;justify-content: center;" >
			<view class="u-flex" style="display: flex;align-items: center;">
				<u-button  type ="success" size="medium">提交</u-button>
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
				number: '',
				province: '',
				site:''
			},
		};
	},

	methods: {
	
	},
}
</script>

<style lang="scss" scoped>
	.submit{
		
	}
</style>