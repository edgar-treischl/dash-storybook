import type { Meta, StoryObj } from '@storybook/react';

import Task from '../src/components/Task.tsx';

const meta = {
  component: Task,
  title: 'Task',
  tags: ['autodocs'],
  args: {
    onArchiveTask: () => {},
    onPinTask: () => {},
  },
} satisfies Meta<typeof Task>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};