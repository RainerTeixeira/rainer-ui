import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as React from 'react';

/**
 * Sistema de variantes do Button
 */
declare const buttonVariants: (props?: {
    variant?: "secondary" | "default" | "link" | "destructive" | "outline" | "ghost" | "neon" | "glass" | "minimal";
    size?: "default" | "xs" | "sm" | "lg" | "xl" | "icon" | "icon-sm" | "icon-lg" | "icon-xl";
    animation?: "none" | "scale" | "glow" | "bounce" | "pulse";
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do Button
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    /** Se deve renderizar como filho (Slot) */
    asChild?: boolean;
    /** Estado de loading */
    loading?: boolean;
    /** Ícone de loading */
    loadingIcon?: React.ReactNode;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

export { Button, type ButtonProps, buttonVariants };
