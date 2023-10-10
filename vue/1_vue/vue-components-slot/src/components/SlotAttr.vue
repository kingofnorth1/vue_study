<template>
    <slot name="header" :mse="message"></slot>
    <slot name="main" :job="jobMessage"></slot>
</template>

<script>
export default {
    data(){
        return {
            message:"子组件",
            jobMessage:"工作",
        }
    }
}
</script>