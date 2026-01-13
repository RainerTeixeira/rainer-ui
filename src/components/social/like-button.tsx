/**
 * Like Button Component
 *
 * Botão de curtir/like genérico para qualquer tipo de conteúdo.
 * Suporta animação suave, estado persistente e callbacks customizáveis.
 *
 * @module components/social/like-button
 * @fileoverview Botão de curtir com animação e estado persistente
 * @author Rainer Teixeira
 * @version 2.0.0
 * @since 1.0.0
 *
 * @example
 * ```tsx
 * // Blog post
 * <LikeButton
 *   itemId="post-123"
 *   initialLikes={10}
 *   initialIsLiked={false}
 *   onLike={(likes) => console.log('Post liked:', likes)}
 * />
 * 
 * // Produto
 * <LikeButton
 *   itemId="product-456"
 *   initialLikes={42}
 *   initialIsLiked={true}
 *   variant="compact"
 *   activeColor="error"
 * />
 * 
 * // Comentário
 * <LikeButton
 *   itemId="comment-789"
 *   initialLikes={5}
 *   showLabel={false}
 *   size="sm"
 * />
 * ```
 *
 * Características:
 * - Genérico: Funciona com qualquer tipo de conteúdo (posts, produtos, comentários)
 * - Animação suave ao curtir/descurtir
 * - Estado controlado externamente
 * - Múltiplas variantes (default, compact)
 * - Cores customizáveis
 * - Callbacks opcionais (onLike, onUnlike)
 * - Acessibilidade completa
 * 
 * Casos de uso:
 * - Blogs: Curtir posts, artigos
 * - E-commerce: Curtir produtos, avaliações
 * - Social Media: Curtir posts, comentários
 * - Fóruns: Curtir respostas, tópicos
 * - Dashboards: Favoritar itens
 */

'use client';

import { Button } from '../ui/button';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Heart } from 'lucide-react';

/**
 * Propriedades do componente LikeButton
 * 
 * @interface LikeButtonProps
 * @property {string} itemId - ID único do item (post, produto, comentário, etc)
 * @property {number} initialLikes - Número inicial de curtidas
 * @property {boolean} [initialIsLiked=false] - Estado inicial de curtida
 * @property {'default' | 'compact'} [variant='default'] - Variante visual do botão
 * @property {'primary' | 'success' | 'warning' | 'error' | 'info'} [activeColor='primary'] - Cor quando ativo
 * @property {'sm' | 'default' | 'lg'} [size='default'] - Tamanho do botão
 * @property {boolean} [showLabel=true] - Exibir label
 * @property {boolean} [showCount=true] - Exibir contador
 * @property {string} [activeLabel='Curtido'] - Label customizado quando ativo
 * @property {string} [inactiveLabel='Curtir'] - Label customizado quando inativo
 * @property {(likes: number, itemId: string) => void} [onLike] - Callback ao curtir
 * @property {(likes: number, itemId: string) => void} [onUnlike] - Callback ao descurtir
 * @property {string} [className] - Classes CSS adicionais
 */
interface LikeButtonProps {
  /** ID único do item (post, produto, comentário, etc) */
  itemId: string;
  /** Número inicial de curtidas */
  initialLikes: number;
  /** Estado inicial de curtida */
  initialIsLiked?: boolean;
  /** Variante visual */
  variant?: 'default' | 'compact';
  /** Cor quando ativo */
  activeColor?: 'primary' | 'success' | 'warning' | 'error' | 'info';
  /** Tamanho do botão */
  size?: 'sm' | 'default' | 'lg';
  /** Exibir label */
  showLabel?: boolean;
  /** Exibir contador */
  showCount?: boolean;
  /** Label customizado quando ativo */
  activeLabel?: string;
  /** Label customizado quando inativo */
  inactiveLabel?: string;
  /** Callback ao curtir */
  onLike?: (likes: number, itemId: string) => void;
  /** Callback ao descurtir */
  onUnlike?: (likes: number, itemId: string) => void;
  /** Classes CSS adicionais */
  className?: string;
}

/**
 * Componente de botão de curtir com animação
 * 
 * Renderiza um botão interativo para curtir/descurtir conteúdo.
 * Inclui animação de escala e rotação ao interagir.
 * 
 * @param {LikeButtonProps} props - Propriedades do componente
 * @returns {JSX.Element} Elemento do botão de curtir
 */
export function LikeButton({
  itemId,
  initialLikes,
  initialIsLiked = false,
  variant = 'default',
  activeColor = 'error',
  size = 'sm',
  showLabel = true,
  showCount = true,
  activeLabel = 'Curtido',
  inactiveLabel = 'Curtir',
  onLike,
  onUnlike,
  className,
}: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [likes, setLikes] = useState(initialLikes);
  const [isAnimating, setIsAnimating] = useState(false);

  /**
   * Manipula a ação de curtir/descurtir
   * 
   * Alterna o estado de curtida, atualiza o contador
   * e executa os callbacks apropriados.
   */
  const handleLike = () => {
    setIsAnimating(true);
    
    // itemId disponível para persistência futura ou análise
    console.debug(`Ação de curtir para o item: ${itemId}`);
    
    if (isLiked) {
      const newLikes = Math.max(0, likes - 1);
      setLikes(newLikes);
      setIsLiked(false);
      onUnlike?.(newLikes, itemId);
    } else {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setIsLiked(true);
      onLike?.(newLikes, itemId);
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

  // Renderização da variante compacta
  if (variant === 'compact') {
    return (
      <button
        onClick={handleLike}
        className={cn(
          'inline-flex items-center gap-1.5 text-sm transition-colors',
          isLiked ? getColorClasses() : 'text-muted-foreground hover:text-foreground',
          className
        )}
        aria-label={`${isLiked ? activeLabel : inactiveLabel} - ${likes} curtidas`}
      >
        <motion.div
          animate={
            isAnimating
              ? {
                  scale: [1, 1.3, 1],
                }
              : {}
          }
          transition={{ duration: 0.3 }}
        >
          <Heart
            className={cn('h-4 w-4 transition-all', isLiked && 'fill-current')}
          />
        </motion.div>
        {showCount && (
          <span className="font-medium">{likes.toLocaleString()}</span>
        )}
      </button>
    );
  }

  // Renderização da variante padrão
  return (
    <Button
      variant={isLiked ? 'default' : 'outline'}
      size={size}
      onClick={handleLike}
      className={cn(
        'gap-2 transition-all',
        isLiked && getActiveBgClasses(),
        className
      )}
      aria-label={`${isLiked ? activeLabel : inactiveLabel} - ${likes} curtidas`}
    >
      <motion.div
        animate={
          isAnimating
            ? {
                scale: [1, 1.3, 1],
                rotate: [0, -10, 10, 0],
              }
            : {}
        }
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <Heart
          className={cn('h-4 w-4 transition-all', isLiked && 'fill-current')}
        />
      </motion.div>
      {showLabel && (
        <span className="font-medium">{isLiked ? activeLabel : inactiveLabel}</span>
      )}
      {showCount && likes > 0 && (
        <span
          className={cn(
            'text-xs px-1.5 py-0.5 rounded-full',
            isLiked ? 'bg-current/20 text-current' : 'bg-muted text-muted-foreground'
          )}
        >
          {likes.toLocaleString()}
        </span>
      )}
    </Button>
  );
}

export type { LikeButtonProps };

