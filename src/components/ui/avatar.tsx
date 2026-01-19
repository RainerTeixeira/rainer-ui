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
import { getInitials } from '@rainersoft/utils';

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
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
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
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
  xl: 'h-16 w-16 text-lg',
  '2xl': 'h-20 w-20 text-xl',
  '3xl': 'h-24 w-24 text-2xl',
} as const;

/**
 * Classes de borda por variante
 */
const variantClasses = {
  circular: 'rounded-full',
  rounded: 'rounded-xl',
  square: 'rounded-lg',
} as const;

/**
 * Função para gerar cor baseada no nome (hash consistente)
 */
function getColorFromName(name: string): string {
  const colors = [
    'from-blue-400 to-blue-600',
    'from-green-400 to-green-600', 
    'from-purple-400 to-purple-600',
    'from-pink-400 to-pink-600',
    'from-indigo-400 to-indigo-600',
    'from-cyan-400 to-cyan-600',
    'from-emerald-400 to-emerald-600',
    'from-rose-400 to-rose-600',
    'from-amber-400 to-amber-600',
    'from-teal-400 to-teal-600'
  ];
  
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  return colors[Math.abs(hash) % colors.length];
}

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
 * <Avatar name="John Doe" size="xl" />
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
      fallbackColor,
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

    const initials = name ? getInitials(name, maxInitials) : '';
    const ariaLabel = alt || name || 'Avatar';
    
    // Cor automática baseada no nome se não especificada
    const autoColor = name && !fallbackColor ? getColorFromName(name) : '';
    const bgClass = fallbackColor || (autoColor ? `bg-gradient-to-br ${autoColor}` : 'bg-gray-500');

    return (
      <div
        ref={ref}
        className={cn(
          'relative inline-flex items-center justify-center font-medium select-none',
          'transition-all duration-200 ease-in-out',
          sizeClasses[size],
          variantClasses[variant],
          showFallback ? bgClass : 'bg-transparent',
          textColor,
          'shadow-sm hover:shadow-md',
          className
        )}
        role="img"
        aria-label={ariaLabel}
        {...props}
      >
        {showFallback ? (
          <div className="flex items-center justify-center">
            {initials ? (
              <span className="font-semibold tracking-wide">
                {initials}
              </span>
            ) : (
              <span className="opacity-60 text-2xl">
                ?
              </span>
            )}
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            className={cn(
              'h-full w-full object-cover',
              variantClasses[variant],
              'transition-opacity duration-200'
            )}
            style={{ 
              opacity: imageStatus === 'loaded' ? 1 : 0
            }}
          />
        )}
        
        {/* Loading spinner */}
        {imageStatus === 'loading' && !showFallback && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100/80 backdrop-blur-sm">
            <div className="h-3 w-3 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" />
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
      'flex h-full w-full items-center justify-center font-medium',
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = 'AvatarFallback';

