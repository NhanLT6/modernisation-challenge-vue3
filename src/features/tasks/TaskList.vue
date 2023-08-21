<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';

import { useToast } from 'vue-toastification';

import { TaskResponse } from '@/apis/tasks/TaskResponse.ts';
import { deleteTask, getTasks, updateTaskCompleteStatus } from '@/apis/tasks/taskApi.ts';

import AppCheckbox from '@/components/AppCheckbox.vue';
import AppDialog from '@/components/AppDialog.vue';
import AppTable from '@/components/table/AppTable.vue';
import { TableColumn } from '@/components/table/types/TableColumn.ts';
import { TableRow } from '@/components/table/types/TableRow.ts';

import TaskForm, { TaskFormData } from './TaskForm.vue';

const toast = useToast();

const showDialog = ref(false);

const data = ref<TaskResponse[]>([]);
const editingTask = ref<TaskFormData>();

const columns: TableColumn[] = [
  { field: 'completed', title: 'Completed', thProps: { class: 'w-1' } },
  { field: 'details', title: 'Details' },
];

const dialogTitle = computed(() => {
  return editingTask.value?.id ? 'Edit Task' : 'Create Task';
});

const fetchTasks = async () => {
  try {
    data.value = await getTasks();
  } catch (error) {
    console.log(error);
    toast.error(`Failed to get Tasks. Error: ${(error as Error).message}`);
  }
};

const onCreateTask = () => {
  editingTask.value = {
    id: undefined,
    details: '',
  };

  showDialog.value = true;
};

const onEditTask = (data: TableRow) => {
  editingTask.value = {
    id: typeof data.id === 'string' ? parseInt(data.id) : data.id,
    details: data.details,
  };

  showDialog.value = true;
};

const onDeleteTask = async (data: TableRow) => {
  try {
    const id = typeof data.id === 'string' ? parseInt(data.id) : data.id;
    await deleteTask(id);

    await fetchTasks();
  } catch (e) {
    toast.error('Failed to delete task. Error: ' + (e as Error).message);
  }
};

const onCompleteStatusChanged = async (data: TableRow, isCompleted: boolean) => {
  try {
    const id = typeof data.id === 'string' ? parseInt(data.id) : data.id;
    console.log('id', id, isCompleted);
    await updateTaskCompleteStatus(id, isCompleted);

    await fetchTasks();
  } catch (e) {
    toast.error('Failed to delete task. Error: ' + (e as Error).message);
  }
};

// Get Tasks on mounted
onMounted(fetchTasks);

watch([showDialog], fetchTasks); // Reload tasks when Editing dialog closed
</script>

<template>
  <h1>Tasks</h1>

  <AppTable
    :columns="columns"
    :data="data as TableRow[]"
    addNewText="+ Create a new task"
    @create="onCreateTask"
    @edit="onEditTask"
    @delete="onDeleteTask"
  >
    <!-- Render Completed as checkbox -->
    <template v-slot:completed="{ row }">
      <div class="text-center">
        <AppCheckbox :checked="row.completed" @onChange="onCompleteStatusChanged(row, $event)" />
      </div>
    </template>
  </AppTable>

  <AppDialog ref="dialogRef" v-model="showDialog" :title="dialogTitle">
    <template v-slot="{ close }">
      <TaskForm :initialValues="editingTask" @submit="close" @cancel="close" />
    </template>
  </AppDialog>
</template>

<style scoped></style>
