/**
 * Social Bar Component
 * 
 * Barra de ações sociais universais para qualquer plataforma.
 * Pronta para usar com design tokens integrados.
 * 
 * @module @rainersoft/ui/components/social/social-bar
 * @category Social
 */

'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/tokens';

// Design Tokens
const COLORS = {
  primary: 'var(--color-blue-500)',
  success: 'var(--color-green-500)', 
  warning: '#f59e0b',
  error: 'var(--color-red-500)',
  info: 'var(--color-cyan-500)',
  gray: 'var(--color-gray-500)'
} as const;

// Types
export interface SocialAction {
  id: string;
  type: 'like' | 'share' | 'bookmark' | 'follow' | 'comment' | 'custom';
  label: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
  color?: keyof typeof COLORS;
  count?: number;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export interface SocialBarProps {
  actions: SocialAction[];
  layout?: 'horizontal' | 'vertical' | 'grid' | 'stack';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal' | 'elevated' | 'neon';
  spacing?: 'none' | 'sm' | 'md' | 'lg';
  showCount?: boolean;
  animated?: boolean;
  className?: string;
}

// Botão individual
const SocialButton: React.FC<{
  action: SocialAction;
  size: 'sm' | 'md' | 'lg';
  variant: 'default' | 'minimal' | 'elevated' | 'neon';
  showCount: boolean;
  animated: boolean;
  onClick: () => void;
}> = ({ action, size, variant, showCount, animated, onClick }) => {
  const [isActive, setIsActive] = useState(action.active || false);
  const [count, setCount] = useState(action.count || 0);

  // Persistência
  useEffect(() => {
    const key = `social-${action.id}`;
    const saved = localStorage.getItem(key);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setIsActive(data.active);
        setCount(data.count);
      } catch (error) {
        console.warn('Error loading state:', error);
      }
    }
  }, [action.id]);

  // Salvar estado
  const saveState = useCallback((newActive: boolean, newCount: number) => {
    const key = `social-${action.id}`;
    localStorage.setItem(key, JSON.stringify({ 
      active: newActive, 
      count: newCount, 
      timestamp: Date.now() 
    }));
  }, [action.id]);

  // Clique
  const handleClick = useCallback(() => {
    if (action.disabled) return;

    const newActive = !isActive;
    const newCount = action.type === 'like' || action.type === 'bookmark' 
      ? (newActive ? count + 1 : Math.max(0, count - 1))
      : count;

    setIsActive(newActive);
    setCount(newCount);
    saveState(newActive, newCount);
    onClick();
  }, [isActive, count, action.type, action.disabled, onClick, saveState]);

  // Classes
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs gap-1',
    md: 'px-3 py-1.5 text-sm gap-2', 
    lg: 'px-4 py-2 text-base gap-2'
  };

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  const color = action.color || 'primary';
  const colorValue = COLORS[color];

  const variantClasses = {
    default: cn(
      'border transition-all',
      isActive 
        ? `bg-[${colorValue}] text-white border-[${colorValue}]` 
        : 'bg-background hover:bg-muted text-foreground border-border'
    ),
    minimal: cn(
      'transition-colors',
      isActive 
        ? `text-[${colorValue}]` 
        : 'text-muted-foreground hover:text-foreground'
    ),
    elevated: cn(
      'border shadow-md hover:shadow-lg transition-all',
      isActive 
        ? `bg-[${colorValue}] text-white border-[${colorValue}]` 
        : 'bg-background hover:bg-muted text-foreground border-border'
    ),
    neon: cn(
      'relative border transition-all',
      isActive 
        ? `border-[${colorValue}] text-[${colorValue}] shadow-[0_0_20px_var(--color-cyan-500)]` 
        : 'border-border/40 text-muted-foreground hover:border-[${colorValue}] hover:text-[${colorValue}]'
    )
  };

  return (
    <motion.button
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        sizeClasses[size],
        variantClasses[variant]
      )}
      onClick={handleClick}
      disabled={action.disabled}
      animate={animated && isActive ? { scale: [1, 1.2, 1] } : {}}
      transition={{ duration: 0.2 }}
      whileHover={animated ? { scale: 1.05 } : {}}
      whileTap={animated ? { scale: 0.95 } : {}}
    >
      <span className={cn('flex-shrink-0', iconSizes[size])}>
        {isActive && action.activeIcon ? action.activeIcon : action.icon}
      </span>
      
      {showCount && count > 0 && (
        <motion.span 
          className="min-w-[1.2rem] text-center font-mono"
          key={count}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          {count.toLocaleString()}
        </motion.span>
      )}
      
      {action.label && variant !== 'minimal' && (
        <span className="truncate">{action.label}</span>
      )}
    </motion.button>
  );
};

