import type { Meta, StoryObj } from '@storybook/react';
import { StarsBackground } from '../src/components/effects/StarsBackground';

const meta: Meta<typeof StarsBackground> = {
  title: 'Effects/StarsBackground',
  component: StarsBackground,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StarsBackground>;

export const Default: Story = {
  render: () => (
    <div className="relative h-screen w-full bg-black">
      <StarsBackground />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-4xl font-bold text-white">
          Fundo Estelar Animado
        </h1>
      </div>
    </div>
  ),
};

export const WithContent: Story = {
  render: () => (
    <div className="relative h-screen w-full bg-gradient-to-b from-black to-blue-950">
      <StarsBackground />
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 p-8 text-center">
        <h1 className="text-5xl font-bold text-white">
          Bem-vindo ao Espaço
        </h1>
        <p className="max-w-md text-lg text-gray-300">
          Um fundo estelar dinâmico e performático para suas aplicações.
        </p>
      </div>
    </div>
  ),
};
