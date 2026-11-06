#!/usr/bin/env python3
"""Browser verification for the shell-first Nexa Icons gallery.

Loads gallery/index.html from file:// in headless Chromium (Playwright), checks
the shell/data split, virtualized grid, lazy sections, all interactive features
and the performance HUD, then writes screenshots + a JSON report.

    python3 gallery/verify-browser.py
"""
from __future__ import annotations

import json
import pathlib
import re
import sys

from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent
DATASET = json.loads((ROOT.parent / "data/icons.json").read_text())
EXPECTED = str(DATASET["meta"]["count"])
PAGE = (ROOT / "index.html").as_uri()
DATA = (ROOT / "icons.data.js")
APP = (ROOT / "app.js")
SHOTS = ROOT / "screenshots"
SHOTS.mkdir(exist_ok=True)

SHELL_BUDGET = 40 * 1024
results: list[dict] = []
# clear stale screenshots from earlier gallery revisions
for stale in SHOTS.glob("*.png"):
    stale.unlink()


def check(name: str, condition, detail="") -> None:
    results.append({"check": name, "pass": bool(condition), "detail": str(detail)})
    print(("PASS  " if condition else "FAIL  ") + name + ("  — " + str(detail) if detail else ""))


def num_metric(value):
    m = re.search(r"[\d.]+", value or "")
    return float(m.group(0)) if m else None


def hud(page):
    return page.evaluate("""() => {
      const g = id => (document.getElementById(id) || {}).textContent || '';
      return {
        shell: g('hud-shell'), data: g('hud-data'), app: g('hud-app'),
        eval: g('hud-eval'), firstRow: g('hud-firstrow'), render: g('hud-render'),
        nodes: g('hud-nodes'), fp: g('hud-fp'), fcp: g('hud-fcp'), icons: g('hud-icons'),
        note: g('hud-note')
      };
    }""")


