<script setup>
import { ref } from 'vue'
const awesome = ref(true)
</script>

<template>
    <button @click="awesome = !awesome">Toggle</button>
    <p v-if="awesome">Vue is awesome</p>
    <p v-else>oh No 😢</p>
</template>