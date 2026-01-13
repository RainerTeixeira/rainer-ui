import { render, screen } from '@testing-library/react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../../src/components/forms/select';

/**
 * Testes do componente Select
 */

describe('Select', () => {
  it('renderiza select com trigger e content', () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    );
    
    expect(screen.getByText('Select an option')).toBeDefined();
  });

  it('renderiza select items', () => {
    render(
      <Select>
        <SelectContent>
          <SelectItem value="item1">Item 1</SelectItem>
          <SelectItem value="item2">Item 2</SelectItem>
        </SelectContent>
      </Select>
    );
    
    expect(screen.getByText('Item 1')).toBeDefined();
    expect(screen.getByText('Item 2')).toBeDefined();
  });

  it('aplica classes CSS customizadas', () => {
    render(
      <Select>
        <SelectTrigger className="custom-class">
          <SelectValue placeholder="Test" />
        </SelectTrigger>
      </Select>
    );
    
    const trigger = screen.getByText('Test').closest('[data-testid="select-trigger"]');
    expect(trigger?.classList.contains('custom-class')).toBe(true);
  });
});
