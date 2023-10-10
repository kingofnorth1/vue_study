<template>
    <h3>ComponentsB</h3>
    <p>子级元素：{{ title }}</p>
    <p>{{ fuEvent("hxt") }}</p>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    props:{
        fuEvent:Function,
        title:String,
    }
}
</script>