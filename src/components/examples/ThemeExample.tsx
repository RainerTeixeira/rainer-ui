/**
 * Componente de Exemplo - Demonstração de Temas
 * 
 * Mostra como usar CSS Variables + Tailwind para temas dinâmicos
 * 
 * @module @rainersoft/ui/components/examples
 */

import * as React from 'react';
import { Button } from '../actions/button/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../layout/card/Card';
import { Input } from '../forms/input/Input';

export function ThemeExample() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  
  return (
    <div data-theme={theme} className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Theme Switcher */}
        <Card>
          <CardHeader>
            <CardTitle>Sistema de Temas com CSS Variables</CardTitle>
            <CardDescription>
              Troque entre temas light e dark instantaneamente
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Button 
              onClick={() => setTheme('light')}
              variant={theme === 'light' ? 'default' : 'outline'}
            >
              ☀️ Light
            </Button>
            <Button 
              onClick={() => setTheme('dark')}
              variant={theme === 'dark' ? 'default' : 'outline'}
            >
              🌙 Dark
            </Button>
          </CardContent>
        </Card>
        
        {/* Color Palette */}
        <Card>
          <CardHeader>
            <CardTitle>Paleta de Cores</CardTitle>
            <CardDescription>
              Cores definidas via CSS Variables
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-20 rounded-md bg-primary" />
              <p className="text-sm font-medium">Primary</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-md bg-secondary" />
              <p className="text-sm font-medium">Secondary</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-md bg-accent" />
              <p className="text-sm font-medium">Accent</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-md bg-destructive" />
              <p className="text-sm font-medium">Destructive</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-md bg-muted" />
              <p className="text-sm font-medium">Muted</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-md border-2 border-border" />
              <p className="text-sm font-medium">Border</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-md bg-card" />
              <p className="text-sm font-medium">Card</p>
            </div>
            <div className="space-y-2">
              <div className="h-20 rounded-md bg-popover" />
              <p className="text-sm font-medium">Popover</p>
            </div>
          </CardContent>
        </Card>
        
        {/* Components Showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Componentes</CardTitle>
            <CardDescription>
              Todos os componentes herdam automaticamente o tema
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            
            <div className="space-y-2">
              <Input placeholder="Input padrão" />
              <Input placeholder="Input com erro" aria-invalid="true" />
              <Input placeholder="Input desabilitado" disabled />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Card Aninhado</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Este card está dentro de outro card para mostrar a hierarquia.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md border-primary">
                <CardHeader>
                  <CardTitle className="text-lg">Card Destacado</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Com borda colorida usando tokens.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
        
        {/* CSS Variables Info */}
        <Card>
          <CardHeader>
            <CardTitle>Como Funciona</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-muted rounded-md">
              <code className="text-sm">
                {`// CSS Variables definidas em @rainersoft/design-tokens
:root {
  --color-primary: 14 165 233; /* RGB values */
  --radius-md: 8px;
}

// Tailwind consome as variáveis
colors: {
  primary: 'rgb(var(--color-primary) / <alpha-value>)'
}

// Componentes usam classes do Tailwind
<Button className="bg-primary text-primary-foreground" />`}
              </code>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Mudando o atributo <code>data-theme</code>, todos os componentes
              se adaptam instantaneamente aos novos valores das CSS Variables.
            </p>
          </CardContent>
        </Card>
        
      </div>
    </div>
  );
}

export default ThemeExample;
