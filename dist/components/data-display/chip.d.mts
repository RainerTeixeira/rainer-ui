import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Variantes do Chip usando CVA e design tokens
 */
declare const chipVariants: (props?: {
    variant?: "success" | "warning" | "error" | "secondary" | "default" | "outline";
    size?: "sm" | "md" | "lg";
    removable?: boolean;
} & class_variance_authority_types.ClassProp) => string;
/**
 * Interface de props do Chip
 */
interface ChipProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof chipVariants> {
    /** Texto do chip */
    children: React.ReactNode;
    /** Se o chip pode ser removido */
    removable?: boolean;
    /** Callback quando o chip é removido */
    onRemove?: () => void;
    /** Ícone customizado para remoção */
    removeIcon?: React.ReactNode;
    /** Aria label para o botão de remover */
    removeAriaLabel?: string;
}
/**
 * Componente Chip
 *
 * Renderiza uma tag pequena com opção de remoção.
 * Ideal para filtros, seleções múltiplas e categorias.
 *
 * @example
 * ```tsx
 * // Chip simples
 * <Chip>React</Chip>
 *
 * // Chip removível
 * <Chip removable onRemove={() => console.log('removido')}>
 *   TypeScript
 * </Chip>
 *
 * // Chip com variante
 * <Chip variant="success" removable>
 *   Concluído
 * </Chip>
 * ```
 */
declare const Chip: React.ForwardRefExoticComponent<ChipProps & React.RefAttributes<HTMLDivElement>>;
/**
 * ChipGroup - Container para múltiplos chips
 */
interface ChipGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Espaçamento entre chips */
    spacing?: 'sm' | 'md' | 'lg';
    /** Se os chips devem quebrar linha */
    wrap?: boolean;
    /** Chips filhos */
    children: React.ReactNode;
}
declare const ChipGroup: React.ForwardRefExoticComponent<ChipGroupProps & React.RefAttributes<HTMLDivElement>>;

export { Chip, ChipGroup, type ChipGroupProps, type ChipProps };
