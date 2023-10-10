<template>
    <h3>tab组件A</h3>
    <p>{{ message }}</p>
    <button @click="updatedata">数据更新</button>
</template>
<script>
export default {
    data(){
        return {
            message:"老数据"
        }
    },
    beforeUnmount(){
        console.log("组件卸载之前")
    },
    unmounted(){
        console.log("组件卸载之后")
    },
    methods:{
        updatedata(){
            this.message = "新数据"
        }
    }
}
</script>M