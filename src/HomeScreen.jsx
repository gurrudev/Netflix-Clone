// import React from 'react'
import './HomeScreen.css'
import Nav from './Nav'
import Banner from './Banner'
import requests from './Request'
import Row from './Row'

function HomeScreen() {
  return (
        <div className="home-screen">
           
            <Nav/>
            <Banner/>
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action " fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy " fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror " fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance " fetchUrl={requests.fetchRomanticMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
            
        </div>
  )
}

export default HomeScreen