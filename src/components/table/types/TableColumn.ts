import { ThHTMLAttributes } from 'vue';

export interface TableColumn {
  field: string;
  title?: string;
  thProps?: Partial<ThHTMLAttributes>; // HTML props passed to th element of table
}
