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

### Tokens e dados

- **Tokens obrigatórios**: todos os componentes requerem que seu app esteja envolvido por `TokensProvider tokens={seusTokens}` (ex.: no App/Storybook). Sem o provider, `useTokens` lança erro para evitar uso sem design tokens oficiais.
- **Dados externos**: os componentes (incluindo dashboard) **não carregam dados internos** nem presets. Tudo que aparece em tela vem das props que você fornecer.
- Exemplos e dados de demonstração ficam apenas no app `Teste-ui` e **não são publicados** no pacote.
- Para usar métricas/cards, sempre passe seus dados via props:

```tsx
import { StatsCards } from '@rainersoft/ui/components/dashboard/stats-cards';

const metrics = [
  { label: 'Receita', value: 1000, change: 5.2, trend: 'up' },
  { label: 'Pedidos', value: 120, change: -2.1, trend: 'down' },
];

<StatsCards items={metrics} showFooterDate />;
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
import { StatsCards } from '@rainersoft/ui/components/dashboard/stats-cards';

// Relatório compartilhável
<ShareMenu
  url="/dashboard/report/123"
  title="Relatório Mensal"
  platforms={['copy', 'email']}
  variant="ghost"
  size="sm"
/>

// Métricas de vendas genéricas
<StatsCards
  items={[
    {
      label: 'Receita Mensal',
      value: 125000,
      change: 8.5,
      trend: 'up',
      icon: <DollarSign className="h-4 w-4" />,
      accentKey: 'status.success.base',
      secondaryColor: 'status.success.background',
      formatValue: (v) =>
        typeof v === 'number'
          ? v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
          : v
    },
    {
      label: 'Pedidos',
      value: 320,
      change: 5.1,
      trend: 'up',
      icon: <ShoppingBag className="h-4 w-4" />,
      accentKey: 'status.info.base',
      secondaryColor: 'status.info.background',
      description: 'Pedidos processados'
    },
    {
      label: 'Taxa de Conversão',
      value: 3.4,
      change: 0.4,
      trend: 'up',
      icon: <Activity className="h-4 w-4" />,
      accentKey: 'status.warning.base',
      secondaryColor: 'status.warning.background',
      valueSuffix: '%'
    },
    {
      label: 'Clientes Ativos',
      value: 1240,
      change: -2.1,
      trend: 'down',
      icon: <Users className="h-4 w-4" />,
      accentKey: 'status.error.base',
      secondaryColor: 'status.error.background',
      description: 'Compras nos últimos 30 dias'
    },
  ]}
  showFooterDate
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

## 🪝 Hooks React

A biblioteca fornece hooks especializados para componentes UI. Todos os hooks são projetados para trabalhar com design tokens e seguir as melhores práticas de acessibilidade.

### 📋 Hooks Disponíveis

#### **Hooks Essenciais (Usados Internamente)**

##### `useTheme`
Hook para gerenciar tema claro/escuro com integração com design tokens.

```tsx
import { useTheme } from '@rainersoft/ui';

function ThemeComponent() {
  const { theme, toggle, setTheme, isDark } = useTheme();
  
  return (
    <div>
      <p>Tema atual: {theme}</p>
      <button onClick={toggle}>Alternar Tema</button>
      <button onClick={() => setTheme('light')}>Tema Claro</button>
    </div>
  );
}
```

**Retorno:**
- `theme: 'light' | 'dark' | 'system'` - Tema atual
- `toggle: () => void` - Alterna entre light/dark
- `setTheme: (theme) => void` - Define tema específico
- `isDark: boolean` - Se tema escuro está ativo

---

##### `usePWA`
Hook para detectar e gerenciar instalação de Progressive Web App.

```tsx
import { usePWA } from '@rainersoft/ui';

