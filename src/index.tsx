import ReactDom from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App'
import './globals.css'

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
