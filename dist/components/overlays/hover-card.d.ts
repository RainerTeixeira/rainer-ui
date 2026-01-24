/**
 * Componente HoverCard
 *
 * @module @rainersoft/ui/components/overlays/hover-card
 */
import * as React from 'react';
declare const HoverCard: React.FC<import("@radix-ui/react-hover-card").HoverCardProps>;
declare const HoverCardTrigger: React.ForwardRefExoticComponent<import("@radix-ui/react-hover-card").HoverCardTriggerProps & React.RefAttributes<HTMLAnchorElement>>;
declare const HoverCardContent: React.ForwardRefExoticComponent<Omit<import("@radix-ui/react-hover-card").HoverCardContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { HoverCard, HoverCardTrigger, HoverCardContent };
