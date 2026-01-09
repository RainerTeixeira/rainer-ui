# Componentes Sociais Genéricos

Esta pasta contém componentes sociais genéricos e reutilizáveis que podem ser usados em múltiplos contextos: blogs, e-commerce, dashboards, etc.

## 📦 Componentes Disponíveis

### 🔗 **Componentes Genéricos (Recomendados)**

#### **ActionButton**
Botão de ação genérico para qualquer tipo de interação toggleável.

```tsx
// Botão de curtir
<ActionButton
  icon={<Heart />}
  activeIcon={<Heart className="fill-current" />}
  count={likes}
  isActive={isLiked}
  onToggle={handleLike}
  activeLabel="Curtido"
  inactiveLabel="Curtir"
  activeColor="error"
/>

// Botão de favorito
<ActionButton
  icon={<Star />}
  activeIcon={<Star className="fill-current" />}
  isActive={isFavorited}
  onToggle={handleFavorite}
  activeColor="warning"
/>

// Botão de follow
<ActionButton
  icon={<UserPlus />}
  activeIcon={<UserCheck />}
  isActive={isFollowing}
  onToggle={handleFollow}
  activeLabel="Seguindo"
  inactiveLabel="Seguir"
  activeColor="success"
/>
```

#### **ShareMenu**
Menu de compartilhamento genérico com múltiplas plataformas.

```tsx
// Blog completo
<ShareMenu
  url="/blog/post-123"
  title="Como usar React Hooks"
  description="Aprenda os fundamentos..."
  platforms={['twitter', 'facebook', 'linkedin', 'whatsapp', 'copy', 'qr']}
/>

// E-commerce (foco WhatsApp)
<ShareMenu
  url="/product/laptop-pro"
  title="Laptop Pro - Super Oferta!"
  platforms={['whatsapp', 'facebook', 'telegram', 'copy']}
  showQRCode={false}
/>

// Dashboard minimal
<ShareMenu
  url="/dashboard/report/123"
  title="Relatório Mensal"
  platforms={['copy', 'email']}
  variant="ghost"
  size="sm"
/>
```

#### **ContentCard**
Card genérico para exibição de conteúdo com metadados e ações.

```tsx
// Blog post
<ContentCard
  title="Como usar React Hooks"
  description="Aprenda os fundamentos dos Hooks React..."
  image="/blog/react-hooks.jpg"
  category="Tutorial"
  date="2024-01-15"
  readTime={5}
  link="/blog/react-hooks"
  actions={{
    like: { count: 42, active: true },
    share: { url: "/blog/react-hooks", title: "Como usar React Hooks" },
    bookmark: { active: false }
  }}
/>

// Produto
<ContentCard
  title="Laptop Pro Max"
  description="Notebook potente com 16GB RAM..."
  image="/products/laptop-pro.jpg"
  price="R$ 4.999,90"
  badge="Novo"
  link="/products/laptop-pro"
  variant="product"
  actions={{
    favorite: { count: 128, active: false },
    share: { url: "/products/laptop-pro", title: "Laptop Pro Max" }
  }}
/>

// Notícia
<ContentCard
  title="Descoberta Científica Revolucionária"
  description="Pesquisadores encontram solução para..."
  image="/news/discovery.jpg"
  category="Ciência"
  date="2024-01-15"
  source="BBC News"
  variant="news"
  actions={{
    share: { url: "/news/discovery", title: "Descoberta Científica" }
  }}
/>
```

### 🔗 **Componentes Específicos (Legacy)**

#### **LikeButton**
Botão de curtir específico (use ActionButton para novos projetos).

```tsx
<LikeButton
  itemId="post-123"
  initialLikes={42}
  initialIsLiked={true}
  variant="compact"
  activeColor="error"
  onLike={(likes, itemId) => console.log('Liked:', likes, itemId)}
/>
```

#### **BookmarkButton**
Botão de salvar específico (use ActionButton para novos projetos).

```tsx
<BookmarkButton
  itemId="article-456"
  initialIsBookmarked={false}
  variant="ghost"
  activeColor="warning"
  activeLabel="Salvo"
  inactiveLabel="Salvar"
  onBookmark={(itemId) => saveArticle(itemId)}
/>
```

#### **ShareButton**
Botão de compartilhamento específico (use ShareMenu para novos projetos).

```tsx
<ShareButton
  url="/blog/post-123"
  title="Meu Post"
  description="Descrição incrível"
  variant="outline"
  onShare={(platform) => analytics.track('share', { platform })}
/>
```

