import Tag from "../Tag.js";
import type { Field } from "../types.js";

export default class TextInput {
  constructor(private readonly field: Field) {}

  render(): string {
    const { name, value, attributes } = this.field;

    return new Tag("input", { name, type: "text", value, ...attributes }).toString();
  }
}
