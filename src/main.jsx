import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'src/index.css'
import Home from './Home.jsx'
import Explorations from './Explorations.jsx'
import Markdown from './Markdown.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { POSTS } from 'src/posts.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
        <Routes>
            <Route exact path="/" element={<Home posts={POSTS} />} />
            <Route path="/explorations" element={<Explorations posts={POSTS} />} />
            <Route path="/explorations/:slug" element={<Markdown posts={POSTS}/>} />
        </Routes>
    </Router>
  </StrictMode>,
)
