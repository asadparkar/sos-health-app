import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Home from './pages/home'
import Footer from './components/footer'

function App() {

  return (
    <div className="App">
    <Navbar />
     <div style={{minHeight:'85vh',padding:'3rem'}}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
     </div>

     <footer>
      <Footer />
     </footer>

    </div>
  )
}

export default App
