import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute'
import Ambulance from './pages/ambulance'
import Hospital from './pages/hospital'
import NotFound from '../src/pages/NotFound'
import SendSMS from './pages/SendSMS'
function App() {

  return (
    <div className="App">
    <Navbar />
     <div className='sm:p-10 p-2' style={{minHeight:'85vh'}}>
     <AuthContextProvider>
     <Routes>
      <Route path='/' element={<Signin />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/signup' element={<Signup />} />
      <Route path="/sms" element={<SendSMS />} />
      <Route path='/account' element={
        <ProtectedRoute>
          <Account />
        </ProtectedRoute>
      } />
      <Route path='/hospital' element={
        <ProtectedRoute>
          <Hospital />
        </ProtectedRoute>
      } />
      <Route path='/ambulance' element={
      <ProtectedRoute>
          <Ambulance />
      </ProtectedRoute>
      }/>
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
