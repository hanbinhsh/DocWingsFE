<template>
    <div class="mainpage">
        <div v-show="false">
            <div v-viewer="viewerOptions" class="images clearfix">
                <img v-for="(src, index) in images" class="images" :key="index" :src="src">
            </div>
        </div>
        <div class="modal inmodal fade in" id="audioModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        {{this.audio_videoTitle}}
                        <button @click="closePlayer" type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center">
                            <VideoPlayer v-if="showPlayer" :options="this.audioOptions" 
                            :key="new Date().getTime()"
                            class="video-js-a vjs-big-play-centered"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal inmodal fade in" id="videoModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        {{this.audio_videoTitle}}
                        <button @click="closePlayer" type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center">
                            <VideoPlayer v-if="showPlayer" :options="this.videoOptions" 
                            :key="new Date().getTime()"
                            class="video-js-v vjs-big-play-centered"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="wrapper">
            <nav class="navbar-default navbar-static-side" role="navigation">
                <div class="sidebar-collapse">
                    <ul class="nav metismenu" id="side-menu">
                        <UserItem />
                        <li class="active">
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
                        <li>
                            <a href="share"><i class="fa fa-share-square-o"></i> <span class="nav-label">分享</span></a>
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
                <TopBar />
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
                                        <h5>查看:</h5>
                                        <a @click="enterPath()" class="file-control active">收藏</a>
                                        <a @click="" class="file-control">最近访问</a>
                                        <a @click="" class="file-control">所有文件</a>
                                        <div class="hr-line-dashed"></div>
                                        <a class="btn btn-primary btn-block" href="allfiles">上传文件</a>
                                        <div class="hr-line-dashed"></div>
                                        <div class="row">
                                            <div class="col-lg-6" id="file-trash-donut" style="height: 180px;padding:0"></div>
                                            <div class="col-lg-6" id="category-donut" style="height: 180px;padding:0"></div>
                                        </div>
                                        <div class="hr-line-dashed"></div>
                                        <h5>类别</h5>
                                        <ul class="category-list folder-list m-b-md" style="padding: 0">
                                            <li>
                                                <a @click="findFilesByCategory(0)"> <i class="fa fa-circle text-navy"></i> 图片
                                                <span class="label label-primary pull-right">{{ this.categoryCapacity.imageCapacity }}GB</span></a>
                                            </li>
                                            <li>
                                                <a @click="findFilesByCategory(1)"> <i class="fa fa-circle text-danger"></i> 文档
                                                <span class="label label-primary pull-right">{{ this.categoryCapacity.documentCapacity }}GB</span></a>
                                            </li>
                                            <li>
                                                <a @click="findFilesByCategory(3)"> <i class="fa fa-circle text-primary"></i> 视频
                                                <span class="label label-primary pull-right">{{ this.categoryCapacity.videoCapacity }}GB</span></a>
                                            </li>
                                            <li>
                                                <a @click="findFilesByCategory(2)"> <i class="fa fa-circle text-info"></i> 音乐
                                                <span class="label label-primary pull-right">{{ this.categoryCapacity.audioCapacity }}GB</span></a>
                                            </li>
                                            <li>
                                                <a @click="findFilesByCategory(4)"> <i class="fa fa-circle text-warning"></i> 其他
                                                <span class="label label-primary pull-right">{{ this.categoryCapacity.otherCapacity }}GB</span></a>
                                            </li>
                                        </ul>
                                        <h5 class="tag-title">标签</h5>
                                        <ul class="tag-list" style="padding: 0">
                                            <li v-for="(tag, index) in tags" :key="index"><a
                                                    @click="findFFsByTag(tag)"><i class="fa fa-tag"></i> {{ tag }}</a>
                                            </li>
                                        </ul>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9 animated fadeInRight">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="file-box" v-for="(folder, index) in folders" :key="index" @dblclick="">
                                        <div class="file">
                                            <a>
                                                <span class="corner"></span>
                                                <div class="icon">
                                                    <i class="fa fa-folder"></i>
                                                </div>
                                                <div>
                                                    &nbsp;<a @click="collectionFolder(folder.folderId)"><i class="fa"
                                                        :class="folderCollectionStatus[folder.folderId] ? 'fa-star' : 'fa-star-o'"></i></a>
                                                    &nbsp;<a @click="recycleBinFolder(folder.folderId)"><i
                                                            class="fa fa-trash-o"></i></a>
                                                </div>
                                                <div class="file-name">
                                                    <a>{{ folder.folderName }}</a>
                                                    <br />
                                                    <small>{{ new Date(folder.createTime).toLocaleString() }}</small>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="file-box" v-for="(file, index) in files" :key="index"
                                        @dblclick="filePreview(file)">
                                        <div class="file">
                                            <a>
                                                <span class="corner"></span>
                                                <div v-if="!file.fileType.startsWith('image/')" class="icon">
                                                    <i v-if="file.fileType.startsWith('image/')" class="fa fa-file-image-o"></i>
                                                    <i v-else-if="file.fileType.includes('pdf')" class="fa fa-file-pdf-o"></i>
                                                    <i v-else-if="file.fileType.includes('word')" class="fa fa-file-word-o"></i>
                                                    <i v-else-if="file.fileType.includes('excel')" class="fa fa-file-excel-o"></i>
                                                    <i v-else-if="file.fileType.includes('sheet')" class="fa fa-file-excel-o"></i>
                                                    <i v-else-if="file.fileType.includes('powerpoint')" class="fa fa-file-powerpoint-o"></i>
                                                    <i v-else-if="file.fileType.includes('presentation')" class="fa fa-file-powerpoint-o"></i>
                                                    <i v-else-if="file.fileType.startsWith('video/')" class="fa fa-file-movie-o"></i>
                                                    <i v-else-if="file.fileType.startsWith('audio/')" class="fa fa-file-audio-o"></i>
                                                    <i v-else-if="file.fileType.includes('compressed')" class="fa fa-file-archive-o"></i>
                                                    <i v-else class="fa fa-file-o"></i>
                                                </div>
                                                <div v-if="file.fileType.startsWith('image/')" class="image">
                                                    <img alt="image" class="img-responsive"
                                                        :src="getImageUrl(file.fileId)">
                                                </div>
                                                <div>
                                                    &nbsp;<a @click="collectionFile(file.fileId)"><i class="fa"
                                                        :class="fileCollectionStatus[file.fileId] ? 'fa-star' : 'fa-star-o'"></i></a>
                                                    &nbsp;<a @click="downloadFile(file)"><i
                                                            class="fa fa-download"></i></a>
                                                    &nbsp;<a @click="recycleBinFile(file.fileId)"><i
                                                            class="fa fa-trash-o"></i></a>
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
                <FootBar />
            </div>
        </div>
    </div>
