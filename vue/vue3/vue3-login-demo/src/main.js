import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// import 'element-plus/theme-chalk/index.css'
// import './assets/css/index.css'
import 'element-plus/dist/index.css'
import App from './Root.vue'
import axios from './axios/axiosInstance'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
app.config.globalProperties.$axios = axios;