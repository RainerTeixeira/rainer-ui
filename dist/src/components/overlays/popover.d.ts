/**
 * Popover Component (shadcn/ui)
 *
 * Popover para conteúdo contextual
 *
 * @fileoverview Popover component
 * @author Rainer Teixeira
 */
import * as React from 'react';
declare const Popover: React.FC<import("@radix-ui/react-popover").PopoverProps>;
declare const PopoverTrigger: React.ForwardRefExoticComponent<import("@radix-ui/react-popover").PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const PopoverContent: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-popover").PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Popover, PopoverTrigger, PopoverContent };
