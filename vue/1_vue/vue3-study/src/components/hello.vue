<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
    <div id="app">
        <h1>hello world!!</h1>
        <button @click="count++">Count is: {{ count }}</button>
    </div>
</template>

<style scoped>
button {
    font-weight: bold;
}
</style>