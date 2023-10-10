<template>
    <h3>事件传参</h3>
    <p @click="getNameHanler(item,$event)" v-for="(item,name) of names" :key="index">{{ item }}</p>
</template>

<script>
export default {
    data(){
        return {
            names: ["iwen","hxt","dqk"],
        }
    },
    methods:{
        getNameHanler(name,e){
            console.log(name);
            console.log(e)
        }
    }
}

</script>