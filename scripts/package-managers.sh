#!/usr/bin/env bash
# Verify the package works under npm, yarn, pnpm and bun.
# Usage: bash scripts/package-managers.sh   (set SKIP_INSTALL=1 to reuse node_modules)
set -euo pipefail
cd "$(dirname "$0")/.."

for pm in npm yarn pnpm bun; do
  if ! command -v "$pm" >/dev/null 2>&1; then
    echo "SKIP  $pm (not installed)"
    continue
  fi
  echo ""
  echo "=== $pm ==="
  if [ "${SKIP_INSTALL:-0}" != "1" ]; then
    if [ "$pm" = "npm" ]; then npm ci --ignore-scripts --no-audit --no-fund
    else "$pm" install --ignore-scripts; fi
  fi
  "$pm" run --silent build
  "$pm" run --silent gallery 2>/dev/null || true
  node --input-type=module -e "import('./dist/index.js').then(m=>{if(!m.Bell||!m.IconSwap)throw new Error('missing exports');console.log('$pm: ESM import OK')})"
  node -e "const m=require('./dist/cjs/index.js'); if(!m.Bell)throw new Error('missing CJS export'); console.log('$pm: CJS require OK')"
done
echo ""
echo "All available package managers verified."
