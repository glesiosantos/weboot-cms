/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // Modo escuro ativado com 'class'
  theme: {
    extend: {
      colors: {
        primary: '#2a4fd7',
        success: '#34c38f',
        orange: '#fa7f56',
        info: '#35d1df',
        warning: '#e4a73e',
        danger: '#fa3452',
        purple: '#6f42c1',
        light: '#f5f6f8',
        secondary: '#74788d',
        dark: '#343a40'
      }
    }
  },
  plugins: []
}
