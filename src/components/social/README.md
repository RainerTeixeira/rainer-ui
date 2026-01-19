# Social Components

Componentes sociais universais para qualquer plataforma. Prontos para usar com design tokens integrados.

## 🚀 Uso Simples

```tsx
import { LikeButton, ShareButton, SocialBar } from '@rainersoft/ui/social';

// Botão individual
<LikeButton count={42} />

// Múltiplas ações
<SocialBar 
  actions={[
    { id: 'like', type: 'like', label: 'Curtir', icon: <Heart />, count: 42 },
    { id: 'share', type: 'share', label: 'Compartilhar', icon: <Share2 /> }
  ]}
/>
```

## 📦 Componentes

### SocialBar
Barra universal para qualquer combinação de ações sociais.

### LikeButton
Botão de curtir com contador e animação.

### ShareButton  
Botão de compartilhamento para múltiplas plataformas.

### BookmarkButton
Botão de salvar/favoritar com persistência.

## 🎨 Variações

- **default**: Padrão com bordas e fundo
- **minimal**: Limpo, sem fundo
- **elevated**: Com sombra e profundidade
- **neon**: Efeito brilhante moderno

## 🎯 Propriedades

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|----------|
| actions | `SocialAction[]` | - | Lista de ações (componente Social) |
| layout | `'horizontal' \| 'vertical' \| 'grid' \| 'stack'` | `'horizontal'` | Layout dos botões |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamanho dos botões |
| variant | `'default' \| 'minimal' \| 'elevated' \| 'neon'` | `'default'` | Estilo visual |
| theme | `'light' \| 'dark' \| 'auto'` | `'auto'` | Tema de cores |
| showCount | `boolean` | `true` | Exibir contadores |
| animated | `boolean` | `true` | Animações ativadas |

## 🔧 Design Tokens

Integrado com `@rainersoft/design-tokens`:

- **Cores**: primary, success, warning, error, info, gray
- **Motion**: durações e easings padronizados
- **Shadows**: sombras consistentes
- **Radius**: bordas arredondadas unificadas

## 💾 Persistência

Estado automaticamente salvo em `localStorage`:

```tsx
// Estado persistido automaticamente
<LikeButton itemId="post-123" />

// Recupera estado ao recarregar página
```

## 🌐 Temas

Suporte completo para temas claro/escuro:

```tsx
// Automático baseado no sistema
<Social theme="auto" />

// Forçar tema específico
<Social theme="dark" />
```

## 📱 Responsivo

Layouts adaptativos para diferentes tamanhos de tela:

- **grid**: 2-4 colunas responsivas
- **stack**: empilhamento automático
- **horizontal/vertical**: fixos

## 🎭 Animações

Animações suaves com Framer Motion:

- **Hover**: escala sutil
- **Click**: feedback tátil  
- **State**: transições de estado
- **Counter**: animação de números

## 🔧 Personalização

```tsx
// Ação customizada
<Social 
  actions={[
    {
      id: 'custom',
      type: 'custom',
      label: 'Custom',
      icon: <Star />,
      color: 'warning',
      onClick: () => console.log('custom action')
    }
  ]}
/>
```

## 🏗️ Arquitetura

- **Sem dependências externas**: Tudo integrado
- **TypeScript**: Tipagem completa
- **Performance**: Otimizado com hooks
- **Acessibilidade**: ARIA labels dinâmicos
- **Universal**: Funciona em qualquer plataforma

## 📖 Exemplos

### Post de Blog
```tsx
<Social 
  actions={[
    { id: 'like', type: 'like', label: 'Curtir', icon: <Heart />, count: 42 },
    { id: 'bookmark', type: 'bookmark', label: 'Salvar', icon: <Bookmark /> },
    { id: 'share', type: 'share', label: 'Compartilhar', icon: <Share2 /> }
  ]}
  variant="minimal"
  size="sm"
/>
```

### Perfil Social
```tsx
<Social 
  actions={[
    { id: 'follow', type: 'follow', label: 'Seguir', icon: <Users />, color: 'primary' },
    { id: 'message', type: 'comment', label: 'Mensagem', icon: <MessageSquare />, color: 'info' }
  ]}
  layout="vertical"
  variant="elevated"
/>
```

### E-commerce
```tsx
<Social 
  actions={[
    { id: 'like', type: 'like', label: 'Favoritar', icon: <Heart />, count: 128, color: 'error' },
    { id: 'share', type: 'share', label: 'Compartilhar', icon: <Share2 />, color: 'primary' }
  ]}
  variant="neon"
  animated={true}
/>
```

---

**Versão**: 3.0.0  
**Autor**: Rainer Teixeira  
**Licença**: MIT
