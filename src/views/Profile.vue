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
                                <a data-toggle="dropdown" class="dropdown-toggle" href="profile">
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
                            <a href="file_manager"><i class="fa fa-laptop"></i> <span
                                    class="nav-label">主页</span></a>
                        </li>
                        <li>
                            <a href="typography.html#"><i class="fa fa-folder-o"></i> <span
                                    class="nav-label">文件管理</span><span class="fa arrow"></span></a>
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
                        <li class="active">
                            <a href="profile"><i class="fa fa-diamond"></i> <span class="nav-label">个人资料</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div id="page-wrapper" class="gray-bg">
                <div class="row border-bottom">
                    <nav class="navbar navbar-static-top  " role="navigation" style="margin-bottom: 0">
                        <div class="navbar-header">
                            <a style="height:30px" class="navbar-minimalize minimalize-styl-2 btn btn-primary "
                                href="file_manager#"><i style="margin-top:2px" class="fa fa-bars"></i> </a>
                            <form role="search" class="navbar-form-custom" action="search_results.html">
                                <div class="form-group">
                                    <input type="text" placeholder="输入要查找的文件......" class="form-control" name="top-search" id="top-search">
                                </div>
                            </form>
                        </div>
                        <ul class="nav navbar-top-links navbar-right">
                            <li>
                                <span class="m-r-sm text-muted welcome-message">欢迎来到文档之翼</span>
                            </li>
                            <li>
                                <a href="login">
                                    <i class="fa fa-sign-out"></i>登出
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="row wrapper border-bottom white-bg page-heading">
                    <div class="col-sm-4">
                        <h2>个人资料</h2>
                    </div>
                </div>
                <div class="wrapper wrapper-content">
                    <div class="row animated fadeInRight">
                        <div class="col-md-4">
                            <div class="ibox float-e-margins">
                                <div class="ibox-title">
                                    <h5>个人资料</h5>
                                </div>
                                <div>
                                    <div class="ibox-content no-padding border-left-right">
                                        <img alt="image" class="img-responsive" src="../assets/img/profile_big.jpg">
                                    </div>
                                    <div class="ibox-content profile-content">
                                        <h4><strong>
                                                <jsp:getProperty property="name" name="student" />
                                            </strong></h4>
                                        <h5>兴趣</h5>
                                        <p>
                                            balabala
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="ibox float-e-margins">
                                <div class="ibox-title">
                                    <h5>更改个人资料</h5>
                                </div>
                                <div class="ibox-content">
                                    <div>
                                        <div class="feed-activity-list">
                                            <form class="m-t" role="form" action="ChangePassword" method="post">
                                                <div class="form-group">
                                                    <input type="password" name="oldPassword" class="form-control"
                                                        placeholder="请输入旧密码">
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" name="password" class="form-control"
                                                        placeholder="请输入新密码">
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" name="twicePassword" class="form-control"
                                                        placeholder="请再次输入密码">
                                                </div>
                                                <div class="form-group">
                                                    <label class="checkbox-inline">
                                                        <input type="checkbox" name="interests" value="学习数据结构">学习数据结构
                                                    </label>
                                                    <label class="checkbox-inline">
                                                        <input type="checkbox" name="interests" value="学习JAVA">学习JAVA
                                                    </label>
                                                    <label class="checkbox-inline">
                                                        <input type="checkbox" name="interests" value="学习高等数学">学习高等数学
                                                    </label>
                                                    <label class="checkbox-inline">
                                                        <input type="checkbox" name="interests" value="学习数据库原理">学习数据库原理
                                                    </label>
                                                    <label class="checkbox-inline">
                                                        <input type="checkbox" name="interests" value="学习深度学习">学习深度学习
                                                    </label>
                                                </div>
                                                <button type="submit"
                                                    class="btn btn-primary block full-width m-b">提交</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
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
	@import '../assets/css/bootstrap.min.css';
    @import '../assets/font-awesome/css/font-awesome.css';
    @import '../assets/css/animate.css';
    @import '../assets/css/style.css';
</style>

<script>
    import $ from 'jquery'
    import "../assets/js/bootstrap.min.js"
    import "../assets/js/plugins/metisMenu/jquery.metisMenu.js"
    import "../assets/js/plugins/slimscroll/jquery.slimscroll.min.js"
    import "../assets/js/inspinia.js"
    import "../assets/js/plugins/pace/pace.min.js"
    export default {
		name: 'Profile',
		methods: {
		}
	}
</script>