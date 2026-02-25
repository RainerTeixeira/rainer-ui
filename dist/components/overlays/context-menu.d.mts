import * as react_jsx_runtime from 'react/jsx-runtime';
import * as _radix_ui_react_context_menu from '@radix-ui/react-context-menu';
import { Root, Group, Portal, RadioGroup, Sub, Trigger } from '@radix-ui/react-context-menu';
import * as React from 'react';

declare const ContextMenu: typeof Root;
declare const ContextMenuTrigger: typeof Trigger;
declare const ContextMenuGroup: typeof Group;
declare const ContextMenuPortal: typeof Portal;
declare const ContextMenuSub: typeof Sub;
declare const ContextMenuRadioGroup: typeof RadioGroup;
declare const ContextMenuSubTrigger: React.ForwardRefExoticComponent<Omit<_radix_ui_react_context_menu.ContextMenuSubTriggerProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuSubContent: React.ForwardRefExoticComponent<Omit<_radix_ui_react_context_menu.ContextMenuSubContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuContent: React.ForwardRefExoticComponent<Omit<_radix_ui_react_context_menu.ContextMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuItem: React.ForwardRefExoticComponent<Omit<_radix_ui_react_context_menu.ContextMenuItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuCheckboxItem: React.ForwardRefExoticComponent<Omit<_radix_ui_react_context_menu.ContextMenuCheckboxItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuRadioItem: React.ForwardRefExoticComponent<Omit<_radix_ui_react_context_menu.ContextMenuRadioItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuLabel: React.ForwardRefExoticComponent<Omit<_radix_ui_react_context_menu.ContextMenuLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuSeparator: React.ForwardRefExoticComponent<Omit<_radix_ui_react_context_menu.ContextMenuSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

export { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger };
