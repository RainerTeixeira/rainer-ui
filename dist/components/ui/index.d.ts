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
export { Avatar, AvatarImage, AvatarFallback, type AvatarProps } from './avatar';
export { Input, type InputProps } from './input';
export { Textarea, type TextareaProps } from './textarea';
export * from './button';
export * from './slider';
export * from './switch';
export * from './toggle';
export * from './icon-button';
export * from './link-button';
export * from './fab';
export * from './segmented-control';
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './card';
export { Badge, badgeVariants, type BadgeProps } from './badge';
export { Progress } from './progress';
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion';
export { InlineLoader } from './InlineLoader';
export { ThemeToggle } from '../utilities/ThemeToggle';
