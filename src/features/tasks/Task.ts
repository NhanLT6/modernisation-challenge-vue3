export interface Task {
  id?: number;
  dateCreated: Date;
  dateModified: Date;
  dateDeleted?: Date;
  completed?: boolean;
  details: string;
}
