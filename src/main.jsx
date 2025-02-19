import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Explorations from './Explorations.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Explorations /> */}
  </StrictMode>,
)
