import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { YearSelect } from "dash-ui";

const meta = {
  title: "Components/YearSelect",
  component: YearSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof YearSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

function YearSelectWrapper(
  args: React.ComponentProps<typeof YearSelect>
) {
  const [selectedYear, setSelectedYear] = useState<"2020/21" | "2021/22" | "2022/23" | "2023/24" | "2024/25">(
    "2024/25"
  );

  return (
    <YearSelect
      {...args}
      selectedYear={selectedYear}
      onYearChange={setSelectedYear}
    />
  );
}

export const Default: Story = {
  render: (args) => <YearSelectWrapper {...args} />,
  args: {
    label: "Wählen Sie ein Schuljahr:",
  },
};

export const CustomLabel: Story = {
  render: (args) => <YearSelectWrapper {...args} />,
  args: {
    label: "Schuljahr auswählen",
  },
};

export const Disabled: Story = {
  render: (args) => <YearSelectWrapper {...args} />,
  args: {
    disabled: true,
    label: "Wählen Sie ein Schuljahr:",
  },
};

export const WithoutLabel: Story = {
  render: (args) => <YearSelectWrapper {...args} />,
  args: {
    label: "",
  },
};
