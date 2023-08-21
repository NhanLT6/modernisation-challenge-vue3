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
  <div :class="['text-sm font-semibold mb-3', { required: props.required }]">{{ props.label }}</div>

  <textarea
    v-model="value"
    class="w-full bg-[#fcfcfc] rounded p-4 focus:bg-white focus:outline-[#00b2d5] outline outline-1 outline-[#a6aec1] hover:bg-white text-sm transition-colors ease-in-out"
  />
  <!-- Error message should be here -->
  <!-- {{ errorMessage }} -->
</template>

<style scoped></style>
