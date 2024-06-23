<template>
    <vue-office-docx v-if="docxUrl" :src="docxUrl" @rendered="rendered" />
    <vue-office-excel v-if="excelUrl" :src="excelUrl" />
    <vue-office-pdf v-if="pdfUrl" :src="pdfUrl" />
</template>

<script>
import VueOfficeDocx from '@vue-office/docx';
import '@vue-office/docx/lib/index.css';
import VueOfficeExcel from '@vue-office/excel';
import '@vue-office/excel/lib/index.css';
import VueOfficePdf from '@vue-office/pdf'
export default {
    components: {
        VueOfficeDocx,
        VueOfficeExcel,
        VueOfficePdf,
    },
    data() {
        return {
            fileID: 0,
            fileType: '',
        }
    },
    computed: {
        docxUrl() {
            if (this.fileID && this.fileType.includes('wordprocessingml')) {
                return 'api/downloadFile?fileID=' + this.fileID;
            }
            return null;
        },
        excelUrl() {
            if (this.fileID && this.fileType.includes('spreadsheetml')) {
                return 'api/downloadFile?fileID=' + this.fileID;
            }
            return null;
        },
        pdfUrl() {
            if (this.fileID && this.fileType.includes('pdf')) {
                return 'api/downloadFile?fileID=' + this.fileID;
            }
            return null;
        },
    },
    created() {
        const urlParams = new URL(window.location.href).searchParams;
        this.fileID = urlParams.get('fileID'); // 更简洁的方式，如果浏览器支持 
        this.fileType = urlParams.get('fileType');
    },
    methods: {
        rendered() {
            console.log("渲染完成")
        }
    }
}
</script>