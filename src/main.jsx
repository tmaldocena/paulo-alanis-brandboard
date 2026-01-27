import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PendingPayment from './PendingPayment.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// Simple routing logic for demonstration
const page = window.location.pathname.replace('/', '');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {page === 'pendingPayment' ? <PendingPayment /> : <App />}
  </StrictMode>
);
