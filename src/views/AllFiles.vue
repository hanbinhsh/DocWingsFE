<template>
    <div class="mainpage skin-0">
        <div v-show="false">
            <div v-viewer="viewerOptions" class="images clearfix">
                <img v-for="(src, index) in images" class="images" :key="index" :src="src">
            </div>
        </div>
        <div class="modal inmodal fade in" id="myModal5" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        {{this.audio_videoTitle}}
                        <button @click="closeModal" type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center">
                            <VideoPlayer v-if="showPlayer" :options="this.audioOptions" class="video-js-a vjs-big-play-centered"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal inmodal fade in" id="myModal6" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        {{this.audio_videoTitle}}
                        <button @click="closeModal" type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center">
                            <VideoPlayer v-if="showPlayer" :options="this.videoOptions" class="video-js-v vjs-big-play-centered"/>
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
                        <li>
                            <a href="userhome"><i class="fa fa-laptop"></i> <span class="nav-label">主页</span></a>
                        </li>
                        <li :class="{ active: !this.isTrash }">
                            <a><i class="fa fa-folder-o"></i> <span class="nav-label">文件管理</span><span
                                    class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                                <li :class="{ active: !this.isTrash }"><a href="allfiles">所有文件</a></li>
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
                <TopBar />
                <div class="wrapper wrapper-content">
                    <div class="row">
                        <div class="col-lg-2">
                            <div class="ibox float-e-margins">
                                <div class="ibox-content mailbox-content">
                                    <div class="file-manager">
                                        <FileDropzone paramName="thefile"
                                            @file-upload-success="handleFileUploadSuccess" />
                                        <br>
                                        <a class="btn btn-block btn-primary compose-mail"
                                            :class="{ 'disabled': isTrash }" @click="createFolder">创建文件夹</a>
                                        <div class="space-25"></div>
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
                        <div class="col-lg-10 animated fadeInRight">
                            <div class="mail-box-header">
                                <form method="get" action="index.html" class="pull-right mail-search">
                                    <div class="input-group">
                                        <input type="text" class="form-control input-sm" name="search"
                                            placeholder="搜索内容">
                                        <div class="input-group-btn">
                                            <button type="submit" class="btn btn-sm btn-primary">
                                                搜索
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <h2>
                                    <!-- {{currentFolder.folderName}} ({{ this.currentFFsCount }}) -->
                                    {{ isTrash ? '回收站' : currentFolder.folderName + ' (' + this.currentFFsCount + ')' }}
                                </h2>
                                <div class="mail-tools tooltip-demo m-t-md">
                                    <div class="btn-group pull-right">
                                        <button :class="{ 'disabled': isTrash }" class="btn btn-white btn-sm" @click="backPath()"><i
                                                class="fa fa-arrow-left"></i></button>
                                        <!-- <button class="btn btn-white btn-sm"><i class="fa fa-arrow-right"></i></button> -->
                                    </div>
                                    <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="left"
                                        title="刷新页面"
                                        @click="isTrash ? this.enterPathTrash() : this.enterPath(currentFolder.folderId)"><i
                                            class="fa fa-refresh"></i> 刷新</button>&nbsp;
                                    <!-- <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top"
                                        title="Mark as read"><i class="fa fa-eye"></i> </button>&nbsp;
                                    <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top"
                                        title="Mark as important"><i class="fa fa-exclamation"></i> </button>&nbsp; -->
                                    <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top"
                                        title="粘贴文件" @click="this.pasteFile()" :class="{ 'disabled': isTrash }">
                                        <i class="fa fa-paste"></i> 粘贴
                                        <span v-if="this.isCutting" class="">
                                            {{ this.currentCutFF.fileName ? this.currentCutFF.fileName :
                                                this.currentCutFF.folderName ?? "" }}
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div class="mail-box ibox table-responsive">
                                <table class="table table-hover table-mail ibox-content"
                                    :class="{ 'sk-loading': loading }">
                                    <div class="sk-spinner sk-spinner-cube-grid">
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
                                        <tr>
                                            <th></th>
                                            <th>名称</th>
                                            <th v-if="!this.isTrash"></th> <!--重命名-->
                                            <th>标签</th>
                                            <th>文件大小</th>
                                            <!-- <th>文件类型</th> -->
                                            <th>上次修改者</th>
                                            <th>上次修改时间</th>
                                            <th>创建者</th>
                                            <th>创建日期</th>
                                            <th>操作</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(folder, index) in folders" :key="index" class="read"
                                            @dblclick="enterPath(folder.folderId, folder.parentId)">
                                            <td><i class="fa fa-folder-o"></i></td>
                                            <td>{{ folder.folderName }}</td>
                                            <td v-if="!this.isTrash"><a @click="renameFolder(folder.folderId)"><i
                                                        class="fa fa-edit"></i></a></td>
                                            <td>{{ folder.tag }}</td>
                                            <td></td>
                                            <!-- <td></td> -->
                                            <td>{{ folder.lastModifierName }}</td>
                                            <td>{{ new Date(folder.lastModifyTime).toLocaleString() }}</td>
                                            <td>{{ folder.creatorName }}</td>
                                            <td>{{ new Date(folder.createTime).toLocaleString() }}</td>
                                            <td>
                                                <div class="btn-group">
                                                    <!-- <a @click=""><i class="fa fa-download"></i></a>&nbsp; -->
                                                    <a v-if="!this.isTrash"
                                                        @click="collectionFolder(folder.folderId)"><i class="fa"
                                                            :class="folderCollectionStatus[folder.folderId] ? 'fa-star' : 'fa-star-o'"></i>&nbsp;</a>
                                                    <a v-if="!this.isTrash" @click="">
                                                            <i class="fa fa-share-alt"></i>&nbsp;</a>
                                                    <a v-if="!this.isTrash" @click="recycleBinFolder(folder.folderId)">
                                                        <i class="fa fa-trash-o"></i>&nbsp;</a>
                                                    <a v-if="!this.isTrash" @click="cutFF(folder)"><i
                                                            class="fa fa-scissors"></i>&nbsp;</a>
                                                    <a v-if="this.isTrash" @click="deleteFolder(folder.folderId)"><i
                                                            class="fa fa-trash-o"></i>&nbsp;</a>
                                                    <a v-if="this.isTrash" @click="replyTrashFolder(folder.folderId)"><i
                                                            class="fa fa-reply"></i>&nbsp;</a>
                                                    <!-- <input type="checkbox"> -->
                                                </div>
                                            </td>
                                        </tr>
                                        <tr v-for="(file, index) in files" :key="index" class="read"
                                            @dblclick="filePreview(file)">
                                            <td><i class="fa fa-file-o"></i></td>
                                            <td>{{ file.fileName }}</td>
                                            <td v-if="!this.isTrash"><a class="" @click="renameFile(file.fileId)"><i
                                                        class="fa fa-edit"></i></a></td>
                                            <td>{{ file.tag }}</td>
                                            <td>{{ file.fileSize }}MB</td>
                                            <!-- <td>{{ file.fileType }}</td> -->
                                            <td>{{ file.lastModifierName }}</td>
                                            <td>{{ new Date(file.lastModifyTime).toLocaleString() }}</td>
                                            <td>{{ file.uploaderName }}</td>
                                            <td>{{ new Date(file.uploadTime).toLocaleString() }}</td>
                                            <td>
                                                <div class="btn-group">
                                                    <a v-if="!this.isTrash" @click="collectionFile(file.fileId)"><i
                                                            class="fa"
                                                            :class="fileCollectionStatus[file.fileId] ? 'fa-star' : 'fa-star-o'"></i>&nbsp;</a>
                                                    <a v-if="!this.isTrash" @click="">
                                                            <i class="fa fa-share-alt"></i>&nbsp;</a>
                                                    <a v-if="!this.isTrash" @click="downloadFile(file)"><i
                                                            class="fa fa-download"></i>&nbsp;</a>
                                                    <a v-if="!this.isTrash" @click="recycleBinFile(file.fileId)"><i
                                                            class="fa fa-trash-o"></i>&nbsp;</a>
                                                    <a v-if="!this.isTrash" @click="cutFF(file)"><i
                                                            class="fa fa-scissors"></i>&nbsp;</a>
                                                    <a v-if="this.isTrash" @click="deleteFile(file.fileId)"><i
                                                            class="fa fa-trash-o"></i>&nbsp;</a>
                                                    <a v-if="this.isTrash" @click="replyTrashFile(file.fileId)"><i
                                                            class="fa fa-reply"></i>&nbsp;</a>
                                                    <!-- <input type="checkbox"> -->
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <FootBar/>
            </div>
        </div>
    </div>
