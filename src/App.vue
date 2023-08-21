<script setup lang="ts">
import TaskList from './features/tasks/TaskList.vue';
</script>

<template>
  <main>
    <TaskList />
  </main>
</template>

<style scoped>
body {
  background: #f4f5fa;
  margin: 0;
  padding: 0;
}

main {
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 2048px;
  min-width: 1200px;
  padding: 89px 88px 1px 88px;
}
</style>
