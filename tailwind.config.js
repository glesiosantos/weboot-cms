/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#727cf5',
        secondary: '#6c757d',
        success: '#0acf97',
        info: '#39afd1',
        warning: '#ffbc00',
        danger: '#fa5c7c',
        dark: '#313a46',
        muted: '#98a6ad',
        light: '#f1f5f7',
        sidebar: {
          DEFAULT: '#313a46',
          hover: '#3a4453',
          active: '#4a5362'
        }
      }
    }
  }
}
