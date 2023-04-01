import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Home from './pages/home'
import Footer from './components/footer'
import SendSos from './pages/SendSos'

function App() {

  return (
    <div className="App">
    <Navbar />
     <div className='sm:p-10 p-2' style={{minHeight:'85vh'}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sendSos' element={<SendSos />} />
        </Routes>
     </div>

     <footer>
      <Footer />
     </footer>

    </div>
  )
}

export default App
