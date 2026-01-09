import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../src/components/ui/switch';
import { Label } from '../src/components/forms/label';

const meta = {
  title: 'Forms/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Modo avião</Label>
    </div>
  ),
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const SettingsExample: Story = {
  render: () => (
    <div className="space-y-4 w-[350px]">
      <div className="flex items-center justify-between">
        <Label htmlFor="notifications">Notificações</Label>
        <Switch id="notifications" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="marketing">Emails de marketing</Label>
        <Switch id="marketing" />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="security">Autenticação de dois fatores</Label>
        <Switch id="security" defaultChecked />
      </div>
    </div>
  ),
};
