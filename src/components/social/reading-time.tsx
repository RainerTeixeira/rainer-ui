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

import { cn } from '../../lib/utils';
import { Clock } from 'lucide-react';

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

/**
 * Formata o tempo baseado na unidade
 */
const formatTime = (time: number, unit: string) => {
  switch (unit) {
    case 'hours':
      return (time / 60).toFixed(1);
    case 'seconds':
      return (time * 60).toString();
    default:
      return time.toString();
  }
};

/**
 * Obtém o texto da unidade
 */
const getUnitText = (unit: string, time: number) => {
  const timeValue = unit === 'hours' ? time / 60 : time;
  
  if (unit === 'hours') {
    return timeValue <= 1 ? 'hora' : 'horas';
  }
  if (unit === 'minutes') {
    return timeValue <= 1 ? 'minuto' : 'minutos';
  }
  if (unit === 'seconds') {
    return timeValue <= 1 ? 'segundo' : 'segundos';
  }
  return timeValue <= 1 ? 'min' : 'min';
};

/**
 * Classes de cor baseadas na propriedade color
 */
const getColorClasses = (color: string) => {
  const colorMap = {
    muted: 'text-muted-foreground',
    primary: 'text-primary',
    secondary: 'text-secondary-foreground',
    accent: 'text-accent-foreground',
  };
  return colorMap[color as keyof typeof colorMap] || 'text-muted-foreground';
};

/**
 * Classes de tamanho baseadas na propriedade size
 */
const getSizeClasses = (size: string) => {
  const sizeMap = {
    sm: 'text-xs',
    default: 'text-sm',
    lg: 'text-base',
  };
  return sizeMap[size as keyof typeof sizeMap] || 'text-sm';
};

export function ReadingTime({
  readTime,
  unit = 'min',
  text,
  className,
  showIcon = true,
  icon,
  size = 'default',
  color = 'muted',
}: ReadingTimeProps) {
  if (!readTime) {
    return null;
  }

  const formattedTime = formatTime(readTime, unit);
  const unitText = getUnitText(unit, readTime);
  const defaultText = text || `${formattedTime} ${unitText}`;
  const colorClasses = getColorClasses(color);
  const sizeClasses = getSizeClasses(size);

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 transition-colors',
        colorClasses,
        sizeClasses,
        className
      )}
      role="timer"
      aria-label={`Tempo estimado: ${formattedTime} ${unitText}`}
    >
      {showIcon && (
        <span className="flex-shrink-0" aria-hidden="true">
          {icon || <Clock className="h-4 w-4" />}
        </span>
      )}
      <span className="whitespace-nowrap">{defaultText}</span>
    </div>
  );
}

export type { ReadingTimeProps };
