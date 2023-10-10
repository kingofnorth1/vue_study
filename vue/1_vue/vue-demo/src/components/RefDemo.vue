<template>
    <div ref="container" class="container">{{ content }}</div>
    <input type="text" ref="username"/>
    <button @click="getElementHandler">获取元素</button>
</template>

<script>
export default {
    data(){
        return {
            content: '内容',
        }
    },
    methods:{
        getElementHandler(){
            this.$refs.container.innerHTML = '哈哈哈';
            console.log(this.$refs.username.value);
        }
    }
}
</script>