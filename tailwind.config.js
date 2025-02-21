module.exports = {
  content:  [
    "./src/**/*.{js,jsx,ts,tsx,mdx}", // Ensure MDX files are included
    "./src/*.{js,ts,jsx,tsx,json,css}"
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        typography: {
        DEFAULT: {
            css: {
            color: '#fff',
            a: {
                color: '#fff',
                textDecoration: 'none',
                '&:hover': {
                textDecoration: 'underline',
                },
            },
            },
        },
        },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
