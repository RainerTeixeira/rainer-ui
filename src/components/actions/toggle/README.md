# Toggle

Componente Toggle da biblioteca @rainersoft/ui.

## Uso Básico

```tsx
import { Toggle } from '@rainersoft/ui';

function Example() {
  return <Toggle />;
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
  <Toggle />
</div>

// Dark theme
<div data-theme="dark">
  <Toggle />
</div>
```
