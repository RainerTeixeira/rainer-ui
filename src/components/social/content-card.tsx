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

import React from 'react';

'use client';

import { Card, CardContent, CardFooter, CardHeader } from '../layout/card';
import { Badge } from '../feedback/badge';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import Link from 'lucide-react/dist/esm/icons/link';
// import Image from 'next/image'; // Removido para resolver conflito de tipos
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

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
export interface ContentCardProps {
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
 * Formata data relativa em português
 */
const formatRelativeDate = (date: string | Date) => {
  try {
    return formatDistanceToNow(new Date(date), { 
      addSuffix: true, 
      locale: ptBR 
    });
  } catch {
    return '';
  }
};

/**
 * Componente ContentCard
 * 
 * Card genérico para exibição de conteúdo com metadados e ações sociais.
 * Ideal para blogs, e-commerce, notícias e qualquer tipo de conteúdo.
 */
export function ContentCard({
  title,
  description,
  image,
  link,
  metadata,
  actions,
  variant = 'default',
  orientation = 'vertical',
  showImage = true,
  showMetadata = true,
  showActions = true,
  imageAlt,
  imagePriority = false,
  className,
  onClick,
  external = false,
}: ContentCardProps) {
  /**
   * Renderiza a imagem do card
   */
  const renderImage = () => {
    if (!showImage || !image) return null;

    return (
      <div className="relative overflow-hidden">
        <div className="aspect-video relative">
          {React.createElement('img', {
            src: image,
            alt: imageAlt || title,
            className: cn(
              "w-full h-full object-cover transition-transform duration-300",
              "group-hover:scale-105"
            ),
            loading: imagePriority ? "eager" : "lazy"
          })}
          
          {/* Badge sobreposto */}
          {metadata?.badge && (
            <div className="absolute top-2 right-2">
              <Badge variant="default" className="bg-red-500 text-white">
                {metadata.badge}
              </Badge>
            </div>
          )}
        </div>
      </div>
    );
  };

  /**
   * Renderiza os metadados
   */
  const renderMetadata = () => {
    if (!showMetadata || !metadata) return null;

    return (
      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        {metadata.category && (
          <Badge variant="secondary" className="text-xs">
            {metadata.category}
          </Badge>
        )}
        
        {metadata.date && (
          <span className="flex items-center gap-1">
            {formatRelativeDate(metadata.date)}
          </span>
        )}
        
        {metadata.readTime && (
          <span className="flex items-center gap-1">
            📖 {metadata.readTime} min
          </span>
        )}
        
        {metadata.author && (
          <span>por {metadata.author}</span>
        )}
        
        {metadata.source && (
          <span className="font-medium">{metadata.source}</span>
        )}
        
        {metadata.price && (
          <span className="font-bold text-primary text-base">
            {metadata.price}
          </span>
        )}
      </div>
    );
  };

  /**
   * Renderiza as ações sociais
   */
  const renderActions = () => {
    if (!showActions || !actions) return null;

    return (
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {actions.like && (
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "gap-1.5",
                actions.like.active && "text-red-500"
              )}
              onClick={() => actions.like?.onAction?.('like', actions.like)}
            >
              <span className={cn(actions.like.active && "fill-current")}>
                ❤️
              </span>
              {actions.like.count && (
                <span className="text-xs">{actions.like.count}</span>
              )}
            </Button>
          )}
          
          {actions.favorite && (
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "gap-1.5",
                actions.favorite.active && "text-yellow-500"
              )}
              onClick={() => actions.favorite?.onAction?.('favorite', actions.favorite)}
            >
              <span className={cn(actions.favorite.active && "fill-current")}>
                ⭐
              </span>
              {actions.favorite.count && (
                <span className="text-xs">{actions.favorite.count}</span>
              )}
            </Button>
          )}
          
          {actions.bookmark && (
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "gap-1.5",
                actions.bookmark.active && "text-blue-500"
              )}
              onClick={() => actions.bookmark?.onAction?.('bookmark', actions.bookmark)}
            >
              <span className={cn(actions.bookmark.active && "fill-current")}>
                🔖
              </span>
            </Button>
          )}
        </div>
        
        {actions.share && (
          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5"
            onClick={() => actions.share?.onAction?.('share', actions.share)}
          >
            📤
          </Button>
        )}
      </div>
    );
  };

  /**
   * Classes dinâmicas baseadas na variante
   */
  const variantClasses = {
    default: "hover:shadow-lg transition-shadow duration-300",
    product: "hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
    news: "border-l-4 border-l-primary hover:shadow-lg transition-shadow duration-300",
    minimal: "border-0 shadow-none hover:bg-accent/50 transition-colors duration-300",
    featured: "ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-300",
  };

  /**
   * Componente wrapper (Link ou div)
   */
  const Wrapper = link ? 'a' : 'div';
  const wrapperProps = link ? {
    href: link,
    target: external ? '_blank' : undefined,
    rel: external ? 'noopener noreferrer' : undefined,
  } : {};

  return (
    <motion.div
      whileHover={{ y: orientation === 'vertical' ? -4 : 0 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group",
        orientation === 'horizontal' && "flex gap-4",
        className
      )}
    >
      <Wrapper
        {...wrapperProps}
        onClick={onClick}
        className={cn("block", link && "hover:underline-none")}
      >
        <Card
          className={cn(
            "h-full overflow-hidden",
            variantClasses[variant],
            orientation === 'horizontal' && "flex-row",
            "transition-all duration-300"
          )}
        >
          {/* Imagem */}
          {orientation === 'vertical' && renderImage()}
          
          <div className={cn(
            "flex flex-col",
            orientation === 'horizontal' && "flex-1"
          )}>
            {/* Header com metadados */}
            <CardHeader className="pb-2">
              {renderMetadata()}
              <h3 className={cn(
                "font-semibold line-clamp-2",
                variant === 'featured' ? "text-xl" : "text-lg",
                "group-hover:text-primary transition-colors duration-200"
              )}>
                {title}
              </h3>
            </CardHeader>

            {/* Conteúdo */}
            {description && (
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {description}
                </p>
              </CardContent>
            )}

            {/* Footer com ações e link */}
            {(link || showActions) && (
              <CardFooter className={cn(
                "pt-4",
                "flex items-center justify-between",
                !showActions && "justify-end"
              )}>
                {renderActions()}
                
                {link && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1 text-primary"
                  >
                    Ler mais
                    <Link className="h-3 w-3" />
                  </Button>
                )}
              </CardFooter>
            )}
          </div>

          {/* Imagem na horizontal */}
          {orientation === 'horizontal' && (
            <div className="w-1/3">
              {renderImage()}
            </div>
          )}
        </Card>
      </Wrapper>
    </motion.div>
  );
}

/**
 * Variantes pré-configuradas para casos de uso específicos
 */
export const ContentCardVariants = {
  /**
   * Card para blog posts
   */
  BlogPost: (props: Omit<ContentCardProps, 'variant'>) => (
    <ContentCard {...props} variant="default" />
  ),

  /**
   * Card para produtos
   */
  Product: (props: Omit<ContentCardProps, 'variant'>) => (
    <ContentCard {...props} variant="product" />
  ),

  /**
   * Card para notícias
   */
  News: (props: Omit<ContentCardProps, 'variant'>) => (
    <ContentCard {...props} variant="news" />
  ),

  /**
   * Card em destaque
   */
  Featured: (props: Omit<ContentCardProps, 'variant'>) => (
    <ContentCard {...props} variant="featured" />
  ),

  /**
   * Card minimalista
   */
  Minimal: (props: Omit<ContentCardProps, 'variant'>) => (
    <ContentCard {...props} variant="minimal" />
  ),
} as const;

export type { SocialAction, CardActions, ContentMetadata };

