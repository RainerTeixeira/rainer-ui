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
import { useTheme } from 'next-themes';
import { cn } from '../../../lib/utils';

export interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
          'disabled:pointer-events-none disabled:opacity-50 border border-input bg-background',
          'shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 relative',
          className
        )}
        aria-label="Alternar tema"
        disabled
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" aria-hidden="true" />
        <span className="sr-only">Alternar tema</span>
      </button>
    );
  }

  const handleToggle = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={handleToggle}
      className={cn(
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
        'disabled:pointer-events-none disabled:opacity-50 border border-input bg-background',
        'shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 relative',
        className
      )}
      aria-label="Alternar tema"
    >
      <Sun
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        aria-hidden="true"
      />
      <Moon
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        aria-hidden="true"
      />
      <span className="sr-only">Alternar tema</span>
    </button>
  );
}

