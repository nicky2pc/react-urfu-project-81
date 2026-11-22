import Tag from "../Tag.js";
import LabeledField from "./LabeledField.js";

export default class TextInput extends LabeledField<"text"> {
  protected renderControl(): Tag {
    const { name, value, attributes } = this.field;

    return new Tag("input", { name, type: "text", value, ...attributes });
  }
}
