# Contribuindo para @rainersoft/ui

Obrigado pelo interesse em contribuir para a biblioteca de componentes UI da Rainersoft!

## 📋 Índice

- [Código de Conduta](#código-de-conduta)
- [Como Contribuir](#como-contribuir)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Padrões de Código](#padrões-de-código)
- [Processo de Pull Request](#processo-de-pull-request)
- [Criando Componentes](#criando-componentes)

---

## 📜 Código de Conduta

Este projeto segue o [Código de Conduta do Contributor Covenant](https://www.contributor-covenant.org/). 
Ao participar, você concorda em manter um ambiente respeitoso e acolhedor.

---

## 🚀 Como Contribuir

### Reportar Bugs

1. Verifique se o bug já não foi reportado em [Issues](https://github.com/RainerTeixeira/rainer-ui/issues)
2. Abra uma nova issue com:
   - Título descritivo
   - Passos para reproduzir
   - Comportamento esperado vs. atual
   - Screenshots (se aplicável)
   - Versão da biblioteca e React

### Sugerir Componentes

1. Abra uma issue com o prefixo `[Component]`
2. Descreva o componente desejado
3. Explique o caso de uso
4. Adicione referências (shadcn/ui, Material-UI, etc.)
5. Inclua mockups se possível

### Melhorar Componentes Existentes

1. Descreva a melhoria desejada
2. Explique por que é necessária
3. Mantenha compatibilidade com API existente
4. Adicione testes

---

## ⚙️ Configuração do Ambiente

### Pré-requisitos

- Node.js 18+ ou 20+
- pnpm 9+
- React 18+ ou 19+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/RainerTeixeira/rainer-ui.git
cd rainer-ui

# Instale as dependências
pnpm install

# Build do design-tokens primeiro
cd ../rainer-design-tokens
pnpm run build

# Volte para rainer-ui e faça build
cd ../rainer-ui
pnpm run build

# Inicie o Storybook
pnpm run storybook
```

### Comandos Disponíveis

```bash
# Desenvolvimento com watch mode
pnpm dev

# Build completo
pnpm build

# Testes
pnpm test
pnpm test:coverage

# Lint
pnpm lint

# Storybook
pnpm storybook
pnpm build-storybook

# Limpar build
pnpm clean
```

---

## 📏 Padrões de Código

### React/TypeScript

- Use **TypeScript** em todo o código
- Componentes funcionais com **hooks**
- Props sempre tipadas com **interface**
- Use `forwardRef` quando apropriado
- Evite `any` - prefira tipos específicos

### Estrutura de Componentes

```
components/category/component-name/
├── ComponentName.tsx      # Componente principal
├── ComponentName.test.tsx # Testes unitários (opcional)
└── index.ts               # Re-export
```

### Template de Componente

```typescript
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Variantes do componente usando CVA
 */
const componentVariants = cva(
  'base-classes',
  {
    variants: {
      variant: {
        default: 'default-classes',
        secondary: 'secondary-classes',
      },
      size: {
        sm: 'small-classes',
        md: 'medium-classes',
        lg: 'large-classes',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

/**
 * Props do componente
 */
export interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {
  // Props adicionais aqui
}

/**
 * Componente ComponentName
 * 
 * @description
 * Descrição do componente e seu propósito
 * 
 * @example
 * ```tsx
 * <ComponentName variant="default">Conteúdo</ComponentName>
 * ```
 */
const ComponentName = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(componentVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

ComponentName.displayName = 'ComponentName';

export { ComponentName, componentVariants };
```

### Regras de Estilo

1. **Zero Hardcode**: Use apenas tokens do `@rainersoft/design-tokens`
2. **Classes Tailwind**: Prefira classes utilitárias do Tailwind
3. **CSS Variables**: Use para valores dinâmicos de tema
4. **Variantes**: Use `class-variance-authority` (CVA) para variantes
5. **Acessibilidade**: Sempre use Radix UI como base

### JSDoc

```typescript
/**
 * Descrição do componente/função
 * 
 * @param {Props} props - Props do componente
 * @returns {JSX.Element} Elemento React
 * 
 * @example
 * ```tsx
 * <Component prop="value" />
 * ```
 */
```

### Commits

Siga o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

[optional body]

[optional footer]
```

**Tipos:**
- `feat`: Novo componente ou funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação
- `refactor`: Refatoração
- `test`: Testes
- `chore`: Manutenção

**Exemplos:**
```
feat(button): adicionar variante outline
fix(card): corrigir padding inconsistente
docs(readme): atualizar exemplos de uso
```

---

## 🏗️ Criando Componentes

### Checklist de Novo Componente

- [ ] Baseado em Radix UI (quando aplicável)
- [ ] Props tipadas com TypeScript
- [ ] Variantes usando CVA
- [ ] Estilos usando apenas Tailwind + tokens
- [ ] Acessível (WCAG AA)
- [ ] Suporte a temas (light/dark)
- [ ] `forwardRef` implementado
- [ ] `displayName` definido
- [ ] Documentação JSDoc
- [ ] Story no Storybook
- [ ] Testes unitários (opcional mas recomendado)
- [ ] Exportado em `src/index.ts`

### Exemplo Prático

```bash
# 1. Criar estrutura de diretório
mkdir -p src/components/actions/new-component

# 2. Criar arquivos
touch src/components/actions/new-component/NewComponent.tsx
touch src/components/actions/new-component/index.ts

# 3. Implementar componente (ver template acima)

# 4. Exportar em src/index.ts
echo "export * from './components/actions/new-component/NewComponent';" >> src/index.ts

# 5. Criar story
mkdir -p stories
touch stories/NewComponent.stories.tsx

# 6. Testar no Storybook
pnpm storybook
```

---

## 🔄 Processo de Pull Request

### Checklist

- [ ] Código segue os padrões estabelecidos
- [ ] Componente usa apenas tokens (zero hardcode)
- [ ] Testes passam (`pnpm test`)
- [ ] Não há erros de lint (`pnpm lint`)
- [ ] Storybook funciona (`pnpm storybook`)
- [ ] Documentação JSDoc completa
- [ ] Story criada no Storybook
- [ ] Acessibilidade verificada
- [ ] Temas claro/escuro testados
- [ ] Commits seguem Conventional Commits
- [ ] Branch atualizada com `main`

### Fluxo do PR

1. **Fork** o repositório
2. Crie uma **branch**: `feature/component-name` ou `fix/bug-description`
3. **Commit** suas mudanças
4. **Push** para sua branch
5. Abra um **Pull Request** com:
   - Título descritivo
   - Descrição detalhada
   - Screenshots do Storybook
   - Link para issues relacionadas
   - Checklist preenchido

---

## 🧪 Testes

### Executar Testes

```bash
# Todos os testes
pnpm test

# Com cobertura
pnpm test:coverage

# Watch mode
pnpm test --watch
```

### Escrever Testes

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('deve renderizar corretamente', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('deve aplicar variante correta', () => {
    const { container } = render(<Button variant="secondary">Test</Button>);
    // Assertions
  });
});
```

---

## 📚 Recursos Adicionais

- [Documentação do Radix UI](https://www.radix-ui.com/)
- [Documentação do Tailwind CSS](https://tailwindcss.com/)
- [Class Variance Authority (CVA)](https://cva.style/)
- [Documentação do Storybook](https://storybook.js.org/)
- [Diretrizes WCAG](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 📞 Suporte

- **Issues**: [GitHub Issues](https://github.com/RainerTeixeira/rainer-ui/issues)
- **Email**: suporte@rainersoft.com.br
- **Documentação**: [README.md](./README.md)

---

**Obrigado pela contribuição! 🎉**
