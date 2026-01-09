'use client';

import * as React from 'react';
import { useTheme as useNextTheme } from 'next-themes';

/**
 * Tipos de tema disponíveis na aplicação
 * @typedef {'light' | 'dark' | 'system'} Theme
 */
type Theme = 'light' | 'dark' | 'system';

/**
 * Tema resolvido após processamento do sistema
 * @typedef {'light' | 'dark'} ResolvedTheme
 */
type ResolvedTheme = 'light' | 'dark';

/**
 * Interface de retorno do hook useTheme
 * @interface UseThemeReturn
 */
interface UseThemeReturn {
  /** Tema atual selecionado pelo usuário */
  theme: Theme | undefined;
  /** Tema efetivamente aplicado após resolução do sistema */
  resolvedTheme: ResolvedTheme | undefined;
  /** Função para definir o tema */
  setTheme: (theme: Theme) => void;
  /** Função para alternar entre temas claro e escuro */
  toggle: () => void;
  /** Função para definir tema claro */
  setLight: () => void;
  /** Função para definir tema escuro */
  setDark: () => void;
  /** Função para definir tema do sistema */
  setSystem: () => void;
  /** Indica se o tema escuro está ativo */
  isDark: boolean;
  /** Indica se o tema claro está ativo */
  isLight: boolean;
  /** Indica se o tema do sistema está selecionado */
  isSystem: boolean;
}

/**
 * Hook personalizado para gerenciamento de tema com tipagem aprimorada.
 *
 * Fornece uma interface simplificada e tipada para controle de temas,
 * encapsulando a biblioteca next-themes com funcionalidades adicionais.
 *
 * @returns {UseThemeReturn} Objeto contendo estado e funções de controle do tema
 *
 * @property {Theme | undefined} theme - Tema atualmente selecionado ('light', 'dark' ou 'system')
 * @property {ResolvedTheme | undefined} resolvedTheme - Tema efetivamente aplicado após resolução
 * @property {Function} setTheme - Define o tema desejado
 * @property {Function} toggle - Alterna entre os temas claro e escuro
 * @property {Function} setLight - Define o tema claro
 * @property {Function} setDark - Define o tema escuro
 * @property {Function} setSystem - Define o tema baseado nas preferências do sistema
 * @property {boolean} isDark - Verdadeiro quando o tema escuro está ativo
 * @property {boolean} isLight - Verdadeiro quando o tema claro está ativo
 * @property {boolean} isSystem - Verdadeiro quando o tema do sistema está selecionado
 *
 * @example
 * ```tsx
 * import { useTheme } from '@rainersoft/ui';
 *
 * function SeletorDeTema() {
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
 *
 * @see {@link https://github.com/pacocoursey/next-themes} Documentação do next-themes
 */
export function useTheme(): UseThemeReturn {
  const { theme, resolvedTheme, setTheme } = useNextTheme();

  /**
   * Alterna entre os temas claro e escuro.
   *
   * Quando o tema atual é 'system', alterna para o oposto do tema resolvido.
   * Caso contrário, alterna diretamente entre 'light' e 'dark'.
   *
   * @returns {void}
   */
  const toggle = React.useCallback(() => {
    if (theme === 'system') {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    } else {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }
  }, [theme, resolvedTheme, setTheme]);

  /**
   * Define o tema claro como ativo.
   *
   * @returns {void}
   */
  const setLight = React.useCallback(() => {
    setTheme('light');
  }, [setTheme]);

  /**
   * Define o tema escuro como ativo.
   *
   * @returns {void}
   */
  const setDark = React.useCallback(() => {
    setTheme('dark');
  }, [setTheme]);

  /**
   * Define o tema baseado nas preferências do sistema operacional.
   *
   * @returns {void}
   */
  const setSystem = React.useCallback(() => {
    setTheme('system');
  }, [setTheme]);

  return {
    theme: theme as Theme | undefined,
    resolvedTheme: resolvedTheme as ResolvedTheme | undefined,
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
