<template>
    <p>ComponentsEvent父级</p>
    <child @someEvent="getHandle"/>
    <p>{{ message }}</p>
</template>

<script>
import child from './child.vue';

export default {
  data(){
    return {
      message:'hxt',
    }
  },
  components:{
    child,
  },
  methods:{
    getHandle(data){
        this.message = data;
    }
  }
}
</script>