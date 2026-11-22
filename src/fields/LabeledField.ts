import escapeHtml from "../escapeHtml.js";
import Tag from "../Tag.js";
import type { Field } from "../types.js";

export default abstract class LabeledField<T extends "text" | "textarea"> {
  constructor(protected readonly field: Field<T>) {}

  render(): string {
    const { name, label, labelAttributes } = this.field;
    const labelTag = new Tag("label", { for: name, ...labelAttributes }, escapeHtml(label));

    return `${labelTag}${this.renderControl()}`;
  }

  protected abstract renderControl(): Tag;
}
