/**
 * Social Bar Component
 *
 * Barra de ações sociais universais para qualquer plataforma.
 * Pronta para usar com design tokens integrados.
 *
 * @module @rainersoft/ui/components/social/social-bar
 * @category Social
 */
import React from 'react';
declare const COLORS: {
    readonly primary: "var(--color-blue-500)";
    readonly success: "var(--color-green-500)";
    readonly warning: "#f59e0b";
    readonly error: "var(--color-red-500)";
    readonly info: "var(--color-cyan-500)";
    readonly gray: "var(--color-gray-500)";
};
export interface SocialAction {
    id: string;
    type: 'like' | 'share' | 'bookmark' | 'follow' | 'comment' | 'custom';
    label: string;
    icon: React.ReactNode;
    activeIcon?: React.ReactNode;
    color?: keyof typeof COLORS;
    count?: number;
    active?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}
export interface SocialBarProps {
    actions: SocialAction[];
    layout?: 'horizontal' | 'vertical' | 'grid' | 'stack';
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'minimal' | 'elevated' | 'neon';
    spacing?: 'none' | 'sm' | 'md' | 'lg';
    showCount?: boolean;
    animated?: boolean;
    className?: string;
}
export declare const SocialBar: React.FC<SocialBarProps>;
export declare const LikeButton: React.FC<{
    count?: number;
    active?: boolean;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'minimal' | 'elevated' | 'neon';
    onClick?: () => void;
}>;
export declare const ShareButton: React.FC<{
    platforms?: string[];
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'minimal' | 'elevated' | 'neon';
    onClick?: () => void;
}>;
export declare const BookmarkButton: React.FC<{
    count?: number;
    active?: boolean;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'minimal' | 'elevated' | 'neon';
    onClick?: () => void;
}>;
export default SocialBar;
