<template>
    <div class="mainpage">
        <div id="wrapper">
            <nav class="navbar-default navbar-static-side" role="navigation">
                <div class="sidebar-collapse">
                    <ul class="nav metismenu" id="side-menu">
                        <UserItem/>
                        <li v-if="userAuth!=3">
                            <a href="UserHome"><i class="fa fa-laptop"></i> <span
                                    class="nav-label">主页</span></a>
                        </li>
                        <li v-if="userAuth!=3">
                            <a><i class="fa fa-folder-o"></i> <span
                                    class="nav-label">文件管理</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li><a href="allfiles">所有文件</a></li>
                                <li><a href="table_basic.html">图片</a></li>
                                <li><a href="table_data_tables.html">文档</a></li>
                                <li><a href="table_foo_table.html">视频</a></li>
                                <li><a href="jq_grid.html">音乐</a></li>
                                <li><a href="jq_grid.html">其他</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="share"><i class="fa fa-share-square-o"></i> <span
                                    class="nav-label">分享</span></a>
                        </li>
                        <li v-if="userAuth!=3">
                            <a href="trash"><i class="fa fa-trash-o"></i> <span
                                    class="nav-label">回收站</span></a>
                        </li>
                        <li v-if="isAdmin()">
                            <a href="usergroupediting"><i class="fa fa-group"></i> <span
                                    class="nav-label">用户组编辑</span></a>
                        </li>
                        <li v-if="isAdmin()">
                            <a href="log"><i class="fa fa-file-text-o"></i> <span class="nav-label">日志</span></a>
                        </li>
                        <li class="active">
                            <a href="profile"><i class="fa fa-diamond"></i> <span class="nav-label">个人资料</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div id="page-wrapper" class="gray-bg">
                <TopBar/>
                <div class="row wrapper border-bottom white-bg page-heading">
                    <div class="col-sm-4">
                        <h2>个人资料</h2>
                    </div>
                </div>
                <div class="wrapper wrapper-content">
                    <div class="row animated fadeInRight">
                        <div class="col-md-4">
                            <div class="ibox float-e-margins">
                                <div class="ibox-title">
                                    <h5>个人资料</h5>
                                </div>
                                <div>
                                    <div class="ibox-content no-padding border-left-right">
                                        <img alt="image" class="img-responsive" src="../assets/img/profile_big.jpg">
                                    </div>
                                    <div class="ibox-content profile-content">
                                        <h4><strong>
                                                用户名:{{ userData.userName }}
                                            </strong>
                                        </h4>
                                        <h4><strong>
                                                用户ID:{{ userData.userId }}
                                            </strong>
                                        </h4>
                                        <h4><strong>
                                                用户组ID:{{ userData.groupId }}
                                            </strong>
                                        </h4>
                                        <h4><strong>
                                                邮箱地址:{{ userData.email }}
                                            </strong>
                                        </h4>
                                        <h4><strong>
                                                电话号码:{{ userData.phone }}
                                            </strong>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="ibox float-e-margins">
                                <div class="ibox-title">
                                    <h5>更改个人资料</h5>
                                </div>
                                <div class="ibox-content">
                                    <div>
                                        <div class="feed-activity-list">
                                            <form class="m-t" role="form" action="ChangePassword" method="post">
                                                <div class="form-group">
                                                    <input autocomplete="off" type="input" id="newPhone" class="form-control"
                                                        placeholder="请输入新电话号码">
                                                </div>
                                                <div class="form-group">
                                                    <input autocomplete="off" type="input" id="newEmail" class="form-control"
                                                        placeholder="请输入新邮箱">
                                                </div>
                                                <div class="form-group">
                                                    <input type="password"  id="oldPassword" class="form-control"
                                                        placeholder="请输入旧密码" >
                                                </div>
                                                <div class="form-group">
                                                    <input type="password"  id="newpassword" class="form-control"
                                                        placeholder="请输入新密码" >
                                                </div>
                                                <div class="form-group">
                                                    <input type="password"  id="twicePassword" class="form-control"
                                                        placeholder="请再次输入密码" >
                                                </div>  
                                                <a type="submit" @click="modify()"
                                                    class="btn btn-primary block full-width m-b">提交</a>
                                                <a @click="unsubscibe()" class="btn btn-danger block full-width m-b">注销</a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FootBar/>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>