// Componente principal
export const SocialBar: React.FC<SocialBarProps> = ({
  actions,
  layout = 'horizontal',
  size = 'md',
  variant = 'default',
  spacing = 'md',
  showCount = true,
  animated = true,
  className
}) => {
  const layoutClasses = {
    horizontal: cn('flex flex-row items-center', `gap-${spacing === 'none' ? '0' : spacing === 'sm' ? '1' : spacing === 'md' ? '2' : '4'}`),
    vertical: cn('flex flex-col items-start', `gap-${spacing === 'none' ? '0' : spacing === 'sm' ? '1' : spacing === 'md' ? '2' : '4'}`),
    grid: cn('grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4', `gap-${spacing === 'none' ? '0' : spacing === 'sm' ? '1' : spacing === 'md' ? '2' : '4'}`),
    stack: cn('flex flex-wrap', `gap-${spacing === 'none' ? '0' : spacing === 'sm' ? '1' : spacing === 'md' ? '2' : '4'}`)
  };

  return (
    <div className={cn('inline-flex', layoutClasses[layout], className)}>
      {actions.map((action) => (
        <SocialButton
          key={action.id}
          action={action}
          size={size}
          variant={variant}
          showCount={showCount}
          animated={animated}
          onClick={action.onClick || (() => {})}
        />
      ))}
    </div>
  );
};

// Componentes especializados
export const LikeButton: React.FC<{
  count?: number;
  active?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal' | 'elevated' | 'neon';
  onClick?: () => void;
}> = (props) => {
  const HeartIcon = () => (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );

  const HeartFilledIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );

  return (
    <SocialBar
      actions={[{
        id: 'like',
        type: 'like',
        label: 'Curtir',
        icon: <HeartIcon />,
        activeIcon: <HeartFilledIcon />,
        color: 'error',
        count: props.count,
        active: props.active,
        onClick: props.onClick
      }]}
      size={props.size}
      variant={props.variant}
    />
  );
};

export const ShareButton: React.FC<{
  platforms?: string[];
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal' | 'elevated' | 'neon';
  onClick?: () => void;
}> = (props) => {
  const ShareIcon = () => (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a3 3 0 10-4.732 2.684m4.732-2.684a3 3 0 00-4.732-2.684M3 12a3 3 0 106 0 3 3 0 00-6 0z" />
    </svg>
  );

  return (
    <SocialBar
      actions={[{
        id: 'share',
        type: 'share',
        label: 'Compartilhar',
        icon: <ShareIcon />,
        color: 'info',
        onClick: props.onClick
      }]}
      size={props.size}
      variant={props.variant}
    />
  );
};

export const BookmarkButton: React.FC<{
  count?: number;
  active?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal' | 'elevated' | 'neon';
  onClick?: () => void;
}> = (props) => {
  const BookmarkIcon = () => (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
    </svg>
  );

  const BookmarkFilledIcon = () => (
    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
      <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
    </svg>
  );

  return (
    <SocialBar
      actions={[{
        id: 'bookmark',
        type: 'bookmark',
        label: 'Salvar',
        icon: <BookmarkIcon />,
        activeIcon: <BookmarkFilledIcon />,
        color: 'warning',
        count: props.count,
        active: props.active,
        onClick: props.onClick
      }]}
      size={props.size}
      variant={props.variant}
    />
  );
};

export default SocialBar;
