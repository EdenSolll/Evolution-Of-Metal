import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import dotenv from 'dotenv'

dotenv.config({ path: './.env'})

console.log(process.env.VITE_APP_PORT)

const rootElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootElement)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
