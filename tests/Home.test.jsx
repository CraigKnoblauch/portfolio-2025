/**
 * [ ] HOLD until css is in screenshots A screenshot should match a test screenshot on three display types
 * [x] Should have links for all of the featured posts
 * [ ] Clicking a each link to the post will render the appropriate markdown component
 * [x] Should have a link 'Everything' that will render the Explorations page
 * [x] Should have a link 'resume' that links out to the google drive link
 * [x] Should have a link to linkedin, github, and mail
 */
import { expect, it, describe, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { screen } from '@testing-library/react'
import { userEvent, page } from '@vitest/browser/context'
import { MemoryRouter } from 'react-router-dom'
import Home from 'src/Home.jsx'
import { POSTS } from 'tests/test-posts.js'

// NOTE Reference this to test routes: https://stackoverflow.com/questions/74399490/how-to-test-routing-logic-with-react-router-v6-and-testing-library
describe('Home page', () => {
    it('should have links to all featured posts', async () => {
        render(
        <MemoryRouter initialEntries={['/']}>
            <Home posts={POSTS} />
        </MemoryRouter>
        )

        const featuredPosts = POSTS.filter(post => post.featured);

        const posts = screen.getAllByTestId('featured-post');
        console.log(posts);
        expect(posts.length).toBe(featuredPosts.length);

        posts.forEach((post, index) => {
            expect(post.textContent).toContain(featuredPosts[index].title);
            expect(post.textContent).toContain(featuredPosts[index].description);
        });
    })

    it('should have a link to the Explorations toc page', async () => {
        render(
        <MemoryRouter initialEntries={['/']}>
            <Home posts={POSTS} />
        </MemoryRouter>
        )

        const link = screen.getByRole('link', { name: 'Everything' })
        expect(link.getAttribute('href')).toBe('/explorations')     
    })

    it('should have a link to resume', async () => {
        render(
        <MemoryRouter initialEntries={['/']}>
            <Home posts={POSTS} />
        </MemoryRouter>
        )

        const link = screen.getByRole('link', { name: 'resume' })
        expect(link.getAttribute('href')).toContain('drive.google.com')   
    })

    it('should have a link to LinkedIn', async () => {
        render(
        <MemoryRouter initialEntries={['/']}>
            <Home posts={POSTS} />
        </MemoryRouter>
        )

        const link = screen.getByRole('link', { name: 'LinkedIn' })
        expect(link.getAttribute('href')).toBe('https://www.linkedin.com/in/craig-knoblauch-b88563124')  
    })

    it('should have a link to Github', async () => {
        render(
        <MemoryRouter initialEntries={['/']}>
            <Home posts={POSTS} />
        </MemoryRouter>
        )

        const link = screen.getByRole('link', { name: 'Github' })
        expect(link.getAttribute('href')).toBe('https://github.com/CraigKnoblauch')  
    })

    it('should have a link to Mail', async () => {
        render(
        <MemoryRouter initialEntries={['/']}>
            <Home posts={POSTS} />
        </MemoryRouter>
        )

        const link = screen.getByRole('link', { name: 'Mail' })
        expect(link.getAttribute('href')).toBe('mailto:todo@example.com')   
    })
})
