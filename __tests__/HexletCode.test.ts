import { readFileSync } from "node:fs";
import path from "node:path";

import { expect, test } from "vitest";

import HexletCode, { type FormBuilder, type FormOptions, type Template } from "../src/index.js";

const getFixturePath = (name: string): string =>
  path.join(import.meta.dirname, "..", "__fixtures__", name);

const readFixture = (name: string): string => readFileSync(getFixturePath(name), "utf-8").trim();

const template = Object.freeze({ name: "rob", job: "hexlet", gender: "m" });

type Case = {
  name: string;
  template: Template;
  options: FormOptions;
  build: (form: FormBuilder) => void;
  fixture: string;
};

const cases: Case[] = [
  {
    name: "default action and method",
    template,
    options: {},
    build: () => {},
    fixture: "empty-form.html",
  },
  {
    name: "action from url",
    template,
    options: { url: "/users" },
    build: () => {},
    fixture: "form-with-url.html",
  },
  {
    name: "custom method",
    template,
    options: { url: "/users", method: "get" },
    build: () => {},
    fixture: "form-with-method.html",
  },
  {
    name: "text input and textarea",
    template,
    options: { method: "post" },
    build: (f) => {
      f.input("name");
      f.input("job", { as: "textarea" });
    },
    fixture: "input-and-textarea.html",
  },
  {
    name: "extra input attributes",
    template,
    options: {},
    build: (f) => {
      f.input("name", { class: "user-input" });
      f.input("job");
    },
    fixture: "input-attributes.html",
  },
  {
    name: "textarea size override",
    template,
    options: { url: "#" },
    build: (f) => {
      f.input("job", { as: "textarea", rows: 50, cols: 50 });
    },
    fixture: "textarea-size.html",
  },
  {
    name: "escaped values",
    template: { name: '"rob" & co', bio: "<b>hexlet</b>" },
    options: {},
    build: (f) => {
      f.input("name");
      f.input("bio", { as: "textarea" });
    },
    fixture: "escaped-values.html",
  },
  {
    name: "submit with default text",
    template,
    options: { method: "post" },
    build: (f) => {
      f.input("name");
      f.input("job", { as: "textarea" });
      f.submit();
    },
    fixture: "form-with-submit.html",
  },
  {
    name: "submit with custom text",
    template,
    options: { url: "/users" },
    build: (f) => {
      f.input("name");
      f.submit("Wow");
    },
    fixture: "custom-submit.html",
  },
];

test.each(cases)("$name", ({ template: data, options, build, fixture }) => {
  expect(HexletCode.formFor(data, options, build)).toBe(readFixture(fixture));
});

test("throws on a field missing from the template", () => {
  expect(() =>
    HexletCode.formFor(template, {}, (f) => {
      f.input("age");
    }),
  ).toThrow("Field 'age' does not exist in the template.");
});
