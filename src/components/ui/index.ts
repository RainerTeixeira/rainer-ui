/**
 * Componentes UI - Componentes de Interface Básicos
 * 
 * Componentes fundamentais e reutilizáveis de interface:
 * - Avatar: Avatares com iniciais e imagens
 * - Button: Botões de ação
 * - Input: Campos de entrada de texto
 * - Textarea: Áreas de texto multilinha
 * - Card: Contêineres de conteúdo estruturado
 * - Badge: Indicadores e tags
 * - Progress: Barras de progresso
 * - Accordion: Conteúdo expansível
 * - Slider: Controles deslizantes
 * - Switch: Interruptores (alternadores)
 * - Toggle: Alternadores (botões de alternância)
 * - IconButton: Botão apenas com ícone
 * - LinkButton: Botão com estilo de link
 * - FAB: Botão de ação flutuante
 * - SegmentedControl: Controle segmentado
 * 
 * @module @rainersoft/ui/ui
 * @category Componentes UI
 */

// ============================================================================
// COMPONENTES UI BÁSICOS
// ============================================================================

// Avatar
export { Avatar, AvatarImage, AvatarFallback, type AvatarProps } from './avatar';

// Formulários
export { Input, type InputProps } from './input';
export { Textarea, type TextareaProps } from './textarea';

// Botões e Ações
export * from './button';
export * from './slider';
export * from './switch';
export * from './toggle';
export * from './icon-button';
export * from './link-button';
export * from './fab';
export * from './segmented-control';

// Layout e Conteúdo
export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from './card';

// Indicadores e Status
export { Badge, badgeVariants, type BadgeProps } from './badge';
export { Progress } from './progress';

// Conteúdo Expansível
export { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from './accordion';

// Estados de Carregamento
export { InlineLoader } from './InlineLoader';

// Utilitários
export { ThemeToggle } from '../utilities/ThemeToggle';
