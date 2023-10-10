<template>
  <!-- <ComponentsEvent /> -->
  <!-- <Main /> -->
  <!-- <SearchComponents /> -->
  <!-- <ComponentsA /> -->
  <AttrComponents class="attributes"/>
</template>

<script>
import ComponentsEvent from './components/ComponentsEvent.vue';
import Main from './components/Main.vue'
import SearchComponents from './components/SearchComponents.vue';
import ComponentsA from './components/componentsa.vue';
import AttrComponents from './components/AttrComponents.vue';

export default {
  data(){
    return {

    }
  },
  components:{
    ComponentsEvent,
    Main,
    SearchComponents,
    ComponentsA,
    AttrComponents,
  }
}
</script>

<style>
.attributes{
  color: red;
  font-size: 30px;
}
</style>