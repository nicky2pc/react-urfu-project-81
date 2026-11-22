import type { Field, InputOptions, Template } from "./types.js";

const capitalize = (text: string): string => `${text.charAt(0).toUpperCase()}${text.slice(1)}`;

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

    const { as: type = "text", ...attributes } = options;
    this.items.push({ type, name, label: capitalize(name), value, attributes });
  }

  submit(value = "Save"): void {
    this.items.push({ type: "submit", value });
  }
}
