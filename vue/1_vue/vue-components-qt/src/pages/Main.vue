<template>
    <div class="Main">
        <h3>Main</h3>
        <Article ></Article>
        <Article ></Article>
    </div>
</template>

<script>
import Article from './article.vue'

export default {
    components:{
        Article,
    }
}
</script>

<style scoped>
.Main{
    float: left;
    width: 70%;
    height: 600px;
    border: 5px solid #999;
    box-sizing: border-box;
    /* border-top: 0px; */
}
</style>