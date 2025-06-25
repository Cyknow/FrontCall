import { useState } from 'react'
import './App.css'
import HomePage from './Pages/Home/HomePage'
import { Route, Routes } from 'react-router-dom'
import Display from './Pages/DisplayProduct/Display'



function App() {
  const [] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path="/Displayproduct/:id" element={<Display/>} />
    </Routes>         
  )
}

export default App
