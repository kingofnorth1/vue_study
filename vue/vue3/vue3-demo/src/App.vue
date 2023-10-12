<script setup>
import {ref,reactive} from 'vue'
import login from './components/login.vue';
const message = ref()
function callback(val) {
  console.log("父类时间："+val);
  console.log(typeof(val.toString()))
  message.value = val;
}
</script>

<template>
  <div>
    <h3>子类时间：{{ message }}</h3>
    <h3>子類: <login @some-event="callback"/></h3>
  </div>
</template>