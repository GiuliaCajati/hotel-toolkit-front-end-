import React, { useEffect }  from 'react'
import { useSelector, useDispatch } from 'react-redux'

function EventsList() {
    const events = useSelector(state => state.events)
    let index
    
    //List of events 
    let eventsList = events.map(event => {
        //debugger
        { index = event.date_info.length - 1}
        return<li key={event.id}>
            <h2>{event.name}</h2>
            <li> Event Size: {event.number_of_attendees}</li> 
            <li> Arrival Date:  {event.date_info[0].date} </li>
            <li> Departure Date: {event.date_info[index].date} </li>
        </li>})

    return(
        <div className="Welcome">
            <ul>{eventsList}</ul>
        </div>
    )

}
export default EventsList;