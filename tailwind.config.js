/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-surface": "#191c22",
        "on-surface-variant": "#424753",
        "surface": "#f9f9ff",
        "surface-bright": "#ffffff",
        "surface-dim": "#d8d9e2",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f2f3fc",
        "surface-container": "#ecedf6",
        "surface-container-high": "#e7e8f1",
        "surface-container-highest": "#e1e2eb",
        "outline": "#727784",
        "outline-variant": "#c2c6d5",
        "vnd-primary-50": "#E5F2FF",
        "vnd-primary-100": "#CCE5FF",
        "vnd-primary-200": "#99CBFF",
        "vnd-primary-400": "#3391F0",
        "vnd-primary-500": "#0077ED",
        "vnd-primary-700": "#005CBD",
        "vnd-primary-900": "#00205B",
        "vnd-primary-950": "#001233",
        "vnd-accent-green": "#00C97D",
        "vnd-accent-amber": "#FFB020",
        "vnd-warning": "#FF8C33",
        "vnd-danger": "#EF4444",
        "vnd-neutral-50": "#FAFAFA",
        "vnd-neutral-100": "#F4F4F5",
        "vnd-neutral-950": "#0A0A0B",
        "anvie-primary": "#FF6B35",
        "anvie-accent": "#4ECDC4",
        "pti-primary": "#8B2E8F",
        "primary": "#0077ED",
        "primary-container": "#CCE5FF",
        "on-primary": "#ffffff",
        "secondary-container": "#75f8b3",
        "on-secondary-fixed-variant": "#005232",
        "tertiary-fixed": "#ffdbcc",
        "tertiary": "#833400",
        "on-tertiary-fixed-variant": "#7a3000",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a"
      },
      borderRadius: {
        DEFAULT: "0.375rem",
        sm: "0.25rem",
        lg: "0.625rem",
        xl: "0.875rem",
        "2xl": "1.125rem",
        "3xl": "1.5rem",
        full: "9999px"
      },
      spacing: {
        "unit-1": "0.25rem",
        "unit-2": "0.5rem",
        "unit-3": "0.75rem",
        "unit-4": "1rem",
        "unit-5": "1.25rem",
        "unit-6": "1.5rem",
        "unit-8": "2rem",
        "unit-10": "2.5rem",
        "unit-12": "3rem",
        "unit-16": "4rem",
        "margin": "2rem",
        "gutter": "1.5rem"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Lexend", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"]
      },
      fontSize: {
        "label-xs": ["11px", { lineHeight: "1.4", fontWeight: "500", letterSpacing: "0.04em" }],
        "label-sm": ["12px", { lineHeight: "1.4", fontWeight: "500" }],
        "body-sm": ["13px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-md": ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-lg": ["16px", { lineHeight: "1.55", fontWeight: "400" }],
        "title-sm": ["14px", { lineHeight: "1.4", fontWeight: "600" }],
        "title-md": ["16px", { lineHeight: "1.35", fontWeight: "600" }],
        "title-lg": ["18px", { lineHeight: "1.3", fontWeight: "600" }],
        "headline-sm": ["20px", { lineHeight: "1.3", fontWeight: "600", letterSpacing: "-0.01em" }],
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "600", letterSpacing: "-0.015em" }],
        "headline-lg": ["30px", { lineHeight: "1.2", fontWeight: "700", letterSpacing: "-0.02em" }],
        "display-sm": ["36px", { lineHeight: "1.15", fontWeight: "700", letterSpacing: "-0.025em" }],
        "display-md": ["44px", { lineHeight: "1.1", fontWeight: "700", letterSpacing: "-0.03em" }],
        "financial-sm": ["14px", { lineHeight: "1.4", fontWeight: "600" }],
        "financial-md": ["18px", { lineHeight: "1.3", fontWeight: "600" }],
        "financial-lg": ["28px", { lineHeight: "1.2", fontWeight: "700", letterSpacing: "-0.01em" }],
        "financial-xl": ["40px", { lineHeight: "1.1", fontWeight: "700", letterSpacing: "-0.02em" }]
      },
      boxShadow: {
        "xs": "0 1px 2px rgba(15, 23, 42, 0.04)",
        "soft": "0 2px 8px -2px rgba(15, 23, 42, 0.06), 0 6px 18px -8px rgba(15, 23, 42, 0.08)",
        "lift": "0 10px 30px -12px rgba(15, 23, 42, 0.18), 0 2px 6px rgba(15, 23, 42, 0.04)",
        "brand": "0 10px 30px -10px rgba(0, 119, 237, 0.45)"
      }
    }
  }
};
