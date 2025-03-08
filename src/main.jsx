import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <BrowserRouter>
        <App>
            <Router />
        </App>
    </BrowserRouter>
    
  </StrictMode>,
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js', { scope: '/' })
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

// serviceWorkerRegistration.unregister();