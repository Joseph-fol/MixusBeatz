import React, { useEffect, useState } from 'react'
import './index.css'

const Home = () => {
    const [details, setDetails] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("https://music-api-c8ra.onrender.com/music")
            .then(res => res.json())

            .then(result => {
                setDetails(result)
                setIsLoading(false)
                console.log(result);
            })

            .catch(err => {
                console.log(err);
                if(err == "Failed to fetch"){
                    alert("Something went wrong")
                }
            })
    }, [])

    return (
        <>
            <div style={{ background: "#000000" }}>
                {isLoading ?
                    <div class="d-flex justify-content-center text-white">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    (<div className='cardSection'>
                        <div className='trendingMusic'>
                            <div className='text-light lh-6'>
                                <h3 style={{ color: "#dde0e9" }}>Trending</h3>
                                <span style={{ fontSize: "16px" }}>Hottest Frequencies in the neon circuit</span>
                            </div>

                            <div>
                                <a href="#" style={{ color: "#dde0e9", fontSize: "12px", textDecoration: "none" }}><p>VIEW ALL</p></a>
                            </div>
                        </div>

                        <div className="musicGrid">
                            {details.map((detail) => (
                                <div className="musicCard" key={detail.id}>
                                    <img src={detail.image} alt={detail.nameOfArtist} />

                                    <div className='musicDetail'>
                                        <div>
                                            <p className="musicCardTitle">{detail.nameOfArtist}</p>
                                            <p style={{ color: "#ff00e5" }}>{detail.nameOfSOng}</p>
                                        </div>
                                        <div>
                                            {detail.duration}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>)
                }
            </div>
        </>
    )
}

export default Home