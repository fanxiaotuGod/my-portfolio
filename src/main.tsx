import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

console.log('main.tsx is executing'); // Debug log

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Root element not found!'); // Debug log
} else {
  console.log('Root element found, mounting app...'); // Debug log
}

ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
