import React, { useEffect } from 'react'
import "./Banner.css"
import { useState } from 'react';
import axios from './Axios.js';
import requests from './Request';
export default function Banner() {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchTopRated);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )

            return request;
        }
        fetchData();
    },[])

    console.log(movie)


    function truncate(str , n) {
        return str.length > n? str.substr(0, n - 1) + '...' : str;
    }


  return (
    <>
        <header className='banner' style={{
                backgroudSize : "cover",
                backgroundImage : `url("https://res.cloudinary.com/practicaldev/image/fetch/s--THrf5Yjw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n6brz4p7iq7j1mulo1nv.jpg")`,
                backgroundPosition : 'center center'
            }}>

            <div className="banner-contents">
                <h1 className="banner-title"> Movie Name</h1>
                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className= "banner-button">My List</button>
                </div>
                <h1 className="banner-discription">{truncate(`This is banner DiscriptionThis is banner DiscriptionThis is banner DiscriptionThis is banner DiscriptionThis is banner DiscriptionThis is banner DiscriptionThis is banner Discription
                This is banner Discription`)}</h1>
            </div>

            <div className="banner-fadeBottom">

            </div>

        </header>
    </>
  )
}

