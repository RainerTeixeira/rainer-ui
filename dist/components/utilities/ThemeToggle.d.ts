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
export interface ThemeToggleProps {
    className?: string;
}
export declare function ThemeToggle({ className }: ThemeToggleProps): import("react/jsx-runtime").JSX.Element;
