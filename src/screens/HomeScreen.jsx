// import React from 'react'
import './HomeScreen.css'
import Nav from '../Nav'
import Banner from '../Banner'
import requests from '../../helper/request'
import Row from '../Row'

function HomeScreen() {
  return (
        <div className="home-screen">
           
            <Nav/>
            <Banner/>
            <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
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