import type { Meta, StoryObj } from '@storybook/react';
import { MatrixBackground } from '../src/components/effects/MatrixBackground';

const meta: Meta<typeof MatrixBackground> = {
  title: 'Effects/MatrixBackground',
  component: MatrixBackground,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof MatrixBackground>;

export const Default: Story = {
  render: () => (
    <div className="relative h-screen w-full bg-black">
      <MatrixBackground />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-4xl font-bold text-white">
          Matrix Rain Effect
        </h1>
      </div>
    </div>
  ),
};
