import React__default from 'react';

/**
 * Social Bar Component
 *
 * Barra de ações sociais universais para qualquer plataforma.
 * Pronta para usar com design tokens integrados.
 *
 * @module @rainersoft/ui/components/social/social-bar
 * @category Social
 */

declare const COLORS: {
    readonly primary: "var(--color-blue-500)";
    readonly success: "var(--color-green-500)";
    readonly warning: "#f59e0b";
    readonly error: "var(--color-red-500)";
    readonly info: "var(--color-cyan-500)";
    readonly gray: "var(--color-gray-500)";
};
interface SocialAction {
    id: string;
    type: 'like' | 'share' | 'bookmark' | 'follow' | 'comment' | 'custom';
    label: string;
    icon: React__default.ReactNode;
    activeIcon?: React__default.ReactNode;
    color?: keyof typeof COLORS;
    count?: number;
    active?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}
interface SocialBarProps {
    actions: SocialAction[];
    layout?: 'horizontal' | 'vertical' | 'grid' | 'stack';
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'minimal' | 'elevated' | 'neon';
    spacing?: 'none' | 'sm' | 'md' | 'lg';
    showCount?: boolean;
    animated?: boolean;
    className?: string;
}
declare const SocialBar: React__default.FC<SocialBarProps>;
declare const LikeButton: React__default.FC<{
    count?: number;
    active?: boolean;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'minimal' | 'elevated' | 'neon';
    onClick?: () => void;
}>;
declare const ShareButton: React__default.FC<{
    platforms?: string[];
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'minimal' | 'elevated' | 'neon';
    onClick?: () => void;
}>;
declare const BookmarkButton: React__default.FC<{
    count?: number;
    active?: boolean;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'minimal' | 'elevated' | 'neon';
    onClick?: () => void;
}>;

export { BookmarkButton, LikeButton, ShareButton, type SocialAction, SocialBar, type SocialBarProps, SocialBar as default };
