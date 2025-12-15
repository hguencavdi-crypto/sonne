/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // HASI Elektronic Farbschema
        hasi: {
          darkblue: '#1A365D',    // Header, Footer
          blue: '#2C5282',        // Primärblau - Überschriften, Buttons
          accent: '#3182CE',      // Akzentblau - Links, Hover
          lightblue: '#D5E8F0',   // Hellblau - Hintergründe, Karten
          green: '#2F855A',       // Erfolgsgrün - Checkmarks
          yellow: '#D69E2E',      // Warngelb - Hinweise
          text: '#2D3748',        // Textfarbe
          gray: '#718096',        // Grautext - Sekundärtext
        },
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
