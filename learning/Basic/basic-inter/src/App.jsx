import { useState } from 'react'
import WelcomeMessage from "./component/WelcomeMessage"
import './App.css'
import Greeting from './component/greetiings'
import Product from './component/Product-info'
import ListOfProducts from './component/ListOfproduct'


function App() {
  //  Rendering in function 
  // const myAge =0
  // const multiply =(a,b)=>a*b 
  return (
    <>
     <Product/>
     {/* margin below by 10px */}
     <h3 className='text mt-5 mb-4'>List of Products are :- </h3>
    <ListOfProducts/>
    </>
  )
}

export default App
