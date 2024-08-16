const {fontFamily} = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent-color)",
        primaryShade: "var(--primary-shade)",
        primaryContrast: "var(--primary-contrast)",
        contrastShade: "var(--primary-contrast-shade)",
        // gradient: "var(--gradient-color)",
      },
      fontFamily: {
        heroFont: ['var(--font-heroFont)', ...fontFamily.sans]
      }
    },
  },
  plugins: [],
};
