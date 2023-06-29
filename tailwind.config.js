/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // font colors
        primary: "#1F2471",
        secondary: "#896EFF", // blue for btn bg, and other blue texts
        secondBg: "#FAF9FF", // for navar bg if it's scrolled
        darkPri: "#8E9EC3",
        "blog-text-light": "#374151",
        "blog-text-dark": "#d1d5db",

        "bsc-light": {
          100: "#ffffff",
          200: "#616595",
          300: "#B3C7F7",
          400: "#262626", // blog title on light mode
        },
        "bsc-dark": {
          100: "#F2E7FE", // dark mode nav items colors
          200: "#fff",
        },

        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      fontSize: {
        "para-mobile": ["13px", "24px"],
        "para-md": ["16px", "26px"],
        heading: ["27px"],
        "blog-title": ["20px", "25px"],
        "blog-single-title": ["30px", "38px"],
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
