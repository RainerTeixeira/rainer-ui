/**
 * Componente Quote
 *
 * Exibição de citações e depoimentos.
 * Suporta diferentes estilos e atribuições.
 *
 * @module @rainersoft/utils/content/quote
 * @author Rainer Teixeira
 * @version 1.0.0
 */
import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
/**
 * Variantes do Quote
 */
declare const quoteVariants: (props?: {
    variant?: "success" | "warning" | "error" | "primary" | "secondary" | "default" | "neon" | "glass" | "muted" | "card" | "testimonial";
    size?: "sm" | "md" | "lg" | "xl";
} & import("class-variance-authority/types").ClassProp) => string;
/**
 * Props do Quote
 */
export interface QuoteProps extends React.HTMLAttributes<HTMLQuoteElement>, VariantProps<typeof quoteVariants> {
    /** Autor da citação */
    author?: string;
    /** Fonte/título do autor */
    source?: string;
    /** URL da fonte */
    sourceUrl?: string;
    /** Se mostra o ícone de aspas */
    showIcon?: boolean;
    /** Ícone customizado */
    icon?: React.ReactNode;
    /** Posição do ícone */
    iconPosition?: 'top' | 'bottom';
}
/**
 * Componente Quote
 *
 * Exibição de citações.
 *
 * @example
 * ```tsx
 * // Simples
 * <Quote>
 *   "A vida é o que acontece enquanto você está ocupado fazendo outros planos."
 * </Quote>
 *
 * // Com autor
 * <Quote
 *   author="John Lennon"
 *   source="Músico"
 * >
 *   "A vida é o que acontece enquanto você está ocupado fazendo outros planos."
 * </Quote>
 *
 * // Testemunho
 * <Quote
 *   variant="testimonial"
 *   author="Maria Silva"
 *   source="Cliente"
 *   showIcon
 * >
 *   "Excelente serviço! Superou todas as minhas expectativas."
 * </Quote>
 *
 * // Com variantes de cor
 * <Quote variant="success" size="lg">
 *   "O sucesso é a soma de pequenos esforços repetidos dia após dia."
 * </Quote>
 * ```
 */
export declare const Quote: React.ForwardRefExoticComponent<QuoteProps & React.RefAttributes<HTMLQuoteElement>>;
/**
 * QuoteTestimonial - Atalho para testemunhos
 */
export interface QuoteTestimonialProps extends Omit<QuoteProps, 'variant'> {
    /** Avatar do autor */
    avatar?: string;
    /** Avaliação em estrelas */
    rating?: number;
}
export declare const QuoteTestimonial: React.ForwardRefExoticComponent<QuoteTestimonialProps & React.RefAttributes<HTMLQuoteElement>>;
/**
 * QuoteBlock - Citação em destaque
 */
export interface QuoteBlockProps extends Omit<QuoteProps, 'variant' | 'size'> {
}
export declare const QuoteBlock: React.ForwardRefExoticComponent<QuoteBlockProps & React.RefAttributes<HTMLQuoteElement>>;
export {};
