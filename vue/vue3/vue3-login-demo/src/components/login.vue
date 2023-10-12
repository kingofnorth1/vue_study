<script setup>
import { VueElement } from 'vue';
import {Setting} from '@element-plus/icons-vue'
</script>

<template>
  <div id="login">
    <h3 id="accound">账号:</h3>
    <input id="inaccound"/>
    <h3 id="password">密码:</h3>
    <input id="inpassword"/>
    <input id="incode"/>
    <img id="code" src="../assets/images/ggbh.png"/>
    <button id="sure">确定</button>
    <button id="cancel">取消</button>
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
</style>