<template>
    <div class="Aside">
        <h3>Aside</h3>
        <Item></Item>
        <Item></Item>
        <Item></Item>
    </div>
</template>

<script>
import Item from './Item.vue'

export default {
    components:{
        Item,
    }
}
</script>

<style>
.Aside{
    float: right;
    width: 30%;
    height: 600px;
    border: 5px solid #999;
    box-sizing: border-box;
    /* border-left: 0px; */
}
</style>