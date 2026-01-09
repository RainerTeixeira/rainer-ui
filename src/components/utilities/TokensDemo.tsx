/**
 * Design Tokens Demo Component
 *
 * Componente de demonstração do uso dos design tokens do @rainersoft/design-tokens
 * Mostra exemplos práticos de uso de cores, espaçamentos, tipografia e raios.
 *
 * @module components/ui/tokens-demo
 * @fileoverview Componente de demonstração dos design tokens
 * @author Rainer Teixeira
 * @version 1.0.0
 */

import { Card, CardContent, CardHeader, CardTitle } from '../layout/card';
import { useEffect, useState } from 'react';

export function TokensDemo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  // Cores hardcoded para evitar erros de tipos
  const neonCyan = '#60a5fa';
  const neonPurple = '#c084fc';
  const neonPink = '#ef4444';

  return (
    <div className="space-y-6 p-6">
      {/* Cores */}
      <Card>
        <CardHeader>
          <CardTitle>Design Tokens - Cores</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <div 
              className="w-16 h-16 rounded-lg border-2 border-cyan-400/30"
              style={{ backgroundColor: neonCyan }}
            />
            <div 
              className="w-16 h-16 rounded-lg border-2 border-purple-400/30"
              style={{ backgroundColor: neonPurple }}
            />
            <div 
              className="w-16 h-16 rounded-lg border-2 border-pink-400/30"
              style={{ backgroundColor: neonPink }}
            />
          </div>
          <div className="text-sm text-muted-foreground">
            Cores neon: Cyan, Purple, Pink
          </div>
        </CardContent>
      </Card>

      {/* Espaçamentos */}
      <Card>
        <CardHeader>
          <CardTitle>Design Tokens - Espaçamentos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="h-2 bg-primary rounded" style={{ width: '16px' }} />
            <div className="h-2 bg-primary rounded" style={{ width: '24px' }} />
            <div className="h-2 bg-primary rounded" style={{ width: '32px' }} />
            <div className="h-2 bg-primary rounded" style={{ width: '48px' }} />
          </div>
          <div className="text-sm text-muted-foreground">
            Espaçamentos: xs, sm, md, lg
          </div>
        </CardContent>
      </Card>

      {/* Tipografia */}
      <Card>
        <CardHeader>
          <CardTitle>Design Tokens - Tipografia</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="text-xs">Texto xs (12px)</div>
            <div className="text-sm">Texto sm (14px)</div>
            <div className="text-base">Texto base (16px)</div>
            <div className="text-lg">Texto lg (18px)</div>
            <div className="text-xl">Texto xl (20px)</div>
          </div>
          <div className="text-sm text-muted-foreground">
            Tamanhos de fonte disponíveis
          </div>
        </CardContent>
      </Card>

      {/* Raios */}
      <Card>
        <CardHeader>
          <CardTitle>Design Tokens - Raios</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4 items-end">
            <div className="w-8 h-8 bg-primary rounded-sm" />
            <div className="w-8 h-8 bg-primary rounded" />
            <div className="w-8 h-8 bg-primary rounded-md" />
            <div className="w-8 h-8 bg-primary rounded-lg" />
            <div className="w-8 h-8 bg-primary rounded-full" />
          </div>
          <div className="text-sm text-muted-foreground">
            Raios: sm, default, md, lg, full
          </div>
        </CardContent>
      </Card>
    </div>
  );
}



