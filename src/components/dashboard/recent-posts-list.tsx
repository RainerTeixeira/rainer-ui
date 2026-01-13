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

'use client';

import { Badge } from '../feedback';
import { Button } from '../ui';
import { Card, CardContent, CardHeader, CardTitle } from '../layout';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';
import { Edit } from 'lucide-react';
import { Eye } from 'lucide-react';

// Tipos para o componente
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

export function RecentPostsList({
  posts = [],
  onEditPost,
  onDeletePost,
  onViewPost,
  maxPosts = 5,
  className,
}: RecentPostsListProps) {
  const [isLoading, setIsLoading] = useState(false);
  const displayedPosts = posts.slice(0, maxPosts);

  if (isLoading) {
    return (
      <Card className={cn('w-full', className)}>
        <CardHeader>
          <CardTitle>Posts Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-muted rounded animate-pulse" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-muted rounded animate-pulse" />
                  <div className="h-3 bg-muted rounded animate-pulse w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (displayedPosts.length === 0) {
    return (
      <Card className={cn('w-full', className)}>
        <CardHeader>
          <CardTitle>Posts Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-muted-foreground">Nenhum post encontrado.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <CardTitle>Posts Recentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {displayedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              {post.coverImage && (
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="flex-1 min-w-0">
                <h3 className="font-medium line-clamp-1">{post.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
                  </div>
                  
                  {post.tags.length > 0 && (
                    <div className="flex items-center gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-2 flex-shrink-0">
                {onViewPost && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onViewPost(post)}
                    className="h-8 w-8 p-0"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                )}
                
                {onEditPost && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onEditPost(post)}
                    className="h-8 w-8 p-0"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                )}
                
                {onDeletePost && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onDeletePost(post.id)}
                    className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

