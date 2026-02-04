import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Variantes do badge usando CVA
 *
 * Define classes base e variantes para diferentes estilos.
 *
 * Classes base:
 * - inline-flex: layout flex inline
 * - items-center: centralização vertical
 * - rounded-full: bordas totalmente arredondadas (pill)
 * - border: borda de 1px
 * - px-2.5 py-0.5: padding pequeno
 * - text-xs: texto pequeno
 * - font-semibold: negrito
 * - transition-colors: transições suaves de cor
 * - focus:ring: anel de foco para acessibilidade
 *
 * @constant
 * @type {Function}
 */
declare const badgeVariants: (props?: {
    variant?: "secondary" | "default" | "destructive" | "outline";
} & class_variance_authority_types.ClassProp) => string;
/**
 * Interface de props do Badge
 * Extende HTMLAttributes do div e inclui variantes do CVA
 *
 * @interface BadgeProps
 * @extends React.HTMLAttributes<HTMLDivElement>
 * @extends VariantProps<typeof badgeVariants>
 */
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
/**
 * Componente Badge
 *
 * Renderiza uma etiqueta/tag pequena para destacar informações.
 * Ideal para status, categorias, contadores ou labels.
 *
 * @param {BadgeProps} props - Propriedades do componente
 * @param {string} [props.variant="default"] - Variante de estilo
 * @param {string} [props.className] - Classes CSS adicionais
 * @returns {JSX.Element} Badge estilizado
 *
 * @example
 * // Badge simples
 * <Badge>Novo</Badge>
 *
 * @example
 * // Badge secundário com ícone
 * <Badge variant="secondary">
 *   <Star className="w-3 h-3 mr-1" />
 *   Popular
 * </Badge>
 *
 * @example
 * // Badge destrutivo
 * <Badge variant="destructive">Erro</Badge>
 */
declare function Badge({ className, variant, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

export { Badge, type BadgeProps, badgeVariants };
