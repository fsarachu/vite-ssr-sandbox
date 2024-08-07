import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

console.log('Hello from client')

const pageData = typeof window !== 'undefined' ? (window as any).__PAGE_DATA__ : undefined

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <App pageData={pageData}/>
  </React.StrictMode>
)
