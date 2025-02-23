/**
 * [ ] HOLD until get css working in vitest browser window A screenshot should match a test screenshot on three display types
 * [x] should have a link to go home
 * [ ] link to go home should return Home component
 * [x] should have as many hr as there are years
 */
import { expect, it, describe, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Markdown from 'src/Markdown'
import { POSTS } from 'tests/test-posts'

// NOTE Reference this to test routes: https://stackoverflow.com/questions/74399490/how-to-test-routing-logic-with-react-router-v6-and-testing-library
describe('Markdown', () => {
    it('should have a link to go to table of contents', async () => {
        // render(
        // <MemoryRouter initialEntries={['/']}>
        //     <Markdown posts={POSTS}/>
        // </MemoryRouter>
        // )

        // const links = screen.getByRole('link', { name: 'explorations' })
        // expect(link.getAttribute('href')).toBe('/explorations')

        // TODO Need to be able to mock usePramams, which in turn will need more changes like needed for the other
        // route testing
        expect(true).toBe(true)
    })
})
