<template>
    <div class="row border-bottom">
        <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header" @mouseleave="closeDropdown">
                <a style="height:30px" class="navbar-minimalize minimalize-styl-2 btn btn-primary" @click="toggleNavbar"><i
                        style="margin-top:4px" class="fa fa-bars"></i></a>
                <div role="search" class="navbar-form-custom">
                    <div class="form-group" v-if="userAuth != 3">
                        <input type="text" placeholder="输入要查找的文件......" class="form-control" name="top-search"
                            v-model="name" id="top-search" @input="searchFile">
                        <ul v-if="files.length + folders.length > 0" class="dropdown-menu "
                            style="display: block; width: 50%">
                            <li v-for="folder in folders" :key="folder">
                                <a @click="selectFolder(folder)"><i class="fa fa-folder-o"></i> {{ folder.folderName
                                    }}</a>
                            </li>
                            <li v-for="file in files" :key="file">
                                <a @click="selectFile(file)">
                                    <i v-if="file.fileType.startsWith('image/')" class="fa fa-file-image-o"></i>
                                    <i v-else-if="file.fileType.includes('pdf')" class="fa fa-file-pdf-o"></i>
                                    <i v-else-if="file.fileType.includes('word')" class="fa fa-file-word-o"></i>
                                    <i v-else-if="file.fileType.includes('excel')" class="fa fa-file-excel-o"></i>
                                    <i v-else-if="file.fileType.includes('sheet')" class="fa fa-file-excel-o"></i>
                                    <i v-else-if="file.fileType.includes('powerpoint')"
                                        class="fa fa-file-powerpoint-o"></i>
                                    <i v-else-if="file.fileType.includes('presentation')"
                                        class="fa fa-file-powerpoint-o"></i>
                                    <i v-else-if="file.fileType.startsWith('video/')" class="fa fa-file-movie-o"></i>
                                    <i v-else-if="file.fileType.startsWith('audio/')" class="fa fa-file-audio-o"></i>
                                    <i v-else-if="file.fileType.includes('compressed')"
                                        class="fa fa-file-archive-o"></i>
                                    <i v-else class="fa fa-file-o"></i> {{ file.fileName }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul class="nav navbar-top-links navbar-right">
                <li>
                    <span class="m-r-sm text-muted welcome-message">主题</span>
                </li>
                <li class="btn-group">
                    <div>
                        <div class="radio radio-inline" @click="updateskin(0)">
                            <input type="radio" name="radio2"  :checked="skin==0">
                            <label for="radio3">
                            </label>
                        </div>
                        <div class="radio radio-success radio-inline" @click="updateskin(1)">
                            <input type="radio" name="radio2" :checked="skin==1">
                            <label for="radio3">
                            </label>
                        </div>
                        <div class="radio radio-primary radio-inline" @click="updateskin(2)">
                            <input type="radio" name="radio2" :checked="skin==2">
                            <label for="radio3">
                            </label>
                        </div>
                        <div class="radio radio-warning radio-inline" @click="updateskin(3)">
                            <input type="radio" name="radio2" :checked="skin==3">
                            <label for="radio3">
                            </label>
                        </div>
                    </div>
                </li>
                <li>&nbsp;&nbsp;&nbsp;
                    <span class="m-r-sm text-muted welcome-message">欢迎来到文档之翼</span>
                </li>
                <li>
                    <a @click="logout()">
                        <i class="fa fa-sign-out"></i>登出
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import $ from 'jquery'
import "../assets/js/plugins/idle-timer/idle-timer.min.js"
import toastr from "../assets/js/plugins/toastr/toastr.min.js"
import axios from 'axios';
export default {
    name: 'TopBar',
    data() {
        return {
            userData: JSON.parse(sessionStorage.getItem('userData')) || {},
            name: '',
            files: [],
            folders: [],
            userAuth: sessionStorage.getItem("authData") || 3,
            skin: sessionStorage.getItem("skin") || 0,
            isMiniNavbar: JSON.parse(sessionStorage.getItem('isMiniNavbar')) || false,
        }
    },
    methods: {
        toggleNavbar() {
            this.isMiniNavbar = !this.isMiniNavbar;
            sessionStorage.setItem('isMiniNavbar', this.isMiniNavbar);
        },
        updateskin(skin){
            sessionStorage.setItem("skin",skin)
            this.skin = skin;
            if(this.skin == 0){
                document.body.style.backgroundColor = '#3B3B3B';
                $("body").removeClass("skin-3");
                $("body").removeClass("skin-2");
                $("body").removeClass("skin-1");
            }else if(this.skin == 1){
                document.body.style.backgroundColor = '';
                $("body").removeClass("skin-3");
                $("body").removeClass("skin-2");
                $("body").addClass("skin-1");
            }else if(this.skin == 2){
                document.body.style.backgroundColor = '';
                $("body").removeClass("skin-1");
                $("body").removeClass("skin-3");
                $("body").addClass("skin-2");
            }else if(this.skin == 3){
                document.body.style.backgroundColor = '';
                $("body").removeClass("skin-1");
                $("body").removeClass("skin-2");
                $("body").addClass("skin-3");
            }
        },
        logout() {
            window.sessionStorage.clear();
            this.$router.push('/login');
            $(document).off('idle.idleTimer');
        },
        searchFile() {
            const encodedName = encodeURIComponent(this.name);
            axios.get(`/api/searchFFsByName?name=${encodedName}`)
                .then((response) => {
                    this.files = response.data.data.files;
                    this.folders = response.data.data.folders;
                })
                .catch((error) => {});
        },
        selectFile(file) {
            this.$router.push('/allfiles');
            this.$emit('search-path', file.parentId);
            this.closeDropdown();
        },
        selectFolder(folder) {
            this.$emit('search-path', folder.folderId);
            this.closeDropdown();
        },
        closeDropdown() {
            this.files = [];
            this.folders = [];
        }
    },
    mounted() {
        if (this.isMiniNavbar) {
            document.body.classList.add('mini-navbar');
        }else{
            document.body.classList.remove('mini-navbar');
        }
        this.skin = sessionStorage.getItem("skin") || 0;
        if(this.skin == 0){
            document.body.style.backgroundColor = '#3B3B3B';
            $("body").removeClass("skin-3");
            $("body").removeClass("skin-2");
            $("body").removeClass("skin-1");
        }else if(this.skin == 1){
            document.body.style.backgroundColor = '';
            $("body").removeClass("skin-3");
            $("body").removeClass("skin-2");
            $("body").addClass("skin-1");
        }else if(this.skin == 2){
            document.body.style.backgroundColor = '';
            $("body").removeClass("skin-1");
            $("body").removeClass("skin-3");
            $("body").addClass("skin-2");
        }else if(this.skin == 3){
            document.body.style.backgroundColor = '';
            $("body").removeClass("skin-1");
            $("body").removeClass("skin-2");
            $("body").addClass("skin-3");
        }
        if (this.userAuth == 10) {
            const vm = this;
            var idleTimer = $(document).idleTimer(300000);
            $(document).on("idle.idleTimer", function (event, elem, obj) {
                vm.logout();
                toastr.options = {
                    "closeButton": true,
                    "positionClass": "toast-top-center",
                    "timeOut": 0,
                }
                toastr.warning('你已长时间未操作，请重新登录.', '超时');
                $(document).off('idle.idleTimer');
            });
        }
    },
}
</script>