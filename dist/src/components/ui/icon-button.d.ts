/**
 * Componente IconButton
 *
 * Botão especializado para ícones com tooltip integrado.
 * Suporta múltiplos tamanhos, variantes e estados.
 *
 * @module @rainersoft/ui/components/ui/icon-button
 */
import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
/**
 * Variantes do IconButton
 */
declare const iconButtonVariants: (props?: {
    variant?: "secondary" | "link" | "default" | "destructive" | "outline" | "ghost" | "neon" | "glass" | "minimal";
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "icon" | "icon-sm" | "icon-lg" | "icon-xl";
    animation?: "none" | "scale" | "glow" | "bounce" | "pulse" | "rotate";
} & import("class-variance-authority/types").ClassProp) => string;
/**
 * Props do IconButton
 */
export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'variant'>, VariantProps<typeof iconButtonVariants> {
    /** Ícone */
    icon: React.ReactNode;
    /** Tooltip */
    tooltip?: string;
    /** Posição do tooltip */
    tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
    /** Estado de loading */
    loading?: boolean;
    /** Ícone de loading */
    loadingIcon?: React.ReactNode;
}
/**
 * Componente IconButton
 *
 * Botão especializado para ícones com:
 * - Tooltip integrado
 * - Múltiplas variantes e tamanhos
 * - Animações customizáveis
 * - Estado de loading
 * - Total acessibilidade
 *
 * @example
 * ```tsx
 * // Básico
 * <IconButton icon={<Plus />} onClick={handleClick} />
 *
 * // Com variantes
 * <IconButton
 *   icon={<Trash />}
 *   variant="destructive"
 *   size="lg"
 *   animation="glow"
 * />
 *
 * // Com tooltip
 * <IconButton
 *   icon={<Settings />}
 *   tooltip="Configurações"
 *   tooltipPosition="right"
 * />
 *
 * // Com loading
 * <IconButton
 *   icon={<Save />}
 *   loading
 *   tooltip="Salvando..."
 * />
 * ```
 */
export declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
