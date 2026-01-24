/**
 * Componente Toggle
 *
 * @module @rainersoft/ui/components/ui/toggle
 */
import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { type VariantProps } from 'class-variance-authority';
declare const toggleVariants: (props?: {
    variant?: "default" | "outline";
    size?: "sm" | "lg" | "default";
} & import("class-variance-authority/types").ClassProp) => string;
declare const Toggle: React.ForwardRefExoticComponent<Omit<TogglePrimitive.ToggleProps & React.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: {
    variant?: "default" | "outline";
    size?: "sm" | "lg" | "default";
} & import("class-variance-authority/types").ClassProp) => string> & React.RefAttributes<HTMLButtonElement>>;
export { Toggle, toggleVariants };
