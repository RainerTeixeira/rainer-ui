import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

declare const AlertDialog: React.FC<AlertDialogPrimitive.AlertDialogProps>;
declare const AlertDialogTrigger: React.ForwardRefExoticComponent<AlertDialogPrimitive.AlertDialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const AlertDialogPortal: React.FC<AlertDialogPrimitive.AlertDialogPortalProps>;
declare const AlertDialogOverlay: React.ForwardRefExoticComponent<Omit<Omit<AlertDialogPrimitive.AlertDialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref">, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const AlertDialogContent: React.ForwardRefExoticComponent<Omit<Omit<AlertDialogPrimitive.AlertDialogContentProps & React.RefAttributes<HTMLDivElement>, "ref">, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const AlertDialogHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogTitle: React.ForwardRefExoticComponent<Omit<Omit<AlertDialogPrimitive.AlertDialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref">, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const AlertDialogDescription: React.ForwardRefExoticComponent<Omit<Omit<AlertDialogPrimitive.AlertDialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref">, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
declare const AlertDialogAction: React.ForwardRefExoticComponent<Omit<Omit<AlertDialogPrimitive.AlertDialogActionProps & React.RefAttributes<HTMLButtonElement>, "ref">, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const AlertDialogCancel: React.ForwardRefExoticComponent<Omit<Omit<AlertDialogPrimitive.AlertDialogCancelProps & React.RefAttributes<HTMLButtonElement>, "ref">, "ref"> & React.RefAttributes<HTMLButtonElement>>;

export { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger };
