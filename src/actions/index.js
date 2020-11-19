// function that returns an object 
const eventsURL="http://localhost:3000/events"

//fetching event data 
//action creater function 
function fetchEvents(events) {
    return {
        type: "FETCHED_EVENTS", 
        payload: events 
    }
}

function fetchingEvents(){
    return (dispatch) => {
        fetch(eventsURL)
        .then(res => res.json())
        .then(events => {
            dispatch(fetchEvents(events))
        })
    }
}


export { fetchingEvents }