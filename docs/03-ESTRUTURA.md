# 📁 Estrutura do @rainersoft/ui

## Organização Atual (v2.1.0)

```
@rainersoft/ui/
├── src/
│   ├── components/              # Componentes React
│   │   ├── ui/                 # 🎨 BÁSICOS (Avatar, Button, Slider, Toggle, etc)
│   │   ├── forms/              # 📝 FORMULÁRIOS (Input, Select, Checkbox, etc)
│   │   ├── layout/             # 🏗️ LAYOUT (Card, Sheet, Table, ScrollArea, etc)
│   │   ├── feedback/           # 💬 FEEDBACK (Alert, Badge, Progress, Skeleton, etc)
│   │   ├── navigation/         # 🧭 NAVEGAÇÃO (Accordion, Tabs, Command, etc)
│   │   ├── overlays/           # 🎭 OVERLAYS (Dialog, Popover, Tooltip, etc)
│   │   ├── data-display/       # 📊 DATA DISPLAY (Calendar, Carousel)
│   │   ├── effects/            # ✨ EFFECTS (Particles, Stars, Matrix, etc)
│   │   ├── utilities/          # 🛠️ UTILITIES (BackToTop, ThemeToggle, etc)
│   │   └── providers/          # 🔌 PROVIDERS (ThemeProvider)
│   ├── hooks/                  # React Hooks personalizados
│   ├── lib/                    # Bibliotecas e utilitários
│   │   ├── utils.ts           # Utilitários gerais (cn, motion)
│   │   ├── color-utils.ts     # Manipulação de cores
│   │   ├── theme-utils.ts     # Utilitários de tema
│   │   ├── image-utils.ts     # Manipulação de imagens
│   │   ├── scroll-utils.ts    # Scroll utilities
│   │   └── cookies/           # Cookie management
│   ├── styles/                 # Estilos globais CSS
│   ├── types/                  # TypeScript types
│   └── index.ts                # Exports principais
├── stories/                     # Storybook stories
├── test/                        # Testes
├── dist/                        # Build output
├── cli/                         # CLI tools
└── docs/                        # Documentação

```

## 🎨 Categorias Principais

### 1. UI - Componentes Básicos
**Localização:** `src/components/ui/`

Componentes fundamentais e reutilizáveis:
- `Avatar` - Avatares com iniciais e imagens
- `Button` - Botões de ação
- `Badge` - Etiquetas e marcadores  
- `Input` - Campos de entrada
- `Slider` - Controles deslizantes
- `Toggle` - Interruptores

**Export:**
```typescript
import { Avatar, Button, Badge, Slider, Toggle } from '@rainersoft/ui';
```

---

### 2. Forms - Formulários
**Localização:** `src/components/forms/`

Componentes de formulário completos:
- `Form` - Contexto de formulário
- `Input` - Campo de texto
- `Textarea` - Área de texto
- `Select` - Seletor dropdown
- `Checkbox` - Caixa de seleção
- `Radio` - Botão de rádio
- `Switch` - Interruptor
- `Label` - Rótulo

**Export:**
```typescript
import { Form, Input, Select, Checkbox } from '@rainersoft/ui';
```

---

### 3. Layout - Layout
**Localização:** `src/components/layout/`

Componentes de estrutura e layout:
- `Card` - Cartões de conteúdo
- `Sheet` - Painéis laterais
- `Table` - Tabelas
- `ScrollArea` - Área rolável
- `Separator` - Separadores
- `AspectRatio` - Proporção de aspecto

**Export:**
```typescript
import { Card, Sheet, Table, ScrollArea } from '@rainersoft/ui';
```

---

### 4. Feedback - Feedback
**Localização:** `src/components/feedback/`

Componentes de resposta ao usuário:
- `Alert` - Alertas informativos
- `AlertDialog` - Diálogos de alerta
- `Badge` - Marcadores de status
- `Progress` - Barras de progresso
- `Skeleton` - Loading placeholders
- `Sonner` - Toast notifications

**Export:**
```typescript
import { Alert, AlertDialog, Progress, Skeleton } from '@rainersoft/ui';
```

---

### 5. Navigation - Navegação
**Localização:** `src/components/navigation/`

