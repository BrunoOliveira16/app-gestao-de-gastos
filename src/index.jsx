import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// eslint-disable-next-line no-unused-vars
import { app } from './firebase/config'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
