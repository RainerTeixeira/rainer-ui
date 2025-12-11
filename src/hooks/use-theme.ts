'use client';

import * as React from 'react';
import { useTheme as useNextTheme } from 'next-themes';

/**
 * Hook para gerenciar tema com tipagem melhorada
 * 
 * @returns {Object} Objeto com funções e estado do tema
 * @property {('light' | 'dark' | 'system')} theme - Tema atual
 * @property {('light' | 'dark')} resolvedTheme - Tema resolvido (sem system)
 * @property {(theme: 'light' | 'dark' | 'system') => void} setTheme - Define tema
 * @property {() => void} toggle - Alterna entre light e dark
 * @property {boolean} isDark - Se tema escuro está ativo
 * @property {boolean} isLight - Se tema claro está ativo
 * @property {boolean} isSystem - Se tema sistema está ativo
 * 
 * @example
 * ```tsx
 * import { useTheme } from '@rainersoft/ui';
 * 
 * function MyComponent() {
 *   const { theme, resolvedTheme, toggle, isDark } = useTheme();
 *   
 *   return (
 *     <button onClick={toggle}>
 *       Tema atual: {theme}
 *       Modo escuro: {isDark ? 'Sim' : 'Não'}
 *     </button>
 *   );
 * }
 * ```
 */
export function useTheme() {
  const { theme, resolvedTheme, setTheme } = useNextTheme();

  /**
   * Alterna entre light e dark
   * Se estiver em system, alterna para o oposto do resolvedTheme
   */
  const toggle = React.useCallback(() => {
    if (theme === 'system') {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    } else {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }
  }, [theme, resolvedTheme, setTheme]);

  /**
   * Define tema light
   */
  const setLight = React.useCallback(() => {
    setTheme('light');
  }, [setTheme]);

  /**
   * Define tema dark
   */
  const setDark = React.useCallback(() => {
    setTheme('dark');
  }, [setTheme]);

  /**
   * Define tema system
   */
  const setSystem = React.useCallback(() => {
    setTheme('system');
  }, [setTheme]);

  return {
    theme,
    resolvedTheme,
    setTheme,
    toggle,
    setLight,
    setDark,
    setSystem,
    isDark: resolvedTheme === 'dark',
    isLight: resolvedTheme === 'light',
    isSystem: theme === 'system',
  };
}
