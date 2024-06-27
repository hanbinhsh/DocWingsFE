<template>
    <div class="mainpage">
        <div id="wrapper">
            <nav class="navbar-default navbar-static-side" role="navigation">
                <div class="sidebar-collapse">
                    <ul class="nav metismenu" id="side-menu">
                        <UserItem />
                        <li v-if="userAuth != 3">
                            <a href="userhome"><i class="fa fa-laptop"></i> <span class="nav-label">主页</span></a>
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
                        <li class="active">
                            <a href="share"><i class="fa fa-share-square-o"></i> <span class="nav-label">分享</span></a>
                        </li>
                        <li v-if="userAuth != 3">
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
                <div class="row">
                    <div class="col-lg-6" style="width:100%">
                        <div class="tabs-container">
                            <ul class="nav nav-tabs">
                                <li class="active"><a data-toggle="tab" href="tabs.html#tab-1"> 我的分享</a></li>
                                <li class=""><a data-toggle="tab" href="tabs.html#tab-2">我收到的</a></li>
                                <li v-if="userData.isAdmin" class=""><a data-toggle="tab"
                                        href="tabs.html#tab-3">所有分享</a></li>
                            </ul>
                            <div class="tab-content">
                                <div id="tab-1" class="tab-pane active">
                                    <div class="panel-body">
                                        <div class="wrapper wrapper-content animated fadeInRight"
                                            style="padding-bottom: 0px" v-if="userAuth != 3">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="ibox float-e-margins">
                                                        <div class="ibox-title">
                                                            <h5>分享列表</h5>
                                                            <div class="ibox-tools">
                                                                <a class="collapse-link">
                                                                    <i class="fa fa-chevron-up"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="ibox-content">
                                                            <div class="m-b-lg">
                                                                <div class="input-group">
                                                                    <input type="text" placeholder="输入要查找的分享......"
                                                                        class=" form-control" id="filter1">
                                                                    <span class="input-group-btn">
                                                                        <button type="button" class="btn btn-white">
                                                                            查找</button>
                                                                    </span>
                                                                </div>
                                                                <div class="m-t-md">
                                                                    <div class="pull-right">
                                                                        <button class="btn btn-white btn-sm"
                                                                            data-toggle="tooltip" data-placement="left"
                                                                            title="刷新页面" @click="getShares()"><i
                                                                                class="fa fa-refresh"></i>
                                                                            刷新</button>&nbsp;
                                                                        <a href="allfiles"
                                                                            class="btn btn-primary btn-sm">新建分享</a>
                                                                    </div>
                                                                    <strong>共{{ this.shareCount }}条分享</strong>
                                                                </div>
                                                            </div>
                                                            <div class="table-responsive ibox">
                                                                <table
                                                                    class="table table-hover issue-tracker ibox-content footable table-stripped toggle-arrow-tiny"
                                                                    data-page-size="8" data-filter=#filter1>
                                                                    <div class="sk-spinner sk-spinner-cube-grid"
                                                                        v-show="loading">
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
                                                                        <td>接收用户组</td>
                                                                        <td></td><!--更改接收用户组-->
                                                                        <td>分享时间</td>
                                                                        <td>到期时间</td>
                                                                        <td></td><!--更改到期时间-->
                                                                        <td>操作</td>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr v-for="(share, index) in shares"
                                                                            :key="index" @dblclick="" class="read">
                                                                            <td>
                                                                                <span v-if="share.validate == 0"
                                                                                    class="label label-danger">已过期</span>
                                                                                <span v-if="share.validate == 1"
                                                                                    class="label label-primary">正常</span>
                                                                                <span v-if="share.validate == 2"
                                                                                    class="label label-info">无限</span>
                                                                            </td>
                                                                            <td>
                                                                                <i v-if="share.isFolder == 1"
                                                                                    class="fa fa-folder-o"></i>
                                                                                <i v-else-if="share.fileType.startsWith('image/')"
                                                                                    class="fa fa-file-image-o"></i>
                                                                                <i v-else-if="share.fileType.includes('pdf')"
                                                                                    class="fa fa-file-pdf-o"></i>
                                                                                <i v-else-if="share.fileType.includes('word')"
                                                                                    class="fa fa-file-word-o"></i>
                                                                                <i v-else-if="share.fileType.includes('excel')"
                                                                                    class="fa fa-file-excel-o"></i>
                                                                                <i v-else-if="share.fileType.includes('sheet')"
                                                                                    class="fa fa-file-excel-o"></i>
                                                                                <i v-else-if="share.fileType.includes('powerpoint')"
                                                                                    class="fa fa-file-powerpoint-o"></i>
                                                                                <i v-else-if="share.fileType.includes('presentation')"
                                                                                    class="fa fa-file-powerpoint-o"></i>
                                                                                <i v-else-if="share.fileType.startsWith('video/')"
                                                                                    class="fa fa-file-movie-o"></i>
                                                                                <i v-else-if="share.fileType.startsWith('audio/')"
                                                                                    class="fa fa-file-audio-o"></i>
                                                                                <i v-else-if="share.fileType.includes('compressed')"
                                                                                    class="fa fa-file-archive-o"></i>
                                                                                <i v-else class="fa fa-file-o"></i>
                                                                            </td>
                                                                            <td v-if="share.isFolder == 0">{{
                                                                                share.fileName }}</td>
                                                                            <td v-if="share.isFolder == 1">{{
                                                                                share.folderName }}</td>
                                                                            <td>{{ share.auth == 1 ? '全部权限' : '仅查看' }}
                                                                            </td>
                                                                            <td></td>
                                                                            <td>{{ share.accepterName }}</td>
                                                                            <td></td>
                                                                            <td>{{ share.acceptGroupName }}</td>
                                                                            <td></td>
                                                                            <td>{{ new
                                                                                Date(share.shareTime).toLocaleString()
                                                                                }}</td>
                                                                            <td v-if="share.dueTime == null">无限</td>
                                                                            <td v-if="share.dueTime != null">
                                                                                {{ new
                                                                                    Date(share.dueTime).toLocaleString() }}
                                                                                <span v-if="share.lastRatio > 0"
                                                                                    class="pie">{{ share.lastRatio
                                                                                    }}/1</span>
                                                                            </td>
                                                                            <td></td>
                                                                            <td>
                                                                                <div class="btn-group">
                                                                                    <a
                                                                                        @click.prevent="updateShare(share)"><i
                                                                                            class="fa fa-edit"></i>&nbsp;</a>
                                                                                    <a
                                                                                        @click.prevent="deleteShare(share)"><i
                                                                                            class="fa fa-trash-o"></i>&nbsp;</a>
                                                                                    <a
                                                                                        @click="enterSharePage(share.shareId)"><i
                                                                                            class="fa fa-eye"></i>&nbsp;</a>
                                                                                    <a
                                                                                        @click="copySharePage(share.shareId)"><i
                                                                                            class="fa fa-copy"></i>&nbsp;</a>
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div id="tab-2" class="tab-pane">
                                    <div class="panel-body">
                                        <div class="wrapper wrapper-content animated fadeInRight">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="ibox float-e-margins">
                                                        <div class="ibox-title">
                                                            <h5>我收到的</h5>
                                                            <div class="ibox-tools">
                                                                <a class="collapse-link">
                                                                    <i class="fa fa-chevron-up"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="ibox-content">
                                                            <div class="m-b-lg">
                                                                <div class="input-group">
                                                                    <input type="text" placeholder="输入要查找的分享......"
                                                                        class=" form-control" id="filter2">
                                                                    <span class="input-group-btn">
                                                                        <button type="button" class="btn btn-white">
                                                                            查找</button>
                                                                    </span>
                                                                </div>
                                                                <div class="m-t-md">
                                                                    <div class="pull-right">
                                                                        <button class="btn btn-white btn-sm"
                                                                            data-toggle="tooltip" data-placement="left"
                                                                            title="刷新页面" @click="getShares()"><i
                                                                                class="fa fa-refresh"></i>
                                                                            刷新</button>&nbsp;
                                                                        <a href="allfiles"
                                                                            class="btn btn-primary btn-sm">新建分享</a>
                                                                    </div>
                                                                    <strong>共{{ this.acceptCount }}条收到的分享</strong>
                                                                </div>
                                                            </div>
                                                            <div class="table-responsive ibox">
                                                                <table
                                                                    class="table table-hover issue-tracker ibox-content footable table table-stripped  toggle-arrow-tiny"
                                                                    data-page-size="8" data-filter=#filter2>
                                                                    <div class="sk-spinner sk-spinner-cube-grid"
                                                                        v-show="loading">
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
                                                                        <td>接收者</td>
                                                                        <td>接收用户组</td>
                                                                        <td>分享时间</td>
                                                                        <td>到期时间</td>
                                                                        <td>操作</td>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr v-for="(share, index) in acceptions"
                                                                            :key="index" @dblclick="" class="read">
                                                                            <td>
                                                                                <span v-if="share.validate == 0"
                                                                                    class="label label-danger">已过期</span>
                                                                                <span v-if="share.validate == 1"
                                                                                    class="label label-primary">正常</span>
                                                                                <span v-if="share.validate == 2"
                                                                                    class="label label-info">无限</span>
                                                                            </td>
                                                                            <td>
                                                                                <i v-if="share.isFolder == 1"
                                                                                    class="fa fa-folder-o"></i>
                                                                                <i v-else-if="share.fileType.startsWith('image/')"
                                                                                    class="fa fa-file-image-o"></i>
                                                                                <i v-else-if="share.fileType.includes('pdf')"
                                                                                    class="fa fa-file-pdf-o"></i>
                                                                                <i v-else-if="share.fileType.includes('word')"
                                                                                    class="fa fa-file-word-o"></i>
                                                                                <i v-else-if="share.fileType.includes('excel')"
                                                                                    class="fa fa-file-excel-o"></i>
                                                                                <i v-else-if="share.fileType.includes('sheet')"
                                                                                    class="fa fa-file-excel-o"></i>
                                                                                <i v-else-if="share.fileType.includes('powerpoint')"
                                                                                    class="fa fa-file-powerpoint-o"></i>
                                                                                <i v-else-if="share.fileType.includes('presentation')"
                                                                                    class="fa fa-file-powerpoint-o"></i>
                                                                                <i v-else-if="share.fileType.startsWith('video/')"
                                                                                    class="fa fa-file-movie-o"></i>
                                                                                <i v-else-if="share.fileType.startsWith('audio/')"
                                                                                    class="fa fa-file-audio-o"></i>
                                                                                <i v-else-if="share.fileType.includes('compressed')"
                                                                                    class="fa fa-file-archive-o"></i>
                                                                                <i v-else class="fa fa-file-o"></i>
                                                                            </td>
                                                                            <td v-if="share.isFolder == 0">{{
                                                                                share.fileName }}</td>
                                                                            <td v-if="share.isFolder == 1">{{
                                                                                share.folderName }}</td>
                                                                            <td>{{ share.auth == 1 ? '全部权限' : '仅查看' }}
                                                                            </td>
                                                                            <td>{{ share.accepterName }}</td>
                                                                            <td>{{ share.acceptGroupName }}</td>
                                                                            <td>{{ new
                                                                                Date(share.shareTime).toLocaleString()
                                                                                }}</td>
                                                                            <td v-if="share.dueTime == null">无限</td>
                                                                            <td v-if="share.dueTime != null">
                                                                                {{ new
                                                                                    Date(share.dueTime).toLocaleString() }}
                                                                                <span v-if="share.lastRatio > 0"
                                                                                    class="pie">{{ share.lastRatio
                                                                                    }}/1</span>
                                                                            </td>
                                                                            <td>
                                                                                <div class="btn-group">
                                                                                    <a
                                                                                        @click="enterSharePage(share.shareId)"><i
                                                                                            class="fa fa-eye"></i>&nbsp;</a>
                                                                                    <a
                                                                                        @click="copySharePage(share.shareId)"><i
                                                                                            class="fa fa-copy"></i>&nbsp;</a>
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-3" class="tab-pane">
                                    <div class="panel-body">
                                        <div class="wrapper wrapper-content animated fadeInRight">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="ibox float-e-margins">
                                                        <div class="ibox-title">
                                                            <h5>所有分享</h5>
                                                            <div class="ibox-tools">
                                                                <a class="collapse-link">
                                                                    <i class="fa fa-chevron-up"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="ibox-content">
                                                            <div class="m-b-lg">
                                                                <div class="input-group">
                                                                    <input type="text" placeholder="输入要查找的分享......"
                                                                        class=" form-control" id="filter3">
                                                                    <span class="input-group-btn">
                                                                        <button type="button" class="btn btn-white">
                                                                            查找</button>
                                                                    </span>
                                                                </div>
                                                                <div class="m-t-md">
                                                                    <div class="pull-right">
                                                                        <button class="btn btn-white btn-sm"
                                                                            data-toggle="tooltip" data-placement="left"
                                                                            title="刷新页面" @click="getShares()"><i
                                                                                class="fa fa-refresh"></i>
                                                                            刷新</button>&nbsp;
                                                                        <a href="allfiles"
                                                                            class="btn btn-primary btn-sm">新建分享</a>
                                                                    </div>
                                                                    <strong>共{{ this.allCount }}条收到的分享</strong>
                                                                </div>
                                                            </div>
                                                            <div class="table-responsive ibox">
                                                                <table
                                                                    class="table table-hover issue-tracker ibox-content footable table table-stripped  toggle-arrow-tiny"
                                                                    data-page-size="8" data-filter=#filter3>
                                                                    <div class="sk-spinner sk-spinner-cube-grid"
                                                                        v-show="loading">
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
                                                                        <td>接收者</td>
                                                                        <td>接收用户组</td>
                                                                        <td>分享时间</td>
                                                                        <td>到期时间</td>
                                                                        <td>操作</td>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr v-for="(share, index) in allShares"
                                                                            :key="index" @dblclick="" class="read">
                                                                            <td>
                                                                                <span v-if="share.validate == 0"
                                                                                    class="label label-danger">已过期</span>
                                                                                <span v-if="share.validate == 1"
                                                                                    class="label label-primary">正常</span>
                                                                                <span v-if="share.validate == 2"
                                                                                    class="label label-info">无限</span>
                                                                            </td>
                                                                            <td>
                                                                                <i v-if="share.isFolder == 1"
                                                                                    class="fa fa-folder-o"></i>
                                                                                <i v-else-if="share.fileType.startsWith('image/')"
                                                                                    class="fa fa-file-image-o"></i>
                                                                                <i v-else-if="share.fileType.includes('pdf')"
                                                                                    class="fa fa-file-pdf-o"></i>
                                                                                <i v-else-if="share.fileType.includes('word')"
                                                                                    class="fa fa-file-word-o"></i>
                                                                                <i v-else-if="share.fileType.includes('excel')"
                                                                                    class="fa fa-file-excel-o"></i>
                                                                                <i v-else-if="share.fileType.includes('sheet')"
                                                                                    class="fa fa-file-excel-o"></i>
                                                                                <i v-else-if="share.fileType.includes('powerpoint')"
                                                                                    class="fa fa-file-powerpoint-o"></i>
                                                                                <i v-else-if="share.fileType.includes('presentation')"
                                                                                    class="fa fa-file-powerpoint-o"></i>
                                                                                <i v-else-if="share.fileType.startsWith('video/')"
                                                                                    class="fa fa-file-movie-o"></i>
                                                                                <i v-else-if="share.fileType.startsWith('audio/')"
                                                                                    class="fa fa-file-audio-o"></i>
                                                                                <i v-else-if="share.fileType.includes('compressed')"
                                                                                    class="fa fa-file-archive-o"></i>
                                                                                <i v-else class="fa fa-file-o"></i>
                                                                            </td>
                                                                            <td v-if="share.isFolder == 0">{{
                                                                                share.fileName }}</td>
                                                                            <td v-if="share.isFolder == 1">{{
                                                                                share.folderName }}</td>
                                                                            <td>{{ share.auth == 1 ? '全部权限' : '仅查看' }}
                                                                            </td>
                                                                            <td>{{ share.accepterName }}</td>
                                                                            <td>{{ share.acceptGroupName }}</td>
                                                                            <td>{{ new
                                                                                Date(share.shareTime).toLocaleString()
                                                                                }}</td>
                                                                            <td v-if="share.dueTime == null">无限</td>
                                                                            <td v-if="share.dueTime != null">
                                                                                {{ new
                                                                                    Date(share.dueTime).toLocaleString() }}
                                                                                <span v-if="share.lastRatio > 0"
                                                                                    class="pie">{{ share.lastRatio
                                                                                    }}/1</span>
                                                                            </td>
                                                                            <td>
                                                                                <div class="btn-group">
                                                                                    <a
                                                                                        @click="enterSharePage(share.shareId)"><i
                                                                                            class="fa fa-eye"></i>&nbsp;</a>
                                                                                    <a
                                                                                        @click="copySharePage(share.shareId)"><i
                                                                                            class="fa fa-copy"></i>&nbsp;</a>
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
import '../assets/js/plugins/footable/footable.all.min.js'
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
            userAuth: sessionStorage.getItem("authData") || 3,
            shares: {},
            acceptions: {},
            shareCount: 0,
            acceptCount: 0,
            loading: false,
        }
    },
    created() {
        this.getShares()
    },
    methods: {
        showLoading() { this.loading = true; },
        hideLoading() { this.loading = false; },
        async getShares() {
            this.showLoading()
            const res = await axios.get("api/getSharesByUserId?userId=" + this.userData.userId);
            this.shares = res.data.data.shares;
            
            const acres = await axios.get("api/getMyAcceptByUserIdGroupId?userId=" + this.userData.userId + "&groupId=" + this.userData.groupId);
            this.acceptions = acres.data.data.shares;
            const allres = await axios.get("api/getAllShares");
            this.allShares = allres.data.data.shares;
            this.shareCount = res.data.data.shareCount;
            this.acceptCount = acres.data.data.acceptCount;
            this.allCount = allres.date.date.allCount;
            await this.$nextTick(() => {
                this.initializePeity();
            });
            this.shares.forEach(share => {
                if (!share.isFolder) {
                    this.getDownloadCount(share);
                }
            });
            this.hideLoading()
        },
        async getDownloadCount(share){
            const result = await axios.post('api/getDownloadCount' ,{"shareId": share.shareId, "fileId": share.fileId});
            share.downloadCount = result.data.count;
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
        enterSharePage(shareId) {
            window.open('shareaccept/' + shareId);
        },
        copySharePage(shareId) {
            const url = window.location.href.split('#')[0] + 'accept/' + shareId;
            navigator.clipboard.writeText(url)
            toastr.success("复制分享连接成功", "成功");
        },
        async updateShare(share) {
            const { value: formValues } = await this.$swal.fire({
                title: '修改分享',
                html: `
                        <label class="control-label">权限</label>
                        <div class="form-group">
                            <select id="share_select" class="form-control">
                                <option value="1">全部权限</option>
                                <option value="2">仅查看</option>
                            </select>
                        </div>
                        <label class="control-label">延长时间</label>
                        <div>
                            <div class="col-md-4">
                                <input type="text" id="share_day" class="form-control" placeholder="0" style="text-align: center;">
                                <span>天</span>
                            </div>
                            <div class="col-md-4">
                                <input type="text" id="share_hour" class="form-control" placeholder="0" style="text-align: center;">
                                <span>时</span>
                            </div>
                            <div class="col-md-4">
                                <input type="text" id="share_minute" class="form-control" placeholder="0" style="text-align: center;">
                                <span>分</span>
                            </div>
                        </div>
                        <label class="control-label">接收者</label>
                        <div class="form-group">
                            <input type="text" id="share_accepter" class="form-control" placeholder="接收者用户名(为空表示所有用户)" style="text-align: center;">
                        </div>
                        <label class="control-label">接收用户组</label>
                        <div class="form-group">
                            <input type="text" id="share_acceptgroup" class="form-control" placeholder="接收者用户组名(为空表示所有用户组)" style="text-align: center;">
                        </div>
                    `,
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                didOpen: () => {
                    // 在对话框打开之后设置输入框的值
                    document.getElementById('share_select').value = share.auth;
                    document.getElementById('share_accepter').value = share.accepterName || '';
                    document.getElementById('share_acceptgroup').value = share.acceptGroupName || '';
                },
                preConfirm: () => {
                    return {
                        permission: document.getElementById('share_select').value,
                        day: document.getElementById('share_day').value || 0,
                        hour: document.getElementById('share_hour').value || 0,
                        minute: document.getElementById('share_minute').value || 0,
                        accepter: document.getElementById('share_accepter').value,
                        acceptGroupName: document.getElementById('share_acceptgroup').value,
                    }
                }
            });
            if (formValues) {
                let userId = null
                let acceptGroupId = null
                if (formValues.day < 0 || formValues.hour < 0 || formValues.minute < 0) {
                    this.$swal.fire('时间不能为负数', '请重新输入', 'error');
                    return;
                }
                // 判断输入是否是数字
                if (isNaN(formValues.day) || isNaN(formValues.hour) || isNaN(formValues.minute)) {
                    this.$swal.fire('时间必须为数字', '请重新输入', 'error');
                    return;
                }
                if (formValues.accepter == '所有人') {
                    formValues.accepter = '';
                }
                if (formValues.accepter) {
                    if (formValues.accepter == this.userData.userName) {
                        this.$swal.fire('不能分享给自己', '请重新输入', 'error');
                        return;
                    }
                    const response = await axios.post('/api/queryIfExistsUserByUserName?userName=' + formValues.accepter);
                    const data = response.data.data
                    if (data.state == 0) {
                        this.$swal.fire('用户不存在', '请重新输入', 'error');
                        return;
                    }
                    userId = data.userId
                }
                if (formValues.acceptGroupName == '所有用户组') {
                    formValues.acceptGroupName = '';
                }
                if (formValues.acceptGroupName) {
                    const response = await axios.post('/api/findUserGroupByName?name=' + formValues.acceptGroupName);

                    const data = response.data.data
                    if (data.state == 0) {
                        this.$swal.fire('用户组不存在', '请重新输入', 'error');
                        return;
                    }
                    acceptGroupId = data.userGroup.groupId
                }
                const oldDueTime = new Date(share.dueTime);
                const dueTime = new Date(oldDueTime.getTime() + formValues.day * 24 * 60 * 60 * 1000 + formValues.hour * 60 * 60 * 1000 + formValues.minute * 60 * 1000);
                const shareData = {
                    shareId: share.shareId,
                    fileId: share.fileId,
                    folderId: share.folderId,
                    sharerId: share.sharerId,
                    auth: share.auth,
                    shareTime: share.shareTime,
                    dueTime: dueTime,
                    accepterId: userId ?? -2,
                    acceptGroupId: acceptGroupId ?? -2,
                    isFolder: 0
                };
                await axios.post('api/updateShare', [shareData])
                this.$swal.fire('修改成功', '', 'success');

            }
            await this.getShares();
        },
        async deleteShare(share) {
            const result = await this.$swal.fire({
                title: '是否将分享删除',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            });
            if (result.isConfirmed) {
                await axios.post('/api/deleteShareByShareId', { shareId: share.shareId });
                this.$swal.fire('操作成功', '分享已删除', 'success');
            }
            else {
                this.$swal.fire('操作取消', '分享未删除', 'info');
            }
            await this.getShares();
        }
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
    updated() {
        this.$nextTick(() => {
            $('.footable').footable();
            $('.footable').init();
        });
    },
}
</script>