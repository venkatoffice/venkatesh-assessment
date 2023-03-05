import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { LocalStore } from '../../Store';
import Movie from '../Movie';
import MovieTickets from '../MovieTickets';

const ModalPopup = ({
    show,
    handleOnClose,
    handleOnSubmit,
    children,
    movie_name,
    show_time,
    theatre_name,
    bookedSeats,
    showName
}) => {
    const {movies} = useContext(LocalStore)
    const [bookingSeats, setBookingSeats] = useState([])
    const currentMovie = movies[movie_name] || {}

    const handleClose = () => {
        setBookingSeats([])
        handleOnClose && handleOnClose()
    }

    const handleOnChange = (ev) => {
        const {
            target: {
                id
            }
        } = ev
        const _seats = [...bookingSeats]
        const _index =  _seats.findIndex(el => el === Number(id))
        if(_index > -1) {
            _seats.splice(_index,1)
        } else {
            _seats.push(Number(id))
        }
        setBookingSeats(_seats)
    }

    const handleSubmit = () => {
        handleOnSubmit && handleOnSubmit({
            movie_name,
            show_time,
            date: new Date().toLocaleDateString(),
            theatre_name,
            booked_seats: bookingSeats,
        })
        setBookingSeats([])
    }
    return (<>
        <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{theatre_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <span>Show: {show_time}</span>
            <div className='row'>
                <div className='col-sm-4'>
                    <Movie 
                        {...currentMovie}
                    />
                </div>
                <div className='col-sm-6 mt-2'>
                    <MovieTickets 
                        numberOfRow={10}
                        perRow={10}
                        handleOnChange={handleOnChange}
                        bookedSeats={bookedSeats}
                        showName={showName}
                    />
                    <div>Selected Tickets: {bookingSeats.toString()}</div>
                </div>
                <div className='col-sm-2' style={{'margin':'auto'}}>
                    <Form.Check
                        checked={true}
                        disabled
                        label = 'Booked'
                        name="group1"
                        type='checkbox'
                        id='booked'
                    />
                    <Form.Check
                        disabled
                        label = 'Available'
                        name="group1"
                        type='checkbox'
                        id='available'
                    />
                </div>
            </div>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button disabled={bookingSeats.length === 0} variant="primary" onClick={handleSubmit}>
            Book
          </Button>
        </Modal.Footer>
      </Modal>
    </>)
}

export default ModalPopup