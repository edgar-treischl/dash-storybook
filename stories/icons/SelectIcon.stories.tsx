import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SelectIcon } from "@edgar-treischl/dash-ui";

const meta: Meta<typeof SelectIcon> = {
  title: 'Controls/Icons/SelectIcon',
  component: SelectIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <SelectIcon />,
}

export const Large: Story = {
  render: () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6.5L8 10.5L12 6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
}

export const WithCustomColor: Story = {
  render: () => (
    <div style={{ color: '#008dc9' }}>
      <SelectIcon />
    </div>
  ),
}
