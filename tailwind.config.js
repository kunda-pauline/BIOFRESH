/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bio: {
          dark: '#0B6B3A',
          green: '#22A447',
          lime: '#9ACC3B',
          soft: '#EFF8F1',
          cream: '#FAF8F0',
          text: '#17352A',
          border: '#D3E8D9',
          card: '#FFFFFF',
          accent: '#78B82B'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'bio-soft': '0 4px 20px -2px rgba(11, 107, 58, 0.08)',
        'bio-card': '0 10px 30px -5px rgba(23, 53, 42, 0.06)',
        'bio-hover': '0 20px 40px -10px rgba(11, 107, 58, 0.15)',
      }
    },
  },
  plugins: [],
}
