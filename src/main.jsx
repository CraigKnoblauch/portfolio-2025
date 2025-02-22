import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Explorations from './Explorations.jsx'
import Markdown from './Markdown.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route path="/explorations" element={<Explorations />} />
            <Route path="/markdown" element={<Markdown />} />
        </Routes>
    </Router>
  </StrictMode>,
)
