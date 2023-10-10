<template>
    <h3>内联时间处理器</h3>
    <button @click="addCount('hello')">Add</button>
    <p>{{ count }}</p>
</template>

<script>
export default {
    data(){
        return {
            count: 0,
        }
    },
    methods:{
        addCount(e){
            console.log(e)
            this.count++;
        }
    }
}

</script>