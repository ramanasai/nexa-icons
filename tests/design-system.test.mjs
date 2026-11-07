/** Nexa 2.0 design-system prototype and visual-QA pipeline. */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { read, p } from "./helpers.mjs";

const catalog = JSON.parse(fs.readFileSync(p("design/nexa-2.0/catalog.json"), "utf8"));
const qa = JSON.parse(fs.readFileSync(p("design/nexa-2.0/qa-report.json"), "utf8"));

test("Nexa 2.0 prototype has 20 icons and 3 designed variants", () => {
  assert.equal(catalog.icons.length, 20);
  assert.deepEqual(catalog.meta.variants, ["outline", "solid", "duotone"]);
  assert.equal(catalog.meta.grid, 24);
  for (const icon of catalog.icons) {
    for (const variant of ["outline", "solid", "duotone"]) {
      assert.match(icon.variants[variant], /viewBox="0 0 24 24"/, `${icon.name}/${variant}: 24 grid`);
      assert.ok(icon.variants[variant].length < 2600, `${icon.name}/${variant}: complexity budget`);
    }
  }
});

test("Nexa 2.0 design system is documented with audit and migration notes", () => {
  for (const file of [
    "docs/nexa-2.0-audit.md",
    "docs/nexa-2.0-design-system.md",
    "docs/nexa-2.0.md",
    "docs/changelog-v2.md",
    "design/nexa-2.0/README.md",
  ]) {
    const text = read(file);
    assert.match(text, /Nexa (Icons )?2\.0/);
  }
  assert.match(read("docs/nexa-2.0-design-system.md"), /Optical stroke table/);
  assert.match(read("docs/nexa-2.0-design-system.md"), /designed filled geometry/i);
});

test("Nexa 2.0 contact sheets and Studio prototype exist", () => {
  for (const file of ["design/nexa-2.0/comparison.html", "design/nexa-2.0/contact-sheet.html", "design/nexa-2.0/catalog-categories.html", "gallery/v2.html", "gallery/nexa2.data.js"]) assert.ok(fs.existsSync(p(file)), file);
  assert.match(read("gallery/v2.html"), /Nexa 2\.0 Studio/);
  assert.match(read("gallery/v2.html"), /nexa2\.data\.js/);
});

test("Nexa 2.0 structural QA is clean", () => {
  assert.equal(qa.status, "pass");
  assert.equal(qa.icons, 20);
  assert.equal(qa.variants, 3);
  assert.equal(qa.failures.length, 0);
});
