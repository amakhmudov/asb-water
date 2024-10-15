const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./dist/**/*.html"],
  theme: {
    screens: {
      sm: "641px",
      "sm-down": { max: "640px" },
      md: "769px",
      "md-down": { max: "768px" },
      lg: "1025px",
      "lg-down": { max: "1024px" },
      xl: "1281px",
      "xl-down": { max: "1280px" },
      "2xl": "1921px",
      "2xl-down": { max: "1920px" },
    },
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        mont: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {},
      fontSize: {
        ssm: "0.8125rem",
      },
      colors: {
        brand: {
          DEFAULT: "#194e88",
          primary: "#2E9C27",
        },
        body: {
          DEFAULT: "#666",
          dark: "#000",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