Componentes de navegação:
- `Accordion` - Acordeões expansíveis
- `Tabs` - Abas
- `NavigationMenu` - Menu de navegação
- `Collapsible` - Conteúdo recolhível
- `Command` - Paleta de comandos

**Export:**
```typescript
import { Accordion, Tabs, NavigationMenu, Command } from '@rainersoft/ui';
```

---

## 📦 Categorias Extras

### Overlays
Componentes sobrepostos:
- Dialog, Popover, Tooltip, Dropdown, ContextMenu, HoverCard

### Data Display
Visualização de dados:
- Calendar, Carousel

### Effects
Efeitos visuais:
- CelestialBackground, FloatingGrid, MatrixBackground, ParticlesEffect, StarsBackground

### Utilities
Utilitários diversos:
- BackToTop, CookieBanner, ErrorBoundary, InstallPrompt, LoadingScreen, PageHeader, ThemeToggle, UpdateNotification, VisuallyHidden

### Providers
Context providers:
- ThemeProvider

---

## 🔧 Utilities e Libs

### Color Utils
```typescript
import { 
  getTokenColor, 
  hexToRGB, 
  hexToRGBA, 
  overlayFromToken,
  getContrastColor 
} from '@rainersoft/ui';
```

### Theme Utils
```typescript
import { 
  getThemeColors, 
  getColorFromTheme,
  getSemanticColors,
  SEMANTIC_COLORS,
  getStatusColor,
  getBrandColor,
  generateTailwindClasses 
} from '@rainersoft/ui';
```

### Motion Utils
```typescript
import { 
  motion, 
  ANIMATION_DELAYS,
  ANIMATION_DURATIONS,
  ANIMATION_EASINGS 
} from '@rainersoft/ui';
```

### Image Utils
```typescript
import { 
  isAcceptedFormat,
  supportsWebP,
  getImageInfo,
  resizeImage,
  convertToWebP,
  prepareImageForUpload 
} from '@rainersoft/ui';
```

---

## 🎯 Princípios de Organização

### 1. **Categorização Funcional**
Componentes agrupados por função e propósito, não por implementação

### 2. **Zero Redundância**
- ✅ Um Avatar consolidado em `ui/`
- ✅ Button, Slider, Toggle centralizados em `ui/`
- ❌ Sem duplicação de componentes

### 3. **Exports Limpos**
```typescript
// ✅ Direto e simples
export * from './ui';
export * from './forms';
export * from './layout';

// ❌ Evitar re-exports desnecessários
```

### 4. **Fonte Única de Verdade**
Todos os tokens vêm de `@rainersoft/design-tokens`:
- Cores, espaçamentos, animações
- Zero hardcode
- Type-safe

---

## 📝 Mudanças Recentes

### v2.1.0 - Reorganização Estrutural

**Removido:**
- ❌ `src/components/actions/` (consolidado em `ui/`)
- ❌ `src/components/data-display/avatar/` (duplicado)

**Consolidado:**
- ✅ Button, Slider, Toggle → `ui/`
- ✅ Avatar único em `ui/`
- ✅ Effects completos (CelestialBackground, FloatingGrid)

**Melhorado:**
- ✅ Exports organizados alfabeticamente
- ✅ Documentação atualizada
- ✅ Zero redundância

---

## 🚀 Como Usar

### Importar Componentes
```typescript
// Componentes principais
import { Button, Avatar, Card, Alert } from '@rainersoft/ui';

// Utilities
import { cn, getThemeColors } from '@rainersoft/ui';

// Styles
import '@rainersoft/ui/styles/global.css';
```

### Estrutura Recomendada em Projetos
```
app/
├── components/           # Componentes específicos do app
│   └── feature-x/
└── lib/
    └── ui.ts            # Re-exports do @rainersoft/ui
```

---

## 📚 Referências

- **Design Tokens:** [`@rainersoft/design-tokens`](../../rainer-design-tokens)
- **Arquitetura:** [`01-ARQUITETURA.md`](./01-ARQUITETURA.md)
- **Changelog:** [`CHANGELOG.md`](../CHANGELOG.md)
- **README:** [`README.md`](../README.md)

---

**Última atualização:** v2.1.0 (Janeiro 2026)
