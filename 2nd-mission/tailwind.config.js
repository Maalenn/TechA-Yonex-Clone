/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
          primary: {
            100: "#006cb7",
            200: "#1c5dad",
            300: "#0a56c2",
          },     
          success: {
            light: "#e5efe5",
            dark: "#006400",
          },
          secondary: {
            100: "#f5f5f5",
            200: "#6e7677",
            300: "#a8a8a8",
            400: "#595959",
            500: "#53595a",
            600: "#1f2427",
            700: "#24292b",
          },
        },
        fontFamily: {
          Oswald: ["Oswald", "Lato", "sans-serif"],
          'Figtree' : ['Figtree', 'sans-serif']
        },
        screens: {
          'ssm': "0px",
          // => @media (min-width: 0px) { ... },
          'smd': "600px",
          // => @media (min-width: 600px) { ... },
          'slg': "900px",
          // => @media (min-width: 900px) { ... },
          'sxl': "1200px",
          // => @media (min-width: 1200px) { ... },
          'xxl' : "1290px",
        }  
      },       
    },
  plugins: [],
};
