import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // === SISTEMA DE MARCA KABILIO ===
        // Basado en el mockup: fondo beige, tinta casi negra y acento morado.
        bg: "#ffffff", // fondo general (blanco)
        surface: "#ffffff", // tarjetas / superficies
        surface2: "#f5f3ef", // superficie secundaria / bandas suaves (beige muy claro)
        line: "#e4ded5", // bordes
        navy: "#141b2d", // sección oscura de funcionalidades
        lav: "#ddd5fd", // lavanda
        peach: "#fde9d6",
        pink: "#f8d5e4",
        green: "#15914b",
        gold: "#e8a33d", // estrellas
        ink: {
          DEFAULT: "#111827", // tinta principal (botones)
          soft: "#4b4560",
          muted: "#6b7280",
        },
        // Acento morado. `brand` se usa en eyebrows, iconos y enlaces.
        brand: {
          DEFAULT: "#3a2f7a", // accent-ink
          50: "#f2eefc",
          100: "#e9e3fd", // accent-soft
          200: "#ddd5fd", // lav
          300: "#c9bff0",
          400: "#a99cf5",
          500: "#6b5cf0",
          600: "#4f3fc0",
          700: "#3a2f7a",
          800: "#2f2661",
          900: "#241d4b",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "14px",
        "2xl": "18px",
        "3xl": "24px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(17,24,39,.04), 0 10px 28px rgba(17,24,39,.07)",
      },
      letterSpacing: {
        tightish: "-.02em",
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          "2xl": "1120px",
        },
      },
    },
  },
  plugins: [],
};

export default config;
