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
                            <a href="userhome"><i class="fa fa-laptop"></i> <span
                                    class="nav-label">主页</span></a>
                        </li>
                        <li>
                            <a><i class="fa fa-folder-o"></i> <span
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
                        <li class="active">
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
                    <nav class="navbar navbar-static-top  " role="navigation" style="margin-bottom: 0">
                        <div class="navbar-header">
                            <a style="height:30px" class="navbar-minimalize minimalize-styl-2 btn btn-primary "
                                href="file_manager#"><i style="margin-top:2px" class="fa fa-bars"></i> </a>
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
                                <a href="logoutServlet">
                                    <i class="fa fa-sign-out"></i>登出
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="row wrapper border-bottom white-bg page-heading">
                    <div class="col-sm-4">
                        <h2>日志</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-9">
                        <div class="wrapper wrapper-content animated fadeInUp">
                            <div class="ibox">
                                <div class="ibox-content">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="m-b-md">
                                                <a href="project_detail.html#"
                                                    class="btn btn-white btn-xs pull-right">Edit project</a>
                                                <h2>Contract with Zender Company</h2>
                                            </div>
                                            <dl class="dl-horizontal">
                                                <dt>Status:</dt>
                                                <dd><span class="label label-primary">Active</span></dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-5">
                                            <dl class="dl-horizontal">

                                                <dt>Created by:</dt>
                                                <dd>Alex Smith</dd>
                                                <dt>Messages:</dt>
                                                <dd> 162</dd>
                                                <dt>Client:</dt>
                                                <dd><a href="project_detail.html#" class="text-navy"> Zender Company</a>
                                                </dd>
                                                <dt>Version:</dt>
                                                <dd> v1.4.2 </dd>
                                            </dl>
                                        </div>
                                        <div class="col-lg-7" id="cluster_info">
                                            <dl class="dl-horizontal">

                                                <dt>Last Updated:</dt>
                                                <dd>16.08.2014 12:15:57</dd>
                                                <dt>Created:</dt>
                                                <dd> 10.07.2014 23:36:57 </dd>
                                                <dt>Participants:</dt>
                                                <dd class="project-people">
                                                    <a href="project_detail.html"><img alt="image" class="img-circle"
                                                            src="../assets/img/a3.jpg"></a>
                                                    <a href="project_detail.html"><img alt="image" class="img-circle"
                                                            src="../assets/img/a1.jpg"></a>
                                                    <a href="project_detail.html"><img alt="image" class="img-circle"
                                                            src="../assets/img/a2.jpg"></a>
                                                    <a href="project_detail.html"><img alt="image" class="img-circle"
                                                            src="../assets/img/a4.jpg"></a>
                                                    <a href="project_detail.html"><img alt="image" class="img-circle"
                                                            src="../assets/img/a5.jpg"></a>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <dl class="dl-horizontal">
                                                <dt>Completed:</dt>
                                                <dd>
                                                    <div class="progress progress-striped active m-b-sm">
                                                        <div style="width: 60%;" class="progress-bar"></div>
                                                    </div>
                                                    <small>Project completed in <strong>60%</strong>. Remaining close
                                                        the project, sign a contract and invoice.</small>
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <div class="row m-t-sm">
                                        <div class="col-lg-12">
                                            <div class="panel blank-panel">
                                                <div class="panel-heading">
                                                    <div class="panel-options">
                                                        <ul class="nav nav-tabs">
                                                            <li class="active"><a href="project_detail.html#tab-1"
                                                                    data-toggle="tab">Users messages</a></li>
                                                            <li class=""><a href="project_detail.html#tab-2"
                                                                    data-toggle="tab">Last activity</a></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div class="panel-body">

                                                    <div class="tab-content">
                                                        <div class="tab-pane active" id="tab-1">
                                                            <div class="feed-activity-list">
                                                                <div class="feed-element">
                                                                    <a href="project_detail.html#" class="pull-left">
                                                                        <img alt="image" class="img-circle"
                                                                            src="../assets/img/a2.jpg">
                                                                    </a>
                                                                    <div class="media-body ">
                                                                        <small class="pull-right">2h ago</small>
                                                                        <strong>Mark Johnson</strong> posted message on
                                                                        <strong>Monica Smith</strong> site. <br>
                                                                        <small class="text-muted">Today 2:10 pm -
                                                                            12.06.2014</small>
                                                                        <div class="well">
                                                                            Lorem Ipsum is simply dummy text of the
                                                                            printing and typesetting industry. Lorem
                                                                            Ipsum has been the industry's standard dummy
                                                                            text ever since the 1500s.
                                                                            Over the years, sometimes by accident,
                                                                            sometimes on purpose (injected humour and
                                                                            the like).
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="feed-element">
                                                                    <a href="project_detail.html#" class="pull-left">
                                                                        <img alt="image" class="img-circle"
                                                                            src="../assets/img/a3.jpg">
                                                                    </a>
                                                                    <div class="media-body ">
                                                                        <small class="pull-right">2h ago</small>
                                                                        <strong>Janet Rosowski</strong> add 1 photo on
                                                                        <strong>Monica Smith</strong>. <br>
                                                                        <small class="text-muted">2 days ago at
                                                                            8:30am</small>
                                                                    </div>
                                                                </div>
                                                                <div class="feed-element">
                                                                    <a href="project_detail.html#" class="pull-left">
                                                                        <img alt="image" class="img-circle"
                                                                            src="../assets/img/a4.jpg">
                                                                    </a>
                                                                    <div class="media-body ">
                                                                        <small class="pull-right text-navy">5h
                                                                            ago</small>
                                                                        <strong>Chris Johnatan Overtunk</strong> started
                                                                        following <strong>Monica Smith</strong>. <br>
                                                                        <small class="text-muted">Yesterday 1:21 pm -
                                                                            11.06.2014</small>
                                                                        <div class="actions">
                                                                            <a class="btn btn-xs btn-white"><i
                                                                                    class="fa fa-thumbs-up"></i> Like
                                                                            </a>
                                                                            <a class="btn btn-xs btn-white"><i
                                                                                    class="fa fa-heart"></i> Love</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="feed-element">
                                                                    <a href="project_detail.html#" class="pull-left">
                                                                        <img alt="image" class="img-circle"
                                                                            src="../assets/img/a5.jpg">
                                                                    </a>
                                                                    <div class="media-body ">
                                                                        <small class="pull-right">2h ago</small>
                                                                        <strong>Kim Smith</strong> posted message on
                                                                        <strong>Monica Smith</strong> site. <br>
                                                                        <small class="text-muted">Yesterday 5:20 pm -
                                                                            12.06.2014</small>
                                                                        <div class="well">
                                                                            Lorem Ipsum is simply dummy text of the
                                                                            printing and typesetting industry. Lorem
                                                                            Ipsum has been the industry's standard dummy
                                                                            text ever since the 1500s.
                                                                            Over the years, sometimes by accident,
                                                                            sometimes on purpose (injected humour and
                                                                            the like).
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="feed-element">
                                                                    <a href="project_detail.html#" class="pull-left">
                                                                        <img alt="image" class="img-circle"
                                                                            src="../assets/img/profile.jpg">
                                                                    </a>
                                                                    <div class="media-body ">
                                                                        <small class="pull-right">23h ago</small>
                                                                        <strong>Monica Smith</strong> love <strong>Kim
                                                                            Smith</strong>. <br>
                                                                        <small class="text-muted">2 days ago at 2:30 am
                                                                            - 11.06.2014</small>
                                                                    </div>
                                                                </div>
                                                                <div class="feed-element">
                                                                    <a href="project_detail.html#" class="pull-left">
                                                                        <img alt="image" class="img-circle"
                                                                            src="../assets/img/a7.jpg">
                                                                    </a>
                                                                    <div class="media-body ">
                                                                        <small class="pull-right">46h ago</small>
                                                                        <strong>Mike Loreipsum</strong> started
                                                                        following <strong>Monica Smith</strong>. <br>
                                                                        <small class="text-muted">3 days ago at 7:58 pm
                                                                            - 10.06.2014</small>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div class="tab-pane" id="tab-2">

                                                            <table class="table table-striped">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Status</th>
                                                                        <th>Title</th>
                                                                        <th>Start Time</th>
                                                                        <th>End Time</th>
                                                                        <th>Comments</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <span class="label label-primary"><i
                                                                                    class="fa fa-check"></i>
                                                                                Completed</span>
                                                                        </td>
                                                                        <td>
                                                                            Create project in webapp
                                                                        </td>
                                                                        <td>
                                                                            12.07.2014 10:10:1
                                                                        </td>
                                                                        <td>
                                                                            14.07.2014 10:16:36
                                                                        </td>
                                                                        <td>
                                                                            <p class="small">
                                                                                Lorem Ipsum is that it has a
                                                                                more-or-less normal distribution of
                                                                                letters, as opposed to using 'Content
                                                                                here, content here', making it look like
                                                                                readable.
                                                                            </p>
                                                                        </td>

                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <span class="label label-primary"><i
                                                                                    class="fa fa-check"></i>
                                                                                Accepted</span>
                                                                        </td>
                                                                        <td>
                                                                            Various versions
                                                                        </td>
                                                                        <td>
                                                                            12.07.2014 10:10:1
                                                                        </td>
                                                                        <td>
                                                                            14.07.2014 10:16:36
                                                                        </td>
                                                                        <td>
                                                                            <p class="small">
                                                                                Various versions have evolved over the
                                                                                years, sometimes by accident, sometimes
                                                                                on purpose (injected humour and the
                                                                                like).
                                                                            </p>
                                                                        </td>

                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <span class="label label-primary"><i
                                                                                    class="fa fa-check"></i> Sent</span>
                                                                        </td>
                                                                        <td>
                                                                            There are many variations
                                                                        </td>
                                                                        <td>
                                                                            12.07.2014 10:10:1
                                                                        </td>
                                                                        <td>
                                                                            14.07.2014 10:16:36
                                                                        </td>
                                                                        <td>
                                                                            <p class="small">
                                                                                There are many variations of passages of
                                                                                Lorem Ipsum available, but the majority
                                                                                have suffered alteration in some form,
                                                                                by injected humour, or randomised words
                                                                                which
                                                                            </p>
                                                                        </td>

                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <span class="label label-primary"><i
                                                                                    class="fa fa-check"></i>
                                                                                Reported</span>
                                                                        </td>
                                                                        <td>
                                                                            Latin words
                                                                        </td>
                                                                        <td>
                                                                            12.07.2014 10:10:1
                                                                        </td>
                                                                        <td>
                                                                            14.07.2014 10:16:36
                                                                        </td>
                                                                        <td>
                                                                            <p class="small">
                                                                                Latin words, combined with a handful of
                                                                                model sentence structures
                                                                            </p>
                                                                        </td>

                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <span class="label label-primary"><i
                                                                                    class="fa fa-check"></i>
                                                                                Accepted</span>
                                                                        </td>
                                                                        <td>
                                                                            The generated Lorem
                                                                        </td>
                                                                        <td>
                                                                            12.07.2014 10:10:1
                                                                        </td>
                                                                        <td>
                                                                            14.07.2014 10:16:36
                                                                        </td>
                                                                        <td>
                                                                            <p class="small">
                                                                                The generated Lorem Ipsum is therefore
                                                                                always free from repetition, injected
                                                                                humour, or non-characteristic words etc.
                                                                            </p>
                                                                        </td>

                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <span class="label label-primary"><i
                                                                                    class="fa fa-check"></i> Sent</span>
                                                                        </td>
                                                                        <td>
                                                                            The first line
                                                                        </td>
                                                                        <td>
                                                                            12.07.2014 10:10:1
                                                                        </td>
                                                                        <td>
                                                                            14.07.2014 10:16:36
                                                                        </td>
                                                                        <td>
                                                                            <p class="small">
                                                                                The first line of Lorem Ipsum, "Lorem
                                                                                ipsum dolor sit amet..", comes from a
                                                                                line in section 1.10.32.
                                                                            </p>
                                                                        </td>

                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <span class="label label-primary"><i
                                                                                    class="fa fa-check"></i>
                                                                                Reported</span>
                                                                        </td>
                                                                        <td>
                                                                            The standard chunk
                                                                        </td>
                                                                        <td>
                                                                            12.07.2014 10:10:1
                                                                        </td>
                                                                        <td>
                                                                            14.07.2014 10:16:36
                                                                        </td>
                                                                        <td>
                                                                            <p class="small">
                                                                                The standard chunk of Lorem Ipsum used
                                                                                since the 1500s is reproduced below for
                                                                                those interested.
                                                                            </p>
                                                                        </td>

                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <span class="label label-primary"><i
                                                                                    class="fa fa-check"></i>
                                                                                Completed</span>
                                                                        </td>
                                                                        <td>
                                                                            Lorem Ipsum is that
                                                                        </td>
                                                                        <td>
                                                                            12.07.2014 10:10:1
                                                                        </td>
                                                                        <td>
                                                                            14.07.2014 10:16:36
                                                                        </td>
                                                                        <td>
                                                                            <p class="small">
                                                                                Lorem Ipsum is that it has a
                                                                                more-or-less normal distribution of
                                                                                letters, as opposed to using 'Content
                                                                                here, content here', making it look like
                                                                                readable.
                                                                            </p>
                                                                        </td>

                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <span class="label label-primary"><i
                                                                                    class="fa fa-check"></i> Sent</span>
                                                                        </td>
                                                                        <td>
                                                                            Contrary to popular
                                                                        </td>
                                                                        <td>
                                                                            12.07.2014 10:10:1
                                                                        </td>
                                                                        <td>
                                                                            14.07.2014 10:16:36
                                                                        </td>
                                                                        <td>
                                                                            <p class="small">
                                                                                Contrary to popular belief, Lorem Ipsum
                                                                                is not simply random text. It has roots
                                                                                in a piece of classical
                                                                            </p>
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
                    <div class="col-lg-3">
                        <div class="wrapper wrapper-content project-manager">
                            <h4>Project description</h4>
                            <img src="../assets/img/zender_logo.png" class="img-responsive">
                            <p class="small">
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't
                                look
                                even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to
                                be sure there isn't anything embarrassing
                            </p>
                            <p class="small font-bold">
                                <span><i class="fa fa-circle text-warning"></i> High priority</span>
                            </p>
                            <h5>Project tag</h5>
                            <ul class="tag-list" style="padding: 0">
                                <li><a href="project_detail.html"><i class="fa fa-tag"></i> Zender</a></li>
                                <li><a href="project_detail.html"><i class="fa fa-tag"></i> Lorem ipsum</a></li>
                                <li><a href="project_detail.html"><i class="fa fa-tag"></i> Passages</a></li>
                                <li><a href="project_detail.html"><i class="fa fa-tag"></i> Variations</a></li>
                            </ul>
                            <h5>Project files</h5>
                            <ul class="list-unstyled project-files">
                                <li><a href="project_detail.html"><i class="fa fa-file"></i> Project_document.docx</a>
                                </li>
                                <li><a href="project_detail.html"><i class="fa fa-file-picture-o"></i>
                                        Logo_zender_company.jpg</a></li>
                                <li><a href="project_detail.html"><i class="fa fa-stack-exchange"></i>
                                        Email_from_Alex.mln</a></li>
                                <li><a href="project_detail.html"><i class="fa fa-file"></i>
                                        Contract_20_11_2014.docx</a></li>
                            </ul>
                            <div class="text-center m-t-md">
                                <a href="project_detail.html#" class="btn btn-xs btn-primary">Add files</a>
                                <a href="project_detail.html#" class="btn btn-xs btn-primary">Report contact</a>

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

<script>
import $ from 'jquery'
import "../assets/js/plugins/metisMenu/jquery.metisMenu.js"
import "../assets/js/plugins/slimscroll/jquery.slimscroll.min.js"
import animationHover from "../assets/js/inspinia.js"
import "../assets/js/plugins/pace/pace.min.js"
export default {
    name: 'Log',
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