import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        questrial: ["Questrial", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FF6A1A",
        black: "#212337",
        green: "#749B3F",
        gray: {
          100: "#4A4A52",
          80: "#A6A6A6",
          50: "#D9D9D9",
          20: "#F4F6F6",
        },
      },

      fontSize: {
        "heading-1": [
          "80px",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
          },
        ],
        "heading-2": [
          "48px",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
          },
        ],
        "heading-3": [
          "40px",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
          },
        ],
        "heading-4": [
          "32px",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
          },
        ],
        "heading-5": [
          "24px",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
          },
        ],
        "heading-6": [
          "18px",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
          },
        ],
        "sub-heading-1": [
          "20px",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
          },
        ],
        "sub-heading-2": [
          "14px",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
          },
        ],
        "body-1": [
          "20px",
          {
            lineHeight: "1.6",
            letterSpacing: "-0.02em",
          },
        ],
        "body-2": [
          "18px",
          {
            lineHeight: "1.6",
            letterSpacing: "-0.02em",
          },
        ],
        "body-3": [
          "14px",
          {
            lineHeight: "1.6",
            letterSpacing: "-0.02em",
          },
        ],
        button: [
          "18px",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
          },
        ],
      },
      boxShadow: {
        product: "0px 4px 20px 0px rgba(9, 43, 94, 0.06)",
        "product-hover": "0px 6px 24px 0px rgba(9, 43, 94, 0.12)",
      },
    },
  },
  plugins: [],
} satisfies Config;
