/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 10px 2px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        rotate: "rotation 20s linear infinite alternate",
        // slide: "slide 5s linear infinite",
      },
      keyframes: {
        rotation: {
          "0%": { transform: "rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        slide: {
          "0%": { transform: "translateX(0%)" },
          "10%,100%": { transform: "translateX(150vw)" },
        },
        test: {
          "0%": { width: "0" },
          "100%": { width: "50px" },
        },
        slidedown: {
          "0%": { top: "-120px" },
          "100%": { top: "0px" },
        },
      },
      colors: {
        gold: "#ffd700",
      },
    },
  },
  plugins: [],
};
