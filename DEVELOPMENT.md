# Development Workflow Guide

## Overview

This document describes the recommended workflow for developing UI components in `dash-ui` and testing them in `dash-storybook`.

## The Problem

When developing components, you need to:
1. Make changes in `dash-ui`
2. Build the package
3. Commit and push to GitHub
4. Update `dash-storybook` to use the new version
5. Update the lockfile
6. Commit and push storybook changes

This is tedious for rapid development cycles.

## Solution: Two Workflows

### Workflow 1: **Local Development** (Recommended for active development)

Use when you're actively developing components and need fast iteration:

```bash
# One-time setup: Link local dash-ui to storybook
cd /path/to/dash-storybook
make link-local

# Development cycle:
# 1. Make changes in dash-ui
cd ../dash-ui
# ... edit components ...

# 2. Rebuild dash-ui
pnpm build

# 3. Storybook automatically picks up changes (if dev server is running)
cd ../dash-storybook
pnpm storybook  # If not already running

# 4. When done with local development, unlink
make unlink-local
```

**Benefits:**
- ✅ Instant feedback - rebuild dash-ui, refresh browser
- ✅ No need to commit/push every change
- ✅ Test changes before publishing

**Important:**
- Remember to run `make unlink-local` before committing or deploying
- The link only affects your local machine

### Workflow 2: **GitHub Updates** (For stable releases)

Use when you've finalized changes and want to publish:

```bash
# 1. In dash-ui: Make changes and commit
cd /path/to/dash-ui
# ... make changes ...
pnpm build
git add .
git commit -m "Add new component"
git push

# 2. In dash-storybook: Update to latest
cd /path/to/dash-storybook
make update-components

# 3. Test the update
pnpm storybook

# 4. Commit the lockfile update
git add pnpm-lock.yaml
git commit -m "Update dash-ui to version with [feature]"
git push
```

**Benefits:**
- ✅ Clean version control
- ✅ CI/CD uses the committed version
- ✅ Other developers get the same version

## Key Commands

| Command | Purpose |
|---------|---------|
| `make link-local` | Use local dash-ui for development |
| `make unlink-local` | Restore GitHub version |
| `make update-components` | Pull latest dash-ui from GitHub |
| `make storybook` | Start dev server |
| `make build-storybook` | Build for production |

## Best Practices

### ✅ DO:
- Use local linking for rapid component development
- Always unlink before committing
- Commit pnpm-lock.yaml changes when updating components
- Build dash-ui before linking or pushing

### ❌ DON'T:
- Don't commit with local links active
- Don't forget to rebuild dash-ui after changes
- Don't push storybook without updating lockfile

## Troubleshooting

### "CSS not loading" or "Component not visible"

1. Verify dash-ui has the CSS:
   ```bash
   ls -la ../dash-ui/dist/
   # Should include index.css
   ```

2. Check package.json exports:
   ```bash
   cat ../dash-ui/package.json | grep -A5 exports
   # Should include "./dist/index.css"
   ```

3. Verify Storybook imports CSS:
   ```bash
   grep "dash-ui.*css" .storybook/preview.ts
   # Should show: import "@edgar-treischl/dash-ui/dist/index.css"
   ```

### "Storybook not picking up changes"

If using local link:
1. Rebuild dash-ui: `cd ../dash-ui && pnpm build`
2. Hard refresh browser (Cmd+Shift+R)
3. If still not working, restart Storybook

If using GitHub version:
1. Run `make update-components`
2. Check lockfile changed: `git diff pnpm-lock.yaml`
3. Restart Storybook

### "CI/CD failing but local works"

This usually means:
- Local is using linked version
- CI/CD uses GitHub version
- They're out of sync

**Fix:**
1. Run `make unlink-local`
2. Run `make update-components`
3. Test locally
4. Commit and push if it works

## Advanced: Monorepo Option

If you find yourself constantly developing both packages together, consider combining them into a single monorepo:

```
dash-monorepo/
├── packages/
│   └── ui/          # The component library
├── apps/
│   └── storybook/   # The storybook
└── pnpm-workspace.yaml
```

This eliminates the need for linking and GitHub updates during development. Contact me if you want help setting this up.
