import type { Meta, StoryObj } from '@storybook/react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../src/components/overlays/tooltip/Tooltip';
import { Button } from '../src/components/actions/button/Button';

const meta = {
  title: 'Overlays/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Passe o mouse aqui</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Esta é uma tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            ℹ️
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Informação adicional sobre este item</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const Multiple: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Salvar</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Salvar alterações (Ctrl+S)</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Cancelar</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Descartar alterações (Esc)</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="destructive">Deletar</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Deletar permanentemente</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
};
