# Sistema de Temas - @rainersoft/ui

## Overview

Sistema completo de gerenciamento de temas integrado com design tokens, pronto para usar em qualquer projeto Next.js.

## 🚀 Setup Rápido

### 1. Instalação das Dependências

```bash
# Bibliotecas necessárias
npm install next-themes @rainersoft/ui @rainersoft/design-tokens
```

### 2. Configuração do Layout

```tsx
// app/layout.tsx
import { ThemeProvider } from '@rainersoft/ui';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### 3. Usando o ThemeToggle

```tsx
// Em qualquer componente
import { ThemeToggle } from '@rainersoft/ui';

export function MyComponent() {
  return (
    <div>
      <ThemeToggle />
    </div>
  );
}
```

## 🎨 Design Tokens Integration

O sistema usa design tokens do `@rainersoft/design-tokens` para garantir consistência:

```css
/* Variáveis CSS automáticas */
:root {
  --color-surface: #ffffff;
  --color-surface-hover: #f9fafb;
  --color-border: #e5e7eb;
  --color-text-primary: #111827;
  --color-text-secondary: #6b7280;
}

.dark {
  --color-surface: #1f2937;
  --color-surface-hover: #374151;
  --color-border: #4b5563;
  --color-text-primary: #f9fafb;
  --color-text-secondary: #d1d5db;
}
```

## 🪝 useTheme Hook

Hook personalizado com tipagem melhorada e funções convenientes:

```tsx
import { useTheme } from '@rainersoft/ui';

function ThemeControls() {
  const { 
    theme,           // 'light' | 'dark' | 'system'
    resolvedTheme,   // 'light' | 'dark'
    isDark,         // boolean
    isLight,        // boolean
    isSystem,       // boolean
    toggle,         // () => void
    setLight,       // () => void
    setDark,        // () => void
    setSystem       // () => void
  } = useTheme();

  return (
    <div>
      <p>Tema atual: {theme}</p>
      <p>Resolvido: {resolvedTheme}</p>
      <p>Modo escuro: {isDark ? 'Sim' : 'Não'}</p>
      
      <button onClick={toggle}>Alternar</button>
      <button onClick={setLight}>Claro</button>
      <button onClick={setDark}>Escuro</button>
      <button onClick={setSystem}>Sistema</button>
    </div>
  );
}
```

## 🎯 Componentes Tematizados

### Card com Tema

```tsx
import { cn } from '@rainersoft/ui';

function ThemedCard({ children, className }) {
  return (
    <div className={cn(
      'bg-surface border border-border rounded-lg p-4',
      'hover:bg-surface-hover transition-colors',
      'dark:bg-surface-dark dark:border-border-dark dark:hover:bg-surface-hover-dark',
      className
    )}>
      {children}
    </div>
  );
}
```

### Texto com Tema

```tsx
function ThemedText({ children, variant = 'primary' }) {
  const variants = {
    primary: 'text-text-primary dark:text-text-primary-dark',
    secondary: 'text-text-secondary dark:text-text-secondary-dark',
    muted: 'text-text-muted dark:text-text-muted-dark'
  };

  return <p className={variants[variant]}>{children}</p>;
}
```

## ⚙️ Configuração Avançada

### Customizando ThemeProvider

```tsx
<ThemeProvider
  attribute="class"           // Aplica tema como classe
  defaultTheme="dark"         // Tema padrão
  enableSystem={true}         // Detecta preferência do sistema
  storageKey="my-app-theme"   // Chave customizada no localStorage
>
  {children}
</ThemeProvider>
```

### CSS Customizado

```css
/* globals.css */
@import '@rainersoft/design-tokens/css-vars.css';

/* Suas customizações */
.custom-component {
  background-color: var(--color-surface);
  border-color: var(--color-border);
  color: var(--color-text-primary);
}

.dark .custom-component {
  background-color: var(--color-surface-dark);
  border-color: var(--color-border-dark);
  color: var(--color-text-primary-dark);
}
```

## 🔄 Migração de Projetos

### De CSS Manual para Design Tokens

**Antes:**
```css
.button {
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  color: #111827;
}

.dark .button {
  background-color: #1f2937;
  border: 1px solid #4b5563;
  color: #f9fafb;
}
```

**Depois:**
```tsx
<button className="bg-surface border border-border text-text-primary dark:bg-surface-dark dark:border-border-dark dark:text-text-primary-dark">
  Botão
</button>
```

## 📱 PWA Support

O sistema funciona perfeitamente com PWAs:

```tsx
// Detecta mudança de tema e atualiza meta tag
useEffect(() => {
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.content = isDark ? '#1f2937' : '#ffffff';
  }
}, [isDark]);
```

## 🐛 Troubleshooting

### Hydration Mismatch

Se encontrar erro de hidratação:
1. Use `suppressHydrationWarning` no HTML/body
2. Verifique se o componente usa estado `mounted`

```tsx
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) {
  return <div>Placeholder</div>;
}
```

### Classes Não Aplicam

1. Verifique se `@rainersoft/design-tokens/css-vars.css` está importado
2. Confirme que `ThemeProvider` envolve a aplicação
3. Use classes com prefixo `dark:` para modo escuro

## 🎨 Temas Customizados

Para criar temas customizados:

```tsx
// theme-provider.tsx
export function CustomThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="custom"
      themes={['light', 'dark', 'custom']}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

// globals.css
.custom {
  --color-surface: #fef3c7;
  --color-border: #f59e0b;
  --color-text-primary: #92400e;
}
```

## 📋 Checklist de Implementação

- [ ] Instalar dependências
- [ ] Configurar ThemeProvider no layout
- [ ] Importar CSS variables
- [ ] Usar ThemeToggle onde necessário
- [ ] Aplicar classes de tema nos componentes
- [ ] Testar alternância de temas
- [ ] Verificar persistência no localStorage
- [ ] Testar em modo escuro/claro do sistema

## 🔗 Links Úteis

- [next-themes Documentation](https://github.com/pacocoursey/next-themes)
- [@rainersoft/design-tokens](./DESIGN_TOKENS.md)
- [Tailwind CSS Dark Mode](https://tailwindcss.com/docs/dark-mode)
