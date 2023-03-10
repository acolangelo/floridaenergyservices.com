/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["aileron", "Helvetica Neue", "Arial", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        'serif': ["Georgia"],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.85rem',
        'base': '1rem',
        'md': '1.25rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '2.5rem',
        '3xl': '3rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#FFFFFF',
        'black': '#000000',
        'gray': '#444',
        'lightestgray': '#F2F2F2',
        'orange': '#CC8921',
        'blue': '#2C69BE',
      },
    },
  },
  plugins: [],
}
