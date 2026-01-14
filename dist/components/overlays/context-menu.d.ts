import * as react_jsx_runtime from 'react/jsx-runtime';
import { Root, Group, Portal, RadioGroup, Sub, Trigger } from '@radix-ui/react-context-menu';
import * as React from 'react';

declare const ContextMenu: typeof Root;
declare const ContextMenuTrigger: typeof Trigger;
declare const ContextMenuGroup: typeof Group;
declare const ContextMenuPortal: typeof Portal;
declare const ContextMenuSub: typeof Sub;
declare const ContextMenuRadioGroup: typeof RadioGroup;
declare const ContextMenuSubTrigger: React.ForwardRefExoticComponent<Omit<Omit<any, "ref"> & {
    inset?: boolean;
}, "ref"> & React.RefAttributes<unknown>>;
declare const ContextMenuSubContent: React.ForwardRefExoticComponent<Omit<Omit<any, "ref">, "ref"> & React.RefAttributes<unknown>>;
declare const ContextMenuContent: React.ForwardRefExoticComponent<Omit<Omit<any, "ref">, "ref"> & React.RefAttributes<unknown>>;
declare const ContextMenuItem: React.ForwardRefExoticComponent<Omit<Omit<any, "ref"> & {
    inset?: boolean;
}, "ref"> & React.RefAttributes<unknown>>;
declare const ContextMenuCheckboxItem: React.ForwardRefExoticComponent<Omit<Omit<any, "ref">, "ref"> & React.RefAttributes<unknown>>;
declare const ContextMenuRadioItem: React.ForwardRefExoticComponent<Omit<Omit<any, "ref">, "ref"> & React.RefAttributes<unknown>>;
declare const ContextMenuLabel: React.ForwardRefExoticComponent<Omit<Omit<any, "ref"> & {
    inset?: boolean;
}, "ref"> & React.RefAttributes<unknown>>;
declare const ContextMenuSeparator: React.ForwardRefExoticComponent<Omit<Omit<any, "ref">, "ref"> & React.RefAttributes<unknown>>;
declare const ContextMenuShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

export { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger };
