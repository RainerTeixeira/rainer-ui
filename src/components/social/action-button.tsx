/**
 * Action Button Component
 * 
 * Componente de botão de ação genérico e configurável para interações do usuário.
 * Ideal para curtidas, favoritos, saves, follow e outras ações toggleáveis.
 * 
 * @module components/social/action-button
 * @fileoverview Botão de ação genérico com estado e animação
 * @author Rainer Teixeira
 * @version 2.0.0
 * @since 1.0.0
 * 
 * @example
 * ```tsx
 * // Botão de curtir
 * <ActionButton
 *   icon={<Heart />}
 *   activeIcon={<Heart className="fill-current" />}
 *   count={likes}
 *   isActive={isLiked}
 *   onToggle={handleLike}
 *   activeLabel="Curtido"
 *   inactiveLabel="Curtir"
 * />
 * 
 * // Botão de favorito
 * <ActionButton
 *   icon={<Star />}
 *   activeIcon={<Star className="fill-current" />}
 *   isActive={isFavorited}
 *   onToggle={handleFavorite}
 *   variant="ghost"
 *   size="sm"
 * />
 * 
 * // Botão de follow
 * <ActionButton
 *   icon={<UserPlus />}
 *   activeIcon={<UserCheck />}
 *   isActive={isFollowing}
 *   onToggle={handleFollow}
 *   activeLabel="Seguindo"
 *   inactiveLabel="Seguir"
 *   variant={isFollowing ? "outline" : "default"}
 * />
 * ```
 * 
 * Características:
 * - Genérico: Configurável para qualquer tipo de ação toggle
 * - Animado: Transições suaves ao mudar estado
 * - Contador: Suporte a contagem de interações
 * - Acessível: Labels ARIA e keyboard navigation
 * - Tema: Suporte a variantes visuais
 * - Flexível: Tamanhos e estilos customizáveis
 * 
 * Casos de uso:
 * - Blog: Curtir, favoritar, bookmark posts
 * - E-commerce: Favoritar produtos, seguir lojas
 * - Social Media: Follow, like, save posts
 * - Dashboards: Toggle settings, favoritar itens
 * - Educação: Salvar aulas, curtir conteúdo
 */

'use client';

import { Button } from '../ui/button';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * Configuração de animação para o botão
 */
interface AnimationConfig {
  /** Tipo de animação */
  type?: 'scale' | 'bounce' | 'rotate' | 'pulse';
  /** Duração em segundos */
  duration?: number;
  /** Intensidade da animação */
  intensity?: 'subtle' | 'normal' | 'strong';
}

/**
 * Props do componente ActionButton
 */
export interface ActionButtonProps {
  /** Ícone quando inativo */
  icon: React.ReactNode;
  /** Ícone quando ativo (opcional, usa icon se não fornecido) */
  activeIcon?: React.ReactNode;
  /** Se o botão está no estado ativo */
  isActive?: boolean;
  /** Callback executado ao clicar */
  onToggle?: (isActive: boolean) => void;
  /** Contador de interações */
  count?: number;
  /** Label quando inativo */
  inactiveLabel?: string;
  /** Label quando ativo */
  activeLabel?: string;
  /** Variante visual */
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  /** Tamanho do botão */
  size?: 'sm' | 'default' | 'lg' | 'icon';
  /** Exibir contador */
  showCount?: boolean;
  /** Exibir label */
  showLabel?: boolean;
  /** Configuração de animação */
  animation?: AnimationConfig;
  /** Classes CSS adicionais */
  className?: string;
  /** Desabilitar animação */
  disabled?: boolean;
  /** Tooltip/Aria label customizado */
  ariaLabel?: string;
  /** Cor customizada quando ativo */
  activeColor?: 'primary' | 'success' | 'warning' | 'error' | 'info';
}

/**
 * Mapeamento de cores para estados ativos
 */
const activeColorClasses = {
  primary: 'bg-primary hover:bg-primary/90 text-primary-foreground border-primary',
  success: 'bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-500',
  warning: 'bg-amber-500 hover:bg-amber-600 text-white border-amber-500',
  error: 'bg-red-500 hover:bg-red-600 text-white border-red-500',
  info: 'bg-blue-500 hover:bg-blue-600 text-white border-blue-500',
};

/**
 * Configurações de animação pré-definidas
 */
const animationPresets = {
  scale: { scale: [1, 1.2, 1] },
  bounce: { y: [0, -8, 0] },
  rotate: { rotate: [0, -15, 15, 0] },
  pulse: { scale: [1, 1.05, 1] },
};

