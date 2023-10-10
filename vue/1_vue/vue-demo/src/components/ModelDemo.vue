<template>
    <h3>表单输入绑定</h3>
    <form>
        <h4>常加载</h4>
        <input type='text' v-model="message"/>
        <p>{{ message }}</p>
    </form>
    <form>
        <h4>懒加载</h4>
        <input type='text' v-model.lazy="messages"/>
        <p>{{ messages }}</p>
    </form>
    <input type="checkbox" v-model="checked"/>
    <label for="checked">{{ checked }}</label>
</template>

<script>
export default {
    data(){
        return {
            message:"",
            messages:"",
            checked:false,
        }
    }
}
</script>