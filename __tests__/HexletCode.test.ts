import { readFileSync } from "node:fs";
import path from "node:path";

import { expect, test } from "vitest";

import HexletCode, { type FormOptions } from "../src/index.js";

const getFixturePath = (name: string): string =>
  path.join(import.meta.dirname, "..", "__fixtures__", name);

const readFixture = (name: string): string => readFileSync(getFixturePath(name), "utf-8").trim();

const template = { name: "rob", job: "hexlet", gender: "m" };

type Case = { name: string; options: FormOptions; fixture: string };

const cases: Case[] = [
  { name: "default action and method", options: {}, fixture: "empty-form.html" },
  { name: "action from url", options: { url: "/users" }, fixture: "form-with-url.html" },
  {
    name: "custom method",
    options: { url: "/users", method: "get" },
    fixture: "form-with-method.html",
  },
];

test.each(cases)("$name", ({ options, fixture }) => {
  expect(HexletCode.formFor(template, options, () => {})).toBe(readFixture(fixture));
});
