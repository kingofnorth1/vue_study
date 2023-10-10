<template>
    <h3>条件渲染</h3>
    <div v-if="flag">看看我的</div>
    <div v-else>看看我的2</div>
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>not A&B&C</div>
    <div v-show="flag">你能看见我吗</div>
</template>
<script>

export default {
    data(){
        return{
            flag: true,
            type: "D",
        }
    }
}

</script>