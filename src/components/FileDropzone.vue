<template>
  <div>
    <div ref="dropRef" class="dropzone custom-dropzone"></div>
    <div class="dropzone preview-container" v-show="isDisplayed"></div>
  </div>
</template>
  <script>
  import { ref, onMounted, defineComponent } from 'vue'
  import { Dropzone } from 'dropzone'
  import { useStore } from 'vuex'
  export default defineComponent({
    name: 'Dropzone',
    props:['paramName'],
    setup(props) {
      const isDisplayed = ref(false); // 初始状态隐藏

      const toggleDisplay = () => {
        isDisplayed.value = true;
      };
      //using vuex 
      const store = useStore()
    
      //getting the div container
      const dropRef = ref(null)
  
      //creating html custom preview for uploading files
      const customPreview = `
        <div class="d-flex flex-wrap dz-preview dz-processing dz-image-preview dz-complete">
          <div class="dz-image">
            <img data-dz-thumbnail>
          </div>
          <div class="dz-details">
            <div class="dz-size"><span data-dz-size></span></div>
              <div class="dz-filename"><span data-dz-name></span></div>
            </div>
            <div class="dz-progress">
              <span class="dz-upload" data-dz-uploadprogress></span>
            </div>
            <div class="dz-error-message"><span data-dz-errormessage></span></div>
            <div class="dz-success-mark">
                <i class="bi bi-check-circle-fill" style="font-size: 2rem; color: green;"></i>
            </div>  
            <div class="dz-error-mark">
                <i class="bi bi-exclamation-circle-fill" style="font-size: 2rem; color: red;"></i> 
          </div>
        </div>
      `
      onMounted(() => {
        // Configuring Dropzone and Adding to div element
        if(dropRef.value !== null) {
          new Dropzone(dropRef.value, {
            init: function () {
              this.on("addedfile", function () {
                toggleDisplay(); // 文件添加时显示预览区域
              });
            },
            url: 'https://backendUrl/uploadFile/',//backend url 
            method: 'POST',
            headers:{Authorization: 'Bearer ' + store.state.token,}, // getting API access token form vuex store to be sent with request
            paramName:props.paramName, // input name 
            acceptedFiles:"", // accepted files 
            previewTemplate: customPreview,
            previewsContainer: dropRef.value.parentElement.querySelector('.preview-container'), 
          })
          // customizing the input field of dropzone
          if(dropRef.value.querySelector('.dz-default')) {
            dropRef.value.querySelector('.dz-default').innerHTML = `
              <div style="display: flex; justify-content: center;">
                <i class="bi bi-cloud-arrow-up-fill" style="font-size: 5rem;"></i>
              </div>
              <p style="text-align: center; margin: 0;"><strong>拖拽或选择文件到此处上传</strong></p>
            `
          }
        }
      })
      return {
        isDisplayed,
        dropRef
      }
    }
  })
  </script>
  
  <style scoped>
  .custom-dropzone {
    border-style: dashed;
    border-width: 3px;
    padding: 20px;
    color:rgb(114, 114, 114);
    min-height: 20px;
  }
  </style>