/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
   
      daisyui: {
        themes: [
          {
            mytheme: {
            
   "primary": "#708090",
            
   "secondary": "#ff6347",
            
   "accent": "#1fb2a6",
            
   "neutral": "",
            
   "base-100": "#1d232a",
            
   "info": "#3abff8",
            
   "success": "#36d399",
            
   "warning": "",
            
   "error": "#f87272",
            },
          },
        ],
      
      extend: {},
    },
    plugins: [require("daisyui"),require('flowbite/plugin')],
  }