function PWAInstallPrompt() {
  const { isInstallable, isInstalled, install, dismiss } = usePWA();
  
  if (isInstalled) return null;
  if (!isInstallable) return null;
  
  return (
    <div>
      <p>Instale nosso aplicativo!</p>
      <button onClick={install}>Instalar</button>
      <button onClick={dismiss}>Agora não</button>
    </div>
  );
}
```

**Retorno:**
- `isInstallable: boolean` - Se app pode ser instalado
- `isInstalled: boolean` - Se app já está instalado
- `install: () => Promise<void>` - Instala o PWA
- `dismiss: () => void` - Fecha o prompt

---

#### **Hooks para Uso Externo**

##### `useCarouselKeyboard`
Hook para gerenciar navegação por teclado em carousels e sliders.

```tsx
import { useCarouselKeyboard } from '@rainersoft/ui';

function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const keyboard = useCarouselKeyboard({
    totalItems: items.length,
    currentIndex,
    onIndexChange: setCurrentIndex,
    autoPlay: true,
    autoPlayInterval: 3000,
    options: {
      loop: true,
      pauseOnHover: true,
      keyMap: ['ArrowLeft', 'ArrowRight']
    }
  });
  
  return (
    <div {...keyboard.containerProps}>
      {items.map((item, index) => (
        <div key={index} {...keyboard.getItemProps(index)}>
          {item}
        </div>
      ))}
    </div>
  );
}
```

**Parâmetros:**
- `totalItems: number` - Total de itens
- `currentIndex: number` - Índice atual
- `onIndexChange: (index) => void` - Callback de mudança
- `autoPlay?: boolean` - Auto-play (default: false)
- `autoPlayInterval?: number` - Intervalo em ms (default: 3000)
- `options?: { loop?, pauseOnHover?, keyMap? }` - Opções adicionais

---

##### `useTableOfContents`
Hook para gerar e gerenciar índice de conteúdo (Table of Contents).

```tsx
import { useTableOfContents } from '@rainersoft/ui';

function DocumentWithTOC() {
  const containerRef = useRef(null);
  
  const toc = useTableOfContents({
    containerRef,
    headings: ['h2', 'h3'],
    options: {
      offset: 100,
      smoothScroll: true,
      activeOnScroll: true,
      nested: true
    }
  });
  
  return (
    <div>
      <nav>
        {toc.items.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={toc.activeId === item.id ? 'active' : ''}
            onClick={() => toc.scrollToItem(item.id)}
            style={{ paddingLeft: `${item.level * 16}px` }}
          >
            {item.text}
          </a>
        ))}
      </nav>
      
      <article ref={containerRef}>
        <h2>Seção 1</h2>
        <h3>Subseção 1.1</h3>
        <h2>Seção 2</h2>
      </article>
    </div>
  );
}
```

**Parâmetros:**
- `containerRef: React.RefObject<HTMLElement>` - Ref do container
- `headings?: string[]` - Seletores de títulos (default: ['h2', 'h3'])
- `options?: { offset?, smoothScroll?, activeOnScroll?, nested? }` - Configurações

**Retorno:**
- `items: TocItem[]` - Array de itens do TOC
- `activeId: string | null` - ID do item ativo
- `scrollToItem: (itemId: string) => void` - Scroll para item

---

### 🔄 Hooks Migrados para @rainersoft/utils

Alguns hooks foram movidos para `@rainersoft/utils` para melhor organização:

| Hook | Novo Local | Motivo |
|------|------------|--------|
| `useAuth` | `@rainersoft/utils/hooks` | Autenticação genérica |
| `usePasswordStrength` | `@rainersoft/utils/hooks` | Validação de formulários |
| `useIntersectionObserver` | `@rainersoft/utils/hooks` | Utilidade DOM |
| `useToggleState` | `@rainersoft/utils/hooks` | State management |
| `useCounter` | `@rainersoft/utils/hooks` | State management |
| `useSmoothScroll` | `@rainersoft/utils/hooks` | Utilidade de scroll |
| `useScrollPosition` | `@rainersoft/utils/hooks` | Utilidade DOM |
| `useMobile` | `@rainersoft/utils/hooks` | Detecção de dispositivo |

**Exemplo de importação após migração:**
```tsx
// Antes (removido)
import { useAuth } from '@rainersoft/ui';

