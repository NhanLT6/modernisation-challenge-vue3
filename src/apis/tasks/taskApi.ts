import api from '../axios.ts';
import { TaskResponse } from './TaskResponse.ts';
import { UpsertTaskRequest } from './UpsertTaskRequest.ts';

const getTasks = async (): Promise<TaskResponse[]> => {
  const { data } = await api.get<TaskResponse[]>('/tasks?PageSize=-1'); // Set PageSize=-1 to skip pagination

  return data;
};

const getTask = async (id: number): Promise<TaskResponse> => {
  const { data } = await api.get<TaskResponse>(`/tasks/${id}`);

  return data;
};

const createTask = async (request: UpsertTaskRequest): Promise<TaskResponse> => {
  const { data } = await api.post<TaskResponse>('/tasks', request);

  return data;
};

const updateTask = async (id: number, request: UpsertTaskRequest): Promise<TaskResponse> => {
  const { data } = await api.put<TaskResponse>(`/tasks/${id}`, request);

  return data;
};

const updateTaskCompleteStatus = async (id: number, isComplete: boolean): Promise<TaskResponse> => {
  const { data } = await api.put<TaskResponse>(`/tasks/${id}/status/${isComplete}`);

  return data;
};

const deleteTask = async (id: number): Promise<void> => {
  await api.delete(`/tasks/${id}`);
};

export { getTasks, getTask, createTask, updateTask, updateTaskCompleteStatus, deleteTask };
