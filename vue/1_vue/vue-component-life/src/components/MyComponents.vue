<template>
    <p>组件生命周期</p>
    <button @click="updateMessage">{{ message }}</button>
  </template>
  
  <script>
  /*
  *  生命周期函数
  *     创建期：beforeCreate created
  *     挂载期：beforeMounte mounte
  *     更新期：beforeUpdate update
  *     销毁期：beforeUnmount unmount
  */
  
  export default {
    data(){
      return {
        message:"更新前的数据"
      }
    },
    methods:{
      updateMessage(){
        this.message = "更新后的数据"
      }
    },
    beforeCreate(){
      console.log("组件创建之前")
    },
    created(){
      console.log("组件创建之后")
    },
    beforeMount(){
      console.log("组件渲染之前")
    },
    mounted(){
      console.log("组件渲染之后")
    },
    beforeUpdate(){
      console.log("组件更新之前")
    },
    updated(){
      console.log("组件更新之后")
    },
    beforeUnmount(){
      console.log("组件卸载之前")
    },
    unmounted(){
      console.log("组件卸载之后")
    }
  }
  </script>