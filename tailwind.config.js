/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'regulated': "url('/src/assets/images/regulated.svg')",
        "eclipse": "url('/src/assets/images/eclipse.svg')",
        "eclipse-mobile": "url('/src/assets/images/eclipse2.svg')"
      },
      colors: {
        teal: {
          "1": "#07969E",
          "3": "#A0DDE2"
        },
        body: {
          "16": "#4A5050"
        },
        heading: {
          "24": "#4A5050",
          "40": "#2D2D2D"
        }
      }
    },
  },
  plugins: [],
}

