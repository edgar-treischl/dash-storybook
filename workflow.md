# How to Add Components to dash-ui and Use Them in dash-storybook

## Workflow: Adding a New Component

### Step 1: Create Component in dash-ui

```bash
cd /path/to/dash-ui

# Create your component (e.g., src/Icons/MyIcon.tsx)
# Add TypeScript types and JSX

# Example:
# src/Icons/MyIcon.tsx
export function MyIcon() {
  return <svg>...</svg>
}
```

### Step 2: Export from dash-ui

Add your component to **`src/index.ts`**:

```typescript
// src/index.ts
export { MyIcon } from "./Icons/MyIcon";
export { BarPlot } from "./BarPlot/BarPlot";
// ... other exports
```

### Step 3: Build and Commit in dash-ui

```bash
# In dash-ui directory
pnpm build                          # Rebuilds dist/ folder with your new component
git add dist/ src/
git commit -m "Add MyIcon component"
git push origin main                # Push to GitHub
```

**CRITICAL:** The `dist/` folder must be committed and pushed to GitHub. Storybook imports from the compiled `dist/` files, not the source files.

### Step 4: Use in dash-storybook

Create a story file:

```bash
cd /path/to/dash-storybook

# Create story file (e.g., stories/icons/MyIcon.stories.tsx)
```

```typescript
// stories/icons/MyIcon.stories.tsx
import { MyIcon } from "@edgar-treischl/dash-ui";

export const Default = () => <MyIcon />;
```

Then:

```bash
# Update dash-ui dependency (should auto-fetch latest from GitHub)
pnpm update @edgar-treischl/dash-ui

# Start Storybook
pnpm storybook
```

## Troubleshooting

### "Cannot find module '@edgar-treischl/dash-ui'" or "No exported member 'MyIcon'"

**Problem:** The component exists in source but not in published dist.

**Solution:**

1. **In dash-ui:** Make sure you built and committed dist/
   ```bash
   cd ../dash-ui
   pnpm build
   git add dist/
   git commit -m "Rebuild dist with new component"
   git push origin main
   ```

2. **In dash-storybook:** Force a fresh install
   ```bash
   cd ../dash-storybook
   rm -rf pnpm-lock.yaml node_modules
   pnpm install
   ```

### Storybook shows old version of component

**Problem:** Your changes in dash-ui aren't showing up.

**Solution:**

1. Rebuild in dash-ui:
   ```bash
   cd ../dash-ui
   pnpm build
   git add dist/ src/
   git commit -m "Update component"
   git push origin main
   ```

2. Update and reinstall in dash-storybook:
   ```bash
   cd ../dash-storybook
   pnpm update @edgar-treischl/dash-ui
   pnpm storybook
   ```

## Key Points

- **Always build before committing** - Run `pnpm build` in dash-ui to update dist/
- **Commit dist/ to GitHub** - Storybook downloads from GitHub, not your local machine
- **Export in src/index.ts** - All public components must be exported from the main index
- **TypeScript required** - Define types for all props (inline or in separate type files)
- **Use git+https in package.json** - More reliable than GitHub tarball shorthand for fetching latest commits

## Current Setup (dash-storybook)

dash-storybook uses:
```json
{
  "dependencies": {
    "@edgar-treischl/dash-ui": "git+https://github.com/edgar-treischl/dash-ui.git#main"
  }
}
```

This automatically pulls the latest from the `main` branch whenever you run `pnpm update @edgar-treischl/dash-ui`.