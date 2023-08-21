<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/yup';
import { useForm } from 'vee-validate';
import { useToast } from 'vue-toastification';
import { object, string } from 'yup';

import { UpsertTaskRequest } from '../../apis/tasks/UpsertTaskRequest.ts';
import { createTask, updateTask } from '../../apis/tasks/taskApi.ts';
import AppTextarea from '../../components/AppTextarea.vue';

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
  details: string().required(),
});

const initialValues: TaskFormData = {
  id: props.initialValues?.id,
  details: props.initialValues?.details ?? '',
};

const { values, errors, validate, resetForm } = useForm<TaskFormData>({
  initialValues,
  validationSchema: toTypedSchema(validationSchema),
});

const onSubmit = async () => {
  try {
    // Force validating form to display error toast
    // Bad UX, field's error should stay next to field and persistence
    const isFormValid = (await validate()).valid; // Object.keys(errors).length > 0;
    if (!isFormValid) {
      toast.error("One or more required fields haven't been filled in.");
      console.log('form errors', isFormValid, JSON.stringify(errors.value, null, 2));
      return;
    }

    // Submit form when it's valid
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
};

const onCancel = () => {
  resetForm();
  emit('cancel');
};
</script>

<template>
  <AppTextarea name="details" label="Details" required />

  <!-- Form actions -->
  <div class="flex justify-end mt-6">
    <button
      class="h-9 px-4 mr-4 bg-transparent border border-[#00b2d5] text-[#00b2d5] rounded-full transition-colors ease-in-out"
      @click="onCancel"
    >
      Cancel
    </button>

    <button class="h-9 px-4 bg-[#00b2d5] text-white rounded-full transition-colors ease-in-out" @click="onSubmit">
      Save
    </button>
  </div>
</template>

<style scoped></style>
