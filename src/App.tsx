import React from 'react'
import './styles/global.css'
import { Header } from './components/Header/Header'
import { Router } from './router'

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Router />
      </div>
    </div>
  )
}

export default App
