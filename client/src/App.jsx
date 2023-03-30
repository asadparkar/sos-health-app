import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Home from './pages/home'

function App() {

  return (
    <div className="App">
    <Navbar />
     <div>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
     </div>

    </div>
  )
}

export default App
