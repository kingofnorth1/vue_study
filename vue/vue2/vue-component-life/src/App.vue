<template>
  <!-- <MyComponents></MyComponents> -->
  <!-- <UserComponents></UserComponents> -->
  <!-- <ComponentsA></ComponentsA> -->
  <!-- <ComponentsB></ComponentsB> -->
  <KeepAlive>
    <component :is="tabcomponents"></component>
  </KeepAlive>
  <button @click="tabupdate">修改按键</button>
</template>

<script>
import MyComponents from './components/mycomponents.vue';
import UserComponents from './components/usercomponents.vue';
import ComponentsA from './components/ComponentsA.vue';
import ComponentsB from './components/ComponentsB.vue';

export default {
    data(){
        return {
            tabcomponents:'ComponentsA'
        }
    },
    components:{
      MyComponents,
      UserComponents,
      ComponentsA,
      ComponentsB,
    },
    methods:{
      tabupdate(){
        this.tabcomponents = this.tabcomponents == "ComponentsA" ? "ComponentsB" : "ComponentsA";
      }
    }
}
</script>