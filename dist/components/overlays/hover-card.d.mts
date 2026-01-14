import * as React from 'react';

/**
 * Componente HoverCard
 *
 * @module @rainersoft/ui/components/overlays/hover-card
 */

declare const HoverCard: any;
declare const HoverCardTrigger: any;
declare const HoverCardContent: React.ForwardRefExoticComponent<Omit<Omit<any, "ref">, "ref"> & React.RefAttributes<unknown>>;

export { HoverCard, HoverCardContent, HoverCardTrigger };
