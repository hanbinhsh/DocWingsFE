<template>
    <div class="mainpage">
        <div id="wrapper">
            <nav class="navbar-default navbar-static-side" role="navigation">
                <div class="sidebar-collapse">
                    <ul class="nav metismenu" id="side-menu">
                        <UserItem />
                        <li v-if="userAuth!=3">
                            <a href="userhome"><i class="fa fa-laptop"></i> <span class="nav-label">主页</span></a>
                        </li>
                        <li v-if="userAuth!=3">
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
                        <li v-if="userAuth!=3">
                            <a href="trash"><i class="fa fa-trash-o"></i> <span class="nav-label">回收站</span></a>
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
                    <div class="col-lg-12">
                        <div class="wrapper wrapper-content animated fadeInUp">
                            <div class="ibox">
                                <div class="ibox-content">
                                    <div class="row m-t-sm">
                                        <div class="col-lg-12">
                                            <div class="tab-content">
                                                <table class="table table-striped">
                                                    <thead>
                                                        <tr>
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
                <FootBar />
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
            userAuth: sessionStorage.getItem("authData") || 3,
            users: [],
        };
    },
    created() {
        this.fetchLogs();
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