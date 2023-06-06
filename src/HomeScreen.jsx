// import React from 'react'
import './HomeScreen.css'
import Nav from './Nav'
import Banner from './Banner'

function HomeScreen() {
  return (
        <div className="home-screen">
            {/* Navbar */}
            <Nav/>
            {/* Banner */}
            <Banner/>
            
        </div>
  )
}

export default HomeScreen