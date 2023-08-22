<script setup lang="ts">
import { ref } from 'vue';

import Popper from 'vue3-popper';

const emit = defineEmits(['edit', 'delete']);

const popperRef = ref(null);
const isShowingPopper = ref(false);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleEdit = (slotProps: any) => {
  emit('edit');
  slotProps.close();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleDelete = (slotProps: any) => {
  emit('delete');
  slotProps.close();
};
</script>

<template>
  <Popper ref="popperRef" :show="isShowingPopper" placement="bottom-start" @close:popper="isShowingPopper = false">
    <button
      :class="[
        { focus: isShowingPopper },
        'popup-bg flex items-center justify-around p-2 h-[36px] w-[36px] bg-white rounded-full hover:bg-[#00a0bf14]',
      ]"
      type="button"
      @click="isShowingPopper = !isShowingPopper"
    ></button>

    <template #content="popperSlotProps">
      <ul class="bg-white rounded-md shadow-md shadow-[#00000014]">
        <li class="popup-item">
          <button @click="handleEdit(popperSlotProps)">Edit</button>
        </li>

        <li class="popup-item">
          <button @click="handleDelete(popperSlotProps)">Delete</button>
        </li>
      </ul>
    </template>
  </Popper>
</template>

<style scoped>
.popup-bg {
  background: url('src/assets/three-dots.svg') no-repeat center center;
}

.focus {
  background-color: #00a0bf14;
  box-shadow: none;
  transition: none;
}
</style>
