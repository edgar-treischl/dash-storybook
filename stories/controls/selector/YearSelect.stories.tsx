import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { YearSelect } from "@edgar-treischl/dash-ui";

const meta: Meta<typeof YearSelect> = {
  title: 'Controls/YearSelect',
  component: YearSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    selectedYear: {
      description: 'Currently selected school year',
      control: { type: 'text' },
    },
    onYearChange: {
      description: 'Callback when year selection changes',
    },
    label: {
      description: 'Custom label for the control',
      control: { type: 'text' },
    },
    disabled: {
      description: 'Disabled state for the select element',
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

function InteractiveYearSelect(props: any) {
  const [year, setYear] = useState<SchoolYear>('2024/25')

  return (
    <YearSelect
      selectedYear={year}
      onYearChange={setYear}
      {...props}
    />
  )
}

export const Default: Story = {
  render: (args) => <InteractiveYearSelect {...args} />,
  args: {
    label: 'Wählen Sie ein Schuljahr:',
  },
}

export const Disabled: Story = {
  render: (args) => <InteractiveYearSelect {...args} />,
  args: {
    disabled: true,
    label: 'Wählen Sie ein Schuljahr:',
  },
}

export const CustomLabel: Story = {
  render: (args) => <InteractiveYearSelect {...args} />,
  args: {
    label: 'Choose Academic Year:',
  },
}

export const NoLabel: Story = {
  render: (args) => <InteractiveYearSelect {...args} />,
  args: {
    label: '',
  },
}