/**
 * Componente ActionButton
 * 
 * Botão de ação genérico com estado toggleável, animações e contador.
 * Perfeito para interações sociais como curtir, favoritar, seguir, etc.
 */
export function ActionButton({
  icon,
  activeIcon,
  isActive = false,
  onToggle,
  count,
  inactiveLabel,
  activeLabel,
  variant = 'default',
  size = 'default',
  showCount = true,
  showLabel = true,
  animation = { type: 'scale', duration: 0.3, intensity: 'normal' },
  className,
  disabled = false,
  ariaLabel,
  activeColor = 'primary',
}: ActionButtonProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentActive, setCurrentActive] = useState(isActive);

  // Sincroniza estado externo com interno
  React.useEffect(() => {
    setCurrentActive(isActive);
  }, [isActive]);

  /**
   * Manipula o clique no botão
   */
  const handleClick = () => {
    if (disabled || isAnimating) return;

    setIsAnimating(true);
    const newActive = !currentActive;
    setCurrentActive(newActive);
    onToggle?.(newActive);

    // Reseta animação após completar
    setTimeout(() => setIsAnimating(false), (animation.duration || 0.3) * 1000);
  };

  /**
   * Configuração da animação atual
   */
  const animationConfig = animation.type 
    ? animationPresets[animation.type]
    : animationPresets.scale;

  /**
   * Classes dinâmicas baseadas no estado
   */
  const dynamicClasses = cn(
    currentActive && activeColorClasses[activeColor],
    currentActive && variant === 'ghost' && 'text-opacity-80',
    'transition-all duration-200'
  );

  /**
   * Label dinâmico baseado no estado
   */
  const dynamicLabel = currentActive ? activeLabel : inactiveLabel;
  
  /**
   * Ícone dinâmico baseado no estado
   */
  const dynamicIcon = currentActive && activeIcon ? activeIcon : icon;

  /**
   * Aria label dinâmico para acessibilidade
   */
  const dynamicAriaLabel = ariaLabel || (
    dynamicLabel 
      ? `${dynamicLabel}${count ? ` (${count})` : ''}`
      : `${currentActive ? 'Desativar' : 'Ativar'} ação${count ? ` (${count})` : ''}`
  );

  return (
    <Button
      variant={currentActive && activeColor === 'primary' ? 'default' : variant}
      size={size}
      onClick={handleClick}
      disabled={disabled}
      className={cn('gap-2', dynamicClasses, className)}
      aria-label={dynamicAriaLabel}
      aria-pressed={currentActive}
    >
      {/* Ícone animado */}
      <motion.div
        animate={isAnimating ? animationConfig : {}}
        transition={{ 
          duration: animation.duration || 0.3,
          ease: 'easeInOut'
        }}
        className="flex-shrink-0"
      >
        {dynamicIcon}
      </motion.div>

      {/* Label */}
      {showLabel && dynamicLabel && (
        <span className="font-medium whitespace-nowrap">
          {dynamicLabel}
        </span>
      )}

      {/* Contador */}
      {showCount && count !== undefined && count > 0 && (
        <span
          className={cn(
            'text-xs px-1.5 py-0.5 rounded-full min-w-[20px] text-center',
            currentActive 
              ? 'bg-current/20 text-current' 
              : 'bg-muted text-muted-foreground'
          )}
        >
          {count.toLocaleString()}
        </span>
      )}
    </Button>
  );
}

/**
 * Variantes pré-configuradas para casos de uso comuns
 */
export const ActionButtonVariants = {
  /**
   * Botão de curtir (coração)
   */
  Like: (props: Omit<ActionButtonProps, 'activeColor'>) => (
    <ActionButton {...props} activeColor="error" />
  ),

  /**
   * Botão de favorito (estrela)
   */
  Favorite: (props: Omit<ActionButtonProps, 'activeColor'>) => (
    <ActionButton {...props} activeColor="warning" />
  ),

  /**
   * Botão de follow/seguir
   */
  Follow: (props: Omit<ActionButtonProps, 'activeColor'>) => (
    <ActionButton {...props} activeColor="success" />
  ),

  /**
   * Botão de save/salvar
   */
  Save: (props: Omit<ActionButtonProps, 'activeColor'>) => (
    <ActionButton {...props} activeColor="info" />
  ),
} as const;

export type { ActionButtonProps };
