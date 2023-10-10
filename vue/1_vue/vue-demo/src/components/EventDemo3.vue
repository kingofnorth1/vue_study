<template>
    <h3>内联时间处理器</h3>
    <button @click="addCount">Add</button>
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
        //event对象
        addCount(e){
            //Vue中的event对象，就是原生JS的Event对象
            e.target.innerHTML = "add" + this.count;
            this.count++;
        }
    }
}

</script>