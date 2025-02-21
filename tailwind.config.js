module.exports = {
  content:  [
    "./src/**/*.{js,jsx,ts,tsx,mdx}", // Ensure MDX files are included
    "./src/*.{js,ts,jsx,tsx,json,css}"
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
