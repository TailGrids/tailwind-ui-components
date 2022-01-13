const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  function ({ addBase, theme }) {
    addBase({
      [`.snap`]: {
        scrollSnapType: `x mandatory`,
        scrollBehavior: `smooth`,
      },

      [`.snap::-webkit-scrollbar`]: {
        display: "none",
      },

      [`.snap > img`]: {
        scrollSnapAlign: "center",
      },

      [`body`]: {
        fontFamily: `"Inter", sans-serif`,
      },

      [`.navbarTogglerActive > span:nth-child(1)`]: {
        transform: `rotate(45deg)`,
        top: `7px`,
      },

      [`.navbarTogglerActive > span:nth-child(2)`]: {
        opacity: "0",
      },

      [`.navbarTogglerActive > span:nth-child(3)`]: {
        top: `-8px`,
        transform: `rotate(135deg)`,
      },

      [`input:checked ~ .dot`]: {
        background: "#3056D3",
        transform: `translateX(100%)`,
      },

      [`input:checked ~ .dot .active`]: {
        display: "block",
      },

      [`input:checked ~ .dot .inactive`]: {
        display: "none",
      },

      [`input#toggleFour:checked ~ .box`]: {
        background: "#3056D3",
      },

      [`input#toggleFour:checked ~ .dot`]: {
        background: "#fff",
        transform: `translateX(100%)`,
      },

      [`input#toggleFive:checked ~ .dot`]: {
        background: "#fff",
        transform: `translateX(100%)`,
      },

      [`input#toggleFive:checked ~ .dot > span`]: {
        background: "#3056D3",
      },

      [`input#toggleSix:checked ~ .dot`]: {
        background: "#fff",
        transform: `translateX(100%)`,
      },

      [`input#toggleEight:checked ~ .box`]: {
        background: "#EAEEFB",
      },

      [`input#toggleEight:checked ~ .dot`]: {
        background: "#3056D3",
      },

      [`input#toggleEight:checked ~ .dot span`]: {
        background: "#3056D3",
        borderColor: "#fff",
      },

      [`input#toggleNine:checked ~ .dot span `]: {
        background: "#fff",
      },

      [`input#toggleNine:checked ~ .dot`]: {
        background: "#3056D3",
      },

      [`input:checked ~ .box`]: {
        borderColor: "#3056D3",
      },

      [`input#checkboxLabelOne:checked ~ .box`]: {
        borderColor: "#3056D3",
      },

      [`input#checkboxLabelOne:checked ~ .box .dot`]: {
        background: "#3056D3",
      },

      [`input#checkboxLabelTwo:checked ~ .box span`]: {
        opacity: "100%",
      },

      [`input#checkboxLabelThree:checked ~ .box span`]: {
        opacity: "100%",
      },

      [`input#checkboxLabelFour:checked ~ .box`]: {
        borderColor: "#3056D3",
      },

      [`input#checkboxLabelFour:checked ~ .box span`]: {
        background: "#3056D3",
      },

      [`input#checkboxLabelFive:checked ~ .box`]: {
        background: "#3056D3",
      },

      [`.shape-gradient`]: {
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(196, 196, 196, 0) 100%)`,
      },
    });
  },
  {
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
  }
);
