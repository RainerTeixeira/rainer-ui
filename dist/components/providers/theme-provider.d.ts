import type { ThemeProviderProps } from 'next-themes';
/**
 * ThemeProvider - Provider de Temas Universal
 *
 * Componente wrapper que configura o next-themes com valores padrão
 * otimizados para a biblioteca @rainersoft/ui.
 *
 * Configurações padrão:
 * - attribute="class": Aplica tema como classe no HTML
 * - defaultTheme="dark": Tema padrão escuro (cyberpunk)
 * - enableSystem=true: Detecta preferência do sistema
 * - storageKey="rainer-ui-theme": Chave customizada no localStorage
 *
 * @example
 * ```tsx
 * // Em app/layout.tsx
 * import { ThemeProvider } from '@rainersoft/ui';
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         <ThemeProvider>
 *           {children}
 *         </ThemeProvider>
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 */
export declare function ThemeProvider({ children, ...props }: ThemeProviderProps): import("react/jsx-runtime").JSX.Element;
