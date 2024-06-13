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
                <div class="row border-bottom">
                    <nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">
                        <div class="navbar-header">
                            <a style="height:30px" class="navbar-minimalize minimalize-styl-2 btn btn-primary "
                                ><i style="margin-top:2px" class="fa fa-bars"></i> </a>
                            <form role="search" class="navbar-form-custom" action="search_results.html">
                                <div class="form-group">
                                    <input type="text" placeholder="输入要查找的文件......" class="form-control"
                                        name="top-search" id="top-search">
                                </div>
                            </form>
                        </div>
                        <ul class="nav navbar-top-links navbar-right">
                            <li>
                                <span class="m-r-sm text-muted welcome-message">欢迎来到文档之翼</span>
                            </li>
                            <li>
                                <a href="login.html">
                                    <i class="fa fa-sign-out"></i> 登出
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
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
                                            <th>文件名</th>
                                            <th>11</th>
                                            <th>22</th>
                                            <th>33</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="unread">
                                            <td class="check-mail">
                                                <input type="checkbox">
                                            </td>
                                            <td class="mail-ontact"><a href="mail_detail.html">Anna Smith</a></td>
                                            <td class="mail-subject"><a href="mail_detail.html">Lorem ipsum dolor
                                                    noretek imit set.</a></td>
                                            <td class=""><i class="fa fa-paperclip"></i></td>
                                            <td class="text-right mail-date">6.10 AM</td>
                                        </tr>
                                        <tr class="unread">
                                            <td class="check-mail">
                                                <input type="checkbox" checked>
                                            </td>
                                            <td class="mail-ontact"><a href="mail_detail.html">Jack Nowak</a></td>
                                            <td class="mail-subject"><a href="mail_detail.html">Aldus PageMaker
                                                    including versions of Lorem Ipsum.</a></td>
                                            <td class=""></td>
                                            <td class="text-right mail-date">8.22 PM</td>
                                        </tr>
                                        <tr class="read">
                                            <td class="check-mail">
                                                <input type="checkbox">
                                            </td>
                                            <td class="mail-ontact"><a href="mail_detail.html">Facebook</a> <span
                                                    class="label label-warning pull-right">Clients</span> </td>
                                            <td class="mail-subject"><a href="mail_detail.html">Many desktop publishing
                                                    packages and web page editors.</a></td>
                                            <td class=""></td>
                                            <td class="text-right mail-date">Jan 16</td>
                                        </tr>
                                        <tr class="read">
                                            <td class="check-mail">
                                                <input type="checkbox">
                                            </td>
                                            <td class="mail-ontact"><a href="mail_detail.html">Mailchip</a></td>
                                            <td class="mail-subject"><a href="mail_detail.html">There are many
                                                    variations of passages of Lorem Ipsum.</a></td>
                                            <td class=""></td>
                                            <td class="text-right mail-date">Mar 22</td>
                                        </tr>
                                        <tr class="read">
                                            <td class="check-mail">
                                                <input type="checkbox">
                                            </td>
                                            <td class="mail-ontact"><a href="mail_detail.html">Alex T.</a> <span
                                                    class="label label-danger pull-right">Documents</span></td>
                                            <td class="mail-subject"><a href="mail_detail.html">Lorem ipsum dolor
                                                    noretek imit set.</a></td>
                                            <td class=""><i class="fa fa-paperclip"></i></td>
                                            <td class="text-right mail-date">December 22</td>
                                        </tr>
                                        <tr class="read">
                                            <td class="check-mail">
                                                <input type="checkbox">
                                            </td>
                                            <td class="mail-ontact"><a href="mail_detail.html">Monica Ryther</a></td>
                                            <td class="mail-subject"><a href="mail_detail.html">The standard chunk of
                                                    Lorem Ipsum used.</a></td>
                                            <td class=""></td>
                                            <td class="text-right mail-date">Jun 12</td>
                                        </tr>
                                        <tr class="read">
                                            <td class="check-mail">
                                                <input type="checkbox">
                                            </td>
                                            <td class="mail-ontact"><a href="mail_detail.html">Sandra Derick</a></td>
                                            <td class="mail-subject"><a href="mail_detail.html">Contrary to popular
                                                    belief.</a></td>
                                            <td class=""></td>
                                            <td class="text-right mail-date">May 28</td>
                                        </tr>
                                        <tr class="read">
                                            <td class="check-mail">
                                                <input type="checkbox">
                                            </td>
                                            <td class="mail-ontact"><a href="mail_detail.html">Patrick Pertners</a>
                                                <span class="label label-info pull-right">Adv</span></td>
                                            <td class="mail-subject"><a href="mail_detail.html">If you are going to use
                                                    a passage of Lorem </a></td>
                                            <td class=""></td>
                                            <td class="text-right mail-date">May 28</td>
                                        </tr>
                                        <tr class="read">
                                            <td class="check-mail">
                                                <input type="checkbox">
                                            </td>
                                            <td class="mail-ontact"><a href="mail_detail.html">Michael Fox</a></td>
                                            <td class="mail-subject"><a href="mail_detail.html">Humour, or
                                                    non-characteristic words etc.</a></td>
                                            <td class=""></td>
                                            <td class="text-right mail-date">Dec 9</td>
                                        </tr>
                                        <tr class="read">
                                            <td class="check-mail">
                                                <input type="checkbox">
                                            </td>
                                            <td class="mail-ontact"><a href="mail_detail.html">Damien Ritz</a></td>
                                            <td class="mail-subject"><a href="mail_detail.html">Oor Lorem Ipsum is that
                                                    it has a more-or-less normal.</a></td>
                                            <td class=""></td>
                                            <td class="text-right mail-date">Jun 11</td>
                                        </tr>
                                        <tr class="read">
                                            <td class="check-mail">
                                                <input type="checkbox">
                                            </td>
                                            <td class="mail-ontact"><a href="mail_detail.html">Anna Smith</a></td>
                                            <td class="mail-subject"><a href="mail_detail.html">Lorem ipsum dolor
                                                    noretek imit set.</a></td>
                                            <td class=""><i class="fa fa-paperclip"></i></td>
                                            <td class="text-right mail-date">6.10 AM</td>
                                        </tr>
                                        <tr class="read">
                                            <td class="check-mail">
                                                <input type="checkbox">
                                            </td>
                                            <td class="mail-ontact"><a href="mail_detail.html">Jack Nowak</a></td>
                                            <td class="mail-subject"><a href="mail_detail.html">Aldus PageMaker
                                                    including versions of Lorem Ipsum.</a></td>
                                            <td class=""></td>
                                            <td class="text-right mail-date">8.22 PM</td>
                                        </tr>
                                        <tr class="read">
                                            <td class="check-mail">
                                                <input type="checkbox">
                                            </td>
                                            <td class="mail-ontact"><a href="mail_detail.html">Mailchip</a></td>
                                            <td class="mail-subject"><a href="mail_detail.html">There are many
                                                    variations of passages of Lorem Ipsum.</a></td>
                                            <td class=""></td>
                                            <td class="text-right mail-date">Mar 22</td>
                                        </tr>
                                        <tr class="read">
                                            <td class="check-mail">
                                                <input type="checkbox">
                                            </td>
                                            <td class="mail-ontact"><a href="mail_detail.html">Alex T.</a> <span
                                                    class="label label-warning pull-right">Clients</span></td>
                                            <td class="mail-subject"><a href="mail_detail.html">Lorem ipsum dolor
                                                    noretek imit set.</a></td>
                                            <td class=""><i class="fa fa-paperclip"></i></td>
                                            <td class="text-right mail-date">December 22</td>
                                        </tr>
                                        <tr class="read">
                                            <td class="check-mail">
                                                <input type="checkbox">
                                            </td>
                                            <td class="mail-ontact"><a href="mail_detail.html">Monica Ryther</a></td>
                                            <td class="mail-subject"><a href="mail_detail.html">The standard chunk of
                                                    Lorem Ipsum used.</a></td>
                                            <td class=""></td>
                                            <td class="text-right mail-date">Jun 12</td>
                                        </tr>
                                        <tr class="read">
                                            <td class="check-mail">
                                                <input type="checkbox">
                                            </td>
                                            <td class="mail-ontact"><a href="mail_detail.html">Sandra Derick</a></td>
                                            <td class="mail-subject"><a href="mail_detail.html">Contrary to popular
                                                    belief.</a></td>
                                            <td class=""></td>
                                            <td class="text-right mail-date">May 28</td>
                                        </tr>
                                        <tr class="read">
                                            <td class="check-mail">
                                                <input type="checkbox">
                                            </td>
                                            <td class="mail-ontact"><a href="mail_detail.html">Patrick Pertners</a>
                                            </td>
                                            <td class="mail-subject"><a href="mail_detail.html">If you are going to use
                                                    a passage of Lorem </a></td>
                                            <td class=""></td>
                                            <td class="text-right mail-date">May 28</td>
                                        </tr>
                                        <tr class="read">
                                            <td class="check-mail">
                                                <input type="checkbox">
                                            </td>
                                            <td class="mail-ontact"><a href="mail_detail.html">Michael Fox</a></td>
                                            <td class="mail-subject"><a href="mail_detail.html">Humour, or
                                                    non-characteristic words etc.</a></td>
                                            <td class=""></td>
                                            <td class="text-right mail-date">Dec 9</td>
                                        </tr>
                                        <tr class="read">
                                            <td class="check-mail">
                                                <input type="checkbox">
                                            </td>
                                            <td class="mail-ontact"><a href="mail_detail.html">Damien Ritz</a></td>
                                            <td class="mail-subject"><a href="mail_detail.html">Oor Lorem Ipsum is that
                                                    it has a more-or-less normal.</a></td>
                                            <td class=""></td>
                                            <td class="text-right mail-date">Jun 11</td>
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
    export default {
		name: 'Profile',
		mounted() {
		}
	}
</script>