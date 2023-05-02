export type Form = {
  title: string;
  content: string;
  file: string | Blob;
};
export type ChangeFieldType = {
  key: string;
  value?: string;
};
