/**
 * Bookmark Button Component
 *
 * Botão de bookmark/salvar genérico para qualquer tipo de conteúdo.
 * Inclui animação suave, estado persistente e múltiplas variantes visuais.
 *
 * @module components/social/bookmark-button
 * @fileoverview Botão de bookmark com animação e estado persistente
 * @author Rainer Teixeira
 * @version 2.0.0
 * @since 1.0.0
 *
 * @example
 * ```tsx
 * // Blog post
 * <BookmarkButton
 *   itemId="post-123"
 *   initialIsBookmarked={false}
 *   onBookmark={(itemId) => console.log('Post saved:', itemId)}
 * />
 * 
 * // Produto favorito
 * <BookmarkButton
 *   itemId="product-456"
 *   initialIsBookmarked={true}
 *   variant="default"
 *   activeColor="warning"
 *   activeLabel="Favoritado"
 *   inactiveLabel="Favoritar"
 * />
 * 
 * // Artigo para ler depois
 * <BookmarkButton
 *   itemId="article-789"
 *   showLabel={false}
 *   size="sm"
 * />
 * ```
 *
 * Características:
 * - Genérico: Funciona com qualquer tipo de conteúdo (posts, produtos, artigos)
 * - Animação suave ao salvar/remover
 * - Estado controlado externamente
 * - Múltiplas variantes (default, ghost, outline)
 * - Cores customizáveis
 * - Labels customizáveis
 * - Callbacks opcionais (onBookmark, onUnbookmark)
 * - Acessibilidade completa
 * 
 * Casos de uso:
 * - Blogs: Salvar posts para ler depois
 * - E-commerce: Favoritar produtos
 * - Notícias: Salvar artigos importantes
 * - Educação: Salvar aulas/cursos
 * - Pesquisa: Salvar resultados
 */

'use client';

import { Button } from '../ui/button';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Bookmark } from 'lucide-react';

interface BookmarkButtonProps {
  /** ID único do item (post, produto, artigo, etc) */
  itemId: string;
  /** Estado inicial de bookmark */
  initialIsBookmarked?: boolean;
  /** Variante visual */
  variant?: 'default' | 'ghost' | 'outline';
  /** Cor quando ativo */
  activeColor?: 'primary' | 'success' | 'warning' | 'error' | 'info';
  /** Tamanho do botão */
  size?: 'sm' | 'default' | 'lg';
  /** Exibir label */
  showLabel?: boolean;
  /** Label customizado quando ativo */
  activeLabel?: string;
  /** Label customizado quando inativo */
  inactiveLabel?: string;
  /** Callback ao salvar/bookmark */
  onBookmark?: (itemId: string) => void;
  /** Callback ao remover bookmark */
  onUnbookmark?: (itemId: string) => void;
  /** Classes CSS adicionais */
  className?: string;
}

export function BookmarkButton({
  itemId,
  initialIsBookmarked = false,
  variant = 'ghost',
  activeColor = 'warning',
  size = 'sm',
  showLabel = true,
  activeLabel = 'Salvo',
  inactiveLabel = 'Salvar',
  onBookmark,
  onUnbookmark,
  className,
}: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState(initialIsBookmarked);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleBookmark = () => {
    setIsAnimating(true);
    
    // itemId disponível para persistência futura ou análise
    console.debug(`Ação de bookmark para o item: ${itemId}`);
    
    if (isBookmarked) {
      setIsBookmarked(false);
      onUnbookmark?.(itemId);
    } else {
      setIsBookmarked(true);
      onBookmark?.(itemId);
    }

    setTimeout(() => setIsAnimating(false), 600);
  };

  // Classes de cor baseadas no activeColor
  const getColorClasses = () => {
    const colorMap = {
      primary: 'text-primary hover:text-primary/80',
      success: 'text-emerald-500 hover:text-emerald-600',
      warning: 'text-amber-500 hover:text-amber-600',
      error: 'text-red-500 hover:text-red-600',
      info: 'text-blue-500 hover:text-blue-600',
    };
    return colorMap[activeColor];
  };

  // Classes de background quando ativo
  const getActiveBgClasses = () => {
    const bgMap = {
      primary: 'bg-primary hover:bg-primary/90 text-primary-foreground border-primary',
      success: 'bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-500',
      warning: 'bg-amber-500 hover:bg-amber-600 text-white border-amber-500',
      error: 'bg-red-500 hover:bg-red-600 text-white border-red-500',
      info: 'bg-blue-500 hover:bg-blue-600 text-white border-blue-500',
    };
    return bgMap[activeColor];
  };

  return (
    <Button
      variant={isBookmarked && variant === 'default' ? 'default' : variant}
      size={size}
      onClick={handleBookmark}
      className={cn(
        'gap-2 transition-all',
        isBookmarked && variant === 'ghost' && getColorClasses(),
        isBookmarked && variant === 'default' && getActiveBgClasses(),
        className
      )}
      aria-label={isBookmarked ? 'Remover dos salvos' : 'Salvar para ler depois'}
    >
      <motion.div
        animate={
          isAnimating
            ? {
                scale: [1, 1.3, 1],
                rotate: [0, -15, 15, 0],
              }
            : {}
        }
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <Bookmark
          className={cn(
            'h-4 w-4 transition-all',
            isBookmarked && 'fill-current'
          )}
        />
      </motion.div>
      {showLabel && (
        <span className="font-medium">
          {isBookmarked ? activeLabel : inactiveLabel}
        </span>
      )}
    </Button>
  );
}

export type { BookmarkButtonProps };

