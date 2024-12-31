/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'scroll 20s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
      colors:{
        primary: {
                    light: '#588D7F',
                    default: '#00634A',
                    dark: '#434343',
                  },
                  secondary: {
                    light: '#FFD166',
                    default: '#FAA916',
                    dark: '#A6660B',
                  },
      }
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./src/pages/*/.{js,ts,jsx,tsx,mdx}",
//     "./src/components/*/.{js,ts,jsx,tsx,mdx}",
//     "./src/app/*/.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       // colors: {
//       //   background: "var(--background)",
//       //   foreground: "var(--foreground)",
//       // },
//       colors: {
//         primary: {
//           light: '#588D7F',
//           default: '#00634A',
//           dark: '#434343',
//         },
//         secondary: {
//           light: '#FFD166',
//           default: '#FAA916',
//           dark: '#A6660B',
//         },
//       },
//     },
//   },
//   plugins: [],
// };