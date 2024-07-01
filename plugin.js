const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = plugin(
  function ({ addBase, theme }) {
    const primaryColor = theme("colors.primary");
    const whiteColor = theme("colors.white");
    const bodyColor = theme("colors.body-color");
    const DarkBodyColor = theme("colors.dark-6");
    const darkModeBackgroundColor = theme("colors.dark-2");
    const stroke = theme("colors.stroke");
    const DarkStroke = theme("colors.dark-3");

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

      [`.noUi-base`]: {
        background: whiteColor,
      },
      [`.dark-mode .noUi-base`]: {
        background: DarkBodyColor,
      },

      [`.apexcharts-text`]: {
        fill: bodyColor,
      },
      [`.dark-mode .apexcharts-text`]: {
        fill: DarkBodyColor,
      },

      [`.apexcharts-legend-text`]: {
        color: bodyColor,
      },
      [`.dark-mode .apexcharts-legend-text`]: {
        color: DarkBodyColor,
      },

      [`.apexcharts-xcrosshairs`]: {
        fill: stroke,
      },
      [`.dark-mode .apexcharts-xcrosshairs`]: {
        fill: DarkStroke,
      },

      [`.apexcharts-gridline`]: {
        fill: stroke,
      },
      [`.dark-mode .apexcharts-gridline`]: {
        fill: DarkStroke,
      },

      [`.apexcharts-legend-marker`]: {
        top: 0,
      },
      [`.chart-10 .apexcharts-tooltip-text`]: {
        color: whiteColor,
      },

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
      [`.dark-mode .priceSlideOne .noUi-connects`]: {
        background: darkModeBackgroundColor,
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
        boxShadow: "none",
      },
      [`.dark-mode .priceSlideOne .noUi-horizontal .noUi-handle`]: {
        background: darkModeBackgroundColor,
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
        fontFamily: {
          sans: ['"Inter", sans-serif', ...defaultTheme.fontFamily.sans],
        },
        colors: {
          primary: {
            DEFAULT: "#3758F9",
          },
          secondary: {
            DEFAULT: "#13C296",
          },
          stroke: {
            DEFAULT: "#DFE4EA",
          },
          dark: {
            DEFAULT: "#111928",
            2: "#1F2A37",
            3: "#374151",
            4: "#4B5563",
            5: "#6B7280",
            6: "#9CA3AF",
            7: "#D1D5DB",
            8: "#E5E7EB",
          },
          black: {
            ...colors.black,
            DEFAULT: "#212B36",
          },
          gray: {
            ...colors.gray,
            DEFAULT: "#F9FAFB",
            1: "#F9FAFB",
            2: "#F3F4F6",
            3: "#E5E7EB",
            4: "#DEE2E6",
            5: "#CED4DA",
            6: "#CED4DA",
            7: "#CED4DA",
          },
          orange: {
            ...colors.orange,
            DEFAULT: "#F27430",
            dark: "#E1580E",
            light: "#F59460",
            "light-2": "#F8B490",
            "light-3": "#FBD5C0",
            "light-4": "#FDE5D8",
            "light-5": "#FFF0E9",
          },
          red: {
            ...colors.red,
            DEFAULT: "#F23030",
            dark: "#E10E0E",
            light: "#F56060",
            "light-2": "#F89090",
            "light-3": "#FBC0C0",
            "light-4": "#FDD8D8",
            "light-5": "#FEEBEB",
            "light-6": "#FEF3F3",
          },
          pink: {
            ...colors.pink,
            DEFAULT: "#D345F8",
            dark: "#C814F6",
            light: "#DF76FA",
            "light-2": "#EAA7FC",
            "light-3": "#F6D8FE",
            "light-4": "#FCF1FE",
          },
          purple: {
            ...colors.purple,
            DEFAULT: "#8646F4",
            dark: "#6D28D9",
            "dark-2": "#5B21B6",
            light: "#A78BFA",
            "light-2": "#C4B5FD",
            "light-3": "#DDD6FE",
            "light-4": "#EDE9FE",
            "light-5": "#F5F3FF",
          },
          yellow: {
            ...colors.yellow,
            DEFAULT: "#FBBF24",
            dark: "#F59E0B",
            "dark-2": "#D97706",
            light: "#FCD34D",
            "light-2": "#FDE68A",
            "light-3": "#FEF3C7",
            "light-4": "#FFFBEB",
          },
          blue: {
            ...colors.blue,
            DEFAULT: "#2D68F8",
            dark: "#1C3FB7",
            light: "#5475E5",
            "light-2": "#8099EC",
            "light-3": "#ADBCF2",
            "light-4": "#C3CEF6",
            "light-5": "#E1E8FF",
          },
          cyan: {
            ...colors.cyan,
            DEFAULT: "#01A9DB",
            dark: "#0B76B7",
            light: "#18BFFF",
            "light-2": "#77D1F3",
            "light-3": "#D0F0FD",
          },
          teal: {
            ...colors.teal,
            DEFAULT: "#02AAA4",
            dark: "#06A09B",
            light: "#20D9D2",
            "light-2": "#72DDC3",
            "light-3": "#C2F5E9",
          },
          green: {
            ...colors.green,
            DEFAULT: "#22AD5C",
            dark: "#1A8245",
            light: "#2CD673",
            "light-2": "#57DE8F",
            "light-3": "#82E6AC",
            "light-4": "#ACEFC8",
            "light-5": "#C2F3D6",
            "light-6": "#DAF8E6",
          },
          "dark-700": "#090e34b3",
          "body-color": "#637381",
          "secondary-color": "#8899A8",
          warning: colors.yellow,
          danger: colors.red,
          success: colors.green,
          info: colors.teal,
          light: "#efefef",
          "form-stroke": "#E0E0E0",
          "tg-bg": "#f7f8fa",
        },
        boxShadow: {
          1: "0px 1px 3px 0px rgba(166, 175, 195, 0.40)",
          2: "0px 5px 12px 0px rgba(0, 0, 0, 0.10)",
          3: "0px 4px 12px 0px rgba(13, 10, 44, 0.06)",
          4: "0px 10px 30px 0px rgba(85, 106, 235, 0.12), 0px 4px 10px 0px rgba(85, 106, 235, 0.04), 0px -18px 38px 0px rgba(85, 106, 235, 0.04)",
          5: "0px 13px 40px 0px rgba(13, 10, 44, 0.12), 0px -8px 18px 0px rgba(13, 10, 44, 0.04)",
          6: "0px 12px 34px 0px rgba(13, 10, 44, 0.08), 0px 34px 26px 0px rgba(13, 10, 44, 0.05)",
          two: "0px 1px 4px rgba(0, 0, 0, 0.12)",
          three: "0px 1px 5px rgba(0, 0, 0, 0.14)",
          four: "0px 4px 10px rgba(0, 0, 0, 0.12)",
          "chat-box": "0px 1px 8px rgba(0, 0, 0, 0.1)",
          "profile-5": "0px 1px 3px rgba(0, 0, 0, 0.08)",
          input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
          pricing: "0px 39px 23px -27px rgba(0, 0, 0, 0.04)",
          "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
          testimonial: "0px 2px 20px 0px rgba(0, 0, 0, 0.08)",
          "testimonial-4": "0px 60px 120px -20px #EBEFFD",
          "testimonial-5": "0px 10px 39px rgba(92, 115, 160, 0.08)",
          "testimonial-6": "0px 10px 20px 0px rgba(92, 115, 160, 0.07)",
          "contact-3": "0px 4px 28px rgba(0, 0, 0, 0.08)",
          "contact-6": "0px 2px 4px rgba(0, 0, 0, 0.05)",
          card: "0px 1px 3px rgba(0, 0, 0, 0.12)",
          "card-2": "0px 1px 10px -2px rgba(0, 0, 0, 0.15)",
          "box-dark": "0px 10px 15px 0px rgba(5, 13, 29, 0.18)",
          btn: "0px 5px 18px 0px rgba(0, 0, 0, 0.08)",
          "btn-2": "0px 39px 23px -27px rgba(0, 0, 0, 0.10)",
          "btn-3": "0px 8px 15px 0px rgba(72, 72, 138, 0.08)",
          portfolio: "0px 4px 30px 0px rgba(0, 0, 0, 0.08)",
          "pricing-2": "0px 0px 40px 0px rgba(0, 0, 0, 0.08)",
          "pricing-3": "0px 6px 45px 0px rgba(0, 0, 0, 0.10)",
          "pricing-4": "0px 1px 4px 0px rgba(0, 0, 0, 0.12)",
          "pricing-5": "0px 10px 25px 0px rgba(0, 0, 0, 0.08)",
          "pricing-6": "0px 0px 20px 0px rgba(0, 0, 0, 0.10)",
          "pricing-7": "0px 0px 25px 0px rgba(0, 0, 0, 0.10)",
          feature: "0px 8px 40px 0px rgba(0, 0, 0, 0.05)",
          team: "0px 15px 40px 0px rgba(0, 0, 0, 0.07)",
          "team-2": "0px 0px 3px 0px rgba(0, 0, 0, 0.12)",
          "team-3": "0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
          border: "inset 0 0 0 2px #3758F9",
          product: "0px 1px 5px 0px rgba(0, 0, 0, 0.14)",
          "quick-view": "0px 4px 10px 0px rgba(0, 0, 0, 0.12)",

          // ==== new
          xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
          sm: "0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)",
          md: "0px 4px 8px -2px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
          xl: "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
        },
        dropShadow: {
          tooltip: "0px 0px 2px rgba(0, 0, 0, 0.14)",
          three: "0px 1px 5px rgba(0, 0, 0, 0.14)",
          four: "0px 4px 10px rgba(0, 0, 0, 0.12)",
          "avatar-5": "0px 1px 2px rgba(0, 0, 0, 0.08)",
          portfolio: "0px 16px 24px rgba(165, 171, 199, 0.32)",
          pricing: "0px 16px 40px rgba(0, 0, 0, 0.07)",
          feature: "0px 4px 20px rgba(0, 0, 0, 0.05)",
          testimonial: "0px 25px 40px rgba(208, 231, 243, 0.70)",
        },
      },
    },
  },
);
