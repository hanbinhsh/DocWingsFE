<template>
    <div class="mainpage">
        <div id="wrapper">
            <nav class="navbar-default navbar-static-side" role="navigation">
                <div class="sidebar-collapse">
                    <ul class="nav metismenu" id="side-menu">
                        <UserItem />
                        <li>
                            <a href="UserHome"><i class="fa fa-laptop"></i> <span class="nav-label">主页</span></a>
                        </li>
                        <li>
                            <a><i class="fa fa-folder-o"></i> <span class="nav-label">文件管理</span><span
                                    class="fa arrow"></span></a>
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
                            <a href="share"><i class="fa fa-share-square-o"></i> <span class="nav-label">分享</span></a>
                        </li>
                        <li>
                            <a href="trash"><i class="fa fa-trash-o"></i> <span class="nav-label">回收站</span></a>
                        </li>
                        <li class="active" v-if="isAdmin()">
                            <a href="usergroupediting"><i class="fa fa-group"></i> <span
                                    class="nav-label">用户组编辑</span></a>
                        </li>
                        <li v-if="isAdmin()">
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
                                                <a @click.prevent="insertGroup()"
                                                    class="btn btn-white btn-xs pull-right">
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
                                                        <div class="tab-pane active table-responsive" id="tab-1">
                                                            <table class="table table-striped ibox-content">
                                                                <thead>
                                                                    <tr>
                                                                        <th>用户名</th>
                                                                        <th></th>
                                                                        <th>用户组名</th>
                                                                        <th></th>
                                                                        <th>电子邮件</th>
                                                                        <th></th>
                                                                        <th>电话号码</th>
                                                                        <th></th>
                                                                        <th>用户状态</th>
                                                                        <th></th>
                                                                        <th>操作</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr v-for="(user) in users" class="read">
                                                                        <td>{{ user.userName }}</td>
                                                                        <td><a @click=""><i class="fa fa-edit"></i></a></td>
                                                                        <td>{{ user.groupName }}</td>
                                                                        <td>
                                                                            <a
                                                                                @click.prevent="updateGroup(user.userId)">
                                                                                <i class="fa fa-arrows"></i>&nbsp;
                                                                            </a>
                                                                        </td>
                                                                        <td>{{ user.email }}</td>
                                                                        <td><a @click=""><i class="fa fa-edit"></i></a></td>
                                                                        <td>{{ user.phone }}</td>
                                                                        <td><a @click=""><i class="fa fa-edit"></i></a></td>
                                                                        <td v-if="user.accountLocked">已冻结</td>
                                                                        <td v-else>正常</td>
                                                                        <td>
                                                                            <a v-if="user.accountLocked"
                                                                                @click.prevent="defrost(user.userId)">
                                                                                <i class="fa fa-fire"></i>&nbsp;
                                                                            </a>
                                                                            <a v-else
                                                                                @click.prevent="freeze(user.userId)">
                                                                                <i class="fa fa-empire"></i>&nbsp;
                                                                            </a>
                                                                        </td>
                                                                        <td>
                                                                            <div class="btn-group">
                                                                                <a
                                                                                    @click.prevent="resetPsw(user.userId)">
                                                                                    <i class="fa fa-key"></i>&nbsp;
                                                                                </a>
                                                                                <a
                                                                                    @click.prevent="unsubscibe(user.userId)">
                                                                                    <i class="fa fa-trash-o"></i>&nbsp;
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div class="tab-pane table-responsive" id="tab-2">
                                                            <table class="table table-striped ibox-content">
                                                                <thead>
                                                                    <tr>
                                                                        <th>用户组名</th>
                                                                        <th></th>
                                                                        <th>权限</th>
                                                                        <th></th>
                                                                        <th>操作</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr v-for="(group, index) in usergroups"
                                                                        :key="index" class="read">
                                                                        <td>{{ group.groupName }}</td>
                                                                        <td>
                                                                            <a @click="editGropName()"><i
                                                                                    class="fa fa-edit"></i></a>
                                                                        </td>
                                                                        <td>
                                                                            {{ shareAuth(group.auth) }}
                                                                        </td>
                                                                        <td>
                                                                            <a @click="editGropAuth()"><i
                                                                                    class="fa fa-edit"></i></a>
                                                                        </td>
                                                                        <td>
                                                                            <a @click="deleteGroup()"><i
                                                                                    class="fa fa-trash-o"></i></a>
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
                </div>
                <FootBar />
            </div>
        </div>
    </div>
</template>

