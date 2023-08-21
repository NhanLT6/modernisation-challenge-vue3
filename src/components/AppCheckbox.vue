<script setup lang="ts">
interface AppCheckboxProps {
  name?: string;
  checked?: boolean;

  [k: string]: unknown;
}

const props = defineProps<AppCheckboxProps>();

defineEmits<{
  onChange: [boolean];
}>();
</script>

<template>
  <input
    type="checkbox"
    :checked="props.checked"
    class="app-checkbox"
    @change="$emit('onChange', ($event.target as HTMLInputElement)?.checked)"
  />
</template>

<style scoped>
.app-checkbox {
  -webkit-appearance: none;
  appearance: none;
  background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'><rect x='0.5' y='0.5' width='15' height='15' rx='3' fill='%23f9f9fc' /><rect x='0.5' y='0.5' width='15' height='15' rx='3' fill='none' stroke='%23a6aec1' stroke-width='1' /></svg>");
  border-radius: 3px;
  box-shadow: 0px 1px 1px #131f151a;
  box-sizing: border-box;
  content: '';
  cursor: pointer;
  display: inline-block;
  flex-shrink: 0;
  height: 16px;
  transition:
    background-color ease-in-out 150ms,
    background-image ease-in-out 150ms,
    border-color ease-in-out 150ms;
  vertical-align: -3px;
  width: 16px;

  &:checked {
    background: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'><rect x='0.5' y='0.5' width='15' height='15' rx='3' fill='%2300b2d5bf' /><rect x='0.5' y='0.5' width='15' height='15' rx='3' fill='none' stroke='%2300b2d5' stroke-width='1' /><path d='M 6.652 10.894 l -2.545 -2.563 a 0.362 0.362 0 0 1 0 -0.513 l 0.514 -0.513 a 0.366 0.366 0 0 1 0.514 0 l 1.775 1.794 3.956 -3.994 a 0.365 0.365 0 0 1 0.514 0 l 0.514 0.513 a 0.361 0.361 0 0 1 0 0.511 l -4.728 4.764 a 0.366 0.366 0 0 1 -0.514 0' fill='%23fff' /></svg>");
  }
}
</style>
