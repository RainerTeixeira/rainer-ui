/**
 * Componente Button
 *
 * Botão universal com múltiplas variantes e estados.
 * Totalmente acessível e customizável via design tokens.
 *
 * @module @rainersoft/ui/components/ui/button
 */
import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';
/**
 * Sistema de variantes do Button
 */
declare const buttonVariants: (props?: {
    variant?: "secondary" | "link" | "default" | "destructive" | "outline" | "ghost" | "neon" | "glass" | "minimal";
    size?: "xs" | "sm" | "lg" | "xl" | "default" | "icon" | "icon-sm" | "icon-lg" | "icon-xl";
    animation?: "none" | "scale" | "glow" | "bounce" | "pulse";
} & import("class-variance-authority/types").ClassProp) => string;
/**
 * Props do Button
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    /** Se deve renderizar como filho (Slot) */
    asChild?: boolean;
    /** Estado de loading */
    loading?: boolean;
    /** Ícone de loading */
    loadingIcon?: React.ReactNode;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { buttonVariants };
