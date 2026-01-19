/**
 * Type definitions for @rainersoft/design-tokens
 * 
 * Extended type definitions to improve TypeScript support
 * for design tokens throughout the application
 */

declare module '@rainersoft/design-tokens' {
  interface DesignTokens {
    // Version metadata
    $version?: string;
    $name?: string;
    $description?: string;
    $generated?: string;

    // Raw primitives (from source)
    rawColorPrimitive: Record<string, any>;
    rawSpacingPrimitive: Record<string, any>;
    rawTypographyPrimitive: Record<string, any>;
    rawRadiusPrimitive: Record<string, any>;
    rawShadowsPrimitive: Record<string, any>;
    rawMotionPrimitive: Record<string, any>;
    rawBreakpointsPrimitive: Record<string, any>;
    rawZIndexPrimitive: Record<string, any>;
    rawOpacityPrimitive: Record<string, any>;
    rawLayoutPrimitive: Record<string, any>;
    rawIconSizesPrimitive: Record<string, any>;
    rawGradientPrimitive: Record<string, any>;
    rawBorderPrimitive: Record<string, any>;

    // Processed primitives
    colorPrimitive: Record<string, any>;
    spacingPrimitive: Record<string, any>;
    typographyPrimitive: {
      fontFamily: Record<string, string>;
      fontSize: Record<string, string>;
      fontWeight: Record<string, string>;
      lineHeight: Record<string, string>;
      letterSpacing: Record<string, string>;
    };
    radiusPrimitive: Record<string, any>;
    shadowsPrimitive: Record<string, any>;
    motionPrimitive: Record<string, any>;
    breakpointsPrimitive: Record<string, any>;
    zIndexPrimitive: Record<string, any>;
    opacityPrimitive: Record<string, any>;
    layoutPrimitive: Record<string, any>;
    iconSizesPrimitive: Record<string, any>;
    gradientPrimitive: Record<string, any>;
    borderPrimitive: Record<string, any>;

    // Semantic tokens
    colorSemantic: Record<string, any>;
    spacingSemantic: Record<string, any>;
    typographySemantic: Record<string, any>;
    elevationSemantic: Record<string, any>;
    layoutSemantic: Record<string, any>;
    motionSemantic: Record<string, any>;
    borderSemantic: Record<string, any>;

    // Typography helpers
    typography: {
      fontFamily: Record<string, string[]>;
      fontSize: Record<string, string>;
      fontWeight: Record<string, string>;
      lineHeight: Record<string, string>;
      letterSpacing: Record<string, string>;
    };

    // Themes
    themes: Record<string, any>;
    lightTheme: Record<string, any>;
    darkTheme: Record<string, any>;

    // Colors
    colors: Record<string, any>;
    BACKGROUND: Record<string, any>;
    DEFAULT_LIGHT_COLORS: Record<string, any>;
    DEFAULT_DARK_COLORS: Record<string, any>;

    // Gradients
    GRADIENTS: Record<string, any>;
    GRADIENT_DIRECTIONS: Record<string, any>;

    // Motion
    MOTION: Record<string, any>;
    motionTokens: Record<string, any>;

    // Shadows
    SHADOWS: Record<string, any>;

    // Utilities
    validateContrast: (foreground: string, background: string) => boolean;
    cssVarsPath: string;
  }

  const tokens: DesignTokens;
  export = tokens;
}

// Global CSS Variables type definitions
interface CSSProperties {
  [key: `--${string}`]: string | number;
}

// Extend CSS variable support
declare global {
  interface CSSStyleDeclaration {
    [key: `--${string}`]: string | number;
  }
}
