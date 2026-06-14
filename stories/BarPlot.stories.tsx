import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BarPlot } from "@edgar-treischl/dash-ui";

const meta = {
  title: "Components/BarPlot",
  component: BarPlot,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BarPlot>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  { type: "GS" as const, count: 450, percent: 85 },
  { type: "MS" as const, count: 320, percent: 72 },
  { type: "RS" as const, count: 280, percent: 65 },
  { type: "GY" as const, count: 280, percent: 68 },
  { type: "IGS" as const, count: 120, percent: 45 },
];

export const Default: Story = {
  args: {
    data: sampleData,
    year: "2024/25",
  },
};

export const AlternativeYear: Story = {
  args: {
    data: sampleData,
    year: "2023/24",
  },
};

export const WithCustomMaxPercent: Story = {
  args: {
    data: sampleData,
    year: "2024/25",
    maxPercent: 100,
  },
};

export const FewSchoolTypes: Story = {
  args: {
    data: [
      { type: "GS" as const, count: 450, percent: 85 },
      { type: "GY" as const, count: 280, percent: 68 },
    ],
    year: "2024/25",
  },
};

