import FormBuilder from "./FormBuilder.js";
import renderForm from "./renderForm.js";
import type { FormOptions, Template } from "./types.js";

export default class HexletCode {
  static formFor(
    template: Template,
    options: FormOptions,
    build: (form: FormBuilder) => void,
  ): string {
    const { url = "#", ...attributes } = options;
    const form = new FormBuilder(template);
    build(form);

    return renderForm({
      attributes: { ...attributes, action: url, method: attributes.method ?? "post" },
      fields: form.fields,
    });
  }
}
