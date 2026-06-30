# Dash Storybook

Storybook documentation site for the Dash UI component library.

## Quick Start

```bash
# Install dependencies
pnpm install

# Start Storybook dev server
make storybook

# Visit http://localhost:6006
```

## Development Workflows

**📖 See [DEVELOPMENT.md](DEVELOPMENT.md) for detailed workflow guides.**

### Quick Reference

#### For Active Component Development
Use local linking for fast iteration:
```bash
make link-local         # Link local dash-ui package
# ... develop in dash-ui, rebuild, see changes immediately ...
make unlink-local       # Restore GitHub version when done
```

#### For Stable Updates
Update from GitHub after publishing changes:
```bash
make update-components  # Pull latest from GitHub
git add pnpm-lock.yaml  # Commit lockfile changes
git commit -m "Update dash-ui to [version/feature]"
git push
```

## Updating Components from dash-ui

When the dash-ui library is updated:

### Using Make Commands (Recommended)

```bash
make update-components  # Updates from GitHub and reminds you to commit lockfile
```

### Manual Update

```bash
pnpm update @edgar-treischl/dash-ui
git add pnpm-lock.yaml
git commit -m "Update dash-ui to latest"
```

**⚠️ Important:** Always commit the `pnpm-lock.yaml` changes! The lockfile ensures CI/CD uses the same version.

### Alternative: Local Development Mode

For rapid iteration without GitHub updates:
```bash
make link-local    # Use local dash-ui
# ... develop ...
make unlink-local  # Restore GitHub version
```

See [DEVELOPMENT.md](DEVELOPMENT.md) for complete workflow documentation.

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

This repository consumes UI components from the **dash-ui** repository via GitHub.

**Package Source:** `github:edgar-treischl/dash-ui`

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
- **LineChart** - Multi-series line chart for retention trends over time
- **YearSelect** - Year selector dropdown with custom styling
- **SelectIcon** - SVG icon for dropdown indicators

## Available Make Commands

Run `make help` to see all available commands:

```bash
make help              # Show all commands
make storybook         # Start dev server
make build-storybook   # Build for production
make update-components # Update dash-ui from GitHub
make link-local        # Use local dash-ui for development
make unlink-local      # Restore GitHub version
make clean             # Remove build artifacts
```

## Local Development vs. Production

- **Local Development:** 
  - Option 1: Pull from GitHub (`make update-components`)
  - Option 2: Link local package (`make link-local`)
- **Production (GitHub Pages):** Always uses the committed lockfile version

The CI/CD workflow uses `pnpm install --frozen-lockfile` to ensure reproducible builds.