</template>

<style>
@import '../assets/css/plugins/iCheck/custom.css';
@import '../assets/css/plugins/toastr/toastr.min.css';
@import '../../node_modules/video.js/dist/video-js.css';

div:where(.swal2-container) div:where(.swal2-popup) {
    font-size: 1.5rem !important;
}
.modal-lg {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh; /* 或者设置一个具体的像素高度 */
  width: 300px;
}
.modal-content{
    align-items: center;
    height: 600px;
    width: 900px;
}
.modal-header{
    height: 50px;
}
.modal-body{
    height: 550px;
}
.text-center{
    align-items: center;
    height: 100%; 
}
.video-js-a{
    background-image: url('../assets/music.jpg');
    background-size: cover; /* 背景图片覆盖整个容器 */
    background-position: center; /* 背景图片居中 */
    background-repeat: no-repeat; /* 不重复背景图片 */
    align-items: center;
    width: 100%;
    height: 100%; 
}
.video-js-v{
    align-items: center;
    width: 100%;
    height: 100%; 
}
.vjs-tech{
    width: 100%;
    height: 100%;
}
</style>

<script>
import $ from 'jquery'
import "../assets/js/plugins/metisMenu/jquery.metisMenu.js"
import "../assets/js/plugins/slimscroll/jquery.slimscroll.min.js"
import "../assets/js/inspinia.js"
import "../assets/js/plugins/pace/pace.min.js"
import axios from "axios";
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
import { defineComponent } from 'vue'
import { VideoPlayer } from '@videojs-player/vue'
import { ref } from 'vue';
import toastr from "../assets/js/plugins/toastr/toastr.min.js"
import TopBar from '@/components/TopBar.vue'
import FileDropzone from '../components/FileDropzone.vue'
import UserItem from '@/components/UserItem.vue'
import FootBar from '@/components/FootBar.vue'
toastr.options = {
    "closeButton": true,
    "debug": false,
    "progressBar": true,
    "preventDuplicates": true,
    "positionClass": "toast-bottom-center",
    "onclick": null,
    "showDuration": "400",
    "hideDuration": "1000",
    "timeOut": "3000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}
export default {
    name: 'Profile',
    data() {
        return {
                categoryCapacity:{},
                folders: [],
                files: [],
                tags: [],
                viewerOptions: {},
                images: [],
                currentFolder: JSON.parse(sessionStorage.getItem("currentFolder")) || {},
                currentFFsCount: sessionStorage.getItem("currentFFsCount") || {},
                loading: false,
                isTrash: false,
                isCutting: false,
                currentCutFF: null,
                userData: JSON.parse(sessionStorage.getItem('userData')) || {},
                folderCollectionStatus: {},
                fileCollectionStatus: {},
                audio_videoTitle: null,
                audioOptions: {
                    autoplay: false,
                    controls: true,
                    bigPlayButton: true,
                    sources: 
                    {
                        src: 'api/downloadFile?fileID=35',
                        type: 'audio/mpeg',
                    },
                    showPlayer: true,
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
                    showPlayer: true,
                },
            };
        },
        created() {
            this.checkRoute();
            if (this.isTrash){
                this.enterPathTrash();
            }
            else{
                this.enterPath(0);
            }
        },
        methods: {
            async queryCategoryCapacity(){
                const responseTags = await axios.get('/api/queryCategoryCapacity');
                this.categoryCapacity = responseTags.data.data;
            },
            checkRoute() {
                if (this.$route.name === 'allfiles') {
                    this.isTrash = false;
                } else if (this.$route.name === 'trash') {
                    this.isTrash = true;
                }
            },
            async createFolder(){
                if(this.isTrash) return;
                const { value: newName } = await this.$swal.fire({
                    title: '新文件夹',
                    input: 'text',
                    inputLabel: '请输入新的文件夹名',
                    inputValue: this.currentFolderName, // 当前文件夹名，可以作为默认值显示在输入框中
                    showCancelButton: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputValidator: (value) => {
                        if (!value) {
                            return '文件夹名不能为空！'
                        }
                    }
                });
                // 如果用户点击了确定按钮，并且提供了新的文件名
                if (newName) {
                    // 调用 API 来更新文件名
                    let userId = JSON.parse(sessionStorage.getItem('userData')).userId;
                    await axios.post('/api/insertOneFolder', {
                        "folderName": newName,
                        "parentId": this.currentFolder.folderId,
                        "createrId": userId,
                        "lastModifierId": userId,
                    });
                    this.$swal.fire('文件夹创建成功', `已创建文件夹:${newName}`, 'success');
                    this.enterPath(this.currentFolder.folderId);
                }
            },
            cutFF(file){
                this.currentCutFF = file;
                this.isCutting = true;
                toastr.success(`成功剪切文件:${file.fileName ? file.fileName : file.folderName}`, "成功");
            },
            async pasteFile(){
                if(this.isTrash) return;
                if(this.currentCutFF != null && this.currentCutFF != undefined){
                    let FFName = this.currentCutFF.fileName ? this.currentCutFF.fileName : this.currentCutFF.folderName;
                    if(this.currentCutFF.fileName != null && this.currentCutFF.fileName != undefined){
                        // 文件
                        await axios.post(`/api/changeFileRouteById?id=${this.currentCutFF.fileId}&parentId=${this.currentFolder.folderId}`);
                    }else{
                        // 文件夹
                        await axios.post(`/api/changeFolderRouteById?id=${this.currentCutFF.folderId}&parentId=${this.currentFolder.folderId}`);
                    }
                    this.enterPath(this.currentFolder.folderId);
                    this.currentCutFF = null;
                    this.isCutting = false;
                    toastr.success(`成功粘贴:${FFName}`, "成功");
                }
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
                    console.log(this.images);
                    viewer.index = key
                    viewer.show()
                }
                else if(file.fileType.startsWith('audio/')){
                    this.audio_videoTitle = file.fileName;
                    this.changeAudioSource(file.fileId);
                    this.enterPath(this.currentFolder.folderId);
                    $('#myModal5').modal('show');
                }
                else if(file.fileType.startsWith('video/')){ 
                    this.audio_videoTitle = file.fileName;
                    this.changeVideoSource(file.fileId);
                    this.enterPath(this.currentFolder.folderId);
                    $('#myModal6').modal('show');
                }
            },
            changeAudioSource(fileId){
                this.audioOptions.sources.src = 'api/downloadFile?fileID='+fileId;
                this.showPlayer = false;
                this.$nextTick(() => {
                    this.showPlayer = true;
                });
            },
            changeVideoSource(fileId){
                this.videoOptions.sources.src = 'api/downloadFile?fileID='+fileId;
                this.showPlayer = false;
                this.$nextTick(() => {
                    this.showPlayer = true;
                });
            },
            closeModal(){
                this.showPlayer = false;
                this.enterPath(this.currentFolder.folderId);
            },
            handleFileUploadSuccess() {  // 成功弹窗
                toastr.success("上传文件成功！", "成功");
                this.enterPath(this.currentFolder.folderId);
                //更新容量
                const event = new CustomEvent('update-capacity', {});
                document.dispatchEvent(event);
            },
            showLoading() {this.loading = true;},
            hideLoading() {this.loading = false;},
            async findFolderById(id){
                const responseFiles = await axios.get('/api/findFolderById?id='+id);
                sessionStorage.setItem("currentFolder",JSON.stringify(responseFiles.data));
            },
            async countFFsByParentId(id){
                const currentFFsCount = await axios.get('/api/countFFsByParentId?parentId='+id);
                sessionStorage.setItem("currentFFsCount",currentFFsCount.data);
            },
            async findFFsByParentId(id){  // 寻找文件和文件夹
                const responseFolders = await axios.get('/api/findFoldersByParentId?parentId='+id);
                this.folders = responseFolders.data;
                const responseFiles = await axios.get('/api/findFilesByParentId?parentId='+id);
                this.files = responseFiles.data;
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
                this.checkAllFFsCollectionStatus();
                this.findTags();
                this.queryCategoryCapacity();
                this.currentFolder = JSON.parse(sessionStorage.getItem("currentFolder"));  // 更新 currentFolder
                this.currentFFsCount = sessionStorage.getItem("currentFFsCount");  // 更新 currentFFsCount
                // 发送文件夹更新信号
                const event = new CustomEvent('update-path', {
                    detail: {
                        newFolderId: this.currentFolder.folderId
                    }
                });
                document.dispatchEvent(event);
                this.hideLoading();  // 隐藏加载页面
            },
            async findFFsByTag(tag) {
                if(this.isTrash) return;
                this.showLoading();  // 显示加载页面
                const response = await axios.get('/api/findFFsByTag?tag=' + tag);
                this.files = response.data.data.files;
                this.folders = response.data.data.folders;
                this.hideLoading();  // 隐藏加载页面
            },
            async findFilesByCategory(category){
                if(this.isTrash) return;
                this.showLoading();  // 显示加载页面
                this.folders=[];
                const response = await axios.get('/api/findFilesByCategory?category=' + category);
                this.files = response.data.data.files;
                this.hideLoading();  // 隐藏加载页面
            },
            async enterPathTrash() {
                // 隐藏或disable上传和创建文件夹按钮，阻止用户进入和点击文件，重命名下载剪切和删除
                this.showLoading();  // 显示加载页面
                await this.findFFsByDelete();
                await this.findTags();
                this.queryCategoryCapacity();
                const event = new CustomEvent('isTrash', {
                    detail: {
                        status: true
                    }
                });
                document.dispatchEvent(event);
                this.hideLoading();  // 隐藏加载页面
            },
            async findFFsByDelete(){
                const responseFiles = await axios.post('/api/findFileByDelete',{"status":1});
                this.files = responseFiles.data;
                const responseFolders = await axios.post('/api/findFolderByDelete',{"status":1});
                this.folders = responseFolders.data;
            },
            async backPath() {  //返回上一级
                if(this.isTrash) return;
                await this.enterPath(this.currentFolder.parentId);
            },
            async findTags() {
                const responseTags = await axios.get('/api/findTags');
                this.tags = responseTags.data;
            },
            async renameFile(fileId) {
                const { value: newName } = await this.$swal.fire({
                    title: '重命名文件',
                    input: 'text',
                    inputLabel: '请输入新的文件名',
                    inputValue: this.currentFileName, // 当前文件名，可以作为默认值显示在输入框中
                    showCancelButton: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputValidator: (value) => {
                        if (!value) {
                            return '文件名不能为空！'
                        }
                    }
                });
                // 如果用户点击了确定按钮，并且提供了新的文件名
                if (newName) {
                    // 调用 API 来更新文件名
                    await axios.post('/api/renameFile', { "fileId": fileId, "fileName": newName });
                    this.$swal.fire('文件名已更新', `文件名已更新为:${newName}`, 'success');
                    this.enterPath(this.currentFolder.folderId);
                }
                else {
                    this.$swal.fire('操作取消', '文件名未更新', 'info');
                }
            },
            async renameFolder(folderId) {
                const { value: newName } = await this.$swal.fire({
                title: '重命名文件夹',
                input: 'text',
                inputLabel: '请输入新的文件夹名',
                inputValue: this.currentFolderName, // 当前文件夹名，可以作为默认值显示在输入框中
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputValidator: (value) => {
                    if (!value) {
                        return '文件夹名不能为空！'
                    }
                }
            });
            // 如果用户点击了确定按钮，并且提供了新的文件名
            if (newName) {
                // 调用 API 来更新文件名
                    await axios.post('/api/renameFolder', { "folderId": folderId, "folderName": newName });
                    this.$swal.fire('文件夹名已更新', `文件夹名已更新为:${newName}`, 'success');
                    this.enterPath(this.currentFolder.folderId);
                }
                else{
                    this.$swal.fire('操作取消', '文件夹名未更新', 'info');
                }
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
                    this.enterPath(this.currentFolder.folderId);
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
                    this.enterPath(this.currentFolder.folderId);
                }
                else{
                    this.$swal.fire('操作取消', '文件夹未放入回收站', 'info');
                }
            },
            downloadFile(file){
                axios.post('/api/downloadFile?fileID='+file.fileId, {responseType: 'blob'}).then(res => {
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
            async replyTrashFile(fileId){
                const result = await this.$swal.fire({
                    title: '是否将文件还原',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: '确定',  
                    cancelButtonText: '取消',
                });
                if (result.isConfirmed) {
                    await axios.post('/api/recycleBinFile', { "fileId": fileId, "status": 0 });
                    this.$swal.fire('操作成功', '文件已还原', 'success');
                    this.enterPathTrash();
                }
                else{
                    this.$swal.fire('操作取消', '文件未还原', 'info');
                }
            },
            async replyTrashFolder(folderId){
                const result = await this.$swal.fire({
                    title: '是否将文件夹还原',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: '确定',  
                    cancelButtonText: '取消',
                });
                if (result.isConfirmed) {
                    await axios.post('/api/recycleBinFolder', { "folderId": folderId, "status": 0 });
                    this.$swal.fire('操作成功', '文件夹已还原', 'success');
                    this.enterPathTrash();
                }
                else{
                    this.$swal.fire('操作取消', '文件夹未还原', 'info');
                }
            },
            async deleteFile(fileId){
                const result = await this.$swal.fire({
                    title: '是否将文件删除',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: '确定',  
                    cancelButtonText: '取消',
                });
                if (result.isConfirmed) {
                    await axios.post('/api/deleteFile', { "fileId": fileId });
                    this.$swal.fire('操作成功', '文件已删除', 'success');
                    //更新容量
                    const event = new CustomEvent('update-capacity', {});
                    document.dispatchEvent(event);
                    this.enterPathTrash();
                }
                else{
                    this.$swal.fire('操作取消', '文件未删除', 'info');
                }
            },
            async deleteFolder(folderId){
                const result = await this.$swal.fire({
                    title: '是否将文件夹删除',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: '确定',  
                    cancelButtonText: '取消',
                });
                if (result.isConfirmed) {
                    await axios.post('/api/deleteFolder', { "folderId": folderId });
                    this.$swal.fire('操作成功', '文件夹已删除', 'success');
                    //更新容量
                    const event = new CustomEvent('update-capacity', {});
                    document.dispatchEvent(event);
                    this.enterPathTrash();
                }
                else{
                    this.$swal.fire('操作取消', '文件夹未删除', 'info');
                }
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
            }
        },
        components: {
            TopBar,
            FileDropzone,
            UserItem,
            VideoPlayer,
        FootBar
        },
		mounted() {},
	}
</script>