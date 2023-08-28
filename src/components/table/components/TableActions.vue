<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['edit', 'delete']);

const isShowingPopper = ref(false);

const handleEdit = () => {
  emit('edit');
};

const handleDelete = () => {
  emit('delete');
};
</script>

<template>
  <VMenu v-model="isShowingPopper" location="bottom">
    <template #activator="{ props }">
      <VBtn
        icon="mdi-dots-vertical"
        density="comfortable"
        variant="tonal"
        :class="[{ focus: isShowingPopper }]"
        v-bind="props"
      />
    </template>

    <VList>
      <VListItem @click="handleEdit">Edit</VListItem>
      <VListItem @click="handleDelete">Delete</VListItem>
    </VList>
  </VMenu>
</template>

<style scoped></style>
