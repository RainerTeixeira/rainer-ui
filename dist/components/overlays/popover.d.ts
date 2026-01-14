import * as React from 'react';

/**
 * Popover Component (shadcn/ui)
 *
 * Popover para conteúdo contextual
 *
 * @fileoverview Popover component
 * @author Rainer Teixeira
 */

declare const Popover: any;
declare const PopoverTrigger: any;
declare const PopoverContent: React.ForwardRefExoticComponent<Omit<Omit<any, "ref">, "ref"> & React.RefAttributes<unknown>>;

export { Popover, PopoverContent, PopoverTrigger };
