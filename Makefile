.PHONY: help storybook build-storybook update-components install clean link-local unlink-local

help:
	@echo "Dash Storybook - Available commands:"
	@echo ""
	@echo "  📦 Package Management:"
	@echo "  make install            Install all dependencies"
	@echo "  make update-components  Update @edgar-treischl/dash-ui from GitHub"
	@echo "  make link-local         Use local dash-ui for development"
	@echo "  make unlink-local       Restore GitHub package version"
	@echo ""
	@echo "  🚀 Development:"
	@echo "  make storybook          Start Storybook dev server (port 6006)"
	@echo "  make build-storybook    Build Storybook for production"
	@echo ""
	@echo "  🧹 Maintenance:"
	@echo "  make clean              Remove build artifacts"
	@echo ""
	@echo "  💡 Workflow Tips:"
	@echo "  - Use 'make link-local' when actively developing UI components"
	@echo "  - Use 'make unlink-local' before committing/deploying"
	@echo ""

storybook:
	pnpm storybook

build-storybook:
	pnpm build-storybook

update-components:
	@echo "📦 Updating @edgar-treischl/dash-ui from GitHub..."
	@pnpm update @edgar-treischl/dash-ui
	@echo "✓ Components updated!"
	@echo "⚠️  Don't forget to commit pnpm-lock.yaml"
	@echo "🔄 Restart Storybook to see changes"

link-local:
	@bash scripts/link-local.sh

unlink-local:
	@bash scripts/unlink-local.sh

install:
	pnpm install

clean:
	rm -rf storybook-static
	rm -rf node_modules
