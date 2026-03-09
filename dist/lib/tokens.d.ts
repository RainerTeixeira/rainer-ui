import { ClassValue } from 'clsx';

var $schema = "https://json-schema.org/draft-07/schema#";
var $name = "@rainersoft/design-tokens";
var $version = "3.0.0";
var $description = "Universal design tokens export for Rainer Design System";
var $generated = "2026-03-08T15:11:41.906Z";
var primitives = {
	color: {
		white: "#ffffff",
		black: "#000000",
		transparent: "transparent",
		gray: {
			"50": "#f9fafb",
			"100": "#f3f4f6",
			"200": "#e5e7eb",
			"300": "#d1d5db",
			"400": "#9ca3af",
			"500": "#6b7280",
			"600": "#4b5563",
			"700": "#374151",
			"800": "#1f2937",
			"900": "#111827"
		},
		blue: {
			"50": "#f0f9ff",
			"100": "#e0f2fe",
			"200": "#bae6fd",
			"300": "#7dd3fc",
			"400": "#38bdf8",
			"500": "#0ea5e9",
			"600": "#0284c7",
			"700": "#0369a1",
			"800": "#075985",
			"900": "#0c4a6e"
		},
		cyan: {
			"50": "#ecfeff",
			"100": "#cffafe",
			"200": "#a5f3fc",
			"300": "#67e8f9",
			"400": "#22d3ee",
			"500": "#06b6d4",
			"600": "#0891b2",
			"700": "#0e7490",
			"800": "#155e75",
			"900": "#164e63"
		},
		purple: {
			"50": "#faf5ff",
			"100": "#f3e8ff",
			"200": "#e9d5ff",
			"300": "#d8b4fe",
			"400": "#c084fc",
			"500": "#a855f7",
			"600": "#9333ea",
			"700": "#7c3aed",
			"800": "#6b21a8",
			"900": "#581c87"
		},
		pink: {
			"50": "#fdf2f8",
			"100": "#fce7f3",
			"200": "#fbcfe8",
			"300": "#f9a8d4",
			"400": "#f472b6",
			"500": "#ec4899",
			"600": "#db2777",
			"700": "#be185d",
			"800": "#9d174d",
			"900": "#831843"
		},
		red: {
			"50": "#fef2f2",
			"100": "#fee2e2",
			"200": "#fecaca",
			"300": "#fca5a5",
			"400": "#f87171",
			"500": "#ef4444",
			"600": "#dc2626",
			"700": "#b91c1c",
			"800": "#991b1b",
			"900": "#7f1d1d"
		},
		orange: {
			"50": "#fff7ed",
			"100": "#ffedd5",
			"200": "#fed7aa",
			"300": "#fdba74",
			"400": "#fb923c",
			"500": "#f97316",
			"600": "#ea580c",
			"700": "#c2410c",
			"800": "#9a3412",
			"900": "#7c2d12"
		},
		yellow: {
			"50": "#fefce8",
			"100": "#fef9c3",
			"200": "#fef08a",
			"300": "#fde047",
			"400": "#facc15",
			"500": "#eab308",
			"600": "#ca8a04",
			"700": "#a16207",
			"800": "#854d0e",
			"900": "#713f12"
		},
		green: {
			"50": "#f0fdf4",
			"100": "#dcfce7",
			"200": "#bbf7d0",
			"300": "#86efac",
			"400": "#4ade80",
			"500": "#22c55e",
			"600": "#16a34a",
			"700": "#15803d",
			"800": "#166534",
			"900": "#14532d"
		},
		emerald: {
			"50": "#ecfdf5",
			"100": "#d1fae5",
			"200": "#a7f3d0",
			"300": "#6ee7b7",
			"400": "#34d399",
			"500": "#10b981",
			"600": "#059669",
			"700": "#047857",
			"800": "#065f46",
			"900": "#064e3b"
		}
	},
	spacing: {
		"0": "0px",
		"1": "0.25rem",
		"2": "0.5rem",
		"3": "0.75rem",
		"4": "1rem",
		"5": "1.25rem",
		"6": "1.5rem",
		"7": "1.75rem",
		"8": "2rem",
		"9": "2.25rem",
		"10": "2.5rem",
		"11": "2.75rem",
		"12": "3rem",
		"14": "3.5rem",
		"16": "4rem",
		"20": "5rem",
		"24": "6rem",
		"28": "7rem",
		"32": "8rem",
		"36": "9rem",
		"40": "10rem",
		"44": "11rem",
		"48": "12rem",
		"52": "13rem",
		"56": "14rem",
		"60": "15rem",
		"64": "16rem",
		"72": "18rem",
		"80": "20rem",
		"96": "24rem",
		px: "1px",
		"0.5": "0.125rem",
		"1.5": "0.375rem",
		"2.5": "0.625rem",
		"3.5": "0.875rem"
	},
	typography: {
		fontFamily: {
			sans: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
			serif: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
			mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
		},
		fontSize: {
			xs: "0.75rem",
			sm: "0.875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "3.75rem",
			"7xl": "4.5rem",
			"8xl": "6rem",
			"9xl": "8rem"
		},
		fontWeight: {
			"100": "100",
			"200": "200",
			"300": "300",
			"400": "400",
			"500": "500",
			"600": "600",
			"700": "700",
			"800": "800",
			"900": "900"
		},
		lineHeight: {
			"1": "1",
			"2": "2",
			"1.25": "1.25",
			"1.375": "1.375",
			"1.5": "1.5",
			"1.625": "1.625"
		},
		letterSpacing: {
			"0": "0em",
			"-0.05": "-0.05em",
			"-0.025": "-0.025em",
			"0.025": "0.025em",
			"0.05": "0.05em",
			"0.1": "0.1em"
		}
	},
	radius: {
		none: "0px",
		sm: "0.125rem",
		base: "0.25rem",
		md: "0.375rem",
		lg: "0.5rem",
		xl: "0.75rem",
		"2xl": "1rem",
		"3xl": "1.5rem",
		full: "9999px"
	},
	shadows: {
		xs: "0 1px 2px 0 rgba(15, 23, 42, 0.05)",
		sm: "0 1px 3px 0 rgba(15, 23, 42, 0.08), 0 1px 2px -1px rgba(15, 23, 42, 0.06)",
		base: "0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.06)",
		md: "0 10px 15px -3px rgba(15, 23, 42, 0.10), 0 4px 6px -4px rgba(15, 23, 42, 0.08)",
		lg: "0 20px 25px -5px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.10)",
		xl: "0 25px 50px -12px rgba(15, 23, 42, 0.25)",
		"2xl": "0 50px 100px -20px rgba(15, 23, 42, 0.30)",
		inner: "inset 0 2px 4px 0 rgba(15, 23, 42, 0.06)",
		glow: {
			cyan: "0 0 20px rgba(6, 182, 212, 0.55), 0 0 40px rgba(6, 182, 212, 0.35)",
			pink: "0 0 20px rgba(236, 72, 153, 0.55), 0 0 40px rgba(236, 72, 153, 0.35)",
			purple: "0 0 20px rgba(139, 92, 246, 0.55), 0 0 40px rgba(139, 92, 246, 0.35)",
			green: "0 0 20px rgba(34, 197, 94, 0.55), 0 0 40px rgba(34, 197, 94, 0.35)"
		}
	},
	motion: {
		duration: {
			instant: "0ms",
			ultraFast: "75ms",
			fast: "100ms",
			normal: "200ms",
			slow: "300ms",
			slower: "500ms",
			slowest: "800ms"
		},
		easing: {
			linear: "linear",
			easeIn: "cubic-bezier(0.4, 0, 1, 1)",
			easeOut: "cubic-bezier(0, 0, 0.2, 1)",
			easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
			easeInQuad: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
			easeOutQuad: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
			easeInOutQuad: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
			easeInCubic: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
			easeOutCubic: "cubic-bezier(0.215, 0.61, 0.355, 1)",
			easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1)",
			easeOutBack: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
			easeInBack: "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
			easeInOutBack: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
			spring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
		},
		delay: {
			none: "0ms",
			short: "50ms",
			medium: "100ms",
			long: "200ms",
			longer: "300ms"
		}
	},
	breakpoints: {
		xs: "0px",
		sm: "640px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
		"2xl": "1536px",
		"3xl": "1920px"
	},
	zIndex: {
		base: 0,
		content: 100,
		overlay: 200,
		dropdown: 300,
		modal: 400,
		tooltip: 500,
		notification: 600,
		max: 9999
	}
};
var themes = {
	light: {
		background: {
			primary: "#ffffff",
			secondary: "#f9fafb",
			tertiary: "#f3f4f6",
			disabled: "#f3f4f6",
			overlay: "rgba(0, 0, 0, 0.5)",
			inverse: "#000000"
		},
		text: {
			primary: "#111827",
			secondary: "#4b5563",
			tertiary: "#9ca3af",
			disabled: "#d1d5db",
			inverse: "#ffffff",
			onPrimary: "#ffffff",
			onSecondary: "#111827",
			link: "#2563eb",
			linkHover: "#1d4ed8"
		},
		button: {
			primary: {
				"default": "#3b82f6",
				hover: "#2563eb",
				active: "#1d4ed8",
				text: "#ffffff"
			},
			secondary: {
				"default": "#e5e7eb",
				hover: "#d1d5db",
				active: "#9ca3af",
				text: "#111827"
			},
			tertiary: {
				"default": "transparent",
				hover: "#f9fafb",
				active: "#e5e7eb",
				text: "#111827"
			},
			danger: {
				"default": "#ef4444",
				hover: "#dc2626",
				active: "#b91c1c",
				text: "#ffffff"
			},
			success: {
				"default": "#22c55e",
				hover: "#16a34a",
				active: "#15803d",
				text: "#ffffff"
			}
		},
		border: {
			"default": "#e5e7eb",
			light: "#f3f4f6",
			medium: "#d1d5db",
			dark: "#9ca3af",
			focus: "#3b82f6",
			error: "#ef4444",
			success: "#22c55e",
			warning: "#f87171"
		},
		status: {
			success: {
				"default": "#22c55e",
				light: "#f0fdf4",
				dark: "#15803d",
				text: "#15803d"
			},
			error: {
				"default": "#ef4444",
				light: "#fef2f2",
				dark: "#b91c1c",
				text: "#b91c1c"
			},
			warning: {
				"default": "#f87171",
				light: "#fef2f2",
				dark: "#dc2626",
				text: "#991b1b"
			},
			info: {
				"default": "#3b82f6",
				light: "#eff6ff",
				dark: "#1d4ed8",
				text: "#1d4ed8"
			}
		},
		interactive: {
			link: {
				"default": "#2563eb",
				hover: "#1d4ed8",
				visited: "#9333ea",
				active: "#1e40af"
			},
			focus: {
				ring: "#3b82f6",
				ringOffset: "#ffffff"
			}
		},
		surface: {
			elevated: "#ffffff",
			raised: "#f9fafb",
			sunken: "#f3f4f6"
		}
	},
	dark: {
		background: {
			primary: "#111827",
			secondary: "#111827",
			tertiary: "#1f2937",
			disabled: "#1f2937",
			overlay: "rgba(0, 0, 0, 0.85)",
			inverse: "#f9fafb",
			glass: "rgba(15, 23, 42, 0.6)",
			neon: "rgba(6, 182, 212, 0.10)"
		},
		text: {
			primary: "#f9fafb",
			secondary: "#d1d5db",
			tertiary: "#9ca3af",
			disabled: "#6b7280",
			inverse: "#111827",
			onPrimary: "#111827",
			onSecondary: "#f9fafb",
			link: "#22d3ee",
			linkHover: "#67e8f9",
			neon: "#22d3ee",
			neonGlow: "#67e8f9"
		},
		button: {
			primary: {
				"default": "#0891b2",
				hover: "#06b6d4",
				active: "#22d3ee",
				text: "#030712",
				glow: "rgba(6, 182, 212, 0.50)"
			},
			secondary: {
				"default": "#374151",
				hover: "#4b5563",
				active: "#6b7280",
				text: "#f9fafb",
				border: "#0891b2"
			},
			tertiary: {
				"default": "transparent",
				hover: "#1f2937",
				active: "#374151",
				text: "#22d3ee",
				border: "#0891b2"
			},
			danger: {
				"default": "#dc2626",
				hover: "#ef4444",
				active: "#f87171",
				text: "#ffffff",
				glow: "rgba(244, 63, 94, 0.50)"
			},
			success: {
				"default": "#059669",
				hover: "#10b981",
				active: "#34d399",
				text: "#030712",
				glow: "rgba(16, 185, 129, 0.50)"
			},
			neon: {
				"default": "linear-gradient(135deg, #0891b2, #2563eb)",
				hover: "linear-gradient(135deg, #06b6d4, #3b82f6)",
				active: "linear-gradient(135deg, #22d3ee, #60a5fa)",
				text: "#030712",
				glow: "rgba(6, 182, 212, 0.80)",
				border: "#22d3ee"
			}
		},
		border: {
			"default": "#374151",
			light: "#4b5563",
			medium: "#6b7280",
			dark: "#9ca3af",
			focus: "#22d3ee",
			error: "#f87171",
			success: "#34d399",
			warning: "#fbbf24",
			neon: "#22d3ee",
			neonGlow: "rgba(6, 182, 212, 0.60)"
		},
		status: {
			success: {
				"default": "#10b981",
				light: "#022c22",
				dark: "#6ee7b7",
				text: "#6ee7b7",
				glow: "rgba(16, 185, 129, 0.40)"
			},
			error: {
				"default": "#ef4444",
				light: "#7f1d1d",
				dark: "#fca5a5",
				text: "#fca5a5",
				glow: "rgba(244, 63, 94, 0.40)"
			},
			warning: {
				"default": "#fbbf24",
				light: "#78350f",
				dark: "#fde047",
				text: "#fef3c7",
				glow: "rgba(251, 191, 36, 0.40)"
			},
			info: {
				"default": "#22d3ee",
				light: "#083344",
				dark: "#67e8f9",
				text: "#67e8f9",
				glow: "rgba(6, 182, 212, 0.40)"
			}
		},
		interactive: {
			link: {
				"default": "#22d3ee",
				hover: "#67e8f9",
				visited: "#a78bfa",
				active: "#a5f3fc",
				glow: "rgba(6, 182, 212, 0.30)"
			},
			focus: {
				ring: "#22d3ee",
				ringOffset: "#030712",
				ringGlow: "rgba(6, 182, 212, 0.50)"
			}
		},
		surface: {
			elevated: "#1f2937",
			raised: "#1f2937",
			sunken: "#111827",
			glass: "rgba(15, 23, 42, 0.40)",
			neon: "rgba(6, 182, 212, 0.05)",
			hologram: "linear-gradient(135deg, rgba(6, 182, 212, 0.10), rgba(139, 92, 246, 0.10))"
		},
		gradient: {
			cyberpunk: {
				primary: "linear-gradient(135deg, #0891b2, #2563eb, #8b5cf6)",
				secondary: "linear-gradient(135deg, #dc2626, #ea580c)",
				tertiary: "linear-gradient(135deg, #059669, #0891b2)",
				background: "linear-gradient(135deg, #030712, #111827, #0f172a)"
			},
			neon: {
				cyan: "linear-gradient(135deg, #22d3ee, #0891b2)",
				rose: "linear-gradient(135deg, #fca5a5, #dc2626)",
				emerald: "linear-gradient(135deg, #6ee7b7, #059669)"
			}
		}
	}
};
var $meta = {
	repository: "git+https://github.com/RainerTeixeira/rainer-design-tokens.git",
	author: {
		name: "Rainer Teixeira",
		email: "suporte@rainersoft.com.br"
	},
	license: "MIT"
};
var tokensData = {
	$schema: $schema,
	$name: $name,
	$version: $version,
	$description: $description,
	$generated: $generated,
	primitives: primitives,
	themes: themes,
	$meta: $meta
};

