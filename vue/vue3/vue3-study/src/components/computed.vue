<script setup>
// import { reactive,computed } from 'vue'
// const author = reactive({
//     name: 'John Doe',
//     books: [
//         'vue',
//         'vue2',
//         'vue3'
//     ]
// })
// const studyBook = computed(() => {
//     return author.books.length > 0 ? 'yes':'no'
// })

import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // 注意：我们这里使用的是解构赋值语法
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})
</script>

<template>
    <div id="test">
        <p>This is the Book:</p>
        <span>{{ fullName }}</span>
    </div>
</template>

<style scoped>
#test {
    color: rgb(238, 32, 0);
}

</style>