/**
 * Accordion Component
 *
 * Componente accordion para FAQs e conteúdo expansível.
 * Baseado no Radix UI com tema cyberpunk.
 *
 * @module components/ui/accordion
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      'border-b border-border dark:border-cyan-400/20',
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        // Base styles
        'flex flex-1 items-center justify-between py-4 text-sm font-medium',
        'transition-all hover:underline',
        // Focus styles
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        'focus-visible:ring-offset-2 dark:ring-offset-black dark:focus-visible:ring-cyan-400',
        // Dark mode
        'dark:text-cyan-200 dark:hover:text-cyan-100',
        // Disabled state
        '[&[data-state=open]>svg]:rotate-180',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 dark:text-cyan-400" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      // Base styles
      'overflow-hidden text-sm data-[state=closed]:animate-accordion-up',
      'data-[state=open]:animate-accordion-down',
      // Spacing
      'pb-4 pt-0',
      // Text color
      'dark:text-cyan-400/80',
      className
    )}
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
};
