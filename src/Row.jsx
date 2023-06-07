import axios from './Axios';
import React, { useEffect, useState } from 'react'

function Row({title, fetchUrl, isLargeRow = false}) {

    const base_url = `https://image.tmdb.org/t/p/original/`;

    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }

        fetchData();
    },[fetchUrl])

    // console.log(movie)

  return (
    <div className='row'>
        <h2>{title}</h2>

        {movies.map(movie => (
            <img src={`${base_url}${
                isLargeRow? movie.poster_path : movie.backdrop_path 
            }`} alt={movie.name}/>
        ))}
    </div>
  )
}

export default Row