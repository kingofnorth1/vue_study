<template>
    <h3>Parent</h3>
    <Child :title="message" :age="age" :names="names" :userinfo="userinfo"></Child>
</template>

<script>
import Child from './Child.vue';

export default {
    data(){
        return {
            message: '传递数据',
            age: 20,
            names: ['iwen','hxt','dqk'],
            userinfo: {
                name: 'hxt',
                age: 20,
            }
        }
    },
    components:{
        Child,
    }
}
</script>