/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        '3xl':'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;'
      },
      fontFamily:{
        'inter':'inter',
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
          sans: ["var(--font-opensans)"],
          kanit: ['Kanit', 'sans-serif'],
          rajdhani: ['Rajdhani', 'sans-serif'],
          'courier-prime': ['"Courier Prime"', 'monospace'],
          'roboto': ['Roboto', 'sans-serif'],
          nunito: ['Nunito', 'sans-serif'],
          // mono: ["var(--font-roboto-mono)"],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}