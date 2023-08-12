<template>
  <p>这是一个测试页面</p>
  <p>{{ list }}</p>
</template>

<script setup lang="ts">
// use Typescript

let list = [1, 2, 3]

list.every((item, index, list) => {
  console.log('item', item);
  return true
})


</script>

<style>

</style>