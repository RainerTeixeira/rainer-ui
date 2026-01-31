import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

/**
 * Switch Component
 *
 * Toggle switch para configurações on/off
 *
 * @module @rainersoft/ui/components/ui/switch
 */

declare const Switch: React.ForwardRefExoticComponent<Omit<SwitchPrimitives.SwitchProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;

export { Switch };
