import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Nosotros configuramos el entorno de React
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />  {/* COMPONENTE PRINCIPAL */}
  </StrictMode>,
)
