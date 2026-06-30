#!/bin/bash
# Link local dash-ui package for development

echo "🔗 Linking local dash-ui package..."

# Navigate to dash-ui and create link
cd ../dash-ui
pnpm link --global

# Navigate back to storybook and link the package
cd ../dash-storybook
pnpm link --global @edgar-treischl/dash-ui

echo "✅ Local package linked!"
echo "📝 Remember to run 'pnpm build' in dash-ui after making changes"
echo "🔄 Storybook will hot-reload when you rebuild dash-ui"
