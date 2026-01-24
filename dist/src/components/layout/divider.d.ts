/**
 * Componente Divider
 *
 * Linha divisória com opções de texto e estilo.
 * Separa visualmente seções de conteúdo.
 *
 * @module @rainersoft/ui/components/layout/divider
 * @author Rainer Teixeira
 * @version 1.0.0
 */
import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
/**
 * Variantes do Divider
 */
declare const dividerVariants: (props?: {
    variant?: "primary" | "secondary" | "default" | "muted" | "dashed" | "dotted" | "gradient";
    size?: "xs" | "sm" | "md" | "lg";
    orientation?: "horizontal" | "vertical";
} & import("class-variance-authority/types").ClassProp) => string;
/**
 * Props do Divider
 */
export interface DividerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof dividerVariants> {
    /** Texto da divisória */
    label?: string;
    /** Posição do label */
    labelPosition?: 'center' | 'start' | 'end';
    /** Componente customizado para o label */
    labelComponent?: React.ReactNode;
}
/**
 * Componente Divider
 *
 * Linha divisória com opção de texto.
 *
 * @example
 * ```tsx
 * // Linha simples
 * <Divider />
 *
 * // Com texto
 * <Divider label="Ou continue com" />
 *
 * // Variante pontilhada
 * <Divider variant="dashed" />
 *
 * // Vertical
 * <Divider orientation="vertical" className="h-20" />
 *
 * // Com label customizado
 * <Divider
 *   labelComponent={<Badge>Novo</Badge>}
 *   labelPosition="start"
 * />
 * ```
 */
export declare const Divider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<HTMLDivElement>>;
/**
 * SectionDivider - Divisória de seção com mais espaçamento
 */
export interface SectionDividerProps extends Omit<DividerProps, 'size'> {
    /** Espaçamento vertical */
    spacing?: 'sm' | 'md' | 'lg' | 'xl';
}
export declare const SectionDivider: React.ForwardRefExoticComponent<SectionDividerProps & React.RefAttributes<HTMLDivElement>>;
/**
 * TextDivider - Divisória com texto estilizado
 */
export interface TextDividerProps extends Omit<DividerProps, 'label'> {
    /** Texto da divisória */
    children: React.ReactNode;
    /** Cor do texto */
    textColor?: 'default' | 'muted' | 'primary' | 'secondary';
}
export declare const TextDivider: React.ForwardRefExoticComponent<TextDividerProps & React.RefAttributes<HTMLDivElement>>;
export {};
