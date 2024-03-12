import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../Nav'
import { API_KEY } from '../../helper/request'
import axios from 'axios'
import './ShowDetails.css'

const ShowDetails = () => {

    const { type, id } = useParams()
    const [data, setData] = useState({})

    const [selectedTab, setSelectedTab] = useState('option1');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };


    const image_url = `https://image.tmdb.org/t/p/original/`;

    const fetchUrl = `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`

    console.log(data)

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setData(request.data)
            return request;
        }
        fetchData();
    }, [fetchUrl])


    return (

        <div className='show-details-page'>
            <Nav />

            <div className='show-details-body'>
                <div className='show-poster'>
                    <img src={`${image_url}${data.poster_path}`} alt="" />
                </div>
                <div className='show-details'>
                    <div className='show-title'>
                        <h1>{(type === 'tv') ? data.original_name : data.original_title}</h1>
                        <h2>{(data?.vote_average)?.toFixed(1)}⭐</h2>
                    </div>
                    <div className="show-date">
                        <span>{new Date((type === 'movie') ? data.release_date : data.first_air_date).getFullYear()} &nbsp; | &nbsp; {(data.adult === false) ? '16+' : '18+'}</span>
                    </div>

                    <div className="tabs-container">
                        <div
                            className={`tab ${selectedTab === 'option1' ? 'active' : ''}`}
                            onClick={() => handleTabClick('option1')}
                            disabled={selectedTab !== 'option1'}
                        >
                            OVERVIEW
                        </div>
                        <div
                            className={`tab ${selectedTab === 'option2' ? 'active' : ''}`}
                            onClick={() => handleTabClick('option2')}
                            disabled={selectedTab !== 'option2'}
                        >
                            TRAILERS & MORE
                        </div>
                        <div
                            className={`tab ${selectedTab === 'option3' ? 'active' : ''}`}
                            onClick={() => handleTabClick('option3')}
                            disabled={selectedTab !== 'option3'}
                        >
                            MORE LIKE THIS
                        </div>
                        <div
                            className={`tab ${selectedTab === 'option4' ? 'active' : ''}`}
                            onClick={() => handleTabClick('option4')}
                            disabled={selectedTab !== 'option4'}
                        >
                            DETAILS
                        </div>

                    </div>

                    <div className="tab-content">
                        {selectedTab === 'option1' &&
                            <div className='show-overview'>
                                <p>{data.overview}</p>
                                <p className='show-overview-details'>
                                    <span className='overview-key'>Genres: </span>
                                    {data?.genres?.map((item, index) =>
                                        <span key={index}>{item.name} , </span>
                                    )}
                                </p>
                                <p className='show-overview-details'>
                                    <span className='overview-key'>Language: </span>
                                    {data?.spoken_languages?.map((item, index) =>
                                        <span key={index}>{item.english_name} , </span>
                                    )}
                                </p>


                                <p className='show-overview-details'>
                                    <span className='overview-key'>Production Companies: </span>
                                    {data?.production_companies?.map((item, index) =>
                                        <span key={index}>{item.name} , </span>
                                    )}
                                </p>

                                <p className='show-overview-details'>
                                    <span className='overview-key'>Production Countries: </span>
                                    {data?.production_countries?.map((item, index) =>
                                        <span key={index}>{item.name} </span>
                                    )}
                                </p>
                                <p className='show-overview-details'>
                                    <span className='overview-key'>Status: </span>
                                    {data.status}
                                </p>
                               
                                
                            </div>}
                        {selectedTab === 'option2' &&
                            <div className=''>

                            </div>}
                        {selectedTab === 'option3' &&
                            <div className=''>
                                3
                            </div>}
                        {selectedTab === 'option4' &&
                            <div className=''>
                                4
                            </div>}
                    </div>
                </div>
            </div>
            {/* <div className="movie-details">
        <img className="movie-poster" style={{width: '200px'}} src={`${image_url}${data.backdrop_path}`} alt="Movie Poster"/>
        <h2 className="movie-title">{(type==='tv') ? data.original_name : data.original_title}</h2>
        <div className='movie-generes' >
        {data?.genres?.map((item, index) => 
            <span key={index}>{item.name}</span>
            )}
        </div>
        <p className="movie-overview">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum diam sit amet vehicula malesuada.</p>
        <div className="movie-info">
            <span>Release Date: January 1, 2022</span>
            <span>Rating: 8.5</span>
        </div>
        <a href="#" className="button">Watch Now</a>
    </div> */}
        </div>
    )
}

export default ShowDetails