import type { Meta, StoryObj } from '@storybook/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../src/components/navigation/accordion';

const meta = {
  title: 'Navigation/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "single" as const,
    collapsible: true,
  },
  render: () => (
    <Accordion type="single" collapsible className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>O que é o Rainer UI?</AccordionTrigger>
        <AccordionContent>
          Rainer UI é uma biblioteca de componentes React reutilizáveis, construída
          com Radix UI e Tailwind CSS, seguindo os princípios do shadcn/ui.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Como instalar?</AccordionTrigger>
        <AccordionContent>
          Use o comando: <code>npx @rainersoft/ui add [component]</code>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>É acessível?</AccordionTrigger>
        <AccordionContent>
          Sim! Todos os componentes são construídos com Radix UI, garantindo
          acessibilidade completa (ARIA, keyboard navigation, etc).
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  args: {
    type: "multiple" as const,
  },
  render: () => (
    <Accordion type="multiple" className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Seção 1</AccordionTrigger>
        <AccordionContent>
          Conteúdo da primeira seção. Você pode abrir múltiplas seções ao mesmo tempo.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Seção 2</AccordionTrigger>
        <AccordionContent>
          Conteúdo da segunda seção.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Seção 3</AccordionTrigger>
        <AccordionContent>
          Conteúdo da terceira seção.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
