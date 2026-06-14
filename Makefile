.PHONY: help storybook build-storybook update-components install clean

help:
	@echo "Dash Storybook - Available commands:"
	@echo ""
	@echo "  make storybook          Start Storybook dev server (port 6006)"
	@echo "  make build-storybook    Build Storybook for production"
	@echo "  make update-components  Rebuild dash-ui from dash-master and reinstall"
	@echo "  make install            Install all dependencies"
	@echo "  make clean              Remove build artifacts"
	@echo ""

storybook:
	pnpm storybook

build-storybook:
	pnpm build-storybook

update-components:
	@echo "Building dash-ui from dash-master..."
	@cd ../dash-master/packages/ui && pnpm build
	@echo "Reinstalling dash-ui in dash-storybook..."
	@pnpm install --force dash-ui
	@echo "✓ Components updated! Restart Storybook to see changes."

install:
	pnpm install

clean:
	rm -rf storybook-static
	rm -rf node_modules