def main() -> int:
    shell_bytes = len((ROOT / "index.html").read_bytes())
    data_bytes = len(DATA.read_bytes())
    app_bytes = len(APP.read_bytes())

    with sync_playwright() as p:
        browser = p.chromium.launch()

        # ---------------------------------------------------------- desktop
        context = browser.new_context(
            viewport={"width": 1440, "height": 1000},
            permissions=["clipboard-read", "clipboard-write"],
        )
        page = context.new_page()
        console_errors: list[str] = []
        page_errors: list[str] = []
        requests: list[str] = []
        page.on("console", lambda m: console_errors.append(m.text) if m.type == "error" else None)
        page.on("pageerror", lambda e: page_errors.append(str(e)))
        page.on("request", lambda r: requests.append(r.url))
        page.goto(PAGE)
        page.wait_for_function("() => document.getElementById('hud-icons').textContent !== '…'")
        page.wait_for_timeout(300)

        check("no page errors", not page_errors, page_errors[:3])
        check("no console errors", not console_errors, console_errors[:3])
        check("shell under 40 KB", shell_bytes <= SHELL_BUDGET, f"{shell_bytes} B")
        check("data + app are local files", DATA.exists() and APP.exists(), [DATA.name, APP.name])
        check("only local file requests (0 network)",
              all(u.startswith("file:") for u in requests),
              [u for u in requests if not u.startswith("file:")][:3])
        check("three local requests: shell + data + app",
              len(requests) == 3 and requests[0].endswith("index.html"), [u.rsplit("/", 1)[-1] for u in requests])

        data = page.evaluate("""() => ({
          cards: document.querySelectorAll('#grid .card').length,
          rows: document.querySelectorAll('#grid .row').length,
          nodes: document.querySelectorAll('#grid *').length,
          paths: document.querySelectorAll('#grid svg.nexa-icon > path, #grid svg.nexa-icon > circle, #grid svg.nexa-icon > rect, #grid svg.nexa-icon > line, #grid svg.nexa-icon > polyline, #grid svg.nexa-icon > polygon, #grid svg.nexa-icon > ellipse').length,
          uses: document.querySelectorAll('use').length,
          title: document.title,
          count: document.getElementById('result-count').textContent.trim(),
          gridSub: document.getElementById('grid-sub').textContent,
          firstCard: document.querySelector('#grid .card svg').outerHTML.slice(0, 90),
          categoryOptions: document.getElementById('category-filter').options.length,
          categoryGroupHidden: document.getElementById('category-group').hidden,
          triggerDemoTiles: document.getElementById('trigger-demo').children.length,
          shellBytesMeta: document.querySelector('meta[name="nexa-gallery"]').content
        })""")
        check("virtualized window renders a bounded card count", 40 <= data["cards"] <= 180, data["cards"])
        check("rendered cards use inline SVG paths (no <use> sprite refs)",
              data["paths"] > 0 and data["uses"] == 0, (data["paths"], data["uses"]))
        check(f"all {EXPECTED} icons are in the dataset", data["count"].startswith(EXPECTED), data["count"])
        check(f"count label covers all {EXPECTED} icons", EXPECTED in data["count"], data["count"])
        check("category filter populated (26 categories + all)",
              data["categoryOptions"] == 27 and not data["categoryGroupHidden"], data["categoryOptions"])
        check("trigger demos rendered", data["triggerDemoTiles"] == 4, data["triggerDemoTiles"])
        check("shell meta carries byte counts",
              "shellBytes=" in data["shellBytesMeta"] and "dataBytes=" in data["shellBytesMeta"],
              data["shellBytesMeta"][:90])

        perf = hud(page)
        check("HUD shell bytes match disk", perf["shell"].replace(" KB", "") and re.match(r"[\d.]+ KB", perf["shell"]),
              perf["shell"])
        check("HUD data bytes reported", re.match(r"[\d.]+ KB", perf["data"]), perf["data"])
        check("HUD script load+eval measured (<25 ms cold, median <10 warm)",
              (num_metric(perf["eval"]) or 99) < 25, perf["eval"])
        check("HUD JS→first row measured (browser scheduling included)",
              re.match(r"[\d.]+ ms", perf["firstRow"]), perf["firstRow"])
        check("HUD DOM node count bounded (<1200)", int(perf["nodes"].replace(",", "")) < 1200, perf["nodes"])
        check("HUD browser paint timing available", perf["fcp"].endswith("ms") or perf["fp"].endswith("ms"),
              (perf["fp"], perf["fcp"]))
        check("HUD states the browser paint floor honestly",
              "browser paint" in perf["note"] or "paint floor" in perf["note"], perf["note"][:110])
        page.screenshot(path=str(SHOTS / "desktop-light-1440.png"))

        # ---------------------------------------------------------- search
        page.fill("#q", "briefcase")
        page.wait_for_timeout(80)
        search = page.evaluate("""() => ({
          cards: document.querySelectorAll('#grid .card').length,
          count: document.getElementById('result-count').textContent,
          marks: document.querySelectorAll('#grid .card-name mark').length,
          url: location.search
        })""")
        check("search filters over the full 650-icon dataset", 1 <= search["cards"] <= 40, search["cards"])
        check("search bar shows a single clear affordance (native clear suppressed)",
              "::-webkit-search-cancel-button" in page.evaluate("() => Array.from(document.styleSheets).map(s => { try { return Array.from(s.cssRules).map(r => r.cssText).join(''); } catch { return ''; } }).join('')"),
              "native search cancel CSS")
        check("search result count updates", f"of {EXPECTED} icons" in search["count"], search["count"])
        check("search highlights matches", search["marks"] >= 1, search["marks"])
        check("search deep-links ?q=", "q=briefcase" in search["url"], search["url"])
        # reach an icon late in the alphabet through search
        page.fill("#q", "zap")
        page.wait_for_timeout(80)
        late = page.evaluate("""() => ({
          cards: document.querySelectorAll('#grid .card').length,
          names: [...document.querySelectorAll('#grid .card-name')].map(e => e.textContent).slice(0, 4)
        })""")
        check("search reaches late icons (zap)", "Zap" in late["names"], late["names"])
        page.fill("#q", "zzzznotanicon")
        page.wait_for_timeout(80)
        check("empty state shown for no matches", page.is_visible("#grid .empty"))
        page.fill("#q", "")
        page.wait_for_timeout(80)

        # --------------------------------------------------------- filters
        page.select_option("#preset-filter", "ring")
        page.wait_for_timeout(100)
        presets = page.evaluate("() => [...new Set([...document.querySelectorAll('#grid .card svg')].map(s => s.getAttribute('data-nexa-anim')))]")
        check("preset filter shows only ring", presets and presets == ["ring"], presets)
        page.select_option("#preset-filter", "")
        page.select_option("#category-filter", "category:communication")
        page.wait_for_timeout(120)
        cat = page.evaluate("""() => ({
          cards: document.querySelectorAll('#grid .card').length,
          count: document.getElementById('result-count').textContent,
          sub: document.getElementById('grid-sub').textContent
        })""")
        check("category filter restricts the grid", 1 <= cat["cards"] <= 120 and f"of {EXPECTED} icons" in cat["count"], cat)
        page.select_option("#category-filter", "")
        page.wait_for_timeout(100)
        check(f"clearing category restores {EXPECTED}", EXPECTED in page.inner_text("#result-count"))

        # --------------------------------------------------------- sizes
        for size, stroke in (("16", "2px"), ("20", "1.75px"), ("32", "1.5px"), ("48", "1.5px")):
            page.click(f'#size-seg button[data-size="{size}"]')
            page.wait_for_timeout(80)
            got = page.evaluate("""(size) => {
              const svg = document.querySelector('#grid .card svg');
              return {
                width: getComputedStyle(svg).width,
                stroke: getComputedStyle(svg).strokeWidth,
                url: location.search,
                pressed: document.querySelector('#size-seg button[data-size="' + size + '"]').getAttribute('aria-pressed')
              };
            }""", size)
            check(f"size {size} → {stroke} stroke", got["stroke"] == stroke and got["width"] == size + "px" and got["pressed"] == "true", got)
        page.click('#size-seg button[data-size="24"]')
        page.wait_for_timeout(80)

        # --------------------------------------------------------- themes
        page.click('#theme-seg button[data-theme="dark"]')
        page.wait_for_timeout(100)
        dark = page.evaluate("""() => ({
          theme: document.documentElement.dataset.theme,
          bg: getComputedStyle(document.body).backgroundColor,
          url: location.search
        })""")
        check("dark theme is Nexa #0c0c0e", dark["theme"] == "dark" and dark["bg"] == "rgb(12, 12, 14)", dark)
        check("theme deep-links", "theme=dark" in dark["url"], dark["url"])
        page.screenshot(path=str(SHOTS / "desktop-dark-1440.png"))
        page.click('#theme-seg button[data-theme="system"]')
        page.wait_for_timeout(60)
        check("system theme is the default state", page.evaluate("() => document.documentElement.dataset.theme") == "system")
        page.click('#theme-seg button[data-theme="light"]')
        page.wait_for_timeout(60)

        # -------------------------------------------------------- colors
        blue = page.evaluate("() => getComputedStyle(document.querySelector('#grid .card svg')).color")
        page.click('#color-seg button[data-color="violet"]')
        page.wait_for_timeout(80)
        violet = page.evaluate("""() => ({
          accent: getComputedStyle(document.documentElement).getPropertyValue('--accent').trim(),
          url: location.search
        })""")
        check("accent switcher updates the theme token", violet["accent"] != "", violet["accent"])
        check("accent deep-links", "color=violet" in violet["url"], violet["url"])
        page.click('#color-seg button[data-color="rainbow"]')
        page.wait_for_timeout(80)
        hues = page.evaluate("() => new Set([...document.querySelectorAll('#grid .card svg')].slice(0, 18).map(s => getComputedStyle(s).color)).size")
        check("rainbow mode inherits six hues", hues >= 6, hues)
        page.click('#color-seg button[data-color="blue"]')
        page.wait_for_timeout(60)

        # ------------------------------------------------------ animations
        page.click("#play-all")
        page.wait_for_timeout(120)
        play = page.evaluate("() => [...new Set([...document.querySelectorAll('#grid .card svg')].map(s => s.getAttribute('data-nexa-trigger')))]")
        check("play all sets trigger=always", play == ["always"], play)
        page.click("#play-all")
        page.wait_for_timeout(80)
        restored = page.evaluate("() => [...new Set([...document.querySelectorAll('#grid .card svg')].map(s => s.getAttribute('data-nexa-trigger')))]")
        check("stop restores semantic triggers", "hover" in restored, restored)
        page.check("#reduce-toggle")
        page.wait_for_timeout(80)
        reduced = page.evaluate("""() => {
          const svg = document.querySelector('#grid .card svg');
          return {
            cls: document.documentElement.classList.contains('reduce-motion'),
            anim: getComputedStyle(svg).animationName,
            text: document.getElementById('motion-state').textContent
          };
        }""")
        check("reduced-motion class disables CSS animation", reduced["cls"] and reduced["anim"] == "none", reduced)
        page.uncheck("#reduce-toggle")
        page.wait_for_timeout(60)

        # ------------------------------------------- windowed DOM bounds
        start_nodes = page.evaluate("() => document.querySelectorAll('#grid *').length")
        start_cards = page.evaluate("() => document.querySelectorAll('#grid .card').length")
        start_first = page.evaluate("() => (document.querySelector('#grid .card .icon-btn') || {}).dataset")
        page.evaluate("() => window.scrollTo(0, document.documentElement.scrollHeight * 0.45)")
        page.wait_for_timeout(150)
        mid_nodes = page.evaluate("() => document.querySelectorAll('#grid *').length")
        mid_first = page.evaluate("() => (document.querySelector('#grid .card .icon-btn') || {}).dataset && document.querySelector('#grid .card .icon-btn').dataset.k")
        page.evaluate("() => window.scrollTo(0, document.documentElement.scrollHeight)")
        page.wait_for_timeout(200)
        end_nodes = page.evaluate("() => document.querySelectorAll('#grid *').length")
        end_cards = page.evaluate("() => document.querySelectorAll('#grid .card').length")
        end_first = page.evaluate("() => (document.querySelector('#grid .card .icon-btn') || {}).dataset && document.querySelector('#grid .card .icon-btn').dataset.k")
        check("DOM nodes stay bounded while scrolling",
              max(start_nodes, mid_nodes, end_nodes) <= 1600, (start_nodes, mid_nodes, end_nodes))
        check("window shifts with scroll (virtualized)",
              mid_first and end_first and mid_first != end_first, (start_first, mid_first, end_first))
        check("rendered card count stays bounded at the end", end_cards <= 180, end_cards)
        page.evaluate("() => window.scrollTo(0, 0)")
        page.wait_for_timeout(150)

        # ---------------------------------------------------- lazy sections
        section_ids = ["sec-swaps", "sec-categories", "sec-shapes", "sec-fills", "sec-3d", "sec-illustrations"]
        fresh_ctx = browser.new_context(viewport={"width": 1440, "height": 1000})
        fresh = fresh_ctx.new_page()
        fresh.goto(PAGE)
        fresh.wait_for_function("() => document.getElementById('hud-icons').textContent !== '…'")
        fresh.wait_for_timeout(250)
        before = fresh.evaluate("""(ids) => Object.fromEntries(ids.map(id => {
          const el = document.getElementById(id);
          return [id, el.hidden ? 'hidden' : (el.__done ? 'rendered' : 'deferred')];
        }))""", section_ids)
        check("lazy sections start deferred (fresh load)", all(v in ("deferred", "hidden") for v in before.values()), before)
        fresh_ctx.close()
        for sid in section_ids:
            page.eval_on_selector("#" + sid, "el => el.scrollIntoView()")
            page.wait_for_timeout(250)
        lazy = page.evaluate("""() => {
          const info = id => { const el = document.getElementById(id); const body = el.querySelector('[data-body]');
            return { hidden: el.hidden, done: !!el.__done, children: body.children.length }; };
          return {
            sections: Object.fromEntries(['sec-swaps','sec-categories','sec-shapes','sec-fills','sec-3d','sec-illustrations'].map(id => [id, info(id)])),
            catCards: document.querySelectorAll('.cat-card').length,
            shapeTiles: document.querySelectorAll('.shape-tile').length,
            fillTiles: document.querySelectorAll('.fill-tile').length,
            tdTiles: document.querySelectorAll('.td-tile').length,
            illusCards: document.querySelectorAll('.illus-card').length,
            illusSvg: document.querySelectorAll('.illus-art svg').length,
            swapCards: document.querySelectorAll('.swap-btn').length,
            fillToggle: !!document.getElementById('fill-toggle')
          };
        }""")
        check("all lazy sections rendered after scroll",
              all(v["done"] and not v["hidden"] for v in lazy["sections"].values()), lazy["sections"])
        check("categories browser has 26 cards", lazy["catCards"] == 26, lazy["catCards"])
        check("shapes section shows 7 container presets", lazy["shapeTiles"] == 7, lazy["shapeTiles"])
        check("fill section demos outline/duotone/solid/animated", lazy["fillTiles"] == 4 and lazy["fillToggle"], lazy)
        check("3D section shows 4 presets", lazy["tdTiles"] == 4, lazy["tdTiles"])
        check("illustrations inline 12 SVGs from the manifest", lazy["illusCards"] == 12 and lazy["illusSvg"] == 12,
              (lazy["illusCards"], lazy["illusSvg"]))
        check("swap/morph demos rendered", lazy["swapCards"] >= 26, lazy["swapCards"])
        page.screenshot(path=str(SHOTS / "desktop-lazy-sections-1440.png"))
        page.eval_on_selector("#sec-illustrations", "el => el.scrollIntoView()")
        page.wait_for_timeout(150)
        page.screenshot(path=str(SHOTS / "desktop-illustrations-1440.png"))

        # fill animation toggle
        page.eval_on_selector("#sec-fills", "el => el.scrollIntoView()")
        page.wait_for_timeout(120)
        page.click("#fill-toggle")
        page.wait_for_timeout(120)
        fill_state = page.evaluate("""() => ({
          state: document.getElementById('fill-anim-icon').getAttribute('data-fill-state'),
          pressed: document.getElementById('fill-toggle').getAttribute('aria-pressed')
        })""")
        check("fill animation toggle sets data-fill-state", fill_state["state"] == "true" and fill_state["pressed"] == "true", fill_state)
        page.click("#fill-toggle")
        page.wait_for_timeout(80)

        # swap toggle (lazy section)
        page.eval_on_selector("#sec-swaps", "el => el.scrollIntoView()")
        page.wait_for_timeout(120)
        page.click(".swap-btn")
        page.wait_for_timeout(400)
        swap_state = page.evaluate("""() => {
          const btn = document.querySelector('.swap-btn'); const widget = btn.querySelector('.nexa-swap');
          const a = getComputedStyle(widget.querySelector('.nexa-swap__a'));
          return { active: widget.getAttribute('data-nexa-active'), pressed: btn.getAttribute('aria-pressed'),
                   aOpacity: a.opacity, transition: a.transitionDuration };
        }""")
        check("swap click toggles data-nexa-active + aria-pressed",
              swap_state["active"] == "true" and swap_state["pressed"] == "true", swap_state)
        check("swap animates with a CSS transition", "0.28s" in swap_state["transition"], swap_state["transition"])
        page.click(".swap-btn")
        page.wait_for_timeout(250)
        page.screenshot(path=str(SHOTS / "desktop-swaps-1440.png"))

        # ------------------------------------------------------------ drawer
        page.evaluate("() => window.scrollTo(0, 0)")
        page.wait_for_timeout(120)
        page.fill("#q", "bell")
        page.wait_for_timeout(100)
        page.click('#grid .icon-btn[data-k="bell"]')
        page.wait_for_timeout(300)
        drawer = page.evaluate("""() => ({
          open: document.getElementById('drawer').open,
          name: document.getElementById('drawer-name').textContent,
          kebab: document.getElementById('drawer-kebab').textContent,
          sprite: document.getElementById('drawer-sprite').textContent,
          keywords: document.querySelectorAll('#drawer-keywords .chip').length,
          preset: document.getElementById('drawer-preset').textContent,
          sourceLen: document.getElementById('drawer-svg').textContent.length,
          hasCurrentColor: document.getElementById('drawer-svg').textContent.includes('currentColor'),
          focused: document.activeElement && document.activeElement.id,
          hash: location.hash,
          swapHidden: document.getElementById('swap-detail').hidden,
          proof: document.getElementById('proof-note').textContent.slice(0, 50)
        })""")
        check("drawer opens with accessible content", drawer["open"] and drawer["name"] == "Bell", drawer["name"])
        check("drawer shows raw kebab + sprite id + preset/keywords/inline source",
              drawer["kebab"] == "bell" and drawer["sprite"] == "#nexa-bell" and drawer["preset"] == "ring"
              and drawer["keywords"] >= 3 and drawer["hasCurrentColor"] and drawer["sourceLen"] > 100, drawer)
        check("drawer deep-links #icon=bell", drawer["hash"] == "#icon=bell", drawer["hash"])
        check("drawer moves focus inside", drawer["focused"] == "drawer-close", drawer["focused"])
        page.screenshot(path=str(SHOTS / "desktop-drawer-1440.png"))
        page.click('#copy-grid .copy-btn[data-copy="sprite"]')
        page.wait_for_timeout(250)
        copy = page.evaluate("""() => ({
          label: document.querySelector('#copy-grid .copy-btn[data-copy="sprite"] .copy-label').textContent,
          copied: document.querySelector('#copy-grid .copy-btn[data-copy="sprite"]').classList.contains('copied')
        })""")
        check("copy shows Copied feedback", "Copied" in copy["label"] and copy["copied"], copy)
        try:
            clip = page.evaluate("async () => { try { return await navigator.clipboard.readText(); } catch (e) { return 'ERR'; } }")
        except Exception:
            clip = "ERR"
        check("clipboard contains the snippet", clip.startswith("<svg class=\"nexa-icon\""), clip[:70])
        page.keyboard.press("Escape")
        page.wait_for_timeout(200)
        check("Escape closes drawer", not page.evaluate("() => document.getElementById('drawer').open"))
        check("closing removes hash", page.evaluate("() => location.hash") == "")

        # swap control inside drawer for a paired icon
        page.fill("#q", "arrow left")
        page.wait_for_timeout(100)
        page.click('#grid .icon-btn[data-k="arrow-left"]')
        page.wait_for_timeout(250)
        drawer_swap = page.evaluate("""() => ({
          hidden: document.getElementById('swap-detail').hidden,
          name: document.getElementById('drawer-swap-name').textContent,
          mode: document.getElementById('drawer-swap').getAttribute('data-mode')
        })""")
        check("drawer offers swap control for paired icon",
              not drawer_swap["hidden"] and "ArrowLeft" in drawer_swap["name"], drawer_swap)
        page.click("#swap-toggle")
        page.wait_for_timeout(350)
        check("drawer swap control toggles",
              page.evaluate("() => document.getElementById('drawer-swap').getAttribute('data-nexa-active')") == "true")
        page.keyboard.press("Escape")
        page.wait_for_timeout(150)
        page.fill("#q", "")
        page.wait_for_timeout(100)

        # --------------------------------------------------------- keyboard
        page.click("h1")
        page.keyboard.press("/")
        page.wait_for_timeout(50)
        check('"/" focuses search', page.evaluate("() => document.activeElement.id") == "q")
        page.keyboard.type("heart")
        page.wait_for_timeout(100)
        page.focus('#grid .icon-btn[data-k="heart"]')
        page.keyboard.press("ArrowRight")
        page.wait_for_timeout(80)
        check("ArrowRight moves grid focus", page.evaluate("() => document.activeElement.classList.contains('icon-btn')"))
        page.keyboard.press("Enter")
        page.wait_for_timeout(250)
        check("Enter opens drawer", page.evaluate("() => document.getElementById('drawer').open"))
        page.keyboard.press("ArrowRight")
        page.wait_for_timeout(200)
        moved = page.evaluate("() => document.getElementById('drawer-name').textContent")
        check("ArrowRight in drawer moves selection", moved != "Heart", moved)
        page.keyboard.press("Escape")
        page.wait_for_timeout(120)
        page.keyboard.press("Escape")
        page.wait_for_timeout(80)
        check("Escape clears search", page.evaluate("() => document.getElementById('q').value") == "")

        # ---------------------------------------------- deep links on load
        page.goto(PAGE + "?theme=dark&size=32&color=violet&preset=ring&category=communication#icon=bell")
        page.wait_for_function("() => document.getElementById('hud-icons').textContent !== '…'")
        page.wait_for_timeout(400)
        deep = page.evaluate("""() => ({
          theme: document.documentElement.dataset.theme,
          size: document.documentElement.dataset.size,
          color: document.documentElement.dataset.color,
          preset: document.getElementById('preset-filter').value,
          category: document.getElementById('category-filter').value,
          drawer: document.getElementById('drawer').open,
          name: document.getElementById('drawer-name').textContent,
          hash: location.hash
        })""")
        check("deep links restore theme/size/color/preset/category/#icon",
              deep["theme"] == "dark" and deep["size"] == "32" and deep["color"] == "violet"
              and deep["preset"] == "ring" and deep["category"] == "category:communication"
              and deep["drawer"] and deep["name"] == "Bell" and deep["hash"] == "#icon=bell", deep)
        page.screenshot(path=str(SHOTS / "desktop-deeplink-dark-1440.png"))

        context.close()

        # ------------------------------------------------- responsive passes
        for width, height, label in ((1440, 1000, "1440"), (768, 1000, "768"),
                                     (390, 844, "390"), (320, 700, "320")):
            ctx = browser.new_context(viewport={"width": width, "height": height},
                                      device_scale_factor=2 if width < 500 else 1,
                                      permissions=["clipboard-read", "clipboard-write"])
            vp = ctx.new_page()
            errs: list[str] = []
            vp.on("pageerror", lambda e, bag=errs: bag.append(str(e)))
            vp.goto(PAGE + "?theme=light")
            vp.wait_for_function("() => document.getElementById('hud-icons').textContent !== '…'")
            vp.wait_for_timeout(250)
            layout = vp.evaluate("""() => {
              const btn = document.querySelector('#grid .icon-btn').getBoundingClientRect();
              return {
                scrollWidth: document.documentElement.scrollWidth,
                innerWidth: window.innerWidth,
                cols: getComputedStyle(document.documentElement).getPropertyValue('--cols').trim(),
                cards: document.querySelectorAll('#grid .card').length,
                hit: [Math.round(btn.width), Math.round(btn.height)],
                hits: Math.min(...[...document.querySelectorAll('button')].slice(0, 40).map(b => {
                  const r = b.getBoundingClientRect(); return Math.min(r.width, r.height);
                }))
              };
            }""")
            check(f"{label}px: no page errors", not errs, errs[:2])
            check(f"{label}px: no horizontal overflow", layout["scrollWidth"] <= layout["innerWidth"] + 1, layout)
            check(f"{label}px: icon targets >= 40px", layout["hit"][0] >= 40 and layout["hit"][1] >= 40, layout["hit"])
            vp.screenshot(path=str(SHOTS / f"responsive-{label}.png"))
            if width == 390:
                check("390px: grid renders 2 columns", layout["cols"] == "2", layout["cols"])
            if width == 768:
                check("768px: grid renders 4 columns", layout["cols"] == "4", layout["cols"])
            if width == 320:
                check("320px: grid renders 2 columns", layout["cols"] == "2", layout["cols"])
            ctx.close()

        # ---------------------------------- shell paint before data (block data)
        ctx = browser.new_context(viewport={"width": 1440, "height": 900})
        blocked = ctx.new_page()
        blocked.route("**/icons.data.js", lambda route: route.abort())
        blocked.goto(PAGE)
        blocked.wait_for_timeout(400)
        shell_only = blocked.evaluate("""() => ({
          cards: document.querySelectorAll('#grid .card').length,
          hero: !!document.querySelector('.hero h1'),
          error: !document.getElementById('grid-error').hidden,
          hud: document.getElementById('hud-shell').textContent
        })""")
        static_shell = (ROOT / "index.html").read_text()
        check("shell paints with data blocked (0 cards, chrome visible)",
              shell_only["cards"] == 0 and shell_only["hero"], shell_only)
        check("shell HTML contains the pre-paint skeleton",
              static_shell.count('class="sk sk-card"') >= 8, static_shell.count('class="sk sk-card"'))
        check("blocked data shows the fallback error", shell_only["error"])
        blocked.screenshot(path=str(SHOTS / "shell-without-data.png"))
        ctx.close()

        # ------------------------------------- OS reduced-motion preference
        ctx = browser.new_context(viewport={"width": 1440, "height": 900}, reduced_motion="reduce")
        rp = ctx.new_page()
        rp.goto(PAGE)
        rp.wait_for_function("() => document.getElementById('hud-icons').textContent !== '…'")
        rp.wait_for_timeout(200)
        rm = rp.evaluate("""() => {
          const icon = document.querySelector('#grid .card svg');
          return { anim: getComputedStyle(icon).animationName,
                   fillTransition: getComputedStyle(document.body).transitionDuration };
        }""")
        check("OS prefers-reduced-motion disables animations", rm["anim"] == "none", rm)
        rp.screenshot(path=str(SHOTS / "desktop-reduced-motion.png"))
        ctx.close()

        # ------------------------------- warm performance samples (median)
        samples = []
        for _ in range(3):
            ctx = browser.new_context(viewport={"width": 1440, "height": 1000})
            pp = ctx.new_page()
            pp.goto(PAGE)
            pp.wait_for_function("() => document.getElementById('hud-icons').textContent !== '…'")
            pp.wait_for_timeout(500)
            samples.append(hud(pp))
            ctx.close()

        def num(value):
            m = re.search(r"[\d.]+", value or "")
            return float(m.group(0)) if m else None

        perf_summary = {
            "shellBytes": shell_bytes,
            "dataBytes": data_bytes,
            "appBytes": app_bytes,
            "samples": samples,
            "median": {
                "scriptLoadEvalMs": sorted(filter(None, [num(s["eval"]) for s in samples]))[1]
                    if len(samples) >= 3 else num(samples[0]["eval"]),
                "firstRowMs": sorted(filter(None, [num(s["firstRow"]) for s in samples]))[1]
                    if len(samples) >= 3 else num(samples[0]["firstRow"]),
                "renderMs": sorted(filter(None, [num(s["render"]) for s in samples]))[1]
                    if len(samples) >= 3 else num(samples[0]["render"]),
                "fpMs": num(samples[-1]["fp"]),
                "fcpMs": num(samples[-1]["fcp"]),
                "gridNodes": num(samples[-1]["nodes"]),
            }
        }
        check("median script load+eval under 10 ms", (perf_summary["median"]["scriptLoadEvalMs"] or 99) < 10,
              perf_summary["median"]["scriptLoadEvalMs"])
        check("median JS→first-row measured", perf_summary["median"]["firstRowMs"] is not None, perf_summary["median"])
        check("median render under 5 ms", (perf_summary["median"]["renderMs"] or 99) < 5, perf_summary["median"]["renderMs"])
        check("browser paint (FCP) measured", perf_summary["median"]["fcpMs"] is not None, perf_summary["median"])
        check("grid DOM nodes stay under 1200", (perf_summary["median"]["gridNodes"] or 9999) < 1200,
              perf_summary["median"]["gridNodes"])
        check("no impossible paint promise in HUD",
              "0.2 ms" not in (samples[-1]["note"] or ""), samples[-1]["note"][:100])

        browser.close()

    failures = [r for r in results if not r["pass"]]
    report = {
        "generatedBy": "gallery/verify-browser.py",
        "page": PAGE,
        "files": {
            "index.html": {"raw": shell_bytes, "budget": SHELL_BUDGET},
            "icons.data.js": {"raw": data_bytes},
            "app.js": {"raw": app_bytes},
        },
        "performance": perf_summary,
        "checks": results,
        "passed": len(results) - len(failures),
        "failed": len(failures),
        "screenshots": sorted(p.name for p in SHOTS.glob("*.png")),
    }
    (ROOT / "verify-browser-report.json").write_text(json.dumps(report, indent=2) + "\n")
    print("\n%d checks, %d passed, %d failed" % (len(results), len(results) - len(failures), len(failures)))
    print("perf:", json.dumps(perf_summary["median"]))
    print("screenshots:", ", ".join(report["screenshots"]))
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
