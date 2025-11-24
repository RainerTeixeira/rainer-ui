# @rainersoft/ui

[![Version](https://img.shields.io/badge/version-1.1.0-blue)](https://github.com/RainerTeixeira/rainer-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Componentes UI reutilizáveis construídos com Radix UI, Tailwind CSS e design tokens

**Versão 1.1.0** - Utilitários visuais integrados, configuração simplificada

## 📦 Responsabilidade

Esta biblioteca fornece **componentes de UI prontos para uso**:
- Componentes acessíveis baseados em Radix UI
- Estilizados com Tailwind CSS
- Consumindo tokens de `@rainersoft/design-tokens`
- 49 componentes organizados por categoria

## 🚀 Instalação

```bash
# Com pnpm (recomendado)
pnpm add @rainersoft/ui @rainersoft/design-tokens

# Com npm
npm install @rainersoft/ui @rainersoft/design-tokens
```

## 📖 Uso

### Setup Inicial

```tsx
// No seu app principal, importe os estilos globais
import '@rainersoft/ui/styles/global.css';
// OU importe apenas os CSS Variables do design-tokens
import '@rainersoft/design-tokens/formats/css-vars.css';

// Agora use os componentes
import { Button, Card, Input } from '@rainersoft/ui';

function App() {
  return (
    <Card>
      <Input placeholder="Digite algo..." />
      <Button>Enviar</Button>
    </Card>
  );
}
```

### Temas Dinâmicos

```tsx
// Os componentes se adaptam automaticamente ao tema
<div data-theme="dark">
  <Button variant="primary">Tema escuro</Button>
</div>

<div data-theme="light">
  <Button variant="primary">Tema claro</Button>
</div>
```

Internamente, os componentes usam classes Tailwind que mapeiam para os tokens de cor, por exemplo:

- `bg-primary`, `bg-secondary`, `bg-accent`
- `text-primary-foreground`, `text-muted-foreground`
- `border-border`, `bg-card`, `text-card-foreground`

Essas classes são resolvidas para **CSS Variables** definidas em `@rainersoft/design-tokens` (como `--color-primary`, `--color-background`, etc.). Ao trocar o `data-theme`, você troca o conjunto de variáveis ativas e toda a UI se atualiza automaticamente.

## ⚙️ Exemplo de Tailwind Config

A própria biblioteca usa uma configuração de Tailwind semelhante a esta:

```ts
// tailwind.config.ts (simplificado)
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          foreground: 'rgb(var(--color-primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
          foreground: 'rgb(var(--color-secondary-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'rgb(var(--color-muted) / <alpha-value>)',
          foreground: 'rgb(var(--color-muted-foreground) / <alpha-value>)',
        },
        card: {
          DEFAULT: 'rgb(var(--color-card) / <alpha-value>)',
          foreground: 'rgb(var(--color-card-foreground) / <alpha-value>)',
        },
      },
    },
  },
};

export default config;
```

## 🧩 Componentes Disponíveis

### Actions
- `Button`, `Toggle`, `Slider`

### Forms  
- `Input`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`, `Switch`, `Label`, `Form`

### Layout
- `Card`, `Sheet`, `Table`, `ScrollArea`, `Separator`, `AspectRatio`

### Feedback
- `Alert`, `AlertDialog`, `Badge`, `Progress`, `Skeleton`, `Sonner`

### Overlays
- `Dialog`, `Popover`, `Tooltip`, `HoverCard`, `DropdownMenu`, `ContextMenu`

### Navigation
- `Tabs`, `Accordion`, `NavigationMenu`, `Command`, `Collapsible`

### Data Display
- `Avatar`, `Calendar`, `Carousel`

### Effects
- `ParticlesEffect`, `StarsBackground`, `FloatingGrid`, `CelestialBackground`

### Utilities
- `BackToTop`, `CookieBanner`, `InstallPrompt`, `LoadingScreen`, `PageHeader`, `UpdateNotification`

## 🛠️ Scripts

```bash
# Construir biblioteca
pnpm build

# Desenvolvimento com hot reload
pnpm dev

# Executar testes
pnpm test

# Storybook (documentação visual)
pnpm storybook

# Limpar build
pnpm clean
```

## 📁 Estrutura

```text
@rainersoft/ui/
├── src/
│   ├── components/
│   │   ├── actions/       # Botões e controles
│   │   ├── forms/         # Elementos de formulário
│   │   ├── layout/        # Containers e layout
│   │   ├── feedback/      # Feedback visual
│   │   ├── overlays/      # Modais e overlays
│   │   ├── navigation/    # Navegação
│   │   ├── data-display/  # Exibição de dados
│   │   ├── effects/       # Efeitos visuais
│   │   └── utilities/     # Utilitários
│   ├── lib/
│   │   ├── utils.ts       # Função cn() e motion helpers
│   │   └── color-utils.ts # Utilitários de cor
│   ├── styles/
│   │   └── global.css     # 🆕 Estilos globais + utilitários visuais
│   └── index.ts           # Exportações
├── stories/               # Stories do Storybook
└── dist/                  # Build para distribuição
```

## 🎨 Variantes e Props

### Button

```tsx
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>

<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🚀</Button>
```

### Input

```tsx
<Input placeholder="Digite..." />
<Input type="email" />
<Input disabled />
<Input aria-invalid="true" />
```

### Card

```tsx
<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
    <CardDescription>Descrição</CardDescription>
  </CardHeader>
  <CardContent>Conteúdo</CardContent>
  <CardFooter>Rodapé</CardFooter>
</Card>
```

## 🤝 Dependências

- **Radix UI**: Componentes acessíveis sem estilo
- **Tailwind CSS**: Framework de estilos utilitários
- **class-variance-authority**: Variantes de componentes
- **clsx + tailwind-merge**: Merge inteligente de classes

## 🤝 Contribuindo

Contribuições são bem-vindas! Consulte o [Guia de Contribuição](./docs/CONTRIBUINDO.md) para saber como contribuir com este projeto.

## 📚 Documentação Completa

- [Índice da Documentação](./docs/00-INDICE.md)
- [Guia de Contribuição](./docs/CONTRIBUINDO.md)

## 📝 Changelog

### v1.2.0 (2024-11-24)

**🔒 Governança e Zero Hardcode**

- ✅ **Zero Fallbacks Hardcoded**: Removidos todos os fallbacks de motion tokens
- ✅ **Validação Rigorosa**: Erro claro se tokens não estiverem disponíveis
- ✅ **CI/CD Pipeline**: Integração com GitHub Actions para validação automática
- ✅ **Exports Expandidos**: Adicionado export de `styles/global.css` e `lib/*`
- ✅ **Documentação Profissional**: Estrutura docs/ com guias em português

### v1.1.0 (2024-11-24)

**🎨 Utilitários Visuais Integrados**

- ✅ **Classes utilitárias CSS adicionadas**: `.glass`, `.neon-*`, `.gradient-*`, `.animate-*`
- ✅ **Configuração Tailwind simplificada**: Herda 100% do `@rainersoft/design-tokens`
- ✅ **Novo arquivo**: `src/styles/global.css` com todos os utilitários
- ✅ **Zero redundância**: Remove código duplicado, mantém apenas fonte única
- ✅ **Color utils**: Funções profissionais para manipulação de cores

**Classes Utilitárias Disponíveis:**
```css
/* Glassmorphism */
.glass, .glass-dark

/* Neon Effects */
.neon-text, .neon-box

/* Gradients */
.gradient-primary, .gradient-accent, .gradient-cyberpunk, .gradient-neon

/* Animações */
.animate-pulse-glow, .animate-slide-up, .animate-fade-in, .animate-float

/* Scrollbar */
.custom-scrollbar
```

**Migração:**
```diff
- import '@rainersoft/design-tokens/src/css-vars.css';
+ import '@rainersoft/ui/styles/global.css';
```

### v1.0.0

- Lançamento inicial com 49 componentes
- Integração completa com @rainersoft/design-tokens
- Suporte a React 18 e 19
- Build otimizado com tree-shaking

## 📝 Licença

MIT © Rainer Teixeira
