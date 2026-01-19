import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Variantes do IconButton
 */
declare const iconButtonVariants: (props?: {
    variant?: "secondary" | "link" | "default" | "destructive" | "outline" | "ghost" | "neon" | "glass" | "minimal";
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "icon" | "icon-sm" | "icon-lg" | "icon-xl";
    animation?: "none" | "scale" | "glow" | "bounce" | "pulse" | "rotate";
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do IconButton
 */
interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'variant'>, VariantProps<typeof iconButtonVariants> {
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
declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;

export { IconButton, type IconButtonProps };
