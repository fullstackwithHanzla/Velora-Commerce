import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ToastProvider} from './layouts/providers/ToastProvider.jsx'
import Root from './Root.jsx'




createRoot(document.getElementById('root')).render(
  <ToastProvider>
    <Root />
  </ToastProvider>
)


