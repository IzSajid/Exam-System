/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
   
      daisyui: {
        themes: [
          {
            mytheme: {
            
   "primary": "#708090",
            
   "secondary": "#d926a9",
            
   "accent": "#1fb2a6",
            
   "neutral": "#708090",
            
   "base-100": "#1d232a",
            
   "info": "#3abff8",
            
   "success": "#36d399",
            
   "warning": "#fbbd23",
            
   "error": "#f87272",
            },
          },
        ],
      
      extend: {},
    },
    plugins: [require("daisyui")],
  }