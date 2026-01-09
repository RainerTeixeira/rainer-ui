/**
 * Social Components
 * 
 * Componentes para interação social em aplicações web.
 * Inclui botões de curtir, compartilhar, salvar, tempo de leitura e cards genéricos.
 * 
 * @module components/social
 * @author Rainer Teixeira
 * @version 2.0.0
 */

// Componentes Específicos (Legacy)
export { LikeButton } from './like-button';
export { ShareButton } from './share-button';
export { BookmarkButton } from './bookmark-button';
export { ReadingTime } from './reading-time';

// Componentes Genéricos (Novos)
export { ActionButton, ActionButtonVariants } from './action-button';
export { ShareMenu, ShareMenuVariants } from './share-menu';
export { ContentCard, ContentCardVariants } from './content-card';

// Types
export type { LikeButtonProps } from './like-button';
export type { ShareButtonProps } from './share-button';
export type { BookmarkButtonProps } from './bookmark-button';
export type { ReadingTimeProps } from './reading-time';
export type { ActionButtonProps } from './action-button';
export type { ShareMenuProps } from './share-menu';
export type { ContentCardProps, SocialAction, CardActions, ContentMetadata } from './content-card';