// Agora (correto)
import { useAuth } from '@rainersoft/utils/hooks';
```

---

### 🎯 Melhores Práticas

#### **Imports Otimizados**
```tsx
// ✅ Import individual (recomendado)
import { useTheme } from '@rainersoft/ui/hooks/use-theme';

// ✅ Import por categoria
import { useTheme, usePWA } from '@rainersoft/ui';

// ✅ Import de hooks de utils
import { useAuth, useMobile } from '@rainersoft/utils/hooks';
```

#### **Combinação com Componentes**
```tsx
import { Button, Card } from '@rainersoft/ui';
import { useTheme, usePWA } from '@rainersoft/ui';
import { useAuth, useMobile } from '@rainersoft/utils/hooks';

function AppHeader() {
  const { theme, toggle } = useTheme();
  const { isInstallable, install } = usePWA();
  const { user, logout } = useAuth();
  const isMobile = useMobile();
  
  return (
    <Card>
      <Button onClick={toggle}>
        Tema: {theme}
      </Button>
      {isInstallable && (
        <Button onClick={install}>Instalar App</Button>
      )}
      {user && (
        <Button onClick={logout}>Sair</Button>
      )}
    </Card>
  );
}
```

---

### 📚 Referência Completa

Para mais exemplos e casos de uso avançados, consulte:

- [Documentação de Componentes](./docs/01-COMPONENTES.md)
- [Guia de Design Tokens](./docs/02-DESIGN-TOKENS.md)
- [Exemplos de Integração](./docs/03-EXEMPLOS.md)

## 📝 Changelog

### v3.0.0 (2025-01-18)

**🚀 Migração de Hooks e Arquitetura Otimizada**

- ✅ **Migração de 8 Hooks**: Movidos hooks utilitários para `@rainersoft/utils`
- ✅ **Separação de Responsabilidades**: UI focado apenas em componentes específicos
- ✅ **Performance Otimizada**: -32KB de código removido do bundle UI
- ✅ **Documentação Completa**: Nova seção de hooks com exemplos detalhados
- ✅ **Imports Claros**: Guias de migração e melhores práticas

**Hooks Migrados para @rainersoft/utils:**
```diff
- useAuth (14KB)
- usePasswordStrength (8.7KB) 
- useIntersectionObserver (1.9KB)
- useToggleState (2.7KB)
- useCounter (1.9KB)
- useSmoothScroll (1KB)
- useScrollPosition (1.7KB)
- useMobile (1KB)
```

**Hooks Mantidos em @rainersoft/ui:**
```diff
✅ useTheme (4.5KB) - Essencial para design tokens
✅ usePWA (3.9KB) - Componente UI específico
✅ useCarouselKeyboard (5.9KB) - Específico de carousels
✅ useTableOfContents (7.3KB) - Específico de layout
```

**Nova Forma de Importar:**
```tsx
// Hooks de UI (mantidos)
import { useTheme, usePWA } from '@rainersoft/ui';

// Hooks de utilidade (migrados)
import { useAuth, useMobile } from '@rainersoft/utils/hooks';
```

---

### v2.1.0 (2024-12-15)

**🌟 Tree-Shaking e Imports Individuais**

- ✅ **Imports Otimizados**: Importe apenas componentes necessários
- ✅ **Bundle Size Reduzido**: Até 40% menor com imports seletivos
- ✅ **Componentes Sociais**: ActionButton, ShareMenu, ContentCard genéricos
- ✅ **Casos de Uso Documentados**: Exemplos para Blog, E-commerce, Dashboard
- ✅ **Performance**: Melhorias no build e carregamento

---

### v2.0.0 (2024-12-01)

**🎨 Refatoração Completa e Design Tokens**

- ✅ **Integração Total**: 100% integrado com `@rainersoft/design-tokens`
- ✅ **Zero Hardcoded Colors**: Todas as cores usam CSS variables
- ✅ **Componentes Reestruturados**: 5 categorias principais (UI, Forms, Layout, Feedback, Navigation)
- ✅ **Acessibilidade**: Padrão WCAG 2.1 AA em todos componentes
- ✅ **TypeScript**: Tipagem completa e strict mode

---

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
