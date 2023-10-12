import axios from 'axios'

const API = axios.create({
    baseURL:'https://restapi.amap.com/',
    timeout: 2000
})

export default API