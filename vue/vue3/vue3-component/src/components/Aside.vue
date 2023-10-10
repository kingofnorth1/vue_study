<script setup>
import Item from './Item.vue'
</script>

<template>
    <div class="Aside">
        <Item></Item>
        <Item></Item>
        <Item></Item>
    </div>
</template>

<style>
.Aside {
    width: 30%;
    height: 600px;
    border: 5px solid #999;
    float: right;
    box-sizing: border-box;
}
</style>