import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '../src/components/feedback/progress';

const meta = {
  title: 'Feedback/Progress',
  component: Progress,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { value: 60, className: 'w-[400px]' } };
export const Complete: Story = { args: { value: 100, className: 'w-[400px]' } };
export const Loading: Story = { args: { value: 33, className: 'w-[400px]' } };
