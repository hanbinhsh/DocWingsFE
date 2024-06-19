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
                                   <div class="file-box" v-for="(folder, index) in folders" :key="index" @dblclick="enterPath(folder.folderId, folder.parentId)">
                                        <div class="file">
                                            <a href="file_manager#">
                                                <span class="corner"></span>
                                                <div class="icon">
                                                    <i class="fa fa-file"></i>
                                                </div>
                                                <div class="file-name">
                                                    {{ folder.folderName }}
                                                    <br />
                                                    <small>{{ new Date(folder.createTime).toLocaleString() }}</small>
                                                </div>
                                            </a>
                                        </div>   
                                   </div> 
                                   <div class="file-box" v-for="(file, index) in files" :key="index"  @dblclick="filePreview(file)">
                                        <div class="file">
                                            <a href="file_manager#">
                                                <span class="corner"></span>
                                                <div class="icon">
                                                    <i class="fa fa-file"></i>
                                                </div>
                                                <div class="file-name">
                                                    {{ file.fileName }}
                                                    <br />
                                                    <small>{{ new Date(file.uploadTime).toLocaleString() }}</small>
                                                </div>
                                            </a>
                                        </div>   
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
    import axios from "axios";
    import TopBar from '@/components/TopBar.vue'
    import UserItem from '@/components/UserItem.vue'
    import FootBar from '@/components/FootBar.vue'

    export default {
		name: 'UserHome',
        components: {
            TopBar,
            UserItem,
            FootBar
        },
        data() {
            return {
                folders: [],
                files: [],
                currentFolder: JSON.parse(sessionStorage.getItem("currentFolder")) || {},
                currentFFsCount: sessionStorage.getItem("currentFFsCount") || {},
                loading: false,
                userData: JSON.parse(sessionStorage.getItem('userData')) || {},
            };
        },
        created(){
            // 图表使用
            this.checkRoute();
            if (this.isTrash){
                this.enterPathTrash();
            }
            else{
                this.enterPath(0);
            }
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
        methods: {
            checkRoute() {
                if (this.$route.name === 'allfiles') {
                    this.isTrash = false;
                } else if (this.$route.name === 'trash') {
                    this.isTrash = true;
                }
            },
            async findFoldersByParentIdUserId(parentId){
                try{
                    const responseFolders = await axios.post('api/findFoldersByParentIdUserId',{"parentId":parentId,"userId":this.userData.userId});
                    this.folders = responseFolders.data;
                }catch (error) {
                    console.error('Error findFoldersByParentIdUserId:', error);
                }
            },
            async findFilesByParentIdUserId(parentId){
                try{
                    const responseFiles = await axios.post('api/findFilesByParentIdUserId',{"parentId":parentId,"userId":this.userData.userId});
                    this.files = responseFiles.data;
                }catch (error) {
                    console.error('Error findFilesByParentIdUserId:', error);
                }
            },
            async findFFsByParentId(id){  // 寻找文件和文件夹
                await this.findFoldersByParentId(id);
                await this.findFilesByParentId(id);
            },
            async enterPath(id){  // 按下文件夹->改变路径
                if(this.isTrash) return;
                if(id === this.currentCutFF?.folderId){
                    toastr.error(`无法进入正在剪切板的文件夹！`, "警告");
                    return
                }
                this.showLoading();  // 显示加载页面
                await this.findFFsByParentId(id);
                await this.findFolderById(id);
                await this.countFFsByParentId(id);
                await this.checkAllFFsCollectionStatus();
                this.currentFolder = JSON.parse(sessionStorage.getItem("currentFolder"));  // 更新 currentFolder
                this.currentFFsCount = sessionStorage.getItem("currentFFsCount");  // 更新 currentFFsCount
                // 发送文件夹更新信号
                const event = new CustomEvent('update-dropzone', {
                    detail: {
                        newFolderId: this.currentFolder.folderId
                    }
                });
                document.dispatchEvent(event);
                this.hideLoading();  // 隐藏加载页面
            },
            showLoading() {this.loading = true;},
            hideLoading() {this.loading = false;},
            async findFFsByParentId(id){  // 寻找文件和文件夹
                await this.findFoldersByParentIdUserId(id);
                await this.findFilesByParentIdUserId(id);
            },
            async findFolderById(id){
                try{
                    const responseFiles = await axios.get('/api/findFolderById?id='+id);
                    sessionStorage.setItem("currentFolder",JSON.stringify(responseFiles.data));
                }catch (error) {
                    console.error('Error findFolderById:', error);
                }
            },
            async countFFsByParentId(id){
                try{
                    const currentFFsCount = await axios.get('/api/countFFsByParentId?parentId='+id);
                    sessionStorage.setItem("currentFFsCount",currentFFsCount.data);
                }catch (error) {
                    console.error('Error countFFsByParentId:', error);
                }
            },
            async checkAllFFsCollectionStatus() {
                const response=await axios.post('/api/findCollectionFFs?userId='+this.userData.userId);
                const data = response.data
                this.folderCollectionStatus = {}
                this.fileCollectionStatus = {}
                data.forEach(item => {
                    if (item.isFolder) {
                        this.folderCollectionStatus[item.folderId] = true;
                    } else {
                        this.fileCollectionStatus[item.fileId] = true;
                    }
                });
            },
            async filePreview(file){
                if(this.isTrash) return;
                if(file.fileType.startsWith('image/')){
                    const responseFiles = await axios.get(`/api/findImagesByParentId?parentId=${this.currentFolder.folderId}`);
                    this.images = responseFiles.data.data.imageList  // 更新图片列表
                    const imageDivs = this.$el.querySelector('.images')
                    const viewer = imageDivs.$viewer
                    let key = 0
                    this.images.forEach((src, index) => {  // 匹配选中图片
                        if (src.split('=')[1] == file.fileId) {
                            key = index;
                        }
                    })
                    viewer.index = key
                    viewer.show()
                }
            },
        },
		mounted() {
            
		}
	}
</script>