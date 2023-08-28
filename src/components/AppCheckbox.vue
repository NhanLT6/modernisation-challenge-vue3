<script setup lang="ts">
import { ref, toRefs, watchEffect } from 'vue';

interface AppCheckboxProps {
  name?: string;
  checked?: boolean;

  [k: string]: unknown;
}

const props = defineProps<AppCheckboxProps>();
const { checked, name, ...rest } = toRefs(props);

defineEmits<{
  onChange: [boolean];
}>();

const checkBoxValue = ref<boolean>(checked?.value ?? false);

watchEffect(() => {
  checkBoxValue.value = checked?.value ?? false;
});
</script>

<template>
  <VCheckbox
    v-model="checkBoxValue"
    :name="name"
    hide-details
    @update:modelValue="$emit('onChange', $event)"
    v-bind="rest"
  />
</template>

<style scoped></style>
