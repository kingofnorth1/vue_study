<script setup>
import {ref} from "vue"
const emit = defineEmits(['someEvent'])

function getTime(){
    const now = new Date();
    // const hour = new Date().getHours().toString();
    // const minutes = new Date().getMinutes().toString();
    // const seconds = new Date().getSeconds().toString();
    emit('someEvent', now)
}
</script>

<template>
  <div>
    <button @click="getTime">click me</button>
  </div>
    
</template>