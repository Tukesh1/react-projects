import { useState } from 'react'
import './App.css'
import IntroCard from './component/IntroCard'
import Navbar from './component/Navbar'
import Header from './component/Header'
import Footer from './component/Footer'
function App() {

  return (
    <>
      <Navbar />
      <div className="flex-none h-[var(--content-offset)]"></div>
      <Header />
      <Footer />
    </>
  )
}

export default App
