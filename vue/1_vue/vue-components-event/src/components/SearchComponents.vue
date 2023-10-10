<template>
    搜索：<input type="text" v-model="search"/>
    <!-- <p>{{ search }}</p> -->
</template>

<script>
export default {
    data(){
        return {
            search:"",
        }
    },
    // methods:{
    //     searchdata(){
    //         // console.log(this.search)
    //         this.$emit('searchdata')
    //     }
    // },
    watch:{
        search(newValue,oldValue){
            this.$emit('searchdata',newValue)
        }
    }
}
</script>