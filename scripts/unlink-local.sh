#!/bin/bash
# Unlink local dash-ui package and restore GitHub version

echo "🔓 Unlinking local dash-ui package..."

# Unlink the package
pnpm unlink --global @edgar-treischl/dash-ui

# Reinstall from GitHub
pnpm install --force

echo "✅ Restored GitHub package version"
