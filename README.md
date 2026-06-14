# Dash Storybook

Storybook documentation site for the Dash UI component library.

## Development

```bash
# Install dependencies
pnpm install

# Start Storybook dev server
pnpm storybook
# or
make storybook
```

Visit `http://localhost:6006` to view the component stories.

## Updating Components from dash-master

When the component library in dash-master is updated, follow these steps to sync the changes:

### Quick Update (Recommended)

Use the convenience script to update in one command:

```bash
# Using pnpm script
pnpm update-components

# Or using Make
make update-components
```

This will automatically:
1. Build the dash-ui package in dash-master
2. Force reinstall it in dash-storybook
3. Notify you to restart Storybook

### Manual Update Steps

If you prefer to run the steps manually:

#### Step 1: Build the updated dash-ui package

```bash
# Navigate to dash-master and build the UI package
cd ../dash-master/packages/ui
pnpm build
```

#### Step 2: Reinstall in dash-storybook

```bash
# Navigate back to dash-storybook
cd ../../../dash-storybook

# Force reinstall to pick up the latest build
pnpm install --force dash-ui

# Or simply reinstall all dependencies
pnpm install
```

#### Step 3: Restart Storybook

If Storybook is running, restart it to see the changes:

```bash
# Stop the current server (Ctrl+C), then restart
pnpm storybook
```

### Step 4: Update Stories (if needed)

If new components were added or APIs changed:

1. Create or update story files in `stories/`
2. Follow the existing pattern (e.g., `ComponentName.stories.tsx`)
3. Add documentation to MDX files if needed

## Building for Production

```bash
# Build Storybook static site
pnpm build-storybook
# or
make build-storybook
```

Output is generated in the `storybook-static/` directory.

## Deployment

This repository is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

**Live Site:** https://edgar-treischl.github.io/dash-storybook/

The deployment workflow:
1. Checks out the dash-master repository
2. Builds the dash-ui package
3. Installs storybook dependencies with the built package
4. Builds and deploys Storybook to GitHub Pages

## Architecture

This repository consumes UI components from the **dash-master** component library via local file reference during development (`file:../dash-master/packages/ui`).

Components are documented and showcased through Storybook stories in the `stories/` directory.

### Repository Structure

```
dash-storybook/
├── .storybook/          # Storybook configuration
│   ├── main.ts          # Main config (stories, addons, base path)
│   ├── manager.ts       # UI customization (logo, theme)
│   └── preview.ts       # Global decorators and parameters
├── stories/             # Component stories and documentation
│   ├── *.stories.tsx    # Component stories
│   ├── Introduction.mdx # Welcome page
│   └── docs/            # Additional documentation
│       └── Colors.mdx   # Color scheme reference
├── public/              # Static assets
│   └── dash-logo.svg    # Custom sidebar logo
└── package.json         # Dependencies and scripts
```

### Available Components

- **BarPlot** - Horizontal bar chart for visualizing school data
- **YearSelect** - Year selector dropdown with custom styling
- **SelectIcon** - SVG icon for dropdown indicators

## Local Development vs. Production

- **Local:** Uses `file:../dash-master/packages/ui` to reference the component library locally
- **Production (GitHub Pages):** The deployment workflow clones dash-master, builds the package, and installs it during the build process

## Cleaning Up dash-master

If you need to remove Storybook files from the dash-master repository (since they now live here), see **[CLEANUP.md](CLEANUP.md)** for detailed instructions.