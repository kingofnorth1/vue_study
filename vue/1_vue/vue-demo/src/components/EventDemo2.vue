<template>
    <button @click="addnumber">Add1</button>
    <div style="height: 100px;width: 100px;color: red">{{ count }}</div>
</template>
<script>
export default {
    data(){
        return {
            count: 0,
        }
    },
    methods:{
        addnumber(){
            this.count++
        }
    }
}
</script>