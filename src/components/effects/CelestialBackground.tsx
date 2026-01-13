/**
 * Celestial Background Component
 *
 * Background sofisticado tipo espaço celestial para dark mode.
 * Combina múltiplas camadas de estrelas, nebulosas e gradientes sutis.
 *
 * Características:
 * - Apenas renderizado em dark mode (opacity: 0 em light mode)
 * - Estrelas geradas aleatoriamente com diferentes tamanhos e opacidades
 * - Gradientes sutis simulando nebulosas espaciais
 * - Efeitos de brilho sutis
 * - Performance otimizada (pointer-events-none, fixed)
 * - Não interfere com interações
 *
 * @fileoverview Background celestial para dark mode
 * @author Rainer Teixeira
 * @version 1.0.0
 */

'use client';

import { useEffect, useState } from 'react';
import { tokens } from '@rainersoft/design-tokens';
import { hexToRGBA } from '../../lib/color-utils';
import { GRADIENT_DIRECTIONS } from '../../lib/constants';

// ============================================================================
// Types
// ============================================================================

interface CelestialBackgroundProps {
  /** Variante do background (default, dense, sparse) */
  variant?: 'default' | 'dense' | 'sparse';
}

// ============================================================================
// Constants
// ============================================================================

const STAR_CONFIGS = {
  default: {
    count: 150,
    sizes: [1, 2, 3],
    opacity: [0.3, 0.5, 0.7, 0.9],
  },
  dense: {
    count: 300,
    sizes: [1, 2, 3, 4],
    opacity: [0.2, 0.4, 0.6, 0.8],
  },
  sparse: {
    count: 75,
    sizes: [2, 3, 4],
    opacity: [0.4, 0.6, 0.8],
  },
} as const;

// ============================================================================
// Utilities
// ============================================================================

/**
 * Gera estrelas aleatórias
 */
function generateStars(
  count: number,
  sizes: number[],
  opacity: number[]
) {
  const stars = [];
  
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: sizes[Math.floor(Math.random() * sizes.length)],
      opacity: opacity[Math.floor(Math.random() * opacity.length)],
      twinkle: Math.random() > 0.8,
    });
  }
  
  return stars;
}

/**
 * Componente estrela individual
 */
function Star({ star }: { star: ReturnType<typeof generateStars>[0] }) {
  const style = {
    left: `${star.x}%`,
    top: `${star.y}%`,
    width: `${star.size}px`,
    height: `${star.size}px`,
    opacity: star.opacity,
  };
  
  return (
    <div
      className={`absolute rounded-full bg-white ${star.twinkle ? 'animate-pulse' : ''}`}
      style={style}
    />
  );
}

// ============================================================================
// Component
// ============================================================================

/**
 * CelestialBackground - Background celestial para dark mode
 *
 * @param variant - Variante de densidade (default, dense, sparse)
 * @returns Container fixo com efeito celestial
 */
export function CelestialBackground({
  variant = 'default',
}: CelestialBackgroundProps = {}) {
  const config = STAR_CONFIGS[variant];
  const [stars, setStars] = useState<ReturnType<typeof generateStars>>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Cores dos design tokens
  const cyan400 = tokens.primitives.color.cyan['400'];
  const purple400 = tokens.primitives.color.purple['400'];
  const pink500 = tokens.primitives.color.pink['500'];

  // Gera estrelas apenas no cliente para evitar hidratação
  useEffect(() => {
    setStars(generateStars(config.count, [...config.sizes], [...config.opacity]));
    setIsMounted(true);
  }, [config.count, config.sizes, config.opacity]);

  return (
    <div
      className="fixed inset-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-1000"
      style={{
        background: `
          radial-gradient(ellipse at top, ${hexToRGBA(cyan400, 0.1)} 0%, transparent 50%),
          radial-gradient(ellipse at bottom right, ${hexToRGBA(purple400, 0.1)} 0%, transparent 50%),
          radial-gradient(ellipse at bottom left, ${hexToRGBA(pink500, 0.05)} 0%, transparent 50%)
        `,
      }}
    >
      {/* Camada de gradiente base - Nebulosa escura cyberpunk */}
      <div className={`absolute inset-0 ${GRADIENT_DIRECTIONS.TO_BOTTOM} from-black via-purple-950/35 to-black`} />

      {/* Camada de nebulosas coloridas cyberpunk mais intensas */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Nebulosa ciano superior */}
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: `radial-gradient(circle, ${hexToRGBA(cyan400, 0.3)} 0%, transparent 70%)`,
          }}
        />
        
        {/* Nebulosa roxa inferior direita */}
        <div 
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{
            background: `radial-gradient(circle, ${hexToRGBA(purple400, 0.3)} 0%, transparent 70%)`,
          }}
        />
        
        {/* Nebulosa rosa inferior esquerda */}
        <div 
          className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-15"
          style={{
            background: `radial-gradient(circle, ${hexToRGBA(pink500, 0.2)} 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Estrelas */}
      {isMounted && stars.map((star) => (
        <Star key={star.id} star={star} />
      ))}
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export default CelestialBackground;
