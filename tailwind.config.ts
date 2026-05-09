import type { Config } from "tailwindcss"

/**
 * noshTio Marketing Website — Tailwind Configuration
 *
 * Source of truth for design tokens. Do not modify without explicit approval.
 * Companion files:
 *   - app/globals.css (CSS variables + legacy utility classes)
 *   - CLAUDE.md (project rules)
 *   - docs/product-definition.md (product spec)
 *
 * Brand identity:
 *   - Logo: deep blue + amber on cream
 *   - Voice: warm + professional + Indian
 *   - Audience: dhaba, restaurant, QSR, food plaza, canteen, fine dining owners
 */

const config: Config = {
  // App Router uses standard content paths
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],

  // Dark mode is gated on a `.dark` class. We do NOT add `.dark` to <html>
  // anywhere in Phase 1, so dark variants never fire — but the option remains
  // available without breaking change if we add a theme toggle in Phase 2.
  darkMode: ["class"],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1280px", // narrower than Tailwind's 1536 default — better for readable line lengths
      },
    },

    extend: {
      // ─────────────────────────────────────────────────────────────
      // COLORS — locked. Do not add hex codes elsewhere.
      // Reference: CLAUDE.md Section 4
      // ─────────────────────────────────────────────────────────────
      colors: {
        brand: {
          blue:        "#1E3A8A", // primary brand blue (from logo)
          amber:       "#E0A52E", // primary action color (CTAs)
          "amber-hover": "#C8881A", // amber hover state
          cream:       "#FAF6EE", // primary canvas / page background
          navy:        "#0F1E4A", // footer, dark feature sections
          charcoal:    "#1F2937", // heading text on cream
          muted:       "#6B7280", // body text, secondary info
        },
        semantic: {
          success: "#16A34A", // success states, "claimed" badges, WhatsApp green
          urgent:  "#DC2626", // urgency badges only — never buttons or body
        },

        // ─────────────────────────────────────────────────────
        // LEGACY ALIASES — temporary, for migration safety only.
        //
        // Old components reference `bg-navy`, `text-electricBlue`,
        // `bg-gold`, etc. These aliases keep the build green during
        // the component restyle pass (CLAUDE.md Section 17, step 3+).
        //
        // MIGRATION RULE: when restyling any component, replace its
        // legacy class names with the canonical `brand.*` tokens:
        //   bg-navy          → bg-brand-navy
        //   text-electricBlue → text-brand-blue
        //   bg-gold          → bg-brand-amber
        //
        // Once a class name has zero references in the codebase, remove
        // its alias here. Aliases are debt; they get repaid each restyle.
        // ─────────────────────────────────────────────────────
        navy: {
          DEFAULT: "#0F1E4A",  // → brand.navy
          50:  "#F1F2F8",
          100: "#D7DCEA",
          200: "#A4ADCC",
          300: "#717DAE",
          400: "#3E4D90",
          500: "#0F1E4A",      // matches brand.navy DEFAULT
          600: "#0C183B",
          700: "#08122C",
          800: "#050C1E",
          900: "#02060F",
        },
        electricBlue: {
          DEFAULT: "#1E3A8A",  // → brand.blue
          50:  "#EEF1F9",
          100: "#D1D9EE",
          200: "#9DB0DC",
          300: "#6886CB",
          400: "#3F60B5",
          500: "#1E3A8A",      // matches brand.blue DEFAULT
          600: "#172E6E",
          700: "#112253",
          800: "#0B1737",
          900: "#060B1C",
        },
        gold: {
          DEFAULT: "#E0A52E",  // → brand.amber (renamed from gold to amber in new system)
          50:  "#FCF6EA",
          100: "#F7E8C2",
          200: "#EFD085",
          300: "#E7B848",
          400: "#E0A52E",      // matches brand.amber DEFAULT
          500: "#C8881A",      // matches brand.amber-hover
          600: "#A06B14",
          700: "#785010",
          800: "#50360B",
          900: "#281B05",
        },

        // ─────────────────────────────────────────────────────
        // shadcn/ui CSS-variable aliases
        // Variables defined as HSL triplets in globals.css.
        // shadcn primitives use these names — do not rename.
        // ─────────────────────────────────────────────────────
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },

      // ─────────────────────────────────────────────────────────────
      // FONTS — locked. Two fonts only.
      // Loaded via next/font/google in app/layout.tsx
      // CSS variables: --font-display (Plus Jakarta Sans), --font-body (Inter)
      // ─────────────────────────────────────────────────────────────
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        body:    ["var(--font-body)",    "ui-sans-serif", "system-ui", "sans-serif"],
        sans:    ["var(--font-body)",    "ui-sans-serif", "system-ui", "sans-serif"], // sans = body for shadcn defaults
      },

      // Type scale — Tailwind defaults are good; we add a few semantic display sizes.
      fontSize: {
        "display-xl": ["4.5rem",   { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "800" }], // hero h1 desktop
        "display-lg": ["3.5rem",   { lineHeight: "1.1",  letterSpacing: "-0.02em", fontWeight: "800" }], // h1 mobile / h2 desktop
        "display-md": ["2.5rem",   { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "700" }], // section heading
        "display-sm": ["1.875rem", { lineHeight: "1.2",  letterSpacing: "-0.01em", fontWeight: "700" }], // sub-section heading
      },

      // ─────────────────────────────────────────────────────────────
      // SPACING & SIZING extensions
      // ─────────────────────────────────────────────────────────────
      spacing: {
        "navbar-h": "4rem",      // h-16 — mobile navbar height
        "navbar-h-lg": "5rem",   // h-20 — desktop navbar height
        "section": "5rem",       // standard vertical section padding (mobile)
        "section-lg": "7.5rem",  // standard vertical section padding (desktop)
      },

      maxWidth: {
        "prose-narrow": "65ch",   // for body text columns
        "container-narrow": "72rem",
      },

      // ─────────────────────────────────────────────────────────────
      // BORDER RADIUS — uses CSS variable for shadcn compatibility
      // ─────────────────────────────────────────────────────────────
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // ─────────────────────────────────────────────────────────────
      // SHADOWS — soft, warm, food-brand-appropriate
      // Avoid harsh dark shadows; we're on a cream canvas
      // ─────────────────────────────────────────────────────────────
      boxShadow: {
        "soft":     "0 1px 2px 0 rgba(15, 30, 74, 0.04), 0 1px 3px 1px rgba(15, 30, 74, 0.06)",
        "card":     "0 4px 12px -2px rgba(15, 30, 74, 0.08), 0 2px 4px -1px rgba(15, 30, 74, 0.04)",
        "cta":      "0 4px 14px 0 rgba(224, 165, 46, 0.30)",       // amber glow on primary CTA
        "cta-lg":   "0 8px 24px -4px rgba(224, 165, 46, 0.40)",    // larger amber glow on hero CTA
        "elevate":  "0 12px 32px -8px rgba(15, 30, 74, 0.14), 0 4px 8px -2px rgba(15, 30, 74, 0.06)",
      },

      // ─────────────────────────────────────────────────────────────
      // ANIMATIONS — kept minimal. Companion plugin: tailwindcss-animate
      // ─────────────────────────────────────────────────────────────
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "subtle-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.85" },
        },
        // Legacy keyframe — kept for migration safety; remove once unused.
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-4px)" },
        },
      },
      animation: {
        "accordion-down":  "accordion-down 0.2s ease-out",
        "accordion-up":    "accordion-up 0.2s ease-out",
        "fade-in":         "fade-in 0.4s ease-out",
        "fade-in-up":      "fade-in-up 0.4s ease-out",
        "slide-up":        "slide-up 0.5s ease-out",
        "subtle-pulse":    "subtle-pulse 2.5s ease-in-out infinite", // for "X spots remaining" badges
        // Legacy — see keyframes note above
        "bounce-gentle":   "bounce-gentle 2s ease-in-out infinite",
      },

      // ─────────────────────────────────────────────────────────────
      // BACKGROUND IMAGES — for subtle gradient overlays
      // ─────────────────────────────────────────────────────────────
      backgroundImage: {
        "cream-fade":  "linear-gradient(180deg, #FAF6EE 0%, #F5EFE2 100%)",  // homepage canvas variation
        "navy-fade":   "linear-gradient(180deg, #0F1E4A 0%, #0A1538 100%)",  // footer
        "amber-glow":  "radial-gradient(circle at 50% 0%, rgba(224, 165, 46, 0.12) 0%, transparent 60%)",
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),
  ],
}

export default config
