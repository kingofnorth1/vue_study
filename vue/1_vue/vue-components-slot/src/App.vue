<template>
  <!-- <p>父类</p> -->
  <!-- <SlotBase>
    <div>
      <p>插槽测试</p>
      <p>插槽文件</p>
    </div>
  </SlotBase> -->
  <!-- <SlotTwo>
    <template v-slot:header>
      <p>{{ message }}</p>
    </template>
    <template v-slot:main>
      <p>插槽模板二</p>
    </template>
  </SlotTwo> -->
  <SlotAttr>
    <template #header="SlotProps">
      <p>{{ message }}-{{ SlotProps.mse }}</p>
    </template>
    <template #main="SlotProps">
      <p>{{ demo }}-{{ SlotProps.job }}</p>
    </template>
  </SlotAttr>
</template>
<script>
import SlotBase from './components/SlotBase.vue'
import SlotTwo from './components/SlotTwo.vue'
import SlotAttr from './components/SlotAttr.vue'

export default {
  data(){
    return {
      message:"插槽内容",
      demo:"测试插槽",
    }
  },
  components:{
    SlotBase,
    SlotTwo,
    SlotAttr,
  }
}
</script>
<style>

</style>