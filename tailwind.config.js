module.exports = {
  content: [
    "./pages/*.js",
    "./pages/**/*.js",
    "./components/*.js",
    "./components/**/*.js",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1840px",
      xxl: "2870px",
    },

    fontFamily: {
      Alegreya: ["Alegreya Sans SC" , "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#F95700",
        secondary: "#0090C5",
        "text-primary": "#425486",
        "text-secondary": "#5E6282",
        gray: "#ACACAC",
        black: "#1D1D1D",
        white: "#FFFFFF",
        inputBgLight: "#F8F9FF",
        inputLabel: "#425486",
        thinText: "#A1A9C3",
        falseAlert:"#F52E2E",
      },
    },
  },
  variants: {},
  plugins: [],
};
