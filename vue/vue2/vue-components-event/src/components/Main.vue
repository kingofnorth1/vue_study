<template>
    <h3>搜索内容为： {{ message }}</h3>
    <SearchComponents @searchdata="getSearch"/>
</template>

<script>
import SearchComponents from './SearchComponents.vue';

export default {
    data(){
        return {
            message: '',
        }
    },
    components:{
        SearchComponents,
    },
    methods:{
        getSearch(data){
            this.message = data;
        }
    }
}
</script>