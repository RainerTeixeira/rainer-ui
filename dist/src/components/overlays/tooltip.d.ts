/**
 * Componentes de Tooltip (Dica/Hint)
 *
 * Sistema composable para exibir dicas contextuais ao hover/focus.
 * Baseado em Radix UI Tooltip com posicionamento inteligente.
 *
 * Componentes disponíveis:
 * - TooltipProvider: provedor global de tooltips (controla delay)
 * - Tooltip: container root (integra provider automaticamente)
 * - TooltipTrigger: elemento que dispara o tooltip
 * - TooltipContent: conteúdo do tooltip com animação e seta
 *
 * Características:
 * - Posicionamento automático (top, right, bottom, left)
 * - Delay configurável (padrão 0ms)
 * - Seta apontando para o trigger
 * - Animações de fade e zoom
 * - Acessível (keyboard navigation)
 *
 * @fileoverview Sistema de tooltips acessíveis
 * @author Rainer Teixeira
 * @version 1.0.0
 * @since 1.0.0
 */
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as React from 'react';
/**
 * Componente TooltipProvider (Provedor)
 *
 * Provedor de contexto para tooltips. Deve envolver todos os tooltips
 * para compartilhar configurações globais como delay.
 *
 * @param {React.ComponentProps<typeof TooltipPrimitive.Provider>} props - Props do provider
 * @param {number} [props.delayDuration=0] - Delay em ms antes de mostrar tooltip
 * @returns {JSX.Element} Provider de tooltips
 *
 * @example
 * <TooltipProvider delayDuration={200}>
 *   <App />
 * </TooltipProvider>
 */
declare function TooltipProvider({ delayDuration, ...props }: React.ComponentProps<typeof TooltipPrimitive.Provider>): import("react/jsx-runtime").JSX.Element;
/**
 * Componente Tooltip (Root)
 *
 * Container root do tooltip. Inclui TooltipProvider automaticamente,
 * então não é necessário envolver manualmente.
 *
 * @param {React.ComponentProps<typeof TooltipPrimitive.Root>} props - Props do root
 * @returns {JSX.Element} Container do tooltip
 */
declare function Tooltip({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>): import("react/jsx-runtime").JSX.Element;
/**
 * Componente TooltipTrigger (Gatilho)
 *
 * Elemento que dispara o tooltip ao hover ou focus.
 * Pode ser botão, link, ícone ou qualquer elemento interativo.
 *
 * @param {React.ComponentProps<typeof TooltipPrimitive.Trigger>} props - Props do trigger
 * @returns {JSX.Element} Trigger do tooltip
 */
declare function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>): import("react/jsx-runtime").JSX.Element;
/**
 * Componente TooltipContent (Conteúdo)
 *
 * Balão flutuante com conteúdo do tooltip.
 * Posiciona-se automaticamente próximo ao trigger.
 *
 * Inclui:
 * - Animações de fade e zoom
 * - Seta apontando para o trigger
 * - Slide baseado no lado posicionado
 * - Portal para renderizar fora do DOM tree
 *
 * @param {React.ComponentProps<typeof TooltipPrimitive.Content>} props - Props do content
 * @param {number} [props.sideOffset=0] - Distância em px do trigger
 * @param {string} [props.className] - Classes CSS adicionais
 * @param {React.ReactNode} props.children - Conteúdo do tooltip
 * @returns {JSX.Element} Balão do tooltip
 *
 * @example
 * <Tooltip>
 *   <TooltipTrigger asChild>
 *     <Button size="icon">
 *       <InfoIcon />
 *     </Button>
 *   </TooltipTrigger>
 *   <TooltipContent>
 *     <p>Informação útil aqui</p>
 *   </TooltipContent>
 * </Tooltip>
 *
 * @example
 * // Com sideOffset para afastar do trigger
 * <TooltipContent sideOffset={8}>
 *   Tooltip distante
 * </TooltipContent>
 */
declare function TooltipContent({ className, sideOffset, children, ...props }: React.ComponentProps<typeof TooltipPrimitive.Content>): import("react/jsx-runtime").JSX.Element;
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
