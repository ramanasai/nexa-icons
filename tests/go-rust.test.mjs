/**
 * T9.5 — Go and Rust packages for the 650-icon Nexa catalog.
 *
 * Runs the shipped suites plus independent parity probes (tests/fixtures/
 * {go,rust}-probe) that render through the real public APIs and compare with
 * data/icons.json, data/categories.json and sprite.svg.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { p, read, ICONS, SWAPS, CATEGORIES, DATA_PRESETS } from "./helpers.mjs";

const HAS_GO = spawnSync("go", ["version"], { encoding: "utf8" }).status === 0;
const HAS_CARGO = spawnSync("cargo", ["--version"], { encoding: "utf8" }).status === 0;
const run = (bin, args, opts = {}) => spawnSync(bin, args, { encoding: "utf8", timeout: 300_000, ...opts });

/** Canonical dataset + categories as TSV for the Rust probe (no serde). */
function datasetTsv() {
  const lines = [];
  for (const icon of ICONS) {
    lines.push(["ICON", icon.name, icon.kebab, icon.anim.preset, icon.anim.trigger, icon.aliases.join("|"), icon.inner].join("\t"));
  }
  const expected = new Map();
  for (const [from, to, mode] of SWAPS.pairs) expected.set(from, [from, to, mode]);
  for (const [from, to, mode] of SWAPS.pairs) if (!expected.has(to)) expected.set(to, [to, from, mode]);
  for (const [from, to, mode] of expected.values()) lines.push(["PAIR", from, to, mode].join("\t"));
  for (const category of CATEGORIES) {
    lines.push(["CAT", category.id, category.label, category.icons.join("|")].join("\t"));
  }
  return lines.join("\n") + "\n";
}

test("Go: gofmt clean, go vet and go test pass", { skip: !HAS_GO && "go toolchain not installed" }, () => {
  const goFiles = fs.readdirSync(p("go")).filter((file) => file.endsWith(".go")).map((file) => path.join("go", file));
  const fmt = run("gofmt", ["-l", ...goFiles]);
  assert.equal(fmt.status, 0, `gofmt failed: ${fmt.stderr}`);
  assert.equal(fmt.stdout.trim(), "", `gofmt reports unformatted files:\n${fmt.stdout}`);
  const vet = run("go", ["vet", "./..."], { cwd: p("go") });
  assert.equal(vet.status, 0, `go vet failed:\n${vet.stdout}\n${vet.stderr}`);
  const result = run("go", ["test", "./..."], { cwd: p("go") });
  assert.equal(result.status, 0, `go test failed:\n${result.stdout}\n${result.stderr}`);
  assert.match(result.stdout, /^ok\b/m);
});

test("Go: independent parity probe passes (icons, SVG, sprite, swaps, categories)", { skip: !HAS_GO && "go toolchain not installed" }, () => {
  const result = run("go", ["run", "."], { cwd: p("tests/fixtures/go-probe") });
  assert.equal(result.status, 0, `Go probe failed:\n${result.stdout}\n${result.stderr}`);
  const report = JSON.parse(result.stdout.trim().split("\n").filter(Boolean).pop());
  assert.equal(report.ok, true, `Go probe errors:\n${(report.errors || []).slice(0, 20).join("\n")}`);
  assert.ok(report.checks > 1000, `Go probe only ran ${report.checks} checks`);
});

test("Rust: no runtime dependencies and no unsafe code", { skip: !HAS_CARGO && "cargo not installed" }, () => {
  const toml = read("rust/Cargo.toml");
  const deps = toml.split(/^\[dependencies\]$/m)[1];
  if (deps !== undefined) {
    const entries = deps.split(/^\[/m)[0].split("\n").filter((line) => line.trim() && !line.trim().startsWith("#"));
    assert.deepEqual(entries, [], `rust/Cargo.toml declares dependencies:\n${entries.join("\n")}`);
  }
  assert.ok(!/\bunsafe\b/.test(read("rust/src/lib.rs")), "Rust crate must not use unsafe");
});

test("Rust: cargo test + clippy pass", { skip: !HAS_CARGO && "cargo not installed" }, () => {
  const env = { ...process.env, CARGO_TARGET_DIR: path.join(os.tmpdir(), "nexa-qa-cargo") };
  const result = run("cargo", ["test", "--manifest-path", "rust/Cargo.toml"], { cwd: p("."), env });
  assert.equal(result.status, 0, `cargo test failed:\n${result.stdout}\n${result.stderr}`);
  assert.match(result.stdout, /test result: ok/);
  const clippy = run("cargo", ["clippy", "--all-targets", "--manifest-path", "rust/Cargo.toml", "--", "-D", "warnings"], { cwd: p("."), env });
  assert.equal(clippy.status, 0, `cargo clippy failed:\n${clippy.stdout}\n${clippy.stderr}`);
});

test("Rust: independent parity probe passes (icons, SVG, sprite, swaps, categories)", { skip: !HAS_CARGO && "cargo not installed" }, () => {
  const env = { ...process.env, CARGO_TARGET_DIR: path.join(os.tmpdir(), "nexa-qa-cargo") };
  const result = run("cargo", ["run", "--quiet", "--manifest-path", "tests/fixtures/rust-probe/Cargo.toml", "--", "sprite.svg"], {
    cwd: p("."), env, input: datasetTsv(),
  });
  assert.equal(result.status, 0, `Rust probe failed:\n${result.stdout}\n${result.stderr}`);
  assert.match(result.stdout, /^OK \d+ checks/m, `Rust probe output:\n${result.stdout}`);
  const checks = Number(result.stdout.match(/OK (\d+) checks/)[1]);
  assert.ok(checks > 1000, `Rust probe only ran ${checks} checks`);
});

test("generated Go/Rust data keeps the full catalog, presets and categories", () => {
  const goGen = read("go/icons_gen.go");
  const rsGen = read("rust/src/icons_gen.rs");
  for (const preset of DATA_PRESETS) {
    assert.ok(goGen.includes(`"${preset}"`), `go generated data missing preset ${preset}`);
    assert.ok(rsGen.includes(`"${preset}"`), `rust generated data missing preset ${preset}`);
  }
  for (const alias of ["XIcon", "TriangleAlert"]) {
    assert.ok(goGen.includes(`"${alias}"`), `go generated data missing alias ${alias}`);
    assert.ok(rsGen.includes(`"${alias}"`), `rust generated data missing alias ${alias}`);
  }
  const iconCount = ICONS.length;
  assert.equal((goGen.match(/^\t\tName:/gm) || []).length, iconCount, "go generated icon count");
  assert.equal((rsGen.match(/^\s*name: "/gm) || []).length, iconCount, "rust generated icon count");
  for (const category of CATEGORIES) {
    assert.ok(goGen.includes(`"${category.id}"`), `go generated data missing category ${category.id}`);
    assert.ok(rsGen.includes(`"${category.id}"`), `rust generated data missing category ${category.id}`);
  }
});
