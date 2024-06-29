import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import sweetAlertPlugin from './plugins/sweet-alert.js';
import Spinner from './components/Spinner.vue';
import ElementPlus from 'element-plus';
import Viewer from 'v-viewer'
import axios from 'axios'
Viewer.setDefaults({
    zIndexInline: 9999
})

// 全局调用资源
import './assets/css/bootstrap.min.css';
import "./assets/js/bootstrap.min.js";
import './assets/font-awesome/css/font-awesome.css';
import './assets/css/animate.css';
import './assets/css/style.css';
import "./assets/css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css"

createApp(App).use(store).use(router).component('Spinner', Spinner).use(sweetAlertPlugin).use(ElementPlus).use(Viewer).mount('#app')
