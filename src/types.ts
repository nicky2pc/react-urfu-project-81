export type AttributeValue = string | number;

export type Attributes = Record<string, AttributeValue>;

export type Template = Record<string, AttributeValue>;

export type FormOptions = Attributes & {
  url?: string;
  method?: string;
};

export type InputOptions = {
  as?: "text" | "textarea";
  label?: string;
  labelHtml?: Attributes;
  [attribute: string]: AttributeValue | Attributes;
};

type InputData = {
  name: string;
  label: string;
  labelAttributes: Attributes;
  value: AttributeValue;
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
