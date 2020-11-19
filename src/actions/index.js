


export const  FETCHED_EVENTS = "FETCHED_EVENTS"

const eventsURL="http://localhost:3000/events"

export const fetchingEvents = () => {
    return (dispatch) => {
        fetch(eventsURL)
        .then(res => res.json())
        .then(events => {
            dispatch({
                    type: "FETCHED_EVENTS", 
                    payload: events 
            })
        })
    }
}



