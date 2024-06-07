import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

axios.defaults.baseURL = "https://start21-backend.onrender.com/api"
axios.defaults.headers.common["Token"] = sessionStorage.getItem('token')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
