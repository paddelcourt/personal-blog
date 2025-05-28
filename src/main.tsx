import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Polyfill for Buffer to support gray-matter in the browser
import { Buffer } from 'buffer'
window.Buffer = Buffer

createRoot(document.getElementById("root")!).render(<App />);
