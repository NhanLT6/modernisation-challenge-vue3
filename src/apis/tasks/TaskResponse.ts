export interface TaskResponse {
  id: number;
  dateCreated: string;
  dateModified: string;
  dateDeleted: string | null;
  completed: boolean;
  details: string;
}
