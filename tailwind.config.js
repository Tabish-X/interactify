/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./UI/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': 'Poppins',
        "Ubuntu": "Ubuntu"
      },
      colors: {
        "red-1": "#FC0404",
        "red-2": "#DB141C",
        "black": "#0C0C0C",
        "placeholder-1": "#5E5E5E",
        "placeholder-2": "#363636",
        "lite-1": "#D6D6D6",
        "lite-2": "#f4f4f4",
        "body-overlay": "#f0f2f5",
        "hover-overlay-1": "#efefefd1",
        "gray-shade-1": "#626262"
      },
      fontSize: {
        "xs": "12px",
        "sm": "14px",
        "base": "15px",
        "md": "16px",
        "lg": "17px",
        "xl": "18px",
        "2xl": "20px",
        "3xl": "24px"
      },
      fontWeight: {
        "thin": "100",
        "lite": "300",
        "normal": "400",
        "semibold": "500",
        "bold": "600",
        "extrabold": "700"
      },
      height: {
        "header-height": "4rem"
      },
      zIndex: {
        "1": "1",
      }
    },
  },
  plugins: [],
};
