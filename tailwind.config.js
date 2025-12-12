/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // Modo escuro ativado com 'class'
  theme: {
    extend: {
      colors: {
        primary: '#4A6CF7', // azul principal
        primaryLight: '#EEF2FF', // fundo dos cards/elementos
        textDark: '#1A1A1A',
        textLight: '#6B7280',
        borderLight: '#E5E7EB',
        sidebar: '#ffffff',
        topbar: '#ffffff'
      }
    }
  },
  plugins: []
}
