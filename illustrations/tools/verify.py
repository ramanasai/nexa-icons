#!/usr/bin/env python3
"""Verify the illustrated set: XML, design-system invariants, budgets, manifest, preview."""
import json, pathlib, re, subprocess, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
FILE_MAX = 4 * 1024
TOTAL_MAX = 30 * 1024
VIEWBOX = "0 0 64 64"

failures = []
def fail(msg):
    failures.append(msg)

# ---- collect files
svgs = sorted(ROOT.glob("*.svg"))
if not 10 <= len(svgs) <= 12:
    fail(f"expected 10-12 illustrations, found {len(svgs)}")

FORBIDDEN = [
    # xmlns is a namespace name, not a fetch; everything else is external.
    (r"https?://(?!www\.w3\.org/)", "external URL"),
    (r"url\(", "url() reference"),
    (r"<script", "script element"),
    (r"<image\b", "embedded image"),
    (r"<foreignObject\b", "foreignObject"),
    (r"@font-face", "font dependency"),
    (r"data:", "data URI"),
    (r"#[0-9a-fA-F]{3,8}\b", "hard-coded hex color"),
    (r"\brgba?\(", "rgb() color"),
    (r"\bhsla?\(", "hsl() color"),
    (r"<style\b", "embedded stylesheet"),
    (r"\bstyle=", "inline style"),
    (r"\bhref=", "href reference"),
]
ALLOWED = {"currentColor", "none"}

size_total = 0
ids = set()
for f in svgs:
    text = f.read_text()
    size = len(text.encode())
    size_total += size
    if size > FILE_MAX:
        fail(f"{f.name}: {size} B exceeds {FILE_MAX} B")
    if f.stem in ids:
        fail(f"{f.name}: duplicate id")
    ids.add(f.stem)
    # xmllint
    r = subprocess.run(["xmllint", "--noout", str(f)], capture_output=True, text=True)
    if r.returncode != 0:
        fail(f"{f.name}: xmllint failed: {r.stderr.strip()[:160]}")
    # root svg + viewBox
    if not text.lstrip().startswith("<svg"):
        fail(f"{f.name}: root is not <svg>")
    if f'viewBox="{VIEWBOX}"' not in text:
        fail(f"{f.name}: viewBox is not {VIEWBOX}")
    if 'width="64"' not in text or 'height="64"' not in text:
        fail(f"{f.name}: missing intrinsic 64px width/height")
    if 'fill="none"' not in text:
        fail(f"{f.name}: root fill=none missing")
    # forbidden constructs
    for pattern, label in FORBIDDEN:
        if re.search(pattern, text):
            fail(f"{f.name}: contains {label}")
    # color values must be currentColor / none or var(--nexa-ill-*)
    colors = re.findall(r'(?:stroke|fill)="([^"]+)"', text)
    for value in colors:
        if value in ALLOWED:
            continue
        if value.startswith("var(--nexa-ill-"):
            continue
        fail(f"{f.name}: unexpected color value {value!r}")

if size_total > TOTAL_MAX:
    fail(f"total size {size_total} B exceeds {TOTAL_MAX} B")

# ---- manifest
try:
    manifest = json.loads((ROOT / "manifest.json").read_text())
except Exception as exc:  # noqa: BLE001
    fail(f"manifest.json is not valid JSON: {exc}")
    manifest = []
REQUIRED = {"id", "title", "description", "tags", "file", "viewBox", "themes", "usage"}
USAGES = {"empty-state", "feature", "onboarding"}
seen = set()
for entry in manifest:
    missing = REQUIRED - set(entry)
    if missing:
        fail(f"manifest entry {entry.get('id')}: missing {sorted(missing)}")
        continue
    if entry["id"] in seen:
        fail(f"manifest duplicate id {entry['id']}")
    seen.add(entry["id"])
    if entry["viewBox"] != VIEWBOX:
        fail(f"{entry['id']}: manifest viewBox {entry['viewBox']!r}")
    if entry["usage"] not in USAGES:
        fail(f"{entry['id']}: invalid usage {entry['usage']!r}")
    if not isinstance(entry["tags"], list) or not entry["tags"]:
        fail(f"{entry['id']}: tags must be a non-empty array")
    if entry["themes"] != ["light", "dark"]:
        fail(f"{entry['id']}: themes must be ['light','dark']")
    path = ROOT / entry["file"]
    if not path.exists():
        fail(f"{entry['id']}: missing file {entry['file']}")
    elif path.stem != entry["id"]:
        fail(f"{entry['id']}: file stem {path.stem!r} != id")
if set(ids) != seen:
    fail(f"manifest/files mismatch: files without entry {sorted(ids - seen)}, entries without file {sorted(seen - ids)}")

# ---- preview + readme
preview_path = ROOT / "preview.html"
if not preview_path.exists():
    fail("preview.html is missing")
else:
    preview = preview_path.read_text()
    if re.search(r"https?://", preview):
        fail("preview.html references an external URL")
    if re.search(r"<(?:script|link|img)\b[^>]*(?:src|href)=\"(?!#)", preview):
        fail("preview.html loads external assets")
    for entry in manifest:
        if f'id="ill-{entry["id"]}"' not in preview:
            fail(f"preview.html missing symbol for {entry['id']}")
    for size in ("48", "96", "192"):
        if f'class="ill s{size}"' not in preview:
            fail(f"preview.html missing size {size}")

readme = ROOT / "README.md"
if not readme.exists():
    fail("README.md is missing")
else:
    body = readme.read_text()
    for entry in manifest:
        if entry["id"] not in body:
            fail(f"README.md does not mention {entry['id']}")

# ---- report
print(f"illustrated set — {len(svgs)} SVGs, {size_total} B total ({size_total / 1024:.1f} KB)")
for f in svgs:
    print(f"  {f.name:<16} {len(f.read_text().encode()):>5} B")
print(f"  manifest          {len(manifest)} entries")
print(f"  preview.html      {'ok' if preview_path.exists() else 'MISSING'}")
if failures:
    print(f"\nFAIL ({len(failures)} problem(s)):")
    for msg in failures:
        print("  ✗", msg)
    sys.exit(1)
print("\nPASS — all checks green")
