<template>
    <p>{{ title }}</p>
    <p>{{ age }}</p>
    <p v-for="(name,index) of names" :key="index">{{ name }}</p>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    props:{
        title:{
            type:[String,Number,Array,Object],
            //必选项
            required:true
        },
        age:{
            type:Number,
            default:0,
        },
        //数字和字符可以世界default，但是如果是数组对象，必须通过工厂函数返回默认值
        names:{
            type:Array,
            default(){
                return ["空"]
            }
        }    
    }
}
</script>