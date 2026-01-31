import * as react_jsx_runtime from 'react/jsx-runtime';

/**
 * Page Header Component
 *
 * Header padronizado e reutilizável para páginas internas. Título centralizado,
 * linha decorativa com gradiente e descrição opcional. Suporta children para
 * conteúdo adicional (avatar, badges, etc).
 *
 * @module components/layout/page-header
 * @fileoverview Header padronizado para páginas com design premium
 * @author Rainer Teixeira
 * @version 2.0.0
 * @since 1.0.0
 *
 * @example
 * ```tsx
 * // Header simples
 * <PageHeader
 *   title="Blog"
 *   description="Artigos sobre desenvolvimento e tecnologia"
 * />
 *
 * // Header com avatar
 * <PageHeader title="Sobre Mim" description="Minha trajetória profissional">
 *   <Avatar src="/avatar.jpg" />
 * </PageHeader>
 * ```
 *
 * Características:
 * - Layout centralizado e responsivo
 * - Linha decorativa com gradiente
 * - Tipografia cyberpunk no dark mode
 * - Slot children para conteúdo adicional (avatar, ícone, etc)
 * - Padding consistente via SECTION_CLASSES
 * - Acessibilidade completa (semântica HTML5)
 */
/**
 * Props do PageHeader
 */
interface PageHeaderProps {
    /** Título principal da página */
    readonly title: string;
    /** Descrição/subtítulo opcional */
    readonly description?: string;
    /** Conteúdo adicional (avatar, ícone, etc) */
    readonly children?: React.ReactNode;
}
/**
 * Componente PageHeader
 *
 * Renderiza header centralizado e estilizado para páginas internas.
 *
 * Estrutura:
 * 1. Children (se fornecido) - ex: avatar, ícone
 * 2. Título principal (h1)
 * 3. Linha decorativa com gradiente
 * 4. Descrição (se fornecida)
 *
 * @param {PageHeaderProps} props - Propriedades do componente
 * @returns {JSX.Element} Header formatado da página
 *
 * @example
 * // Header simples
 * <PageHeader
 *   title="Blog"
 *   description="Artigos sobre desenvolvimento e tecnologia"
 * />
 *
 * @example
 * // Header com avatar
 * <PageHeader title="Sobre Mim" description="Minha trajetória profissional">
 *   <Avatar src="/avatar.jpg" />
 * </PageHeader>
 */
declare function PageHeader({ title, description, children }: PageHeaderProps): react_jsx_runtime.JSX.Element;

export { PageHeader };
