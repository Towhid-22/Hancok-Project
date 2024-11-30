/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          sm: "600px",
          md: "728px",
          lg: "1024px",
          xl: "1320px"
        },
        center: true,
      },
      colors: {
        primary: "#212529",
        primaryWhite: "#DDDDDD",
        iconBG: "#D9D9D9",
        iconColor: "#000000",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        BarlowCondensed: ["Barlow Condensed", "sans-serif"]
      },
      backgroundImage: {
        bannerImage: "url('./src/assets/banner.png')",
        horizon: "url('./src/assets/horizon.png')",
        legends: "url('./src/assets/legends.png')",
        paladins: "url('./src/assets/paladins.png')",
        TeamOne: "url('./src/assets/team1.png')",
        TeamTwo: "url('./src/assets/team2.png')",
        TeamThree: "url('./src/assets/team3.png')",
        TeamFour: "url('./src/assets/team4.png')",
      },
    },
  },
  plugins: [],
};
