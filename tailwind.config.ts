import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0px 12px 24px -4px #919EAB1F",
      },
      boxShadow: {
        "3xl": "0px 0px 2px 0px #919EAB33",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "3rem",
          sm: "3rem",
          md: "2.5rem",
          lg: "2rem",
          xl: "3rem",
          '2xl': "4rem",
        },
      },
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      primary: "#ecf2ff",
      success: "#13DEB9",
      error: "#FA896B",
      warning: "#FFAE1F",
      "gray-100": "#5a6a85",
      "light-primary": "#F2F6FA",
      "blue-gray": "#2a3547",
      "dark-blue": "#333b54",
      "light-gray": "#7c8fac",
    },
  },
  plugins: [],
};
export default config;
