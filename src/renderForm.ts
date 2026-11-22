import Textarea from "./fields/Textarea.js";
import TextInput from "./fields/TextInput.js";
import Tag from "./Tag.js";
import type { Field, Form } from "./types.js";

const renderers = {
  text: TextInput,
  textarea: Textarea,
};

const renderField = (field: Field): string => new renderers[field.type](field).render();

const renderForm = ({ attributes, fields }: Form): string =>
  new Tag("form", attributes, fields.map(renderField).join("")).toString();

export default renderForm;
