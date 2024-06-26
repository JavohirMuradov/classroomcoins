import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import LoginContext from './utils/LoginContext.jsx'
import Students from './utils/Students.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LoginContext>
      <Students>
        <App />
      </Students>
    </LoginContext>
  </BrowserRouter>
)
