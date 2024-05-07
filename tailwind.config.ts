import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#689EB8',
        grey: '#F3F4F6',
        brown: '#A79B94',
        red: '#FF5A60'
      },
    },
  },
  plugins: [],
};
export default config;
