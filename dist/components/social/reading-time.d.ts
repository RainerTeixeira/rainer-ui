import * as react_jsx_runtime from 'react/jsx-runtime';

/**
 * Reading Time Component
 *
 * Componente que exibe o tempo estimado de leitura de qualquer conteúdo.
 * Simples e configurável, ideal para blogs, artigos, documentação, posts, etc.
 *
 * @module components/social/reading-time
 * @fileoverview Componente de tempo de leitura estimado
 * @author Rainer Teixeira
 * @version 2.0.0
 * @since 1.0.0
 *
 * @example
 * ```tsx
 * // Blog post
 * <ReadingTime readTime={5} />
 *
 * // Artigo longo
 * <ReadingTime
 *   readTime={15}
 *   text="min de leitura"
 *   showIcon={true}
 * />
 *
 * // Documentação técnica
 * <ReadingTime
 *   readTime={8}
 *   text="min para ler"
 *   icon={<Clock className="h-3 w-3" />}
 *   className="text-xs text-gray-500"
 * />
 *
 * // Vídeo/podcast
 * <ReadingTime
 *   readTime={25}
 *   text="min de duração"
 *   icon={<PlayCircle className="h-4 w-4" />}
 * />
 * ```
 *
 * Características:
 * - Genérico: Funciona com qualquer tipo de conteúdo (textos, vídeos, áudios)
 * - Simples: Exibição direta do tempo estimado
 * - Configurável: Ícone, texto e classes customizáveis
 * - Flexível: Suporte a diferentes unidades de tempo
 * - Acessível: Role timer e ARIA labels
 *
 * Casos de uso:
 * - Blogs: Tempo de leitura de posts/artigos
 * - Notícias: Duração da leitura de reportagens
 * - Documentação: Tempo para ler documentação técnica
 * - Educação: Duração de aulas/cursos
 * - Mídia: Duração de vídeos/podcasts
 * - Relatórios: Tempo para analisar relatórios
 */
interface ReadingTimeProps {
    /** Tempo estimado em minutos */
    readTime?: number;
    /** Unidade de tempo customizada */
    unit?: 'min' | 'minutes' | 'hours' | 'seconds';
    /** Texto customizado para exibição */
    text?: string;
    /** Classes CSS adicionais */
    className?: string;
    /** Exibir ícone */
    showIcon?: boolean;
    /** Ícone customizado */
    icon?: React.ReactNode;
    /** Tamanho do texto */
    size?: 'sm' | 'default' | 'lg';
    /** Cor do texto */
    color?: 'muted' | 'primary' | 'secondary' | 'accent';
}
declare function ReadingTime({ readTime, unit, text, className, showIcon, icon, size, color, }: ReadingTimeProps): react_jsx_runtime.JSX.Element;

export { ReadingTime, type ReadingTimeProps };
