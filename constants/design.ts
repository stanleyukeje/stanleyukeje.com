/**
 * Centralized Design Token System for StanleyUkeje.com
 * Single source of truth for design values.
 */

export const DESIGN_TOKENS = {
  colors: {
    background: '#05070B',
    surface: '#0E131B',
    primary: '#2563EB',
    primaryHover: '#1D4ED8',
    text: '#FFFFFF',
    muted: '#9CA3AF',
    border: '#1F2937',
    borderHover: '#374151',
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
    accentGlow: 'rgba(37, 99, 235, 0.15)',
  },

  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '6rem',   // 96px
  },

  radius: {
    none: '0px',
    sm: '0.25rem',   // 4px
    md: '0.375rem',  // 6px
    lg: '0.5rem',    // 8px
    xl: '0.75rem',   // 12px
    '2xl': '1rem',   // 16px
    full: '9999px',
  },

  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    glow: '0 0 25px rgba(37, 99, 235, 0.15)',
  },

  containerWidths: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    full: '100%',
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  animationDurations: {
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
  },

  transitions: {
    default: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    smooth: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  zIndex: {
    hide: -1,
    base: 0,
    dock: 10,
    dropdown: 20,
    sticky: 30,
    header: 40,
    modal: 50,
    popover: 60,
    toast: 70,
  },
} as const;

export type DesignTokens = typeof DESIGN_TOKENS;
