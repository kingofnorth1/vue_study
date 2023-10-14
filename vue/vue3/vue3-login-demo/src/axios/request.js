import axios from 'axios'

const request = axios.create({
	baseURL: 'http://101.33.211.100:10012',  // 注意！！ 这里是全局统一加上了 '/api' 前缀，也就是说所有接口都会加上'/api'前缀在，页面里面写接口的时候就不要加 '/api'了，否则会出现2个'/api'，类似 '/api/api/user'这样的报错，切记！！！
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        "source": "1"
    }
})

export default request;