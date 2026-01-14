import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Variantes do LinkButton
 */
declare const linkButtonVariants: (props?: {
    variant?: "default" | "success" | "warning" | "info" | "destructive" | "outline" | "ghost" | "neon" | "muted";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    weight?: "bold" | "normal" | "medium" | "semibold";
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do LinkButton
 */
interface LinkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof linkButtonVariants> {
    /** Se desabilita o sublinhado */
    noUnderline?: boolean;
    /** Ícone à esquerda */
    leftIcon?: React.ReactNode;
    /** Ícone à direita */
    rightIcon?: React.ReactNode;
    /** Se é um link verdadeiro */
    href?: string;
    /** Target do link */
    target?: string;
}
/**
 * Componente LinkButton
 *
 * Botão com estilo de link.
 *
 * @example
 * ```tsx
 * // Básico
 * <LinkButton onClick={handleClick}>
 *   Clique aqui
 * </LinkButton>
 *
 * // Com variantes
 * <LinkButton
 *   variant="muted"
 *   size="sm"
 *   weight="semibold"
 * >
 *   Link secundário
 * </LinkButton>
 *
 * // Com ícones
 * <LinkButton
 *   leftIcon={<Plus />}
 *   rightIcon={<ArrowRight />}
 *   href="/page"
 * >
 *   Ir para página
 * </LinkButton>
 *
 * // Link verdadeiro
 * <LinkButton
 *   href="https://example.com"
 *   target="_blank"
 *   variant="info"
 * >
 *   Abrir site
 * </LinkButton>
 * ```
 */
declare const LinkButton: React.ForwardRefExoticComponent<LinkButtonProps & React.RefAttributes<HTMLButtonElement>>;

export { LinkButton, type LinkButtonProps };
