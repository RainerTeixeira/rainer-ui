import * as react_jsx_runtime from 'react/jsx-runtime';

/**
 * Quick Actions Component
 *
 * Componente de ações rápidas para o dashboard. Exibe botões de acesso rápido
 * para ações principais (novo post, ver posts, estatísticas, configurações)
 * com animações suaves e hover effects.
 *
 * @module components/domain/dashboard/quick-actions
 * @fileoverview Botões de ações rápidas do dashboard
 * @author Rainer Teixeira
 * @version 2.0.0
 * @since 1.0.0
 *
 * @example
 * ```tsx
 * <QuickActions
 *   onNewPost={() => router.push('/dashboard?mode=new')}
 *   onViewPosts={() => router.push('/dashboard?view=all')}
 *   onViewStats={() => router.push('/dashboard?view=stats')}
 *   onSettings={() => router.push('/dashboard/settings')}
 * />
 * ```
 *
 * Características:
 * - Grid de 2 colunas com botões de ação
 * - Ícones com gradientes coloridos
 * - Animações staggered suaves
 * - Hover effects premium
 * - Callbacks opcionais para cada ação
 * - Layout responsivo
 */
/**
 * Props do componente QuickActions
 *
 * @interface QuickActionsProps
 * @property {() => void} [onNewPost] - Callback para criar novo post
 * @property {() => void} [onViewPosts] - Callback para ver todos os posts
 * @property {() => void} [onViewStats] - Callback para ver estatísticas
 * @property {() => void} [onSettings] - Callback para abrir configurações
 */
interface QuickActionsProps {
    onNewPost?: () => void;
    onViewPosts?: () => void;
    onViewStats?: () => void;
    onSettings?: () => void;
}
/**
 * QuickActions Component
 *
 * Renderiza card com grid de botões de ações rápidas.
 * Cada botão possui ícone, label, descrição e callback opcional com
 * animações suaves e hover effects premium.
 *
 * @component
 * @param {QuickActionsProps} props - Propriedades do componente
 * @returns {JSX.Element} Card com ações rápidas
 *
 * @remarks
 * Este componente utiliza:
 * - Framer Motion para animações staggered
 * - Botões com gradientes coloridos
 * - Design system com Tailwind CSS
 * - Layout responsivo em grid 2 colunas
 */
declare function QuickActions({ onNewPost, onViewPosts, onViewStats, onSettings, }: QuickActionsProps): react_jsx_runtime.JSX.Element;

export { QuickActions };
