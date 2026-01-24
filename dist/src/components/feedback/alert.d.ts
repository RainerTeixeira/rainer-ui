/**
 * Alert Component (shadcn/ui)
 *
 * Alert para mensagens importantes
 *
 * @fileoverview Alert component
 * @author Rainer Teixeira
 */
import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const Alert: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: {
    variant?: "success" | "warning" | "info" | "default" | "destructive";
} & import("class-variance-authority/types").ClassProp) => string> & React.RefAttributes<HTMLDivElement>>;
declare const AlertTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const AlertDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
export { Alert, AlertTitle, AlertDescription };
