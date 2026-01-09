import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertDescription, AlertTitle } from '../src/components/feedback/alert';

const meta = {
  title: 'Feedback/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <AlertTitle>Atenção</AlertTitle>
      <AlertDescription>
        Esta é uma mensagem de alerta padrão.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-[400px]">
      <AlertTitle>Erro</AlertTitle>
      <AlertDescription>
        Ocorreu um erro ao processar sua solicitação.
      </AlertDescription>
    </Alert>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <span className="text-xl">ℹ️</span>
      <AlertTitle>Informação</AlertTitle>
      <AlertDescription>
        Você pode adicionar ícones aos seus alertas.
      </AlertDescription>
    </Alert>
  ),
};

export const TitleOnly: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <AlertTitle>Alerta simples sem descrição</AlertTitle>
    </Alert>
  ),
};
