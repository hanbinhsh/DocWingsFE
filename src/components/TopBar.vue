<template>
    <div class="row border-bottom">
        <nav class="navbar navbar-static-top  " role="navigation" style="margin-bottom: 0">
            <div class="navbar-header" @mouseleave="closeDropdown">
                <a style="height:30px" class="navbar-minimalize minimalize-styl-2 btn btn-primary "><i
                        style="margin-top:4px" class="fa fa-bars"></i> </a>
                <form role="search" class="navbar-form-custom" action="search_results.html">
                    <div class="form-group" v-if="userAuth!=3">
                        <input type="text" placeholder="输入要查找的文件......" class="form-control" name="top-search"
                            v-model="name" id="top-search" @input="searchFile">
                        <ul v-if="files.length+folders.length > 0" class="dropdown-menu " style="display: block; width: 50%">
                            <li v-for="folder in folders" :key="folder">
                                <a @click="selectFolder(folder)"><i class="fa fa-folder-o"></i> {{ folder.folderName }}</a>
                            </li>
                            <li v-for="file in files" :key="file">
                                <a @click="selectFile(file)">
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
                                    <i v-else class="fa fa-file-o"></i> {{ file.fileName }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
            <ul class="nav navbar-top-links navbar-right">
                <li>
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
import axios from 'axios';
export default {
    name: 'TopBar',
    data() {
        return {
            name: '',
            files: [],
            folders: [],
            userAuth: sessionStorage.getItem("authData") || 3
        }
    },
    methods: {
        logout() {
            window.sessionStorage.clear();
            this.$router.push('/login');
        },
        searchFile() {
            const encodedName = encodeURIComponent(this.name);
            axios.get(`/api/searchFFsByName?name=${encodedName}`)
                .then((response) => { 
                    this.files = response.data.data.files;
                    this.folders = response.data.data.folders;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        selectFile(file) {
            this.$router.push('/allfiles');
            this.$emit('search-path',file.parentId);
            this.closeDropdown(); 
        },
        selectFolder(folder){
            this.$emit('search-path',folder.folderId);
            this.closeDropdown();
        },
        closeDropdown() {
            this.files = [];
            this.folders = [];
        }
    }
}
</script>