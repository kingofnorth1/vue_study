<script setup>
import {ref} from 'vue'
const name = ref('vue.js')
function greet(event){
    alert(`hello  ${name.value}!`)
    if (event){
        alert(event.target.tagName)
    }
}
</script>

<template>
    <div id="test">
        <button id="greet" @click="greet">Greet</button>
    </div>
</template>

<style scoped>
#greet {
    width: 50px;
    height: 50px;
}
</style>