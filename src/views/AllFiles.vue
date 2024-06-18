<template>
    <div class="mainpage">
        <div v-show="false">
            <div v-viewer="viewerOptions" class="images clearfix">
                <img v-for="(src,index) in images" class="images" :key="index" :src="src">
            </div>
        </div>
        
        <div id="wrapper">
            <nav class="navbar-default navbar-static-side" role="navigation">
                <div class="sidebar-collapse">
                    <ul class="nav metismenu" id="side-menu">
                        <UserItem/>
                        <li>
                            <a href="userhome"><i class="fa fa-laptop"></i> <span
                                    class="nav-label">主页</span></a>
                        </li>
                        <li :class="{ active: !this.isTrash }">
                            <a><i class="fa fa-folder-o"></i> <span
                                    class="nav-label">文件管理</span><span class="fa arrow"></span></a>
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
                            <a href="share"><i class="fa fa-share-square-o"></i> <span
                                    class="nav-label">分享</span></a>
                        </li>
                        <li :class="{ active: this.isTrash }">
                            <a href="trash"><i class="fa fa-trash-o"></i> <span
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
                                        <FileDropzone paramName="thefile" @file-upload-success="handleFileUploadSuccess"/>
                                        <br>
                                        <a class="btn btn-block btn-primary compose-mail" 
                                        :class="{ 'disabled': isTrash }"
                                        @click="this.isTrash ? null : createFolder" >创建文件夹</a>
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
                                            placeholder="搜索内容">
                                        <div class="input-group-btn">
                                            <button type="submit" class="btn btn-sm btn-primary">
                                                搜索
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <h2>
                                    {{currentFolder.folderName}} ({{ this.currentFFsCount }})
                                </h2>
                                <div class="mail-tools tooltip-demo m-t-md">
                                    <div class="btn-group pull-right">
                                        <button class="btn btn-white btn-sm" @click="backPath()"><i class="fa fa-arrow-left"></i></button>
                                        <!-- <button class="btn btn-white btn-sm"><i class="fa fa-arrow-right"></i></button> -->
                                    </div>
                                    <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="left"
                                        title="刷新页面" @click="this.enterPath(currentFolder.folderId)"><i class="fa fa-refresh"></i> 刷新</button>&nbsp;
                                    <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top"
                                        title="Mark as read"><i class="fa fa-eye"></i> </button>&nbsp;
                                    <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top"
                                        title="Mark as important"><i class="fa fa-exclamation"></i> </button>&nbsp;
                                    <button class="btn btn-white btn-sm" data-toggle="tooltip" data-placement="top"
                                        title="粘贴文件" @click="this.pasteFile()"><i class="fa fa-paste"></i>&nbsp粘贴
                                        <span v-if="this.isCutting" class="">
                                            {{ this.currentCutFF.fileName ? this.currentCutFF.fileName : this.currentCutFF.folderName ?? "" }}
                                        </span> 
                                    </button>
                                </div>
                            </div>
                            <div class="mail-box ibox table-responsive">
                                <table class="table table-hover table-mail ibox-content" :class="{ 'sk-loading': loading }">
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
                                        <th></th>  <!--重命名-->
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
                                        <tr v-for="(folder, index) in folders" :key="index" class="read" @dblclick="enterPath(folder.folderId, folder.parentId)">
                                            <td><i class="fa fa-folder-o"></i></td>
                                            <td>{{ folder.folderName }}</td>
                                            <td><a @click="renameFolder(folder.folderId)"><i class="fa fa-edit"></i></a></td>
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
                                                    <a @click=""><i class="fa fa-trash-o"></i></a>&nbsp;
                                                    <a @click="cutFF(folder)"><i class="fa fa-scissors"></i></a>&nbsp;
                                                    <!-- <input type="checkbox"> -->
                                                </div>
                                            </td>
                                        </tr>
                                        <tr v-for="(file, index) in files" :key="index" class="read" @dblclick="filePreview(file)">
                                            <td><i class="fa fa-file-o"></i></td>
                                            <td>{{ file.fileName }}</td>
                                            <td><a class="" @click="renameFile(file.fileId)"><i class="fa fa-edit"></i></a></td>
                                            <td>{{ file.tag }}</td>
                                            <td>{{ file.fileSize }}MB</td>
                                            <!-- <td>{{ file.fileType }}</td> -->
                                            <td>{{ file.lastModifierName }}</td>
                                            <td>{{ new Date(file.lastModifyTime).toLocaleString() }}</td>
                                            <td>{{ file.uploaderName }}</td>
                                            <td>{{ new Date(file.uploadTime).toLocaleString() }}</td>
                                            <td>
                                                <div class="btn-group">
                                                    <a @click="downloadFile(file)"><i class="fa fa-download"></i></a>&nbsp;
                                                    <a @click=""><i class="fa fa-trash-o"></i></a>&nbsp;
                                                    <a @click="cutFF(file)"><i class="fa fa-scissors"></i></a>&nbsp;
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

