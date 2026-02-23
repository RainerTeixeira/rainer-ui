/**
 * Badge Component
 *
 * Componente badge para status, tags e indicadores.
 * Suporta múltiplas variantes e tamanhos.
 *
 * @module components/ui/badge
 * @author Rainer Teixeira
 * @version 1.0.0
 */
import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const badgeVariants: (props?: {
    variant?: "success" | "warning" | "info" | "secondary" | "default" | "destructive" | "outline" | "neon" | "count" | "cyberpunk";
    size?: "sm" | "md" | "lg";
} & import("class-variance-authority/types").ClassProp) => string;
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, size, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
export { Badge, badgeVariants };
