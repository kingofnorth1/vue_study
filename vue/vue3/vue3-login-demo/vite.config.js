import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  server:{
    proxy:{
       '/proxy':{
           target:"http://101.33.211.100:10012", //跨域地址
           changeOrigin:true, //支持跨域
           rewrite:(path) => path.replace(/^\/proxy/, "")//重写路径,替换/api
       }
    }
  
  }
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url))
  //   }
  // }
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