/**
 * @fileoverview
 * Ponto único de entrada para os Design Tokens da UI (CSS + TypeScript).
 *
 * Este módulo faz a ponte entre o pacote `@rainersoft/design-tokens` e a
 * aplicação, oferecendo:
 *
 * - **Acesso tipado aos tokens** (primitives, themes, semantics)
 * - **Integração com CSS Variables** geradas pelo pacote de design tokens
 * - **Utilitário `cn`** para composição de classes (clsx + tailwind-merge)
 * - **Presets semânticos de motion** (animações, durações, easings)
 * - **Helpers de cores** (por tema, status, marca, variantes)
 * - **Geradores utilitários para Tailwind** (classes dinâmicas)
 * - **Constantes de layout** (z-index, classes semânticas, direções de gradiente)
 *
 * A ideia é que qualquer componente da UI consuma apenas este arquivo,
 * mantendo:
 *
 * - **Consistência visual** (tudo passa pelos mesmos tokens)
 * - **Segurança de tipos** (TypeScript em cima do JSON de tokens)
 * - **Isolamento da fonte de verdade** (o pacote de design tokens pode evoluir
 *   sem quebrar a API pública da UI)
 *
 * @remarks
 * Os tokens são importados do diretório `/formats` do pacote
 * `@rainersoft/design-tokens`, que expõe:
 *
 * - `tokens.json`: estrutura tipável consumida em TypeScript
 * - `css-vars.css`: variáveis CSS globais para uso direto em estilos
 *
 * @example
 * // Uso básico em um componente React com Tailwind:
 * import { cn } from '@rainersoft/ui/lib';
 *
 * function Button({ isActive }: { isActive?: boolean }) {
 *   return (
 *     <button
 *       className={cn(
 *         'inline-flex items-center rounded-md px-3 py-2 text-sm font-medium',
 *         isActive
 *           ? 'bg-primary text-primary-foreground'
 *           : 'bg-muted text-muted-foreground'
 *       )}
 *     >
 *       Clique aqui
 *     </button>
 *   );
 * }
 *
 * @module src/lib/tokens
 * @author Rainer Teixeira <https://github.com/rainerteixeira>
 * @version 1.0.0
 */

