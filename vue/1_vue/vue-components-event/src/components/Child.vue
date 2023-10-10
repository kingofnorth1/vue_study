<template>
    <p>子级</p>
    <button @click="clickEventHandle">修改数据</button>
</template>

<script>
export default {
  data(){
    return {
      message:"数据"
    }
  },
  methods:{
    clickEventHandle(){
        this.$emit('someEvent',this.message)
    }
  }
}
</script>