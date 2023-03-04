import React from "react";
import Form from 'react-bootstrap/Form';

const MovieTickets = ({
    numberOfRow = 0,
    perRow = 0,
    handleOnChange,
    bookedSeats,
    showName
}) => {
    const rows = Array(numberOfRow).fill('')
    const seats = Array(perRow).fill('')
    let seatCount = 0
    let _bookedSeats
    try {
        _bookedSeats = bookedSeats && JSON.parse(bookedSeats[`${showName}_booked_seats`]) || []
    } catch (err) {
        const [,val] = bookedSeats[`${showName}_booked_seats`].split('[,')
        _bookedSeats = JSON.parse(`[${val}`)
    }
    return(
        <Form>
            {
                rows.map((el,row) => 
                <div key={`inline-${row}`} className="mb-3">
                    {seats.map((el, ind) =>{
                           seatCount += 1
                           const booked = _bookedSeats?.includes(seatCount)
                           return <Form.Check
                                checked = {booked ? booked : undefined}
                                disabled={booked}
                                key={`${row}-${ind}`}
                                onChange={ev => handleOnChange && handleOnChange(ev)}
                                inline
                                name="group1"
                                type='checkbox'
                                id={seatCount}
                            />}
                        
                    )}
                    </div>
                )
            }
        </Form>
    )
}

export default MovieTickets