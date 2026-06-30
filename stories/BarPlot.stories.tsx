import type { Meta, StoryObj } from "@storybook/react";
import { BarPlot } from "@edgar-treischl/dash-ui";

const meta: Meta<typeof BarPlot> = {
  title: 'Graphs/BarPlot',
  component: BarPlot,
  parameters: {
    docs: {
      description: {
        component: BarPlot.peek.description,
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    year: {
      description: 'School year label',
      control: { type: 'text' },
    },
    maxPercent: {
      description: 'Fixed maximum percentage for scaling',
      control: { type: 'number' },
    },
    data: {
      description: 'Array of school type data with counts and percentages',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const sampleData: Array<{ type: SchoolType; count: number; percent: number }> = [
  { type: 'GS', count: 120, percent: 75 },
  { type: 'MS', count: 40, percent: 25 },
  { type: 'RS', count: 20, percent: 10 },
  { type: 'GY', count: 10, percent: 5 },
  { type: 'IGS', count: 5, percent: 2 },

]

export const Default: Story = {
  args: {
    data: sampleData,
    year: '2024/25',
  },
}

export const HighVariance = {
  args: {
    year: '2024',
    data: [
      { type: 'GS', count: 100, percent: 95 },
      { type: 'MS', count: 50, percent: 25 },
      { type: 'RS', count: 10, percent: 5 },
      { type: 'GY', count: 5, percent: 2 },
      { type: 'IGS', count: 2, percent: 1 },

    ],
  },
}

export const ZeroValues = {
  args: {
    year: '2024',
    data: [
      { type: 'GS', count: 100, percent: 4 },
      { type: 'MS', count: 100, percent: 3 },
      { type: 'RS', count: 100, percent: 0 },
      { type: 'GY', count: 100, percent: 0 },
      { type: 'IGS', count: 100, percent: 1 },
    ],
  },
}

export const HighValues: Story = {
  args: {
    data: [
      { type: 'GS', count: 200, percent: 90 },
      { type: 'MS', count: 100, percent: 99 },
      { type: 'RS', count: 50, percent: 89 },
      { type: 'GY', count: 25, percent: 95 },
      { type: 'IGS', count: 10, percent: 98 },
    ],
    year: '2023/24',
  },
}

export const FixedScale = {
  args: {
    year: '2024',
    maxPercent: 100,
    data: [
      { type: 'GS', count: 100, percent: 60 },
      { type: 'MS', count: 100, percent: 45 },
      { type: 'RS', count: 100, percent: 30 },
      { type: 'GY', count: 100, percent: 15 },
      { type: 'IGS', count: 100, percent: 5 },
    ],
  },
}

export const Regression = {
  args: {
    year: '2024',
    maxPercent: 100,
    data: [
      { type: 'GS', count: 100, percent: 75 },
      { type: 'MS', count: 100, percent: 50 },
      { type: 'RS', count: 100, percent: 25 },
      { type: 'GY', count: 100, percent: 33 },
      { type: 'IGS', count: 100, percent: 20 },

    ],
  },
}

