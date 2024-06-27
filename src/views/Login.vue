<template>
	<div class="gray-bg">
		<div class="middle-box text-center loginscreen animated fadeInDown">
			<div>
				<div>
					<img style="width: 300px;height: 250px;object-fit: cover;" src="../assets/logo-trans.png" alt=""
						class="img-responsive">
				</div>
				<h2>欢迎来到文档之翼</h2>
				<h3>企业级文件管理系统</h3>
				<p>登陆账号以查看内容</p>
				<form class="m-t">
					<div class="form-group">
						<input type="input" class="form-control" placeholder="用户名" id="username" v-model="username">
					</div>
					<div class="form-group">
						<input type="password" class="form-control" placeholder="密码" id="password" v-model="password">
					</div>
					<!-- <button @click="onShow">开始验证</button> -->
					<Vcode  :show="isShow" @success="onSuccess" :key="new Date()"/>
					<span class="help-block text-danger" id="alart"></span>
					<input type="button" class="btn btn-primary block full-width m-b" @click="onShow()" value="登录" >
					<p class="text-muted text-center">
						<small>没有账号?</small>
					</p>
					<a class="btn btn-sm btn-white btn-block" href="register">创建新账号</a>
					<a class="btn btn-sm btn-white btn-block" href="/">返回首页</a>
				</form>
			</div>
		</div>
	</div>
</template>

<style scoped>
@import '../assets/css/plugins/toastr/toastr.min.css';
</style>

<script>
import $ from 'jquery'
export default {
	name: 'Login',
	methods: {
	}
}
</script>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios, { Axios } from "axios";
import Vcode from "vue3-puzzle-vcode";
import toastr from "../assets/js/plugins/toastr/toastr.min.js"
import "../assets/js/plugins/metisMenu/jquery.metisMenu.js"
import "../assets/js/plugins/slimscroll/jquery.slimscroll.min.js"
import "../assets/js/bootstrap.min.js"
import "../assets/js/plugins/pace/pace.min.js"
import "../assets/js/inspinia.js"
toastr.options = {
	"closeButton": true,
	"debug": false,
	"progressBar": true,
	"preventDuplicates": true,
	"positionClass": "toast-bottom-center",
	"onclick": null,
	"showDuration": "400",
	"hideDuration": "1000",
	"timeOut": "7000",
	"extendedTimeOut": "1000",
	"showEasing": "swing",
	"hideEasing": "linear",
	"showMethod": "fadeIn",
	"hideMethod": "fadeOut"
}

const router = useRouter();
const username = ref('');
const password = ref('');
const isShow = ref(false);
const onShow = () => {
    isShow.value = true;
};
const onClose = () => {
    isShow.value = false;
	login();
};

const onSuccess = () => {
    onClose(); // 验证成功，需要手动关闭模态框
};

async function login() {
	try {
		if (username.value == "" || password.value == "") {  // 用户名密码为空错误
			toastr.error("用户名或密码为空，请检查输入信息！", "错误");
		} else {
			const response = await axios.post('/api/login', { userName: username.value, password: password.value });
			if(response.data.accountLocked==true){
				toastr.error("账户已冻结！请两个小时后再试！", "错误");
			}
			else if (response.data == null||response.data=="") {  // 登陆失败
				const response1=await axios.post('/api/findUserByName', { userName: username.value});
				if(response1.data== null||response1.data==""){
					toastr.error("用户名错误！请重新登录！", "错误");
				}else{
					var remainingAttempts = 5 - response1.data.failedAttempts;	
					toastr.error("密码错误！请重新登录！您还有"+remainingAttempts+"次机会!", "错误");
				}
				username.value = '';
				password.value = '';
				document.getElementById('username').focus();  // 光标移至用户名输入
			} else {
				sessionStorage.setItem('userData', JSON.stringify(response.data));
				const auth = await axios.get('/api/findAuthByUserId?userId=' + response.data.userId);
				sessionStorage.setItem('authData', auth.data);
				const groupName = await axios.post('/api/findGroupNameByUserId',{userId: response.data.userId})
				sessionStorage.setItem('groupName', groupName.data);
				toastr.clear();  // 清空错误信息
				// BUG 防止出错
				if(auth==3){
					router.replace('/profile').then(() => {  // 跳转后强制刷新
						window.location.reload();
					});
				}else{
					router.replace('/userhome').then(() => {  // 跳转后强制刷新
						window.location.reload();
					});
				}
			}		
		}
	} catch (error) {}
}
</script>