module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // mainColor: "#5E69EE",
        // secondaryColor: "#F4F4FB",
        // accentColor: "#39AFEA",
        // mainColor: "hsl(235, 81, 65)",
        // secondaryColor: "hsl(240,47,97)",
        // accentColor: "hsl(200,81,57)",
        "cornflower-blue": {
          DEFAULT: "#5E69EE",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#E8EAFD",
          300: "#BABFF8",
          400: "#8C94F3",
          500: "#5E69EE",
          600: "#303EE9",
          700: "#1624D0",
          800: "#111CA2",
          900: "#0C1474",
        },

        "white-lilac": {
          DEFAULT: "#F4F4FB",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#F4F4FB",
          600: "#CFCFED",
          700: "#A9A9E0",
          800: "#8484D2",
          900: "#5E5EC5",
        },

        "picton-blue": {
          DEFAULT: "#39AFEA",
          50: "#FFFFFF",
          100: "#F1FAFE",
          200: "#C3E7F9",
          300: "#95D4F4",
          400: "#67C2EF",
          500: "#39AFEA",
          600: "#1798D9",
          700: "#1278AB",
          800: "#0D587D",
          900: "#08374F",
        },
      },
    },
    minWidth: {
      prose: "65ch",
    },
  },
  variants: {
    extend: {
      animation: ["responsive", "motion-safe", "motion-reduce", "hover"],
    },
  },
  plugins: [],
};