<script>
    import $ from 'jquery'
    import "../assets/js/plugins/metisMenu/jquery.metisMenu.js"
    import "../assets/js/plugins/slimscroll/jquery.slimscroll.min.js"
    import "../assets/js/inspinia.js"
    import "../assets/js/plugins/pace/pace.min.js"
    import axios from "axios";
    import TopBar from '@/components/TopBar.vue'
    import UserItem from '@/components/UserItem.vue'
    import FootBar from '@/components/FootBar.vue'
    export default {
		name: 'Profile',
        data(){
            return {
                userData: JSON.parse(sessionStorage.getItem('userData')) || {},
                userAuth: sessionStorage.getItem("authData") || 3,
            }
        },
        components: {
            TopBar,
            UserItem,
            FootBar
        },
		methods: {
            async unsubscibe(){
                const { value: password } = await this.$swal.fire({
                    title: '注销账户',
                    input: 'password',
                    inputLabel: '请输入密码',
                    showCancelButton: true,
                    confirmButtonText: '确定',  
                    cancelButtonText: '取消',
                    inputValidator: (value) => {
                        if (!value) {
                            return '未输入密码！'
                        }
                    }
                });
                if (!password) {
                    return; // 用户取消了，不做任何操作
                }
                const response = await axios.post('/api/login', { "userName": this.userData.userName, "password": password });
                // 如果用户点击了确定按钮，并且提供正确密码
                if (response.data == null||response.data=="") {
                    const response1=await axios.post('/api/findUserByName', { "userName": this.userData.userName});
                    var remainingAttempts =5- response1.data.failedAttempts;
                    this.$swal.fire('密码错误您还有'+remainingAttempts+'次机会！','','error');
                }
                else{
                    // 删除用户，并删除其收藏
                    // BUG 文件夹/文件/日志等外键依赖
                    await axios.post('/api/UserCollectionDelete', { "userId":this.userData.userId });   
                    await axios.post('/api/UserDelete', { "userId":this.userData.userId });
                    window.sessionStorage.clear();
                    this.$router.push('/login');
                }
            },
            async modify(){
                const response = await axios.post('/api/login', { "userName": this.userData.userName, "password": oldPassword.value });
                if(oldPassword.value==""){
                    this.$swal.fire('密码未输入','','error');
                }
                else if(response.data.accountLocked==true){
                    this.$swal.fire('用户已冻结,请两小时后再试','','error');
                    window.sessionStorage.clear();
                    this.$router.push('/login');
                }
                else if (response.data == null||response.data=="") {
                    const response1=await axios.post('/api/findUserByName', { "userName": this.userData.userName});
                    var remainingAttempts =5- response1.data.failedAttempts;
                    this.$swal.fire('密码错误您还有'+remainingAttempts+'次机会！','','error');
                }
                else{
                    if(newPhone.value!=""){
                    const response=await axios.post('/api/UpdatePhone',{"userId": this.userData.userId,"newPhone":newPhone.value});
                    if(response.data==true)
                    alert('您的电话号码已更改！');
                    else
                    alert('该电话号码已被使用！');
                    }
                    if(newEmail.value!=""){
                    const response4 = await axios.post('/api/UpdateEmail',{"userId": this.userData.userId,"newEmail":newEmail.value});
                    if(response4.data==true)
                    alert('您的邮箱已更改！');
                    else
                    alert('该邮箱已被使用！');
                    }
                    if(twicePassword.value==newpassword.value&&twicePassword.value!=""){
                    await axios.post('/api/UpdatePassword',{"userId": this.userData.userId,"newPassword":newpassword.value});
                    const response1 = await axios.post('/api/login', { userName: this.userData.userName, password: newpassword.value });
                    sessionStorage.setItem('userData', JSON.stringify(response1.data));
                    alert('您的密码已更改！');
                    window.location.reload();
                    }else if(twicePassword.value!=newpassword.value&&twicePassword.value!=""){
                    this.$swal.fire('两次密码不一样','','error');
                    const response2 = await axios.post('/api/login', { userName: this.userData.userName, password: oldPassword.value });
                    sessionStorage.setItem('userData', JSON.stringify(response2.data));
                    window.location.reload();
                    }else{
                        const response3 = await axios.post('/api/login', { userName: this.userData.userName, password: oldPassword.value });
                        sessionStorage.setItem('userData', JSON.stringify(response3.data));
                        window.location.reload();
                    }       
                }
            },
            isAdmin() {
                return this.userData.isAdmin; // 检查is_admin属性是否为true
            },
		}
	}
</script>