/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "button-list-color": "#F2F2EF",
        "Video-card-color": "#F2F2F2",
      },
      screens: {
        sm: { min: "100px", max: "550px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "550px", max: "1150px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1150px", max: "1530px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1530px", max: "1700px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": { min: "1700px" },
        // => @media (min-width: 1536px) { ... }
      },
      height: {
        infinite: "auto",
      },
    },
  },
  plugins: [require("tailwindcss")],
};
