import axios from '../helper/Axios';
import React, { useEffect, useState } from 'react'
import './Row.css'
import { Link, useNavigate } from 'react-router-dom';


function Row({ title, fetchUrl, isLargeRow = false }) {

    const base_url = `https://image.tmdb.org/t/p/original/`;

    const navigate = useNavigate()

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl])

    // console.log(movies)

    return (<>

        <div className='row'>
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(
                    (movie) =>
                        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                            <img
                                key={movie.id} 
                                className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                                alt={movie.name}
                                onClick={() => navigate(`/show/${isLargeRow ? 'tv' : 'movie'}/${movie.id}`)}
                            />
                        )
                    )
                }
            </div>

        </div>
    </>)
}

export default Row