import Submit from "./fields/Submit.js";
import Textarea from "./fields/Textarea.js";
import TextInput from "./fields/TextInput.js";
import Tag from "./Tag.js";
import type { Field, FieldType, Form } from "./types.js";

type FieldRenderer<T extends FieldType> = new (field: Field<T>) => { render(): string };

const renderers: { [T in FieldType]: FieldRenderer<T> } = {
  text: TextInput,
  textarea: Textarea,
  submit: Submit,
};

const renderField = <T extends FieldType>(field: Field<T>): string =>
  new renderers[field.type](field).render();

const renderForm = ({ attributes, fields }: Form): string =>
  new Tag("form", attributes, fields.map(renderField).join("")).toString();

export default renderForm;
