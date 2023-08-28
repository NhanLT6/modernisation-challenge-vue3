<script setup lang="ts">
const props = defineProps<{ addNewText?: string }>();

defineEmits(['click']);
</script>

<template>
  <tr>
    <td colspan="99">
      <VBtn variant="text" @click="$emit('click')">
        {{ props.addNewText ?? '+ Create' }}
      </VBtn>
    </td>
  </tr>
</template>

<style scoped></style>
