/**
 * [ ] HOLD until get css working in vitest browser window A screenshot should match a test screenshot on three display types
 * [x] should have a link to go home
 * [ ] link to go home should return Home component
 * [x] should have as many hr as there are years
 */
import { expect, it, describe, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { screen } from '@testing-library/react'
import { userEvent, page } from '@vitest/browser/context'
import { MemoryRouter } from 'react-router-dom'
import { POSTS } from 'tests/test-posts.js'
import Explorations from 'src/Explorations'

// NOTE Reference this to test routes: https://stackoverflow.com/questions/74399490/how-to-test-routing-logic-with-react-router-v6-and-testing-library
describe('Explorations', () => {
    it.skip('screenshot should match expected', async () => {
        render(
        <MemoryRouter initialEntries={['/']}>
            <Explorations posts={POSTS} />
        </MemoryRouter>
        )

        const screenshot = await page.screenshot();
        expect(screenshot).toMatchFileSnapshot('screenshots/expectedExplorations.png');
    })

    it('should have a link to go home', async () => {
        render(
        <MemoryRouter initialEntries={['/']}>
            <Explorations posts={[]} />
        </MemoryRouter>
        )

        const link = screen.getByRole('link', { name: 'home' })
        expect(link.getAttribute('href')).toBe('/')
    })

    it('should have as many hr elements as there are years', async () => {
        render(
        <MemoryRouter initialEntries={['/']}>
            <Explorations posts={POSTS} />
        </MemoryRouter>
        )

        const years = new Set(POSTS.map(post => new Date(post.date).getFullYear()));
        const hRules = document.getElementsByTagName('hr');
        expect(hRules.length).toBe(years.size);
    })

    it('should have a link for each post', async () => {
        render(
        <MemoryRouter initialEntries={['/']}>
            <Explorations posts={POSTS} />
        </MemoryRouter>
        )

        const posts = screen.getAllByTestId('post');
        expect(posts.length).toBe(POSTS.length);
    })

    it('each post link should map to the right slug', async () => {
        render(
        <MemoryRouter initialEntries={['/']}>
            <Explorations posts={POSTS} />
        </MemoryRouter>
        )

        const posts = screen.getAllByTestId('post');
        posts.forEach((post, index) => {
            // Depends on posts.js to stay in order
            const childLink = post.querySelector('a')
            expect(childLink.getAttribute('href')).toBe(`/explorations/${POSTS[index].slug}`);
        });
    })

    it('each post should have the right title', async () => {
        render(
        <MemoryRouter initialEntries={['/']}>
            <Explorations posts={POSTS} />
        </MemoryRouter>
        )

        const posts = screen.getAllByTestId('post');
        posts.forEach((post, index) => {
            expect(post.textContent).toContain(POSTS[index].title);
        });
    })

    it('each post should have the right date', async () => {
        render(
        <MemoryRouter initialEntries={['/']}>
            <Explorations posts={POSTS} />
        </MemoryRouter>
        )

        const posts = screen.getAllByTestId('post');
        posts.forEach((post, index) => {
            expect(post.textContent).toContain(new Date(POSTS[index].date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
            }));
        });
    })
})
