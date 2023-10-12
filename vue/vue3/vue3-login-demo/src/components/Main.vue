<script setup>
import login from './login.vue'
import { ref } from 'vue'
const message = ref()
import API from '../axios/axiosInstance'

const getData = function() {
    API({
        url: '/v3/ip',
        params: {
            ip: '114.247.50.2',
            sig: '',
            key: 'c88981a804344b65ab4884c73ec7547d'
        },
        method: 'get'
    }).then((res) => {
        alert("请求成功");
        message.value = res.data;
    })
}
</script>

<template>
    <div id="main">
        <button @click="getData()">test axios 请求数据</button>
        <h3>请求到的数据：{{ message }}</h3>
        <login></login>
    </div>
</template>

<style>
#main {
    /* display: grid; */
    margin-top: 100px;
    margin-left: 35%;
    margin-right: 30%;
    width: 500px;
    height: 500px;
    border: 5px solid #9e7714;
    background-color: #eadfb3;
}
</style>