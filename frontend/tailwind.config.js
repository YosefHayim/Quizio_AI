/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        poppins_100: ['Poppins_100Thin'],
        poppins_200: ['Poppins_200ExtraLight'],
        poppins_300: ['Poppins_300Light'],
        poppins_400: ['Poppins_400Regular'],
        poppins_500: ['Poppins_500Medium'],
        poppins_600: ['Poppins_600SemiBold'],
        poppins_700: ['Poppins_700Bold'],
        poppins_800: ['Poppins_800ExtraBold'],
      },
      colors: {
        blue_sky: '#0021C5',
        paper_white: '#FFFFFF',
        green_seed: '#3CE300',
        black_hole: '#000000',
      },
    },
  },
  plugins: [],
};
