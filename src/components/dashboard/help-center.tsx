'use client';

/**
 * Componente HelpCenter - Central de Ajuda
 * 
 * Central de recursos com links para documentação, tutoriais e suporte.
 * Exibe cards navegáveis com ícones descritivos e links úteis.
 * 
 * @component
 * @example
 * // Uso básico no dashboard
 * <HelpCenter />
 * 
 * // Em uma página de configurações
 * <section className="p-4">
 *   <h2 className="text-xl font-bold mb-4">Recursos de Ajuda</h2>
 *   <HelpCenter />
 * </section>
 */
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../layout/card';
import Link from 'next/link';
import BookOpen from 'lucide-react/dist/esm/icons/book-open';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link';
import HelpCircle from 'lucide-react/dist/esm/icons/help-circle';
import MessageCircle from 'lucide-react/dist/esm/icons/message-circle';
import Video from 'lucide-react/dist/esm/icons/video';

/**
 * Interface para recursos da central de ajuda
 */
interface HelpResource {
  /** Ícone que representa o recurso */
  icon: React.ComponentType<{ className?: string }>;
  /** Título do recurso */
  title: string;
  /** Descrição curta do recurso */
  description: string;
  /** URL para acessar o recurso */
  link: string;
}

/**
 * Componente HelpCenter
 * 
 * Renderiza cards de recursos de ajuda com links para documentação,
 * tutoriais e suporte. Ideal para dashboards e páginas de configurações.
 */
export function HelpCenter() {
  /**
   * Lista de recursos disponíveis na central de ajuda
   */
  const resources: HelpResource[] = [
    {
      icon: BookOpen,
      title: 'Documentação',
      description: 'Guias completos de uso',
      link: '/docs',
    },
    {
      icon: Video,
      title: 'Tutoriais',
      description: 'Vídeos passo a passo',
      link: '/tutorials',
    },
    {
      icon: MessageCircle,
      title: 'Suporte',
      description: 'Fale com nossa equipe',
      link: '/contato',
    },
  ];

  return (
    <Card className="dark:bg-black/30 dark:border-purple-400/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 dark:text-purple-200">
          <HelpCircle className="h-5 w-5" />
          Central de Ajuda
        </CardTitle>
        <CardDescription>
          Precisa de ajuda? Acesse nossos recursos
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <Button
              key={index}
              asChild
              variant="outline"
              className="w-full justify-between dark:border-purple-400/20 dark:hover:bg-purple-400/10"
            >
              <a href={resource.link} className="flex items-center gap-3 flex-1">
                <Icon className="h-4 w-4" />
                <div className="text-left">
                  <div className="font-medium text-sm">{resource.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {resource.description}
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 ml-auto" />
              </a>
            </Button>
          );
        })}
      </CardContent>
    </Card>
  );
}
