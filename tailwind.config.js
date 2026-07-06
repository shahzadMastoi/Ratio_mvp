/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'navy-dark': '#1a3a47',
        'navy-light': '#2c5a6f',
        'teal-500': '#1ba098',
        'teal-400': '#26b9b1',
        'teal-600': '#158680',
        'cyan-bright': '#00d4d4',
        'slate-gray': '#6b7280',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
