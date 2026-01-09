import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../src/components/ui/avatar';

const meta = {
  title: 'Data Display/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    variant: {
      control: 'select',
      options: ['circular', 'rounded', 'square'],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://github.com/shadcn.png',
    alt: '@shadcn',
    name: 'shadcn',
  },
};

export const Fallback: Story = {
  args: {
    src: 'invalid-url',
    alt: 'Fallback',
    name: 'Rainer Teixeira',
  },
};

export const FallbackOnly: Story = {
  args: {
    name: 'Rainer Teixeira',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="xs" name="XS" />
      <Avatar size="sm" name="Small" />
      <Avatar size="md" name="Medium" />
      <Avatar size="lg" name="Large" />
      <Avatar size="xl" name="Extra Large" />
      <Avatar size="2xl" name="2X Large" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar variant="circular" name="Circular" />
      <Avatar variant="rounded" name="Rounded" />
      <Avatar variant="square" name="Square" />
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="flex -space-x-4">
      <Avatar 
        src="https://github.com/shadcn.png" 
        alt="shadcn" 
        name="shadcn"
        className="border-2 border-background"
      />
      <Avatar 
        src="https://github.com/vercel.png" 
        alt="vercel" 
        name="vercel"
        className="border-2 border-background"
      />
      <Avatar 
        src="https://github.com/nextjs.png" 
        alt="nextjs" 
        name="nextjs"
        className="border-2 border-background"
      />
      <Avatar 
        name="+3"
        className="border-2 border-background"
      />
    </div>
  ),
};
