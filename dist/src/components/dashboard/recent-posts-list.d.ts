/**
 * Recent Posts List Component (Simplified)
 *
 * Lista de posts recentes do dashboard com ações rápidas.
 * Versão simplificada para a UI library sem dependências externas.
 *
 * @module @rainersoft/ui/dashboard
 * @author Rainer Teixeira
 * @version 1.0.0
 */
interface PostListItem {
    id: string;
    title: string;
    excerpt: string;
    coverImage?: string;
    publishedAt: string;
    tags: string[];
    slug: string;
}
interface RecentPostsListProps {
    posts?: PostListItem[];
    onEditPost?: (post: PostListItem) => void;
    onDeletePost?: (postId: string) => void;
    onViewPost?: (post: PostListItem) => void;
    maxPosts?: number;
    className?: string;
}
export declare function RecentPostsList({ posts, onEditPost, onDeletePost, onViewPost, maxPosts, className, }: RecentPostsListProps): import("react/jsx-runtime").JSX.Element;
export {};
