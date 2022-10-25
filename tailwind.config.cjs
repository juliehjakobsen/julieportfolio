/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      yellow: "#EEBB22",
      white: "#FFFAFA",
      gray: "#333333",
      black: "#000000",
      red: "#ff6c00",
      darkred: "#C44500",
      lightgray: "#B5B5B6",
    },
    extend: {
      backgroundImage: {
        bg_web: "url('img/bg_web.png')",
        bg_light_web: "url('img/bg_light_web.png')",
      },
      inset: {
        bjaelke_position: "38rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
