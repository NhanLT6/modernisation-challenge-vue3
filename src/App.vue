<script setup lang="ts">
import TaskList from './features/tasks/TaskList.vue';
</script>

<template>
  <VLayout>
    <VAppBar>
      <VToolbar color="primary">
        <VToolbarTitle>Modernisation Challenge - Nhan</VToolbarTitle>
      </VToolbar>
    </VAppBar>

    <VMain>
      <div class="pa-4">
        <TaskList />
      </div>
    </VMain>
  </VLayout>
</template>

<style scoped></style>