/**
 * Estrutura semântica dos tokens
 */
interface SemanticsDefinition {
    motion?: MotionSemantic;
    layoutClasses?: {
        components?: Record<string, string>;
        sections?: Record<string, string>;
    };
    colors?: Record<string, CategoryColors>;
}
/**
 * Token primitivo de motion
 */
interface MotionPrimitives {
    delay?: Record<string, string>;
    duration?: Record<string, string>;
    easing?: Record<string, string>;
}
/**
 * Paleta de cores de uma categoria
 */
interface CategoryColors extends Record<string, string | undefined> {
    base?: string;
    light?: string;
    dark?: string;
    foreground?: string;
}
/**
 * Configuração de botão por tema
 */
interface ButtonPalette {
    default?: string;
    text?: string;
    hover?: string;
    disabled?: string;
}
/**
 * Definição completa de um tema
 */
interface ThemeDefinition {
    colors?: Record<string, CategoryColors>;
    button?: {
        primary?: ButtonPalette;
        secondary?: ButtonPalette;
        tertiary?: ButtonPalette;
        danger?: ButtonPalette;
    };
    spacing?: Record<string, string>;
    typography?: Record<string, string>;
    [key: string]: unknown;
}
/**
 * Estrutura de motion semântico
 */
interface MotionSemantic {
    transition?: {
        default?: {
            duration?: string;
            easing?: string;
        };
        fast?: {
            duration?: string;
            easing?: string;
        };
        slow?: {
            duration?: string;
            easing?: string;
        };
    };
    interaction?: {
        hover?: {
            duration?: string;
            easing?: string;
        };
        focus?: {
            duration?: string;
            easing?: string;
        };
        active?: {
            duration?: string;
            easing?: string;
        };
    };
    feedback?: {
        success?: {
            duration?: string;
            easing?: string;
        };
        error?: {
            duration?: string;
            easing?: string;
        };
        warning?: {
            duration?: string;
            easing?: string;
        };
    };
    navigation?: {
        page?: {
            duration?: string;
            easing?: string;
        };
        modal?: {
            duration?: string;
            easing?: string;
        };
    };
}
/**
 * Tipagem completa dos tokens
 */
