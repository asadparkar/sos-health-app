import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className="App">
    <Navbar />
     <div className='sm:p-10 p-2' style={{minHeight:'85vh'}}>
     <Routes>
      <Route path='/' component={<Home />} />
     </Routes>
    </div>
    <footer>
      <Footer />
    </footer>
    </div>
  )
}

export default App
