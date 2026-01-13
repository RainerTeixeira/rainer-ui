import { render, screen } from '@testing-library/react';
import { Notification } from '../../../../src/components/feedback/notification';

/**
 * Testes do componente Notification
 */

describe('Notification', () => {
  it('renderiza notificação com título e mensagem', () => {
    render(
      <Notification 
        title="Título da Notificação" 
        message="Mensagem da notificação" 
      />
    );
    
    expect(screen.getByText('Título da Notificação')).toBeDefined();
    expect(screen.getByText('Mensagem da notificação')).toBeDefined();
  });

  it('renderiza notificação com variant success', () => {
    render(
      <Notification 
        variant="success"
        title="Sucesso" 
        message="Operação concluída" 
      />
    );
    
    expect(screen.getByText('Sucesso')).toBeDefined();
    expect(screen.getByText('Operação concluída')).toBeDefined();
  });

  it('renderiza notificação com variant error', () => {
    render(
      <Notification 
        variant="error"
        title="Erro" 
        message="Ocorreu um erro" 
      />
    );
    
    expect(screen.getByText('Erro')).toBeDefined();
    expect(screen.getByText('Ocorreu um erro')).toBeDefined();
  });

  it('renderiza notificação com variant warning', () => {
    render(
      <Notification 
        variant="warning"
        title="Aviso" 
        message="Atenção necessária" 
      />
    );
    
    expect(screen.getByText('Aviso')).toBeDefined();
    expect(screen.getByText('Atenção necessária')).toBeDefined();
  });

  it('renderiza notificação com variant info', () => {
    render(
      <Notification 
        variant="info"
        title="Informação" 
        message="Detalhes importantes" 
      />
    );
    
    expect(screen.getByText('Informação')).toBeDefined();
    expect(screen.getByText('Detalhes importantes')).toBeDefined();
  });

  it('renderiza notificação sem título', () => {
    render(
      <Notification 
        message="Apenas mensagem" 
      />
    );
    
    expect(screen.getByText('Apenas mensagem')).toBeDefined();
  });

  it('renderiza notificação com ação customizada', () => {
    render(
      <Notification 
        title="Confirmação" 
        message="Deseja continuar?"
        action={<button data-testid="action-btn">Sim</button>}
      />
    );
    
    expect(screen.getByText('Confirmação')).toBeDefined();
    expect(screen.getByText('Deseja continuar?')).toBeDefined();
    expect(screen.getByTestId('action-btn')).toBeDefined();
  });

  it('aplica classes CSS customizadas', () => {
    render(
      <Notification 
        className="custom-class"
        title="Título" 
        message="Mensagem" 
      />
    );
    
    const notification = screen.getByText('Título').closest('[data-testid="notification"]');
    expect(notification?.classList.contains('custom-class')).toBe(true);
  });

  it('aceita props HTML padrão', () => {
    render(
      <Notification 
        data-testid="custom-notification"
        title="Título" 
        message="Mensagem" 
      />
    );
    
    expect(screen.getByTestId('custom-notification')).toBeDefined();
  });

  it('pode ser fechada quando tem onClose', () => {
    const mockOnClose = jest.fn();
    render(
      <Notification 
        title="Título" 
        message="Mensagem"
        closable
        onClose={mockOnClose}
      />
    );
    
    const closeButton = screen.getByRole('button', { name: /fechar/i });
    expect(closeButton).toBeDefined();
  });
});