type Tokens = typeof tokensData & {
    semantics?: SemanticsDefinition;
};
/**
 * Temas suportados pelo design system
 */
type ThemeKey = 'light' | 'dark';
/**
 * Status de cores semânticas
 */
type StatusColor = 'success' | 'warning' | 'error' | 'info';
/**
 * Variantes de cor de marca
 */
type BrandColorVariant = 'primary' | 'secondary' | 'tertiary';
/**
 * Tokens expostos de forma tipada
 * @constant
 */
declare const tokens: Tokens;
/**
 * Combina classes CSS utilizando clsx + tailwind-merge
 *
 * @param inputs - Classes CSS a serem combinadas
 * @returns String com classes CSS combinadas e otimizadas
 *
 * @example
 * cn('p-4', isActive && 'bg-primary', className)
 */
declare function cn(...inputs: ClassValue[]): string;
/**
 * Mapa semântico de z-index para layout e sobreposições
 * Inclui aliases em CAIXA ALTA para retrocompatibilidade
 * @constant
 */
declare const Z_INDEX: {
    readonly BASE: string;
    readonly CONTENT: string;
    readonly OVERLAY: string;
    readonly DROPDOWN: string;
    readonly MODAL: string;
    readonly TOOLTIP: string;
    readonly NOTIFICATION: string;
    readonly MAX: string;
    readonly BACKDROP: string;
    readonly base: string;
    readonly content: string;
    readonly overlay: string;
    readonly dropdown: string;
    readonly modal: string;
    readonly tooltip: string;
    readonly notification: string;
    readonly max: string;
};
/**
 * Tokens brutos de motion
 */
