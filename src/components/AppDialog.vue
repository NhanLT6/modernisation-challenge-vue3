<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean;
  title?: string;
}>();

const emit = defineEmits(['update:modelValue', 'ok', 'cancel']);

const onClose = () => {
  emit('update:modelValue', false);
};
</script>

<template>
  <!-- Dialog wrapper -->
  <div
    v-if="modelValue"
    class="h-full w-full fixed top-0 left-0 z-50 overflow-x-hidden overflow-y-auto backdrop-contrast-75"
  >
    <!-- Dialog -->
    <div
      class="flex flex-col my-6 mx-auto p-6 max-h-[calc(100vh-50px)] min-h-[250px] max-w-md bg-white rounded-md shadow-md"
    >
      <!-- Title and Close button -->
      <div class="flex justify-between mb-6">
        <h2>{{ props.title }}</h2>

        <div>
          <button
            class="circle-button bg-[url('/src/assets/x-mark.svg')] bg-center bg-no-repeat hover:bg-[#2c2c2c14]"
            @click="onClose"
          ></button>
        </div>
      </div>

      <!-- Body -->
      <div class="grow">
        <slot :close="onClose" :submit="onClose"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
