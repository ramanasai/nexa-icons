#!/usr/bin/env python3
"""Generate illustrations/preview.html — self-contained gallery (sprite + inline use)."""
import json, pathlib, re

ROOT = pathlib.Path(__file__).resolve().parent.parent
manifest = json.loads((ROOT / "manifest.json").read_text())

def inner_svg(name):
    src = (ROOT / name).read_text().strip()
    m = re.match(r"<svg\b[^>]*>(.*)</svg>$", src, re.S)
    if not m:
        raise SystemExit(f"cannot parse {name}")
    return m.group(1).strip()

symbols = []
for item in manifest:
    symbols.append(
        f'<symbol id="ill-{item["id"]}" viewBox="0 0 64 64" fill="none">{inner_svg(item["file"])}</symbol>'
    )

cards = []
for item in manifest:
    tags = "".join(f"<span class=\"tag\">{t}</span>" for t in item["tags"][:4])
    cards.append(f'''
      <article class="card" data-id="{item["id"]}">
        <header class="card-head">
          <div>
            <h3>{item["title"]}</h3>
            <p class="id">{item["id"]} · {item["usage"]}</p>
          </div>
          <span class="usage usage-{item["usage"]}">{item["usage"]}</span>
        </header>
        <div class="sizes" aria-label="{item["title"]} at 48, 96 and 192 pixels">
          <figure><svg class="ill s48" aria-hidden="true"><use href="#ill-{item["id"]}"/></svg><figcaption>48</figcaption></figure>
          <figure><svg class="ill s96" aria-hidden="true"><use href="#ill-{item["id"]}"/></svg><figcaption>96</figcaption></figure>
          <figure><svg class="ill s192" aria-hidden="true"><use href="#ill-{item["id"]}"/></svg><figcaption>192</figcaption></figure>
        </div>
        <div class="tags">{tags}</div>
      </article>''')

