<template>
    <p>组件生命周期函数应用</p>
    <p ref="name">hxt大笨蛋</p>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    beforeMount(){
        console.log(this.$refs.name) //undefined
    },
    mounted(){
        console.log(this.$refs.name)
    }
}
</script>