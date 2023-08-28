<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const props = defineProps<{
  modelValue: boolean;
  title?: string;
}>();

const emit = defineEmits(['update:modelValue', 'ok', 'cancel']);

const showDialog = ref<boolean>(props.modelValue);

// Update showDialog value when props.modelValue changes
watchEffect(() => {
  showDialog.value = props.modelValue;
});

const onClose = () => {
  emit('update:modelValue', false);
};
</script>

<template>
  <VDialog v-model="showDialog" persistent max-width="600">
    <!-- Title and Close button -->
    <VCard>
      <VCardTitle class="flex justify-between">
        <h2>{{ props.title }}</h2>

        <VBtn density="compact" variant="text" icon="mdi-close" @click="onClose"></VBtn>
      </VCardTitle>

      <!-- Body -->
      <VCardText class="pa-4">
        <slot :close="onClose" :submit="onClose"></slot>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style scoped></style>
