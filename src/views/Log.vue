<template>
    <div class="mainpage">
        <div id="wrapper">
            <nav class="navbar-default navbar-static-side" role="navigation">
                <div class="sidebar-collapse">
                    <ul class="nav metismenu" id="side-menu">
                        <UserItem/>
                        <li>
                            <a href="userhome"><i class="fa fa-laptop"></i> <span class="nav-label">主页</span></a>
                        </li>
                        <li>
                            <a><i class="fa fa-folder-o"></i> <span class="nav-label">文件管理</span><span
                                    class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li><a href="allFiles">所有文件</a></li>
                                <li><a href="table_basic.html">图片</a></li>
                                <li><a href="table_data_tables.html">文档</a></li>
                                <li><a href="table_foo_table.html">视频</a></li>
                                <li><a href="jq_grid.html">音乐</a></li>
                                <li><a href="jq_grid.html">其他</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="share"><i class="fa fa-share-square-o"></i> <span class="nav-label">分享</span></a>
                        </li>
                        <li>
                            <a href="trash"><i class="fa fa-trash-o"></i> <span
                                    class="nav-label">回收站</span></a>
                        </li>
                        <li v-if="isAdmin()">
                            <a href="usergroupediting"><i class="fa fa-group"></i> <span
                                    class="nav-label">用户组编辑</span></a>
                        </li>
                        <li class="active" v-if="isAdmin()">
                            <a href="log"><i class="fa fa-file-text-o"></i> <span class="nav-label">日志</span></a>
                        </li>
                        <li>
                            <a href="profile"><i class="fa fa-diamond"></i> <span class="nav-label">个人资料</span></a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div id="page-wrapper" class="gray-bg">
                <TopBar />
                <div class="row wrapper border-bottom white-bg page-heading">
                    <div class="col-sm-4">
                        <h2>日志</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-9">
                        <div class="wrapper wrapper-content animated fadeInUp">
                            <div class="ibox">
                                <div class="ibox-content">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="m-b-md">
                                                <a @click.prevent="insertGroup()" class="btn btn-white btn-xs pull-right">
                                                    新增用户组
                                                </a>
                                                <h2>Contract with Zender Company</h2>
                                            </div>
                                            <dl class="dl-horizontal">
                                                <dt>Status:</dt>
                                                <dd><span class="label label-primary">Active</span></dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-5">
                                            <dl class="dl-horizontal">

                                                <dt>Created by:</dt>
                                                <dd>Alex Smith</dd>
                                                <dt>Messages:</dt>
                                                <dd> 162</dd>
                                                <dt>Client:</dt>
                                                <dd><a href="project_detail.html#" class="text-navy"> Zender Company</a>
                                                </dd>
                                                <dt>Version:</dt>
                                                <dd> v1.4.2 </dd>
                                            </dl>
                                        </div>
                                        <div class="col-lg-7" id="cluster_info">
                                            <dl class="dl-horizontal">

                                                <dt>Last Updated:</dt>
                                                <dd>16.08.2014 12:15:57</dd>
                                                <dt>Created:</dt>
                                                <dd> 10.07.2014 23:36:57 </dd>
                                                <dt>Participants:</dt>
                                                <dd class="project-people">
                                                    <a href="project_detail.html"><img alt="image" class="img-circle"
                                                            src="../assets/img/a3.jpg"></a>
                                                    <a href="project_detail.html"><img alt="image" class="img-circle"
                                                            src="../assets/img/a1.jpg"></a>
                                                    <a href="project_detail.html"><img alt="image" class="img-circle"
                                                            src="../assets/img/a2.jpg"></a>
                                                    <a href="project_detail.html"><img alt="image" class="img-circle"
                                                            src="../assets/img/a4.jpg"></a>
                                                    <a href="project_detail.html"><img alt="image" class="img-circle"
                                                            src="../assets/img/a5.jpg"></a>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <dl class="dl-horizontal">
                                                <dt>Completed:</dt>
                                                <dd>
                                                    <div class="progress progress-striped active m-b-sm">
                                                        <div style="width: 60%;" class="progress-bar"></div>
                                                    </div>
                                                    <small>Project completed in <strong>60%</strong>. Remaining close
                                                        the project, sign a contract and invoice.</small>
                                                </dd>
                                            </dl>
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
                                                                    data-toggle="tab">日志信息</a></li>
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
                                                                        <th>#</th>
                                                                        <th>用户名</th>
                                                                        <th>用户组名</th>
                                                                        <th>电子邮件</th>
                                                                        <th>行为</th>
                                                                        <th>重要性</th>
                                                                        <th>时间</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr v-for="(log, index) in logs" :key="index">
                                                                        <td>{{ index + 1 }}</td>
                                                                        <td>{{ log.userName }}</td>
                                                                        <td>{{ log.groupName }}</td>
                                                                        <td>{{ log.email }}</td>
                                                                        <td>{{ log.act }}</td>
                                                                        <td>{{ log.importance }}</td>
                                                                        <td>{{ new Date(log.logTime).toLocaleString() }}
                                                                        </td>
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
                    <div class="col-lg-3">
                        <div class="wrapper wrapper-content project-manager">
                            <h4>Project description</h4>
                            <img src="../assets/img/zender_logo.png" class="img-responsive">
                            <p class="small">
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't
                                look
                                even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to
                                be sure there isn't anything embarrassing
                            </p>
                            <p class="small font-bold">
                                <span><i class="fa fa-circle text-warning"></i> High priority</span>
                            </p>
                            <h5>Project tag</h5>
                            <ul class="tag-list" style="padding: 0">
                                <li><a href="project_detail.html"><i class="fa fa-tag"></i> Zender</a></li>
                                <li><a href="project_detail.html"><i class="fa fa-tag"></i> Lorem ipsum</a></li>
                                <li><a href="project_detail.html"><i class="fa fa-tag"></i> Passages</a></li>
                                <li><a href="project_detail.html"><i class="fa fa-tag"></i> Variations</a></li>
                            </ul>
                            <h5>Project files</h5>
                            <ul class="list-unstyled project-files">
                                <li><a href="project_detail.html"><i class="fa fa-file"></i> Project_document.docx</a>
                                </li>
                                <li><a href="project_detail.html"><i class="fa fa-file-picture-o"></i>
                                        Logo_zender_company.jpg</a></li>
                                <li><a href="project_detail.html"><i class="fa fa-stack-exchange"></i>
                                        Email_from_Alex.mln</a></li>
                                <li><a href="project_detail.html"><i class="fa fa-file"></i>
                                        Contract_20_11_2014.docx</a></li>
                            </ul>
                            <div class="text-center m-t-md">
                                <a href="project_detail.html#" class="btn btn-xs btn-primary">Add files</a>
                                <a href="project_detail.html#" class="btn btn-xs btn-primary">Report contact</a>

                            </div>
                        </div>
                    </div>
                </div>
                <FootBar/>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import "../assets/js/plugins/metisMenu/jquery.metisMenu.js"
