import type { Field, InputOptions, Template } from "./types.js";

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
    this.items.push({ type, name, value, attributes });
  }
}
