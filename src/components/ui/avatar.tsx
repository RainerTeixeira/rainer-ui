/**
 * Avatar Component
 *
 * Componente universal de avatar com suporte a imagem, iniciais e fallback.
 * Totalmente acessível e customizável via design tokens.
 *
 * @module @rainersoft/ui/components/ui/avatar
 */

'use client';

import * as React from 'react';
import { cn } from '../../lib/utils';

/**
 * Função local para extrair iniciais (implementação simplificada)
 */
function extractInitials(name: string | null | undefined, maxChars: number = 2): string {
  if (!name) return '';
  
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].slice(0, maxChars).toUpperCase();
  }
  
  return parts
    .slice(0, maxChars)
    .map(part => part[0])
    .join('')
    .toUpperCase();
}

/**
 * Avatar component props
 */
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** URL da imagem do avatar */
  src?: string;
  /** Texto alternativo para acessibilidade */
  alt?: string;
  /** Nome completo para gerar iniciais */
  name?: string;
  /** Tamanho do avatar */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Variante visual */
  variant?: 'circular' | 'rounded' | 'square';
  /** Cor de fundo customizada */
  fallbackColor?: string;
  /** Cor do texto customizada */
  textColor?: string;
  /** Número máximo de caracteres nas iniciais */
  maxInitials?: number;
  /** Callback quando imagem carrega com sucesso */
  onLoad?: () => void;
  /** Callback quando imagem falha ao carregar */
  onError?: () => void;
}

/**
 * Mapeamento de tamanhos para classes Tailwind
 */
const sizeClasses = {
  xs: 'h-6 w-6 text-xs',
  sm: 'h-8 w-8 text-sm',
  md: 'h-10 w-10 text-base',
  lg: 'h-12 w-12 text-lg',
  xl: 'h-16 w-16 text-xl',
  '2xl': 'h-20 w-20 text-2xl',
} as const;

/**
 * Classes de borda por variante
 */
const variantClasses = {
  circular: 'rounded-full',
  rounded: 'rounded-lg',
  square: 'rounded-none',
} as const;

/**
 * Avatar Component
 *
 * Componente de avatar flexível que suporta:
 * - Imagem com fallback para iniciais
 * - Iniciais geradas automaticamente do nome
 * - Múltiplos tamanhos e variantes
 * - Cores customizáveis via design tokens
 * - Total acessibilidade com ARIA labels
 *
 * @example
 * ```tsx
 * // Com imagem
 * <Avatar src="/photo.jpg" alt="John Doe" size="lg" />
 *
 * // Com iniciais
 * <Avatar name="John Doe" size="xl" fallbackColor="bg-blue-500" />
 *
 * // Customizado
 * <Avatar 
 *   name="Maria Silva" 
 *   size="md" 
 *   variant="rounded"
 *   maxInitials={1}
 * />
 * ```
 */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      className,
      src,
      alt,
      name,
      size = 'md',
      variant = 'circular',
      fallbackColor = 'bg-gray-400',
      textColor = 'text-white',
      maxInitials = 2,
      onLoad,
      onError,
      children,
      ...props
    },
    ref
  ) => {
    const [imageStatus, setImageStatus] = React.useState<'loading' | 'loaded' | 'error'>('loading');
    const [showFallback, setShowFallback] = React.useState(!src);

    React.useEffect(() => {
      if (!src) {
        setShowFallback(true);
        setImageStatus('error');
        return;
      }

      setImageStatus('loading');
      setShowFallback(false);

      const img = new Image();
      img.onload = () => {
        setImageStatus('loaded');
        onLoad?.();
      };
      img.onerror = () => {
        setImageStatus('error');
        setShowFallback(true);
        onError?.();
      };
      img.src = src;
    }, [src, onLoad, onError]);

    const initials = name ? extractInitials(name, maxInitials) : '';
    const ariaLabel = alt || name || 'Avatar';

    return (
      <div
        ref={ref}
        className={cn(
          'relative inline-flex items-center justify-center font-medium',
          sizeClasses[size],
          variantClasses[variant],
          showFallback ? fallbackColor : 'bg-transparent',
          textColor,
          className
        )}
        role="img"
        aria-label={ariaLabel}
        {...props}
      >
        {showFallback ? (
          initials || (
            <span className="opacity-50">
              {size === 'xs' ? '?' : size === 'sm' ? '?' : 'User'}
            </span>
          )
        ) : (
          <img
            src={src}
            alt={alt}
            className={cn(
              'h-full w-full object-cover',
              variantClasses[variant]
            )}
            style={{ 
              opacity: imageStatus === 'loaded' ? 1 : 0,
              transition: 'opacity 0.2s ease-in-out'
            }}
          />
        )}
        
        {/* Indicador de loading */}
        {imageStatus === 'loading' && !showFallback && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <div className="h-2 w-2 animate-pulse rounded-full bg-gray-400" />
          </div>
        )}
        
        {children}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

// Separate components for compatibility with Radix UI pattern
export const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <img
    ref={ref}
    className={cn('h-full w-full object-cover', className)}
    {...props}
  />
));
AvatarImage.displayName = 'AvatarImage';

export const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-gray-100',
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = 'AvatarFallback';

