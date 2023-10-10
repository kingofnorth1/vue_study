<template>
    <h3>数组变化监听</h3>
    <button @click="addListHandle">添加数组</button>
    <ul>
        <li v-for="(item,index) of names" :key="index">{{ item }}</li>
    </ul>
    <button @click="addListHandles">添加数组</button>
    <ul>
        <li v-for="(item,index) of nums1" :key="index">{{ item }}</li>
    </ul>
    <ul>
        <li v-for="(item,index) of nums2" :key="index">{{ item }}</li>
    </ul>
</template>

<script>

export default {
    data(){
        return {
            names: ['iwen','ime','frank'],
            nums1: [1,2,3,4,5],
            nums2: [6,7,8,9,10],
        }
    },
    methods:{
        addListHandle(){
            this.names.push('hxt');
        },
        addListHandles(){
            // this.nums1 = this.nums1.concat(this.nums2);
            this.nums1 = this.nums1.filter(x => x%2 ==0);
        }
    }
}

</script>