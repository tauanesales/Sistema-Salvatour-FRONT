import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AlertProvider } from './contexts/alertContext.jsx';
import { AlertTypeProvider } from './contexts/alertTypeContext.jsx';
import { AlertColorProvider } from './contexts/alertColorContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../src/styles/global.css'
import '../src/styles/login.css'
import { Alert } from 'bootstrap';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AlertColorProvider>
    <AlertTypeProvider>
    <AlertProvider>
    <App />
    </AlertProvider>
    </AlertTypeProvider>
    </AlertColorProvider>
  </React.StrictMode>
)
