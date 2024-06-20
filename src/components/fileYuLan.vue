<template>
  <div id="docx"></div>
</template> 
  
<script setup>
  import { ref, onMounted } from "vue";
  import jsPreviewDocx from "@js-preview/docx";
  import "@js-preview/docx/lib/index.css";

  const docx = ref("http://static.shanhuxueyuan.com/test6.docx");
  onMounted(() => { // setup下先再获取到dom节点之后再进行挂载
    const myDocxPreviewer = jsPreviewDocx.init(document.getElementById("docx"));
    //传递要预览的文件地址即可
    myDocxPreviewer
      .preview(
        docx.value
      )
      .then((res) => {
        console.log("预览完成");
      })
      .catch((e) => {
        console.log("预览失败", e);
      });
  });
<script />
