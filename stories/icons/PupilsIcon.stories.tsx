import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PupilsIcon } from "@edgar-treischl/dash-ui";

const meta: Meta<typeof PupilsIcon> = {
  title: 'Controls/Icons/PupilsIcon',
  component: PupilsIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <PupilsIcon />,
}

export const Large: Story = {
  render: () => (
    <div style={{ width: '32px', height: '32px' }}>
      <PupilsIcon />
    </div>
  ),
}

export const WithCustomColor: Story = {
  render: () => (
    <div style={{ color: '#008dc9' }}>
      <PupilsIcon />
    </div>
  ),
}