declare const motionTokens: MotionPrimitives;
/**
 * Atalhos de motion
 */
declare const animationDelays: Record<string, string>;
declare const animationDurations: Record<string, string>;
declare const animationEasings: Record<string, string>;
/**
 * Alias em MAIÚSCULAS para consumo externo
 */
declare const ANIMATION_DELAYS: Record<string, string>;
declare const ANIMATION_DURATIONS: Record<string, string>;
declare const ANIMATION_EASINGS: Record<string, string>;
/**
 * Objeto consolidado de motion
 */
declare const motion: {
    readonly duration: Record<string, string>;
    readonly easing: Record<string, string>;
    readonly delay: Record<string, string>;
};
/**
 * Presets semânticos para animações
 * @constant
 */
declare const motionPresets: {
    readonly default: {
        readonly duration: string;
        readonly easing: string;
    };
    readonly fast: {
        readonly duration: string;
        readonly easing: string;
    };
    readonly slow: {
        readonly duration: string;
        readonly easing: string;
    };
    readonly spring: {
        readonly duration: string;
        readonly easing: string;
    };
};
declare const motionSemantic: MotionSemantic;
/**
 * Classes utilitárias de transição (Tailwind friendly)
 * @constant
 */
declare const MOTION: {
    readonly TRANSITION: {
        readonly DEFAULT: "transition-all duration-200 ease-in-out";
        readonly COLOR: "transition-colors duration-200 ease-in-out";
        readonly TRANSFORM: "transition-transform duration-200 ease-in-out";
        readonly OPACITY: "transition-opacity duration-200 ease-in-out";
    };
};
/**
 * Retorna o objeto completo do tema
 *
 * @param theme - Nome do tema ('light' ou 'dark')
 * @returns Definição completa do tema
 */
