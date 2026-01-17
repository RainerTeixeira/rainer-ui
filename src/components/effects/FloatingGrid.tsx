/**
 * Floating Grid Component
 *
 * Grid futurista cyberpunk que flutua no espaço
 * Cria profundidade e atmosfera futurista
 * Renderizado APENAS no modo dark
 */

import { hexToRGBA } from '../../lib/color-utils';
import { useTheme } from 'next-themes';
'use client';

import { useEffect, useRef, useState } from 'react';
import { useTokens } from '../providers/tokens-provider';

interface FloatingGridProps {
  /** Variante do grid (default, dense, sparse) */
  variant?: 'default' | 'dense' | 'sparse';
  /** Intensidade da animação (0.1 a 1) */
  intensity?: number;
}

export function FloatingGrid({
  variant = 'default',
  intensity = 0.5,
}: FloatingGridProps = {}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const { getColor } = useTokens();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || theme !== 'dark') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurações do canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Configurações do grid
    const gridConfig = {
      default: { spacing: 100, lineWidth: 0.5 },
      dense: { spacing: 60, lineWidth: 0.3 },
      sparse: { spacing: 150, lineWidth: 0.5 },
    };

    const config = gridConfig[variant];

    // Animação sutil do grid
    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      
      // Efeito de pulso sutil
      const pulseIntensity = intensity * (0.8 + Math.sin(time) * 0.2);
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const cyan400 = getColor('primitives.colors.cyan.400', '#22d3ee');
      const strokeColor = hexToRGBA(cyan400, pulseIntensity * 1.2);
      const fillColor = hexToRGBA(cyan400, pulseIntensity * 0.6);

      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = config.lineWidth;

      // Linhas verticais com deslocamento sutil
      for (let x = 0; x < canvas.width; x += config.spacing) {
        const offsetX = Math.sin(time + x * 0.01) * 2;
        ctx.beginPath();
        ctx.moveTo(x + offsetX, 0);
        ctx.lineTo(x + offsetX, canvas.height);
        ctx.stroke();
      }

      // Linhas horizontais com deslocamento sutil
      for (let y = 0; y < canvas.height; y += config.spacing) {
        const offsetY = Math.cos(time + y * 0.01) * 2;
        ctx.beginPath();
        ctx.moveTo(0, y + offsetY);
        ctx.lineTo(canvas.width, y + offsetY);
        ctx.stroke();
      }

      // Pontos de interseção com brilho pulsante
      ctx.fillStyle = fillColor;
      for (let x = 0; x < canvas.width; x += config.spacing) {
        for (let y = 0; y < canvas.height; y += config.spacing) {
          const size = 1 + Math.sin(time * 2 + x * 0.01 + y * 0.01) * 0.5;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [mounted, theme, variant, intensity]);

  if (!mounted || theme !== 'dark') {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}

export default FloatingGrid;
