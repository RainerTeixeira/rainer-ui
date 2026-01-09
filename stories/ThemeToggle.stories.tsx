import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from '../src/components/utilities/ThemeToggle';

const meta = {
  title: 'Utilities/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <ThemeToggle />
    </div>
  ),
};

export const InNavbar: Story = {
  render: () => (
    <div className="w-full border-b bg-background p-4">
      <div className="flex items-center justify-between">
        <span className="font-semibold">Logo</span>
        <ThemeToggle />
      </div>
    </div>
  ),
};
