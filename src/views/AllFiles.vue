<template>
    <div class="mainpage">
        <div id="wrapper">
            <nav class="navbar-default navbar-static-side" role="navigation">
                <div class="sidebar-collapse">
                    <ul class="nav metismenu" id="side-menu">
                        <li class="nav-header">
                            <div class="dropdown profile-element">
                                <span>
                                    <img alt="image" class="img-circle" src="../assets/img/profile_small.jpg" />
                                </span>
                                <a data-toggle="dropdown" class="dropdown-toggle" href="allfiles">
                                    <span class="clear">
                                        <span class="block m-t-xs">
                                            <strong class="font-bold">
                                                NAME
                                                <span class="text-muted text-xs block">Art Director</span>
                                            </strong>
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div class="logo-element">DW+</div>
                        </li>

                        <li>
                            <a href="userhome"><i class="fa fa-laptop"></i> <span
                                    class="nav-label">主页</span></a>
                        </li>
                        <li class="active">
                            <a><i class="fa fa-folder-o"></i> <span
                                    class="nav-label">文件管理</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li class="active"><a href="allfiles">所有文件</a></li>
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
                            <a href="searchAllServlet"><i class="fa fa-trash-o"></i> <span
                                    class="nav-label">回收站</span></a>
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
                <div class="wrapper wrapper-content">
                    <div class="row">
                        <div class="col-lg-2">
                            <div class="ibox float-e-margins">
                                <div class="ibox-content mailbox-content">
                                    <div class="file-manager">
                                        <a class="btn btn-block btn-primary compose-mail"
                                            href="mail_compose.html">上传新文件</a>
                                        <a class="btn btn-block btn-primary compose-mail"
                                            href="mail_compose.html">创建文件夹</a>
                                        <div class="space-25"></div>
                                        <h5>Folders</h5>
                                        <ul class="folder-list m-b-md" style="padding: 0">
                                            <li><a href="mailbox.html"> <i class="fa fa-inbox "></i> Inbox <span
                                                        class="label label-warning pull-right">16</span> </a></li>
                                            <li><a href="mailbox.html"> <i class="fa fa-envelope-o"></i> Send Mail</a>
                                            </li>
                                            <li><a href="mailbox.html"> <i class="fa fa-certificate"></i> Important</a>
                                            </li>
                                            <li><a href="mailbox.html"> <i class="fa fa-file-text-o"></i> Drafts <span
                                                        class="label label-danger pull-right">2</span></a></li>
                                            <li><a href="mailbox.html"> <i class="fa fa-trash-o"></i> Trash</a></li>
                                        </ul>
                                        <h5>Categories</h5>
                                        <ul class="category-list" style="padding: 0">
                                            <li><a href="mailbox.html#"> <i class="fa fa-circle text-navy"></i> Work
                                                </a></li>
                                            <li><a href="mailbox.html#"> <i class="fa fa-circle text-danger"></i>
                                                    Documents</a></li>
                                            <li><a href="mailbox.html#"> <i class="fa fa-circle text-primary"></i>
                                                    Social</a></li>
                                            <li><a href="mailbox.html#"> <i class="fa fa-circle text-info"></i>
                                                    Advertising</a></li>
                                            <li><a href="mailbox.html#"> <i class="fa fa-circle text-warning"></i>
                                                    Clients</a></li>
                                        </ul>

                                        <h5 class="tag-title">Labels</h5>
                                        <ul class="tag-list" style="padding: 0">
                                            <li><a href="mailbox.html"><i class="fa fa-tag"></i> Family</a></li>
                                            <li><a href="mailbox.html"><i class="fa fa-tag"></i> Work</a></li>
                                            <li><a href="mailbox.html"><i class="fa fa-tag"></i> Home</a></li>
                                            <li><a href="mailbox.html"><i class="fa fa-tag"></i> Children</a></li>
                                            <li><a href="mailbox.html"><i class="fa fa-tag"></i> Holidays</a></li>
                                            <li><a href="mailbox.html"><i class="fa fa-tag"></i> Music</a></li>
                                            <li><a href="mailbox.html"><i class="fa fa-tag"></i> Photography</a></li>
                                            <li><a href="mailbox.html"><i class="fa fa-tag"></i> Film</a></li>
                                        </ul>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-10 animated fadeInRight">
                            <div class="mail-box-header">

                                <form method="get" action="index.html" class="pull-right mail-search">
                                    <div class="input-group">
                                        <input type="text" class="form-control input-sm" name="search"
                                            placeholder="Search email">
                                        <div class="input-group-btn">
                                            <button type="submit" class="btn btn-sm btn-primary">
                                                Search
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <h2>
                                    Inbox (16)
                                </h2>
                                <div class="mail-tools tooltip-demo m-t-md">
                                    <div class="btn-group pull-right">
                                        <button class="btn btn-white btn-sm"><i class="fa fa-arrow-left"></i></button>
                                        <button class="btn btn-white btn-sm"><i class="fa fa-arrow-right"></i></button>

                                    </div>
                                    <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="left"
                                        title="Refresh inbox"><i class="fa fa-refresh"></i> Refresh</button>
                                    <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top"
                                        title="Mark as read"><i class="fa fa-eye"></i> </button>
                                    <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top"
                                        title="Mark as important"><i class="fa fa-exclamation"></i> </button>
                                    <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top"
                                        title="Move to trash"><i class="fa fa-trash-o"></i> </button>

                                </div>
                            </div>
                            <div class="mail-box">

                                <table class="table table-hover table-mail">
                                    <thead>
                                        <tr>
                                        <th>#</th>
                                        <th>文件夹名</th>
                                        <th>标签</th>
                                        <th>上次修改者</th>
                                        <th>上次修改时间</th>
                                        <th>创建者</th>
                                        <th>创建日期</th>
                                        <th>选择</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(folder, index) in folders" :key="index" class="read">
                                            <td>{{ index + 1 }}</td>
                                            <td>{{ folder.folderName }}</td>
                                            <td>{{ folder.tag }}</td>
                                            <td>{{ folder.lastModifierName }}</td>
                                            <td>{{ new Date(folder.lastModifyTime).toLocaleString() }}</td>
                                            <td>{{ folder.creatorName }}</td>
                                            <td>{{ new Date(folder.createTime).toLocaleString() }}</td>
                                            <td class="check-mail">
                                                <input type="checkbox">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="pull-right">
                        10GB of <strong>250GB</strong> Free.
                    </div>
                    <div>
                        <strong>Copyright</strong> DocWings &copy; 2024
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
@import '../assets/css/plugins/iCheck/custom.css';
</style>

<script>
    import $ from 'jquery'
    import "../assets/js/plugins/metisMenu/jquery.metisMenu.js"
    import "../assets/js/plugins/slimscroll/jquery.slimscroll.min.js"
    import "../assets/js/inspinia.js"
    import "../assets/js/plugins/pace/pace.min.js"
    import axios from "axios";

    import TopBar from '@/components/TopBar.vue'
    export default {
		name: 'Profile',
        data() {
            return {
                folders: []
            };
        },
        created() {
            this.fetchFolders();;
        },
        methods: {
            async fetchFolders() {
                try {
                    const response = await axios.get('/api/findFodersByParentId?parentId=0');
                    this.folders = response.data;
                } catch (error) {
                    console.error('Error fetching folders:', error);
                }
            }
        },
        components: {
            TopBar
        },
		mounted() {
		}
	}
</script>