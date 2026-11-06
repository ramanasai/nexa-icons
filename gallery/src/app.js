/* Nexa Icons gallery app — classic deferred script.
   The shell paints first; this file injects component CSS, reads window.NEXA_DATA
   (deferred local data with inline path markup), then renders only the visible
   grid window and
   lazy sections. No frameworks, no network, no ES modules (file:// safe). */
(function () {
  'use strict';

  var COMPONENTS_CSS = /*@COMPONENTS_CSS@*/;
  var DRAWER_HTML = /*@DRAWER_HTML@*/;

  var tStart = performance.now();
  var t0 = window.__NEXA_T0__ || tStart;
  // Script load+eval: loader start -> first line of this app (local file load,
  // JS parse, dataset assignment). Shell paint is not included.
  var evalMs = tStart - (window.__NEXA_LOAD_T0__ || t0);

  // Component + animation styles and the drawer markup arrive after the shell
  // has already painted; neither is needed for first paint.
  var styleEl = document.createElement('style');
  styleEl.textContent = COMPONENTS_CSS;
  document.head.appendChild(styleEl);
  document.body.insertAdjacentHTML('beforeend', DRAWER_HTML);

  var DATA = window.NEXA_DATA;
  var doc = document;
  var root = doc.documentElement;
  var $ = function (sel) { return doc.querySelector(sel); };
  var grid = $('#grid');
  var gridSub = $('#grid-sub');
  var gridError = $('#grid-error');
  var search = $('#q');
  var glassFilter = $('#glass-filter');
  var clearBtn = $('#clear-search');
  var countEl = $('#result-count');
  var presetFilter = $('#preset-filter');
  var triggerFilter = $('#trigger-filter');
  var categoryGroup = $('#category-group');
  var categoryFilter = $('#category-filter');
  var animatedOnly = $('#animated-only');
  var playAllBtn = $('#play-all');
  var reduceToggle = $('#reduce-toggle');
  var motionState = $('#motion-state');
  var triggerDemo = $('#trigger-demo');
  var announcer = $('#announcer');
  var drawer = $('#drawer');
  var drawerBody = $('#drawer-body');
  var drawerName = $('#drawer-name');
  var drawerKebab = $('#drawer-kebab');
  var drawerSprite = $('#drawer-sprite');
  var drawerPreview = $('#drawer-preview');
  var proofTiles = [].slice.call(doc.querySelectorAll('.proof-tile'));
  var proofNote = $('#proof-note');
  var drawerAliases = $('#drawer-aliases');
  var drawerKeywords = $('#drawer-keywords');
  var drawerPreset = $('#drawer-preset');
  var drawerTrigger = $('#drawer-trigger');
  var drawerSize = $('#drawer-size');
  var drawerFill = $('#drawer-fill');
  var drawerSvg = $('#drawer-svg');
  var drawerClose = $('#drawer-close');
  var replayBtn = $('#replay-btn');
  var swapDetail = $('#swap-detail');
  var swapToggle = $('#swap-toggle');
  var drawerSwap = $('#drawer-swap');
  var drawerSwapName = $('#drawer-swap-name');
  var copyGrid = $('#copy-grid');
  var hud = {
    shell: $('#hud-shell'), data: $('#hud-data'), app: $('#hud-app'),
    eval: $('#hud-eval'), firstRow: $('#hud-firstrow'), render: $('#hud-render'), nodes: $('#hud-nodes'),
    fp: $('#hud-fp'), fcp: $('#hud-fcp'), icons: $('#hud-icons'),
    shellHero: $('#hud-shell-hero'), dataHero: $('#hud-data-hero'), note: $('#hud-note')
  };

  if (!DATA || !DATA.icons || !DATA.icons.length) {
    if (gridError) gridError.hidden = false;
    grid.innerHTML = '';
    grid.setAttribute('aria-busy', 'false');
    motionState.textContent = 'icons.data.js did not load — open gallery/index.html next to icons.data.js.';
    return;
  }

  /* ------------------------------------------------------------------ model */
  var escMap = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  function esc(value) { return String(value).replace(/[&<>"']/g, function (c) { return escMap[c]; }); }
  function escRegExp(value) { return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function formatBytes(bytes) {
    if (!bytes) return '—';
    return bytes >= 1024 ? (bytes / 1024).toFixed(1) + ' KB' : bytes + ' B';
  }
  function formatMs(ms) { return (Math.round(ms * 100) / 100).toFixed(2) + ' ms'; }

  function svgHTML(icon, opts) {
    opts = opts || {};
    return '<svg class="nexa-icon' + (opts.cls ? ' ' + opts.cls : '') + '" viewBox="0 0 24 24"' +
      (opts.anim ? ' data-nexa-anim="' + opts.anim + '"' : '') +
      (opts.trigger ? ' data-nexa-trigger="' + opts.trigger + '"' : '') +
      (opts.attrs ? ' ' + opts.attrs : '') +
      ' aria-hidden="true">' + (icon.i || '') + '</svg>';
  }

  var icons = DATA.icons.map(function (tuple, index) {
    var kebab = tuple[0], name = tuple[1];
    var aliases = tuple[2] ? tuple[2].split('|') : [name];
    var keywords = tuple[3] ? tuple[3].split('|') : [];
    var icon = {
      k: kebab, n: name, a: aliases, w: keywords,
      p: tuple[4] || 'pop', t: tuple[5] || 'hover',
      fill: !!tuple[6], c: tuple[7] ? tuple[7].split('|') : [],
      i: (DATA.paths && DATA.paths[index]) || '',
      index: index, hue: index % 6,
      lowerName: name.toLowerCase(),
      search: (name + ' ' + kebab + ' ' + aliases.join(' ') + ' ' + keywords.join(' ')).toLowerCase()
    };
    return icon;
  });
  var byKebab = Object.create(null);
  var byName = Object.create(null);
  icons.forEach(function (icon) { byKebab[icon.k] = icon; byName[icon.n] = icon; });
  var paired = Object.create(null);
  var swapPairs = DATA.swaps || [];
  swapPairs.forEach(function (pair) {
    var from = byKebab[pair[0]], to = byKebab[pair[1]];
    if (!from || !to) return;
    if (!paired[from.k]) paired[from.k] = { to: to, mode: pair[2] };
    if (!paired[to.k]) paired[to.k] = { to: from, mode: pair[2] };
    from.swap = true; to.swap = true;
  });
  var fillSafeIcons = icons.filter(function (icon) { return icon.fill; }).slice(0, 8);
  var semanticTriggers = [];
  icons.forEach(function (icon) { if (semanticTriggers.indexOf(icon.t) < 0) semanticTriggers.push(icon.t); });

  var SIZES = DATA.sizes || { 16: 2, 20: 1.75, 24: 1.5, 32: 1.5, 48: 1.5 };
  var THEMES = ['light', 'dark', 'system'];
  var COLORS = ['blue', 'green', 'amber', 'red', 'violet', 'teal', 'rainbow'];
  var GENRES = (DATA.categories && DATA.categories.length) ? DATA.categories : (DATA.collections || []);
  var GENRE_MODE = (DATA.categories && DATA.categories.length) ? 'category' : 'collection';

  var state = {
    booting: true,
    q: '', tokens: [],
    theme: 'system', size: '24', color: 'blue',
    preset: '', trigger: '', genre: '', animatedOnly: false,
    playAll: false, reduce: false,
    filtered: icons, cols: 8, rowH: 0,
    start: 0, end: 0, rows: 0, renderCount: 0,
    rendering: false, firstRender: true, selected: null,
    initialIcon: null, lastRenderMs: 0
  };
  var lastFocused = null;
  var copyTimers = new WeakMap();
  var currentSnippets = {};
  var currentIcon = null;

  /* ------------------------------------------------------------------- URL */
  function readUrl() {
    var params = new URLSearchParams(location.search);
    var theme = params.get('theme');
    var size = params.get('size');
    var color = params.get('color');
    var preset = params.get('preset');
    var trigger = params.get('trigger');
    var genre = params.get('category') || params.get('collection');

    state.q = params.get('q') || '';
    search.value = state.q;
    state.theme = THEMES.indexOf(theme) >= 0 ? theme : 'system';
    state.size = SIZES[size] ? size : '24';
    state.color = COLORS.indexOf(color) >= 0 ? color : 'blue';
    state.preset = DATA.presets.indexOf(preset) >= 0 ? preset : '';
    state.trigger = semanticTriggers.indexOf(trigger) >= 0 ? trigger : '';
    state.genre = '';
    if (genre) {
      var found = GENRES.filter(function (g) { return g.id === genre; })[0];
      if (found) state.genre = GENRE_MODE + ':' + genre;
    }
    var match = /^#icon=([a-z0-9-]+)$/.exec(location.hash || '');
    state.initialIcon = match && byKebab[match[1]] ? match[1] : null;

    root.setAttribute('data-theme', state.theme);
    root.setAttribute('data-size', state.size);
    root.setAttribute('data-color', state.color);
    setPressed('#size-seg', 'data-size', state.size);
    setPressed('#theme-seg', 'data-theme', state.theme);
    setPressed('#color-seg', 'data-color', state.color);
    presetFilter.value = state.preset;
    triggerFilter.value = state.trigger;
    categoryFilter.value = state.genre;
  }

  function syncUrl() {
    if (state.booting) return;
    var params = new URLSearchParams();
    if (state.q) params.set('q', state.q);
    params.set('theme', state.theme);
    params.set('size', state.size);
    params.set('color', state.color);
    if (state.preset) params.set('preset', state.preset);
    if (state.trigger) params.set('trigger', state.trigger);
    if (state.genre) params.set('category', state.genre.split(':')[1]);
    var hash = state.selected ? '#icon=' + state.selected.k : '';
    var url = location.pathname + (params.toString() ? '?' + params.toString() : '') + hash;
    try { history.replaceState(null, '', url); } catch (err) {
      try { if (hash && location.hash !== hash) location.hash = hash; } catch (ignored) { /* file:// */ }
    }
  }

  function setPressed(selector, attr, value) {
    var group = $(selector);
    if (!group) return;
    var buttons = group.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('aria-pressed', String(buttons[i].getAttribute(attr) === value));
    }
  }

  /* -------------------------------------------------------------- filtering */
  function genreMatches(icon, genre) {
    if (!genre) return true;
    var parts = genre.split(':');
    var id = parts[1];
    if (parts[0] === 'category') return icon.c.indexOf(id) >= 0;
    var collection = GENRES.filter(function (g) { return g.id === id; })[0];
    return !!(collection && collection.icons.indexOf(icon.k) >= 0);
  }

  function applyFilters() {
    state.tokens = state.q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    var tokens = state.tokens;
    var list = [];
    for (var i = 0; i < icons.length; i++) {
      var icon = icons[i];
      if (tokens.length) {
        var hit = true;
        for (var j = 0; j < tokens.length; j++) {
          if (icon.search.indexOf(tokens[j]) < 0) { hit = false; break; }
        }
        if (!hit) continue;
      }
      if (state.preset && icon.p !== state.preset) continue;
      if (state.trigger && icon.t !== state.trigger) continue;
      if (state.animatedOnly && !icon.p) continue;
      if (state.genre && !genreMatches(icon, state.genre)) continue;
      list.push(icon);
    }
    state.filtered = list;
    state.rows = Math.ceil(list.length / state.cols);
    updateCounts();
    if (state.rows === 0) { renderEmpty(); return; }
    renderWindow(true);
  }

  function updateCounts() {
    var total = icons.length;
    var visible = state.filtered.length;
    if (!hasFilters()) countEl.innerHTML = '<b>' + total + '</b> icons';
    else countEl.innerHTML = '<b>' + visible + '</b> of ' + total + ' icons';
    var descriptor = [];
    if (state.preset) descriptor.push('preset ' + state.preset);
    if (state.trigger) descriptor.push('trigger ' + state.trigger);
    if (state.genre) descriptor.push(state.genre.split(':')[0] + ' ' + state.genre.split(':')[1]);
    if (state.animatedOnly) descriptor.push('animated only');
    gridSub.textContent = visible + ' of ' + total + ' icons · ' + state.rows + ' rows · ' +
      (descriptor.length ? descriptor.join(' · ') + ' · ' : '') +
      '';
    clearBtn.hidden = !state.q;
    search.classList.toggle('is-filled', !!state.q);
  }

  function hasFilters() {
    return !!(state.q || state.preset || state.trigger || state.genre || state.animatedOnly);
  }

  /* ----------------------------------------------------------- virtual grid */
  function currentCols() {
    var value = parseInt(getComputedStyle(root).getPropertyValue('--cols'), 10);
    return value > 0 ? value : 8;
  }

  function measureRowH() {
    var probe = doc.createElement('div');
    probe.className = 'card';
    probe.style.cssText = 'position:absolute;left:-9999px;top:0;visibility:hidden;height:var(--card-h);';
    doc.body.appendChild(probe);
    var height = probe.getBoundingClientRect().height;
    probe.remove();
    var gap = parseFloat(getComputedStyle(doc.documentElement).getPropertyValue('--row-gap')) || 8;
    return Math.max(40, height + gap);
  }

  function highlightName(icon) {
    if (!state.tokens.length) return esc(icon.n);
    var re, out = '', last = 0, match;
    try { re = new RegExp('(' + state.tokens.map(escRegExp).join('|') + ')', 'ig'); } catch (err) { return esc(icon.n); }
    while ((match = re.exec(icon.n))) {
      if (match.index === re.lastIndex) re.lastIndex += 1;
      out += esc(icon.n.slice(last, match.index)) + '<mark>' + esc(match[0]) + '</mark>';
      last = match.index + match[0].length;
      if (out.length > 240) break;
    }
    return out + esc(icon.n.slice(last));
  }

  function cardHTML(icon, index) {
    var trigger = state.playAll ? 'always' : icon.t;
    var hit = '';
    if (state.tokens.length && icon.lowerName.indexOf(state.tokens[0]) < 0) {
      for (var i = 0; i < icon.w.length; i++) {
        if (icon.w[i].toLowerCase().indexOf(state.tokens[0]) >= 0) { hit = icon.w[i]; break; }
      }
    }
    var active = state.activeK ? icon.k === state.activeK : index === 0;
    return '<div class="card' + (icon.swap ? ' swap' : '') + '" role="listitem" data-h="' + icon.hue + '"' +
      (icon.swap ? ' data-swap="1"' : '') + ' aria-setsize="' + state.filtered.length + '" aria-posinset="' + (index + 1) + '">' +
      '<button class="icon-btn" type="button" data-k="' + esc(icon.k) + '" aria-label="' + esc(icon.n) + '"' +
      ' tabindex="' + (active ? '0' : '-1') + '"' +
      ' title="' + esc(icon.n) + ' · ' + esc(icon.k) + '">' +
      svgHTML(icon, { anim: esc(icon.p), trigger: trigger }) +
      '<span class="card-name">' + highlightName(icon) + '</span>' +
      (hit ? '<span class="card-hit">' + esc(hit) + '</span>' : '') +
      '</button></div>';
  }

  function renderWindow(force) {
    if (!state.filtered.length) { renderEmpty(); return; }
    state.cols = currentCols();
    if (!state.rowH) state.rowH = measureRowH();
    var total = state.filtered.length;
    var rows = Math.ceil(total / state.cols);
    var rowH = state.rowH;
    var gridTop = grid.getBoundingClientRect().top + window.scrollY;
    var scrollTop = Math.max(0, window.scrollY - gridTop);
    var viewportH = window.innerHeight || 800;
    var overscan = 2;
    var start = Math.max(0, Math.min(rows - 1, Math.floor(scrollTop / rowH) - overscan));
    var end = Math.min(rows, start + Math.ceil(viewportH / rowH) + overscan * 2 + 1);
    if (!force && start === state.start && end === state.end && rows === state.rows) return;

    var renderStart = performance.now();
    var html = '<div class="gspacer" style="height:' + (start * rowH) + 'px"></div><div class="grows">';
    for (var row = start; row < end; row++) {
      html += '<div class="row" role="presentation">';
      for (var col = 0; col < state.cols; col++) {
        var index = row * state.cols + col;
        if (index >= total) break;
        html += cardHTML(state.filtered[index], index);
      }
      html += '</div>';
    }
    html += '</div><div class="gspacer" style="height:' + ((rows - end) * rowH) + 'px"></div>';
    var focusedButton = doc.activeElement && doc.activeElement.closest ? doc.activeElement.closest('.icon-btn') : null;
    var focusedKebab = focusedButton ? focusedButton.getAttribute('data-k') : null;
    if (focusedKebab) state.activeK = focusedKebab;
    grid.setAttribute('aria-busy', 'true');
    grid.innerHTML = html;
    grid.setAttribute('aria-busy', 'false');
    if (focusedKebab) {
      var again = grid.querySelector('.icon-btn[data-k="' + focusedKebab + '"]');
      if (again) again.focus({ preventScroll: true });
    }
    state.start = start;
    state.end = end;
    state.rows = rows;
    state.renderCount += 1;
    state.lastRenderMs = performance.now() - renderStart;
    syncSelectionMark();
    updateCounts();
    updateHudDynamic();
    if (state.firstRender) {
      state.firstRender = false;
      state.firstRowMs = performance.now() - t0;
      requestAnimationFrame(function () {
        requestAnimationFrame(updateHudPaint);
      });
    }
  }

  function renderEmpty() {
    grid.innerHTML = '<p class="empty" role="status">No icons match the current search or filters.</p>';
    grid.setAttribute('aria-busy', 'false');
    state.start = 0;
    state.end = 0;
    state.rows = 0;
    updateCounts();
    updateHudDynamic();
  }

  function countNodes() {
    return grid.querySelectorAll('*').length;
  }

  function scheduleWindow() {
    if (state.rendering) return;
    state.rendering = true;
    requestAnimationFrame(function () {
      state.rendering = false;
      renderWindow();
    });
  }

  function resetToGridTop() {
    var gridTop = grid.getBoundingClientRect().top + window.scrollY;
    if (window.scrollY > gridTop) window.scrollTo({ top: Math.max(0, gridTop - 8), behavior: 'auto' });
  }

  /* ------------------------------------------------------------------- HUD */
  function metaContent() {
    var el = doc.querySelector('meta[name="nexa-gallery"]');
    var meta = {};
    ((el && el.getAttribute('content')) || '').split(';').forEach(function (pair) {
      var i = pair.indexOf('=');
      if (i > 0) meta[pair.slice(0, i)] = pair.slice(i + 1);
    });
    return meta;
  }
  var META = metaContent();

  function updateHudDynamic() {
    if (!hud.render) return;
    hud.render.textContent = formatMs(state.lastRenderMs);
    hud.nodes.textContent = String(countNodes());
    if (gridSub && state.rows) {
      gridSub.textContent = state.filtered.length + ' of ' + icons.length + ' icons · ' + state.rows +
        '';
    }
  }

  function updateHudPaint() {
    var paint = window.__NEXA_PAINT__ || {};
    var fp = paint['first-paint'];
    var fcp = paint['first-contentful-paint'];
    hud.shell.textContent = formatBytes(Number(META.shellBytes));
    hud.data.textContent = formatBytes(Number(META.dataBytes));
    hud.app.textContent = formatBytes(Number(META.appBytes));
    if (hud.shellHero) hud.shellHero.textContent = formatBytes(Number(META.shellBytes));
    if (hud.dataHero) hud.dataHero.textContent = formatBytes(Number(META.dataBytes));
    hud.firstRow.textContent = formatMs(state.firstRowMs || 0);
    if (hud.eval) hud.eval.textContent = formatMs(evalMs);
    hud.fp.textContent = fp ? Math.round(fp) + ' ms' : 'n/a';
    hud.fcp.textContent = fcp ? Math.round(fcp) + ' ms' : 'n/a';
    hud.icons.textContent = String(icons.length);
    if (hud.note) {
      hud.note.textContent = 'Gallery JS before first paint: 0 ms. Browser paint timings (headless Chromium): FP ' +
        (fp ? Math.round(fp) + ' ms' : 'n/a') + ', FCP ' + (fcp ? Math.round(fcp) + ' ms' : 'n/a') +
        ' — the browser paint floor, not gallery work. Script load+eval ' + formatMs(evalMs) +
        ', boot→first grid row ' + formatMs(state.firstRowMs || 0) +
        ', last window render ' + formatMs(state.lastRenderMs) + '.';
    }
  }

  /* --------------------------------------------------------------- controls */
  function setSize(size) {
    if (!SIZES[size]) return;
    state.size = size;
    root.setAttribute('data-size', size);
    setPressed('#size-seg', 'data-size', size);
    state.rowH = measureRowH();
    if (state.selected) drawerSize.textContent = size + ' px · stroke ' + SIZES[size];
    applyFilters();
    syncUrl();
    announce('Size ' + size + ' pixels, stroke weight ' + SIZES[size]);
  }
  function setTheme(theme) {
    if (THEMES.indexOf(theme) < 0) return;
    state.theme = theme;
    root.setAttribute('data-theme', theme);
    setPressed('#theme-seg', 'data-theme', theme);
    syncUrl();
    announce(theme === 'system' ? 'Theme follows the system preference' : theme + ' theme');
  }
  function setColor(color) {
    if (COLORS.indexOf(color) < 0) return;
    state.color = color;
    root.setAttribute('data-color', color);
    setPressed('#color-seg', 'data-color', color);
    updateMotionState();
    syncUrl();
    announce(color === 'rainbow' ? 'Rainbow mode: each card supplies a different inherited currentColor' : color + ' accent');
  }
  function setPlayAll(on) {
    state.playAll = on;
    playAllBtn.setAttribute('aria-pressed', String(on));
    playAllBtn.textContent = on ? '❚❚ Stop all' : '▶ Play all';
    renderWindow(true);
    updateMotionState();
    announce(on ? 'Playing every visible animation' : 'Animations back to semantic triggers');
  }
  function setReduce(on) {
    state.reduce = on;
    root.classList.toggle('reduce-motion', on);
    reduceToggle.checked = on;
    updateMotionState();
    announce(on ? 'Reduced motion on: CSS motion disabled' : 'Reduced motion off');
  }
  function updateMotionState() {
    var media = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
    var os = media && media.matches ? 'reduce' : 'no-preference';
    motionState.setAttribute('data-reduced', String(state.reduce));
    var text;
    if (state.reduce) text = 'Reduced motion ON — html.reduce-motion disables presets, swaps, fills and 3D (CSS only). OS preference: ' + os + '.';
    else if (state.playAll) text = 'Play all ON — every rendered icon uses trigger="always". OS reduced-motion preference: ' + os + '.';
    else text = 'Hover to animate. Windowed grid renders only visible rows. OS reduced-motion preference: ' + os + '.';
    if (state.color === 'rainbow') text += ' Rainbow mode inherits a hue from each card; icons still paint from currentColor.';
    motionState.textContent = text;
  }

  function populateControls() {
    DATA.presets.forEach(function (preset) {
      var opt = doc.createElement('option');
      opt.value = preset; opt.textContent = preset;
      presetFilter.appendChild(opt);
    });
    semanticTriggers.forEach(function (trigger) {
      var opt = doc.createElement('option');
      opt.value = trigger; opt.textContent = trigger;
      triggerFilter.appendChild(opt);
    });
    if (GENRES.length) {
      categoryGroup.hidden = false;
      categoryFilter.innerHTML = '<option value="">All ' + (GENRE_MODE === 'category' ? 'categories' : 'collections') + '</option>';
      GENRES.forEach(function (genre) {
        var opt = doc.createElement('option');
        opt.value = GENRE_MODE + ':' + genre.id;
        opt.textContent = (genre.label || genre.id) + ' (' + (genre.icons || []).length + ')';
        categoryFilter.appendChild(opt);
      });
    }
  }

  function renderTriggerDemo() {
    var samples = [
      { k: 'bell', label: 'hover', sub: 'pointer over', preset: 'ring', trigger: 'hover' },
      { k: 'loader-circle', label: 'always', sub: 'loop', preset: 'spin', trigger: 'always' },
      { k: 'heart', label: 'press', sub: 'hold button', preset: 'heartbeat', trigger: 'press', button: true },
      { k: 'sparkles', label: 'inview', sub: 'scroll reveal', preset: 'pop', trigger: 'inview' }
    ];
    var html = '';
    for (var i = 0; i < samples.length; i++) {
      var sample = samples[i];
      var icon = byKebab[sample.k] || icons[i];
      if (!icon) continue;
      var svg = svgHTML(icon, { anim: sample.preset, trigger: sample.trigger });
      var label = '<span class="trigger-label"><b>' + sample.label + '</b><span>' + sample.sub + '</span></span>';
      html += sample.button
        ? '<button class="trigger-tile trigger-tile-press" type="button" aria-label="Hold to preview the press trigger">' + svg + label + '</button>'
        : '<div class="trigger-tile">' + svg + label + '</div>';
    }
    triggerDemo.innerHTML = html;
  }

  /* ---------------------------------------------------------------- drawer */
  function svgSource(icon) {
    var stroke = SIZES[state.size];
    return '<svg class="nexa-icon" width="' + state.size + '" height="' + state.size + '" viewBox="0 0 24 24"' +
      ' fill="none" stroke="currentColor" stroke-width="' + stroke + '"' +
      ' stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (icon.i || '') + '</svg>';
  }
  function buildSnippets(icon) {
    var size = state.size;
    var source = svgSource(icon);
    return {
      sprite: '<svg class="nexa-icon" width="' + size + '" height="' + size + '" role="img" aria-label="' + esc(icon.n) + '"><use href="#nexa-' + icon.k + '"/></svg>\n<!-- requires the Nexa sprite inlined once on the page -->',
      inline: source,
      react: 'import { ' + icon.n + ' } from "@nexa/icons";\n\n' +
        'export function Example() {\n  return <' + icon.n + ' size={' + size + '} animate="' + icon.p + '" />;\n}',
      js: 'import { svg } from "@nexa/icons/js";\n\n' +
        'const markup = svg("' + icon.k + '", { size: ' + size + ', animate: "' + icon.p + '" });\n' +
        'container.innerHTML = markup;',
      go: 'import (\n  "fmt"\n\n  nexaicons "github.com/nexa-icons/nexa/go"\n)\n\n' +
        'icon, ok := nexaicons.Get("' + icon.n + '")\n' +
        'if ok {\n  fmt.Println(icon.SVG(nexaicons.Size(' + size + ')))\n}',
      rust: 'use nexa_icons::{get, SvgOptions};\n\n' +
        'let icon = get("' + icon.n + '").expect("known icon");\n' +
        'let markup = icon.svg(SvgOptions::new().size(' + size + '));'
    };
  }
  function resetCopyButtons() {
    var buttons = copyGrid.querySelectorAll('.copy-btn');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('copied');
      var label = buttons[i].querySelector('.copy-label');
      if (label && label.dataset.original) label.textContent = label.dataset.original;
    }
  }
  function fillDrawer(icon) {
    currentIcon = icon;
    drawerName.textContent = icon.n;
    drawerKebab.textContent = icon.k;
    if (drawerSprite) drawerSprite.textContent = '#nexa-' + icon.k;
    drawerPreview.innerHTML = svgHTML(icon, { anim: icon.p, trigger: icon.t });
    proofTiles.forEach(function (tile) { tile.innerHTML = svgHTML(icon); });
    var aliases = icon.a.filter(function (alias) { return alias !== icon.n; });
    drawerAliases.innerHTML = aliases.length
      ? aliases.map(function (alias) { return '<span class="chip">' + esc(alias) + '</span>'; }).join('')
      : '<span class="chip">—</span>';
    drawerKeywords.innerHTML = icon.w.map(function (word) { return '<span class="chip">' + esc(word) + '</span>'; }).join('');
    drawerPreset.textContent = icon.p;
    drawerTrigger.textContent = icon.t;
    drawerSize.textContent = state.size + ' px · stroke ' + SIZES[state.size];
    drawerFill.hidden = !icon.fill;
    if (icon.fill) drawerFill.textContent = 'fillSafe';
    if (proofNote) {
      proofNote.innerHTML = 'Six identical <code>&lt;use href="#nexa-' + esc(icon.k) +
        '"/&gt;</code> nodes. Only each tile\'s inherited <code>color</code> differs — proof that the icon paints exclusively from <code>currentColor</code>.';
    }
    drawerSvg.textContent = svgSource(icon);
    currentSnippets = buildSnippets(icon);
    var hints = {
      sprite: '<use href="#nexa-' + icon.k + '"/>',
      inline: '<svg>…</svg>',
      react: 'import { ' + icon.n + ' } from "@nexa/icons"',
      js: 'svg("' + icon.k + '", { size: ' + state.size + ' })',
      go: 'nexaicons.Get("' + icon.n + '")',
      rust: 'nexa_icons::get("' + icon.n + '")'
    };
    var buttons = copyGrid.querySelectorAll('.copy-btn');
    for (var i = 0; i < buttons.length; i++) {
      var kind = buttons[i].getAttribute('data-copy');
      var hint = buttons[i].querySelector('.copy-hint');
      if (hint && hints[kind]) hint.textContent = hints[kind];
    }
    resetCopyButtons();
    var pair = icon.swap ? paired[icon.k] : null;
    if (pair && swapDetail) {
      swapDetail.hidden = false;
      drawerSwap.innerHTML = '<span class="nexa-swap__a">' + svgHTML(icon) +
        '</span><span class="nexa-swap__b">' + svgHTML(pair.to) + '</span>';
      drawerSwap.setAttribute('data-mode', pair.mode);
      drawerSwap.setAttribute('data-nexa-active', 'false');
      drawerSwapName.textContent = icon.n + ' ↔ ' + pair.to.n;
      swapToggle.setAttribute('aria-pressed', 'false');
      swapToggle.setAttribute('aria-label', 'Play semantic swap between ' + icon.n + ' and ' + pair.to.n);
    } else if (swapDetail) {
      swapDetail.hidden = true;
    }
  }
  function syncSelectionMark() {
    var current = state.selected ? state.selected.k : null;
    var buttons = grid.querySelectorAll('.icon-btn');
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i].getAttribute('data-k') === current) buttons[i].setAttribute('aria-current', 'true');
      else buttons[i].removeAttribute('aria-current');
    }
  }
  function openDrawer(icon, opts) {
    opts = opts || {};
    if (typeof icon === 'string') icon = byKebab[icon];
    if (!icon) return;
    var wasOpen = drawer.open;
    if (!wasOpen) lastFocused = doc.activeElement;
    state.selected = icon;
    fillDrawer(icon);
    syncSelectionMark();
    if (!wasOpen) {
      if (typeof drawer.showModal === 'function') drawer.showModal(); else drawer.setAttribute('open', '');
      drawerBody.scrollTop = 0;
      if (opts.focus !== false) drawerClose.focus({ preventScroll: true });
    }
    syncUrl();
    if (!opts.silent) announce(icon.n + ' details opened. Use left and right arrows to browse.');
  }
  function closeDrawer() {
    if (!drawer.open) return;
    var kebab = state.selected ? state.selected.k : null;
    state.selected = null;
    drawer.close();
    syncSelectionMark();
    syncUrl();
    var target = null;
    if (kebab && byKebab[kebab]) target = grid.querySelector('.icon-btn[data-k="' + kebab + '"]');
    if (!target && lastFocused && lastFocused.isConnected && lastFocused.focus) target = lastFocused;
    if (target && target.focus) target.focus({ preventScroll: true });
    announce('Details closed');
  }
  function stepSelection(delta) {
    var list = state.filtered.length ? state.filtered : icons;
    var index = state.selected ? list.indexOf(state.selected) : -1;
    var next = index + delta;
    if (next < 0) next = list.length - 1;
    if (next >= list.length) next = 0;
    ensureVisible(list[next]);
    openDrawer(list[next], { silent: true });
    announce(list[next].n + ' (' + (next + 1) + ' of ' + list.length + ')');
  }

  /* -------------------------------------------------------------- clipboard */
  function copyText(text) {
    return new Promise(function (resolve) {
      var done = function (ok) { resolve(ok); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { done(true); }, fallback);
      } else { fallback(); }
      function fallback() {
        try {
          var area = doc.createElement('textarea');
          area.value = text;
          area.setAttribute('readonly', '');
          area.style.cssText = 'position:fixed;top:-1000px;left:-1000px;opacity:0';
          doc.body.appendChild(area);
          area.select();
          area.setSelectionRange(0, text.length);
          var ok = false;
          try { ok = doc.execCommand('copy'); } catch (err) { ok = false; }
          area.remove();
          done(ok);
        } catch (err) { done(false); }
      }
    });
  }
  function copySnippet(button) {
    var kind = button.getAttribute('data-copy');
    var text = currentSnippets[kind];
    if (!text) return;
    var label = button.querySelector('.copy-label');
    if (!label) return;
    var original = label.dataset.original || label.textContent;
    label.dataset.original = original;
    copyText(text).then(function (ok) {
      button.classList.toggle('copied', ok);
      label.textContent = ok ? 'Copied' : 'Copy failed';
      announce(ok ? 'Copied ' + kind + ' snippet to clipboard' : 'Copy failed — select the SVG source and copy manually.');
      var existing = copyTimers.get(button);
      if (existing) window.clearTimeout(existing);
      copyTimers.set(button, window.setTimeout(function () {
        button.classList.remove('copied');
        label.textContent = original;
      }, 1600));
    });
  }

  /* ------------------------------------------------------- keyboard/scroll */
  function ensureVisible(icon) {
    var index = state.filtered.indexOf(icon);
    if (index < 0) return;
    var row = Math.floor(index / state.cols);
    var gridTop = grid.getBoundingClientRect().top + window.scrollY;
    var viewH = window.innerHeight || 800;
    var targetTop = gridTop + row * state.rowH - Math.max(80, (viewH - state.rowH) / 2);
    if (targetTop < gridTop) targetTop = gridTop;
    window.scrollTo({ top: Math.max(0, targetTop), behavior: 'auto' });
    renderWindow(true);
  }
  function focusIconAt(index) {
    var list = state.filtered;
    if (!list.length) return;
    var wrapped = ((index % list.length) + list.length) % list.length;
    var icon = list[wrapped];
    state.activeK = icon.k;
    ensureVisible(icon);
    var button = grid.querySelector('.icon-btn[data-k="' + icon.k + '"]');
    if (button) { button.focus({ preventScroll: true }); button.scrollIntoView({ block: 'nearest' }); }
  }
  function setActiveCard(kebab) {
    state.activeK = kebab;
  }
  function moveGridFocus(delta) {
    var button = doc.activeElement && doc.activeElement.closest ? doc.activeElement.closest('.icon-btn') : null;
    if (!button) return;
    var kebab = button.getAttribute('data-k');
    var icon = byKebab[kebab];
    var index = state.filtered.indexOf(icon);
    if (index < 0) return;
    focusIconAt(index + delta);
  }

  function announce(message) {
    if (!announcer) return;
    announcer.textContent = '';
    window.setTimeout(function () { announcer.textContent = message; }, 20);
  }

  /* ------------------------------------------------------------- lazy sections */
  var lazySections = [
    { id: 'sec-swaps', available: swapPairs.length > 0, render: renderSwapsSection },
    { id: 'sec-categories', available: GENRES.length > 0, render: renderCategoriesSection },
    { id: 'sec-shapes', available: true, render: renderShapesSection },
    { id: 'sec-fills', available: fillSafeIcons.length > 0, render: renderFillsSection },
    { id: 'sec-3d', available: true, render: render3dSection },
    { id: 'sec-effects', available: true, render: renderEffectsSection },
    { id: 'sec-illustrations', available: (DATA.illustrations || []).length > 0, render: renderIllustrationsSection }
  ];
  var lazyObserver = null;

  function initLazySections() {
    if ('IntersectionObserver' in window) {
      lazyObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          lazyObserver.unobserve(entry.target);
          renderLazy(entry.target);
        });
      }, { rootMargin: '360px 0px' });
    }
    lazySections.forEach(function (section) {
      var el = doc.getElementById(section.id);
      if (!el) return;
      if (!section.available) { el.hidden = true; return; }
      el.__render = section.render;
      if (lazyObserver) lazyObserver.observe(el);
      else renderLazy(el);
    });
  }
  function renderLazy(el) {
    if (!el || el.__done || !el.__render) return;
    el.__done = true;
    var body = el.querySelector('[data-body]');
    if (!body) return;
    body.innerHTML = '';
    el.__render(body);
  }

  function svgKebab(kebab, opts) {
    var icon = byKebab[kebab] || icons[0];
    return icon ? svgHTML(icon, opts) : '';
  }
  function sampleIcon(preferred) {
    for (var i = 0; i < preferred.length; i++) if (byKebab[preferred[i]]) return byKebab[preferred[i]];
    return icons[0];
  }

  function renderSwapsSection(body) {
    var html = '<div class="swaps" role="list" aria-label="Icon swap pairs">';
    for (var i = 0; i < swapPairs.length; i++) {
      var pair = swapPairs[i];
      var from = byKebab[pair[0]], to = byKebab[pair[1]];
      html += '<div class="swap-card" role="listitem">' +
        '<button class="swap-btn" type="button" aria-pressed="false" data-from="' + esc(from.n) + '" data-to="' + esc(to.n) + '">' +
        '<span class="nexa-swap" data-mode="' + esc(pair[2]) + '" data-nexa-active="false" style="--nexa-swap-dur:280ms" aria-hidden="true">' +
        '<span class="nexa-swap__a">' + svgHTML(from) + '</span><span class="nexa-swap__b">' + svgHTML(to) + '</span></span>' +
        '<span class="swap-name">' + esc(from.n) + ' ↔ ' + esc(to.n) + '</span></button></div>';
    }
    body.innerHTML = html + '</div><p class="section-note">Click or press Enter on a pair: the two glyphs share one box and animate with CSS only (mirror, flip, rotate, slide, fade). Reduced motion turns the transition off.</p>';
    body.addEventListener('click', function (event) {
      var button = event.target.closest('.swap-btn');
      if (!button) return;
      var widget = button.querySelector('.nexa-swap');
      if (!widget) return;
      var next = widget.getAttribute('data-nexa-active') !== 'true';
      widget.setAttribute('data-nexa-active', next ? 'true' : 'false');
      button.setAttribute('aria-pressed', next ? 'true' : 'false');
      announce('Swap: showing ' + (next ? button.getAttribute('data-to') : button.getAttribute('data-from')));
    });
  }

  function renderCategoriesSection(body) {
    var title = doc.getElementById('categories-title');
    var sub = doc.getElementById('categories-sub');
    var isCategories = GENRE_MODE === 'category';
    if (title) title.textContent = isCategories ? 'Categories' : 'Collections';
    if (sub) {
      sub.textContent = isCategories
        ? 'From meta.categories (data/categories.json) — click a category to filter the grid'
        : 'Category manifest not in the tree yet — showing the authored Nexa concept map (meta.nexaMap); upgrades automatically when data/categories.json lands';
    }
    var sample = sampleIcon(['briefcase', 'layers', 'bell']);
    var html = '<div class="cat-list" role="list">';
    GENRES.forEach(function (genre) {
      var count = categoryCount(genre);
      html += '<div role="listitem"><button class="cat-card" type="button" data-genre="' + GENRE_MODE + ':' + esc(genre.id) +
        '" aria-pressed="' + (state.genre === GENRE_MODE + ':' + genre.id) + '">' +
        '<span class="cat-icon">' + svgKebab(genre.icons && genre.icons[0] ? genre.icons[0] : sample.k) + '</span>' +
        '<span class="cat-text"><b>' + esc(genre.label || genre.id) + '</b><span>' + count + ' icons' +
        (genre.description ? ' · ' + esc(genre.description) : '') + '</span></span></button></div>';
    });
    body.innerHTML = html + '</div>';
    body.addEventListener('click', function (event) {
      var card = event.target.closest('.cat-card');
      if (!card) return;
      var genre = card.getAttribute('data-genre');
      state.genre = state.genre === genre ? '' : genre;
      categoryFilter.value = state.genre;
      applyFilters();
      syncUrl();
      var cards = body.querySelectorAll('.cat-card');
      for (var i = 0; i < cards.length; i++) cards[i].setAttribute('aria-pressed', String(cards[i].getAttribute('data-genre') === state.genre));
      resetToGridTop();
      announce(state.genre ? 'Filtered to ' + card.querySelector('.cat-text b').textContent : 'All icons');
    });
  }
  function categoryCount(genre) {
    if (genre.icons && genre.icons.length) return genre.icons.length;
    var count = 0;
    icons.forEach(function (icon) { if (genreMatches(icon, GENRE_MODE + ':' + genre.id)) count += 1; });
    return count;
  }

  function renderShapesSection(body) {
    var icon = sampleIcon(['bell', 'star', 'briefcase']);
    var shapes = ['square', 'rounded', 'circle', 'pill', 'squircle', 'diamond', 'hexagon'];
    var html = '<div class="shapes-grid">';
    shapes.forEach(function (shape) {
      var h = shape === 'pill' ? 41 : 56;
      html += '<div class="shape-tile"><span class="nexa-icon-frame nexa-shape nexa-shape--' + shape + '" style="width:56px;height:' + h + 'px">' +
        svgHTML(icon) + '</span><span class="shape-name">' + shape + '</span></div>';
    });
    body.innerHTML = html + '</div><p class="section-note">Shape containers come from animations.css; the tint is <code>color-mix(currentColor 14%)</code> so it follows the theme. Markup: <code>.nexa-shape--&lt;shape&gt;</code> around the icon.</p>';
  }

  function renderFillsSection(body) {
    var icon = fillSafeIcons[0] || icons[0];
    body.innerHTML = '<div class="fill-grid">' +
      '<div class="fill-tile">' + svgHTML(icon) + '<span class="fill-name">outline</span></div>' +
      '<div class="fill-tile">' + svgHTML(icon, { attrs: 'data-fill-state="soft"' }) + '<span class="fill-name">duotone · soft</span></div>' +
      '<div class="fill-tile">' + svgHTML(icon, { attrs: 'data-fill-state="true"' }) + '<span class="fill-name">solid</span></div>' +
      '<div class="fill-tile">' + svgHTML(icon, { attrs: 'id="fill-anim-icon" data-fill-state="false" data-fill-anim="true"' }) + '<span class="fill-name">animated fill</span></div>' +
      '</div>' +
      '<div class="fill-actions"><button class="btn" id="fill-toggle" type="button" aria-pressed="false">Toggle fill animation</button>' +
      '<span class="section-note" style="margin:0">Filling uses <code>fill:currentColor</code> + <code>fill-opacity</code>; only closed-geometry (<code>fillSafe</code>) icons fill cleanly, reduced motion disables the 320ms transition.</span></div>';
    var toggle = body.querySelector('#fill-toggle');
    var animated = body.querySelector('#fill-anim-icon');
    toggle.addEventListener('click', function () {
      var on = animated.getAttribute('data-fill-state') !== 'true';
      animated.setAttribute('data-fill-state', on ? 'true' : 'false');
      toggle.setAttribute('aria-pressed', String(on));
      toggle.textContent = on ? 'Reset fill' : 'Toggle fill animation';
      announce(on ? 'Fill animation on' : 'Fill animation reset');
    });
  }

  function render3dSection(body) {
    var presets = [
      { mode: 'tilt', icon: sampleIcon(['crown', 'bell']) },
      { mode: 'flip', icon: sampleIcon(['plane', 'cloud']) },
      { mode: 'orbit', icon: sampleIcon(['rocket', 'globe']) },
      { mode: 'extrude', icon: sampleIcon(['shield', 'star']) }
    ];
    var html = '<div class="td-grid">';
    presets.forEach(function (preset) {
      html += '<button class="td-tile" type="button" aria-pressed="false">' +
        '<span class="nexa-3d" data-nexa-3d="' + preset.mode + '">' + svgHTML(preset.icon) + '</span>' +
        '<span class="td-name">' + preset.mode + '</span></button>';
    });
    body.innerHTML = html + '</div><p class="section-note">Hover a tile, or focus it and press Enter/Space to preview: CSS <code>perspective</code> + <code>transform</code> only — no WebGL. Reduced motion removes all transforms.</p>';
    body.addEventListener('click', function (event) {
      var tile = event.target.closest('.td-tile');
      if (!tile) return;
      var on = !tile.classList.contains('is-preview');
      tile.classList.toggle('is-preview', on);
      tile.setAttribute('aria-pressed', String(on));
      announce((on ? 'Showing ' : 'Hiding ') + (tile.querySelector('.td-name') ? tile.querySelector('.td-name').textContent : '3D') + ' preview');
    });
  }

  var effectGradSeq = 0;
  function gradientSvgHTML(icon, grad, size) {
    var id = 'nexa-fx-g' + (++effectGradSeq);
    return '<svg class="nexa-icon nexa-grad--' + grad + '" viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" stroke="url(#' + id + ')" style="stroke:url(#' + id + ')" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" style="stop-color:var(--nexa-grad-a)"/><stop offset="100%" style="stop-color:var(--nexa-grad-b)"/>' +
      '</linearGradient></defs>' + (icon.i || '') + '</svg>';
  }
  function renderEffectsSection(body) {
    var glassPresets = ['frost', 'ice', 'clear', 'steel', 'neon', 'jelly', 'aurora'];
    var gradients = ['aurora', 'ice', 'sunset', 'emerald', 'ocean', 'candy', 'gold', 'mono'];
    var glassIcons = ['bell', 'star', 'heart', 'crown', 'sparkles', 'zap', 'rocket'].map(function (k) { return byKebab[k] || icons[0]; });
    var gradIcons = ['sparkles', 'zap', 'rocket', 'trophy', 'wave', 'palette', 'target', 'sun'].map(function (k) { return byKebab[k] || icons[0]; });
    var html = '<div class="fx-grid">';
    glassPresets.forEach(function (preset, i) {
      html += '<div class="fx-tile"><span class="nexa-icon-frame nexa-glass nexa-glass--' + preset + '" style="width:64px;height:64px">' +
        svgHTML(glassIcons[i]) + '</span><span class="fx-label">glass: ' + preset + '</span></div>';
    });
    gradients.forEach(function (grad, i) {
      html += '<div class="fx-tile">' + gradientSvgHTML(gradIcons[i], grad, 32) +
        '<span class="fx-label">gradient: ' + grad + '</span></div>';
    });
    glassPresets.forEach(function (preset, i) {
      html += '<div class="fx-tile"><span class="nexa-icon-frame nexa-glass nexa-glass--' + preset + ' nexa-grad--' + gradients[i] + '" data-nexa-gradient="' + gradients[i] + '" style="width:64px;height:64px">' +
        gradientSvgHTML(glassIcons[i], gradients[i], 24) + '</span><span class="fx-label">' + preset + ' + ' + gradients[i] + '</span></div>';
    });
    ['sheen', 'pulse', 'float'].forEach(function (mode, i) {
      var grad = gradients[i];
      html += '<div class="fx-tile"><span class="nexa-icon-frame nexa-glass nexa-glass--neon nexa-grad--' + grad + '" data-nexa-gradient="' + grad + '" data-nexa-glass-anim="' + mode + '" style="width:64px;height:64px">' +
        gradientSvgHTML(glassIcons[i], grad, 24) + '</span><span class="fx-label">glass anim: ' + mode + '</span></div>';
    });
    html += '<div class="fx-tile"><span class="nexa-icon-frame nexa-glass nexa-glass--jelly nexa-grad--aurora" data-nexa-gradient="aurora" style="width:64px;height:64px">' +
      gradientSvgHTML(glassIcons[0], 'aurora', 24) + '</span><span class="fx-label">jelly + aurora</span></div>';
    html += '<div class="fx-tile">' + gradientSvgHTML(glassIcons[1], 'candy', 32).replace('class="nexa-icon', 'data-nexa-gradient-anim="hue" class="nexa-icon') + '<span class="fx-label">gradient anim: hue</span></div>';
    html += '<div class="fx-tile"><span class="nexa-icon-frame nexa-glass nexa-glass--neon nexa-grad--aurora" data-nexa-gradient="aurora" data-nexa-glass-anim="sheen" data-nexa-glass-trigger="hover" style="width:64px;height:64px">' +
      gradientSvgHTML(glassIcons[2], 'aurora', 24) + '</span><span class="fx-label">glass trigger: hover</span></div>';
    body.innerHTML = html + '</div><p class="section-note">Glass uses <code>backdrop-filter</code>, layered gradients and inset highlights; gradient strokes use an SVG <code>linearGradient</code> driven by <code>--nexa-grad-a/b</code> CSS variables. Glass motion (<code>sheen</code>/<code>pulse</code>/<code>float</code>) is CSS-only; both effects and their motion are reduced-motion safe.</p>';
  }

  function renderIllustrationsSection(body) {
    var illustrations = DATA.illustrations || [];
    var sub = doc.getElementById('illustrations-sub');
    if (sub) sub.textContent = illustrations.length + ' inline duotone SVGs from illustrations/manifest.json — currentColor, light + dark themes';
    var html = '<div class="illus-grid">';
    illustrations.forEach(function (item) {
      html += '<div class="illus-card"><div class="illus-art" aria-hidden="true">' +
        (item.svg ? item.svg : '<img loading="lazy" alt="' + esc(item.title) + '" src="' + esc(item.src) + '">') +
        '</div><b>' + esc(item.title) + '</b>' + (item.description ? '<span>' + esc(item.description) + '</span>' : '') + '</div>';
    });
    body.innerHTML = html + '</div>';
  }

  /* ------------------------------------------------------------- events */
  function bindEvents() {
    if (glassFilter) {
      glassFilter.addEventListener('change', function () {
        var value = glassFilter.value;
        if (value) grid.setAttribute('data-glass', value); else grid.removeAttribute('data-glass');
        announce(value ? 'Glass "' + value + '" applied to all icons' : 'Glass off');
      });
    }
    search.addEventListener('input', function () {
      state.q = search.value;
      applyFilters();
      syncUrl();
    });
    clearBtn.addEventListener('click', function () {
      search.value = ''; state.q = '';
      applyFilters(); syncUrl(); search.focus();
      announce('Search cleared');
    });
    $('#size-seg').addEventListener('click', function (event) {
      var button = event.target.closest('button[data-size]');
      if (button) setSize(button.getAttribute('data-size'));
    });
    $('#theme-seg').addEventListener('click', function (event) {
      var button = event.target.closest('button[data-theme]');
      if (button) setTheme(button.getAttribute('data-theme'));
    });
    $('#color-seg').addEventListener('click', function (event) {
      var button = event.target.closest('button[data-color]');
      if (button) setColor(button.getAttribute('data-color'));
    });
    presetFilter.addEventListener('change', function () {
      state.preset = presetFilter.value;
      applyFilters(); syncUrl();
      announce(state.preset ? 'Filtered to ' + state.preset + ' preset' : 'All presets');
    });
    triggerFilter.addEventListener('change', function () {
      state.trigger = triggerFilter.value;
      applyFilters(); syncUrl();
    });
    categoryFilter.addEventListener('change', function () {
      state.genre = categoryFilter.value;
      applyFilters(); syncUrl();
    });
    animatedOnly.addEventListener('change', function () {
      state.animatedOnly = animatedOnly.checked;
      applyFilters(); syncUrl();
    });
    playAllBtn.addEventListener('click', function () { setPlayAll(!state.playAll); });
    reduceToggle.addEventListener('change', function () { setReduce(reduceToggle.checked); });

    grid.addEventListener('click', function (event) {
      var button = event.target.closest('.icon-btn');
      if (button) openDrawer(button.getAttribute('data-k'));
    });

    drawerClose.addEventListener('click', closeDrawer);
    drawer.addEventListener('click', function (event) { if (event.target === drawer) closeDrawer(); });
    drawer.addEventListener('cancel', function (event) { event.preventDefault(); closeDrawer(); });
    drawer.addEventListener('close', function () {
      if (state.selected) { state.selected = null; syncSelectionMark(); syncUrl(); }
    });
    replayBtn.addEventListener('click', function () {
      if (!currentIcon) return;
      var preview = drawerPreview.querySelector('.nexa-icon');
      if (!preview) return;
      preview.setAttribute('data-nexa-trigger', 'manual');
      preview.removeAttribute('data-nexa-active');
      void preview.getBoundingClientRect();
      preview.setAttribute('data-nexa-active', 'true');
      var restore = function () {
        preview.setAttribute('data-nexa-trigger', currentIcon.t);
        preview.removeAttribute('data-nexa-active');
      };
      preview.addEventListener('animationend', restore, { once: true });
      window.setTimeout(restore, 1200);
      announce('Replaying ' + currentIcon.p);
    });
    swapToggle.addEventListener('click', function () {
      var next = drawerSwap.getAttribute('data-nexa-active') !== 'true';
      drawerSwap.setAttribute('data-nexa-active', next ? 'true' : 'false');
      swapToggle.setAttribute('aria-pressed', String(next));
      announce(next ? 'Swap on' : 'Swap reset');
    });
    copyGrid.addEventListener('click', function (event) {
      var button = event.target.closest('.copy-btn');
      if (button) copySnippet(button);
    });

    window.addEventListener('nexa:paint', function () { updateHudPaint(); });
    window.addEventListener('load', function () { updateHudPaint(); window.setTimeout(updateHudPaint, 120); });
    doc.addEventListener('keydown', function (event) {
      var target = event.target;
      var typing = target instanceof HTMLElement && (target.matches('input, textarea, select') || target.isContentEditable);
      if (event.key === '/' && !typing) { event.preventDefault(); search.focus(); search.select(); return; }
      if (event.key === 'Escape') {
        if (drawer.open) { event.preventDefault(); closeDrawer(); return; }
        if (typing || search.value) {
          search.value = ''; state.q = ''; applyFilters(); syncUrl(); search.blur();
          return;
        }
        return;
      }
      if (drawer.open && (event.key === 'ArrowRight' || event.key === 'ArrowLeft')) {
        event.preventDefault(); stepSelection(event.key === 'ArrowRight' ? 1 : -1); return;
      }
      if (!drawer.open && !typing && target instanceof HTMLElement && target.closest('.icon-btn')) {
        var cols = state.cols || currentCols();
        var move = null;
        if (event.key === 'ArrowRight') move = 1;
        else if (event.key === 'ArrowLeft') move = -1;
        else if (event.key === 'ArrowDown') move = cols;
        else if (event.key === 'ArrowUp') move = -cols;
        else if (event.key === 'PageDown') move = cols * Math.max(1, Math.floor(grid.querySelectorAll('.row').length / 2));
        else if (event.key === 'PageUp') move = -cols * Math.max(1, Math.floor(grid.querySelectorAll('.row').length / 2));
        if (event.key === 'Home') { event.preventDefault(); focusIconAt(0); return; }
        if (event.key === 'End') { event.preventDefault(); focusIconAt(state.filtered.length - 1); return; }
        if (move != null) { event.preventDefault(); moveGridFocus(move); }
      }
    });

    grid.addEventListener('focusin', function (event) {
      var button = event.target.closest ? event.target.closest('.icon-btn') : null;
      if (button) setActiveCard(button.getAttribute('data-k'));
    });
    window.addEventListener('scroll', scheduleWindow, { passive: true });
    window.addEventListener('resize', function () {
      var cols = currentCols();
      if (cols !== state.cols) { state.cols = cols; renderWindow(true); }
    });
    window.addEventListener('hashchange', function () {
      var match = /^#icon=([a-z0-9-]+)$/.exec(location.hash || '');
      if (match && byKebab[match[1]]) { ensureVisible(byKebab[match[1]]); openDrawer(match[1], { silent: true }); }
      else if (!match && drawer.open) closeDrawer();
    });
    var media = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
    if (media) {
      var onChange = function () { updateMotionState(); };
      if (media.addEventListener) media.addEventListener('change', onChange);
      else if (media.addListener) media.addListener(onChange);
    }
  }

  /* ------------------------------------------------------------------ boot */
  function boot() {
    populateControls();
    readUrl();
    renderTriggerDemo();
    bindEvents();
    state.cols = currentCols();
    state.rowH = measureRowH();
    applyFilters();
    state.booting = false;
    syncUrl();
    updateMotionState();
    initLazySections();
    updateHudPaint();
    if (state.initialIcon) {
      var icon = byKebab[state.initialIcon];
      if (icon) {
        requestAnimationFrame(function () {
          ensureVisible(icon);
          openDrawer(icon, { focus: true });
        });
      }
    }
    // Announce honest boot timing once the first window has painted.
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        updateHudPaint();
        updateHudDynamic();
        if (window.console && console.debug) {
          console.debug('[nexa-gallery] shell=' + META.shellBytes + 'B data=' + META.dataBytes +
            'B eval=' + formatMs(evalMs) + ' firstRow=' + formatMs(state.firstRowMs || 0) +
            ' lastRender=' + formatMs(state.lastRenderMs) + ' nodes=' + countNodes());
        }
      });
    });
  }

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
