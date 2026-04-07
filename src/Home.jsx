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
                if (err == "Failed to fetch") {
                    alert("Something went wrong")
                }
            })
    }, [])

    return (
        <>
            <div style={{ background: "#000000" }}>
                {isLoading ?
                    <div class="d-flex justify-content-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g><circle cx="12" cy="3" r="1" fill="#fff"><animate id="SVGelgoqhuA" attributeName="r" begin="0;SVGSRzJybSJ.end-0.5s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="16.5" cy="4.21" r="1" fill="#fff"><animate id="SVGBcQu6cCi" attributeName="r" begin="SVGelgoqhuA.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="7.5" cy="4.21" r="1" fill="#fff"><animate id="SVGSRzJybSJ" attributeName="r" begin="SVGeZGzNdVZ.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="19.79" cy="7.5" r="1" fill="#fff"><animate id="SVGG5Q0fe0M" attributeName="r" begin="SVGBcQu6cCi.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="4.21" cy="7.5" r="1" fill="#fff"><animate id="SVGeZGzNdVZ" attributeName="r" begin="SVGUTnihcal.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="21" cy="12" r="1" fill="#fff"><animate id="SVG8aQG8dpc" attributeName="r" begin="SVGG5Q0fe0M.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="3" cy="12" r="1" fill="#fff"><animate id="SVGUTnihcal" attributeName="r" begin="SVGHktsvT5Q.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="19.79" cy="16.5" r="1" fill="#fff"><animate id="SVGqCF3Scrd" attributeName="r" begin="SVG8aQG8dpc.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="4.21" cy="16.5" r="1" fill="#fff"><animate id="SVGHktsvT5Q" attributeName="r" begin="SVGSFNCBbxb.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="16.5" cy="19.79" r="1" fill="#fff"><animate id="SVGMFYo1cJN" attributeName="r" begin="SVGqCF3Scrd.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="7.5" cy="19.79" r="1" fill="#fff"><animate id="SVGSFNCBbxb" attributeName="r" begin="SVGLSoLpdOI.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><circle cx="12" cy="21" r="1" fill="#fff"><animate id="SVGLSoLpdOI" attributeName="r" begin="SVGMFYo1cJN.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="1;2;1"/></circle><animateTransform attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="360 12 12;0 12 12"/></g></svg>
                        
                        {/* <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div> */}
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
                            {
                            details.map((detail) => (
                                <div className="musicCard" key={detail.id}>
                                    <img src={detail.image} alt={detail.nameOfArtist} />
                                    <div className='musicDetail'>
                                        <div>
                                            <p className="musicCardTitle">{detail.nameOfArtist}</p>
                                            <p style={{ color: "#ff00e5" }}>{detail.nameOfSOng}</p>
                                        </div>

                                        <div>
                                            <p>{detail.duration}</p>
                                        </div>
                                    </div>
                                    <audio src={detail.audio} controls style={{ width: "100%" }} ></audio>
                                    <a href={detail.audio} style={{cursor:"pointer"}} >Download</a>
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