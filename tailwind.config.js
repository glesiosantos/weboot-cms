/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#26c6da',
        primaryLight: '#00acc1',
        primaryDark: '#00838f',
        success: '#2ecc71',
        danger: '#e74c3c'
      }
    }
  },
  plugins: []
}
