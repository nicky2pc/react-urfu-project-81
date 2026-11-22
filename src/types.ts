export type Attributes = Record<string, string | number>;

export type Template = Record<string, string | number>;

export type FormOptions = Attributes & {
  url?: string;
  method?: string;
};
