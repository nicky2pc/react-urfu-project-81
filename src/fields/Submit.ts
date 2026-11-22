import Tag from "../Tag.js";
import type { Field } from "../types.js";

export default class Submit {
  constructor(private readonly field: Field<"submit">) {}

  render(): string {
    return new Tag("input", { type: "submit", value: this.field.value }).toString();
  }
}
