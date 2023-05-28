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
import NotFound from './pages/NotFound'
import MentalBot from './pages/MentalBot'

import Account from './components/Account'
import Mental from './pages/Mental'
import Meditation from './pages/Meditation'
function App() {

  return (
    <div className="App">
     <AuthContextProvider>
    <Navbar />
     <div className='sm:p-10 p-2' style={{minHeight:'85vh'}}>
        <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={
            <ProtectedRoute>
          <Home />
          </ProtectedRoute>
          } />
          <Route path='/account' element={
        <ProtectedRoute>
          <Account />
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
          <Route path='/mental-health' element={
          <ProtectedRoute>
          <MentalBot />
          </ProtectedRoute>
          } />
          <Route path='/mental' element={
          <ProtectedRoute>
          <Mental />
          </ProtectedRoute>
          } />
          <Route path='/meditation' element={
          <ProtectedRoute>
          <Meditation />
          </ProtectedRoute>
          } />
        </Routes>
        
     </div>
     

     <footer>
     
      <Footer />
      
     </footer>
           </AuthContextProvider>


    </div>
  )
}

export default App
