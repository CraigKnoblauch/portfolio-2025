import { POSTS } from "src/posts.js"
import { PostsToc } from "src/PostsToc.jsx"
import { Link } from 'react-router-dom'

function Explorations() {

  return (
    <>
        {/* Master flexbox container for the entire page. Gives column flex box with one column. That column has a max width */}
        <div className="flex flex-col items-center min-h-screen w-full"> 
            <div className="justify-left w-8/10 lg:w-1/2">
                {/* Link home */}
                <Link to="/" className="text-secondary-gray merriweather-regular-italic underline text-sm">home</Link>
                <h1 className="text-primary-white merriweather-bold text-lg pt-4">Explorations</h1>

                <PostsToc posts={POSTS} />

            </div>
        </div>
    </>
  )
}

export default Explorations
