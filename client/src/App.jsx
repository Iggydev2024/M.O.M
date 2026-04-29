import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom' 
import HomeLayout from './layout/HomeLayout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
    </Routes>
  )
}

export default App
