<template>
    <h3>ComponentsA</h3>
    <ComponentsB title="标题" :fuEvent="EventFun"/>
    <p>父级元素：{{ message }}</p>
</template>

<script>
import ComponentsB from './ComponentsB.vue';

export default {
    data(){
        return {
            message:"",
        }
    },
    components:{
        ComponentsB,
    },
    methods:{
        EventFun(data){
            this.message = data;
        }
    }
}
</script>