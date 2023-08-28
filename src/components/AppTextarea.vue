<script setup lang="ts">
import { useField } from 'vee-validate';

const props = defineProps<{
  name: string;
  label?: string;
  required?: boolean;
}>();

const { value, errorMessage } = useField<string | undefined>(() => props.name);
</script>

<template>
  <VTextarea v-model="value" :error-messages="errorMessage" auto-grow rows="3">
    <template v-slot:label>
      <span :class="[{ required: props.required }]">
        {{ props.label }}
      </span>
    </template>
  </VTextarea>
  <!-- Error message should be here -->
  <!-- {{ errorMessage }} -->
</template>

<style scoped></style>
