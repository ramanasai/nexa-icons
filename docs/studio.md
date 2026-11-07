# Nexa Studio

A browser-based editor for the 1,034-icon catalog:

**<https://ramanasai.github.io/nexa-icons/studio.html>** (or open
`gallery/studio.html` locally).

## What you can do

- search by name/kebab and preview any icon
- size 16/20/24/32/48 px
- stroke width, color, weight (light/regular/bold) and edges (round/sharp)
- outline / duotone / solid / glass, with configurable duotone opacity
- container shapes (rounded, circle, squircle, pill, hexagon, diamond, square)
- motion presets (pulse, spin, draw-on, spring, success, error, progress)
- export **SVG**, **JSX**, **PNG** and copy a **CSS** snippet

Everything runs locally in the browser against the same `gallery/icons.data.js`
dataset; there is no server and no third-party request. Exports are plain
strings/canvas output, so they work offline.

The Studio is a design/preview tool. For production, import from
`@sairamanapb/icons` (or `/lucide` / `/js`) and use the documented props.
