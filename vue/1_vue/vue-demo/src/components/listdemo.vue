<template>
    <div v-for = "(name,index) of names">{{ name }}-{{ index }}</div>
    <div v-for="item of result">
        <p>{{ item.title }}</p>
        <img v-bind:src="item.src" style="width:100px;height: 100px;"/>
    </div>
    <div>
        <!-- <p v-for="item of userinfo">{{ item }}</p> -->
        <p v-for="(value,key,index) of userinfo">{{ value }}-{{ key }}-{{ index }}</p>
    </div>
</template>
<script>

export default {
    data(){
        return {
            names:['百战程序员','尚硅谷','IT'],
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