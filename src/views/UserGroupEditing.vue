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
                        <li>
                            <a v-if="isAdmin()" href="usergroupediting"><i class="fa fa-group"></i> <span class="nav-label">用户组编辑</span></a>
                        </li>
                        <li>
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
                                    <h5>编辑用户信息</h5>
                                </div>
                                <div class="ibox-content">
                                    <div>
                                        <div class="feed-activity-list">
                                            <form class="m-t" role="form" action="ChangePassword" method="post">
                                                <div class="form-group">
                                                    <input autocomplete="off" type="input" id="userId" class="form-control"
                                                        placeholder="请输入需要操作的用户ID">
                                                </div>
                                                <a type="submit" @click="resetPsw()" class="btn btn-primary block full-width m-b">重置密码</a>  
                                                <a type="submit" @click="freeze()" class="btn btn-primary block full-width m-b">冻结</a>
                                                <a type="submit" @click="defrost()" class="btn btn-primary block full-width m-b">解冻</a>
                                                <a type="submit" @click="unsubscibe()" class="btn btn-danger block full-width m-b">注销</a>
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
                if (response.data == null||response.data=="") {
                    this.$swal.fire('密码错误','','error');
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
                if (response.data == null||response.data=="") {
                    this.$swal.fire('密码错误','','error');
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
                if (response.data == null||response.data=="") {
                    this.$swal.fire('密码错误','','error');
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
                if (response.data == null||response.data=="") {
                    this.$swal.fire('密码错误','','error');
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