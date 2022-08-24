module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "dark" : "#1b1b1b",
        "dark-gray" : "#242424",
        "md-gray" : "#2A2827",
        "light-gray" : "#c6c6c6",
        "orange" : "#F27B2C"
      },
      fontFamily : {
        code : ['Source Code Pro', 'monospace']
      }
    },
  },
  plugins: [],
}
