<template>
    <h3 style="color: blue;font-size: 30px;text-align: center;">ComponentsA</h3>
    <ComponentsB :title="title" :names="names" :age="age"/>
</template>

<script>
import ComponentsB from './ComponentsB.vue'

export default {
    data(){
        return {
            title: 'ComponentsB',
            names: ['hxt','dqk'],
            age: 20,
        }
    },
    components:{
        ComponentsB,
    }
}
</script>