module.exports = {
  content:  [
    "./src/**/*.{js,jsx,ts,tsx,mdx}", // Ensure MDX files are included
    "./src/*.{js,ts,jsx,tsx,json,css}"
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
        'primary-white': '#efefef',
        'secondary-gray': '#a3a3a3'
    },
    extend: {
        typography: ({ theme }) => ({
            DEFAULT: {
                css: {
                    '--tw-prose-body': theme('colors.primary-white'),
                    '--tw-prose-headings': theme('colors.primary-white'),
                    '--tw-prose-lead': theme('colors.primary-white'),
                    '--tw-prose-links': theme('colors.primary-white'),
                    '--tw-prose-bold': theme('colors.primary-white'),
                    '--tw-prose-counters': theme('colors.primary-white'),
                    '--tw-prose-bullets': theme('colors.secondary-gray'),
                    '--tw-prose-hr': theme('colors.primary-white'),
                    '--tw-prose-quotes': theme('colors.secondary-gray'),
                    '--tw-prose-quote-borders': theme('colors.secondary-gray'),
                    '--tw-prose-captions': theme('colors.primary-white'),
                    '--tw-prose-code': theme('colors.secondary-gray'),
                    '--tw-prose-pre-code': theme('colors.secondary-gray'),
                    // '--tw-prose-pre-bg': theme('colors.secondary-gray'),
                    '--tw-prose-th-borders': theme('colors.primary-white'),
                    '--tw-prose-td-borders': theme('colors.primary-white'),
                    '--tw-prose-invert-body': theme('colors.primary-white'),
                    '--tw-prose-invert-headings': theme('colors.primary-white'),
                    '--tw-prose-invert-lead': theme('colors.primary-white'),
                    '--tw-prose-invert-links': theme('colors.primary-white'),
                    '--tw-prose-invert-bold': theme('colors.primary-white'),
                    '--tw-prose-invert-counters': theme('colors.primary-white'),
                    '--tw-prose-invert-bullets': theme('colors.secondary-gray'),
                    '--tw-prose-invert-hr': theme('colors.primary-white'),
                    '--tw-prose-invert-quotes': theme('colors.secondary-gray'),
                    '--tw-prose-invert-quote-borders': theme('colors.secondary-gray'),
                    '--tw-prose-invert-captions': theme('colors.primary-white'),
                    '--tw-prose-invert-code': theme('colors.secondary-gray'),
                    '--tw-prose-invert-pre-code': theme('colors.secondary-gray'),
                    // '--tw-prose-invert-pre-bg': theme('colors.primary-white'),
                    '--tw-prose-invert-th-borders': theme('colors.primary-white'),
                    '--tw-prose-invert-td-borders': theme('colors.primary-white'),
                // color: '#fff',
                a: {
                    color: '#fff',
                    textDecoration: 'none',
                    '&:hover': {
                    textDecoration: 'underline',
                    },
                },
                },
            },
        }),
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