declare function getTheme(theme: ThemeKey): ThemeDefinition;
/**
 * Retorna apenas as cores do tema
 *
 * @param theme - Nome do tema ('light' ou 'dark')
 * @returns Cores do tema organizadas por categoria
 */
declare function getThemeColors(theme: ThemeKey): Record<string, CategoryColors>;
/**
 * Retorna cores semânticas simplificadas
 *
 * @param theme - Nome do tema ('light' ou 'dark')
 * @returns Objeto com cores semânticas do tema
 */
declare function getSemanticColors(theme: ThemeKey): {
    colors: Record<string, CategoryColors>;
};
/**
 * Retorna a cor base de um status
 *
 * @param status - Status da cor ('success', 'warning', 'error', 'info')
 * @param theme - Nome do tema (padrão: 'light')
 * @returns Cor CSS do status ou fallback
 */
declare function getStatusColor(status: StatusColor, theme?: ThemeKey): string;
/**
 * Retorna cor principal de botão
 *
 * @param theme - Nome do tema (padrão: 'light')
 * @returns Cor CSS do botão primário
 */
declare function getButtonPrimaryColor(theme?: ThemeKey): string;
/**
 * Retorna cor secundária de botão
 *
 * @param theme - Nome do tema (padrão: 'light')
 * @returns Cor CSS do botão secundário
 */
