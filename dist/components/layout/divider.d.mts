import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Variantes do Divider
 */
declare const dividerVariants: (props?: {
    variant?: "primary" | "secondary" | "default" | "muted" | "gradient" | "dashed" | "dotted";
    size?: "xs" | "sm" | "md" | "lg";
    orientation?: "horizontal" | "vertical";
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do Divider
 */
interface DividerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof dividerVariants> {
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
declare const Divider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<HTMLDivElement>>;
/**
 * SectionDivider - Divisória de seção com mais espaçamento
 */
interface SectionDividerProps extends Omit<DividerProps, 'size'> {
    /** Espaçamento vertical */
    spacing?: 'sm' | 'md' | 'lg' | 'xl';
}
declare const SectionDivider: React.ForwardRefExoticComponent<SectionDividerProps & React.RefAttributes<HTMLDivElement>>;
/**
 * TextDivider - Divisória com texto estilizado
 */
interface TextDividerProps extends Omit<DividerProps, 'label'> {
    /** Texto da divisória */
    children: React.ReactNode;
    /** Cor do texto */
    textColor?: 'default' | 'muted' | 'primary' | 'secondary';
}
declare const TextDivider: React.ForwardRefExoticComponent<TextDividerProps & React.RefAttributes<HTMLDivElement>>;

export { Divider, type DividerProps, SectionDivider, type SectionDividerProps, TextDivider, type TextDividerProps };
