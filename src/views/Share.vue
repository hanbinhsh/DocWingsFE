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
                <TopBar/>
                <div class="row wrapper border-bottom white-bg page-heading">
                    <div class="col-lg-10">
                        <h2>分享</h2>
                    </div>
                    <div class="col-lg-2">

                    </div>
                </div>

                <div class="wrapper wrapper-content  animated fadeInRight">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="ibox">
                                <div class="ibox-title">
                                    <h5>Issue list</h5>
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

                                            <strong>Found 61 issues.</strong>



                                        </div>

                                    </div>

                                    <div class="table-responsive">
                                        <table class="table table-hover issue-tracker">
                                            <tbody>
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
                                                        <span class="label label-primary">Added</span>
                                                    </td>
                                                    <td class="issue-info">
                                                        <a href="issue_tracker.html#">
                                                            ISSUE-17
                                                        </a>

                                                        <small>
                                                            Desktop publishing packages and web page editors now use
                                                            Lorem Ipsum as their default model text
                                                        </small>
                                                    </td>
                                                    <td>
                                                        Anna Smith
                                                    </td>
                                                    <td>
                                                        10.02.2015 05:32 am
                                                    </td>
                                                    <td>
                                                        <span class="pie">3,2</span>
                                                        2d
                                                    </td>
                                                    <td class="text-right">
                                                        <button class="btn btn-white btn-xs"> Tag</button>
                                                        <button class="btn btn-white btn-xs"> Rag</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span class="label label-primary">Added</span>
                                                    </td>
                                                    <td class="issue-info">
                                                        <a href="issue_tracker.html#">
                                                            ISSUE-12
                                                        </a>

                                                        <small>
                                                            It is a long established fact that a reader will be
                                                        </small>
                                                    </td>
                                                    <td>
                                                        Anthony Jackson
                                                    </td>
                                                    <td>
                                                        02.03.2015 06:02 am
                                                    </td>
                                                    <td>
                                                        <span class="pie">1,2</span>
                                                        1d
                                                    </td>
                                                    <td class="text-right">
                                                        <button class="btn btn-white btn-xs"> Tag</button>
                                                        <button class="btn btn-white btn-xs"> Mag</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span class="label label-primary">Added</span>
                                                    </td>
                                                    <td class="issue-info">
                                                        <a href="issue_tracker.html#">
                                                            ISSUE-11
                                                        </a>

                                                        <small>
                                                            There are many variations of passages of Lorem Ipsum
                                                            available, but the majority have suffered
                                                        </small>
                                                    </td>
                                                    <td>
                                                        Monica Proven
                                                    </td>
                                                    <td>
                                                        01.10.2015 11:02 pm
                                                    </td>
                                                    <td>
                                                        <span class="pie">4,2</span>
                                                        3d
                                                    </td>
                                                    <td class="text-right">
                                                        <button class="btn btn-white btn-xs"> Tag</button>
                                                        <button class="btn btn-white btn-xs"> Rag</button>
                                                        <button class="btn btn-white btn-xs"> Dag</button>
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
                                                        <span class="label label-warning">Fixed</span>
                                                    </td>
                                                    <td class="issue-info">
                                                        <a href="issue_tracker.html#">
                                                            ISSUE-07
                                                        </a>

                                                        <small>
                                                            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
                                                            dolor sit am
                                                        </small>
                                                    </td>
                                                    <td>
                                                        Mark Conor
                                                    </td>
                                                    <td>
                                                        18.09.2015 06:20 pm
                                                    </td>
                                                    <td>
                                                        <span class="pie">3,2</span>
                                                        3d
                                                    </td>
                                                    <td class="text-right">
                                                        <button class="btn btn-white btn-xs"> Tag</button>
                                                        <button class="btn btn-white btn-xs"> Mag</button>
                                                        <button class="btn btn-white btn-xs"> Dag</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span class="label label-warning">Fixed</span>
                                                    </td>
                                                    <td class="issue-info">
                                                        <a href="issue_tracker.html#">
                                                            ISSUE-06
                                                        </a>

                                                        <small>
                                                            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
                                                            dolor sit am
                                                        </small>
                                                    </td>
                                                    <td>
                                                        Carol Jackson
                                                    </td>
                                                    <td>
                                                        11.03.2015 07:30 pm
                                                    </td>
                                                    <td>
                                                        <span class="pie">3,2</span>
                                                        2d
                                                    </td>
                                                    <td class="text-right">
                                                        <button class="btn btn-white btn-xs"> Mag</button>
                                                        <button class="btn btn-white btn-xs"> Dag</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span class="label label-warning">Fixed</span>
                                                    </td>
                                                    <td class="issue-info">
                                                        <a href="issue_tracker.html#">
                                                            ISSUE-05
                                                        </a>

                                                        <small>
                                                            Content here, content here', making it look like readable
                                                            English. Many desktop
                                                        </small>
                                                    </td>
                                                    <td>
                                                        Carol Jackson
                                                    </td>
                                                    <td>
                                                        05.04.2015 08:40 pm
                                                    </td>
                                                    <td>
                                                        <span class="pie">3,2</span>
                                                        2d
                                                    </td>
                                                    <td class="text-right">
                                                        <button class="btn btn-white btn-xs"> Mag</button>
                                                        <button class="btn btn-white btn-xs"> Dag</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span class="label label-warning">Fixed</span>
                                                    </td>
                                                    <td class="issue-info">
                                                        <a href="issue_tracker.html#">
                                                            ISSUE-04
                                                        </a>

                                                        <small>
                                                            Virginia, looked up one of the more obscure Latin words,
                                                            consectetur
                                                        </small>
                                                    </td>
                                                    <td>
                                                        Monica Smith
                                                    </td>
                                                    <td>
                                                        10.06.2014 08:10 pm
                                                    </td>
                                                    <td>
                                                        <span class="pie">5,7</span>
                                                        4d
                                                    </td>
                                                    <td class="text-right">
                                                        <button class="btn btn-white btn-xs"> Mag</button>
                                                        <button class="btn btn-white btn-xs"> Cag</button>
                                                        <button class="btn btn-white btn-xs"> Dag</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span class="label label-warning">Fixed</span>
                                                    </td>
                                                    <td class="issue-info">
                                                        <a href="issue_tracker.html#">
                                                            ISSUE-03
                                                        </a>

                                                        <small>
                                                            Injected humour, or randomised words which don't l
                                                        </small>
                                                    </td>
                                                    <td>
                                                        Anna Johnson
                                                    </td>
                                                    <td>
                                                        13.05.2014 09:20 pm
                                                    </td>
                                                    <td>
                                                        <span class="pie">2,7</span>
                                                        3d
                                                    </td>
                                                    <td class="text-right">
                                                        <button class="btn btn-white btn-xs"> Cag</button>
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
                                                <tr>
                                                    <td>
                                                        <span class="label label-danger">Bug</span>
                                                    </td>
                                                    <td class="issue-info">
                                                        <a href="issue_tracker.html#">
                                                            ISSUE-41
                                                        </a>

                                                        <small>
                                                            Desktop publishing packages and web page editors now use
                                                            Lorem Ipsum as their default model text
                                                        </small>
                                                    </td>
                                                    <td>
                                                        Anna Smith
                                                    </td>
                                                    <td>
                                                        10.02.2015 05:32 am
                                                    </td>
                                                    <td>
                                                        <span class="pie">3,2</span>
                                                        2d
                                                    </td>
                                                    <td class="text-right">
                                                        <button class="btn btn-white btn-xs"> Tag</button>
                                                        <button class="btn btn-white btn-xs"> Rag</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span class="label label-danger">Bug</span>
                                                    </td>
                                                    <td class="issue-info">
                                                        <a href="issue_tracker.html#">
                                                            ISSUE-34
                                                        </a>

                                                        <small>
                                                            It is a long established fact that a reader will be
                                                        </small>
                                                    </td>
                                                    <td>
                                                        Anthony Jackson
                                                    </td>
                                                    <td>
                                                        02.03.2015 06:02 am
                                                    </td>
                                                    <td>
                                                        <span class="pie">1,2</span>
                                                        1d
                                                    </td>
                                                    <td class="text-right">
                                                        <button class="btn btn-white btn-xs"> Tag</button>
                                                        <button class="btn btn-white btn-xs"> Mag</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span class="label label-danger">Bug</span>
                                                    </td>
                                                    <td class="issue-info">
                                                        <a href="issue_tracker.html#">
                                                            ISSUE-46
                                                        </a>

                                                        <small>
                                                            There are many variations of passages of Lorem Ipsum
                                                            available, but the majority have suffered
                                                        </small>
                                                    </td>
                                                    <td>
                                                        Monica Proven
                                                    </td>
                                                    <td>
                                                        01.10.2015 11:02 pm
                                                    </td>
                                                    <td>
                                                        <span class="pie">4,2</span>
                                                        3d
                                                    </td>
                                                    <td class="text-right">
                                                        <button class="btn btn-white btn-xs"> Tag</button>
                                                        <button class="btn btn-white btn-xs"> Rag</button>
                                                        <button class="btn btn-white btn-xs"> Dag</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span class="label label-danger">Bug</span>
                                                    </td>
                                                    <td class="issue-info">
                                                        <a href="issue_tracker.html#">
                                                            ISSUE-51
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
                                                            ISSUE-52
                                                        </a>

                                                        <small>
                                                            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
                                                            dolor sit am
                                                        </small>
                                                    </td>
                                                    <td>
                                                        Mark Conor
                                                    </td>
                                                    <td>
                                                        18.09.2015 06:20 pm
                                                    </td>
                                                    <td>
                                                        <span class="pie">3,2</span>
                                                        3d
                                                    </td>
                                                    <td class="text-right">
                                                        <button class="btn btn-white btn-xs"> Tag</button>
                                                        <button class="btn btn-white btn-xs"> Mag</button>
                                                        <button class="btn btn-white btn-xs"> Dag</button>
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
	name: 'Share',
	methods: {
	},
    components: {
        TopBar,
        UserItem,
        FootBar
    },
}
</script>