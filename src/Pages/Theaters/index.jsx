import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalPopup from "../../Molecules/ModalPopup";
import { apiService } from "../../Service";
import { LocalStore } from "../../Store";
import { createMovieObject } from "../../Utils";
import './index.scss'

const Theaters = () => {
    const [modalPopupData,setModalPopupData] = useState({})
    const {
        setMovies,
        theaters, setTheaters,
    } = useContext(LocalStore)

    const userMailId = window?.localStorage.getItem('user_mail_id') || 'venkat123@gmail.com'
    const fetchData = () => {
        apiService({
            method: 'POST',
            params: {
                action: 'getAllDetails',
                user_mail_id: userMailId
            }
        }).then(res => {
            const {
                data : {
                    movies,
                    theatre
                }
            } = res || {};
            setTheaters(theatre)
            setMovies(createMovieObject(movies))
        })
    }

    useEffect(() => {
        fetchData()
    },[])

    const getBookedSeats = (bSeats,sKey,sTime) => {
        const _details = bSeats?.find(el => el[sKey] === sTime)
        return _details
    }

    const handleOnClose = () => {
        setModalPopupData({})
    }

    const handleOnSubmit = (bData) => {
        const data = {
            ...bData,
            user_mail_id: userMailId
        }
        const params = {
            action: 'bookSeats'
        }
        apiService({
            method: 'POST',
            params,
            data
        })
        .then(res => {
            const {
                data: {
                    message
                }
            } = res
            toast(message,{position: "top-center",
            autoClose: 2000,})
            fetchData()
            setModalPopupData({})
        })
    }

    return(
        <div className="theaters container mt-2">
            <ToastContainer />
            <ModalPopup 
                handleOnClose={handleOnClose}
                handleOnSubmit={handleOnSubmit}
                {...modalPopupData}
            />
            <div className="row">
                {
                    theaters?.map((theater,ind) => <>
                        <div key={`col1-${ind}`} className="col-sm-4 border-bottom p-2"> 
                           <div className="theaters-title">
                            <span className="name">{theater?.theatre_name}</span>
                            <span className="rating">Rating: {theater?.customer_rating}</span>
                           </div>
                        </div>
                        <div key={`col2-${ind}`} className="col-sm-8 border-bottom show-container p-2 text-center">
                           <div onClick={ev => setModalPopupData({
                                show: true,
                                showName: 'show1',
                                show_time: theater?.show1_time,
                                movie_name: theater?.show1_movie,
                                theatre_name: theater?.theatre_name,
                                bookedSeats : getBookedSeats(theater?.booked_seats,'show1_time', theater?.show1_time)
                           })} className="p-1 border border-success rounded me-1">
                             <span>{theater?.show1_time}</span>
                             <span className="movie-name">{theater?.show1_movie}</span>
                           </div>
                           <div onClick={ev => setModalPopupData({
                                show: true,
                                showName: 'show2',
                                show_time: theater?.show2_time,
                                movie_name: theater?.show2_movie,
                                theatre_name: theater?.theatre_name,
                                bookedSeats : getBookedSeats(theater?.booked_seats,'show2_time', theater?.show2_time)
                           })} className="p-1 border border-success rounded me-1">
                             <span>{theater?.show2_time}</span>
                             <span className="movie-name">{theater?.show2_movie}</span>
                           </div>
                           <div onClick={ev => setModalPopupData({
                                show: true,
                                showName: 'show3',
                                show_time: theater?.show3_time,
                                movie_name: theater?.show3_movie,
                                theatre_name: theater?.theatre_name,
                                bookedSeats : getBookedSeats(theater?.booked_seats,'show3_time', theater?.show3_time)
                           })} className="p-1 border border-success rounded me-1">
                             <span>{theater?.show3_time}</span>
                             <span className="movie-name">{theater?.show3_movie}</span>
                           </div>
                           <div onClick={ev => setModalPopupData({
                                show: true,
                                showName: 'show4',
                                show_time: theater?.show4_time,
                                movie_name: theater?.show4_movie,
                                theatre_name: theater?.theatre_name,
                                bookedSeats : getBookedSeats(theater?.booked_seats,'show4_time', theater?.show4_time)
                           })} className="p-1 border border-success rounded">
                             <span>{theater?.show4_time}</span>
                             <span className="movie-name">{theater?.show4_movie}</span>
                           </div>
                        </div>
                    </>)
                }
                
            </div>
        </div>
    )
}

export default Theaters