declare function getButtonSecondaryColor(theme?: ThemeKey): string;
/**
 * Retorna cor de texto do botão primário
 *
 * @param theme - Nome do tema (padrão: 'light')
 * @returns Cor CSS do texto do botão primário
 */
declare function getButtonPrimaryTextColor(theme?: ThemeKey): string;
/**
 * Retorna cor da variante terciária do botão
 *
 * @param theme - Nome do tema (padrão: 'light')
 * @returns Cor CSS do botão terciário
 */
declare function getButtonTertiaryColor(theme?: ThemeKey): string;
/**
 * Retorna uma cor específica do tema por categoria e tom
 *
 * @param theme - Nome do tema ('light' ou 'dark')
 * @param category - Categoria da cor (ex: 'primary', 'secondary')
 * @param shade - Tom específico (ex: 'base', 'light', 'dark')
 * @returns Cor CSS ou undefined se não encontrada
 */
declare function getColorFromTheme(theme: ThemeKey, category: string, shade: string): string | undefined;
/**
 * Retorna cores de marca por variante
 *
 * @param variant - Variante da marca ('primary', 'secondary', 'tertiary')
 * @param theme - Nome do tema (padrão: 'light')
 * @returns Cor CSS da variante de marca
 */
declare function getBrandColor(variant: BrandColorVariant, theme?: ThemeKey): string | undefined;
/**
 * Retorna cores semânticas simplificadas (subset comum)
 *
 * @param theme - Nome do tema ('light' ou 'dark')
 * @returns Objeto com cores semânticas principais
 */
declare function getSemanticColorsSimplified(theme: ThemeKey): Record<string, CategoryColors | undefined>;
/**
 * Retorna constantes semânticas brutas dos tokens
 *
 * @returns Objeto com constantes de cores semânticas
 */
declare function getSemanticColorConstants(): Record<string, CategoryColors>;
/**
 * Gera classes Tailwind dinamicamente a partir de opções
 *
 * @param options - Opções de classes Tailwind
 * @returns String de classes CSS Tailwind
 *
 * @example
 * generateTailwindClasses({ bg: 'primary', text: 'white', p: '4', rounded: 'lg' })
 * // Retorna: 'bg-primary text-white p-4 rounded-lg'
 */
declare function generateTailwindClasses(options: Record<string, string | undefined>): string;
/**
 * Retorna uma variável CSS a partir de um nome de token
 *
 * @param tokenName - Nome do token (ex: 'color-primary')
 * @returns Variável CSS formatada
 */
declare function getTokenColor(tokenName: string): string;
/**
 * Cria cor RGBA a partir de token CSS com transparência
 *
 * @param tokenName - Nome do token CSS
 * @param alpha - Valor de transparência (0-1, padrão: 0.08)
 * @returns String RGBA
 */
declare function overlayFromToken(tokenName: string, alpha?: number): string;
/**
 * Valida se uma string é um hexadecimal válido
 *
 * @param hex - String hexadecimal a validar
 * @returns Verdadeiro se for hexadecimal válido
 */
declare function isValidHex(hex: string): boolean;
/**
 * Retorna cor de contraste (preto ou branco) baseada na luminância
 *
 * @param hex - Cor hexadecimal
 * @returns 'var(--color-black)' ou 'var(--color-white)'
 */
declare function getContrastColor(hex: string): string;
/**
 * Tokens do tema claro
 */
declare const lightTokens: ThemeDefinition;
/**
 * Tokens do tema escuro
 */
declare const darkTokens: ThemeDefinition;
/**
 * Classes CSS semânticas para componentes
 */
declare const COMPONENT_CLASSES: Record<string, string>;
/**
 * Classes CSS semânticas para seções
 */
