module.exports = {
  content: ["./*.html", "./assets/**/*.js"],
  theme: {
    screens: {
      xs: "400px",
      // => @media (min-width: 400px) { ... }

      sm: "540px",
      // => @media (min-width: 540px) { ... }

      md: "720px",
      // => @media (min-width: 720px) { ... }

      lg: "960px",
      // => @media (min-width: 960px) { ... }

      xl: "1140px",
      // => @media (min-width: 1240px) { ... }

      "2xl": "1320px",
      // => @media (min-width: 1320px) { ... }
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        dark: "#090E34",
        "dark-700": "#090e34b3",
        primary: "#3056D3",
        secondary: "#13C296",
        "body-color": "#637381",
        warning: "#F9C107",
        danger: "#DC3545",
        success: "#3CA745",
        info: "#3BA2B8",
        light: "#efefef",
        "form-stroke": "#E0E0E0",
        "tg-bg": "#f7f8fa",
        black: "#212B36",
      },

      boxShadow: {
        input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
        pricing: "0px 39px 23px -27px rgba(0, 0, 0, 0.04)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        "testimonial-4": "0px 60px 120px -20px #EBEFFD",
        "testimonial-5": "0px 10px 39px rgba(92, 115, 160, 0.08)",
        "contact-3": "0px 4px 28px rgba(0, 0, 0, 0.08)",
        "contact-6": "0px 2px 4px rgba(0, 0, 0, 0.05)",
        card: "0px 1px 3px rgba(0, 0, 0, 0.12)",
        "card-2": "0px 1px 10px -2px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
