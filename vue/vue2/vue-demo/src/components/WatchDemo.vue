<template>
    <h3>监听器</h3>
    <p>{{ message }}</p>
    <button @click="updateMethods">修改数据</button>
</template>

<script>
export default {
    data(){
        return {
            message:"hello",
        }
    },
    methods:{
        updateMethods(){
            this.message='word';
        }
    },
    watch:{
        message(newValue,orderValue){
            console.log(newValue,orderValue)
        }
    }
}

</script>