html = f'''<!doctype html>
<html lang="en" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Nexa Icons — Illustrated set ({len(manifest)} illustrations)</title>
<meta name="description" content="Self-contained preview of the Nexa illustrated icon set: {len(manifest)} duotone illustrations, 64×64, currentColor + CSS variables, light and dark.">
<style>
  :root {{
    color-scheme: light;
    --bg:#fafafa; --panel:#ffffff; --fg:#18181b; --muted:#52525b; --subtle:#71717a;
    --border:#e4e4e7; --border-strong:#d4d4d8; --ui-accent:#2563eb;
    --radius:14px;
  }}
  html[data-theme="dark"] {{
    color-scheme: dark;
    --bg:#0c0c0e; --panel:#141417; --fg:#f4f4f5; --muted:#a1a1aa; --subtle:#8b8b94;
    --border:#27272a; --border-strong:#3f3f46; --ui-accent:#60a5fa;
  }}
  * {{ box-sizing:border-box; }}
  body {{ margin:0; background:var(--bg); color:var(--fg);
    font:14px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }}
  a {{ color:var(--ui-accent); }}
  .wrap {{ max-width:1200px; margin:0 auto; padding:32px 24px 64px; }}
  header.top {{ display:flex; flex-wrap:wrap; align-items:flex-end; justify-content:space-between; gap:16px;
    padding-bottom:20px; border-bottom:1px solid var(--border); }}
  h1 {{ margin:0 0 4px; font-size:22px; letter-spacing:-.01em; }}
  .sub {{ margin:0; color:var(--muted); font-size:13px; max-width:62ch; }}
  .controls {{ display:flex; flex-wrap:wrap; gap:8px; align-items:center; }}
  .seg {{ display:inline-flex; border:1px solid var(--border); border-radius:10px; overflow:hidden; }}
  .seg button {{ appearance:none; border:0; background:transparent; color:var(--muted); font:inherit;
    font-size:12px; padding:7px 12px; cursor:pointer; }}
  .seg button[aria-pressed="true"] {{ background:color-mix(in srgb, var(--ui-accent) 12%, transparent);
    color:var(--ui-accent); font-weight:600; }}
  .seg button:focus-visible {{ outline:2px solid var(--ui-accent); outline-offset:-2px; }}
  .chips {{ display:flex; gap:6px; align-items:center; }}
  .chips .lbl {{ font-size:11px; color:var(--subtle); letter-spacing:.04em; text-transform:uppercase; }}
  .chip {{ width:22px; height:22px; border-radius:50%; border:1px solid var(--border-strong); cursor:pointer;
    background:var(--sw); padding:0; }}
  .chip[aria-pressed="true"] {{ outline:2px solid var(--ui-accent); outline-offset:2px; }}
  .chip.inherit {{ background:linear-gradient(135deg, var(--fg) 50%, transparent 50%); }}
  label.toggle {{ display:inline-flex; gap:6px; align-items:center; font-size:12px; color:var(--muted); cursor:pointer; }}
  .grid {{ display:grid; grid-template-columns:repeat(2, minmax(0,1fr)); gap:16px; margin-top:24px; }}
  @media (max-width:860px) {{ .grid {{ grid-template-columns:1fr; }} }}
  .card {{ border:1px solid var(--border); background:var(--panel); border-radius:var(--radius); padding:16px 16px 12px;
    display:flex; flex-direction:column; gap:12px; }}
  .card-head {{ display:flex; align-items:flex-start; justify-content:space-between; gap:12px; }}
  .card h3 {{ margin:0; font-size:14px; font-weight:650; letter-spacing:-.005em; }}
  .id {{ margin:2px 0 0; font:11px/1.3 ui-monospace, SFMono-Regular, Menlo, monospace; color:var(--subtle); }}
  .usage {{ font-size:10px; letter-spacing:.06em; text-transform:uppercase; font-weight:650; padding:3px 8px;
    border-radius:999px; border:1px solid var(--border-strong); color:var(--muted); white-space:nowrap; }}
  .usage-empty-state {{ color:var(--ui-accent); border-color:color-mix(in srgb, var(--ui-accent) 40%, transparent); }}
  .sizes {{ display:flex; flex-wrap:wrap; align-items:flex-end; justify-content:space-around; gap:12px 16px;
    row-gap:14px; padding:10px 0 8px;
    border-top:1px dashed var(--border); border-bottom:1px dashed var(--border); }}
  .sizes figure {{ margin:0; display:flex; flex-direction:column; align-items:center; gap:6px; }}
  .sizes figcaption {{ font:10px/1 ui-monospace, SFMono-Regular, Menlo, monospace; color:var(--subtle); }}
  .ill {{ color:inherit; flex:none; }}
  .s48 {{ width:48px; height:48px; }} .s96 {{ width:96px; height:96px; }} .s192 {{ width:192px; height:192px; }}
  html.grayscale .ill {{ filter:grayscale(1); }}
  .tags {{ display:flex; flex-wrap:wrap; gap:6px; }}
  .tag {{ font-size:10.5px; color:var(--muted); background:color-mix(in srgb, var(--fg) 5%, transparent);
    border-radius:999px; padding:2px 8px; }}
  footer {{ margin-top:36px; padding-top:18px; border-top:1px solid var(--border); color:var(--subtle); font-size:12px; }}
  code {{ font:11.5px ui-monospace, SFMono-Regular, Menlo, monospace; color:var(--muted); }}
  .note {{ margin-top:10px; font-size:12px; color:var(--muted); }}
  .sprite {{ position:absolute; width:0; height:0; overflow:hidden; }}
</style>
</head>
<body>
<svg class="sprite" aria-hidden="true" focusable="false">{''.join(symbols)}</svg>
<div class="wrap">
  <header class="top">
    <div>
      <h1>Nexa Icons — Illustrated set</h1>
      <p class="sub">{len(manifest)} duotone line illustrations on a 64×64 grid. Every stroke paints with
      <code>currentColor</code>; soft fills and the focal accent are opacity layers, so the set is theme-safe,
      grayscale-safe and works on <code>#fafafa</code> and <code>#0c0c0e</code>.</p>
    </div>
    <div class="controls">
      <div class="seg" role="group" aria-label="Preview theme">
        <button type="button" data-theme="light" aria-pressed="true">Light</button>
        <button type="button" data-theme="dark" aria-pressed="false">Dark</button>
      </div>
      <div class="chips" role="group" aria-label="Illustration accent">
        <span class="lbl">Accent</span>
        <button class="chip inherit" type="button" data-accent="" aria-pressed="true" aria-label="Inherit currentColor"></button>
        <button class="chip" type="button" data-accent="#2563eb" style="--sw:#2563eb" aria-pressed="false" aria-label="Blue accent"></button>
        <button class="chip" type="button" data-accent="#15803d" style="--sw:#15803d" aria-pressed="false" aria-label="Green accent"></button>
        <button class="chip" type="button" data-accent="#7c3aed" style="--sw:#7c3aed" aria-pressed="false" aria-label="Violet accent"></button>
        <button class="chip" type="button" data-accent="#b45309" style="--sw:#b45309" aria-pressed="false" aria-label="Amber accent"></button>
      </div>
      <label class="toggle"><input type="checkbox" id="grayscale"> Grayscale</label>
    </div>
  </header>

  <main class="grid">{''.join(cards)}</main>

  <footer>
    <p><b>Usage:</b> inline SVG (React/HTML/JS) inherits <code>color</code> from any ancestor.
    Optional tokens: <code>--nexa-ill-fg</code>, <code>--nexa-ill-soft</code>, <code>--nexa-ill-accent</code>.
    Sizes are scalable — 48/96/192 shown; the 64×64 viewBox stays crisp at every size.</p>
    <p class="note">Illustrations ship decorative: add <code>aria-hidden="true"</code> when they sit next to a label,
    or <code>role="img"</code> + <code>&lt;title&gt;</code>/<code>aria-label</code> when they are the only content.
    Full usage and the CSS-mask recipe are in <code>README.md</code>. Manifest: <code>manifest.json</code>.</p>
  </footer>
</div>
<script>
  (function () {{
    var root = document.documentElement;
    var mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
    function setTheme(theme) {{
      root.setAttribute("data-theme", theme);
      document.querySelectorAll(".seg button[data-theme]").forEach(function (b) {{
        b.setAttribute("aria-pressed", String(b.getAttribute("data-theme") === theme));
      }});
    }}
    setTheme(mq && mq.matches ? "dark" : "light");
    document.querySelectorAll(".seg button[data-theme]").forEach(function (b) {{
      b.addEventListener("click", function () {{ setTheme(b.getAttribute("data-theme")); }});
    }});
    var chips = document.querySelectorAll(".chip");
    chips.forEach(function (c) {{
      c.addEventListener("click", function () {{
        var value = c.getAttribute("data-accent");
        chips.forEach(function (o) {{ o.setAttribute("aria-pressed", String(o === c)); }});
        if (value) root.style.setProperty("--nexa-ill-accent", value);
        else root.style.removeProperty("--nexa-ill-accent");
      }});
    }});
    var gs = document.getElementById("grayscale");
    if (gs) gs.addEventListener("change", function () {{ root.classList.toggle("grayscale", gs.checked); }});
    if (mq && mq.addEventListener) mq.addEventListener("change", function (e) {{
      // only follow the OS while the user has not picked a theme explicitly
      if (!root.dataset.userTheme) setTheme(e.matches ? "dark" : "light");
    }});
    document.querySelectorAll(".seg button[data-theme]").forEach(function (b) {{
      b.addEventListener("click", function () {{ root.dataset.userTheme = "1"; }}, {{ once: true }});
    }});
  }})();
</script>
</body>
</html>
'''

(ROOT / "preview.html").write_text(html)
print("wrote preview.html", len(html.encode()) // 1024, "KB,", len(manifest), "illustrations")
