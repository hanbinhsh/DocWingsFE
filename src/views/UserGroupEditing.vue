<template>
    <div class="mainpage">
        <div id="wrapper">
            <nav class="navbar-default navbar-static-side" role="navigation">
                <div class="sidebar-collapse">
                    <ul class="nav metismenu" id="side-menu">
                        <UserItem />
                        <li v-if="userAuth != 3">
                            <a href="UserHome"><i class="fa fa-laptop"></i> <span class="nav-label">主页</span></a>
                        </li>
                        <li v-if="userAuth != 3">
                            <a><i class="fa fa-folder-o"></i> <span class="nav-label">文件管理</span><span
                                    class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li><a href="allfiles">所有文件</a></li>
                                <li><a href="image">图片</a></li>
                                <li><a href="documentation">文档</a></li>
                                <li><a href="video">视频</a></li>
                                <li><a href="audio">音乐</a></li>
                                <li><a href="other">其他</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="share"><i class="fa fa-share-square-o"></i> <span class="nav-label">分享</span></a>
                        </li>
                        <li v-if="userAuth != 3">
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
                                                    class="btn btn-success  btn-xs pull-right">
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
                                                            <div class="input-group">
                                                                <input type="text" placeholder="输入要查找的用户信息......"
                                                                class="form-control" id="filter1">
                                                                    <span class="input-group-btn">
                                                                        <button type="button" class="btn btn-white">查找</button>
                                                                    </span>
                                                            </div>
                                                            <table class="table table-striped ibox-content footable table table-stripped toggle-arrow-tiny"
                                                            data-page-size="14" :class="{ 'sk-loading': loading }">
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
                                                                        <td><a v-if="user.userId!=userData.userId&&user.userId!=1"
                                                                                @click.prevent="updateUserName(user.userId,user.userName)"><i
                                                                                    class="fa fa-edit"></i></a></td>
                                                                        <td>{{ user.groupName }}</td>
                                                                        <td>
                                                                            <a v-if="user.userId!=userData.userId&&user.userId!=1"
                                                                                @click.prevent="updateGroup(user.userId,user.userName)">
                                                                                <i class="fa fa-arrows"></i>&nbsp;
                                                                            </a>
                                                                        </td>
                                                                        <td>{{ user.email }}</td>
                                                                        <td><a v-if="user.userId!=userData.userId&&user.userId!=1"
                                                                                @click.prevent="updateEmail(user.userId,user.userName)"><i
                                                                                    class="fa fa-edit"></i></a>
                                                                        </td>
                                                                        <td>{{ user.phone }}</td>
                                                                        <td><a v-if="user.userId!=userData.userId&&user.userId!=1"
                                                                                @click.prevent="updatePhone(user.userId,user.userName)"><i
                                                                                    class="fa fa-edit"></i></a>
                                                                        </td>
                                                                        <td v-if="user.accountLocked">已冻结</td>
                                                                        <td v-else>正常</td>
                                                                        <td>
                                                                            <a v-if="user.accountLocked&&user.userId!=userData.userId&&user.userId!=1"
                                                                                @click.prevent="defrost(user.userId,user.userName)">
                                                                                <i class="fa fa-fire"></i>&nbsp;
                                                                            </a>
                                                                            <a v-else v-if="user.userId!=userData.userId&&user.userId!=1"
                                                                                @click.prevent="freeze(user.userId,user.userName)">
                                                                                <i class="fa fa-empire"></i>&nbsp;
                                                                            </a>
                                                                        </td>
                                                                        <td>
                                                                            <div class="btn-group">
                                                                                <a v-if="user.userId!=userData.userId&&user.userId!=1"
                                                                                    @click.prevent="resetPsw(user.userId,user.userName)">
                                                                                    <i class="fa fa-key"></i>&nbsp;
                                                                                </a>
                                                                                <a v-if="user.userId!=userData.userId&&user.userId!=1"
                                                                                    @click.prevent="unsubscribe(user.userId,user.userName)">
                                                                                    <i class="fa fa-trash-o"></i>&nbsp;
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                                <tfoot>
                                                                <tr>
                                                                    <td colspan="14">
                                                                        <ul class="pagination pull-right"></ul>
                                                                    </td>
                                                                </tr>
                                                            </tfoot>
                                                            </table>
                                                        </div>
                                                        <div class="tab-pane table-responsive" id="tab-2">
                                                            <div class="input-group">
                                                                <input type="text" placeholder="输入要查找的用户信息......"
                                                                class="form-control" id="filter1">
                                                                    <span class="input-group-btn">
                                                                        <button type="button" class="btn btn-white">查找</button>
                                                                 </span>
                                                            </div>
                                                            <table class="table table-striped ibox-content footable table table-stripped toggle-arrow-tiny"
                                                            data-page-size="14" :class="{ 'sk-loading': loading }">
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
                                                                            <a @click="editGroupName(group)"><i
                                                                                v-if="group.groupId!=-1 && group.groupId!=1 && group.groupId!=2"
                                                                                    class="fa fa-edit"></i></a>
                                                                        </td>
                                                                        <td>
                                                                            {{ shareAuth(group.auth) }}
                                                                        </td>
                                                                        <td>
                                                                            <a @click="editGroupAuth(group)"><i
                                                                                v-if="group.groupId!=-1 && group.groupId!=1"
                                                                                    class="fa fa-edit"></i></a>
                                                                        </td>
                                                                        <td>
                                                                            <a @click="deleteGroup(group.groupId,group.groupName)"><i
                                                                                v-if="group.groupId!=-1 && group.groupId!=1 && group.groupId!=2"
                                                                                    class="fa fa-trash-o"></i></a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                                <tfoot>
                                                                <tr>
                                                                    <td colspan="14">
                                                                        <ul class="pagination pull-right"></ul>
                                                                    </td>
                                                                </tr>
                                                            </tfoot>
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
            userAuth: sessionStorage.getItem("authData") || 3,
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
        async unsubscribe(userId,userName) {
            const actionCallback = async () => {
                const act="注销"+userName+"的账户";
                await axios.post('/api/insertLog', { "userId": this.userData.userId ,"act":act,"importance":2});
                await axios.post('/api/UserCollectionDelete', { "userId": userId });
                await axios.post('/api/UserDelete', { "userId": userId });
                toastr.success('已注销账户', '成功');
                await this.updateUserInfo();
            };
            await this.validateUser(actionCallback);
        },
        async resetPsw(userId,userName) {
            const actionCallback = async () => {
                const response1 = await axios.post('/api/resetPsw', { "userId": userId });
                const response2 = await axios.get('/api/findAllUsers');
                this.users = response2.data;
                if (response1.data != null){
                    const act="重置"+userName+"的密码";
                    await axios.post('/api/insertLog', { "userId": this.userData.userId ,"act":act,"importance":1});
                    toastr.success('已重置该用户密码为123456！', '成功');
                }
                else
                    toastr.error('该用户不存在！', '错误');
            };
            await this.validateUser(actionCallback);
        },
        async freeze(userId,userName) {
            const additionalInput = {
                title: '冻结时间设置(小时)',
                input: 'text',
                inputLabel: '请输入冻结时间(小时)',
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputValidator: (time) => {
                    if (!time) {
                        return '未输入冻结时间！';
                    }
                }
            };
            const actionCallback = async (time) => {
                const response1 = await axios.post('/api/setFreezingTime', { "userId": userId, "time": time });
                const response2 = await axios.get('/api/findAllUsers');
                this.users = response2.data;
                if (response1.data != null){
                    const act="冻结"+userName+time+"小时";
                    await axios.post('/api/insertLog', { "userId": this.userData.userId ,"act":act,"importance":1});
                    toastr.success('成功冻结该用户！', '成功');
                } 
                else
                    toastr.error('该用户不存在！', '错误');
            };
            await this.validateUser(actionCallback, additionalInput);
        },
        async defrost(userId,userName) {
            const actionCallback = async () => {
                const response1 = await axios.post('/api/defrost', { "userId": userId });
                const response2 = await axios.get('/api/findAllUsers');
                this.users = response2.data;
                if (response1.data != null){
                    const act="解冻"+userName;
                    await axios.post('/api/insertLog', { "userId": this.userData.userId ,"act":act,"importance":1});
                    toastr.success('已解冻该用户！', '成功');                    
                }
                else
                    toastr.error('该用户不存在！', '错误');
            };
            await this.validateUser(actionCallback);
        },
        async updateUserName(userId,oldName) {
            const additionalInput = {
                title: '用户名更改',
                input: 'text',
                inputLabel: '请输入用户名',
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputValidator: (userName) => {
                    if (!userName) {
                        return '未输入用户名！';
                    }
                }
            };
            const actionCallback = async (userName) => {
                const response = await axios.post('/api/findUserByName', { "userName": userName });
                if (response.data) {
                    this.$swal.fire('用户名已存在', '请重新输入', 'error');
                    return;
                }
                const act="更改用户名"+oldName+"为"+userName;
                await axios.post('/api/insertLog', { "userId": this.userData.userId ,"act":act,"importance":1});
                await axios.post('/api/updateUserName', { "userId": userId, "userName": userName });
                toastr.success('用户名更改成功', '成功');
                await this.updateUserInfo();
            };
            await this.validateUser(actionCallback, additionalInput);

        },
        async updateEmail(userId,userName) {
            const additionalInput = {
                title: '邮箱更改',
                input: 'text',
                inputLabel: '请输入新邮箱',
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputValidator: (email) => {
                    if (!email) {
                        return '未输入邮箱！';
                    }
                }
            };
            const actionCallback = async (email) => {
                const response = await axios.post('/api/findUserByEmail', { "email": email });
                if (response.data) {
                    this.$swal.fire('邮箱已存在', '请重新输入', 'error');
                    return;
                }
                const act="更改"+userName+"邮箱为"+email;
                await axios.post('/api/insertLog', { "userId": this.userData.userId ,"act":act,"importance":1});
                await axios.post('/api/UpdateEmail', { "userId": userId, "newEmail": email });
                toastr.success('邮箱更改成功', '成功');
                await this.updateUserInfo();
            };
            await this.validateUser(actionCallback, additionalInput);

        },
        async updatePhone(userId,userName) {
            const additionalInput = {
                title: '电话号码更改',
                input: 'text',
                inputLabel: '请输入新号码',
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputValidator: (userName) => {
                    if (!userName) {
                        return '未输入号码！';
                    }
                }
            };
            const actionCallback = async (phone) => {
                const response = await axios.post('/api/findUserByPhone', { "phone": phone });
                if (response.data) {
                    this.$swal.fire('号码已存在', '请重新输入', 'error');
                    return;
                }
                const act="更改"+userName+"电话号码为"+phone;
                await axios.post('/api/insertLog', { "userId": this.userData.userId ,"act":act,"importance":1});
                await axios.post('/api/UpdatePhone', { "userId": userId, "newPhone": phone });
                toastr.success('电话号码更改成功', '成功');
                await this.updateUserInfo();
            };
            await this.validateUser(actionCallback, additionalInput);

        },
        async updateGroup(userId,userName) {
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
                const act="更改"+userName+"的用户组为"+groupName;
                await axios.post('/api/insertLog', { "userId": this.userData.userId ,"act":act,"importance":1});
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
                const response = await axios.post('/api/findUserGroupByName?name=' + name);
                const responsedata = response.data.data
                if (responsedata.state == 1) {
                    this.$swal.fire('用户组已存在', '请重新输入', 'error');
                    return;
                }
                const act="新建用户组:"+name;
                await axios.post('/api/insertLog', { "userId": this.userData.userId ,"act":act,"importance":1});
                await axios.post('/api/insertGroup', { "auth": auth, "name": name });
                toastr.success('新建用户组成功', '成功');
                await this.updateUserInfo();
            };
            await this.validateUser(actionCallback, additionalInput);
        },
        async deleteGroup(groupId,groupName) {
            const actionCallback = async () => {
                const act="删除用户组:"+groupName;
                await axios.post('/api/insertLog', { "userId": this.userData.userId ,"act":act,"importance":1});
                await axios.post('/api/updateUsersGroup', {"groupId": groupId })
                await axios.post('/api/deleteUserGroupByGroupId', {"groupId": groupId })
                toastr.success('用户组删除成功', '成功');
                await this.updateUserInfo();
            };
            await this.validateUser(actionCallback);
        },
        async findGroupNameByUserId(userId) {
            const response = await axios.post('/api/findGroupNameByUserId', { "userId": userId });
            return response.data;
        },
        async updateUserInfo() {
            const response = await axios.get('/api/findAllUsers');
            this.users = response.data;
            this.findUserGroups();
        },
        async editGroupName(group){
            const additionalInput = {
                title: '用户组名更改',
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
                const responsedata = response.data.data
                if (responsedata.state == 1) {
                    this.$swal.fire('用户组已存在', '请重新输入', 'error');
                    return;
                }
                const act="更改用户组名"+group.groupName+"为"+groupName;
                await axios.post('/api/insertLog', { "userId": this.userData.userId ,"act":act,"importance":1});
                await axios.post('/api/updateGroupName', { "groupId": group.groupId, "groupName": groupName });
                toastr.success('用户组名更改成功', '成功');
                await this.updateUserInfo();
            };
            await this.validateUser(actionCallback, additionalInput);
        },
        async editGroupAuth(group){
            const additionalInput = {
                title: '更改用户组权限',
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
                `,
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                preConfirm: () => {
                    return {
                        auth: document.getElementById('auth_select').value || 1,
                    }
                }
            };
            const actionCallback = async (data) => {
                const { auth } = data;
                const act="更改用户组"+group.groupName+"权限";
                await axios.post('/api/insertLog', { "userId": this.userData.userId ,"act":act,"importance":1});
                await axios.post('/api/updateAuth', { "groupId": group.groupId, "auth": auth });
                toastr.success('更改用户组权限成功', '成功');
                await this.updateUserInfo();
            };
            await this.validateUser(actionCallback, additionalInput);
        },
    },
    updated() {
        this.$nextTick(() => {
            $('.footable').footable();
            $('.footable').init();
        });
    },
}
</script>