<style scoped></style>

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
import toastr from "../assets/js/plugins/toastr/toastr.min.js"
toastr.options = {
    "closeButton": true,
    "debug": false,
    "progressBar": true,
    "preventDuplicates": true,
    "positionClass": "toast-bottom-center",
    "onclick": null,
    "showDuration": "400",
    "hideDuration": "1000",
    "timeOut": "3000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}
export default {
    name: 'UserGroupEditing',
    data() {
        return {
            userData: JSON.parse(sessionStorage.getItem('userData')) || {},
            users: [],
            usergroups: []
        }
    },
    components: {
        TopBar,
        UserItem,
        FootBar
    },
    computed: {},
    created() {
        this.updateUserInfo();
    },
    methods: {
        shareAuth(auth) {
            if (auth == -1) {
                return "无权限"
            } else if (auth == 1) {
                return "普通用户：除拥有除用户组编辑、日志查看的权限，其他功能正常"
            } else if (auth == 2) {
                return "1类受限用户：禁止删除文件"
            } else if (auth == 3) {
                return "2类受限用户：仅能操作对其分享的文件，禁用回收站（禁用放入回收站和删除文件）"
            } else if (auth == 10) {
                return "管理员：拥有所有权限"
            }
        },
        async findUserGroups() {
            const response = await axios.get('/api/findUserGroups');
            this.usergroups = response.data.data.usergroups;
        },
        isAdmin() {
            return this.userData.isAdmin; // 检查is_admin属性是否为true
        },
        async validateUser(actionCallback, additionalInput = null) {
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
            if (response.data.accountLocked) {
                this.$swal.fire('用户已冻结,请两小时后再试', '', 'error');
                window.sessionStorage.clear();
                this.$router.push('/login');
                return false;
            } else if (!response.data) {
                const response1 = await axios.post('/api/findUserByName', { "userName": this.userData.userName });
                const remainingAttempts = 5 - response1.data.failedAttempts;
                this.$swal.fire('密码错误！您还有' + remainingAttempts + '次机会！', '', 'error');
                return false;
            }
            if (additionalInput) {
                const { value } = await this.$swal.fire(additionalInput);
                if (!value) {
                    return false; // 用户取消了，不做任何操作
                }
                await actionCallback(value);
            } else {
                await actionCallback();
            }
            return true;
        },
        async unsubscribe(userId) {
            const actionCallback = async () => {
                await axios.post('/api/UserCollectionDelete', { "userId": userId });
                await axios.post('/api/UserDelete', { "userId": userId });
                toastr.success('已注销账户', '成功');
                await this.updateUserInfo();
            };
            await this.validateUser(actionCallback);
        },
        async resetPsw(userId) {
            const actionCallback = async () => {
                const response1 = await axios.post('/api/resetPsw', { "userId": userId });
                const response2 = await axios.get('/api/findAllUsers');
                this.users = response2.data;
                if (response1.data != null)
                    toastr.success('已重置该用户密码为123456！', '成功');
                else
                    toastr.error('该用户不存在！', '错误');
            };
            await this.validateUser(actionCallback);
        },
        async freeze(userId) {
            const actionCallback = async () => {
                const response1 = await axios.post('/api/freeze', { "userId": userId });
                const response2 = await axios.get('/api/findAllUsers');
                this.users = response2.data;
                if (response1.data != null)
                    toastr.success('成功冻结该用户！', '成功');
                else
                    toastr.error('该用户不存在！', '错误');
            };
            await this.validateUser(actionCallback);
        },
        async defrost(userId) {
            const actionCallback = async () => {
                const response1 = await axios.post('/api/defrost', { "userId": userId });
                const response2 = await axios.get('/api/findAllUsers');
                this.users = response2.data;
                if (response1.data != null)
                    toastr.success('已解冻该用户！', '成功');
                else
                    toastr.error('该用户不存在！', '错误');
            };
            await this.validateUser(actionCallback);
        },
        async updateGroup(userId) {
            const additionalInput = {
                title: '用户组更改',
                input: 'text',
                inputLabel: '请输入用户组名',
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputValidator: (groupName) => {
                    if (!groupName) {
                        return '未输入用户组名！';
                    }
                }
            };
            const actionCallback = async (groupName) => {
                const response = await axios.post('/api/findUserGroupByName?name=' + groupName);
                const data = response.data.data;
                if (data.state == 0) {
                    this.$swal.fire('用户组不存在', '请重新输入', 'error');
                    return;
                }
                const acceptGroupId = data.userGroup.groupId;
                await axios.post('/api/updateGroup', { "userId": userId, "groupId": acceptGroupId });
                toastr.success('用户组更改成功', '成功');
                await this.updateUserInfo();
            };
            await this.validateUser(actionCallback, additionalInput);
        },
        async insertGroup() {
            const additionalInput = {
                title: '增加用户组',
                html: `
                    <label class="control-label">权限</label>
                    <div class="form-group">
                        <select id="auth_select" class="form-control">
                            <option value="1">普通用户：除拥有除用户组编辑、日志查看的权限，其他功能正常</option>
                            <option value="2">1类受限用户：禁止删除文件</option>
                            <option value="3">2类受限用户：仅能操作对其分享的文件，禁用回收站（禁用放入回收站和删除文件）</option>
                            <option value="10">管理员：拥有所有权限</option>
                        </select>
                    </div>
                    <label class="control-label">用户组名</label>
                    <div class="form-group">
                        <input type="text" id="group_name" class="form-control" placeholder="请输入新的用户组名" style="text-align: center;">
                    </div>
                `,
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                preConfirm: () => {
                    return {
                        auth: document.getElementById('auth_select').value || 1,
                        name: document.getElementById('group_name').value
                    }
                }
            };
            const actionCallback = async (data) => {
                const { auth, name } = data;
                if (!name) {
                    this.$swal.fire('用户组名不能为空', '', 'error');
                    return false;
                }
                const response=await axios.post('/api/findUserGroupByName?name='+name);
                const responsedata = response.data.data
                if(responsedata.state==1){
                    this.$swal.fire('用户组已存在', '请重新输入', 'error');
                    return;
                }
                await axios.post('/api/insertGroup', { "auth": auth, "name": name });
                toastr.success('新建用户组成功', '成功');
                await this.updateUserInfo();
            };
            await this.validateUser(actionCallback, additionalInput);
        },
        async findGroupNameByUserId(userId) {
            const response = await axios.post('/api/findGroupNameByUserId', { "userId": userId });
            // console.log(response.data);
            return response.data;
        },
        async updateUserInfo() {
            const response = await axios.get('/api/findAllUsers');
            this.users = response.data;
            this.findUserGroups();
        }
    }
}
</script>