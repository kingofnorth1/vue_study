import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  // 本地运行配置，及反向代理配置
  server: {
      // host: 'junlin', // 指定服务器主机名
      // port: 10012, // 指定服务器端口
      // open: true, // 在服务器启动时自动在浏览器中打开应用程序
      // strictPort: false, // 设为 false 时，若端口已被占用则会尝试下一个可用端口,而不是直接退出
      // https: false, // 是否开启 https
      cors: true, // 为开发服务器配置 CORS。默认启用并允许任何源
      proxy: { // 为开发服务器配置自定义代理规则
          // 字符串简写写法 
          '/foo': 'http://101.33.211.100:10012', 
          // 选项写法
          '/porxy': {
              target: 'http://101.33.211.100:10012', //代理接口
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, '')
          }
      }
  }
})

// module.exports = {
//   devServer: {
//       proxy: {
//           '/api': {
//               target: 'https://test.com/',//这里填入你要请求的接口的前缀
//               ws:true,//代理websocked
//               changeOrigin:true,//虚拟的站点需要更管origin
//               secure: true,                   //是否https接口
//               pathRewrite:{
//                   '^/api':''//重写路径
//               }
//           }
//       }
//   }
// }

