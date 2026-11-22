import escapeHtml from "../escapeHtml.js";
import Tag from "../Tag.js";
import LabeledField from "./LabeledField.js";

const defaultAttributes = { cols: 20, rows: 40 };

export default class Textarea extends LabeledField<"textarea"> {
  protected renderControl(): Tag {
    const { name, value, attributes } = this.field;
    const textareaAttributes = { ...defaultAttributes, name, ...attributes };

    return new Tag("textarea", textareaAttributes, escapeHtml(String(value)));
  }
}
