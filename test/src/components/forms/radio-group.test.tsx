import { render, screen } from '@testing-library/react';
import { RadioGroup, RadioGroupItem } from '../../../../src/components/forms/radio-group';

/**
 * Testes do componente RadioGroup
 */

describe('RadioGroup', () => {
  it('renderiza radio group com items', () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="option1">Option 1</RadioGroupItem>
        <RadioGroupItem value="option2">Option 2</RadioGroupItem>
      </RadioGroup>
    );
    
    expect(screen.getByText('Option 1')).toBeDefined();
    expect(screen.getByText('Option 2')).toBeDefined();
  });

  it('aplica classes CSS customizadas', () => {
    render(
      <RadioGroup className="custom-class">
        <RadioGroupItem value="test">Test</RadioGroupItem>
      </RadioGroup>
    );
    
    const radioGroup = screen.getByText('Test').closest('[data-testid="radio-group"]');
    expect(radioGroup?.classList.contains('custom-class')).toBe(true);
  });
});
