import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Colors:{
    //   "color1" : "#D4BEE4",
    //   "color2" : "#9B7EBD",
    //   "color3" : "#3B1E54",
    // },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color1: "#014D0F",
        color2: "#1A1A19",
      },
      spacing: {
        "2px": "2px",
        "5px": "5px",
        "10px": "10px",
        "15px": "15px",
        "20px": "20px",
        "25px": "25px",
        "35px": "35px",
        "40px": "40px",
        "50px": "50px",
        "60px": "60px",
        "100px": "100px",
        "10%": "10%",
        "30%": "30%",
        "20%": "20%",
        "40%": "40%",
        "45%": "45%",
        "50%": "50%",
        "60%": "60%",
        "70%": "70%",
        "80%": "80%",
      },

    },
  },
  plugins: [],
};
export default config;
