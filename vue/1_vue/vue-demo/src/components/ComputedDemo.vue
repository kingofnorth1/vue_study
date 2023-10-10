<template>
<h3>{{ itbaizhan.name }}</h3>
<!-- <p>{{ itbaizhan.content.length? "Yes":"No" }}</p> -->
<p>{{ itbaizhanContent }}</p>
<p>{{ itbaizhanContents() }}</p>
</template>

<script>
export default {
    data(){
        return {
            itbaizhan:{
                name:"百战程序员",
                content:["前端","java","python"]
            }
        }
    },
    computed:{
        itbaizhanContent(){
            return this.itbaizhan.content.length?"Yes":"No";
        }
    },
    methods:{
        itbaizhanContents(){
            return this.itbaizhan.content.length?"Yes":"No";
        }
    }
}
</script>