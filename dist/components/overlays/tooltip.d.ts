import * as react_jsx_runtime from 'react/jsx-runtime';
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
declare function TooltipProvider({ delayDuration, ...props }: React.ComponentProps<typeof TooltipPrimitive.Provider>): react_jsx_runtime.JSX.Element;
/**
 * Componente Tooltip (Root)
 *
 * Container root do tooltip. Inclui TooltipProvider automaticamente,
 * então não é necessário envolver manualmente.
 *
 * @param {React.ComponentProps<typeof TooltipPrimitive.Root>} props - Props do root
 * @returns {JSX.Element} Container do tooltip
 */
declare function Tooltip({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>): react_jsx_runtime.JSX.Element;
/**
 * Componente TooltipTrigger (Gatilho)
 *
 * Elemento que dispara o tooltip ao hover ou focus.
 * Pode ser botão, link, ícone ou qualquer elemento interativo.
 *
 * @param {React.ComponentProps<typeof TooltipPrimitive.Trigger>} props - Props do trigger
 * @returns {JSX.Element} Trigger do tooltip
 */
declare function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
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
declare function TooltipContent({ className, sideOffset, children, ...props }: React.ComponentProps<typeof TooltipPrimitive.Content>): react_jsx_runtime.JSX.Element;

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
