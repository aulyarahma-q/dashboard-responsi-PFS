import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// INI YANG PALING PENTING SUPAYA GRID & STYLE BOOTSTRAP KELUAR
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)