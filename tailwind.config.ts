import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue' : '#0A0A2B80',
        "light-purple":"#952FFE",
        "light-pink":"#C641C6",
        "light-orange":"#FF676B",
        "dark":"#222240",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #952FFE 10.3%, #C641C6 44.39%, #FF676B 76.15%)',
      },
      backgroundSize: {
        'custom-size' : '160% 100%',
      },
      screens: {  
        'md' : '769px',
        'lg' : '1025px'
      }
    },
  },
  plugins: [],
} satisfies Config;
