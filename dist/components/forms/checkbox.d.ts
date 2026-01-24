/**
 * Checkbox Component
 *
 * Checkbox para seleção múltipla
 *
 * @module @rainersoft/ui/components/forms/checkbox
 */
import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
declare const Checkbox: React.ForwardRefExoticComponent<Omit<CheckboxPrimitive.CheckboxProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export { Checkbox };
