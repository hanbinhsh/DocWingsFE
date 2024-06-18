<template>
    <div class="row border-bottom">
        <nav class="navbar navbar-static-top  " role="navigation" style="margin-bottom: 0">
            <div class="navbar-header" @mouseleave="closeDropdown">
                <a style="height:30px" class="navbar-minimalize minimalize-styl-2 btn btn-primary "><i
                        style="margin-top:4px" class="fa fa-bars"></i> </a>
                <form role="search" class="navbar-form-custom" action="search_results.html">
                    <div class="form-group">
                        <input type="text" placeholder="输入要查找的文件......" class="form-control" name="top-search"
                            v-model="fileName" id="top-search" @input="searchFile">
                        <ul v-if="filePaths.length > 0" class="dropdown-menu" style="display: block; width: 50%;">
                            <li v-for="path in filePaths" :key="path">
                                <a href="#" @click="selectFile(path)">{{ path }}</a>
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
            fileName: '',
            filePaths: [],
        }
    },
    methods: {
        logout() {
            window.sessionStorage.clear();
            this.$router.push('/login');
        },
        searchFile() {
            const encodedFileName = encodeURIComponent(this.fileName); // 编码文件名
            axios.get(`/api/searchFile?fileName=${encodedFileName}`)  // 将用户输入的数据传递给后端
                .then((response) => { // 使用箭头函数来保持this指向组件实例  
                    this.filePaths = response.data;
                    console.log(response.data);
                    console.log(this.filePaths);
                })
                .catch((error) => { // 同样使用箭头函数  
                    console.error(error);
                });
        },
        selectFile(path) {
            // ... 选择文件的逻辑 
            this.fileName = path; // 可能想要更新输入框的值为选择的文件路径  
            this.hideDropdown(); // 选择文件后隐藏下拉菜单  
        },
        closeDropdown() {
            // 关闭下拉菜单的逻辑
            this.filePaths = []; // 或者根据需求修改下拉菜单的显示状态
        }
    }
}
</script>