"use client";

import { memo, useEffect, useState, useCallback, type CSSProperties } from "react";
import { cn } from "./lib/utils";

interface MatrixColumn {
  id: string;
  leftPct: number;
  fontSize: number;
  animationDuration: number;
  animationDelay: number;
  characters: string[];
}

interface MatrixBackgroundProps {
  /**
   * Variante de posicionamento:
   * - 'global': fixed, cobre toda a tela (padrão)
   * - 'local': absolute, fica dentro do container pai
   */
  variant?: 'global' | 'local';
}

const MOBILE_BREAKPOINT = 640;
const TABLET_BREAKPOINT = 1024;

const BINARY_PATTERNS = [
  '0101', '1010', '0110', '1001', '0011', '1100', '1111', '0000',
  '1000', '0111', '1101', '0010', '0100', '1110', '1011', '0110',
  '0001', '1010', '1001', '0011', '0101', '0111', '0100', '1000',
  '1100', '0011', '1001', '0110', '1010', '0101', '0000', '1111',
  '0010', '1101', '0111', '1000', '1001', '0110', '1100', '0011',
  '1111', '0000', '1010', '0101', '0110', '1001', '0011', '1100',
] as const;

function generateCharacters(count: number): string[] {
  return Array.from({ length: count }).map((_, idx) => {
    // Primeiro caractere sempre brilhante
    if (idx === 0) return Math.random() > 0.5 ? '1' : '0';
    const pattern =
      BINARY_PATTERNS[Math.floor(Math.random() * BINARY_PATTERNS.length)] || '0101';
    return pattern[idx % pattern.length] || '0';
  });
}

function generateColumn(
  i: number,
  columnCount: number,
  isMobile: boolean,
  isTablet: boolean
): MatrixColumn {
  const randomId = Math.round(Math.random() * 10000);
  // Mais caracteres para efeito mais denso e cyberpunk
  const charactersCount = isMobile
    ? 12 + Math.floor(Math.random() * 8)
    : 15 + Math.floor(Math.random() * 12);

  return {
    id: `col-${i}-${randomId}`,
    leftPct: (i / columnCount) * 100,
    fontSize: isMobile
      ? 14 + Math.random() * 6
      : isTablet
        ? 16 + Math.random() * 8
        : 18 + Math.random() * 8,
    animationDuration: 3 + Math.random() * 2,
    animationDelay: (i / columnCount) * 8,
    characters: generateCharacters(charactersCount),
  };
}

/**
 * MatrixBackground
 *
 * Componente autossuficiente que renderiza a chuva de caracteres binários
 * em background. Gerencia seu próprio estado e responsividade.
 * Pronto para usar em qualquer projeto sem dependências externas.
 * 
 * @param variant - 'global' (fixed, tela toda) ou 'local' (absolute, container pai)
 */
function MatrixBackgroundInner({ variant = 'global' }: MatrixBackgroundProps) {
  const [matrixColumns, setMatrixColumns] = useState<MatrixColumn[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  const initializeMatrix = useCallback(() => {
    if (isInitialized || typeof window === 'undefined') return;

    const width = window.innerWidth;
    const isMobile = width < MOBILE_BREAKPOINT;
    const isTablet = width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT;

    // Mais colunas para efeito mais denso
    const columnCount = isMobile
      ? Math.min(18, Math.max(10, Math.floor(width / 35)))
      : isTablet
        ? Math.min(28, Math.max(16, Math.floor(width / 38)))
        : Math.min(40, Math.max(25, Math.floor(width / 40)));

    const initialColumns = Array.from({ length: columnCount }).map((_, i) =>
      generateColumn(i, columnCount, isMobile, isTablet)
    );

    setMatrixColumns(initialColumns);
    setIsInitialized(true);
  }, [isInitialized]);

  useEffect(() => {
    if (typeof window !== 'undefined' && !isInitialized) {
      initializeMatrix();
    }
  }, [isInitialized, initializeMatrix]);

  if (!matrixColumns.length) return null;

  const positionClass = variant === 'global' 
    ? 'fixed inset-0 -z-10' 
    : 'absolute inset-0';

  return (
    <div
      className={cn(
        "pointer-events-none overflow-hidden select-none",
        positionClass
      )}
      aria-hidden="true"
    >
      {matrixColumns.map(column => (
        <div
          key={column.id}
          className={cn(
            "absolute top-[-110%] h-[220%]",
            "animate-matrix-fall",
          )}
          style={{
            left: `${column.leftPct}%`,
            fontSize: column.fontSize,
            animationDuration: `${column.animationDuration}s`,
            animationDelay: `${column.animationDelay}s`,
            filter: 'blur(0.3px)', // Leve blur para efeito mais suave
          } as CSSProperties}
        >
          {column.characters.map((ch, idx) => {
            // Gradiente de intensidade: cabeça mais brilhante, cauda desbotando
            const intensity = idx === 0 ? 100 : Math.max(30, 100 - (idx * 5));
            const glowIntensity = idx === 0 ? 12 : Math.max(4, 12 - (idx * 0.8));
            
            return (
              <span
                key={`${column.id}-${idx}`}
                className={cn(
                  "block font-mono leading-tight",
                  idx === 0 && "font-bold"
                )}
                style={{
                  color: `rgba(250, 204, 21, ${intensity / 100})`,
                  textShadow: `
                    0 0 ${glowIntensity}px rgba(250, 204, 21, 0.8),
                    0 0 ${glowIntensity * 2}px rgba(250, 204, 21, 0.6),
                    0 0 ${glowIntensity * 3}px rgba(250, 204, 21, 0.4)
                  `,
                  filter: idx === 0 ? 'brightness(1.4)' : 'none',
                }}
              >
                {ch}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export const MatrixBackground = memo(MatrixBackgroundInner);
