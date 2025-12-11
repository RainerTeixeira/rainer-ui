/**
 * Theme Toggle Component
 *
 * Botão para alternar entre tema claro e escuro. Ícones animados de sol/lua
 * com transição suave, prevenção de hydration mismatch e integração com
 * next-themes.
 *
 * @module @rainersoft/ui/theme-toggle
 * @author Rainer Teixeira
 */

'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../../hooks/use-theme';
import { cn } from '../../../lib/utils';

export interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { toggle, isDark } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  /**
   * Handler para clique no botão
   * Usa a função toggle do hook personalizado
   */
  const handleToggle = () => {
    toggle();
  };

  // Placeholder durante SSR para evitar hydration mismatch
  if (!mounted) {
    return (
      <button
        className={cn(
          // Layout base
          'inline-flex items-center justify-center rounded-md',
          'text-sm font-medium transition-colors duration-200',
          'h-9 w-9 relative',
          
          // Estados interativos
          'focus-visible:outline-none focus-visible:ring-2',
          'focus-visible:ring-primary-500 focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          
          // Cores do tema - usando design tokens
          'bg-surface border border-border shadow-sm',
          'hover:bg-surface-hover',
          
          // Dark mode
          'dark:bg-surface-dark dark:border-border-dark',
          'dark:hover:bg-surface-hover-dark',
          
          className
        )}
        aria-label="Alternar tema"
        disabled
      >
        <div className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Alternar tema</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleToggle}
      className={cn(
        // Layout base
        'inline-flex items-center justify-center rounded-md',
        'text-sm font-medium transition-colors duration-200',
        'h-9 w-9 relative',
        
        // Estados interativos
        'focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        
        // Cores do tema - usando design tokens
        'bg-surface border border-border shadow-sm',
        'hover:bg-surface-hover',
        
        // Dark mode
        'dark:bg-surface-dark dark:border-border-dark',
        'dark:hover:bg-surface-hover-dark',
        
        className
      )}
      aria-label={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
    >
      {isDark ? (
        <Moon
          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-200 text-text-secondary"
          aria-hidden="true"
        />
      ) : (
        <Sun
          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-200 text-text-primary"
          aria-hidden="true"
        />
      )}
      <span className="sr-only">
        {isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
      </span>
    </button>
  );
}

