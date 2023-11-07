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
            
   "accent": "#06032e",
            
   "neutral": "",
            
   "base-100": "#1d232a",
            
   "info": "#023a4d",
            
   "success": "#36d399",
            
   "warning": "",
            
   "error": "#f87272",
            },
          },
        ],
      
      extend: {},
    },
    resolve: {
      fallback: {
        "crypto": require.resolve("crypto-browserify"),
      },
    },
    plugins: [require("daisyui"),require('flowbite/plugin')],
    
  }