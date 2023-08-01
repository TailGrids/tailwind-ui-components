const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = plugin(
  function ({ addBase, theme }) {
    const primaryColor = theme("colors.primary");
    const whiteColor = theme("colors.white");
    const bodyColor = theme("colors.body-color");

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
        background: primaryColor,
        transform: `translateX(100%)`,
      },

      [`input:checked ~ .dot .active`]: {
        display: "block",
      },

      [`input:checked ~ .dot .inactive`]: {
        display: "none",
      },

      [`input#toggleFour:checked ~ .box`]: {
        background: primaryColor,
      },

      [`input#toggleFour:checked ~ .dot`]: {
        background: whiteColor,
        transform: `translateX(100%)`,
      },

      [`input#toggleFive:checked ~ .dot`]: {
        background: whiteColor,
        transform: `translateX(100%)`,
      },

      [`input#toggleFive:checked ~ .dot > span`]: {
        background: primaryColor,
      },

      [`input#toggleSix:checked ~ .dot`]: {
        background: whiteColor,
        transform: `translateX(100%)`,
      },

      [`input#toggleEight:checked ~ .box`]: {
        background: "#EAEEFB",
      },

      [`input#toggleEight:checked ~ .dot`]: {
        background: primaryColor,
      },

      [`input#toggleEight:checked ~ .dot span`]: {
        background: primaryColor,
        borderColor: whiteColor,
      },

      [`input#toggleNine:checked ~ .dot span `]: {
        background: whiteColor,
      },

      [`input#toggleNine:checked ~ .dot`]: {
        background: primaryColor,
      },

      [`input:checked ~ .box`]: {
        borderColor: primaryColor,
      },

      [`input#checkboxLabelOne:checked ~ .box`]: {
        borderColor: primaryColor,
      },

      [`input#checkboxLabelOne:checked ~ .box .dot`]: {
        background: primaryColor,
      },

      [`input#checkboxLabelTwo:checked ~ .box span`]: {
        opacity: "100%",
      },

      [`input#checkboxLabelThree:checked ~ .box span`]: {
        opacity: "100%",
      },

      [`input#checkboxLabelFour:checked ~ .box`]: {
        borderColor: primaryColor,
      },

      [`input#checkboxLabelFour:checked ~ .box span`]: {
        background: primaryColor,
      },

      [`input#checkboxLabelFive:checked ~ .box`]: {
        background: primaryColor,
      },

      [`.shape-gradient`]: {
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(196, 196, 196, 0) 100%)`,
      },

      /* v-2.0 start from here */
      [`.container`]: {
        marginLeft: "auto",
        marginRIght: "auto",
        paddingLeft: "16px",
        paddingRIght: "16px",
      },

      [`input[type="checkbox"]:checked ~ .box span`]: {
        opacity: 1,
      },

      [`input[type="radio"]:checked ~ .box .circle`]: {
        background: primaryColor,
      },

      [`input[type="radio"]:checked ~ .box span`]: {
        opacity: 1,
      },

      [`.payment:checked ~ label`]: {
        borderColor: primaryColor,
        background: primaryColor,
        backgroundOpacity: "8%",
      },

      [`.shipping:checked ~ label`]: {
        borderColor: primaryColor,
      },

      [`.shipping:checked ~ label .title`]: {
        color: primaryColor,
      },

      [`.color:checked ~ label span`]: {
        width: "8px",
        height: "8px",
      },

      [`.productColor:checked ~ label span`]: {
        height: "28px",
        width: "28px",
      },

      [`.productColor2:checked ~ label span`]: {
        height: "12px",
        width: "12px",
      },

      [`.filter-size:checked ~ label`]: {
        borderColor: primaryColor,
        background: primaryColor,
        color: whiteColor,
      },

      [`.filter-size-2:checked ~ label`]: {
        borderColor: primaryColor,
        background: primaryColor,
        backgroundOpacity: "10%",
      },

      [`.ram-size:checked ~ label`]: {
        borderColor: primaryColor,
        color: primaryColor,
      },

      [`.download-radio:checked ~ label`]: {
        borderColor: primaryColor,
        background: primaryColor,
      },

      [`.download-radio:checked ~ label span`]: {
        color: whiteColor,
      },

      [`.download-radio:checked ~ label .icon`]: {
        opacity: 1,
      },

      /* =========================== */

      [`.priceSlideOne .noUi-target`]: {
        marginTop: "32px",
        border: "none",
        background: "#f4f7ff",
        boxShadow: "none",
      },

      [`.priceSlideOne .noUi-connects`]: {
        height: "6px",
        borderRadius: "99999",
        background: "#d4d9e8",
      },

      [`.priceSlideOne .noUi-connect`]: {
        height: "6px",
        borderRadius: "999px",
        background: primaryColor,
      },

      [`.priceSlideOne .noUi-horizontal .noUi-handle`]: {
        top: "-8px",
        height: "22px",
        width: "22px",
        border: "6px solid",
        borderColor: primaryColor,
        background: whiteColor,
      },

      [`.priceSlideTwo .noUi-target`]: {
        marginTop: "32px",
        border: "none",
        background: whiteColor,
        boxShadow: "none",
      },

      [`.priceSlideTwo .noUi-connects`]: {
        height: "4px",
        borderRadius: "99999",
        background: "#d4d9e8",
      },

      [`.priceSlideTwo .noUi-connect`]: {
        height: "4px",
        borderRadius: "99999",
        background: primaryColor,
      },

      [`.priceSlideTwo .noUi-horizontal .noUi-handle`]: {
        top: "-12px",
        height: "30px",
        width: "30px",
        borderRadius: "999px",
        border: "1px solid",
        borderColor: primaryColor,
        background: whiteColor,
      },

      [`.noUi-horizontal .noUi-handle:after`]: {
        display: "none",
      },

      [`.noUi-horizontal .noUi-handle:before`]: {
        display: "none",
      },

      [`#activityChart .apexcharts-legend-series`]: {
        marginRight: `20px !important`,
      },

      /* ======= Switch ======= */
      [`.autoSaverSwitch input:checked ~ .slider`]: {
        background: primaryColor,
      },
      [`.autoSaverSwitch input:checked ~ .slider .dot`]: {
        transform: "translateX(24px)",
      },
      [`.autoSaverSwitch input:checked ~ .label .on`]: {
        display: "block",
      },
      [`.autoSaverSwitch input:checked ~ .label .off`]: {
        display: "none",
      },

      [`.themeSwitcherTwo input:checked ~ .light`]: {
        background: "transparent",
        color: bodyColor,
      },
      [`.themeSwitcherTwo input:checked ~ .dark`]: {
        color: primaryColor,
        background: "#f4f7ff",
      },

      [`.themeSwitcherTwo input:checked ~ .slider`]: {
        background: "#212B36",
      },
      [`.themeSwitcherTwo input:checked ~ .slider .dot`]: {
        transform: "translateX(28px)",
      },

      [`.themeSwitcherThree input:checked ~ div .light`]: {
        background: whiteColor,
        color: bodyColor,
      },
      [`.themeSwitcherThree input:checked ~ div .dark`]: {
        background: primaryColor,
        color: whiteColor,
      },

      /* box-select-1 */

      [`.checkbox-list:checked ~ label`]: {
        borderColor: primaryColor,
        background: primaryColor,
      },

      [`.checkbox-list:checked ~ label .icon`]: {
        opacity: 1,
      },

      [`.box-select-1:checked ~ label .box`]: {
        borderColor: primaryColor,
        background: primaryColor,
      },
      [`.box-select-1:checked ~ label .box .icon`]: {
        opacity: 1,
      },
      [`.box-select-1:checked ~ label div.user-box`]: {
        background: "#F8FAFC",
      },

      [`.select-list:checked ~ label`]: {
        borderColor: primaryColor,
        color: primaryColor,
      },
      [`.select-list:checked ~ label .icon`]: {
        background: primaryColor,
      },

      [`.tableCheckbox:checked ~ label .icon-box`]: {
        borderColor: primaryColor,
        background: primaryColor,
      },

      [`.tableCheckbox:checked ~ label .icon`]: {
        opacity: 1,
      },

      [`.tableCheckbox-2:checked ~ label`]: {
        borderColor: primaryColor,
        background: primaryColor,
      },
      [`.tableCheckbox-2:checked ~ label .icon`]: {
        color: whiteColor,
        opacity: 1,
      },

      /* Maps */
      [`.jvm-zoom-btn`]: {
        top: "auto",
        bottom: "0",
        left: "auto",
        display: "flex",
        height: "32px",
        width: "32px",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px",
        border: ".5px solid #E7E7E7",
        background: "#f4f7ff",
        fontWeight: "semibold",
        lineHeight: "none",
        color: bodyColor,
      },
      [`.jvm-zoom-btn:hover`]: {
        borderColor: primaryColor,
        background: primaryColor,
        color: whiteColor,
      },

      [`.mapOne .jvm-zoom-btn`]: {
        top: "auto",
        bottom: "0",
        left: "auto",
      },
      [`.mapOne .jvm-zoom-btn.jvm-zoomin`]: {
        right: "36px",
      },
      [`.mapOne .jvm-zoom-btn.jvm-zoomout`]: {
        right: "0",
      },

      [`.mapTwo .jvm-zoom-btn`]: {
        top: "auto",
        bottom: "0",
      },

      [`.mapTwo .jvm-zoom-btn.jvm-zoomin`]: {
        left: "0",
      },
      [`.mapTwo .jvm-zoom-btn.jvm-zoomout`]: {
        left: "36px",
      },

      [`.mapFour .jvm-zoom-btn`]: {
        top: "-80px",
      },

      [`.mapFour .jvm-zoom-btn.jvm-zoomin`]: {
        right: "36px",
      },
      [`.mapFour .jvm-zoom-btn.jvm-zoomout`]: {
        right: "0",
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
          stroke: "#E7E7E7",
          gray: {
            ...colors.gray,
            DEFAULT: "#f4f7ff",
            1: "#f4f7ff",
            2: "#f8faFC",
          },
          orange: {
            ...colors.orange,
            DEFAULT: "#F2994A",
          },
          purple: {
            ...colors.purple,
            DEFAULT: "#9b51e0",
          },
        },
        boxShadow: {
          two: "0px 1px 4px rgba(0, 0, 0, 0.12)",
          three: "0px 1px 5px rgba(0, 0, 0, 0.14)",
          four: "0px 4px 10px rgba(0, 0, 0, 0.12)",
          "chat-box": "0px 1px 8px rgba(0, 0, 0, 0.1)",
          "profile-5": "0px 1px 3px rgba(0, 0, 0, 0.08)",
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
        dropShadow: {
          tooltip: "0px 0px 2px rgba(0, 0, 0, 0.14)",
          three: "0px 1px 5px rgba(0, 0, 0, 0.14)",
          four: "0px 4px 10px rgba(0, 0, 0, 0.12)",
          "avatar-5": "0px 1px 2px rgba(0, 0, 0, 0.08)",
        },
      },
    },
  }
);
