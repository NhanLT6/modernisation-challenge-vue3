<script setup lang="ts">
const props = defineProps<{ addNewText?: string }>();

defineEmits(['click']);
</script>

<template>
  <tr>
    <td colspan="99" class="border-t py-[15px] px-3 transition-colors ease-in-out">
      <button class="text-[#00b2d5] decoration-0 hover:underline" @click="$emit('click')">
        {{ props.addNewText ?? '+ Create' }}
      </button>
    </td>
  </tr>
</template>

<style scoped></style>
