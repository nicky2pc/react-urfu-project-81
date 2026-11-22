export type Attributes = Record<string, string | number>;

export type Template = Record<string, string | number>;

export type FormOptions = Attributes & {
  url?: string;
  method?: string;
};

export type InputOptions = Attributes & {
  as?: "text" | "textarea";
};

type InputData = {
  name: string;
  label: string;
  value: string | number;
  attributes: Attributes;
};

type FieldData = {
  text: InputData;
  textarea: InputData;
  submit: { value: string };
};

export type FieldType = keyof FieldData;

export type Field<T extends FieldType = FieldType> = {
  [K in T]: { type: K } & FieldData[K];
}[T];

export type Form = {
  attributes: Attributes;
  fields: readonly Field[];
};
