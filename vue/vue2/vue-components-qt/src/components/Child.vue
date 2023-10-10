<template>
    <h3>Child</h3>
    <p >{{ title }}</p>
    <p>{{ age }}</p>
    <ul>
        <li v-for="(item,index) of names" :key="index">{{ item }}</li>
    </ul>
    <p>{{ userinfo.name }}</p>
    <p>{{ userinfo.age }}</p>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props:['title','age','names','userinfo']
}
</script>