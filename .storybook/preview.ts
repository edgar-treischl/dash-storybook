import React from "react";
import type { Preview } from "@storybook/react";
import "dash-ui/dist/index.css";

// Make React available globally for JSX
(window as any).React = React;

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
