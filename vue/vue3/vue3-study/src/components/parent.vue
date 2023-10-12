<script setup>
import {ref} from 'vue'
const messages = ref('Sb')

function someEvent(){
    this.messages = 'SB';
}

</script>

<template>
    <div>
        <h3 style="width: 30px;height: 30px">messAge: {{ messages }}</h3>
        <button @click="someEvent">click me</button>
    </div>
</template>