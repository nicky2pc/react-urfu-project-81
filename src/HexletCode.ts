import FormBuilder from "./FormBuilder.js";
import Tag from "./Tag.js";
import type { FormOptions, Template } from "./types.js";

export default class HexletCode {
  static formFor(
    template: Template,
    options: FormOptions,
    build: (form: FormBuilder) => void,
  ): string {
    const { url = "#", method = "post", ...attributes } = options;
    build(new FormBuilder());

    return new Tag("form", { action: url, method, ...attributes }).toString();
  }
}
