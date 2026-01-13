import { render, screen } from '@testing-library/react';
import { EmptyState } from '../../../../src/components/feedback/empty-state';

/**
 * Testes do componente EmptyState
 */

describe('EmptyState', () => {
  it('renderiza empty state com título e descrição', () => {
    render(
      <EmptyState 
        title="Nenhum dado encontrado"
        description="Não há itens para exibir no momento."
      />
    );
    
    expect(screen.getByText('Nenhum dado encontrado')).toBeDefined();
    expect(screen.getByText('Não há itens para exibir no momento.')).toBeDefined();
  });

  it('renderiza empty state com ícone', () => {
    render(
      <EmptyState 
        title="Vazio"
        description="Sem conteúdo"
        icon={<div data-testid="empty-icon">📭</div>}
      />
    );
    
    expect(screen.getByTestId('empty-icon')).toBeDefined();
  });

  it('renderiza empty state com ação', () => {
    render(
      <EmptyState 
        title="Vazio"
        description="Sem conteúdo"
        action={<button data-testid="action-btn">Adicionar Item</button>}
      />
    );
    
    expect(screen.getByTestId('action-btn')).toBeDefined();
  });

  it('aplica classes CSS customizadas', () => {
    render(
      <EmptyState 
        className="custom-class"
        title="Título" 
        description="Descrição" 
      />
    );
    
    const emptyState = screen.getByText('Título').closest('[data-testid="empty-state"]');
    expect(emptyState?.classList.contains('custom-class')).toBe(true);
  });
});
