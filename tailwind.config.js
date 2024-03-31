/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm': '320px',
      'md': '768px',
    },

    extend: {
      backgroundImage: {
        'header-background': "url('./bg-img.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
       }
    },
  },
  plugins: [],
}