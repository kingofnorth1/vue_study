import axios from 'axios'

const request = axios.create({
// VITE_BASEURL='/proxy'
	baseURL: import.meta.env.VITE_BASEURL,  // 注意！！ 这里是全局统一加上了 '/api' 前缀，也就是说所有接口都会加上'/api'前缀在，页面里面写接口的时候就不要加 '/api'了，否则会出现2个'/api'，类似 '/api/api/user'这样的报错，切记！！！
    headers: {
        "Content-Type": "application/json;charset=utf-8",
        "source": "1",
        "Access-Control-Allow-Origin": "*"
    }
})
 
export default request;