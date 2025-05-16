import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './components/header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
  </StrictMode>,
)
