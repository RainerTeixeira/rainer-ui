import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

declare const badgeVariants: (props?: {
    variant?: "success" | "warning" | "info" | "secondary" | "default" | "destructive" | "outline" | "neon" | "count" | "cyberpunk";
    size?: "sm" | "md" | "lg";
} & class_variance_authority_types.ClassProp) => string;
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, size, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

export { Badge, type BadgeProps, badgeVariants };
