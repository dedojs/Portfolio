/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        backHome: "url('./src/assets/Fundo.png')"
      }
    }
  },
  plugins: [],
}
