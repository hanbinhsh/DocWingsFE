<template>
    <div class="mainpage">
        <div v-show="false">
            <div v-viewer="viewerOptions" class="images clearfix">
                <img v-for="(src, index) in images" class="images" :key="index" :src="src">
            </div>
        </div>
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
                                   <div class="file-box" v-for="(folder, index) in folders" :key="index" @click="">
                                        <div class="file">
                                            <a>
                                                <span class="corner"></span>
                                                <div class="icon">
                                                    <i class="fa fa-folder"></i>
                                                </div>
                                                <div>
                                                    &nbsp;<a @click="collectionFolder(folder.folderId)"><i class="fa"
                                                            :class="folderCollectionStatus[folder.folderId] ? 'fa-star' : 'fa-star-o'"></i>&nbsp;</a>
                                                </div>
                                                <div class="file-name">
                                                    <a>{{ folder.folderName }}</a>
                                                    <br />
                                                    <small>{{ new Date(folder.createTime).toLocaleString() }}</small>
                                                </div>
                                            </a>
                                        </div>   
                                   </div> 
                                   <div class="file-box" v-for="(file, index) in files" :key="index" @click="filePreview(file)">
                                        <div class="file">
                                            <a>
                                                <span class="corner"></span>
                                                <div v-if="!file.fileType.startsWith('image/')" class="icon">
                                                    <i class="fa fa-file"></i>
                                                </div>
                                                <div v-if="file.fileType.startsWith('image/')" class="image">
                                                    <img alt="image" class="img-responsive" :src="getImageUrl(file.fileId)">
                                                </div>
                                                <div>
                                                    &nbsp;<a @click="collectionFile(file.fileId)"><i class="fa"
                                                            :class="fileCollectionStatus[file.fileId] ? 'fa-star' : 'fa-star-o'"></i></a>
                                                    &nbsp;<a @click="downloadFile(file)"><i
                                                                class="fa fa-download"></i>&nbsp;</a>
                                                </div>
                                                <div class="file-name">
                                                    <a>{{ file.fileName }}</a>
                                                    <br/>
                                                    <small>{{ new Date(file.uploadTime).toLocaleString() }}</small>
                                                </div>
                                            </a>
                                        </div>
                                   </div>
                                </div>
                            </div>
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
    import VueViewer from 'v-viewer'
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
                images: [],
                currentFolder: JSON.parse(sessionStorage.getItem("currentFolder")) || {},
                loading: false,
                userData: JSON.parse(sessionStorage.getItem('userData')) || {},
                folderCollectionStatus: {},
                fileCollectionStatus: {},
            };
        },
        created(){
            this.updateFilePreview();
            this.enterPath(0);
            $(function() {// 图表使用
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
        },
        methods: {
            getImageUrl(fileId) {
                const imageUrl = this.images.find(url => url.includes(`fileID=${fileId}`));
                return imageUrl || '';
            },
            async updateFilePreview(){
                const responseFiles = await axios.get(`/api/findImagesByCollection?userId=${this.userData.userId}`);
                this.images = responseFiles.data.data.imageList  // 更新图片列表
            },
            async filePreview(file){
                if (file.fileType.startsWith('image/')) {
                    this.updateFilePreview()
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
            async enterPath(id){  // 按下文件夹->改变路径
                if(this.isTrash) return;
                if(id === this.currentCutFF?.folderId){
                    toastr.error(`无法进入正在剪切板的文件夹！`, "警告");
                    return
                }
                this.showLoading();  // 显示加载页面
                await this.findFFsByParentId(id);
                await this.checkAllFFsCollectionStatus();
                this.hideLoading();  // 隐藏加载页面
            },
            showLoading() {this.loading = true;},
            hideLoading() {this.loading = false;},
            async findFFsByParentId(id){  // 寻找文件和文件夹
                await this.findFoldersByParentIdUserId(id);
                await this.findFilesByParentIdUserId(id);
            },
            async collectionFile(fileId) {
                const exist = this.fileCollectionStatus[fileId]//判断是否被收藏
                if (exist) {//被收藏删除
                    await axios.post('api/CollectionsDeleteFile', { "fileId": fileId, "userId": this.userData.userId });
                }
                else {//没被收藏插入
                    await axios.post('api/CollectionsInsertFile', { "fileId": fileId, "userId": this.userData.userId });
                }
                this.enterPath(this.currentFolder.folderId)
            },
            async collectionFolder(folderId) {
                const exist = this.folderCollectionStatus[folderId]//判断是否被收藏
                if (exist) {//被收藏删除
                    await axios.post('api/CollectionsDeleteFolder', { "folderId": folderId, "userId": this.userData.userId });
                }
                else {//没被收藏插入
                    await axios.post('api/CollectionsInsertFolder', { "folderId": folderId, "userId": this.userData.userId });
                }
                this.enterPath(this.currentFolder.folderId)
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
            downloadFile(file) {
                axios.post('/api/downloadFile?fileID=' + file.fileId, { responseType: 'blob' }).then(res => {
                    let blob = new Blob([res.data])
                    let fileName = file.fileName
                    if (blob.size > 0) {
                        const elink = document.createElement('a');
                        elink.style.display = 'none';
                        elink.href = URL.createObjectURL(blob);
                        // 类似a标签下载
                        // 自定义文件名称和导出类型。最好和后台保持一致
                        elink.download = `${fileName}`; //模版字符串
                        document.body.appendChild(elink);
                        elink.click();//触发click事件 下载
                        // 释放URL 对象
                        URL.revokeObjectURL(elink.href);
                        // 删除创建的 a 标签      
                        document.body.removeChild(elink);
                    }
                })
            },
        },
		mounted() {}
	}
</script>

