import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as React from 'react';

declare const buttonVariants: (props?: {
    variant?: "link" | "default" | "secondary" | "destructive" | "outline" | "ghost" | "neon" | "glass" | "minimal";
    size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
} & class_variance_authority_types.ClassProp) => string;
declare function Button({ className, variant, size, asChild, ...props }: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): react_jsx_runtime.JSX.Element;

export { Button, buttonVariants };
