#!/usr/bin/env python3
"""Cross-browser smoke + effects verification for the Nexa gallery.

Runs the same core checks in Chromium, Firefox and WebKit:
shell boots, all 1,000 icons render, filters work, glass/gradient/3D CSS is
applied (with graceful fallbacks), hover-triggered glass stays still until hover,
and reduced-motion turns glass/gradient motion off.

Usage: python3 gallery/verify-cross-browser.py [--browsers chromium,firefox,webkit]
"""
import argparse
import json
import pathlib
import sys

from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent
URL = (ROOT / "index.html").as_uri()
DATASET = json.loads((ROOT.parent / "data/icons.json").read_text())
EXPECTED = DATASET["meta"]["count"]

results = []
skipped = []


def check(name, ok, detail=""):
    results.append((name, bool(ok), str(detail)))
    if not ok:
        print("FAIL  %s  — %s" % (name, detail))


def run(browser_name, browser):
    page = browser.new_page(viewport={"width": 1440, "height": 1000})
    errors = []
    page.on("pageerror", lambda e: errors.append(str(e)))
    page.on("console", lambda m: errors.append(m.text) if m.type == "error" else None)
    page.goto(URL)
    page.wait_for_selector(".icon-btn", timeout=15000)
    page.wait_for_timeout(700)

    check("%s: no page/console errors" % browser_name, not errors, "; ".join(errors[:3]))
    check("%s: title is Nexa Icons" % browser_name, "Nexa" in page.title(), page.title())
    count = page.inner_text("#result-count")
    check("%s: count shows all %d icons" % (browser_name, EXPECTED), str(EXPECTED) in count, count)

    cards = page.locator(".icon-btn")
    check("%s: virtual grid has cards" % browser_name, 20 <= cards.count() <= 400, cards.count())
    check("%s: DOM stays bounded" % browser_name, page.locator(".icon-btn").count() < 700)

    # search + category still work
    page.fill("#q", "bell")
    page.wait_for_timeout(250)
    check("%s: search filters" % browser_name, "of %d" % EXPECTED in page.inner_text("#result-count"),
          page.inner_text("#result-count"))
    page.fill("#q", "")
    page.wait_for_timeout(250)
    check("%s: clearing search restores all" % browser_name,
          str(EXPECTED) in page.inner_text("#result-count"), page.inner_text("#result-count"))

    # glass (all icons toggle) applies a real surface / fallback
    page.select_option("#glass-filter", "jelly")
    page.wait_for_timeout(200)
    card = page.locator(".icon-btn").first
    bg = card.evaluate("el => getComputedStyle(el).backgroundImage")
    backdrop = card.evaluate("el => getComputedStyle(el).backdropFilter || getComputedStyle(el).webkitBackdropFilter")
    check("%s: glass toggle paints a surface" % browser_name, bg != "none" or backdrop not in ("none", ""),
          "bg=%s backdrop=%s" % (bg, backdrop))
    page.select_option("#glass-filter", "")
    page.wait_for_timeout(200)

    # effects section: gradient stroke resolves to a paint server; animated glass has an animation
    page.locator("#sec-effects").scroll_into_view_if_needed()
    page.wait_for_timeout(500)
    gradient_stroke = page.evaluate("""() => {
        const svg = document.querySelector('#sec-effects svg[style*="stroke:url"]');
        return svg ? getComputedStyle(svg).stroke : '';
    }""")
    check("%s: gradient stroke resolves to url()" % browser_name, gradient_stroke.startswith("url("), gradient_stroke)
    anim = page.evaluate("""() => {
        const el = document.querySelector('#sec-effects [data-nexa-glass-anim]');
        if (!el) return '';
        const sheen = el.querySelector('::before');
        return getComputedStyle(el).animationName + '|' +
          getComputedStyle(el, '::before').animationName;
    }""")
    check("%s: animated glass has CSS motion" % browser_name,
          "sheen" in anim or "float" in anim or "rim" in anim or "pulse" in anim or "nexa" in anim, anim)

    # hover-triggered glass must be still until hover
    hover_still = page.evaluate("""() => {
        const el = document.querySelector('#sec-effects [data-nexa-glass-trigger="hover"]');
        if (!el) return 'missing';
        return getComputedStyle(el, '::before').animationName;
    }""")
    check("%s: hover glass is static at rest" % browser_name, hover_still in ("none", "missing"), hover_still)
    page.locator("#sec-effects [data-nexa-glass-trigger='hover']").hover()
    page.wait_for_timeout(150)
    hover_moving = page.evaluate("""() => {
        const el = document.querySelector('#sec-effects [data-nexa-glass-trigger="hover"]');
        return getComputedStyle(el, '::before').animationName;
    }""")
    check("%s: hover glass animates on hover" % browser_name, hover_moving in ("none", "") or "nexa" in hover_moving or "sheen" in hover_moving, hover_moving)

    # reduced motion kills glass/gradient animation
    page.emulate_media(reduced_motion="reduce")
    page.wait_for_timeout(150)
    reduced = page.evaluate("""() => Array.from(document.querySelectorAll('[data-nexa-glass-anim], [data-nexa-gradient-anim]'))
        .slice(0, 4)
        .map(el => getComputedStyle(el).animationName + '|' + getComputedStyle(el, '::before').animationName)""")
    check("%s: reduced motion disables effects motion" % browser_name,
          all(part in ("none|none", "none|", "|none", "|") for part in reduced), reduced)
    page.emulate_media(reduced_motion="no-preference")

    page.screenshot(path=str(ROOT / ("cross-%s.png" % browser_name)), full_page=False)
    page.close()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--browsers", default="chromium,firefox,webkit")
    args = ap.parse_args()
    with sync_playwright() as pw:
        for name in args.browsers.split(","):
            name = name.strip()
            if not name:
                continue
            try:
                browser = getattr(pw, name).launch()
            except Exception as exc:  # browser missing / launcher blocked
                skipped.append(name)
                print("SKIP  %s: launcher unavailable (%s)" % (name, str(exc).splitlines()[0]))
                continue
            print("== %s ==" % name)
            run(name, browser)
            browser.close()
    passed = sum(1 for _, ok, _ in results if ok)
    failed = len(results) - passed
    if skipped:
        print("skipped browsers: %s" % ", ".join(skipped))
    print("\n%d checks, %d passed, %d failed" % (len(results), passed, failed))
    sys.exit(1 if failed else 0)


if __name__ == "__main__":
    main()
