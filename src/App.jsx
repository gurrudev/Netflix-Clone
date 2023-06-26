import React from 'react'
import {  Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'

import HomeScreen from '../src/screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'

function App() {
  const user = null;
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            {!user ?(
              <Route exact path="/" element={<LoginScreen/>} />
            ) : (
              <Route exact path="/" element={<HomeScreen />} />
            )}
          </Routes>            
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
