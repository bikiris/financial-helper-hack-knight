import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router'
import App from "./App"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      <Router />
    </App>
    
  </StrictMode>,
)