</template>

<style scoped></style>

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
import { VideoPlayer } from '@videojs-player/vue'
export default {
    name: 'UserHome',
    components: {
        TopBar,
        UserItem,
        FootBar,
        VideoPlayer,
    },
    data() {
        return {
            folders: [],
            tags: [],
            files: [],
            images: [],
            loading: false,
            userData: JSON.parse(sessionStorage.getItem('userData')) || {},
            folderCollectionStatus: {},
            fileCollectionStatus: {},
            categoryCapacity:{},
            audio_videoTitle: null,
            showPlayer: true,
            audioOptions: {
                autoplay: false,
                controls: true,
                bigPlayButton: true,
                sources: 
                {
                    src: 'api/downloadFile?fileID=35',
                    type: 'audio/mpeg',
                },
            },
            videoOptions: {
                autoplay: false,
                controls: true,
                bigPlayButton: true,
                sources:
                {
                    src: 'api/downloadFile?fileID=34',
                    type: 'video/mp4',
                },
            },
        };
    },
    created() {
        this.queryCategoryCapacity();
        this.updateFilePreview();
        this.enterPath();
    },
    methods: {
        async findFilesByCategory(category){
            if(this.isTrash) return;
            this.showLoading();  // 显示加载页面
            this.folders=[];
            const response = await axios.get('/api/findFilesByCategory?category=' + category);
            this.files = response.data.data.files;
            if(category===0){
                const imagesRes = await axios.get('/api/findImages');
                this.images = imagesRes.data.data.imageList;
            }
            this.hideLoading();  // 隐藏加载页面
        },
        async queryCategoryCapacity(){
            const responseTags = await axios.get('/api/queryCategoryCapacity');
            this.categoryCapacity = responseTags.data.data;
            const self = this;  // 保存对 this 的引用
            $(function () {// 图表使用
                Morris.Donut({
                    element: 'file-trash-donut',
                    data: [
                        { label: "剩余空间", value: self.categoryCapacity.leftCapacity },
                        { label: "回收站", value: self.categoryCapacity.trashFilesCapacity },
                        { label: "已用空间", value: self.categoryCapacity.filesCapacity },
                    ],
                    resize: true,
                    colors: ['#87d6c6', '#54cdb4', '#1ab394'],
                    formatter: function (y, data) { return y + 'GB' },
                });
                Morris.Donut({
                    element: 'category-donut',
                    data: [
                        { label: "图片", value: self.categoryCapacity.imageCapacity },
                        { label: "文档", value: self.categoryCapacity.documentCapacity },
                        { label: "视频", value: self.categoryCapacity.videoCapacity },
                        { label: "音乐", value: self.categoryCapacity.audioCapacity },
                        { label: "其他", value: self.categoryCapacity.otherCapacity },
                    ],
                    resize: true,
                    colors: ['#a1e4d9', '#87d6c6', '#54cdb4', '#1ab394', '#34a386'],
                    formatter: function (y, data) { return y + 'GB' },
                });
            });
        },
        async findTags() {
            const responseTags = await axios.get('/api/findTags');
            this.tags = responseTags.data;
        },
        getImageUrl(fileId) {
            // const imageUrl = this.images.find(url => url.includes(`fileID=${fileId}`));
            let imageUrl = "api/downloadFile?fileID="+fileId;
            return imageUrl || '';
        },
        async updateFilePreview() {
            const responseFiles = await axios.get(`/api/findImagesByCollection?userId=${this.userData.userId}`);
            this.images = responseFiles.data.data.imageList  // 更新图片列表
        },
        async filePreview(file) {
            if (file.fileType.startsWith('image/')) {
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
            else if(file.fileType.startsWith('audio/')){
                this.audio_videoTitle = file.fileName;
                this.changeAudioSource(file.fileId);
                $('#audioModal').modal('show');
            }
            else if(file.fileType.startsWith('video/')){ 
                this.audio_videoTitle = file.fileName;
                this.changeVideoSource(file.fileId);
                $('#videoModal').modal('show');
            }
        },
        changeAudioSource(fileId){
            this.showPlayer = true;
            this.audioOptions.sources.src = 'api/downloadFile?fileID='+fileId;
        },
        changeVideoSource(fileId){
            this.showPlayer = true;
            this.videoOptions.sources.src = 'api/downloadFile?fileID='+fileId;
        },
        closePlayer(){
            this.showPlayer = false;
        },
        async enterPath() {
            this.showLoading();  // 显示加载页面
            await this.findCollectionFFsByUserId();
            await this.checkAllFFsCollectionStatus();
            await this.updateFilePreview()
            await this.findTags();
            this.hideLoading();  // 隐藏加载页面
        },
        showLoading() { this.loading = true; },
        hideLoading() { this.loading = false; },
        async findCollectionFFsByUserId() {  // 寻找文件和文件夹
            const response = await axios.post('api/findCollectionFFsByUserId?userId='+this.userData.userId);
            this.files = response.data.data.files;
            this.folders = response.data.data.folders;
        },
        async collectionFile(fileId){
            const exist = this.fileCollectionStatus[fileId]//判断是否被收藏
            if(exist){//被收藏删除
                await axios.post('api/CollectionsDeleteFile',{"fileId":fileId,"userId":this.userData.userId});
            }
            else{//没被收藏插入
                await axios.post('api/CollectionsInsertFile',{"fileId":fileId,"userId":this.userData.userId});
            }
            this.enterPath(this.currentFolder.folderId)
        },
        async collectionFolder(folderId){
            const exist = this.folderCollectionStatus[folderId]//判断是否被收藏
            if(exist){//被收藏删除
                await axios.post('api/CollectionsDeleteFolder',{"folderId":folderId,"userId":this.userData.userId});
            }
            else{//没被收藏插入
                await axios.post('api/CollectionsInsertFolder',{"folderId":folderId,"userId":this.userData.userId});
            }
            this.enterPath(this.currentFolder.folderId)
        },
        async checkAllFFsCollectionStatus() {
            const response = await axios.post('/api/findCollectionFFs?userId=' + this.userData.userId);
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
        async recycleBinFile(fileId){
            const result = await this.$swal.fire({
                title: '是否将文件放入回收站',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: '确定',  
                cancelButtonText: '取消',
            });
            if (result.isConfirmed) {
                await axios.post('/api/recycleBinFile', { "fileId": fileId, "status": 1 });
                this.$swal.fire('操作成功', '文件已放入回收站', 'success');
                this.enterPath();
            }
            else{
                this.$swal.fire('操作取消', '文件未放入回收站', 'info');
            }
        },
        async recycleBinFolder(folderId){
            const result = await this.$swal.fire({
                title: '是否将文件夹放入回收站',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: '确定',  
                cancelButtonText: '取消',
            });
            if (result.isConfirmed) {
                await axios.post('/api/recycleBinFolder', { "folderId": folderId, "status": 1 });
                this.$swal.fire('操作成功', '文件夹已放入回收站', 'success');
                this.enterPath();
            }
            else{
                this.$swal.fire('操作取消', '文件夹未放入回收站', 'info');
            }
        },
        async findFFsByTag(tag) {
            this.showLoading();  // 显示加载页面
            const response = await axios.get('/api/findFFsByTag?tag=' + tag);
            this.files = response.data.data.files;
            this.folders = response.data.data.folders;
            this.hideLoading();  // 隐藏加载页面
        },
    },
    mounted() {}
}
</script>
