import React, { useContext, useEffect, useState } from "react";
import Movie from "../../Molecules/Movie";
import { apiService } from "../../Service";
import { LocalStore } from "../../Store";

const Movies = () => {
    const {
        movies, setMovies,
        theaters, setTheaters
    } = useContext(LocalStore)
    useEffect(() => {
        apiService({
            method: 'POST',
            params: {
                action: 'getAllDetails',
                user_mail_id: 'dlvenkat94@gmail.com'
            }
        }).then(res => {
            const {
                data : {
                    movies,
                    theatre
                }
            } = res || {};
            setMovies(movies)
            setTheaters(theatre)
        })
        

    },[])

    return <>
        <div className="container">
            <div className="row">
                {
                    movies?.map((el) => 
                        <div className="col-sm-3">
                            <Movie {...el} />
                        </div>
                    )
                }
            </div> 
        </div> 
        
    </>
}

export default Movies