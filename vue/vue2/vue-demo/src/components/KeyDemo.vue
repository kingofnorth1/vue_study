<template>
    <div v-for="(name,index) of names" v-bind:key="index">{{ name }}</div>
    <div v-for="item of result" v-bind:key="item.id">
        <p>{{ item.title }}</p>
        <img v-bind:src="item.src" style="height: 200px;width: 200px;"/>
    </div>
</template>
<script>
export default {
    data(){
        return {
            names:['百战程序员','尚硅谷',"it"],
            result: [
                {
                    "id": 2261677,
                    "title": '成都',
                    "src": 'https://cdn.pixabay.com/photo/2023/06/27/10/51/man-8091933_1280.jpg'
                },
                {
                    "id": 2261678,
                    "title": '西安',
                    "src": 'https://cdn.pixabay.com/photo/2023/03/26/10/46/flower-7878054_640.jpg'
                },
                {
                    "id": 2261679,
                    "title": '北京',
                    "src": 'https://cdn.pixabay.com/photo/2023/07/15/07/15/vulture-8128264_640.png'
                }
            ],
            userinfo: {
                name:'iwen',
                age:20,
                sex:"男"
            }
        }
    }
}
</script>