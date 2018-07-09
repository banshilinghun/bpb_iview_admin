<style lang="less">
	@import './login.less';
</style>

<template>
	<div class="login" @keydown.enter="handleSubmit">
		<div class="login-con">
			<Card :bordered="false">
				<p slot="title">
					<Icon type="log-in"></Icon>
					欢迎登录
				</p>
				<div class="form-con">
					<Form ref="loginForm" :model="form" :rules="rules">
						<FormItem prop="userName">
							<Input v-model="form.userName" placeholder="请输入用户名">
							<span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
							</Input>
						</FormItem>
						<FormItem prop="password">
							<Input type="password" v-model="form.password" placeholder="请输入密码">
							<span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
							</Input>
						</FormItem>
						<FormItem>
							<Button @click="handleSubmit" type="primary" long>登录</Button>
						</FormItem>
					</Form>
					<!-- <p class="login-tip">输入任意用户名和密码即可</p>-->
				</div>
			</Card>
		</div>
	</div>
</template>

<script>
	import Cookies from 'js-cookie';
	import { loginByUsername, logout, getUserInfo } from '@/api/login'
	export default {
		data() {
			return {
				form: {
					userName: '',
					password: ''
				},
				rules: {
					userName: [{
						required: true,
						message: '账号不能为空',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '密码不能为空',
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			handleSubmit() {
				this.$refs.loginForm.validate((valid) => {
					if(valid) {
						const username = this.form.userName.trim();
						return new Promise((resolve, reject) => {
							loginByUsername(username, this.form.password).then(response => {
								const data = response.data
								Cookies.set('user', this.form.userName);
								this.$store.commit('setAvator', 'https://wx.qlogo.cn/mmhead/Q3auHgzwzM5BCHQ40LAvUVfggXkReGhEEHRpLb51UjClRfxD3vFfJg/0');
								console.log(data)
								if(this.form.userName === 'pefami') {
									Cookies.set('access', 0);
								} else {
									Cookies.set('access', 1);
								}
								this.$router.push({
									name: 'home_index'
								});
							}).catch(error => {
								reject(error)
							})
						})

						//                  this.$store.commit('setAvator', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg');

					}
				});
			}
		}
	};
</script>

<style>

</style>