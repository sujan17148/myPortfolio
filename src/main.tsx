import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { ThemeContextProvider } from './Context/ThemeContext.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <App/>
    </ThemeContextProvider>
  </StrictMode>,
)
