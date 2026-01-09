# @rainersoft/ui

[![Version](https://img.shields.io/badge/version-2.1.0-blue)](https://github.com/RainerTeixeira/rainer-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Test Coverage](https://img.shields.io/badge/coverage-3.39%25-red)](https://github.com/RainerTeixeira/rainer-ui)

> Componentes UI reutilizáveis construídos com Radix UI, Tailwind CSS e design tokens

**Versão 2.1.0** - Testes abrangentes, componentes completos, setup de testes profissional

## 📦 Responsabilidade

Esta biblioteca fornece **componentes de UI prontos para uso**:
- Componentes acessíveis baseados em Radix UI
- Estilizados com Tailwind CSS
- Consumindo tokens de `@rainersoft/design-tokens`
- 50+ componentes organizados por categoria
- Setup completo de testes com Jest e Testing Library
- Storybook para documentação visual

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

### 🌟 Imports Individuais (Tree-shaking)

**Novidade v2.1.0**: Importe apenas os componentes que precisa para um bundle menor!

```tsx
// ✅ Importação completa (padrão)
import { Button, Card, Input } from '@rainersoft/ui';

// 🌳 Importação individual (recomendado para performance)
import { Button } from '@rainersoft/ui/components/ui/button';
import { Card } from '@rainersoft/ui/components/layout/card';
import { Input } from '@rainersoft/ui/components/forms/input';

// 🎯 Importação por categoria
import * as UI from '@rainersoft/ui/components/ui';
import * as Social from '@rainersoft/ui/components/social';
import * as Forms from '@rainersoft/ui/components/forms';
```

### 🌐 Componentes Sociais Genéricos

**Novidade v2.1.0**: Componentes sociais genéricos para qualquer tipo de conteúdo!

```tsx
// 🚀 ActionButton - Botão de ação genérico
import { ActionButton } from '@rainersoft/ui/components/social/action-button';

<ActionButton
  icon={<Heart />}
  activeIcon={<Heart className="fill-current" />}
  count={likes}
  isActive={isLiked}
  onToggle={handleLike}
  activeColor="error"
  activeLabel="Curtido"
  inactiveLabel="Curtir"
/>

// 📤 ShareMenu - Menu de compartilhamento completo
import { ShareMenu } from '@rainersoft/ui/components/social/share-menu';

<ShareMenu
  url="/blog/post-123"
  title="Como usar React Hooks"
  description="Aprenda os fundamentos..."
  platforms={['twitter', 'facebook', 'linkedin', 'whatsapp', 'copy', 'qr']}
/>

// 📋 ContentCard - Card genérico com ações
import { ContentCard } from '@rainersoft/ui/components/social/content-card';

<ContentCard
  title="Como usar React Hooks"
  description="Aprenda os fundamentos dos Hooks React..."
  image="/blog/react-hooks.jpg"
  category="Tutorial"
  readTime={8}
  actions={{
    like: { count: 42, active: true },
    bookmark: { active: false },
    share: { url: "/blog/post", title: "Como usar React Hooks" }
  }}
/>
```

### 🎯 Casos de Uso por Projeto

#### **Blog**
```tsx
import { ContentCard } from '@rainersoft/ui/components/social/content-card';
import { ReadingTime } from '@rainersoft/ui/components/social/reading-time';
import { ActionButton } from '@rainersoft/ui/components/social/action-button';

// Post completo com metadados e ações
<ContentCard
  title="Título do Post"
  description="Resumo do conteúdo..."
  category="Tutorial"
  readTime={8}
  actions={{
    like: { count: 42, active: true },
    bookmark: { active: false },
    share: { url: "/blog/post", title: "Título do Post" }
  }}
/>
```

#### **E-commerce**
```tsx
import { ContentCard } from '@rainersoft/ui/components/social/content-card';
import { ActionButton } from '@rainersoft/ui/components/social/action-button';
import { ShareMenu } from '@rainersoft/ui/components/social/share-menu';

// Card de produto com ações
<ContentCard
  title="Produto Incrível"
  description="Descrição do produto..."
  price="R$ 199,90"
  badge="Promoção"
  variant="product"
  actions={{
    favorite: { count: 89, active: false },
    share: { url: "/product/123", title: "Produto Incrível" }
  }}
/>
```

#### **Dashboard**
```tsx
import { ShareMenu } from '@rainersoft/ui/components/social/share-menu';
import { KPI } from '@rainersoft/ui/components/feedback/kpi';
import { Table } from '@rainersoft/ui/components/layout/table';

// Relatório compartilhável
<ShareMenu
  url="/dashboard/report/123"
  title="Relatório Mensal"
  platforms={['copy', 'email']}
  variant="ghost"
  size="sm"
/>
```

### 🎨 Temas Dinâmicos

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

### 🌐 Social Components (Novidade v2.1.0)
- `ActionButton` - Botão de ação genérico (curtir, favoritar, follow)
- `ShareMenu` - Menu de compartilhamento completo
- `ContentCard` - Card genérico com metadados e ações
- `LikeButton` - Botão de curtir específico
- `BookmarkButton` - Botão de salvar específico  
- `ShareButton` - Botão de compartilhamento específico
- `ReadingTime` - Tempo de leitura estimado

### 🎨 UI Components
- `Button`, `Avatar`, `Input`, `Label`, `Textarea`
- `Select`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`, `Toggle`
- `Icon-Button`, `Link-Button`, `FAB`, `Segmented-Control`

### 📝 Forms  
- `Form`, `Input`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`, `Switch`, `Label`
- `Date-Picker`, `Time-Picker`, `Phone-Input`, `Search-Input`, `File-Upload`, `Range-Slider`

### 🏗️ Layout
- `Card`, `Sheet`, `Table`, `ScrollArea`, `Separator`, `AspectRatio`, `Container`
- `Flex`, `Grid`, `Spacer`, `Panel`, `Breadcrumb`, `Divider`

### 🔔 Feedback
- `Alert`, `AlertDialog`, `Badge`, `EmptyState`, `Progress`, `Skeleton`, `Sonner`
- `KPI`, `Notification`, `Spinner`

### 🎭 Overlays
- `Dialog`, `Modal`, `Popover`, `Tooltip`, `HoverCard`, `DropdownMenu`, `ContextMenu`
- `Drawer`, `Lightbox`, `Confirm-Dialog`

### 🧭 Navigation
- `Tabs`, `Accordion`, `NavigationMenu`, `Command`, `Collapsible`, `Menu`
- `Pagination`, `Sidebar`, `Steps`, `Top-Bar`

### 📊 Data Display
- `Avatar`, `Calendar`, `Carousel`, `Chip`, `Masonry`, `Rating`, `Timeline`

### ✨ Effects
- `ParticlesEffect`, `StarsBackground`, `FloatingGrid`, `CelestialBackground`, `MatrixBackground`

### ⚙️ Providers
- `ThemeProvider`

### 🛠️ Utilities
- `BackToTop`, `CookieBanner`, `InstallPrompt`, `LoadingScreen`, `PageHeader`, `UpdateNotification`
- `ErrorBoundary`, `Center`, `Kbd`, `Code`, `Quote`, `VisuallyHidden`, `ThemeToggle`, `TokensDemo`
- `Aspect-Ratio-Box`

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
│   │   ├── ui/             # Componentes UI básicos
│   │   ├── social/         # 🆕 Componentes sociais genéricos
│   │   ├── forms/          # Elementos de formulário
│   │   ├── layout/         # Containers e layout
│   │   ├── feedback/       # Feedback visual
│   │   ├── overlays/       # Modais e overlays
│   │   ├── navigation/     # Navegação
│   │   ├── data-display/   # Exibição de dados
│   │   ├── effects/        # Efeitos visuais
│   │   ├── utilities/      # Utilitários
│   │   └── providers/      # Context providers
│   ├── lib/
│   │   ├── utils.ts        # Função cn() e motion helpers
│   │   └── color-utils.ts  # Utilitários de cor
│   ├── styles/
│   │   └── global.css      # Estilos globais + utilitários visuais
│   └── index.ts            # Exportações
├── stories/                # Stories do Storybook
├── scripts/                # Scripts de build e geração
└── dist/                   # Build para distribuição
    └── components/         # 🆕 Exports individuais
        ├── ui/
        ├── social/
        ├── forms/
        ├── layout/
        ├── feedback/
        ├── overlays/
        ├── navigation/
        ├── data-display/
        ├── effects/
        └── providers/
```

## 🎨 Variantes e Props

### 🌐 Social Components

#### ActionButton
```tsx
<ActionButton
  icon={<Heart />}
  activeIcon={<Heart className="fill-current" />}
  count={42}
  isActive={true}
  onToggle={handleLike}
  activeColor="error"
  activeLabel="Curtido"
  inactiveLabel="Curtir"
  variant="default"
  size="sm"
/>
```

#### ShareMenu
```tsx
<ShareMenu
  url="/blog/post-123"
  title="Como usar React Hooks"
  description="Aprenda os fundamentos..."
  platforms={['twitter', 'facebook', 'linkedin', 'whatsapp', 'copy', 'qr']}
  variant="outline"
  size="sm"
  showLabel={true}
  onShare={(platform) => console.log('Shared:', platform)}
/>
```

#### ContentCard
```tsx
<ContentCard
  title="Como usar React Hooks"
  description="Aprenda os fundamentos dos Hooks React..."
  image="/blog/react-hooks.jpg"
  category="Tutorial"
  readTime={8}
  link="/blog/react-hooks"
  variant="default"
  orientation="vertical"
  actions={{
    like: { count: 42, active: true },
    bookmark: { active: false },
    share: { url: "/blog/post", title: "Como usar React Hooks" }
  }}
/>
```

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
