export interface TableRow {
  id: string | number; // Data must have ID
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [k: string]: any;
}
