import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Header } from './components/Header'

import './index.scss' 

const App = () => (
  <BrowserRouter>
    <Header isOpenMenuMovil={true} onOpenMenuMovil={()=>{}} onSubmitSearchProduct={()=>{}} />
  </BrowserRouter>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
