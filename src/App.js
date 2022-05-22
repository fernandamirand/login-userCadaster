import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './components/Login'
import api from './services/api'


function App() {
  return (
    <div>
      <Header/>
      <Login/>
      <Footer/>
    </div>
  )
}

export default App