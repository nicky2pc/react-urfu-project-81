import { expect, test } from "vitest";

import Tag from "../src/Tag.js";

test.each([
  { tag: new Tag("br"), expected: "<br>" },
  { tag: new Tag("img", { src: "path/to/image" }), expected: '<img src="path/to/image">' },
  {
    tag: new Tag("input", { type: "submit", value: "Save" }),
    expected: '<input type="submit" value="Save">',
  },
  { tag: new Tag("label", {}, "Email"), expected: "<label>Email</label>" },
  {
    tag: new Tag("label", { for: "email" }, "Email"),
    expected: '<label for="email">Email</label>',
  },
  { tag: new Tag("div"), expected: "<div></div>" },
  { tag: new Tag("input", { value: 'a"b<&' }), expected: '<input value="a&quot;b&lt;&amp;">' },
])("$expected", ({ tag, expected }) => {
  expect(tag.toString()).toBe(expected);
});
