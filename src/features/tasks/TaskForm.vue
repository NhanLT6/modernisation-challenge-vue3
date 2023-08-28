<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/yup';
import { useForm } from 'vee-validate';
import { useToast } from 'vue-toastification';
import { object, string } from 'yup';

import { UpsertTaskRequest } from '@/apis/tasks/UpsertTaskRequest.ts';
import { createTask, updateTask } from '@/apis/tasks/taskApi.ts';

import AppTextarea from '@/components/AppTextarea.vue';

export interface TaskFormData {
  id?: number;
  details: string;
}

const props = defineProps<{
  initialValues?: TaskFormData;
}>();

const emit = defineEmits(['submit', 'cancel']);

const toast = useToast();

const validationSchema = object({
  details: string().required('Required'),
});

const initialValues: TaskFormData = {
  id: props.initialValues?.id,
  details: props.initialValues?.details ?? '',
};

const { resetForm, handleSubmit } = useForm<TaskFormData>({
  initialValues,
  validationSchema: toTypedSchema(validationSchema),
});

const onSubmit = handleSubmit(async (values) => {
  try {
    const request: UpsertTaskRequest = {
      details: values.details,
    };

    const isNewTask = !initialValues.id;

    if (isNewTask) await createTask(request);
    else await updateTask(initialValues.id!, request);

    emit('submit');
  } catch (e) {
    toast.error('Failed to save task. Error: ' + (e as Error).message);
  }
});

const onCancel = () => {
  resetForm();
  emit('cancel');
};
</script>

<template>
  <AppTextarea name="details" label="Details" required />

  <!-- Form actions -->
  <div class="flex justify-end mt-6 gap-2">
    <VBtn variant="tonal" @click="onCancel">Cancel</VBtn>

    <VBtn color="primary" @click="onSubmit">Save</VBtn>
  </div>
</template>

<style scoped></style>
