import * as react_jsx_runtime from 'react/jsx-runtime';

/**
 * Content Card Component
 *
 * Componente de card genérico para exibição de conteúdo com ações interativas.
 * Perfeito para posts de blog, produtos, artigos, notícias e qualquer conteúdo que precise
 * de destaque com metadados e ações sociais.
 *
 * @module components/social/content-card
 * @fileoverview Card genérico com ações e metadados
 * @author Rainer Teixeira
 * @version 2.0.0
 * @since 1.0.0
 *
 * @example
 * ```tsx
 * // Card de blog
 * <ContentCard
 *   title="Como usar React Hooks"
 *   description="Aprenda os fundamentos dos Hooks React..."
 *   image="/blog/react-hooks.jpg"
 *   category="Tutorial"
 *   date="2024-01-15"
 *   readTime={5}
 *   link="/blog/react-hooks"
 *   actions={{
 *     like: { count: 42, active: true },
 *     share: { url: "/blog/react-hooks", title: "Como usar React Hooks" },
 *     bookmark: { active: false }
 *   }}
 * />
 *
 * // Card de produto
 * <ContentCard
 *   title="Laptop Pro Max"
 *   description="Notebook potente com 16GB RAM e 512GB SSD"
 *   image="/products/laptop-pro.jpg"
 *   price="R$ 4.999,90"
 *   badge="Novo"
 *   link="/products/laptop-pro"
 *   actions={{
 *     favorite: { count: 128, active: false },
 *     share: { url: "/products/laptop-pro", title: "Laptop Pro Max" }
 *   }}
 *   variant="product"
 * />
 *
 * // Card de notícia
 * <ContentCard
 *   title="Descoberta Científica Revolucionária"
 *   description="Pesquisadores encontram solução para..."
 *   image="/news/discovery.jpg"
 *   category="Ciência"
 *   date="2024-01-15T10:30:00"
 *   source="BBC News"
 *   link="/news/discovery"
 *   actions={{
 *     share: { url: "/news/discovery", title: "Descoberta Científica" }
 *   }}
 *   variant="news"
 * />
 * ```
 *
 * Características:
 * - Genérico: Configurável para múltiplos tipos de conteúdo
 * - Responsivo: Adapta-se a diferentes tamanhos de tela
 * - Ações: Integração com componentes de ação social
 * - Metadados: Suporte a data, categoria, preço, etc.
 * - Tema: Múltiplas variantes visuais
 * - Acessível: Navegação por teclado e screen readers
 * - Animado: Transições suaves ao hover
 *
 * Casos de uso:
 * - Blogs: Posts, artigos, tutoriais
 * - E-commerce: Produtos, ofertas, categorias
 * - Notícias: Reportagens, artigos, updates
 * - Portfólios: Projetos, cases, trabalhos
 * - Educação: Cursos, aulas, materiais
 * - Social Media: Posts, stories, highlights
 */
/**
 * Configuração de ação social
 */
interface SocialAction {
    /** Tipo da ação */
    type: 'like' | 'favorite' | 'bookmark' | 'share' | 'comment';
    /** Contador */
    count?: number;
    /** Estado ativo */
    active?: boolean;
    /** Callback */
    onAction?: (type: string, action?: SocialAction) => void;
    /** Dados específicos da ação */
    data?: Record<string, unknown>;
}
/**
 * Configuração de ações do card
 */
interface CardActions {
    like?: SocialAction;
    favorite?: SocialAction;
    bookmark?: SocialAction;
    share?: SocialAction;
    comment?: SocialAction;
}
/**
 * Metadados do conteúdo
 */
interface ContentMetadata {
    /** Categoria */
    category?: string;
    /** Data de publicação */
    date?: string | Date;
    /** Tempo de leitura */
    readTime?: number;
    /** Autor */
    author?: string;
    /** Fonte */
    source?: string;
    /** Preço */
    price?: string;
    /** Badge/Selo */
    badge?: string;
    /** Tags */
    tags?: string[];
}
/**
 * Props do componente ContentCard
 */
interface ContentCardProps {
    /** Título principal */
    title: string;
    /** Descrição/resumo */
    description?: string;
    /** URL da imagem */
    image?: string;
    /** Link para o conteúdo completo */
    link?: string;
    /** Metadados do conteúdo */
    metadata?: ContentMetadata;
    /** Ações sociais disponíveis */
    actions?: CardActions;
    /** Variante visual */
    variant?: 'default' | 'product' | 'news' | 'minimal' | 'featured';
    /** Orientação do card */
    orientation?: 'vertical' | 'horizontal';
    /** Exibir imagem */
    showImage?: boolean;
    /** Exibir metadados */
    showMetadata?: boolean;
    /** Exibir ações */
    showActions?: boolean;
    /** Alt text da imagem */
    imageAlt?: string;
    /** Prioridade da imagem */
    imagePriority?: boolean;
    /** Classes CSS adicionais */
    className?: string;
    /** Callback ao clicar no card */
    onClick?: () => void;
    /** Abrir em nova aba */
    external?: boolean;
}
/**
 * Componente ContentCard
 *
 * Card genérico para exibição de conteúdo com metadados e ações sociais.
 * Ideal para blogs, e-commerce, notícias e qualquer tipo de conteúdo.
 */
declare function ContentCard({ title, description, image, link, metadata, actions, variant, orientation, showImage, showMetadata, showActions, imageAlt, imagePriority, className, onClick, external, }: ContentCardProps): react_jsx_runtime.JSX.Element;
/**
 * Variantes pré-configuradas para casos de uso específicos
 */
declare const ContentCardVariants: {
    /**
     * Card para blog posts
     */
    readonly BlogPost: (props: Omit<ContentCardProps, "variant">) => react_jsx_runtime.JSX.Element;
    /**
     * Card para produtos
     */
    readonly Product: (props: Omit<ContentCardProps, "variant">) => react_jsx_runtime.JSX.Element;
    /**
     * Card para notícias
     */
    readonly News: (props: Omit<ContentCardProps, "variant">) => react_jsx_runtime.JSX.Element;
    /**
     * Card em destaque
     */
    readonly Featured: (props: Omit<ContentCardProps, "variant">) => react_jsx_runtime.JSX.Element;
    /**
     * Card minimalista
     */
    readonly Minimal: (props: Omit<ContentCardProps, "variant">) => react_jsx_runtime.JSX.Element;
};

export { type CardActions, ContentCard, type ContentCardProps, ContentCardVariants, type ContentMetadata, type SocialAction };
