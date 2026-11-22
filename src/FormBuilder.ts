import type { AttributeValue, Attributes, Field, InputOptions, Template } from "./types.js";

const capitalize = (text: string): string => `${text.charAt(0).toUpperCase()}${text.slice(1)}`;

const toAttributes = (options: Record<string, AttributeValue | Attributes>): Attributes =>
  Object.fromEntries(
    Object.entries(options).filter(
      (entry): entry is [string, AttributeValue] => typeof entry[1] !== "object",
    ),
  );

export default class FormBuilder {
  private readonly items: Field[] = [];

  constructor(private readonly template: Template) {}

  get fields(): readonly Field[] {
    return this.items;
  }

  input(name: string, options: InputOptions = {}): void {
    const value = this.template[name];
    if (value === undefined) {
      throw new Error(`Field '${name}' does not exist in the template.`);
    }

    const { as: type = "text", label = capitalize(name), labelHtml = {}, ...rest } = options;
    this.items.push({
      type,
      name,
      label,
      labelAttributes: labelHtml,
      value,
      attributes: toAttributes(rest),
    });
  }

  submit(value = "Save"): void {
    this.items.push({ type: "submit", value });
  }
}