declare const SECTION_CLASSES: Record<string, string>;
declare const GRADIENT_DIRECTIONS: Record<string, string> | {
    readonly TO_R: "to-r";
    readonly TO_L: "to-l";
    readonly TO_T: "to-t";
    readonly TO_B: "to-b";
    readonly TO_BR: "to-br";
    readonly TO_BL: "to-bl";
    readonly TO_TR: "to-tr";
    readonly TO_TL: "to-tl";
    readonly TO_BOTTOM: "to-b";
    readonly TO_BOTTOM_RIGHT: "to-br";
    readonly TO_BOTTOM_LEFT: "to-bl";
    readonly TO_TOP_RIGHT: "to-tr";
    readonly TO_TOP_LEFT: "to-tl";
};
/**
 * Objeto com todas as utilidades exportadas
 */
declare const tokenUtils: {
    cn: typeof cn;
    getTheme: typeof getTheme;
    getThemeColors: typeof getThemeColors;
    getStatusColor: typeof getStatusColor;
    getBrandColor: typeof getBrandColor;
    getTokenColor: typeof getTokenColor;
    overlayFromToken: typeof overlayFromToken;
    isValidHex: typeof isValidHex;
    getContrastColor: typeof getContrastColor;
    generateTailwindClasses: typeof generateTailwindClasses;
    Z_INDEX: {
        readonly BASE: string;
        readonly CONTENT: string;
        readonly OVERLAY: string;
        readonly DROPDOWN: string;
        readonly MODAL: string;
        readonly TOOLTIP: string;
        readonly NOTIFICATION: string;
        readonly MAX: string;
        readonly BACKDROP: string;
        readonly base: string;
        readonly content: string;
        readonly overlay: string;
        readonly dropdown: string;
        readonly modal: string;
        readonly tooltip: string;
        readonly notification: string;
        readonly max: string;
    };
    motion: {
        readonly duration: Record<string, string>;
        readonly easing: Record<string, string>;
        readonly delay: Record<string, string>;
    };
    motionPresets: {
        readonly default: {
            readonly duration: string;
            readonly easing: string;
        };
        readonly fast: {
            readonly duration: string;
            readonly easing: string;
        };
        readonly slow: {
            readonly duration: string;
            readonly easing: string;
        };
        readonly spring: {
            readonly duration: string;
            readonly easing: string;
        };
    };
    motionSemantic: MotionSemantic;
    MOTION: {
        readonly TRANSITION: {
            readonly DEFAULT: "transition-all duration-200 ease-in-out";
            readonly COLOR: "transition-colors duration-200 ease-in-out";
            readonly TRANSFORM: "transition-transform duration-200 ease-in-out";
            readonly OPACITY: "transition-opacity duration-200 ease-in-out";
        };
    };
    COMPONENT_CLASSES: Record<string, string>;
    SECTION_CLASSES: Record<string, string>;
    GRADIENT_DIRECTIONS: Record<string, string> | {
        readonly TO_R: "to-r";
        readonly TO_L: "to-l";
        readonly TO_T: "to-t";
        readonly TO_B: "to-b";
        readonly TO_BR: "to-br";
        readonly TO_BL: "to-bl";
        readonly TO_TR: "to-tr";
        readonly TO_TL: "to-tl";
        readonly TO_BOTTOM: "to-b";
        readonly TO_BOTTOM_RIGHT: "to-br";
        readonly TO_BOTTOM_LEFT: "to-bl";
        readonly TO_TOP_RIGHT: "to-tr";
        readonly TO_TOP_LEFT: "to-tl";
    };
    lightTokens: ThemeDefinition;
    darkTokens: ThemeDefinition;
};

export { ANIMATION_DELAYS, ANIMATION_DURATIONS, ANIMATION_EASINGS, type BrandColorVariant, COMPONENT_CLASSES, GRADIENT_DIRECTIONS, MOTION, SECTION_CLASSES, type StatusColor, type ThemeKey, type Tokens, Z_INDEX, animationDelays, animationDurations, animationEasings, cn, darkTokens, tokenUtils as default, generateTailwindClasses, getBrandColor, getButtonPrimaryColor, getButtonPrimaryTextColor, getButtonSecondaryColor, getButtonTertiaryColor, getColorFromTheme, getContrastColor, getSemanticColorConstants, getSemanticColors, getSemanticColorsSimplified, getStatusColor, getTheme, getThemeColors, getTokenColor, isValidHex, lightTokens, motion, motionPresets, motionSemantic, motionTokens, overlayFromToken, tokenUtils, tokens };
