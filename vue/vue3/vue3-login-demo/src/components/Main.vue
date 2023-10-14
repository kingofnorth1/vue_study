<script setup>
import login from './login.vue'
import { ref } from 'vue'
// const message = ref()
</script>

<template>
    <div id="main">
        <!-- <button @click="getData()">test axios 请求数据</button>
        <h3>请求到的数据：{{ message }}</h3> -->
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