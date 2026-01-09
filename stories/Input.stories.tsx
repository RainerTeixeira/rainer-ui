import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../src/components/forms/input';
import { Label } from '../src/components/forms/label';

const meta = {
  title: 'Forms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Digite algo...',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-[350px] space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="seu@email.com" />
    </div>
  ),
};

export const Password: Story = {
  render: () => (
    <div className="w-[350px] space-y-2">
      <Label htmlFor="password">Senha</Label>
      <Input id="password" type="password" placeholder="••••••••" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: 'Campo desabilitado',
    disabled: true,
  },
};

export const WithError: Story = {
  render: () => (
    <div className="w-[350px] space-y-2">
      <Label htmlFor="error-input">Email</Label>
      <Input
        id="error-input"
        type="email"
        placeholder="email@invalido"
        className="border-red-500 focus-visible:ring-red-500"
      />
      <p className="text-sm text-red-500">Email inválido</p>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="w-[350px] space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nome completo</Label>
        <Input id="name" placeholder="João Silva" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-form">Email</Label>
        <Input id="email-form" type="email" placeholder="joao@exemplo.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Telefone</Label>
        <Input id="phone" type="tel" placeholder="(11) 99999-9999" />
      </div>
    </div>
  ),
};
