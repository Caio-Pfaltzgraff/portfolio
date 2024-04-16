// eslint-disable-next-line no-undef
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#202020',
          200: '#121212'
        },
        light: {
          100: '#EDF2F4',
          200: '#F9F9F9'
        },
        cinza: '#AABCD0',
        azul: {
          escuro: '#051933',
          claro: '#0f233d'
        },
        linkedin: '#0077B5',
        whatsapp: '#25D366',
        gmail: '#DB4437',
        github: '#5c6bc0'
      },
      fontFamily: {
        "default": ['Inter', 'sans-serif'],
        "title": ['Ubuntu', 'sans-serif'],
        "developer": ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [nextui()],
}

