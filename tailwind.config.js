/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Wildy Sans Regular', 'sans-serif'],
        body: ['Syne', 'sans-serif'], 
        links: ['Norse', 'normal'],
        heading: ['Amarante', 'serif'],
        
      },
      colors: {
        background: "#14272F",
        cardbg: "#082134",
        nightblue: "#04121E",
        offwhite: "#EFEFEF",
        hotpink: "#FF60B1",
        bluegreen: "#113C54",
        lightgreen: "#328F99",
        brightturquise: "#1EFFE7",
      },
      backgroundImage: {
        'bgIMG': "url('/src/assets/images/background.png')",
    },
  },
  },
  plugins: [],
};