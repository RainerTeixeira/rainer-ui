/**
 * Inline Loader Component
 * 
 * Loader inline para uso dentro de botões ou textos.
 * Animação suave com dots e acessibilidade completa.
 * 
 * @module @rainersoft/ui/ui
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

interface InlineLoaderProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dots' | 'spinner';
}

export function InlineLoader({ 
  className, 
  size = 'sm', 
  variant = 'spinner' 
}: InlineLoaderProps) {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  if (variant === 'dots') {
    return (
      <div className={cn('flex items-center gap-1', className)} aria-label="Carregando">
        <div className="flex gap-1">
          <div className="w-1 h-1 bg-current rounded-full animate-pulse" />
          <div className="w-1 h-1 bg-current rounded-full animate-pulse delay-75" />
          <div className="w-1 h-1 bg-current rounded-full animate-pulse delay-150" />
        </div>
      </div>
    );
  }

  return (
    <Loader2 
      className={cn('animate-spin', sizeClasses[size], className)}
      aria-label="Carregando"
    />
  );
}

