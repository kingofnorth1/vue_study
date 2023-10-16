// import { fileURLToPath, URL } from 'node:url'
import path from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  // 本地运行配置，及反向代理配置
  server: {
    hmr:true,     //启动热更新，就是更改了代码自动刷新页面
    port: 5173,    //自定义启动时的端口
    open: true,   //代表vite项目在启动时自动打开浏览器 
    // port: 5173,
    // host: 'junlin', // 指定服务器主机名
    // open: true, // 在服务器启动时自动在浏览器中打开应用程序
    // https: false, // 是否开启 https
    // cors: true, // 为开发服务器配置 CORS。默认启用并允许任何源
    proxy: { // 为开发服务器配置自定义代理规则
      // 字符串简写写法 
      // '/foo': 'http://101.33.211.100:10012', 
      // 选项写法
      '/proxy': {
          target: 'http://101.33.211.100:10012', //代理接口
          changeOrigin: true,
          secure: false,  //忽略安全证书  
          rewrite: (path) => path.replace(/^\/proxy/, '')
      }
    }
  }
})


