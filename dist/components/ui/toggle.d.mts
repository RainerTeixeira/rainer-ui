import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { VariantProps } from 'class-variance-authority';

declare const toggleVariants: (props?: {
    variant?: "default" | "outline";
    size?: "sm" | "lg" | "default";
} & class_variance_authority_types.ClassProp) => string;
declare const Toggle: React.ForwardRefExoticComponent<Omit<TogglePrimitive.ToggleProps & React.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: {
    variant?: "default" | "outline";
    size?: "sm" | "lg" | "default";
} & class_variance_authority_types.ClassProp) => string> & React.RefAttributes<HTMLButtonElement>>;

export { Toggle, toggleVariants };