#### **ReadingTime**
Exibição de tempo de leitura.

```tsx
// Simples
<ReadingTime readTime={5} />

// Customizado
<ReadingTime 
  readTime={15}
  unit="minutes"
  text="minutos de leitura"
  size="lg"
  color="primary"
  icon={<Clock className="h-3 w-3" />}
/>
```

## 🎯 **Casos de Uso por Projeto**

### **Blog**
```tsx
// Post card completo
<ContentCard
  title="Título do Post"
  description="Resumo do conteúdo..."
  category="Tutorial"
  date="2024-01-15"
  readTime={8}
  actions={{
    like: { count: 42, active: true },
    bookmark: { active: false },
    share: { url: "/blog/post", title: "Título do Post" }
  }}
/>

// Tempo de leitura
<ReadingTime readTime={8} />
```

### **E-commerce**
```tsx
// Card de produto
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

// Botão de favorito
<ActionButton
  icon={<Heart />}
  activeIcon={<Heart className="fill-current" />}
  isActive={isFavorited}
  onToggle={toggleFavorite}
  activeColor="error"
  activeLabel="Favoritado"
  inactiveLabel="Favoritar"
/>
```

### **Dashboard**
```tsx
// Card de relatório
<ContentCard
  title="Relatório Mensal"
  description="Análise de desempenho..."
  date="2024-01-15"
  variant="minimal"
  actions={{
    share: { url: "/dashboard/report/123", title: "Relatório Mensal" }
  }}
/>

// Menu de compartilhamento
<ShareMenu
  url="/dashboard/report/123"
  title="Relatório Mensal"
  platforms={['copy', 'email']}
  variant="ghost"
  size="sm"
/>
```

### **Social Media**
```tsx
// Post com ações
<ContentCard
  title="Post do Usuário"
  description="Conteúdo do post..."
  category="Geral"
  date="2024-01-15"
  actions={{
    like: { count: 234, active: true },
    bookmark: { active: false },
    share: { url: "/post/123", title: "Post do Usuário" },
    comment: { count: 45 }
  }}
/>
```

## 🎨 **Customização**

### **Cores Disponíveis**
- `primary` - Cor principal do tema
- `success` - Verde para sucesso
- `warning` - Amarelo para atenção
- `error` - Vermelho para erro/curtir
- `info` - Azul para informação

### **Variantes Visuais**
- `default` - Padrão com background
- `outline` - Apenas borda
- `ghost` - Sem borda, hover com background
- `minimal` - Mínimo, sem decorações

### **Tamanhos**
- `sm` - Pequeno
- `default` - Padrão
- `lg` - Grande
- `icon` - Apenas ícone

## 🔄 **Migração de Legacy → Genérico**

### **LikeButton → ActionButton**
```tsx
// Antes
<LikeButton
  postId="post-123"
  initialLikes={42}
  initialIsLiked={true}
  onLike={(likes) => console.log(likes)}
/>

// Depois
<ActionButton
  icon={<Heart />}
  activeIcon={<Heart className="fill-current" />}
  count={42}
  isActive={true}
  onToggle={(isActive) => console.log(isActive ? 43 : 41)}
  activeColor="error"
  activeLabel="Curtido"
  inactiveLabel="Curtir"
/>
```

### **BookmarkButton → ActionButton**
```tsx
// Antes
<BookmarkButton
  postId="post-123"
  initialIsBookmarked={false}
  onBookmark={() => console.log('saved')}
/>

// Depois
<ActionButton
  icon={<Bookmark />}
  activeIcon={<Bookmark className="fill-current" />}
  isActive={isBookmarked}
  onToggle={(isActive) => console.log(isActive ? 'saved' : 'removed')}
  activeColor="warning"
  activeLabel="Salvo"
  inactiveLabel="Salvar"
/>
```

## 📚 **Best Practices**

1. **Use ActionButton** para novas implementações
2. **Use ShareMenu** em vez de ShareButton
3. **Use ContentCard** para exibir conteúdo com ações
4. **Prefira componentes genéricos** para maior reutilização
5. **Customize cores** baseado no contexto (error para curtir, warning para favoritar)
6. **Forneça callbacks** para integrar com backend/analytics

## 🔧 **Instalação e Importação**

```tsx
import {
  ActionButton,
  ShareMenu,
  ContentCard,
  LikeButton,
  BookmarkButton,
  ShareButton,
  ReadingTime
} from '@rainersoft/ui';
```

Os componentes estão prontos para uso em qualquer projeto React com TypeScript!
