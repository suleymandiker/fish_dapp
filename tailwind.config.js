module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    extend: {
      fontFamily: {
        headline: ['Oswald'],
        candara: ['Candara']
      },
      colors: {
        mainColor:'#212f49'
      },
      padding: {"fluid-video": "56.25%"},
    },
    backgroundImage: {
      'UST_BG': "url('../public/images/9_BG/UST_BG.png')", 
      'ALT_BG': "url('../public/img/bg/ALT_BG.png')", 
    }
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}