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
  '0010', '1101', '0111', '1000',
] as const;

function generateCharacters(count: number): string[] {
  return Array.from({ length: count }).map((_, idx) => {
    if (idx === 0) return '1';
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
  const charactersCount = isMobile
    ? 8 + Math.floor(Math.random() * 6)
    : 10 + Math.floor(Math.random() * 8);

  return {
    id: `col-${i}-${randomId}`,
    leftPct: (i / columnCount) * 100,
    fontSize: isMobile
      ? 12 + Math.random() * 4
      : isTablet
        ? 14 + Math.random() * 6
        : 16 + Math.random() * 6,
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

    const columnCount = isMobile
      ? Math.min(12, Math.max(6, Math.floor(width / 40)))
      : isTablet
        ? Math.min(18, Math.max(10, Math.floor(width / 45)))
        : Math.min(25, Math.max(15, Math.floor(width / 50)));

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
          style={
            {
              left: `${column.leftPct}%`,
              fontSize: column.fontSize,
              animationDuration: `${column.animationDuration}s`,
              animationDelay: `${column.animationDelay}s`,
            } as CSSProperties
          }
          className={cn(
            "absolute top-[-100%] h-[200%]",
            "animate-matrix-fall",
          )}
        >
          {column.characters.map((ch, idx) => (
            <span
              key={`${column.id}-${idx}`}
              className={cn(
                "block font-mono leading-none",
                idx === 0
                  ? "text-[var(--matrix-color)] drop-shadow-[0_0_6px_rgba(250,204,21,0.9)]"
                  : "text-[var(--matrix-color)]/70",
              )}
            >
              {ch}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export const MatrixBackground = memo(MatrixBackgroundInner);
