<template>
    <div class="mainpage">
        <div id="wrapper">
            <nav class="navbar-default navbar-static-side" role="navigation">
                <div class="sidebar-collapse">
                    <ul class="nav metismenu" id="side-menu">
                        <UserItem/>
                        <li class="active">
                            <a href="userhome"><i class="fa fa-laptop"></i> <span
                                    class="nav-label">主页</span></a>
                        </li>
                        <li>
                            <a><i class="fa fa-folder-o"></i> <span
                                    class="nav-label">文件管理</span><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li><a href="allfiles">所有文件</a></li>
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
                            <a href="log"><i class="fa fa-trash-o"></i> <span class="nav-label">回收站</span></a>
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
                    <div class="col-lg-9">
                        <h2>主页</h2>
                    </div>
                </div>
                <div class="wrapper wrapper-content">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="ibox float-e-margins">
                                <div class="ibox-content">
                                    <div class="file-manager">
                                        <h5>Show:</h5>
                                        <a href="file_manager#" class="file-control active">Ale</a>
                                        <a href="file_manager#" class="file-control">Documents</a>
                                        <a href="file_manager#" class="file-control">Audio</a>
                                        <a href="file_manager#" class="file-control">Images</a>
                                        <div class="hr-line-dashed"></div>
                                        <button class="btn btn-primary btn-block">Upload Files</button>
                                        <div class="hr-line-dashed"></div>
                                        <div id="morris-donut-chart"></div>
                                        <div class="hr-line-dashed"></div>
                                        <h5>Folders</h5>
                                        <ul class="folder-list" style="padding: 0">
                                            <li><a href="file_manager"><i class="fa fa-folder"></i> Files</a></li>
                                            <li><a href="file_manager"><i class="fa fa-folder"></i> Pictures</a>
                                            </li>
                                            <li><a href="file_manager"><i class="fa fa-folder"></i> Web pages</a>
                                            </li>
                                            <li><a href="file_manager"><i class="fa fa-folder"></i>
                                                    Illustrations</a></li>
                                            <li><a href="file_manager"><i class="fa fa-folder"></i> Films</a></li>
                                            <li><a href="file_manager"><i class="fa fa-folder"></i> Books</a></li>
                                        </ul>
                                        <h5 class="tag-title">Tags</h5>
                                        <ul class="tag-list" style="padding: 0">
                                            <li><a href="file_manager">Family</a></li>
                                            <li><a href="file_manager">Work</a></li>
                                            <li><a href="file_manager">Home</a></li>
                                            <li><a href="file_manager">Children</a></li>
                                            <li><a href="file_manager">Holidays</a></li>
                                            <li><a href="file_manager">Music</a></li>
                                            <li><a href="file_manager">Photography</a></li>
                                            <li><a href="file_manager">Film</a></li>
                                        </ul>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9 animated fadeInRight">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="file-box">
                                        <div class="file">
                                            <a href="file_manager#">
                                                <span class="corner"></span>
                                                <div class="icon">
                                                    <i class="fa fa-file"></i>
                                                </div>
                                                <div class="file-name">
                                                    Document_2014.doc
                                                    <br />
                                                    <small>Added: Jan 11, 2014</small>
                                                </div>
                                            </a>
                                        </div>

                                    </div>
                                    <div class="file-box">
                                        <div class="file">
                                            <a href="file_manager#">
                                                <span class="corner"></span>

                                                <div class="image">
                                                    <img alt="image" class="img-responsive" src="../assets/img/p1.jpg">
                                                </div>
                                                <div class="file-name">
                                                    Italy street.jpg
                                                    <br />
                                                    <small>Added: Jan 6, 2014</small>
                                                </div>
                                            </a>

                                        </div>
                                    </div>
                                    <div class="file-box">
                                        <div class="file">
                                            <a href="file_manager#">
                                                <span class="corner"></span>

                                                <div class="image">
                                                    <img alt="image" class="img-responsive" src="../assets/img/p2.jpg">
                                                </div>
                                                <div class="file-name">
                                                    My feel.png
                                                    <br />
                                                    <small>Added: Jan 7, 2014</small>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="file-box">
                                        <div class="file">
                                            <a href="file_manager#">
                                                <span class="corner"></span>

                                                <div class="icon">
                                                    <i class="fa fa-music"></i>
                                                </div>
                                                <div class="file-name">
                                                    Michal Jackson.mp3
                                                    <br />
                                                    <small>Added: Jan 22, 2014</small>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="file-box">
                                        <div class="file">
                                            <a href="file_manager#">
                                                <span class="corner"></span>

                                                <div class="image">
                                                    <img alt="image" class="img-responsive" src="../assets/img/p3.jpg">
                                                </div>
                                                <div class="file-name">
                                                    Document_2014.doc
                                                    <br />
                                                    <small>Added: Fab 11, 2014</small>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="file-box">
                                        <div class="file">
                                            <a href="file_manager#">
                                                <span class="corner"></span>

                                                <div class="icon">
                                                    <i class="img-responsive fa fa-film"></i>
                                                </div>
                                                <div class="file-name">
                                                    Monica's birthday.mpg4
                                                    <br />
                                                    <small>Added: Fab 18, 2014</small>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="file-box">
                                        <a href="file_manager#">
                                            <div class="file">
                                                <span class="corner"></span>

                                                <div class="icon">
                                                    <i class="fa fa-bar-chart-o"></i>
                                                </div>
                                                <div class="file-name">
                                                    Annual report 2014.xls
                                                    <br />
                                                    <small>Added: Fab 22, 2014</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="file-box">
                                        <div class="file">
                                            <a href="file_manager#">
                                                <span class="corner"></span>

                                                <div class="icon">
                                                    <i class="fa fa-file"></i>
                                                </div>
                                                <div class="file-name">
                                                    Document_2014.doc
                                                    <br />
                                                    <small>Added: Jan 11, 2014</small>
                                                </div>
                                            </a>
                                        </div>

                                    </div>
                                    <div class="file-box">
                                        <div class="file">
                                            <a href="file_manager#">
                                                <span class="corner"></span>

                                                <div class="image">
                                                    <img alt="image" class="img-responsive" src="../assets/img/p1.jpg">
                                                </div>
                                                <div class="file-name">
                                                    Italy street.jpg
                                                    <br />
                                                    <small>Added: Jan 6, 2014</small>
                                                </div>
                                            </a>

                                        </div>
                                    </div>
                                    <div class="file-box">
                                        <div class="file">
                                            <a href="file_manager#">
                                                <span class="corner"></span>

                                                <div class="image">
                                                    <img alt="image" class="img-responsive" src="../assets/img/p2.jpg">
                                                </div>
                                                <div class="file-name">
                                                    My feel.png
                                                    <br />
                                                    <small>Added: Jan 7, 2014</small>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="file-box">
                                        <div class="file">
                                            <a href="file_manager#">
                                                <span class="corner"></span>

                                                <div class="icon">
                                                    <i class="fa fa-music"></i>
                                                </div>
                                                <div class="file-name">
                                                    Michal Jackson.mp3
                                                    <br />
                                                    <small>Added: Jan 22, 2014</small>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="file-box">
                                        <div class="file">
                                            <a href="file_manager#">
                                                <span class="corner"></span>

                                                <div class="image">
                                                    <img alt="image" class="img-responsive" src="../assets/img/p3.jpg">
                                                </div>
                                                <div class="file-name">
                                                    Document_2014.doc
                                                    <br />
                                                    <small>Added: Fab 11, 2014</small>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="file-box">
                                        <div class="file">
                                            <a href="file_manager#">
                                                <span class="corner"></span>

                                                <div class="icon">
                                                    <i class="img-responsive fa fa-film"></i>
                                                </div>
                                                <div class="file-name">
                                                    Monica's birthday.mpg4
                                                    <br />
                                                    <small>Added: Fab 18, 2014</small>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="file-box">
                                        <a href="file_manager#">
                                            <div class="file">
                                                <span class="corner"></span>

                                                <div class="icon">
                                                    <i class="fa fa-bar-chart-o"></i>
                                                </div>
                                                <div class="file-name">
                                                    Annual report 2014.xls
                                                    <br />
                                                    <small>Added: Fab 22, 2014</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="file-box">
                                        <div class="file">
                                            <a href="file_manager#">
                                                <span class="corner"></span>

                                                <div class="icon">
                                                    <i class="fa fa-file"></i>
                                                </div>
                                                <div class="file-name">
                                                    Document_2014.doc
                                                    <br />
                                                    <small>Added: Jan 11, 2014</small>
                                                </div>
                                            </a>
                                        </div>

                                    </div>
                                    <div class="file-box">
                                        <div class="file">
                                            <a href="file_manager#">
                                                <span class="corner"></span>

                                                <div class="image">
                                                    <img alt="image" class="img-responsive" src="../assets/img/p1.jpg">
                                                </div>
                                                <div class="file-name">
                                                    Italy street.jpg
                                                    <br />
                                                    <small>Added: Jan 6, 2014</small>
                                                </div>
                                            </a>

                                        </div>
                                    </div>
                                    <div class="file-box">
                                        <div class="file">
                                            <a href="file_manager#">
                                                <span class="corner"></span>

                                                <div class="image">
                                                    <img alt="image" class="img-responsive" src="../assets/img/p2.jpg">
                                                </div>
                                                <div class="file-name">
                                                    My feel.png
                                                    <br />
                                                    <small>Added: Jan 7, 2014</small>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="file-box">
                                        <div class="file">
                                            <a href="file_manager#">
                                                <span class="corner"></span>

                                                <div class="icon">
                                                    <i class="fa fa-music"></i>
                                                </div>
                                                <div class="file-name">
                                                    Michal Jackson.mp3
                                                    <br />
                                                    <small>Added: Jan 22, 2014</small>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="file-box">
                                        <div class="file">
                                            <a href="file_manager#">
                                                <span class="corner"></span>

                                                <div class="image">
                                                    <img alt="image" class="img-responsive" src="../assets/img/p3.jpg">
                                                </div>
                                                <div class="file-name">
                                                    Document_2014.doc
                                                    <br />
                                                    <small>Added: Fab 11, 2014</small>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="file-box">
                                        <div class="file">
                                            <a href="file_manager#">
                                                <span class="corner"></span>

                                                <div class="icon">
                                                    <i class="img-responsive fa fa-film"></i>
                                                </div>
                                                <div class="file-name">
                                                    Monica's birthday.mpg4
                                                    <br />
                                                    <small>Added: Fab 18, 2014</small>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="file-box">
                                        <a href="file_manager#">
                                            <div class="file">
                                                <span class="corner"></span>

                                                <div class="icon">
                                                    <i class="fa fa-bar-chart-o"></i>
                                                </div>
                                                <div class="file-name">
                                                    Annual report 2014.xls
                                                    <br />
                                                    <small>Added: Fab 22, 2014</small>
                                                </div>
                                            </div>
                                        </a>
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
</style>

<script setup>
import "../assets/js/plugins/morris/morris.js"
import Raphael from "../assets/js/plugins/morris/raphael-2.1.0.min.js"
</script>

<script>
    import $ from 'jquery'
    import "../assets/js/plugins/metisMenu/jquery.metisMenu.js"
    import "../assets/js/plugins/slimscroll/jquery.slimscroll.min.js"
    import animationHover from "../assets/js/inspinia.js"
    import "../assets/js/plugins/pace/pace.min.js"

    import TopBar from '@/components/TopBar.vue'
    import UserItem from '@/components/UserItem.vue'

    export default {
		name: 'UserHome',
        components: {
            TopBar,
            UserItem
        },
        created(){
            // 图表使用
            $(function() {
                Morris.Donut({
                    element: 'morris-donut-chart',
                    data: [{ label: "剩余空间", value: 12 },
                        { label: "文档", value: 30 },
                        { label: "其他", value: 20 } ],
                    resize: true,
                    colors: ['#87d6c6', '#54cdb4','#1ab394'],
                    formatter: function (y, data) { return y + '%' },
                });
            });
            $(document).ready(function(){
                $('.file-box').each(function() {
                    animationHover(this, 'pulse');
                });
            });
        },
		mounted() {
            
		}
	}
</script>