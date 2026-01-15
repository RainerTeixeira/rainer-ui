import * as react_jsx_runtime from 'react/jsx-runtime';

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
interface ThemeToggleProps {
    className?: string;
}
declare function ThemeToggle({ className }: ThemeToggleProps): react_jsx_runtime.JSX.Element;

export { ThemeToggle, type ThemeToggleProps };
