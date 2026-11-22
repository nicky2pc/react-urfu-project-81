import escapeHtml from "./escapeHtml.js";
import type { Attributes } from "./types.js";

const singleTags = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "source",
  "track",
  "wbr",
]);

export default class Tag {
  constructor(
    private readonly name: string,
    private readonly attributes: Attributes = {},
    private readonly body = "",
  ) {}

  toString(): string {
    const attributes = Object.entries(this.attributes)
      .map(([key, value]) => ` ${key}="${escapeHtml(String(value))}"`)
      .join("");
    const openingTag = `<${this.name}${attributes}>`;

    return singleTags.has(this.name) ? openingTag : `${openingTag}${this.body}</${this.name}>`;
  }
}