<style>
@import '../assets/css/plugins/iCheck/custom.css';
@import '../assets/css/plugins/toastr/toastr.min.css';
div:where(.swal2-container) div:where(.swal2-popup) {
    font-size: 1.5rem !important;
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

    import TopBar from '@/components/TopBar.vue'
    import FileDropzone from '../components/FileDropzone.vue'
    import UserItem from '@/components/UserItem.vue'
    import toastr from "../assets/js/plugins/toastr/toastr.min.js"
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
                folders: [],
                files: [],
                viewerOptions: {},
                images: [],
                currentFolder: JSON.parse(sessionStorage.getItem("currentFolder")) || {},
                currentFFsCount: sessionStorage.getItem("currentFFsCount") || {},
                loading: false,
                isTrash: false,
                isCutting: false,
                currentCutFF: null,
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
                    viewer.index = key
                    viewer.show()
                }
            },
            handleFileUploadSuccess() {  // 成功弹窗
                toastr.success("上传文件成功！", "成功");
                this.enterPath(this.currentFolder.folderId);
            },
            showLoading() {this.loading = true;},
            hideLoading() {this.loading = false;},
            async findFodersByParentId(parentId){
                try{
                    const responseFolders = await axios.get('/api/findFoldersByParentId?parentId='+parentId);
                    this.folders = responseFolders.data;
                }catch (error) {
                    console.error('Error findFoldersByParentId:', error);
                }
            },
            async findFilesByParentId(parentId){
                try{
                    const responseFiles = await axios.get('/api/findFilesByParentId?parentId='+parentId);
                    this.files = responseFiles.data;
                }catch (error) {
                    console.error('Error findFilesByParentId:', error);
                }
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
            async findFFsByParentId(id){  // 寻找文件和文件夹
                await this.findFodersByParentId(id);
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
            async enterPathTrash(){
                // 隐藏或disable上传和创建文件夹按钮，阻止用户进入和点击文件，重命名下载剪切和删除
                this.showLoading();  // 显示加载页面
                await this.findFileByDelete();
                await this.findFolderByDelete();
                this.hideLoading();  // 隐藏加载页面
            },
            async backPath(){  //返回上一级
                await this.enterPath(this.currentFolder.parentId);
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
            async findFileByDelete(){
                try{
                    const responseFiles = await axios.post('/api/findFileByDelete',{"status":1});
                    this.files = responseFiles.data;
                }catch (error) {
                    console.error('Error findFileByDelete:', error);
                }
            },
            async findFolderByDelete(){
                try{
                    const responseFolders = await axios.post('/api/findFolderByDelete',{"status":1});
                    this.folders = responseFolders.data;
                }catch (error) {
                    console.error('Error findFolderByDelete:', error);
                }
            },
        },
        components: {
            TopBar,
            FileDropzone,
            UserItem
        },
		mounted() {},
	}
</script>