<script setup>
import {ref} from "vue"
const emit = defineEmits(['someEvent'])

function getTime(){
    const now = new Date();
    // const year = new Date().getFullYear();
    // const month = new Date().getMonth();
    // const day = new Date().getDay();
    const hour = new Date().getHours().toString();
    const minutes = new Date().getMinutes().toString();
    const seconds = new Date().getSeconds().toString();
    // emit('someEvent', hour, minutes, seconds)
    emit('someEvent', now)
}
</script>

<template>
  <div>
    <button @click="getTime">click me</button>
  </div>
    
</template>