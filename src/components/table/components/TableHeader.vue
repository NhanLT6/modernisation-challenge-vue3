<script setup lang="ts">
import { TableColumn } from '@/components/table/types/TableColumn.ts';

const props = defineProps<{
  columns: TableColumn[];
}>();
</script>

<template>
  <thead class="uppercase whitespace-nowrap">
    <tr>
      <th
        v-for="{ field, title, thProps } in props.columns"
        :key="field"
        :class="['bg-[#e7eaf5] font-semibold p-3', thProps?.class ?? '']"
        v-bind="thProps"
      >
        {{ title }}
      </th>

      <!-- Actions -->
      <th class="w-1 bg-[#e7eaf5] font-semibold p-3"></th>
    </tr>
  </thead>
</template>

<style scoped></style>
