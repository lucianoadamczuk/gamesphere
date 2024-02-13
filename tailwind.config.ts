import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    colors: {
      primary: {
        DEFAULT: "#3D58F2",
        light: "#5C73F2",
      },
      secondary: {
        DEFAULT: "#C5F222",
        light: "#EBF222",
      },
      dark: {
        DEFAULT: "#0D0D0D",
        soft: "#262626",
        muted: "#333333",
      },
      light: {
        DEFAULT: "#F0F0F2",
        muted: "#949494",
      },
      warning: "#FFBF1E",
      danger: "#FF5E6E",
    },
  },
  fontFamily: {
    title: "var(--font-title)",
    base: "var(--font-base)",
  },

  plugins: [],
};
export default config;
