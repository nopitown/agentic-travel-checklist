import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "open-sans": ["var(--font-open-sans)"],
        vollkorn: ["var(--font-vollkorn)"],
      },
      colors: {
        branding: {
          dark: "#101A26",
          light: "#5B84BE",
          complementary: "#ebb141",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "bounce-arrow": {
          "0%, 100%": { transform: "translateY(-2px)" },
          "50%": { transform: "translateY(2px)" },
        },
        typing: {
          "0%": {
            width: "0",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "currentColor",
          },
        },
        fadeIn: {
          from: {
            opacity: "0.4",
            transform: "scale(0.95)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "shine-metallic": {
          "0%": { "background-position": "200% center" },
          "100%": { "background-position": "-200% center" },
        },
        slideWords: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "5%": { opacity: "1", transform: "translateY(0)" },
          "20%": { opacity: "1", transform: "translateY(0)" },
          "25%": { opacity: "0", transform: "translateY(-100%)" },
          "100%": { opacity: "0", transform: "translateY(-100%)" },
        },
        flipWord: {
          "0%, 15%": {
            transform: "rotateX(0deg)",
            opacity: "1",
          },
          "20%": {
            transform: "rotateX(-90deg)",
            opacity: "0",
          },
          "25%, 40%": {
            transform: "rotateX(0deg)",
            opacity: "1",
          },
          "45%": {
            transform: "rotateX(-90deg)",
            opacity: "0",
          },
          "50%, 65%": {
            transform: "rotateX(0deg)",
            opacity: "1",
          },
          "70%": {
            transform: "rotateX(-90deg)",
            opacity: "0",
          },
          "75%, 90%": {
            transform: "rotateX(0deg)",
            opacity: "1",
          },
          "95%": {
            transform: "rotateX(-90deg)",
            opacity: "0",
          },
          "100%": {
            transform: "rotateX(0deg)",
            opacity: "1",
          },
        },
        "text-slide-4": {
          "0%, 20%": {
            transform: "translateY(0%)",
          },
          "25%, 45%": {
            transform: "translateY(-20%)",
          },
          "50%, 70%": {
            transform: "translateY(-40%)",
          },
          "75%, 95%": {
            transform: "translateY(-60%)",
          },
          "100%": {
            transform: "translateY(-80%)",
          },
        },
        "timeline-progress": {
          "0%": {
            transform: "scaleY(0)",
            opacity: "0",
            transformOrigin: "top",
          },
          "100%": {
            transform: "scaleY(1)",
            opacity: "1",
            transformOrigin: "top",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.8)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(16px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "pulse-dot": {
          "0%": {
            "box-shadow": "0 0 0 0px rgb(235, 177, 65, 0.2)",
          },
          "100%": {
            "box-shadow": "0 0 0 10px rgba(0, 0, 0, 0)",
          },
        },
      },
      animation: {
        "bounce-arrow": "bounce-arrow 0.6s linear infinite",
        typing: "typing 2s steps(20) forwards, blink .7s infinite",
        fadeIn: "fadeIn 1s ease-out forwards",
        "shine-metallic":
          "shine-metallic 5s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "text-slide-4-running":
          "text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-4-paused":
          "text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite paused",
        "timeline-progress": "timeline-progress 0.3s linear forwards",
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
        "pulse-dot": "pulse-dot 1s infinite",
      },
      transitionDelay: {
        "400": "400ms",
        "600": "600ms",
      },
      transitionDuration: {
        "2000": "1000ms",
      },
      content: {
        "hover-text": "attr(data-hover)",
      },
    },
  },
  plugins: [animate],
} satisfies Config;

export default config;
