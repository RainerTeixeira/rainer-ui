import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';

/**
 * Variantes do Quote
 */
declare const quoteVariants: (props?: {
    variant?: "default" | "success" | "warning" | "error" | "primary" | "secondary" | "neon" | "glass" | "muted" | "card" | "testimonial";
    size?: "sm" | "md" | "lg" | "xl";
} & class_variance_authority_types.ClassProp) => string;
/**
 * Props do Quote
 */
interface QuoteProps extends React.HTMLAttributes<HTMLQuoteElement>, VariantProps<typeof quoteVariants> {
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
declare const Quote: React.ForwardRefExoticComponent<QuoteProps & React.RefAttributes<HTMLQuoteElement>>;
/**
 * QuoteTestimonial - Atalho para testemunhos
 */
interface QuoteTestimonialProps extends Omit<QuoteProps, 'variant'> {
    /** Avatar do autor */
    avatar?: string;
    /** Avaliação em estrelas */
    rating?: number;
}
declare const QuoteTestimonial: React.ForwardRefExoticComponent<QuoteTestimonialProps & React.RefAttributes<HTMLQuoteElement>>;
/**
 * QuoteBlock - Citação em destaque
 */
interface QuoteBlockProps extends Omit<QuoteProps, 'variant' | 'size'> {
}
declare const QuoteBlock: React.ForwardRefExoticComponent<QuoteBlockProps & React.RefAttributes<HTMLQuoteElement>>;

export { Quote, QuoteBlock, type QuoteBlockProps, type QuoteProps, QuoteTestimonial, type QuoteTestimonialProps };
