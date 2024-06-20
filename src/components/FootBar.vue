<template>
    <div class="footer">
        <div class="pull-right">
            剩余 {{ leftCapacity }}GB  <strong>总共{{ maxCapacity }}GB</strong>.
        </div>
        <div>
            <strong>Copyright</strong> DocWings &copy; 2024
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'; // 引入 Vue 3 的 Composition API
import axios from 'axios';

export default {
    name: 'Footer',
    setup() {
        const leftCapacity = ref(0);
        const filesCapacity = ref(0);
        const maxCapacity = ref(0);
        const trashFilesCapacity = ref(0);
        // 容量查询
        const queryCapacity = async () => {
            try {
                const response = await axios.post('/api/queryCapacity');
                leftCapacity.value = response.data.data.leftCapacity;
                filesCapacity.value = response.data.data.filesCapacity;
                maxCapacity.value = response.data.data.maxCapacity;
                trashFilesCapacity.value = response.data.data.trashFilesCapacity;
            } catch (error) {
                console.error('Error fetching capacity:', error);
            }
        };
        // 在组件加载完成后调用查询容量的方法
        onMounted(() => {
            queryCapacity(); // 直接调用查询容量方法
            document.addEventListener('update-capacity', queryCapacity);
        });
        // 返回响应式数据和方法
        return {
            leftCapacity,
            filesCapacity,
            maxCapacity,
            trashFilesCapacity
        };
    }
};
</script>
