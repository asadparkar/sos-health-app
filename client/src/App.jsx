import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Home from './pages/home'
import Footer from './components/footer'
import SendSos from './pages/SendSos'
import Sos from './pages/sos'
import ChatBot from './pages/ChatBot'
import Help from './pages/help'
import General from './pages/general'
import Signin from './components/Signin';
import Signup from './components/Signup';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (
    <div className="App">
    <Navbar />
     <div className='sm:p-10 p-2' style={{minHeight:'85vh'}}>
     <AuthContextProvider>
        <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={
            <ProtectedRoute>
          <Home />
          </ProtectedRoute>
          } />
          <Route path='/sendSos' element={
          <ProtectedRoute>
          <SendSos />
          </ProtectedRoute>
          } />
          <Route path='/sos' element={
            <ProtectedRoute>
          <Sos />
          </ProtectedRoute>
          } />
          <Route path='/chatbot' element={
            <ProtectedRoute>
          <ChatBot />
          </ProtectedRoute>
          } />
          <Route path='/procedures' element={
          <ProtectedRoute>
          <Help />
          </ProtectedRoute>
          } />
          <Route path='/general' element={
          <ProtectedRoute>
          <General />
          </ProtectedRoute>
          } />
        </Routes>
      </AuthContextProvider>
     </div>

     <footer>
      <Footer />
     </footer>

    </div>
  )
}

export default App
