<script setup>
import Article from './Article.vue';
</script>

<template>
    <div class="Main">
        <Article></Article>
        <Article></Article>
    </div>
</template>

<style>
.Main {
    width: 70%;
    height: 600px;
    border: 5px solid #999;
    float: left;
    box-sizing: border-box;
}
</style>