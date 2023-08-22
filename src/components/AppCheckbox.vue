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
    class="app-checkbox app-checkbox-bg appearance-none rounded shadow-sm shadow-[#131f151a] h-4 w-4 cursor-pointer transition-colors ease-in-out"
    @change="$emit('onChange', ($event.target as HTMLInputElement)?.checked)"
  />
</template>

<style scoped>
.app-checkbox-bg {
  background: url('src/assets/checkbox-bg.svg');
}

.app-checkbox:checked {
  background: url('src/assets/checkbox-checked-bg.svg');
}
</style>
