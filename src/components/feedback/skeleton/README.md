# Skeleton

Componente Skeleton da biblioteca @rainersoft/ui.

## Uso Básico

```tsx
import { Skeleton } from '@rainersoft/ui';

function Example() {
  return <Skeleton />;
}
```

## Props

Consulte a documentação TypeScript para lista completa de props disponíveis.

## Exemplos Avançados

Para mais exemplos e casos de uso, consulte o Storybook:

```bash
pnpm storybook
```

## Temas

Este componente suporta temas dinâmicos através de CSS Variables:

```tsx
// Light theme (padrão)
<div data-theme="light">
  <Skeleton />
</div>

// Dark theme
<div data-theme="dark">
  <Skeleton />
</div>
```
