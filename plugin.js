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
        background: "#3056D3",
      },

      [`input[type="radio"]:checked ~ .box span`]: {
        opacity: 1,
      },

      [`.payment:checked ~ label`]: {
        borderColor: "#3056D3",
        background: "#3056D3",
        backgroundOpacity: "8%",
      },

      [`.shipping:checked ~ label`]: {
        borderColor: "#3056D3",
      },

      [`.shipping:checked ~ label .title`]: {
        color: "#3056D3",
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
        borderColor: "#3056D3",
        background: "#3056D3",
        color: "#fff",
      },

      [`.filter-size-2:checked ~ label`]: {
        borderColor: "#3056D3",
        background: "#3056D3",
        backgroundOpacity: "10%",
      },

      [`.ram-size:checked ~ label`]: {
        borderColor: "#3056D3",
        color: "#3056D3",
      },

      [`.download-radio:checked ~ label`]: {
        borderColor: "#3056D3",
        background: "#3056D3",
      },

      [`.download-radio:checked ~ label span`]: {
        color: "#fff",
      },

      [`.download-radio:checked ~ label .icon`]: {
        opacity: 1,
      },

      /* ============
=============== */

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
        background: "#3056D3",
      },

      [`.priceSlideOne .noUi-horizontal .noUi-handle`]: {
        top: "-8px",
        height: "22px",
        width: "22px",
        border: "6px solid #3056D3",
        background: "#fff",
      },

      [`.priceSlideTwo .noUi-target`]: {
        marginTop: "32px",
        border: "none",
        background: "#fff",
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
        background: "#3056D3",
      },

      [`.priceSlideTwo .noUi-horizontal .noUi-handle`]: {
        top: "-12px",
        height: "30px",
        width: "30px",
        borderRadius: "999px",
        border: "1px solid #3056D3",
        background: "#fff",
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
        background: "#3056D3",
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
        color: "#637381",
      },
      [`.themeSwitcherTwo input:checked ~ .dark`]: {
        color: "#3056D3",
        background: "#f4f7ff",
      },

      [`.themeSwitcherTwo input:checked ~ .slider`]: {
        background: "#212B36",
      },
      [`.themeSwitcherTwo input:checked ~ .slider .dot`]: {
        transform: "translateX(28px)",
      },

      [`.themeSwitcherThree input:checked ~ div .light`]: {
        background: "#fff",
        color: "#637381",
      },
      [`.themeSwitcherThree input:checked ~ div .dark`]: {
        background: "#3056D3",
        color: "#fff",
      },

      /* box-select-1 */

      [`.checkbox-list:checked ~ label`]: {
        borderColor: "#3056d3",
        background: "#3056d3",
      },

      [`.checkbox-list:checked ~ label .icon`]: {
        opacity: 1,
      },

      [`.box-select-1:checked ~ label .box`]: {
        borderColor: "#3056d3",
        background: "#3056d3",
      },
      [`.box-select-1:checked ~ label .box .icon`]: {
        opacity: 1,
      },
      [`.box-select-1:checked ~ label div.user-box`]: {
        background: "#F8FAFC",
      },

      [`.select-list:checked ~ label`]: {
        borderColor: "#3056d3",
        color: "#3056d3",
      },
      [`.select-list:checked ~ label .icon`]: {
        background: "#3056d3",
      },

      [`.tableCheckbox:checked ~ label .icon-box`]: {
        borderColor: "#3056d3",
        background: "#3056d3",
      },

      [`.tableCheckbox:checked ~ label .icon`]: {
        opacity: 1,
      },

      [`.tableCheckbox-2:checked ~ label`]: {
        borderColor: "#3056d3",
        background: "#3056d3",
      },
      [`.tableCheckbox-2:checked ~ label .icon`]: {
        color: "#fff",
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
        color: "#637381",
      },
      [`.jvm-zoom-btn:hover`]: {
        borderColor: "#3056D3",
        background: "#3056d3",
        color: "#fff",
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
          gray: "#F4F7FF",
          "gray-1": "#F4F7FF",
          "gray-2": "#F8FAFC",
          orange: "#F2994A",
          purple: "#9B51E0",
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
