import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Component/Navbar'
import Product from './Component/Prodcut'

function App() {

  return (
    <div>
      <Nav />
      <Product/>
    </div>
  )
}

export default App
