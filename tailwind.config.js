/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/*.js",
    "./src/Talkwithprofessional.js",
  ],
  theme: {
    extend: {},
    animation: {
      "scale-up-hor-left":
        "scale-up-hor-left 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      "scale-down-hor-right":
        "scale-down-hor-right 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
      // buatmasuk
      "slide-rotate-ver-l-bck-masuk":
        "slide-rotate-ver-l-bck-masuk 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955)   reverse both",
      // buat nutup
      "slide-rotate-ver-l-bck":
        "slide-rotate-ver-l-bck 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955)    both",
    },
    backgroundColor: {
      primary: "#ADD8E6",
      secondary: "#FFC0CB",
    },
    keyframes: {
      "scale-up-hor-left": {
        "0%": {
          transform: "scaleX(.4)",
          "transform-origin": "0% 0%",
        },
        to: {
          transform: "scaleX(1)",
          "transform-origin": "0% 0%",
        },
      },
      "scale-down-hor-right": {
        "0%": {
          transform: "scaleX(1)",
          "transform-origin": "100% 100%",
        },
        to: {
          transform: "scaleX(.3)",
          "transform-origin": "100% 100%",
        },
      },
      "slide-rotate-ver-l-bck-masuk": {
        "0%": {
          transform: "translateX(0) translateZ(0) rotateY(0)",
          "transform-origin": "center left",
        },
        to: {
          transform: "translateX(-150px) translateZ(-230px) rotateY(90deg)",
          "transform-origin": "center left",
        },
      },
      "slide-rotate-ver-l-bck": {
        "0%": {
          transform: "translateX(0) translateZ(0) rotateY(0)",
          "transform-origin": "center left",
        },
        to: {
          transform: "translateX(-150px) translateZ(-230px) rotateY(90deg)",
          "transform-origin": "center left",
        },
      },
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
