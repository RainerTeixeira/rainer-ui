# Dialog

Componente Dialog da biblioteca @rainersoft/ui.

## Uso Básico

```tsx
import { Dialog } from '@rainersoft/ui';

function Example() {
  return <Dialog />;
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
  <Dialog />
</div>

// Dark theme
<div data-theme="dark">
  <Dialog />
</div>
```
