<template>
    <div class="mainpage">
        <div id="wrapper">
            <nav class="navbar-default navbar-static-side" role="navigation">
                <div class="sidebar-collapse">
                    <ul class="nav metismenu" id="side-menu">
                        <UserItem/>
                        <li>
                            <a href="UserHome"><i class="fa fa-laptop"></i> <span
                                    class="nav-label">主页</span></a>
                        </li>
                        <li>
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
                        <li>
                            <a href="trash"><i class="fa fa-trash-o"></i> <span
                                    class="nav-label">回收站</span></a>
                        </li>
                        <li class="active" v-if="isAdmin()">
                            <a href="usergroupediting"><i class="fa fa-group"></i> <span class="nav-label">用户组编辑</span></a>
                        </li>
                        <li v-if="isAdmin()">
                            <a href="log"><i class="fa fa-file-text-o"></i> <span class="nav-label">日志</span></a>
                        </li>
                        <li >
                            <a href="profile"><i class="fa fa-diamond"></i> <span class="nav-label">个人资料</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div id="page-wrapper" class="gray-bg">
                <TopBar/>
                <div class="row wrapper border-bottom white-bg page-heading">
                    <div class="col-sm-4">
                        <h2>用户组编辑</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="wrapper wrapper-content animated fadeInUp">
                            <div class="ibox">
                                <div class="ibox-content">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="m-b-md">
                                                <a @click.prevent="insertGroup()" class="btn btn-white btn-xs pull-right">
                                                    新增用户组
                                                </a>
                                                <h2>操作</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row m-t-sm">
                                        <div class="col-lg-12">
                                            <div class="panel blank-panel">
                                                <div class="panel-heading">
                                                    <div class="panel-options">
                                                        <ul class="nav nav-tabs">
                                                            <li class="active"><a href="project_detail.html#tab-1"
                                                                    data-toggle="tab">用户信息</a></li>
                                                            <li class=""><a href="project_detail.html#tab-2"
                                                                    data-toggle="tab">用户组信息</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="panel-body">
                                                    <div class="tab-content">
                                                        <div class="tab-pane active" id="tab-1">
                                                            <table class="table table-striped">
                                                                <thead>
                                                                    <tr>
                                                                        <th>用户ID</th>
                                                                        <th>用户名</th>
                                                                        <th>用户组名</th>
                                                                        <th>权限</th>
                                                                        <th>电子邮件</th>
                                                                        <th>电话号码</th>
                                                                        <th>用户状态</th>
                                                                        <th>操作</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr v-for="(user) in users" class="read">
                                                                        <td>{{ user.userId }}</td>
                                                                        <td>{{ user.userName }}</td>
                                                                        <td>{{ findGroupNameByUserId(user.userId) }}</td>
                                                                        <td>{{ user.email }}</td>
                                                                        <td>{{ user.phone }}</td>
                                                                        <td v-if="user.accountLocked">冻结</td>
                                                                        <td v-else>正常</td>
                                                                        <td>
                                                                            <div class="btn-group">
                                                                                <a @click.prevent="resetPsw(user.userId)">
                                                                                    <i class="fa fa-key"></i>&nbsp;
                                                                                </a>
                                                                                <a v-if="user.accountLocked" @click.prevent="defrost(user.userId)">
                                                                                    <i class="fa fa-fire"></i>&nbsp;
                                                                                </a>
                                                                                <a v-else @click.prevent="freeze(user.userId)">
                                                                                    <i class="fa fa-empire"></i>&nbsp;
                                                                                </a>
                                                                                <a @click.prevent="unsubscibe(user.userId)">
                                                                                    <i class="fa fa-trash-o"></i>&nbsp;
                                                                                </a>
                                                                                <a @click.prevent="updateGroup(user.userId)">
                                                                                    <i class="fa fa-arrows"></i>&nbsp;
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div class="tab-pane" id="tab-2">
                                                            <table class="table table-striped">
                                                                <thead>
                                                                    <tr>
                                                                        <th>用户组名</th>
                                                                        <th>权限</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr v-for="(log, index) in logs" :key="index">
                                                                        <td>{{ log.userName }}</td>
                                                                        <td>{{ log.groupName }}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
		name: 'UserGroupEditing',
        data(){
            return {
                userData: JSON.parse(sessionStorage.getItem('userData')) || {},
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
                    title: '用户验证',
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
                if(response.data.accountLocked==true){
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
                    // 删除用户，并删除其收藏
                    // BUG 文件夹/文件/日志等外键依赖
                    await axios.post('/api/UserCollectionDelete', { "userId":userId.value });   
                    await axios.post('/api/UserDelete', { "userId":userId.value });
                    alert('该用户已注销！');
                }
            },
            async resetPsw(){
                const { value: password } = await this.$swal.fire({
                    title: '用户验证',
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
                if(response.data.accountLocked==true){
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
                    //重置该用户密码
                    const response=await axios.post('/api/resetPsw', { "userId":userId.value }); 
                    if(response.data!=null) 
                    alert('已重置该用户密码！');
                    else
                    alert('该用户不存在！');
                }
            },
            async freeze(){
                const { value: password } = await this.$swal.fire({
                    title: '用户验证',
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
                if(response.data.accountLocked==true){
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
                    // 用户存在冻结
                    const response=await axios.post('/api/freeze', { "userId":userId.value }); 
                    if(response.data!=null)  
                    alert('该用户已冻结！');
                    else
                    alert('该用户不存在！');
                }
            },
            async defrost(){
                const { value: password } = await this.$swal.fire({
                    title: '用户验证',
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
                if(response.data.accountLocked==true){
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
                    //解冻用户
                    const response=await axios.post('/api/defrost', { "userId":userId.value }); 
                    if(response.data!=null)  
                    alert('已解冻该用户！');
                    else
                    alert('该用户不存在！');
                }
            },
            isAdmin() {
                return this.userData.isAdmin; // 检查is_admin属性是否为true
            },
		}
	}
</script>