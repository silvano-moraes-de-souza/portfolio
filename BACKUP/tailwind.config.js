/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"]
      },
      colors: {
        "primary": "#99f7ff",
        "primary-container": "#00f1fe",
        "primary-dim": "#00e2ee",
        "secondary": "#ff51fa",
        "secondary-dim": "#ff51fa",
        "tertiary": "#a8ffe1",
        "tertiary-dim": "#00eabb",
        "surface": "#f8fafc",
        "surface-dark": "#0e0e10",
        "surface-container": "#19191c",
        "surface-container-low": "#131315",
        "surface-container-lowest": "#000000",
        "surface-container-highest": "#262528",
        "outline": "#767577",
        "outline-variant": "#48474a",
        "error": "#ff716c",
        "on-surface-variant": "#adaaad"
      },
      boxShadow: {
        'glow-primary': '0 0 15px rgba(153, 247, 255, 0.4)',
        'glow-secondary': '0 0 15px rgba(255, 81, 250, 0.4)',
      }
    },
  },
  plugins: [],
}
