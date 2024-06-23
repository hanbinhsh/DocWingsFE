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
                        <li v-if="isAdmin()">
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
                                        <a href="allfiles" class="btn btn-primary btn-xs">新建分享</a>
                                    </div>
                                </div>
                                <div class="ibox-content">
                                    <div class="m-b-lg">
                                        <div class="input-group">
                                            <input type="text" placeholder="输入要查找的分享......"
                                                class=" form-control">
                                            <span class="input-group-btn">
                                                <button type="button" class="btn btn-white"> 查找</button>
                                            </span>
                                        </div>
                                        <div class="m-t-md">
                                            <div class="pull-right">
                                                <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="left"
                                                    title="刷新页面" @click="getShares()"><i class="fa fa-refresh"></i> 刷新</button>
                                            </div>
                                            <strong>共{{this.shareCount}}条分享</strong>
                                        </div>
                                    </div>
                                    <div class="table-responsive ibox">
                                        <table class="table table-hover issue-tracker ibox-content">
                                            <div class="sk-spinner sk-spinner-cube-grid" v-show="loading">
                                                <div class="sk-cube"></div>
                                                <div class="sk-cube"></div>
                                                <div class="sk-cube"></div>
                                                <div class="sk-cube"></div>
                                                <div class="sk-cube"></div>
                                                <div class="sk-cube"></div>
                                                <div class="sk-cube"></div>
                                                <div class="sk-cube"></div>
                                                <div class="sk-cube"></div>
                                            </div>
                                            <thead>
                                                <td>状态</td>
                                                <td></td><!--图标-->
                                                <td>名称</td>
                                                <td>权限</td>
                                                <td></td><!--更改权限-->
                                                <td>接收者</td>
                                                <td></td><!--更改接收者-->
                                                <td>分享时间</td>
                                                <td>到期时间</td>
                                                <td></td><!--更改到期时间-->
                                                <td>操作</td>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(share, index) in shares" :key="index" @dblclick="" class="read">
                                                    <td>
                                                        <span v-if="share.validate==0" class="label label-danger">已过期</span>
                                                        <span v-if="share.validate==1" class="label label-primary">正常</span>
                                                        <span v-if="share.validate==2" class="label label-info">无限</span>
                                                    </td>
                                                    <td>
                                                        <i v-if="share.isFolder==1" class="fa fa-folder-o"></i>
                                                        <i v-else-if="share.fileType.startsWith('image/')" class="fa fa-file-image-o"></i>
                                                        <i v-else-if="share.fileType.includes('pdf')" class="fa fa-file-pdf-o"></i>
                                                        <i v-else-if="share.fileType.includes('word')" class="fa fa-file-word-o"></i>
                                                        <i v-else-if="share.fileType.includes('excel')" class="fa fa-file-excel-o"></i>
                                                        <i v-else-if="share.fileType.includes('sheet')" class="fa fa-file-excel-o"></i>
                                                        <i v-else-if="share.fileType.includes('powerpoint')" class="fa fa-file-powerpoint-o"></i>
                                                        <i v-else-if="share.fileType.includes('presentation')" class="fa fa-file-powerpoint-o"></i>
                                                        <i v-else-if="share.fileType.startsWith('video/')" class="fa fa-file-movie-o"></i>
                                                        <i v-else-if="share.fileType.startsWith('audio/')" class="fa fa-file-audio-o"></i>
                                                        <i v-else-if="share.fileType.includes('compressed')" class="fa fa-file-archive-o"></i>
                                                        <i v-else class="fa fa-file-o"></i>
                                                    </td>
                                                    <td v-if="share.isFolder==0">{{share.fileName}}</td>
                                                    <td v-if="share.isFolder==1">{{share.folderName}}</td>
                                                    <td>{{share.auth}}</td>
                                                    <td><a @click=""><i class="fa fa-edit"></i></a></td>
                                                    <td>{{share.accepterName}}</td>
                                                    <td><a @click=""><i class="fa fa-edit"></i></a></td>
                                                    <td>{{new Date(share.shareTime).toLocaleString()}}</td>
                                                    <td v-if="share.dueTime==null">无限</td>
                                                    <td v-if="share.dueTime!=null">
                                                        {{new Date(share.dueTime).toLocaleString()}}
                                                        <span v-if="share.lastRatio>0" class="pie">{{ share.lastRatio }}/1</span>
                                                    </td>
                                                    <td><a @click=""><i class="fa fa-edit"></i></a></td>
                                                    <td>
                                                        <div class="btn-group">
                                                            <a @click=""><i class="fa fa-trash-o"></i>&nbsp;</a>
                                                            <a @click="enterSharePage(share.shareId)"><i class="fa fa-eye"></i>&nbsp;</a>
                                                            <a @click="copySharePage(share.shareId)"><i class="fa fa-copy"></i>&nbsp;</a>
                                                        </div>
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
	"timeOut": "7000",
	"extendedTimeOut": "1000",
	"showEasing": "swing",
	"hideEasing": "linear",
	"showMethod": "fadeIn",
	"hideMethod": "fadeOut"
}
export default {
    name: 'Share',
    data() {
        return {
            userData: JSON.parse(sessionStorage.getItem('userData')) || {},
            shares: {},
            shareCount: 0,
            loading: false,
        }
    },
    created() {
        this.getShares()
    },
    methods: {
        showLoading() {this.loading = true;},
        hideLoading() {this.loading = false;},
        async getShares() {
            this.showLoading()
            const res = await axios.get("api/getSharesByUserId?userId=" + this.userData.userId);
            this.shares = res.data.data.shares;
            this.shareCount = res.data.data.shareCount;
            await this.$nextTick(() => {
                this.initializePeity();
            });
            this.hideLoading()
        },
        initializePeity() {
            $('span.pie').peity('pie', {
                fill: ['#1ab394', '#d7d7d7', '#ffffff']
            });
            $('.line').peity('line', {
                fill: '#1ab394',
                stroke: '#169c81'
            });
            $('.bar').peity('bar', {
                fill: ['#1ab394', '#d7d7d7']
            });
            $('.bar_dashboard').peity('bar', {
                fill: ['#1ab394', '#d7d7d7'],
                width: 100
            });
            const updatingChart = $('.updating-chart').peity('line', { fill: '#1ab394', stroke: '#169c81', width: 64 });
            setInterval(() => {
                const random = Math.round(Math.random() * 10);
                const values = updatingChart.text().split(',');
                values.shift();
                values.push(random);
                updatingChart.text(values.join(',')).change();
            }, 1000);
        },
        isAdmin() {
            return this.userData.isAdmin; // 检查is_admin属性是否为true
        },
        enterSharePage(shareId){
            window.open('shareaccept/'+shareId);
        },
        copySharePage(shareId){
            const url = window.location.href.split('#')[0] + 'accept/' + shareId;
            navigator.clipboard.writeText(url)
            toastr.success("复制分享连接成功", "成功");
        },
    },
    watch: {
        shares() {
            this.$nextTick(() => {
                this.initializePeity();
            });
        }
    },
    components: {
        TopBar,
        UserItem,
        FootBar
    },
}
</script>