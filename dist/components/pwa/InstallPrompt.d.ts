/**
 * Install Prompt Component
 *
 * Prompt de instalação PWA que exibe banner convidando o usuário a instalar o
 * aplicativo como PWA. Persiste preferências do usuário (não mostra novamente
 * se fechado) e não aparece em modo standalone.
 *
 * @module components/pwa/install-prompt
 * @fileoverview Componente de prompt de instalação PWA
 * @author Rainer Teixeira
 * @version 2.0.0
 * @since 1.0.0
 *
 * @example
 * ```tsx
 * // No layout ou página principal
 * <InstallPrompt />
 * ```
 *
 * Características:
 * - Aparece apenas se app é instalável
 * - Pode ser fechado pelo usuário
 * - Design premium consistente
 * - Animação de entrada suave
 * - Persiste escolha (localStorage)
 * - Não mostra em modo standalone
 * - Integração com hook usePWA
 * - Suporte a tema claro/escuro
 * - Acessibilidade completa
 */
/**
 * Componente InstallPrompt
 *
 * Banner fixo no rodapé que convida usuário a instalar o PWA.
 * Aparece apenas se:
 * - App é instalável
 * - Usuário não fechou antes
 * - Não está em modo standalone
 *
 * @returns {JSX.Element | null} Banner de instalação ou null
 *
 * @example
 * // No layout ou página principal
 * <InstallPrompt />
 */
export declare function InstallPrompt(): import("react/jsx-runtime").JSX.Element;
