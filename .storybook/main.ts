import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  viteFinal: async (config) => {
    // Ensure React is available globally
    if (config.define) {
      config.define['global'] = 'window';
    } else {
      config.define = { 'global': 'window' };
    }
    
    // Set base path for GitHub Pages
    if (process.env.NODE_ENV === 'production') {
      config.base = '/dash-storybook/';
    }
    
    return config;
  },
};

export default config;
