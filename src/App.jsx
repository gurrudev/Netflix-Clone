import React from 'react'
import {  Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'

import HomeScreen from './HomeScreen'

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<HomeScreen />} />
          </Routes>            
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
