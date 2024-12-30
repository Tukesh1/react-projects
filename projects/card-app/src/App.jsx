import { useState } from 'react'
import './App.css'
import IntroCard from './component/IntroCard'
import Navbar from './component/Navbar'

function App() {

  return (

    <div className='flex flex-wrap gap-4'>
       <Navbar/>
      <IntroCard/>
    </div>
  )
}

export default App
