import { render, screen } from '@testing-library/react';
import { KPI } from '../../../../src/components/feedback/kpi';

/**
 * Testes do componente KPI
 */

describe('KPI', () => {
  it('renderiza KPI com título e valor', () => {
    render(
      <KPI 
        title="Total de Vendas"
        value="R$ 10.000"
      />
    );
    
    expect(screen.getByText('Total de Vendas')).toBeDefined();
    expect(screen.getByText('R$ 10.000')).toBeDefined();
  });

  it('renderiza KPI com variação positiva', () => {
    render(
      <KPI 
        title="Receita"
        value="R$ 5.000"
        variation="+12%"
        trend="up"
      />
    );
    
    expect(screen.getByText('Receita')).toBeDefined();
    expect(screen.getByText('R$ 5.000')).toBeDefined();
    expect(screen.getByText('+12%')).toBeDefined();
  });

  it('renderiza KPI com variação negativa', () => {
    render(
      <KPI 
        title="Despesas"
        value="R$ 2.000"
        variation="-5%"
        trend="down"
      />
    );
    
    expect(screen.getByText('Despesas')).toBeDefined();
    expect(screen.getByText('R$ 2.000')).toBeDefined();
    expect(screen.getByText('-5%')).toBeDefined();
  });

  it('renderiza KPI com ícone', () => {
    render(
      <KPI 
        title="Usuários"
        value="1.234"
        icon={<div data-testid="kpi-icon">👥</div>}
      />
    );
    
    expect(screen.getByTestId('kpi-icon')).toBeDefined();
  });

  it('renderiza KPI com descrição', () => {
    render(
      <KPI 
        title="Taxa de Conversão"
        value="3.2%"
        description="Últimos 30 dias"
      />
    );
    
    expect(screen.getByText('Taxa de Conversão')).toBeDefined();
    expect(screen.getByText('3.2%')).toBeDefined();
    expect(screen.getByText('Últimos 30 dias')).toBeDefined();
  });

  it('aplica classes CSS customizadas', () => {
    render(
      <KPI 
        className="custom-class"
        title="Título" 
        value="Valor" 
      />
    );
    
    const kpi = screen.getByText('Título').closest('[data-testid="kpi"]');
    expect(kpi?.classList.contains('custom-class')).toBe(true);
  });
});
