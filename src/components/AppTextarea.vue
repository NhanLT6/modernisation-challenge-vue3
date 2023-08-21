<script setup lang="ts">
import { useField } from 'vee-validate';

const props = defineProps<{
  name: string;
  label?: string;
  required?: boolean;
}>();

const { value /*, errorMessage*/ } = useField<string | undefined>(() => props.name);
</script>

<template>
  <label :class="['app-textarea-label', { required: props.required }]">{{ props.label }}</label>
  <textarea v-model="value" class="app-textarea" />
  <!-- Error message should be here -->
  <!-- {{ errorMessage }} -->
</template>

<style scoped>
.app-textarea-label {
  color: #2c2c2c;
  display: block;
  font:
    600 14px 'Poppins',
    sans-serif;
  letter-spacing: 0;
  margin-bottom: 11px;
}

.app-textarea {
  background: #fcfcfc;
  border: 1px solid #a6aec1;
  border-radius: 4px;
  box-sizing: border-box;
  color: #2c2c2c;
  display: inline-block;
  font:
    normal 14px 'Poppins',
    sans-serif;
  outline: none;
  padding: 8px 14px;
  transition:
    background-color ease-in-out 150ms,
    border-color ease-in-out 150ms;
  resize: vertical;
  width: 100%;

  &:focus {
    background: white;
    border: 1px solid #00b2d5;
  }

  &:hover {
    background: white;
  }
}
</style>
