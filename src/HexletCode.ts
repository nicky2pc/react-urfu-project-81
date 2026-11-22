import FormBuilder from "./FormBuilder.js";
import renderForm from "./renderForm.js";
import type { FormOptions, Template } from "./types.js";

export default class HexletCode {
  static formFor(
    template: Template,
    options: FormOptions,
    build: (form: FormBuilder) => void,
  ): string {
    const { url = "#", method = "post", ...attributes } = options;
    const form = new FormBuilder(template);
    build(form);

    return renderForm({ attributes: { action: url, method, ...attributes }, fields: form.fields });
  }
}
