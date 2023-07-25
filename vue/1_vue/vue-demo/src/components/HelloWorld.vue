<script >
export default {
  data(){
    return {
      dynamicClass:"appclass",
      ldynamicId:"appid",
      isbutton:false,
      moreattribute: {
        class:"appclass",
        id:"appid"
      }
    }
  }
}
</script>
<template>
  <div v-bind:class="dynamicClass" v-bind:id="ldynamicId">测试</div>
  <button v-bind:disabled="isbutton">按钮</button>
  <div v-bind="moreattribute">测试</div>
</template>

<style>
.appclass{
  color: red;
  font-size: 30px;
}
</style>