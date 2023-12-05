/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primario: "#7DA870",
      secundario: "#E9A763",
      terciario: "#343A3F"
    },
    fontFamily: {
      Red_Hat: ["Red Hat Display"]
    }
  },
  darkMode: "class",
  plugins: [nextui()],
}

