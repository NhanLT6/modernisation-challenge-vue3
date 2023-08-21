<script setup lang="ts">
import TableActions from './TableActions.vue';
import { TableColumn } from './types/TableColumn.ts';
import { TableRow } from './types/TableRow.ts';

interface AppTableProps {
  columns: TableColumn[];
  data: TableRow[];
  caption?: string;
  viewOnly?: boolean;
}

const props = defineProps<AppTableProps>();

const emit = defineEmits<{
  create: [];
  edit: [data: TableRow];
  delete: [data: TableRow];
}>();

const handleEdit = (data: TableRow) => {
  console.log('Edit data', data);
  emit('edit', data);
};

const handleDelete = (data: TableRow) => {
  console.log('Delete data', data);
  emit('delete', data);
};
</script>

<template>
  <div class="rounded-md text-[14px] mb-[25px] overflow-auto text-left align-middle">
    <table class="w-full border border-collapse">
      <!-- Describe this table, hidden because this app doesn't required it to be appeared -->
      <caption class="hidden">
        {{
          props.caption
        }}
      </caption>

      <!-- Table headers, rendered base on props.columns -->
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

      <!-- Table body, rendered base on props.data -->
      <tbody class="bg-white">
        <tr v-for="row in props.data" :key="row.id" class="first-of-type:border-t-0 border-t hover:bg-[#00b2d514]">
          <td v-for="col in props.columns" :key="row[col.field]" class="py-[15px] px-3 transition-colors ease-in-out">
            <!-- Combined of Named slot and Scoped slot used to render custom cell -->
            <slot :name="col.field" :row="row">
              <!-- slot's default value -->
              {{ row[col.field] }}
            </slot>
          </td>

          <!-- Actions -->
          <td class="px-[15px] py-3">
            <TableActions @edit="handleEdit(row)" @delete="handleDelete(row)" />
          </td>
        </tr>

        <!-- Add new -->
        <tr v-if="!props.viewOnly">
          <td colspan="99" class="border-t py-[15px] px-3 transition-colors ease-in-out">
            <button class="text-[#00b2d5] decoration-0 hover:underline" @click="$emit('create')">
              + Create a new task
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
