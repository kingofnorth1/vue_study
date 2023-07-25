<template>
    <button v-on:click="count++">Add1</button>
    <div style="height: 100px;width: 100px;color: red">{{ count }}</div>
</template>
<script>
export default {
    data(){
        return {
            count: 0,
        }
    }
}
</script>