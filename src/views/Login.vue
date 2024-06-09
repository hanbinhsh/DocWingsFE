<template>
    <div class="gray-bg">
        <div class="middle-box text-center loginscreen animated fadeInDown">
		<div>
			<div>
				<img style="width: 300px;height: 300px;" src="../assets/logo-trans.png" alt="" class="img-responsive">
			</div>
			<h2>欢迎来到文档之翼</h2>
			<h3>企业及文件管理系统</h3>
			<p>登陆账号以查看内容</p>
			<form class="m-t">
				<div class="form-group">
					<input type="input" class="form-control" placeholder="用户名" id="username" v-model="username">
				</div>
				<div class="form-group">
					<input type="password" class="form-control" placeholder="密码" id="password" v-model="password">
				</div>
				<span class="help-block text-danger" id="alart"></span>
				<input type="button" class="btn btn-primary block full-width m-b" @click="login()" value="登录">
				<p class="text-muted text-center">
					<small>没有账号?</small>
				</p>
				<a class="btn btn-sm btn-white btn-block" href="register">创建新账号</a>
				<a class="btn btn-sm btn-white btn-block" href="home">返回首页</a>
			</form>
		</div>
	</div>
    </div>
</template>

<style scoped>
	@import '../assets/css/bootstrap.min.css';
    @import '../assets/font-awesome/css/font-awesome.css';
    @import '../assets/css/animate.css';
    @import '../assets/css/style.css';
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
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import axios from "axios";
import toastr from "../assets/js/plugins/toastr/toastr.min.js"
import "../assets/js/bootstrap.min.js"
import "../assets/js/plugins/metisMenu/jquery.metisMenu.js"
import "../assets/js/plugins/slimscroll/jquery.slimscroll.min.js"
import "../assets/js/bootstrap.min.js"
import "../assets/js/plugins/pace/pace.min.js"
import "../assets/js/inspinia.js"
toastr.options = {
	"closeButton": true,
	"debug": false,
	"progressBar": true,
	"preventDuplicates": false,
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

async function login() {
  try {
	if(username.value==""||password.value==""){
		toastr.error("用户名或密码为空，请检查输入信息！", "错误");
	}else{
		const response = await axios.post('/api/login', {userName: username.value, password: password.value});
		console.log(response.data)
		if (response.data === 2||response.data === 1) {
		toastr.clear();
		router.replace('/profile'); // 使用后端返回的路径
		} else if (response.data === 0) {
		toastr.error("用户名或密码错误！请重新登录！", "错误");
		username.value = '';
		password.value = '';
		document.getElementById('username').focus();
		}
	}
    
  } catch (error) {
    console.error("Error during login:", error.message); // 添加错误处理，打印错误信息
  }
}
</script>