/** tailwind.config.js */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#f2fbfb',
          100: '#e6f7f7',
          200: '#bfeeee',
          300: '#99e5e5',
          400: '#4fd6d6',
          500: '#0bb8b8',
          600: '#0a9a9a',
          700: '#087474',
          800: '#065454',
          900: '#043434'
        },
        ratio: {
          DEFAULT: '#0b7285',
          dark: '#072029',
          accent: '#0f7f88'
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'card-sm': '0 6px 18px rgba(3,15,24,0.06)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
