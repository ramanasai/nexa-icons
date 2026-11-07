#!/usr/bin/env python3
"""Visual smoke + bbox snapshots for the Nexa 2.0 prototype (Playwright).

Writes PNGs to design/nexa-2.0/screenshots/ (gitignored) and prints bbox
anomalies. Visual snapshots are evidence for manual review, not a pixel gate.
"""
import json
import pathlib
import sys
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parents[2]
OUT = ROOT / "design/nexa-2.0"
SHOTS = OUT / "screenshots"
SHOTS.mkdir(exist_ok=True)
catalog = json.loads((OUT / "catalog.json").read_text())
problems = []

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1200, "height": 800}, device_scale_factor=2)
    for icon in catalog["icons"]:
        for variant in ("outline", "solid", "duotone"):
            svg = icon["variants"][variant]
            page.set_content(
                '<body style="margin:0;background:#fafafa;display:grid;place-items:center;height:100vh">'
                + svg.replace('width="24" height="24"', 'width="192" height="192"')
                + "</body>"
            )
            boxes = page.eval_on_selector_all(
                "svg > *",
                """els => els.map(e => { try { const b=e.getBBox(); return {x:b.x,y:b.y,w:b.width,h:b.height}; } catch { return null; } })""",
            )
            valid = [b for b in boxes if b and (b["w"] > 0 or b["h"] > 0)]
            if not valid:
                problems.append(f"{icon['name']}/{variant}: no visible geometry")
                continue
            x0 = min(b["x"] for b in valid); x1 = max(b["x"] + b["w"] for b in valid)
            y0 = min(b["y"] for b in valid); y1 = max(b["y"] + b["h"] for b in valid)
            if x0 < 0.5 or y0 < 0.5 or x1 > 23.5 or y1 > 23.5:
                problems.append(f"{icon['name']}/{variant}: bbox {x0:.2f},{y0:.2f} → {x1:.2f},{y1:.2f}")
            if max(x1 - x0, y1 - y0) < 10:
                problems.append(f"{icon['name']}/{variant}: bbox too small {(x1-x0):.2f}×{(y1-y0):.2f}")
            page.screenshot(path=str(SHOTS / f"{icon['kebab']}-{variant}.png"))
    page.set_content((OUT / "contact-sheet.html").read_text())
    page.wait_for_timeout(200)
    page.screenshot(path=str(SHOTS / "contact-sheet.png"), full_page=True)
    browser.close()

print(f"snapshots: {len(catalog['icons']) * 3} icons + contact sheet -> {SHOTS}")
if problems:
    print("bbox warnings:")
    for item in problems:
        print(" -", item)
    sys.exit(1)
print("bbox: OK")
