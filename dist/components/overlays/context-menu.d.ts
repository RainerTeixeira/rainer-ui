/**
 * Componente ContextMenu
 *
 * @module @rainersoft/ui/components/overlays/context-menu
 */
import { Root as ContextMenuRootPrimitive, Trigger as ContextMenuTriggerPrimitive, Group as ContextMenuGroupPrimitive, Portal as ContextMenuPortalPrimitive, Sub as ContextMenuSubPrimitive, RadioGroup as ContextMenuRadioGroupPrimitive } from '@radix-ui/react-context-menu';
import * as React from 'react';
declare const ContextMenu: typeof ContextMenuRootPrimitive;
declare const ContextMenuTrigger: typeof ContextMenuTriggerPrimitive;
declare const ContextMenuGroup: typeof ContextMenuGroupPrimitive;
declare const ContextMenuPortal: typeof ContextMenuPortalPrimitive;
declare const ContextMenuSub: typeof ContextMenuSubPrimitive;
declare const ContextMenuRadioGroup: typeof ContextMenuRadioGroupPrimitive;
declare const ContextMenuSubTrigger: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-context-menu").ContextMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuSubContent: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-context-menu").ContextMenuSubContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuContent: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-context-menu").ContextMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuItem: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-context-menu").ContextMenuItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuCheckboxItem: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-context-menu").ContextMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuRadioItem: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-context-menu").ContextMenuRadioItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuLabel: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-context-menu").ContextMenuLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuSeparator: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-context-menu").ContextMenuSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, };
