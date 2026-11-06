#!/usr/bin/env python3
"""Screenshot preview.html in light + dark (+ accent + grayscale states)."""
import pathlib
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "screenshots"
url = (ROOT / "preview.html").resolve().as_uri()

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": 1280, "height": 1000}, device_scale_factor=1.5)
    pg.goto(url)
    pg.wait_for_timeout(150)
    pg.locator("main").screenshot(path=str(OUT / "preview-light.png"))
    pg.click('.seg button[data-theme="dark"]')
    pg.wait_for_timeout(120)
    pg.locator("main").screenshot(path=str(OUT / "preview-dark.png"))
    pg.click('.chip[data-accent="#2563eb"]')
    pg.wait_for_timeout(100)
    pg.locator("main").screenshot(path=str(OUT / "preview-dark-accent.png"))
    pg.check("#grayscale")
    pg.wait_for_timeout(100)
    pg.locator("main").screenshot(path=str(OUT / "preview-dark-accent-grayscale.png"))
    pg.set_viewport_size({"width": 360, "height": 900})
    pg.evaluate("window.scrollTo(0, 0)")
    pg.wait_for_timeout(150)
    pg.screenshot(path=str(OUT / "preview-mobile.png"))
    overflow = pg.evaluate("document.documentElement.scrollWidth - window.innerWidth")
    print("mobile horizontal overflow:", overflow, "px")
    b.close()
print("preview screenshots written")
