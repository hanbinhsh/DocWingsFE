<template>
    <div class="mainpage">
        <div id="wrapper">
            <nav class="navbar-default navbar-static-side" role="navigation">
                <div class="sidebar-collapse">
                    <ul class="nav metismenu" id="side-menu">
                        <UserItem />
                        <li>
                            <a href="userhome"><i class="fa fa-laptop"></i> <span class="nav-label">主页</span></a>
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
                        <li class="active">
                            <a href="share"><i class="fa fa-share-square-o"></i> <span class="nav-label">分享</span></a>
                        </li>
                        <li :class="{ active: this.isTrash }">
                            <a href="trash"><i class="fa fa-trash-o"></i> <span class="nav-label">回收站</span></a>
                        </li>
                        <li>
                            <a href="searchAllServlet"><i class="fa fa-group"></i> <span
                                    class="nav-label">用户组编辑</span></a>
                        </li>
                        <li>
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
                    <div class="col-lg-10">
                        <h2>分享</h2>
                    </div>
                </div>
                <div class="wrapper wrapper-content  animated fadeInRight">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="ibox">
                                <div class="ibox-title">
                                    <h5>分享列表</h5>
                                    <div class="ibox-tools">
                                        <a href="issue_tracker.html" class="btn btn-primary btn-xs">Add new issue</a>
                                    </div>
                                </div>
                                <div class="ibox-content">

                                    <div class="m-b-lg">

                                        <div class="input-group">
                                            <input type="text" placeholder="Search issue by name..."
                                                class=" form-control">
                                            <span class="input-group-btn">
                                                <button type="button" class="btn btn-white"> Search</button>
                                            </span>
                                        </div>
                                        <div class="m-t-md">

                                            <div class="pull-right">
                                                <button type="button" class="btn btn-sm btn-white"> <i
                                                        class="fa fa-comments"></i> </button>
                                                <button type="button" class="btn btn-sm btn-white"> <i
                                                        class="fa fa-user"></i> </button>
                                                <button type="button" class="btn btn-sm btn-white"> <i
                                                        class="fa fa-list"></i> </button>
                                                <button type="button" class="btn btn-sm btn-white"> <i
                                                        class="fa fa-pencil"></i> </button>
                                                <button type="button" class="btn btn-sm btn-white"> <i
                                                        class="fa fa-print"></i> </button>
                                                <button type="button" class="btn btn-sm btn-white"> <i
                                                        class="fa fa-cogs"></i> </button>
                                            </div>
                                            <strong>共XXX条分享</strong>
                                        </div>
                                    </div>
                                    <div class="table-responsive">
                                        <table class="table table-hover issue-tracker">
                                            <thead>
                                                <td>状态</td>
                                                <td>图标</td>
                                                <td>名称</td>
                                                <td>权限</td>
                                                <td>接收者</td>
                                                <td>分享时间</td>
                                                <td>到期时间</td>
                                                <td>操作</td>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(share, index) in shares" :key="index" @dblclick="">
                                                    <td>
                                                        <span v-if="share.validate==0" class="label label-danger">已过期</span>
                                                        <span v-if="share.validate==1" class="label label-primary">正常</span>
                                                        <span v-if="share.validate==3" class="label label-info">无限</span>
                                                    </td>
                                                    <td>
                                                        <i v-if="share.isFolder==1" class="fa fa-folder-o"></i>
                                                        <i v-if="share.isFolder==0" class="fa fa-file-o"></i>
                                                    </td>
                                                    <td v-if="share.isFolder==0">{{share.fileName}}</td>
                                                    <td v-if="share.isFolder==1">{{share.folderName}}</td>
                                                    <td>{{share.auth}}</td>
                                                    <td>{{share.accepterName}}</td>
                                                    <td>{{new Date(share.shareTime).toLocaleString()}}</td>
                                                    <td v-if="share.dueTime==null">无限</td>
                                                    <td v-if="share.dueTime!=null">{{new Date(share.dueTime).toLocaleString()}}</td>
                                                    <td>
                                                        <div class="btn-group">
                                                            
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span class="label label-primary">Added</span>
                                                    </td>
                                                    <td class="issue-info">
                                                        <a href="issue_tracker.html#">
                                                            ISSUE-23
                                                        </a>

                                                        <small>
                                                            This is issue with the coresponding note
                                                        </small>
                                                    </td>
                                                    <td>
                                                        Adrian Novak
                                                    </td>
                                                    <td>
                                                        12.02.2015 10:00 am
                                                    </td>
                                                    <td>
                                                        <span class="pie">0.52,1.041</span>
                                                        2d
                                                    </td>
                                                    <td class="text-right">
                                                        <button class="btn btn-white btn-xs"> Tag</button>
                                                        <button class="btn btn-white btn-xs"> Mag</button>
                                                        <button class="btn btn-white btn-xs"> Rag</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span class="label label-warning">Fixed</span>
                                                    </td>
                                                    <td class="issue-info">
                                                        <a href="issue_tracker.html#">
                                                            ISSUE-07
                                                        </a>

                                                        <small>
                                                            Always free from repetition, injected humour, or
                                                            non-characteristic words etc.
                                                        </small>
                                                    </td>
                                                    <td>
                                                        Alex Ferguson
                                                    </td>
                                                    <td>
                                                        28.11.2015 05:10 pm
                                                    </td>
                                                    <td>
                                                        <span class="pie">1,2</span>
                                                        2d
                                                    </td>
                                                    <td class="text-right">
                                                        <button class="btn btn-white btn-xs"> Tag</button>
                                                        <button class="btn btn-white btn-xs"> Dag</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span class="label label-danger">Bug</span>
                                                    </td>
                                                    <td class="issue-info">
                                                        <a href="issue_tracker.html#">
                                                            ISSUE-44
                                                        </a>

                                                        <small>
                                                            This is issue with the coresponding note
                                                        </small>
                                                    </td>
                                                    <td>
                                                        Adrian Novak
                                                    </td>
                                                    <td>
                                                        12.02.2015 10:00 am
                                                    </td>
                                                    <td>
                                                        <span class="pie">0.52,1.041</span>
                                                        2d
                                                    </td>
                                                    <td class="text-right">
                                                        <button class="btn btn-white btn-xs"> Tag</button>
                                                        <button class="btn btn-white btn-xs"> Mag</button>
                                                        <button class="btn btn-white btn-xs"> Rag</button>
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
import "../assets/js/plugins/peity/jquery.peity.min.js"
import "../assets/js/demo/peity-demo.js"
import "../assets/js/inspinia.js"
import "../assets/js/plugins/pace/pace.min.js"
import axios from "axios";
import TopBar from '@/components/TopBar.vue'
import UserItem from '@/components/UserItem.vue'
import FootBar from '@/components/FootBar.vue'

export default {
    name: 'Share',
    data() {
        return {
            userData: JSON.parse(sessionStorage.getItem('userData')) || {},
            shares: {}
        }
    },
    created() {
        this.getShares()
    },
    methods: {
        async getShares() {
            const res = await axios.get("api/getSharesByUserId?userId=" + this.userData.userId);
            this.shares = res.data.data.shares;
        },
    },
    components: {
        TopBar,
        UserItem,
        FootBar
    },
}
</script>