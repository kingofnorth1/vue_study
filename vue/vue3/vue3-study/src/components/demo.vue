<script setup>
import { ref, onMounted } from 'vue'

const count = ref(0)

function increment(){
    count.value++
}

onMounted(() => {
    console.log(`The initial Count is ${count.value}`)
})
</script>

<template>
    <div id="demo">
        <button @click="increment">Count is: {{ count }}</button>
    </div>
</template>

<style>
#id {
    width: 10px;
    height: 10px;   
}
</style>