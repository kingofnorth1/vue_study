<script>
import { VueElement, onMounted, reactive,ref } from 'vue';
import {Setting} from '@element-plus/icons-vue'
import request from '../axios/request'
import axios from 'axios'
// import axios from 'axios'

export default {
  setup(){
    const imgSrc = ref()
    const resourceList = reactive()
    const form = reactive({
      userName: "",
      password: "",
      code: ""
    })
    onMounted(() => {
      
    })
    let getImg = function(){
      imgSrc.value = `http://101.33.211.100:10012/proxy/getCaptchaImage?userName=${form.userName}`;
      console.log(imgSrc.value)
    }
    let userLogin = function() {
        request({
            url: '/car/login',
            data: {
              userName: `${form.userName}`,
              password: `${form.password}`,
            },
            method: 'post'
        }).then((res) => {
          resourceList = res.data;
          console.log(resourceList);
        })
    }
    let tiaozhuan = function(){
      axios({
        method: 'get',
        url: 'https://www.baidu.com',
      }).then(function (response) {
        res = response.data;
        console.log(res);
      });
    }
    return {
      imgSrc,
      form,
      resourceList,
      getImg,
      userLogin,
      tiaozhuan
    }
  }
}
fetch('/api/car/login')
</script>


<template>
  <div id="login">
    <!-- <h3>test{{ form.userName }}</h3> -->
    <h3 id="accound">账号:</h3>
    <input id="inaccound" v-model="form.userName"/>
    <h3 id="password">密码:</h3>
    <input id="inpassword" v-model="form.password"/>
    <input id="incode" v-model="form.code"/>
    <!-- <img id="code" src="../assets/images/ggbh.png"/> -->
    <!-- <button id="codeImg" @click="getImg"></button> -->
    <img id="code" :src="imgSrc" @click="getImg"/>
    <button id="sure" @click="userLogin">确定</button>
    <button id="cancel" >取消</button>
    <button id="baidu" @click="tiaozhuan">跳转</button>
  </div>
</template>

<style>
#login {
  display: grid;
  margin-left: 150px;
  margin-top: 100px;
  grid-template-columns: repeat(2,100px);
  grid-gap: 10px;
  /* grid-template-rows: 20px 20px 20px 20px; */
}
#accound {
  margin-left: 20px;
}
#password {
  margin-left: 20px;
}
#inaccound {
  margin-top: 20px;
  height: 20px;
}
#inpassword {
  margin-top: 20px;
  height: 20px;
}
#incode {
  margin-top: 20px;
  height: 20px;
}
#code {
  margin-top: 20px;
  height: 30px;
  width: 100px;
}
#codeImg {
  margin-top: 20px;
  height: 30px;
  width: 100px;
}
</style>