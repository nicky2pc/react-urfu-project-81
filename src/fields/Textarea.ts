import escapeHtml from "../escapeHtml.js";
import Tag from "../Tag.js";
import type { Field } from "../types.js";

const defaultAttributes = { cols: 20, rows: 40 };

export default class Textarea {
  constructor(private readonly field: Field) {}

  render(): string {
    const { name, value, attributes } = this.field;
    const textareaAttributes = { ...defaultAttributes, name, ...attributes };

    return new Tag("textarea", textareaAttributes, escapeHtml(String(value))).toString();
  }
}
