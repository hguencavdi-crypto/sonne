module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sonne-primary': '#1a1a1a',
        'tisch-frei': '#10b981',
        'tisch-besetzt': '#ef4444',
        'tisch-reserviert': '#3b82f6',
        'status-neu': '#f97316',
        'status-zubereitung': '#eab308',
        'status-fertig': '#22c55e',
      },
    },
  },
  plugins: [],
}
