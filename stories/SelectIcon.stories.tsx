import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SelectIcon } from "dash-ui";

const meta = {
  title: "Components/Icons/SelectIcon",
  component: SelectIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SelectIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Large: Story = {
  decorators: [
    (Story) => (
      <div style={{ fontSize: "48px", color: "#008dc9" }}>
        <Story />
      </div>
    ),
  ],
};

export const Small: Story = {
  decorators: [
    (Story) => (
      <div style={{ fontSize: "12px", color: "#666" }}>
        <Story />
      </div>
    ),
  ],
};

export const InContext: Story = {
  decorators: [
    (Story) => (
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Story />
        <span>Schuljahr wählen</span>
      </div>
    ),
  ],
};
