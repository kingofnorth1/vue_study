import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// import 'element-plus/theme-chalk/index.css'
import 'element-plus/dist/index.css'
import App from './Root.vue'
// import './assets/css/index.css'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')