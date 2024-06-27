<template>
  <div>
    <div ref="dropRef" class="dropzone custom-dropzone" :class="{'disabled':isTrashDisplayed}"></div>
    <div class="dropzone preview-container" v-show="isDisplayed"></div>
    <br v-show="isDisplayed">
    <a class="btn btn-block btn-primary compose-mail" v-show="isDisplayed" @click="clearDropzone()">清空上传列表</a>
  </div>
</template>
  <script>
  import { ref, onMounted, defineComponent } from 'vue'
  import { Dropzone } from 'dropzone'
  import { useStore } from 'vuex'
  export default defineComponent({
    name: 'Dropzone',
    props:['paramName'],
    methods:{},
    setup(props, { emit }) {
      let user = JSON.parse(sessionStorage.getItem('userData'));
      let currentFolderId = 0
      let isDisplayed = ref(false); // 初始状态隐藏
      let isTrashDisplayed =ref(false);

      const toggleDisplay = () => {
        isDisplayed.value = true;
      };
      const uploadSuccess = () => {
        emit('file-upload-success');
      };
      const updateDropzone = (newFolderId) => {
        currentFolderId = newFolderId.detail.newFolderId;
      };
      const isTrash = (status) => {
        isTrashDisplayed.value = status.detail.status;
      };
      const getUrl = () => {  
        const url = `http://localhost:8848/uploadOneFile?userId=${user.userId}&parentId=${currentFolderId}`
        return url;
      };
      const store = useStore()
      const dropRef = ref(null)
      const clearDropzone = () => {
        const container = document.querySelector('.dropzone.preview-container');
        isDisplayed.value = false;
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
      }
      onMounted(() => {
        document.addEventListener('update-path', updateDropzone);
        document.addEventListener('isTrash', isTrash);
        if(dropRef.value !== null) {
          new Dropzone(dropRef.value, {
            init: function () {
              this.on("addedfile", function () {
                toggleDisplay(); // 文件添加时显示预览区域
                this.options.url = getUrl() //  url在初始化后固定，需要显式修改
              });
              this.on("success", function () {
                uploadSuccess();
              });
              this.on("error", function () {});
              this.on("complete", function () {});
            },
            // uploadMultiple:true,  // 多文件为列表的形式传向服务器
            url: getUrl(),
            method: 'POST',
            // headers:{}, // 请求附加头
            // paramName:props.paramName, // 文件名
            acceptedFiles:"", // 允许的类型
            // previewTemplate: customPreview,
            previewsContainer: dropRef.value.parentElement.querySelector('.preview-container'), 
            maxFilesize: 256,
          })
          // customizing the input field of dropzone
          if(dropRef.value.querySelector('.dz-default')) {
            dropRef.value.querySelector('.dz-default').innerHTML = `
              <div style="display: flex; justify-content: center;">
                <i class="bi bi-cloud-arrow-up-fill" style="font-size: 5rem;"></i>
              </div>
              <p style="text-align: center; margin: 0;"><strong>拖拽文件到此处上传</strong></p>
            `
          }
        }
      })
      return {
        isDisplayed,
        clearDropzone,
        dropRef,
        isTrashDisplayed,
      }
    }
  })
  </script>
  
  <style scoped>
  @import '../assets/css/plugins/dropzone/basic.css';
  @import '../assets/css/plugins/dropzone/dropzone.css';
  .custom-dropzone {
    border-style: dashed;
    border-width: 3px;
    padding: 20px;
    color:rgb(114, 114, 114);
    min-height: 20px;
  }
  .disabled{
    opacity:0.5;
    pointer-events: none;
  }
  </style>