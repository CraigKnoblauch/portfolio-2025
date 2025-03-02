Look into MDX for combining react components with the raw markdown post
Found this site for using mdx: https://trean.page/posts/2023-08-30-using-mdx-with-vite/
Github repo with a demo: https://github.com/coji/mdx-vite-example/tree/main


# Styles for pages to tailwindcss typography

h1: `text-primary-white merriweather-bold text-lg py-4`
h2: `text-secondary-gray merriweather-regular text-sm py-4`

p: `text-primary-white merriweather-regular text-sm py-4`

basically just know that most text that is content is text-sm

# TODO
Add a link to each posts page to go back home
Consolidate formatting, styles, etc. under prose

# Test cases

## Home
A screenshot should match a test screenshot on three display types
Should have links for all of the featured posts
Clicking a each link to the post will render the appropriate markdown component
Should have a link 'Everything' that will render the Explorations page
Should have a link 'resume' that links out to the google drive link
Should have a link to linkedin, github, and mail

## Explorations
A screenshot should match a test screenshot on three display types
should have a link to go home
link to go home should return Home component
should have as many hr components as there are years
should have elements whose contents match the titles of the posts
clicking one of the elements with the title should render the corresponding Markdown component

## Markdown
Screenshot should match test screenshot
Should have a header with the appropriate title
Should have a sub header with the appropriate date format
Noticed an edge case where providing the date '2020-01-01' resolved to 'December 31, 2019'. Look in the sandbox file


# Bugs

- [x] ~Format looks weird in a few places, content overflows or scales weird~
- [ ] Favicon
- [ ] Stack and scale matcap exhaust particles when in md or sm or xs screen mode.
- [ ] Code blocks don't have syntax highlighting
- [ ] Need a gap and a footer at the bottom of the page.
- [x] ~Put final touches on home page and deploy~
- [ ] Condensed professional summary.
