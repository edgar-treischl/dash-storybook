.PHONY: help storybook build-storybook update-components install clean

help:
	@echo "Dash Storybook - Available commands:"
	@echo ""
	@echo "  make storybook          Start Storybook dev server (port 6006)"
	@echo "  make build-storybook    Build Storybook for production"
	@echo "  make update-components  Update @edgar-treischl/dash-ui from GitHub Packages"
	@echo "  make install            Install all dependencies"
	@echo "  make clean              Remove build artifacts"
	@echo ""

storybook:
	pnpm storybook

build-storybook:
	pnpm build-storybook

update-components:
	@echo "Updating @edgar-treischl/dash-ui from GitHub Packages..."
	@pnpm update @edgar-treischl/dash-ui
	@echo "✓ Components updated! Restart Storybook to see changes."

install:
	pnpm install

clean:
	rm -rf storybook-static
	rm -rf node_modules
