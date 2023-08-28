<script setup lang="ts">
import TableAddNewButton from '@/components/table/components/TableAddNewButton.vue';
import TableHeader from '@/components/table/components/TableHeader.vue';

import TableActions from './components/TableActions.vue';
import { TableColumn } from './types/TableColumn.ts';
import { TableRow } from './types/TableRow.ts';

interface AppTableProps {
  columns: TableColumn[];
  data: TableRow[];
  caption?: string;
  addNewText?: string;
}

const props = defineProps<AppTableProps>();

const emit = defineEmits<{
  create: [];
  edit: [data: TableRow];
  delete: [data: TableRow];
}>();

const handleEdit = (data: TableRow) => {
  emit('edit', data);
};

const handleDelete = (data: TableRow) => {
  emit('delete', data);
};
</script>

<template>
  <VTable fixed-header hover class="border">
    <!-- Describe this table, hidden because this app doesn't required it to be appeared -->
    <caption class="hidden">
      {{
        props.caption
      }}
    </caption>

    <!-- Table headers, rendered base on props.columns -->
    <TableHeader :columns="props.columns" />

    <!-- Table body, rendered base on props.data -->
    <tbody>
      <tr v-for="row in props.data" :key="row.id">
        <td v-for="col in props.columns" :key="row[col.field]">
          <!-- Combined of Named slot and Scoped slot used to render custom cell -->
          <slot :name="col.field" :row="row">
            <!-- slot's default value -->
            {{ row[col.field] }}
          </slot>
        </td>

        <!-- Actions -->
        <td>
          <TableActions @edit="handleEdit(row)" @delete="handleDelete(row)" />
        </td>
      </tr>

      <!-- Add new -->
      <TableAddNewButton :addNewText="props.addNewText" @click="$emit('create')" />
    </tbody>
  </VTable>
</template>

<style scoped></style>
