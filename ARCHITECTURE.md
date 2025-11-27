# 🏗️ Arquitetura do @rainersoft/ui

## 📐 Visão Geral

O `@rainersoft/ui` segue uma arquitetura em camadas que prioriza a **fonte única de verdade** para tokens de design.

```
┌─────────────────────────────────────────┐
│   @rainersoft/design-tokens             │
│   ├── tokens/*.json (Fonte de Verdade)  │
│   ├── ES Modules Exports                │
│   └── CSS Variables                     │
└──────────────┬──────────────────────────┘
               │ import { tokens, motionTokens }
               ↓
┌─────────────────────────────────────────┐
│   @rainersoft/ui                        │
│   ├── Components (Radix UI + Tailwind)  │
│   ├── Utilities (theme, color, motion)  │
│   └── Re-exports (conveniência)         │
└──────────────┬──────────────────────────┘
               │ import { Button, getThemeColors }
               ↓
┌─────────────────────────────────────────┐
│   Aplicação Frontend                    │
│   └── Usa components + utilities         │
│       sem hardcode                      │
└─────────────────────────────────────────┘
```

---

## 🎯 Princípios

### 1. **Fonte Única de Verdade**
- `@rainersoft/design-tokens` é a **única** fonte de tokens
- Todos os valores vêm de `tokens/*.json`
- Sem duplicação de valores em múltiplos lugares

### 2. **Zero Hardcode**
- Nenhum valor de cor, espaçamento ou timing está hardcoded
- Utilities helper para acessar tokens dinamicamente
- Type-safe com TypeScript

### 3. **Imports ES Modules**
- Sem dependência de `tokens.json` compilado
- Tree-shaking otimizado
- Melhor performance em bundle

---

## 📦 Estrutura de Dependências

### Antes (v1.1.0)
```typescript
// ❌ Dependia de tokens.json compilado
let tokensJson: any = null;
try {
  tokensJson = require('@rainersoft/design-tokens/formats/tokens.json');
} catch (e) {
  console.warn('tokens.json não disponível');
}
```

### Agora (v1.2.0+)
```typescript
// ✅ Import direto via ES Modules
import { tokens, motionTokens } from '@rainersoft/design-tokens';

export const motion = motionTokens;
export function getThemeColors(theme) {
  return tokens.colors[theme];
}
```

---

## 🛠️ Utilities Disponíveis

### Color Utilities
```typescript
import {
  getTokenColor,      // Obtém cor por nome de token
  hexToRGB,           // Converte hex → RGB
  hexToRGBA,          // Converte hex → RGBA
  overlayFromToken,   // Gera overlay com alpha
  getContrastColor,   // Calcula cor de contraste
  getLuminance,       // Calcula luminosidade
} from '@rainersoft/ui';
```

### Theme Utilities (Novo!)
```typescript
import {
  getThemeColors,          // Todas as cores de um tema
  getColorFromTheme,       // Cor específica de um tema
  getSemanticColors,       // Cores semantic (text, bg, border)
  SEMANTIC_COLORS,         // Constante pré-calculada
  getStatusColor,          // Cores de status (success, error, etc)
  getBrandColor,           // Cores de marca (primary, secondary)
  generateTailwindClasses, // Gera classes Tailwind dinamicamente
} from '@rainersoft/ui';
```

### Motion Utilities
```typescript
import {
  motion,                 // Objeto completo de motion tokens
  ANIMATION_DELAYS,       // Delays pré-definidos
  ANIMATION_DURATIONS,    // Durações pré-definidas
  ANIMATION_EASINGS,      // Easings pré-definidos
} from '@rainersoft/ui';
```

---

## 🚀 Exemplos de Uso

### Sem Hardcode - Cores
```typescript
// ❌ Antes (hardcode)
const primaryColor = '#0891b2';
const textColor = '#1f2937';

// ✅ Agora (dinâmico)
import { getThemeColors, getStatusColor } from '@rainersoft/ui';

const colors = getThemeColors('light');
const primaryColor = colors.brand.primary;
const successColor = getStatusColor('success', 'light');
```

### Sem Hardcode - Semantic Colors
```typescript
import { SEMANTIC_COLORS } from '@rainersoft/ui';

function MyComponent({ theme = 'light' }) {
  const colors = SEMANTIC_COLORS[theme];
  
  return (
    <div style={{
      color: colors.text.primary,
      backgroundColor: colors.background.primary,
      borderColor: colors.border.default,
    }}>
      Conteúdo
    </div>
  );
}
```

### Sem Hardcode - Tailwind Classes
```typescript
import { generateTailwindClasses } from '@rainersoft/ui';

const buttonClasses = generateTailwindClasses({
  bg: 'primary',
  text: 'primary-foreground',
  rounded: 'md',
  shadow: 'sm',
  p: '4',
});
// → "bg-primary text-primary-foreground rounded-md shadow-sm p-4"
```

### Sem Hardcode - Motion
```typescript
import { motion, ANIMATION_DURATIONS } from '@rainersoft/ui';
import { motion as framerMotion } from 'framer-motion';

function AnimatedComponent() {
  return (
    <framerMotion.div
      animate={{ opacity: 1 }}
      transition={{
        duration: Number(motion.duration.normal.replace('ms', '')) / 1000,
        ease: motion.easing.easeInOut,
      }}
    >
      Conteúdo animado
    </framerMotion.div>
  );
}
```

---

## 🔄 Migração de Hardcode

### Identificar Hardcodes
```bash
# Buscar valores hardcoded
grep -r "#[0-9a-fA-F]\{6\}" src/  # Cores hex
grep -r "rgb(" src/                # Valores RGB
grep -r "rgba(" src/               # Valores RGBA
```

### Substituir por Utilities
```typescript
// ❌ Hardcode
const SERVICE_COLORS = {
  primary: '#0891b2',    // cyan-600
  secondary: '#9333ea',  // purple-600
  success: '#059669',    // emerald-600
};

// ✅ Dinâmico
import { getThemeColors, getStatusColor } from '@rainersoft/ui';

const colors = getThemeColors('light');
const SERVICE_COLORS = {
  primary: colors.brand.primary,
  secondary: colors.brand.secondary,
  success: getStatusColor('success'),
};
```

---

## 📚 Documentação Adicional

- **Design Tokens**: `@rainersoft/design-tokens/README.md`
- **Componentes**: `@rainersoft/ui/README.md`
- **Changelog**: `@rainersoft/ui/CHANGELOG.md`

---

## 🎨 Filosofia de Design

1. **Tokens First**: Todos os valores vêm de tokens
2. **Type-Safe**: TypeScript garante type-safety
3. **Performance**: Tree-shaking e bundle otimizado
4. **DX**: Developer Experience com autocomplete
5. **Zero Config**: Funciona out-of-the-box

---

Última atualização: v1.2.0
