<script setup>
import { ref } from 'vue'
const numbers = ref([1,2,3])
const sets = ref([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10]
])
function even(numberss){
    return numberss.filter((number) => number % 3 === 0)
}
</script>

<template>
    <div>
        <p v-for="(num,index) in numbers">{{ num }} - {{ index }}</p>
        <ul v-for="numbers in sets">
            <li v-for="n in even(numbers)">{{ n }}</li>
        </ul>
    </div>
</template>