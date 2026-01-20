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
import { cva, type VariantProps } from 'class-variance-authority';
import QuoteIcon from 'lucide-react/dist/esm/icons/quote';

import { cn } from "@rainersoft/ui/lib/tokens";

/**
 * Variantes do Quote
 */
const quoteVariants = cva(
  'relative border-l-4 pl-6 italic',
  {
    variants: {
      variant: {
        default: 'border-[var(--color-border-default)]',
        muted: 'border-[var(--color-border-default)]',
        primary: 'border-[var(--color-button-primary-default)]',
        secondary: 'border-[var(--color-button-secondary-default)]',
        success: 'border-[var(--color-status-success-default)]',
        warning: 'border-[var(--color-status-warning-default)]',
        error: 'border-[var(--color-status-error-default)]',
        testimonial: 'border-transparent bg-[var(--color-background-secondary)] rounded-lg p-6',
        card: 'border-[var(--color-border-default)] bg-[var(--color-background-primary)] rounded-lg p-6 shadow-sm',
        glass: 'glass border-transparent rounded-lg p-6',
        neon: 'neon-border rounded-lg p-6',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

/**
 * Props do Quote
 */
export interface QuoteProps
  extends React.HTMLAttributes<HTMLQuoteElement>,
    VariantProps<typeof quoteVariants> {
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
export const Quote = React.forwardRef<HTMLQuoteElement, QuoteProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      author,
      source,
      sourceUrl,
      showIcon = false,
      icon,
      iconPosition = 'top',
      children,
      ...props
    },
    ref
  ) => {
    const IconComponent = icon || (
      variant === 'testimonial' || variant === 'card' ? (
        <QuoteIcon className="h-8 w-8 text-[var(--color-text-link)]" />
      ) : (
        <QuoteIcon className="h-4 w-4 text-[var(--color-text-secondary)]" />
      )
    );

    return (
      <blockquote
        ref={ref}
        className={cn(
          quoteVariants({ variant, size }),
          (variant === 'testimonial' || variant === 'card' || 
           variant === 'glass' || variant === 'neon') && 'border-l-0',
          className
        )}
        {...props}
      >
        {/* Ícone no topo */}
        {showIcon && iconPosition === 'top' && (
          <div className="absolute -top-2 -left-2">
            {IconComponent}
          </div>
        )}

        {/* Conteúdo */}
        <div className="relative">
          {children}
        </div>

        {/* Autor e fonte */}
        {(author || source) && (
          <footer className="mt-4 not-italic">
            {author && (
              <cite className="font-semibold not-italic text-[var(--color-text-primary)]">
                {author}
              </cite>
            )}
            {source && (
              <>
                {author && <span className="mx-2" style={{ color: 'var(--color-text-tertiary)' }}>•</span>}
                {sourceUrl ? (
                  <a
                    href={sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {source}
                  </a>
                ) : (
                  <span style={{ color: 'var(--color-text-secondary)' }}>{source}</span>
                )}
              </>
            )}
          </footer>
        )}

        {/* Ícone na base */}
        {showIcon && iconPosition === 'bottom' && (
          <div className="absolute -bottom-2 -right-2">
            {IconComponent}
          </div>
        )}
      </blockquote>
    );
  }
);

Quote.displayName = 'Quote';

/**
 * QuoteTestimonial - Atalho para testemunhos
 */
export interface QuoteTestimonialProps extends Omit<QuoteProps, 'variant'> {
  /** Avatar do autor */
  avatar?: string;
  /** Avaliação em estrelas */
  rating?: number;
}

export const QuoteTestimonial = React.forwardRef<HTMLDivElement, QuoteTestimonialProps>(
  (
    {
      className,
      author,
      source,
      avatar,
      rating,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-[var(--color-background-primary)] rounded-lg p-6 shadow-sm border border-[var(--color-border-default)]',
          className
        )}
      >
        <Quote
          variant="testimonial"
          author={author}
          source={source}
          showIcon
          {...props}
        >
          {children}
        </Quote>
        
        {/* Avatar e rating */}
        <div className="flex items-center justify-between mt-4">
          {avatar && (
            <div className="flex items-center gap-3">
              <img
                src={avatar}
                alt={author}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                {author && (
                  <div className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>{author}</div>
                )}
                {source && (
                  <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{source}</div>
                )}
              </div>
            </div>
          )}
          
          {rating && (
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className="text-lg"
                  style={{
                    color: i < rating ? 'var(--color-status-warning-default)' : 'var(--color-text-tertiary)',
                  }}
                >
                  ★
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);

QuoteTestimonial.displayName = 'QuoteTestimonial';

/**
 * QuoteBlock - Citação em destaque
 */
export interface QuoteBlockProps extends Omit<QuoteProps, 'variant' | 'size'> {}

export const QuoteBlock = React.forwardRef<HTMLQuoteElement, QuoteBlockProps>(
  (
    {
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div className="relative my-8 py-8">
        <Quote
          ref={ref}
          variant="default"
          size="xl"
          className={cn(
            'text-center border-l-0 border-r-0 border-t-2 border-b-2 border-[var(--color-border-default)] py-8',
            className
          )}
          {...props}
        >
          <div className="text-2xl md:text-3xl font-normal" style={{ color: 'var(--color-text-secondary)' }}>
            {children}
          </div>
        </Quote>
      </div>
    );
  }
);

QuoteBlock.displayName = 'QuoteBlock';