import "../assets/js/plugins/slimscroll/jquery.slimscroll.min.js"
import animationHover from "../assets/js/inspinia.js"
import "../assets/js/plugins/pace/pace.min.js"
import axios from "axios";

import TopBar from '@/components/TopBar.vue'
import UserItem from '@/components/UserItem.vue'
import FootBar from '@/components/FootBar.vue'
export default {
    name: 'Log',
    components: {
        TopBar,
        UserItem,
        FootBar
    },
    data() {
        return {
            logs: [],
            userData: JSON.parse(sessionStorage.getItem('userData')) || {},
            users: [],
        };
    },
    created() {
        this.fetchLogs();
        this.findAllUsers();
    },
    methods: {
        async fetchLogs() {
            try {
                const response = await axios.get('/api/allLog');
                this.logs = response.data.data.logPage;
            } catch (error) {
                console.error('Error fetching logs:', error);
            }
        },
        isAdmin() {
            return this.userData.isAdmin; // 检查is_admin属性是否为true
        },
        async findAllUsers(){
            const response = await axios.get('/api/findAllUsers');
            this.users = response.data;
        },
        async Validate(){
            const { value: password } = await this.$swal.fire({
                    title: '用户验证',
                    input: 'password',
                    inputLabel: '请输入密码',
                    showCancelButton: true,
                    confirmButtonText: '确定',  
                    cancelButtonText: '取消',
                    inputValidator: (value) => {
                        if (!value) {
                            return false;
                        }
                    }
                });
                if (!password) {
                    return false; // 用户取消了，不做任何操作
                }
                const response = await axios.post('/api/login', { "userName": this.userData.userName, "password": password });
                if(response.data.accountLocked==true){
                    this.$swal.fire('用户已冻结,请两小时后再试','','error');
                    window.sessionStorage.clear();
                    this.$router.push('/login');
                }
                else if (response.data == null||response.data=="") {
                    const response1=await axios.post('/api/findUserByName', { "userName": this.userData.userName});
                    var remainingAttempts =5- response1.data.failedAttempts;
                    this.$swal.fire('密码错误您还有'+remainingAttempts+'次机会！','','error');
                    return false;
                }
                return true;
            },
            async unsubscibe(userId){
                    // 删除用户，并删除其收藏
                    // BUG 文件夹/文件/日志等外键依赖
                    await axios.post('/api/UserCollectionDelete', { "userId":userId });   
                    await axios.post('/api/UserDelete', { "userId":userId.value });
                    const response = await axios.get('/api/findAllUsers');
                    this.users = response.data;
                    alert('该用户已注销！');
                    //window.location.reload(); 
            },
            async resetPsw(userId){
                    //重置该用户密码
                    const response=await axios.post('/api/resetPsw', { "userId":userId });
                    const response1 = await axios.get('/api/findAllUsers');
                    this.users = response1.data; 
                    if(response.data!=null) 
                    alert('已重置该用户密码！');
                    else
                    alert('该用户不存在！');
                    //window.location.reload(); 
            },
            async freeze(userId){
                    // 用户存在冻结
                    const response=await axios.post('/api/freeze', { "userId":userId });
                    const response1 = await axios.get('/api/findAllUsers');
                    this.users = response1.data; 
                    if(response.data!=null)  
                    alert('该用户已冻结！');
                    else
                    alert('该用户不存在！');
                    //window.location.reload(); 
            },
            async defrost(userId){
                    //解冻用户
                    const response=await axios.post('/api/defrost', { "userId":userId });
                    const response1 = await axios.get('/api/findAllUsers');
                    this.users = response1.data;
                    if(response.data!=null)  
                    alert('已解冻该用户！');
                    else
                    alert('该用户不存在！');
                    //window.location.reload(); 
            },
            async updateGroup(userId){
                const { value: groupId } = await this.$swal.fire({
                    title: '用户组更改',
                    input: 'text',
                    inputLabel: '请输入用户组ID',
                    showCancelButton: true,
                    confirmButtonText: '确定',  
                    cancelButtonText: '取消',
                    inputValidator: (groupId) => {
                        if (!groupId) {
                            return '未输入用户组ID！'
                        }
                    }
                });
                if (!groupId) {
                    return; // 用户取消了，不做任何操作
                }
                await axios.post('/api/updateGroup', { "userId":userId ,"groupId":groupId});
                const response1 = await axios.get('/api/findAllUsers');
                this.users = response1.data;
                //window.location.reload(); 
            },
            async insertGroup(){
                const { value: groupName } = await this.$swal.fire({
                    title: '增加用户组',
                    input: 'text',
                    inputLabel: '请输入用户组名字',
                    showCancelButton: true,
                    confirmButtonText: '确定',  
                    cancelButtonText: '取消',
                    inputValidator: (groupName) => {
                        if (!groupName) {
                            return '未输入用户组名字！'
                        }
                    }
                });
                if (!groupName) {
                    return; // 用户取消了，不做任何操作
                }
                await axios.post('/api/insertGroup', { "groupName":groupName});
                const response1 = await axios.get('/api/findAllUsers');
                this.users = response1.data;
                //window.location.reload();
            },
            async findGroupNameByUserId(userId){
                const response = await axios.post('/api/findGroupNameByUserId',{"userId":userId});
                // console.log(response.data);
                return response.data;
            }
    },
    mounted() {
        $(document).ready(function () {
            $('#loading-example-btn').click(function () {
                btn = $(this);
                simpleLoad(btn, true)
                // Ajax example
                // $.ajax().always(function () {
                // simpleLoad($(this), false)
                // });
                simpleLoad(btn, false)
            });
        });

        function simpleLoad(btn, state) {
            if (state) {
                btn.children().addClass('fa-spin');
                btn.contents().last().replaceWith(" Loading");
            } else {
                setTimeout(function () {
                    btn.children().removeClass('fa-spin');
                    btn.contents().last().replaceWith(" Refresh");
                }, 2000);
            }
        }
    }
}
</script>