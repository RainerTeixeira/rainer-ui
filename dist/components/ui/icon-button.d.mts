import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Variantes do IconButton
 */
declare const iconButtonVariants: (props?: {
    variant?: "link" | "default" | "secondary" | "destructive" | "outline" | "ghost" | "neon" | "glass";
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "icon" | "icon-sm" | "icon-lg";
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
}
/**
 * Componente IconButton
 *
 * Botão apenas com ícone.
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
 * />
 *
 * // Com tooltip
 * <IconButton
 *   icon={<Settings />}
 *   tooltip="Configurações"
 *   tooltipPosition="right"
 * />
 * ```
 */
declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;

export { IconButton, type IconButtonProps };
