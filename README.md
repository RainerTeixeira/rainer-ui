# @rainersoft/ui

> Componentes UI reutilizáveis construídos com Radix UI, Tailwind CSS e design tokens

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
// No seu app principal, importe os CSS Variables
import '@rainersoft/design-tokens/src/css-vars.css';

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

```
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
│   │   └── utils.ts       # Função cn() e helpers
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

## 📝 Licença

MIT © Rainer Teixeira
