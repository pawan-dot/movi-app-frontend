import React from 'react'

import Rating from 'react-rating'
import StarsRating from 'stars-rating'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'



const MoviList = () => {
    const [allMoviData, setAllMoviData] = useState([])
    const [loading, setLoading] = useState(false)

    const ratingChanged = (newRating) => {
        console.log(newRating)
    }
    useEffect(() => {
        const getAllMoviData = async () => {
            setLoading(true)
            const res = await axios.get(`/movie`,

                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            // console.log(res.data.AllMoviData)
            setAllMoviData(res.data.AllMoviData)

            setLoading(false)

        }

        getAllMoviData()




    }, []);

    return (
        <>
            <div className="container d-flex frex-wrap justify-content-center">

                <div className="row d-flex frex-wrap justify-content-center">
                    {allMoviData && allMoviData.map(i =>
                        <>
                            {/* {console.log(i)} */}
                            <div className="col-lg-3 col-md-4 col-sm-12 p-2">
                                <div className="card p-1 m-3" style={{ width: "100%" }}>
                                    <img src={i?.posterUrl} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <div className="d-flex flex-wrap">
                                            <h5 className="card-title me-2">{i?.title}</h5>
                                            <small className="me-2">year {i?.year}</small>
                                        </div>
                                        <Rating initialRating={1} fractions={2} color2={'#ffd700'} />
                                        {/* <StarsRating
                                            count={5}
                                            // onChange={ratingChanged}
                                            size={27}
                                            color2={'#ffd700'} /> */}
                                        <p className="card-text">{i?.actors}</p>
                                    </div>
                                </div>
                            </div>
                        </>)}
                </div>

            </div></>

    )
}

export default MoviList