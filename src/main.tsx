import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MockDatabaseProvider } from './context/MockDatabaseContext.tsx'
import { CartProvider } from './context/CartContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MockDatabaseProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </MockDatabaseProvider>
  </StrictMode>,
)
