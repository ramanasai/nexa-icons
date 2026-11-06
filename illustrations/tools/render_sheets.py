#!/usr/bin/env python3
"""Render review sheets for the illustration set into screenshots/.

- contact-light.png / contact-dark.png : every illustration at 48 / 96 / 192
- <id>.png : one illustration, light + dark rows, 48/96/192, labelled
"""
import pathlib
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "screenshots"
OUT.mkdir(exist_ok=True)
files = sorted(ROOT.glob("*.svg"))

def svg(name):
    return (ROOT / f"{name}.svg").read_text().strip()

STYLE = """
  body { margin:0; font:12px/1.4 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; }
  .panel { padding:26px 28px 34px; }
  .light { background:#fafafa; color:#3f3f46; }
  .dark { background:#0c0c0e; color:#d4d4d8; }
  h1 { font-size:12px; letter-spacing:.09em; text-transform:uppercase; margin:0 0 16px; font-weight:650; opacity:.7; }
  .grid { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; }
  .tile { margin:0; border:1px solid color-mix(in srgb,currentColor 16%,transparent); border-radius:14px; padding:16px 14px 10px; }
  .sizes { display:flex; align-items:flex-end; justify-content:space-around; gap:10px; min-height:200px; }
  .cell { display:flex; flex-direction:column; align-items:center; gap:6px; }
  .cell b { font-size:9px; font-weight:500; letter-spacing:.06em; opacity:.45; }
  .s48 svg { width:48px; height:48px; } .s96 svg { width:96px; height:96px; } .s192 svg { width:192px; height:192px; }
  figcaption { text-align:center; font-size:10.5px; letter-spacing:.05em; opacity:.55; margin-top:10px; }
  .row { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; }
"""

def sizes_cells(name):
    return "".join(f'<div class="cell"><span class="s{s}">{svg(name)}</span><b>{s}px</b></div>' for s in (48, 96, 192))

contact_html = "<style>" + STYLE + "</style>"
for theme in ("light", "dark"):
    tiles = "".join(
        f'<figure class="tile"><div class="sizes">{sizes_cells(f.stem)}</div><figcaption>{f.stem}</figcaption></figure>'
        for f in files
    )
    contact_html += f'<section class="panel {theme}" id="{theme}"><h1>{theme} — 48 / 96 / 192</h1><div class="grid">{tiles}</div></section>'

with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": 1180, "height": 1000}, device_scale_factor=1)
    pg.set_content(contact_html)
    pg.wait_for_timeout(100)
    for theme in ("light", "dark"):
        pg.locator(f"#{theme}").screenshot(path=str(OUT / f"contact-{theme}.png"))
    # per illustration: light row, dark row
    for f in files:
        html = "<style>" + STYLE + f"""
          .wrap {{ padding:22px 24px; }}
          .light, .dark {{ border-radius:14px; margin-bottom:14px; padding:18px 22px 14px; }}
          .sizes {{ min-height:210px; }}
        """ + "</style>"
        html += f'''<div class="wrap">
          <section class="panel light"><h1>{f.stem} — light</h1><div class="sizes">{sizes_cells(f.stem)}</div></section>
          <section class="panel dark"><h1>{f.stem} — dark</h1><div class="sizes">{sizes_cells(f.stem)}</div></section>
        </div>'''
        pg.set_content(html)
        pg.wait_for_timeout(60)
        pg.screenshot(path=str(OUT / f"{f.stem}.png"), full_page=True)
    b.close()
print("rendered", len(files), "illustration sheets + contact sheets")
