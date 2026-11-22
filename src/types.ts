export type Attributes = Record<string, string | number>;

export type Template = Record<string, string | number>;

export type FormOptions = Attributes & {
  url?: string;
  method?: string;
};

export type FieldType = "text" | "textarea";

export type InputOptions = Attributes & {
  as?: FieldType;
};

export type Field = {
  type: FieldType;
  name: string;
  value: string | number;
  attributes: Attributes;
};

export type Form = {
  attributes: Attributes;
  fields: readonly Field[];
};
